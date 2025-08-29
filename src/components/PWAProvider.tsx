"use client";

import { useEffect, useState, useCallback } from "react";

// Type declarations for Background Sync API
declare global {
  interface ServiceWorkerRegistration {
    sync?: SyncManager;
  }
  
  interface SyncManager {
    register(tag: string): Promise<void>;
    getTags(): Promise<string[]>;
  }
}

interface PWAProviderProps {
  children: React.ReactNode;
}

export default function PWAProvider({ children }: PWAProviderProps) {
  const [isClient, setIsClient] = useState(false);
  const [userHasInteracted, setUserHasInteracted] = useState(false);
  const [notificationPermissionRequested, setNotificationPermissionRequested] =
    useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Track user interaction to gate notification prompts
  const handleUserInteraction = useCallback(() => {
    if (!userHasInteracted) {
      setUserHasInteracted(true);
      console.log(
        "[PWA] User interaction detected - notifications can now be requested"
      );
    }
  }, [userHasInteracted]);

  useEffect(() => {
    if (!isClient) return;

    // Add event listeners to track user interaction
    const interactionEvents = ["click", "touchstart", "keydown", "scroll"];

    interactionEvents.forEach((event) => {
      document.addEventListener(event, handleUserInteraction, {
        once: true,
        passive: true,
      });
    });

    return () => {
      interactionEvents.forEach((event) => {
        document.removeEventListener(event, handleUserInteraction);
      });
    };
  }, [isClient, handleUserInteraction]);

  // Request notification permission only after user interaction
  const requestNotificationPermission = useCallback(async () => {
    if (!userHasInteracted || notificationPermissionRequested) {
      return;
    }

    if ("Notification" in window && Notification.permission === "default") {
      setNotificationPermissionRequested(true);

      try {
        const permission = await Notification.requestPermission();
        console.log("[PWA] Notification permission:", permission);

        if (permission === "granted") {
          // Optional: Show a welcome notification
          new Notification("Pure Wash", {
            body: "سنرسل لك إشعارات حول خدماتنا الجديدة والعروض الخاصة",
            icon: "/icons/icon-192x192.png",
            badge: "/icons/icon-72x72.png",
            tag: "welcome",
            requireInteraction: false,
            silent: false,
          });
        }
      } catch (error) {
        console.error("[PWA] Error requesting notification permission:", error);
      }
    }
  }, [userHasInteracted, notificationPermissionRequested]);

  useEffect(() => {
    if (!isClient) return;

    // Service Worker registration
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js")
        .then((registration) => {
          console.log("[PWA] SW registered:", registration);

          // Check for updates
          registration.addEventListener("updatefound", () => {
            const newWorker = registration.installing;
            if (newWorker) {
              newWorker.addEventListener("statechange", () => {
                if (
                  newWorker.state === "installed" &&
                  navigator.serviceWorker.controller
                ) {
                  // New update available - only show if user has interacted
                  if (userHasInteracted) {
                    if (
                      confirm("تحديث جديد متاح! هل تريد إعادة تحميل الصفحة؟")
                    ) {
                      window.location.reload();
                    }
                  }
                }
              });
            }
          });

          // Request notifications only after user interaction and SW is ready
          navigator.serviceWorker.ready.then(() => {
            if (userHasInteracted) {
              setTimeout(() => {
                requestNotificationPermission();
              }, 2000); // Wait 2 seconds after interaction
            }
          });
        })
        .catch((registrationError) => {
          console.error("[PWA] SW registration failed:", registrationError);
        });

      // Listen for messages from service worker
      navigator.serviceWorker.addEventListener("message", (event) => {
        if (event.data && event.data.type === "CACHE_UPDATED") {
          console.log("[PWA] Cache updated:", event.data.payload);
        }
      });
    }

    // Handle online/offline status
    const handleOnline = () => {
      console.log("[PWA] App is online");
      // Sync any pending data when back online
      if ("serviceWorker" in navigator) {
        navigator.serviceWorker.ready.then(() => {
          console.log("[PWA] Service worker ready - app is back online");
          // Trigger background sync if available
          navigator.serviceWorker.ready
            .then((registration) => {
              if ("sync" in registration && registration.sync) {
                return registration.sync.register("background-sync");
              }
            })
            .catch((error) => {
              console.log("[PWA] Background sync not supported:", error);
            });
        });
      }
    };

    const handleOffline = () => {
      console.log("[PWA] App is offline");
      // Show offline indicator if needed
      // You can dispatch a custom event here to show offline toast
      window.dispatchEvent(new CustomEvent("app-offline"));
    };

    // Handle app visibility changes
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible" && userHasInteracted) {
        // App became visible and user has interacted - good time for notifications
        if (!notificationPermissionRequested) {
          setTimeout(() => {
            requestNotificationPermission();
          }, 1000);
        }
      }
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [isClient, userHasInteracted, notificationPermissionRequested, requestNotificationPermission]);

  // Effect to handle notification permission request after user interaction
  useEffect(() => {
    if (userHasInteracted && !notificationPermissionRequested) {
      // Wait a bit after first interaction before requesting notifications
      const timer = setTimeout(() => {
        requestNotificationPermission();
      }, 3000); // 3 seconds after first interaction

      return () => clearTimeout(timer);
    }
  }, [
    userHasInteracted,
    notificationPermissionRequested,
    requestNotificationPermission,
  ]);

  return <>{children}</>;
}
