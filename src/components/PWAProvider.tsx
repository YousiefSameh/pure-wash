'use client';

import { useEffect, useState } from 'react';

interface PWAProviderProps {
  children: React.ReactNode;
}

export default function PWAProvider({ children }: PWAProviderProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => {
          console.log('SW registered: ', registration);
          
          // Check for updates
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  // New update available
                  if (confirm('تحديث جديد متاح! هل تريد إعادة تحميل الصفحة؟')) {
                    window.location.reload();
                  }
                }
              });
            }
          });
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError);
        });

      // Listen for messages from service worker
      navigator.serviceWorker.addEventListener('message', (event) => {
        if (event.data && event.data.type === 'CACHE_UPDATED') {
          console.log('Cache updated:', event.data.payload);
        }
      });
    }

    // Request notification permission
    if ('Notification' in window && Notification.permission === 'default') {
      setTimeout(() => {
        Notification.requestPermission().then((permission) => {
          console.log('Notification permission:', permission);
        });
      }, 10000); // Ask after 10 seconds
    }

    // Handle online/offline status
    const handleOnline = () => {
      console.log('App is online');
      // Sync any pending data when back online
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.ready.then((registration) => {
          console.log('Service worker ready - app is back online');
          // Trigger cache cleanup via message instead of setInterval
          if (registration.active) {
            registration.active.postMessage({ type: 'CLEANUP_CACHE' });
          }
        });
      }
    };

    const handleOffline = () => {
      console.log('App is offline');
      // Show offline indicator if needed
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Set up periodic cache cleanup using requestIdleCallback for better performance
    let cleanupTimeoutId: NodeJS.Timeout;
    const scheduleCleanup = () => {
      cleanupTimeoutId = setTimeout(() => {
        if ('serviceWorker' in navigator) {
          navigator.serviceWorker.ready.then((registration) => {
            if (registration.active) {
              registration.active.postMessage({ type: 'CLEANUP_CACHE' });
            }
          });
        }
        scheduleCleanup(); // Schedule next cleanup
      }, 300000); // Every 5 minutes
    };
    
    // Start cleanup cycle
    scheduleCleanup();

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      if (cleanupTimeoutId) {
        clearTimeout(cleanupTimeoutId);
      }
    };
  }, [isClient]);

  return <>{children}</>;
}
