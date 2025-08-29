const STATIC_CACHE_NAME = 'pure-wash-static-v1';
const DYNAMIC_CACHE_NAME = 'pure-wash-dynamic-v1';
const IMAGES_CACHE_NAME = 'pure-wash-images-v1';
const FONTS_CACHE_NAME = 'pure-wash-fonts-v1';
const API_CACHE_NAME = 'pure-wash-api-v1';

// Assets to cache immediately
const STATIC_ASSETS = [
  '/',
  '/offline', // Add offline fallback page
  '/manifest.json',
  '/favicon.ico',
  '/logo.png',
  '/hero-car.png',
  '/cta-car.png',
  '/car-wash.png',
  '/car-service.png',
  '/vehical.png',
  '/customer-success.png',
  '/time.png',
  '/reward.png',
  '/check.svg',
  '/phone.svg',
  '/heading-special-arrow-down.svg',
  '/hero-background-overlay.svg'
];

// Install event - cache static assets and enable navigation preload
self.addEventListener('install', (event) => {
  console.log('[SW] Installing service worker...');
  event.waitUntil(
    Promise.all([
      // Cache static assets
      caches.open(STATIC_CACHE_NAME)
        .then((cache) => {
          console.log('[SW] Caching static assets');
          return cache.addAll(STATIC_ASSETS);
        })
        .then(() => {
          console.log('[SW] Static assets cached successfully');
        })
        .catch((error) => {
          console.error('[SW] Failed to cache static assets:', error);
        }),
      
      // Enable navigation preload if supported
      self.registration.navigationPreload ? 
        self.registration.navigationPreload.enable().then(() => {
          console.log('[SW] Navigation preload enabled');
        }).catch((error) => {
          console.log('[SW] Navigation preload not supported:', error);
        }) : 
        Promise.resolve()
    ]).then(() => {
      return self.skipWaiting();
    })
  );
});

// Activate event - clean up old caches and claim clients
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating service worker...');
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (![STATIC_CACHE_NAME, DYNAMIC_CACHE_NAME, IMAGES_CACHE_NAME, FONTS_CACHE_NAME, API_CACHE_NAME].includes(cacheName)) {
              console.log('[SW] Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('[SW] Service worker activated');
        return self.clients.claim();
      })
  );
});

// Enhanced fetch event with runtime caching strategies
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Handle different request types with appropriate caching strategies
  event.respondWith(handleFetchWithStrategy(request, url));
});

// Runtime caching implementation with different strategies
async function handleFetchWithStrategy(request, url) {
  try {
    // 1. CACHE_FIRST Strategy - Fonts and external CDN resources
    if (isFontRequest(url) || isCDNRequest(url)) {
      return await cacheFirstStrategy(request, FONTS_CACHE_NAME);
    }

    // 2. STALE_WHILE_REVALIDATE Strategy - Images and static assets
    if (isImageRequest(url) || isStaticAsset(url)) {
      return await staleWhileRevalidateStrategy(request, IMAGES_CACHE_NAME);
    }

    // 3. NETWORK_FIRST Strategy - API calls
    if (isAPIRequest(url)) {
      return await networkFirstStrategy(request, API_CACHE_NAME, 5000); // 5s timeout
    }

    // 4. NETWORK_FIRST Strategy - Pages and navigation requests
    if (isNavigationRequest(request) || isPageRequest(url)) {
      return await networkFirstStrategy(request, DYNAMIC_CACHE_NAME, 3000); // 3s timeout
    }

    // Default: try cache first, then network
    return await cacheFirstWithNetworkFallback(request);

  } catch (error) {
    console.error('[SW] Fetch strategy failed:', error);
    return await getOfflineFallback(request);
  }
}

// CacheFirst Strategy - Check cache first, then network
async function cacheFirstStrategy(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cachedResponse = await cache.match(request);
  
  if (cachedResponse) {
    console.log('[SW] CacheFirst - Serving from cache:', request.url);
    return cachedResponse;
  }

  console.log('[SW] CacheFirst - Fetching from network:', request.url);
  const networkResponse = await fetch(request);
  
  if (networkResponse.status === 200) {
    cache.put(request, networkResponse.clone());
  }
  
  return networkResponse;
}

// NetworkFirst Strategy - Try network first with timeout, fallback to cache
async function networkFirstStrategy(request, cacheName, timeout = 3000) {
  const cache = await caches.open(cacheName);
  
  try {
    // Use navigation preload if available for navigation requests
    let networkResponse;
    if (isNavigationRequest(request) && self.registration.navigationPreload) {
      const preloadResponse = await event.preloadResponse;
      networkResponse = preloadResponse || await fetchWithTimeout(request, timeout);
    } else {
      networkResponse = await fetchWithTimeout(request, timeout);
    }

    if (networkResponse.status === 200) {
      console.log('[SW] NetworkFirst - Caching network response:', request.url);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    console.log('[SW] NetworkFirst - Network failed, trying cache:', request.url);
    const cachedResponse = await cache.match(request);
    
    if (cachedResponse) {
      return cachedResponse;
    }
    
    throw error;
  }
}

// StaleWhileRevalidate Strategy - Serve from cache, update in background
async function staleWhileRevalidateStrategy(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cachedResponse = await cache.match(request);
  
  // Always try to update cache in background
  const networkUpdate = fetch(request).then(response => {
    if (response.status === 200) {
      cache.put(request, response.clone());
    }
    return response;
  }).catch(error => {
    console.log('[SW] StaleWhileRevalidate - Background update failed:', error);
  });

  // Return cached version immediately if available
  if (cachedResponse) {
    console.log('[SW] StaleWhileRevalidate - Serving from cache:', request.url);
    return cachedResponse;
  }

  // Wait for network if no cached version
  console.log('[SW] StaleWhileRevalidate - No cache, waiting for network:', request.url);
  return await networkUpdate;
}

// Cache first with network fallback for unclassified requests
async function cacheFirstWithNetworkFallback(request) {
  const cachedResponse = await caches.match(request);
  
  if (cachedResponse) {
    return cachedResponse;
  }

  const networkResponse = await fetch(request);
  
  if (networkResponse.status === 200) {
    const cache = await caches.open(DYNAMIC_CACHE_NAME);
    cache.put(request, networkResponse.clone());
  }
  
  return networkResponse;
}

// Offline fallback handler
async function getOfflineFallback(request) {
  // For navigation requests, return offline page
  if (isNavigationRequest(request)) {
    const offlinePage = await caches.match('/offline');
    if (offlinePage) {
      return offlinePage;
    }
    
    // Fallback to homepage if offline page not cached
    const homePage = await caches.match('/');
    if (homePage) {
      return homePage;
    }
  }

  // For image requests, return placeholder if available
  if (isImageRequest(new URL(request.url))) {
    const placeholder = await caches.match('/images/offline-placeholder.png');
    if (placeholder) {
      return placeholder;
    }
  }

  // Default offline response
  return new Response('Offline - Pure Wash Service', {
    status: 200,
    statusText: 'OK',
    headers: { 
      'Content-Type': 'text/plain',
      'Cache-Control': 'no-cache'
    }
  });
}

// Helper functions to identify request types
function isNavigationRequest(request) {
  return request.mode === 'navigate';
}

function isImageRequest(url) {
  return /\.(png|jpg|jpeg|svg|gif|webp|avif|ico|bmp|tiff)$/i.test(url.pathname);
}

function isFontRequest(url) {
  return /fonts\.(googleapis|gstatic)\.com/.test(url.hostname) || 
         /\.(woff|woff2|ttf|eot|otf)$/i.test(url.pathname);
}

function isCDNRequest(url) {
  return /cdn\.|jsdelivr\.net|unpkg\.com|cdnjs\.cloudflare\.com/.test(url.hostname);
}

function isAPIRequest(url) {
  return url.pathname.startsWith('/api/');
}

function isPageRequest(url) {
  return url.origin === self.location.origin && 
         !url.pathname.startsWith('/api/') && 
         !isImageRequest(url) && 
         !isStaticAsset(url);
}

function isStaticAsset(url) {
  return /\.(js|css|json)$/i.test(url.pathname);
}

// Fetch with timeout utility
function fetchWithTimeout(request, timeout) {
  return Promise.race([
    fetch(request),
    new Promise((_, reject) => 
      setTimeout(() => reject(new Error('Network timeout')), timeout)
    )
  ]);
}

// Background sync for form submissions
self.addEventListener('sync', (event) => {
  console.log('[SW] Background sync triggered:', event.tag);
  
  if (event.tag === 'booking-sync') {
    event.waitUntil(syncBookings());
  }
});

// Push notifications (unchanged)
self.addEventListener('push', (event) => {
  console.log('[SW] Push notification received');
  
  const options = {
    body: event.data ? event.data.text() : 'خدمة جديدة متاحة!',
    icon: '/icons/icon-192x192.png',
    badge: '/icons/icon-72x72.png',
    vibrate: [200, 100, 200],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'تصفح الخدمات',
        icon: '/icons/shortcut-services.png'
      },
      {
        action: 'close',
        title: 'إغلاق',
        icon: '/icons/icon-72x72.png'
      }
    ]
  };

  event.waitUntil(
    self.registration.showNotification('Pure Wash', options)
  );
});

// Notification click handler (unchanged)
self.addEventListener('notificationclick', (event) => {
  console.log('[SW] Notification clicked:', event.action);
  
  event.notification.close();

  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/?section=services')
    );
  } else if (event.action === 'close') {
    return;
  } else {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

// Helper function to sync bookings (unchanged)
async function syncBookings() {
  try {
    console.log('[SW] Syncing offline bookings...');
    return Promise.resolve();
  } catch (error) {
    console.error('[SW] Booking sync failed:', error);
    throw error;
  }
}

// Enhanced cache size management with different limits per cache
async function limitCacheSize(cacheName, maxItems) {
  const cache = await caches.open(cacheName);
  const keys = await cache.keys();
  
  if (keys.length > maxItems) {
    const keysToDelete = keys.slice(0, keys.length - maxItems);
    await Promise.all(keysToDelete.map(key => cache.delete(key)));
    console.log(`[SW] Cleaned ${keysToDelete.length} items from ${cacheName}`);
  }
}

// Periodic cache cleanup with different limits - using message-based approach for security
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'CLEANUP_CACHE') {
    Promise.all([
      limitCacheSize(DYNAMIC_CACHE_NAME, 50),
      limitCacheSize(IMAGES_CACHE_NAME, 100),
      limitCacheSize(API_CACHE_NAME, 25),
      limitCacheSize(FONTS_CACHE_NAME, 10)
    ]).then(() => {
      console.log('[SW] Cache cleanup completed');
    }).catch(error => {
      console.error('[SW] Cache cleanup failed:', error);
    });
  }
});