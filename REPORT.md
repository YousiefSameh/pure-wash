# Next.js + MUI Audit Report

## 📊 Executive Summary

**Overall Score:** 81/100 (B)

**Project Status:** 🟡 Good - Minor Issues to Fix

**Audit Date:** ٢٧‏/٨‏/٢٠٢٥

**Total Files Scanned:** 19

**Total Issues Found:** 193

**Critical Issues:** 20

---

## 🎯 Category Breakdown

| Category | Score | Weight | Status |
|----------|-------|--------|--------|
| Next.js Architecture | 83/100 | 14 | 🟡 |
| MUI Usage | 55/100 | 14 | ⚫ |
| Accessibility | 70/100 | 8 | 🟠 |
| Responsive Design | 70/100 | 8 | 🟠 |
| Performance | 90/100 | 8 | 🟢 |
| Security | 90/100 | 8 | 🟢 |
| Code Quality | 65/100 | 10 | 🔴 |
| Testing | 0/100 | 6 | ⚫ |
| SEO | 0/100 | 8 | ⚫ |
| Image Optimization | 0/100 | 6 | ⚫ |
| Modern Practices | 0/100 | 4 | ⚫ |
| PWA Essentials | 100/100 | 6 | 🟢 |


---

## 🚨 Top Issues to Fix

| File | Line:Col | Category | Severity | Issue |
|------|----------|----------|----------|-------|
| [``]() | undefined:undefined | Accessibility | 🔴 Error | Interactive elements must be keyboard accessible |
| [``]() | undefined:undefined | Security | 🔴 Error | Unsafe eval() usage detected |
| [``]() | undefined:undefined | Pwa | 🔴 Error | Missing theme-color meta tag |
| [``]() | undefined:undefined | Pwa | 🔴 Error | next-pwa not configured in next.config.js |
| [``]() | undefined:undefined | Pwa | 🔴 Error | No runtime caching strategy configured |
| [``]() | undefined:undefined | Pwa | 🔴 Error | Offline fallback route not configured |
| [``]() | undefined:undefined | Nextjs | 🔴 Error | SSR hydration mismatch detected - non-deterministic values i... |
| [``]() | undefined:undefined | Security | 🔴 Error | Security headers function not configured |
| [``]() | undefined:undefined | Seo | 🔴 Error | Missing page title tag |
| [``]() | undefined:undefined | Mui | 🟡 Warning | Hardcoded colors and spacing detected - use theme tokens ins... |


---

## 📁 File-by-File Analysis

| File | Score | Issues | Critical |
|------|-------|--------|----------|
| [`next.config.ts`](next.config.ts) | ⚫ 32/100 | 5 | 4 |
| [`public\sw.js`](public\sw.js) | ⚫ 0/100 | 26 | 6 |
| [`src\lib\theme.ts`](src\lib\theme.ts) | ⚫ 0/100 | 22 | 0 |
| [`src\components\PWAProvider.tsx`](src\components\PWAProvider.tsx) | ⚫ 0/100 | 15 | 1 |
| [`src\components\PWAInstallPrompt.tsx`](src\components\PWAInstallPrompt.tsx) | ⚫ 0/100 | 18 | 3 |
| [`src\app\page.tsx`](src\app\page.tsx) | 🟡 84/100 | 2 | 0 |
| [`src\app\layout.tsx`](src\app\layout.tsx) | ⚫ 0/100 | 22 | 3 |
| [`src\components\ui\Button.tsx`](src\components\ui\Button.tsx) | ⚫ 0/100 | 20 | 0 |
| [`src\components\shared\SpecialHeading.tsx`](src\components\shared\SpecialHeading.tsx) | 🟡 84/100 | 2 | 0 |
| [`src\components\shared\Navbar.tsx`](src\components\shared\Navbar.tsx) | ⚫ 0/100 | 11 | 3 |
| [`src\components\shared\Footer.tsx`](src\components\shared\Footer.tsx) | 🔴 68/100 | 4 | 0 |
| [`src\components\shared\Card.tsx`](src\components\shared\Card.tsx) | ⚫ 52/100 | 6 | 0 |
| [`src\components\providers\ThemeProvider.tsx`](src\components\providers\ThemeProvider.tsx) | 🟡 84/100 | 2 | 0 |
| [`src\components\home\WhyPureWash.tsx`](src\components\home\WhyPureWash.tsx) | 🔴 68/100 | 4 | 0 |
| [`src\components\home\Subscription.tsx`](src\components\home\Subscription.tsx) | 🟠 76/100 | 3 | 0 |
| [`src\components\home\Services.tsx`](src\components\home\Services.tsx) | 🔴 68/100 | 4 | 0 |
| [`src\components\home\Hero.tsx`](src\components\home\Hero.tsx) | ⚫ 20/100 | 10 | 0 |
| [`src\components\home\FuturePlans.tsx`](src\components\home\FuturePlans.tsx) | 🔴 60/100 | 5 | 0 |
| [`src\components\home\CallToAction.tsx`](src\components\home\CallToAction.tsx) | ⚫ 44/100 | 7 | 0 |
| [`public/`](public/) | 🟡 80/100 | 5 | 0 |


---

## 🔍 Issue Details by Category

### Pwa

| File | Line:Col | Category | Severity | Issue | Suggestion |
|------|----------|----------|----------|-------|------------|
| [`next.config.ts`](next.config.ts) | 1:1 | Pwa | 🔴 Error | next-pwa not configured in next.config.js | Install and configure next-pwa with withPWA() wrapper |
| [`next.config.ts`](next.config.ts) | 1:1 | Pwa | 🔴 Error | No runtime caching strategy configured | Configure runtimeCaching with NetworkFirst, CacheFirst, and ... |
| [`next.config.ts`](next.config.ts) | 1:1 | Pwa | 🔴 Error | Offline fallback route not configured | Add offline fallback route: fallbacks: { document: "/offline... |
| [`public\sw.js`](public\sw.js) | 1:1 | Pwa | 🔴 Error | No runtime caching strategy configured | Configure runtimeCaching with NetworkFirst, CacheFirst, and ... |
| [`public\sw.js`](public\sw.js) | 1:1 | Pwa | 🔴 Error | Offline fallback route not configured | Add offline fallback route: fallbacks: { document: "/offline... |
| [`src\app\layout.tsx`](src\app\layout.tsx) | 1:1 | Pwa | 🔴 Error | Missing theme-color meta tag | Add <meta name="theme-color" content="#your-color"> |
| [`src\app\layout.tsx`](src\app\layout.tsx) | 1:1 | Pwa | 🔴 Error | Missing manifest link tag | Add <link rel="manifest" href="/manifest.json"> |
| [`next.config.ts`](next.config.ts) | 1:1 | Pwa | 🟡 Warning | No runtime caching strategy configured | Add runtimeCaching strategies for offline functionality |
| [`public\sw.js`](public\sw.js) | 1:1 | Pwa | 🟡 Warning | Navigation preload not enabled | Enable navigation preload for faster page transitions: regis... |
| [`src\components\PWAProvider.tsx`](src\components\PWAProvider.tsx) | 1:1 | Pwa | 🟡 Warning | Notification prompt without user interaction | Gate notification prompts behind user interaction, not on fi... |
| [`src\app\layout.tsx`](src\app\layout.tsx) | 1:1 | Pwa | 🟡 Warning | Missing color-scheme meta tag | Add <meta name="color-scheme" content="light dark"> |
| [``]() | 1:1 | Pwa | 🟡 Warning | Maskable icon not found | Add a 512x512 maskable icon with proper naming (e.g., maskab... |

---

### 📄 [`next.config.ts`](next.config.ts)

| Line:Col | Category | Severity | Issue | Suggestion |
|----------|----------|----------|-------|------------|
| 1:1 | Pwa | 🔴 Error | next-pwa not configured in next.config.js | Install and configure next-pwa with withPWA() wrapper |
| 1:1 | Pwa | 🟡 Warning | No runtime caching strategy configured | Add runtimeCaching strategies for offline functionality |
| 1:1 | Pwa | 🔴 Error | No runtime caching strategy configured | Configure runtimeCaching with NetworkFirst, CacheFirst, and StaleWhileRevalidate... |
| 1:1 | Pwa | 🔴 Error | Offline fallback route not configured | Add offline fallback route: fallbacks: { document: "/offline" } |

### 📄 [`public\sw.js`](public\sw.js)

| Line:Col | Category | Severity | Issue | Suggestion |
|----------|----------|----------|-------|------------|
| 1:1 | Pwa | 🔴 Error | No runtime caching strategy configured | Configure runtimeCaching with NetworkFirst, CacheFirst, and StaleWhileRevalidate... |
| 1:1 | Pwa | 🟡 Warning | Navigation preload not enabled | Enable navigation preload for faster page transitions: registration.navigationPr... |
| 1:1 | Pwa | 🔴 Error | Offline fallback route not configured | Add offline fallback route: fallbacks: { document: "/offline" } |

### 📄 [`src\components\PWAProvider.tsx`](src\components\PWAProvider.tsx)

| Line:Col | Category | Severity | Issue | Suggestion |
|----------|----------|----------|-------|------------|
| 1:1 | Pwa | 🟡 Warning | Notification prompt without user interaction | Gate notification prompts behind user interaction, not on first paint |

### 📄 [`src\app\layout.tsx`](src\app\layout.tsx)

| Line:Col | Category | Severity | Issue | Suggestion |
|----------|----------|----------|-------|------------|
| 1:1 | Pwa | 🔴 Error | Missing theme-color meta tag | Add <meta name="theme-color" content="#your-color"> |
| 1:1 | Pwa | 🔴 Error | Missing manifest link tag | Add <link rel="manifest" href="/manifest.json"> |
| 1:1 | Pwa | 🟡 Warning | Missing color-scheme meta tag | Add <meta name="color-scheme" content="light dark"> |

### 📄 [`public/`](public/)

| Line:Col | Category | Severity | Issue | Suggestion |
|----------|----------|----------|-------|------------|
| 1:1 | Pwa | 🟡 Warning | Maskable icon not found | Add a 512x512 maskable icon with proper naming (e.g., maskable-512.png) |

### Security

| File | Line:Col | Category | Severity | Issue | Suggestion |
|------|----------|----------|----------|-------|------------|
| [`next.config.ts`](next.config.ts) | 1:1 | Security | 🔴 Error | Security headers function not configured | Add async headers() function with security headers |
| [`src\components\PWAInstallPrompt.tsx`](src\components\PWAInstallPrompt.tsx) | 39:7 | Security | 🔴 Error | Unsafe eval() usage detected | Avoid eval() and use safer alternatives |
| [`src\components\PWAProvider.tsx`](src\components\PWAProvider.tsx) | 53:7 | Security | 🔴 Error | Unsafe eval() usage detected | Avoid eval() and use safer alternatives |
| [`public\sw.js`](public\sw.js) | 213:1 | Security | 🔴 Error | Unsafe eval() usage detected | Avoid eval() and use safer alternatives |

---

### 📄 [`next.config.ts`](next.config.ts)

| Line:Col | Category | Severity | Issue | Suggestion |
|----------|----------|----------|-------|------------|
| 1:1 | Security | 🔴 Error | Security headers function not configured | Add async headers() function with security headers |

### 📄 [`public\sw.js`](public\sw.js)

| Line:Col | Category | Severity | Issue | Suggestion |
|----------|----------|----------|-------|------------|
| 213:1 | Security | 🔴 Error | Unsafe eval() usage detected | Avoid eval() and use safer alternatives |

### 📄 [`src\components\PWAProvider.tsx`](src\components\PWAProvider.tsx)

| Line:Col | Category | Severity | Issue | Suggestion |
|----------|----------|----------|-------|------------|
| 53:7 | Security | 🔴 Error | Unsafe eval() usage detected | Avoid eval() and use safer alternatives |

### 📄 [`src\components\PWAInstallPrompt.tsx`](src\components\PWAInstallPrompt.tsx)

| Line:Col | Category | Severity | Issue | Suggestion |
|----------|----------|----------|-------|------------|
| 39:7 | Security | 🔴 Error | Unsafe eval() usage detected | Avoid eval() and use safer alternatives |

### Nextjs

| File | Line:Col | Category | Severity | Issue | Suggestion |
|------|----------|----------|----------|-------|------------|
| [`public\sw.js`](public\sw.js) | 145:22 | Nextjs | 🔴 Error | SSR hydration mismatch detected - non-deterministic values i... | Use stable values for SSR or move non-deterministic logic to... |
| [`public\sw.js`](public\sw.js) | 145:16 | Nextjs | 🔴 Error | Date.now() detected - this causes SSR hydration mismatches | Use a stable timestamp or move to useEffect for client-side ... |
| [`src\components\ui\Button.tsx`](src\components\ui\Button.tsx) | 1:1 | Nextjs | 🟡 Warning | Unnecessary "use client" directive detected | Remove "use client" if component doesn't need client-side fe... |
| [`src\components\ui\Button.tsx`](src\components\ui\Button.tsx) | 1:1 | Nextjs | 🟡 Warning | Unnecessary "use client" directive | Remove "use client" directive as component doesn't use clien... |
| [`src\components\shared\Navbar.tsx`](src\components\shared\Navbar.tsx) | 1:1 | Nextjs | 🟡 Warning | Unnecessary "use client" directive detected | Remove "use client" if component doesn't need client-side fe... |

---

### 📄 [`public\sw.js`](public\sw.js)

| Line:Col | Category | Severity | Issue | Suggestion |
|----------|----------|----------|-------|------------|
| 145:22 | Nextjs | 🔴 Error | SSR hydration mismatch detected - non-deterministic values in server-rendered co... | Use stable values for SSR or move non-deterministic logic to useEffect for clien... |
| 145:16 | Nextjs | 🔴 Error | Date.now() detected - this causes SSR hydration mismatches | Use a stable timestamp or move to useEffect for client-side only rendering |

### 📄 [`src\components\ui\Button.tsx`](src\components\ui\Button.tsx)

| Line:Col | Category | Severity | Issue | Suggestion |
|----------|----------|----------|-------|------------|
| 1:1 | Nextjs | 🟡 Warning | Unnecessary "use client" directive detected | Remove "use client" if component doesn't need client-side features |
| 1:1 | Nextjs | 🟡 Warning | Unnecessary "use client" directive | Remove "use client" directive as component doesn't use client-side features |

### 📄 [`src\components\shared\Navbar.tsx`](src\components\shared\Navbar.tsx)

| Line:Col | Category | Severity | Issue | Suggestion |
|----------|----------|----------|-------|------------|
| 1:1 | Nextjs | 🟡 Warning | Unnecessary "use client" directive detected | Remove "use client" if component doesn't need client-side features |

### Quality

| File | Line:Col | Category | Severity | Issue | Suggestion |
|------|----------|----------|----------|-------|------------|
| [`public\sw.js`](public\sw.js) | 1:1 | Quality | 🟡 Warning | File is too large (216 lines) | Split large file into smaller, focused modules |
| [`src\app\layout.tsx`](src\app\layout.tsx) | 1:1 | Quality | 🟡 Warning | Missing error boundary implementation | Implement error boundaries to gracefully handle component er... |
| [`src\components\shared\SpecialHeading.tsx`](src\components\shared\SpecialHeading.tsx) | 5:16 | Quality | 🟡 Warning | Function is too complex (high cyclomatic complexity) |  |
| [`src\components\shared\SpecialHeading.tsx`](src\components\shared\SpecialHeading.tsx) | 5:1 | Quality | 🟡 Warning | Function 'SpecialHeading' should have explicit return type | Add return type annotation: function funcName(): ReturnType |
| [`src\components\shared\Footer.tsx`](src\components\shared\Footer.tsx) | 5:16 | Quality | 🟡 Warning | Function is too complex (high cyclomatic complexity) |  |
| [`src\components\shared\Footer.tsx`](src\components\shared\Footer.tsx) | 5:1 | Quality | 🟡 Warning | Function 'Footer' should have explicit return type | Add return type annotation: function funcName(): ReturnType |
| [`src\components\shared\Card.tsx`](src\components\shared\Card.tsx) | 5:16 | Quality | 🟡 Warning | Function is too complex (high cyclomatic complexity) |  |
| [`src\components\shared\Card.tsx`](src\components\shared\Card.tsx) | 5:1 | Quality | 🟡 Warning | Function 'Card' should have explicit return type | Add return type annotation: function funcName(): ReturnType |
| [`src\components\home\Hero.tsx`](src\components\home\Hero.tsx) | 6:16 | Quality | 🟡 Warning | Function is too complex (high cyclomatic complexity) |  |
| [`src\components\home\Hero.tsx`](src\components\home\Hero.tsx) | 6:1 | Quality | 🟡 Warning | Function 'HeroSection' should have explicit return type | Add return type annotation: function funcName(): ReturnType |
| [`src\components\home\CallToAction.tsx`](src\components\home\CallToAction.tsx) | 6:16 | Quality | 🟡 Warning | Function is too complex (high cyclomatic complexity) |  |
| [`src\components\providers\ThemeProvider.tsx`](src\components\providers\ThemeProvider.tsx) | 7:16 | Quality | 🟡 Warning | Function is too complex (high cyclomatic complexity) |  |
| [`src\components\providers\ThemeProvider.tsx`](src\components\providers\ThemeProvider.tsx) | 7:1 | Quality | 🟡 Warning | Function 'ThemeProvider' should have explicit return type | Add return type annotation: function funcName(): ReturnType |
| [`src\app\page.tsx`](src\app\page.tsx) | 8:16 | Quality | 🟡 Warning | Function is too complex (high cyclomatic complexity) |  |
| [`src\app\page.tsx`](src\app\page.tsx) | 8:1 | Quality | 🟡 Warning | Function 'HomePage' should have explicit return type | Add return type annotation: function funcName(): ReturnType |
| [`src\components\PWAProvider.tsx`](src\components\PWAProvider.tsx) | 9:16 | Quality | 🟡 Warning | Function is too complex (high cyclomatic complexity) |  |
| [`src\components\PWAProvider.tsx`](src\components\PWAProvider.tsx) | 9:1 | Quality | 🟡 Warning | Function 'PWAProvider' should have explicit return type | Add return type annotation: function funcName(): ReturnType |
| [`src\components\PWAInstallPrompt.tsx`](src\components\PWAInstallPrompt.tsx) | 12:16 | Quality | 🟡 Warning | Function is too complex (high cyclomatic complexity) |  |
| [`src\components\PWAInstallPrompt.tsx`](src\components\PWAInstallPrompt.tsx) | 12:1 | Quality | 🟡 Warning | Function 'PWAInstallPrompt' should have explicit return type | Add return type annotation: function funcName(): ReturnType |
| [`src\components\home\FuturePlans.tsx`](src\components\home\FuturePlans.tsx) | 12:16 | Quality | 🟡 Warning | Function is too complex (high cyclomatic complexity) |  |
| [`src\components\home\FuturePlans.tsx`](src\components\home\FuturePlans.tsx) | 12:1 | Quality | 🟡 Warning | Function 'FuturePlansSection' should have explicit return ty... | Add return type annotation: function funcName(): ReturnType |
| [`src\components\shared\Navbar.tsx`](src\components\shared\Navbar.tsx) | 20:16 | Quality | 🟡 Warning | Function is too complex (high cyclomatic complexity) |  |
| [`src\components\shared\Navbar.tsx`](src\components\shared\Navbar.tsx) | 20:1 | Quality | 🟡 Warning | Function 'Navbar' should have explicit return type | Add return type annotation: function funcName(): ReturnType |
| [`src\components\PWAProvider.tsx`](src\components\PWAProvider.tsx) | 22:11 | Quality | 🟡 Warning | Console statement in production code | Remove console statements or use proper logging library |
| [`public\sw.js`](public\sw.js) | 26:3 | Quality | 🟡 Warning | Console statement in production code | Remove console statements or use proper logging library |
| [`src\components\PWAInstallPrompt.tsx`](src\components\PWAInstallPrompt.tsx) | 26:5 | Quality | 🟡 Warning | Function should have explicit return type annotation |  |
| [`src\components\home\Subscription.tsx`](src\components\home\Subscription.tsx) | 29:16 | Quality | 🟡 Warning | Function is too complex (high cyclomatic complexity) |  |
| [`public\sw.js`](public\sw.js) | 30:9 | Quality | 🟡 Warning | Console statement in production code | Remove console statements or use proper logging library |
| [`src\components\home\WhyPureWash.tsx`](src\components\home\WhyPureWash.tsx) | 31:16 | Quality | 🟡 Warning | Function is too complex (high cyclomatic complexity) |  |
| [`src\components\home\WhyPureWash.tsx`](src\components\home\WhyPureWash.tsx) | 31:1 | Quality | 🟡 Warning | Function 'WhyPureWashSection' should have explicit return ty... | Add return type annotation: function funcName(): ReturnType |
| [`public\sw.js`](public\sw.js) | 34:9 | Quality | 🟡 Warning | Console statement in production code | Remove console statements or use proper logging library |
| [`src\components\PWAInstallPrompt.tsx`](src\components\PWAInstallPrompt.tsx) | 34:5 | Quality | 🟡 Warning | Function is too complex (high cyclomatic complexity) |  |
| [`src\components\PWAInstallPrompt.tsx`](src\components\PWAInstallPrompt.tsx) | 34:5 | Quality | 🟡 Warning | Function should have explicit return type annotation |  |
| [`src\components\home\Services.tsx`](src\components\home\Services.tsx) | 35:16 | Quality | 🟡 Warning | Function is too complex (high cyclomatic complexity) |  |
| [`src\components\home\Services.tsx`](src\components\home\Services.tsx) | 35:1 | Quality | 🟡 Warning | Function 'ServiceSection' should have explicit return type | Add return type annotation: function funcName(): ReturnType |
| [`public\sw.js`](public\sw.js) | 38:9 | Quality | 🟡 Warning | Console statement in production code | Remove console statements or use proper logging library |
| [`src\components\PWAProvider.tsx`](src\components\PWAProvider.tsx) | 40:11 | Quality | 🟡 Warning | Console statement in production code | Remove console statements or use proper logging library |
| [`public\sw.js`](public\sw.js) | 45:3 | Quality | 🟡 Warning | Console statement in production code | Remove console statements or use proper logging library |
| [`src\components\PWAInstallPrompt.tsx`](src\components\PWAInstallPrompt.tsx) | 45:5 | Quality | 🟡 Warning | Function is too complex (high cyclomatic complexity) |  |
| [`src\components\PWAInstallPrompt.tsx`](src\components\PWAInstallPrompt.tsx) | 45:5 | Quality | 🟡 Warning | Function should have explicit return type annotation |  |
| [`src\components\PWAProvider.tsx`](src\components\PWAProvider.tsx) | 46:11 | Quality | 🟡 Warning | Console statement in production code | Remove console statements or use proper logging library |
| [`public\sw.js`](public\sw.js) | 52:15 | Quality | 🟡 Warning | Console statement in production code | Remove console statements or use proper logging library |
| [`src\components\PWAProvider.tsx`](src\components\PWAProvider.tsx) | 55:11 | Quality | 🟡 Warning | Console statement in production code | Remove console statements or use proper logging library |
| [`public\sw.js`](public\sw.js) | 59:9 | Quality | 🟡 Warning | Console statement in production code | Remove console statements or use proper logging library |
| [`src\components\PWAProvider.tsx`](src\components\PWAProvider.tsx) | 61:5 | Quality | 🟡 Warning | Function is too complex (high cyclomatic complexity) |  |
| [`src\components\PWAProvider.tsx`](src\components\PWAProvider.tsx) | 61:5 | Quality | 🟡 Warning | Function should have explicit return type annotation |  |
| [`src\components\PWAProvider.tsx`](src\components\PWAProvider.tsx) | 62:7 | Quality | 🟡 Warning | Console statement in production code | Remove console statements or use proper logging library |
| [`src\components\PWAProvider.tsx`](src\components\PWAProvider.tsx) | 66:11 | Quality | 🟡 Warning | Console statement in production code | Remove console statements or use proper logging library |
| [`src\components\PWAInstallPrompt.tsx`](src\components\PWAInstallPrompt.tsx) | 68:9 | Quality | 🟡 Warning | Console statement in production code | Remove console statements or use proper logging library |
| [`src\components\PWAInstallPrompt.tsx`](src\components\PWAInstallPrompt.tsx) | 70:9 | Quality | 🟡 Warning | Console statement in production code | Remove console statements or use proper logging library |
| [`src\components\PWAProvider.tsx`](src\components\PWAProvider.tsx) | 71:5 | Quality | 🟡 Warning | Function is too complex (high cyclomatic complexity) |  |
| [`src\components\PWAProvider.tsx`](src\components\PWAProvider.tsx) | 71:5 | Quality | 🟡 Warning | Function should have explicit return type annotation |  |
| [`src\components\PWAProvider.tsx`](src\components\PWAProvider.tsx) | 72:7 | Quality | 🟡 Warning | Console statement in production code | Remove console statements or use proper logging library |
| [`src\components\PWAInstallPrompt.tsx`](src\components\PWAInstallPrompt.tsx) | 76:7 | Quality | 🟡 Warning | Console statement in production code | Remove console statements or use proper logging library |
| [`src\app\layout.tsx`](src\app\layout.tsx) | 79:16 | Quality | 🟡 Warning | Function is too complex (high cyclomatic complexity) |  |
| [`src\app\layout.tsx`](src\app\layout.tsx) | 79:1 | Quality | 🟡 Warning | Function 'RootLayout' should have explicit return type | Add return type annotation: function funcName(): ReturnType |
| [`src\components\PWAInstallPrompt.tsx`](src\components\PWAInstallPrompt.tsx) | 80:3 | Quality | 🟡 Warning | Function is too complex (high cyclomatic complexity) |  |
| [`src\components\PWAInstallPrompt.tsx`](src\components\PWAInstallPrompt.tsx) | 80:3 | Quality | 🟡 Warning | Function should have explicit return type annotation |  |
| [`public\sw.js`](public\sw.js) | 84:11 | Quality | 🟡 Warning | Console statement in production code | Remove console statements or use proper logging library |
| [`public\sw.js`](public\sw.js) | 88:9 | Quality | 🟡 Warning | Console statement in production code | Remove console statements or use proper logging library |
| [`public\sw.js`](public\sw.js) | 108:13 | Quality | 🟡 Warning | Console statement in production code | Remove console statements or use proper logging library |
| [`public\sw.js`](public\sw.js) | 128:3 | Quality | 🟡 Warning | Console statement in production code | Remove console statements or use proper logging library |
| [`public\sw.js`](public\sw.js) | 137:3 | Quality | 🟡 Warning | Console statement in production code | Remove console statements or use proper logging library |
| [`public\sw.js`](public\sw.js) | 169:3 | Quality | 🟡 Warning | Console statement in production code | Remove console statements or use proper logging library |
| [`public\sw.js`](public\sw.js) | 188:11 | Quality | 🟡 Warning | Function is too complex (high cyclomatic complexity) |  |
| [`public\sw.js`](public\sw.js) | 189:7 | Quality | 🟡 Warning | Function is too complex (high cyclomatic complexity) |  |
| [`public\sw.js`](public\sw.js) | 192:5 | Quality | 🟡 Warning | Console statement in production code | Remove console statements or use proper logging library |
| [`public\sw.js`](public\sw.js) | 196:5 | Quality | 🟡 Warning | Console statement in production code | Remove console statements or use proper logging library |
| [`public\sw.js`](public\sw.js) | 202:7 | Quality | 🟡 Warning | Function is too complex (high cyclomatic complexity) |  |
| [`src\components\shared\Navbar.tsx`](src\components\shared\Navbar.tsx) | 1:1 | Quality | 🔵 Info | Imports should be ordered: React -> External -> Internal | Organize imports: React imports first, then external package... |

---

### 📄 [`public\sw.js`](public\sw.js)

| Line:Col | Category | Severity | Issue | Suggestion |
|----------|----------|----------|-------|------------|
| 1:1 | Quality | 🟡 Warning | File is too large (216 lines) | Split large file into smaller, focused modules |
| 26:3 | Quality | 🟡 Warning | Console statement in production code | Remove console statements or use proper logging library |
| 30:9 | Quality | 🟡 Warning | Console statement in production code | Remove console statements or use proper logging library |
| 34:9 | Quality | 🟡 Warning | Console statement in production code | Remove console statements or use proper logging library |
| 38:9 | Quality | 🟡 Warning | Console statement in production code | Remove console statements or use proper logging library |
| 45:3 | Quality | 🟡 Warning | Console statement in production code | Remove console statements or use proper logging library |
| 52:15 | Quality | 🟡 Warning | Console statement in production code | Remove console statements or use proper logging library |
| 59:9 | Quality | 🟡 Warning | Console statement in production code | Remove console statements or use proper logging library |
| 84:11 | Quality | 🟡 Warning | Console statement in production code | Remove console statements or use proper logging library |
| 88:9 | Quality | 🟡 Warning | Console statement in production code | Remove console statements or use proper logging library |
| 108:13 | Quality | 🟡 Warning | Console statement in production code | Remove console statements or use proper logging library |
| 128:3 | Quality | 🟡 Warning | Console statement in production code | Remove console statements or use proper logging library |
| 137:3 | Quality | 🟡 Warning | Console statement in production code | Remove console statements or use proper logging library |
| 169:3 | Quality | 🟡 Warning | Console statement in production code | Remove console statements or use proper logging library |
| 188:11 | Quality | 🟡 Warning | Function is too complex (high cyclomatic complexity) |  |
| 189:7 | Quality | 🟡 Warning | Function is too complex (high cyclomatic complexity) |  |
| 192:5 | Quality | 🟡 Warning | Console statement in production code | Remove console statements or use proper logging library |
| 196:5 | Quality | 🟡 Warning | Console statement in production code | Remove console statements or use proper logging library |
| 202:7 | Quality | 🟡 Warning | Function is too complex (high cyclomatic complexity) |  |

### 📄 [`src\components\PWAProvider.tsx`](src\components\PWAProvider.tsx)

| Line:Col | Category | Severity | Issue | Suggestion |
|----------|----------|----------|-------|------------|
| 9:16 | Quality | 🟡 Warning | Function is too complex (high cyclomatic complexity) |  |
| 9:1 | Quality | 🟡 Warning | Function 'PWAProvider' should have explicit return type | Add return type annotation: function funcName(): ReturnType |
| 22:11 | Quality | 🟡 Warning | Console statement in production code | Remove console statements or use proper logging library |
| 40:11 | Quality | 🟡 Warning | Console statement in production code | Remove console statements or use proper logging library |
| 46:11 | Quality | 🟡 Warning | Console statement in production code | Remove console statements or use proper logging library |
| 55:11 | Quality | 🟡 Warning | Console statement in production code | Remove console statements or use proper logging library |
| 61:5 | Quality | 🟡 Warning | Function is too complex (high cyclomatic complexity) |  |
| 61:5 | Quality | 🟡 Warning | Function should have explicit return type annotation |  |
| 62:7 | Quality | 🟡 Warning | Console statement in production code | Remove console statements or use proper logging library |
| 66:11 | Quality | 🟡 Warning | Console statement in production code | Remove console statements or use proper logging library |
| 71:5 | Quality | 🟡 Warning | Function is too complex (high cyclomatic complexity) |  |
| 71:5 | Quality | 🟡 Warning | Function should have explicit return type annotation |  |
| 72:7 | Quality | 🟡 Warning | Console statement in production code | Remove console statements or use proper logging library |

### 📄 [`src\components\PWAInstallPrompt.tsx`](src\components\PWAInstallPrompt.tsx)

| Line:Col | Category | Severity | Issue | Suggestion |
|----------|----------|----------|-------|------------|
| 12:16 | Quality | 🟡 Warning | Function is too complex (high cyclomatic complexity) |  |
| 12:1 | Quality | 🟡 Warning | Function 'PWAInstallPrompt' should have explicit return type | Add return type annotation: function funcName(): ReturnType |
| 26:5 | Quality | 🟡 Warning | Function should have explicit return type annotation |  |
| 34:5 | Quality | 🟡 Warning | Function is too complex (high cyclomatic complexity) |  |
| 34:5 | Quality | 🟡 Warning | Function should have explicit return type annotation |  |
| 45:5 | Quality | 🟡 Warning | Function is too complex (high cyclomatic complexity) |  |
| 45:5 | Quality | 🟡 Warning | Function should have explicit return type annotation |  |
| 68:9 | Quality | 🟡 Warning | Console statement in production code | Remove console statements or use proper logging library |
| 70:9 | Quality | 🟡 Warning | Console statement in production code | Remove console statements or use proper logging library |
| 76:7 | Quality | 🟡 Warning | Console statement in production code | Remove console statements or use proper logging library |
| 80:3 | Quality | 🟡 Warning | Function is too complex (high cyclomatic complexity) |  |
| 80:3 | Quality | 🟡 Warning | Function should have explicit return type annotation |  |

### 📄 [`src\app\page.tsx`](src\app\page.tsx)

| Line:Col | Category | Severity | Issue | Suggestion |
|----------|----------|----------|-------|------------|
| 8:16 | Quality | 🟡 Warning | Function is too complex (high cyclomatic complexity) |  |
| 8:1 | Quality | 🟡 Warning | Function 'HomePage' should have explicit return type | Add return type annotation: function funcName(): ReturnType |

### 📄 [`src\app\layout.tsx`](src\app\layout.tsx)

| Line:Col | Category | Severity | Issue | Suggestion |
|----------|----------|----------|-------|------------|
| 1:1 | Quality | 🟡 Warning | Missing error boundary implementation | Implement error boundaries to gracefully handle component errors |
| 79:16 | Quality | 🟡 Warning | Function is too complex (high cyclomatic complexity) |  |
| 79:1 | Quality | 🟡 Warning | Function 'RootLayout' should have explicit return type | Add return type annotation: function funcName(): ReturnType |

### 📄 [`src\components\shared\SpecialHeading.tsx`](src\components\shared\SpecialHeading.tsx)

| Line:Col | Category | Severity | Issue | Suggestion |
|----------|----------|----------|-------|------------|
| 5:16 | Quality | 🟡 Warning | Function is too complex (high cyclomatic complexity) |  |
| 5:1 | Quality | 🟡 Warning | Function 'SpecialHeading' should have explicit return type | Add return type annotation: function funcName(): ReturnType |

### 📄 [`src\components\shared\Navbar.tsx`](src\components\shared\Navbar.tsx)

| Line:Col | Category | Severity | Issue | Suggestion |
|----------|----------|----------|-------|------------|
| 1:1 | Quality | 🔵 Info | Imports should be ordered: React -> External -> Internal | Organize imports: React imports first, then external packages, then internal mod... |
| 20:16 | Quality | 🟡 Warning | Function is too complex (high cyclomatic complexity) |  |
| 20:1 | Quality | 🟡 Warning | Function 'Navbar' should have explicit return type | Add return type annotation: function funcName(): ReturnType |

### 📄 [`src\components\shared\Footer.tsx`](src\components\shared\Footer.tsx)

| Line:Col | Category | Severity | Issue | Suggestion |
|----------|----------|----------|-------|------------|
| 5:16 | Quality | 🟡 Warning | Function is too complex (high cyclomatic complexity) |  |
| 5:1 | Quality | 🟡 Warning | Function 'Footer' should have explicit return type | Add return type annotation: function funcName(): ReturnType |

### 📄 [`src\components\shared\Card.tsx`](src\components\shared\Card.tsx)

| Line:Col | Category | Severity | Issue | Suggestion |
|----------|----------|----------|-------|------------|
| 5:16 | Quality | 🟡 Warning | Function is too complex (high cyclomatic complexity) |  |
| 5:1 | Quality | 🟡 Warning | Function 'Card' should have explicit return type | Add return type annotation: function funcName(): ReturnType |

### 📄 [`src\components\providers\ThemeProvider.tsx`](src\components\providers\ThemeProvider.tsx)

| Line:Col | Category | Severity | Issue | Suggestion |
|----------|----------|----------|-------|------------|
| 7:16 | Quality | 🟡 Warning | Function is too complex (high cyclomatic complexity) |  |
| 7:1 | Quality | 🟡 Warning | Function 'ThemeProvider' should have explicit return type | Add return type annotation: function funcName(): ReturnType |

### 📄 [`src\components\home\WhyPureWash.tsx`](src\components\home\WhyPureWash.tsx)

| Line:Col | Category | Severity | Issue | Suggestion |
|----------|----------|----------|-------|------------|
| 31:16 | Quality | 🟡 Warning | Function is too complex (high cyclomatic complexity) |  |
| 31:1 | Quality | 🟡 Warning | Function 'WhyPureWashSection' should have explicit return type | Add return type annotation: function funcName(): ReturnType |

### 📄 [`src\components\home\Subscription.tsx`](src\components\home\Subscription.tsx)

| Line:Col | Category | Severity | Issue | Suggestion |
|----------|----------|----------|-------|------------|
| 29:16 | Quality | 🟡 Warning | Function is too complex (high cyclomatic complexity) |  |

### 📄 [`src\components\home\Services.tsx`](src\components\home\Services.tsx)

| Line:Col | Category | Severity | Issue | Suggestion |
|----------|----------|----------|-------|------------|
| 35:16 | Quality | 🟡 Warning | Function is too complex (high cyclomatic complexity) |  |
| 35:1 | Quality | 🟡 Warning | Function 'ServiceSection' should have explicit return type | Add return type annotation: function funcName(): ReturnType |

### 📄 [`src\components\home\Hero.tsx`](src\components\home\Hero.tsx)

| Line:Col | Category | Severity | Issue | Suggestion |
|----------|----------|----------|-------|------------|
| 6:16 | Quality | 🟡 Warning | Function is too complex (high cyclomatic complexity) |  |
| 6:1 | Quality | 🟡 Warning | Function 'HeroSection' should have explicit return type | Add return type annotation: function funcName(): ReturnType |

### 📄 [`src\components\home\FuturePlans.tsx`](src\components\home\FuturePlans.tsx)

| Line:Col | Category | Severity | Issue | Suggestion |
|----------|----------|----------|-------|------------|
| 12:16 | Quality | 🟡 Warning | Function is too complex (high cyclomatic complexity) |  |
| 12:1 | Quality | 🟡 Warning | Function 'FuturePlansSection' should have explicit return type | Add return type annotation: function funcName(): ReturnType |

### 📄 [`src\components\home\CallToAction.tsx`](src\components\home\CallToAction.tsx)

| Line:Col | Category | Severity | Issue | Suggestion |
|----------|----------|----------|-------|------------|
| 6:16 | Quality | 🟡 Warning | Function is too complex (high cyclomatic complexity) |  |

### Accessibility

| File | Line:Col | Category | Severity | Issue | Suggestion |
|------|----------|----------|----------|-------|------------|
| [`src\components\shared\Navbar.tsx`](src\components\shared\Navbar.tsx) | 97:13 | Accessibility | 🔴 Error | Interactive elements must be keyboard accessible | Add keyboard event handlers or make element keyboard accessi... |
| [`src\components\PWAInstallPrompt.tsx`](src\components\PWAInstallPrompt.tsx) | 116:15 | Accessibility | 🔴 Error | Interactive elements must be keyboard accessible | Add keyboard event handlers or make element keyboard accessi... |
| [`src\components\shared\Navbar.tsx`](src\components\shared\Navbar.tsx) | 119:23 | Accessibility | 🔴 Error | Interactive elements must be keyboard accessible | Add keyboard event handlers or make element keyboard accessi... |
| [`src\components\PWAInstallPrompt.tsx`](src\components\PWAInstallPrompt.tsx) | 123:15 | Accessibility | 🔴 Error | Interactive elements must be keyboard accessible | Add keyboard event handlers or make element keyboard accessi... |
| [`src\components\shared\Navbar.tsx`](src\components\shared\Navbar.tsx) | 142:17 | Accessibility | 🔴 Error | Interactive elements must be keyboard accessible | Add keyboard event handlers or make element keyboard accessi... |
| [`public\sw.js`](public\sw.js) | 168:34 | Accessibility | 🔴 Error | Interactive elements must be keyboard accessible | Add keyboard event handlers or make element keyboard accessi... |
| [`src\lib\theme.ts`](src\lib\theme.ts) | 1:1 | Accessibility | 🟡 Warning | Hardcoded colors detected - contrast validation needed | Use theme.palette colors and validate contrast ratios meet W... |
| [`src\components\shared\Navbar.tsx`](src\components\shared\Navbar.tsx) | 97:13 | Accessibility | 🟡 Warning | Interactive element missing keyboard support | Add keyboard event handlers and tabIndex for accessibility |
| [`src\components\PWAInstallPrompt.tsx`](src\components\PWAInstallPrompt.tsx) | 116:15 | Accessibility | 🟡 Warning | Interactive element missing keyboard support | Add keyboard event handlers and tabIndex for accessibility |
| [`src\components\shared\Navbar.tsx`](src\components\shared\Navbar.tsx) | 119:23 | Accessibility | 🟡 Warning | Interactive element missing keyboard support | Add keyboard event handlers and tabIndex for accessibility |
| [`src\components\PWAInstallPrompt.tsx`](src\components\PWAInstallPrompt.tsx) | 123:15 | Accessibility | 🟡 Warning | Interactive element missing keyboard support | Add keyboard event handlers and tabIndex for accessibility |
| [`src\components\shared\Navbar.tsx`](src\components\shared\Navbar.tsx) | 142:17 | Accessibility | 🟡 Warning | Interactive element missing keyboard support | Add keyboard event handlers and tabIndex for accessibility |

---

### 📄 [`public\sw.js`](public\sw.js)

| Line:Col | Category | Severity | Issue | Suggestion |
|----------|----------|----------|-------|------------|
| 168:34 | Accessibility | 🔴 Error | Interactive elements must be keyboard accessible | Add keyboard event handlers or make element keyboard accessible |

### 📄 [`src\lib\theme.ts`](src\lib\theme.ts)

| Line:Col | Category | Severity | Issue | Suggestion |
|----------|----------|----------|-------|------------|
| 1:1 | Accessibility | 🟡 Warning | Hardcoded colors detected - contrast validation needed | Use theme.palette colors and validate contrast ratios meet WCAG AA (4.5:1 for no... |

### 📄 [`src\components\PWAInstallPrompt.tsx`](src\components\PWAInstallPrompt.tsx)

| Line:Col | Category | Severity | Issue | Suggestion |
|----------|----------|----------|-------|------------|
| 116:15 | Accessibility | 🟡 Warning | Interactive element missing keyboard support | Add keyboard event handlers and tabIndex for accessibility |
| 116:15 | Accessibility | 🔴 Error | Interactive elements must be keyboard accessible | Add keyboard event handlers or make element keyboard accessible |
| 123:15 | Accessibility | 🟡 Warning | Interactive element missing keyboard support | Add keyboard event handlers and tabIndex for accessibility |
| 123:15 | Accessibility | 🔴 Error | Interactive elements must be keyboard accessible | Add keyboard event handlers or make element keyboard accessible |

### 📄 [`src\components\shared\Navbar.tsx`](src\components\shared\Navbar.tsx)

| Line:Col | Category | Severity | Issue | Suggestion |
|----------|----------|----------|-------|------------|
| 97:13 | Accessibility | 🟡 Warning | Interactive element missing keyboard support | Add keyboard event handlers and tabIndex for accessibility |
| 97:13 | Accessibility | 🔴 Error | Interactive elements must be keyboard accessible | Add keyboard event handlers or make element keyboard accessible |
| 119:23 | Accessibility | 🟡 Warning | Interactive element missing keyboard support | Add keyboard event handlers and tabIndex for accessibility |
| 119:23 | Accessibility | 🔴 Error | Interactive elements must be keyboard accessible | Add keyboard event handlers or make element keyboard accessible |
| 142:17 | Accessibility | 🟡 Warning | Interactive element missing keyboard support | Add keyboard event handlers and tabIndex for accessibility |
| 142:17 | Accessibility | 🔴 Error | Interactive elements must be keyboard accessible | Add keyboard event handlers or make element keyboard accessible |

### Mui

| File | Line:Col | Category | Severity | Issue | Suggestion |
|------|----------|----------|----------|-------|------------|
| [`src\lib\theme.ts`](src\lib\theme.ts) | 6:14 | Mui | 🟡 Warning | Hardcoded colors and spacing detected - use theme tokens ins... | Replace hardcoded colors with theme.palette.* and spacing wi... |
| [`src\lib\theme.ts`](src\lib\theme.ts) | 7:22 | Mui | 🟡 Warning | Hardcoded colors and spacing detected - use theme tokens ins... | Replace hardcoded colors with theme.palette.* and spacing wi... |
| [`src\lib\theme.ts`](src\lib\theme.ts) | 10:14 | Mui | 🟡 Warning | Hardcoded colors and spacing detected - use theme tokens ins... | Replace hardcoded colors with theme.palette.* and spacing wi... |
| [`src\components\shared\Footer.tsx`](src\components\shared\Footer.tsx) | 10:24 | Mui | 🟡 Warning | Hardcoded colors and spacing detected - use theme tokens ins... | Replace hardcoded colors with theme.palette.* and spacing wi... |
| [`src\components\shared\Footer.tsx`](src\components\shared\Footer.tsx) | 10:37 | Mui | 🟡 Warning | Hardcoded colors and spacing detected - use theme tokens ins... | Replace hardcoded colors with theme.palette.* and spacing wi... |
| [`src\lib\theme.ts`](src\lib\theme.ts) | 11:22 | Mui | 🟡 Warning | Hardcoded colors and spacing detected - use theme tokens ins... | Replace hardcoded colors with theme.palette.* and spacing wi... |
| [`src\components\home\CallToAction.tsx`](src\components\home\CallToAction.tsx) | 12:27 | Mui | 🟡 Warning | Hardcoded colors and spacing detected - use theme tokens ins... | Replace hardcoded colors with theme.palette.* and spacing wi... |
| [`src\components\home\Hero.tsx`](src\components\home\Hero.tsx) | 13:31 | Mui | 🟡 Warning | Hardcoded colors and spacing detected - use theme tokens ins... | Replace hardcoded colors with theme.palette.* and spacing wi... |
| [`src\lib\theme.ts`](src\lib\theme.ts) | 14:17 | Mui | 🟡 Warning | Hardcoded colors and spacing detected - use theme tokens ins... | Replace hardcoded colors with theme.palette.* and spacing wi... |
| [`src\components\shared\Card.tsx`](src\components\shared\Card.tsx) | 14:23 | Mui | 🟡 Warning | Hardcoded colors and spacing detected - use theme tokens ins... | Replace hardcoded colors with theme.palette.* and spacing wi... |
| [`src\components\shared\Card.tsx`](src\components\shared\Card.tsx) | 14:27 | Mui | 🟡 Warning | Hardcoded colors and spacing detected - use theme tokens ins... | Replace hardcoded colors with theme.palette.* and spacing wi... |
| [`src\components\shared\Card.tsx`](src\components\shared\Card.tsx) | 14:33 | Mui | 🟡 Warning | Hardcoded colors and spacing detected - use theme tokens ins... | Replace hardcoded colors with theme.palette.* and spacing wi... |
| [`src\lib\theme.ts`](src\lib\theme.ts) | 15:15 | Mui | 🟡 Warning | Hardcoded colors and spacing detected - use theme tokens ins... | Replace hardcoded colors with theme.palette.* and spacing wi... |
| [`src\components\ui\Button.tsx`](src\components\ui\Button.tsx) | 15:18 | Mui | 🟡 Warning | Hardcoded colors and spacing detected - use theme tokens ins... | Replace hardcoded colors with theme.palette.* and spacing wi... |
| [`src\components\shared\Card.tsx`](src\components\shared\Card.tsx) | 15:24 | Mui | 🟡 Warning | Hardcoded colors and spacing detected - use theme tokens ins... | Replace hardcoded colors with theme.palette.* and spacing wi... |
| [`src\components\home\CallToAction.tsx`](src\components\home\CallToAction.tsx) | 16:9 | Mui | 🟡 Warning | Grid component without responsive breakpoints | Add responsive props like xs={12} md={6} for mobile-first de... |
| [`src\lib\theme.ts`](src\lib\theme.ts) | 18:17 | Mui | 🟡 Warning | Hardcoded colors and spacing detected - use theme tokens ins... | Replace hardcoded colors with theme.palette.* and spacing wi... |
| [`src\lib\theme.ts`](src\lib\theme.ts) | 19:19 | Mui | 🟡 Warning | Hardcoded colors and spacing detected - use theme tokens ins... | Replace hardcoded colors with theme.palette.* and spacing wi... |
| [`src\components\home\Hero.tsx`](src\components\home\Hero.tsx) | 20:9 | Mui | 🟡 Warning | Grid component without responsive breakpoints | Add responsive props like xs={12} md={6} for mobile-first de... |
| [`src\components\home\CallToAction.tsx`](src\components\home\CallToAction.tsx) | 21:11 | Mui | 🟡 Warning | Grid component without responsive breakpoints | Add responsive props like xs={12} md={6} for mobile-first de... |
| [`src\components\ui\Button.tsx`](src\components\ui\Button.tsx) | 22:14 | Mui | 🟡 Warning | Hardcoded colors and spacing detected - use theme tokens ins... | Replace hardcoded colors with theme.palette.* and spacing wi... |
| [`src\components\ui\Button.tsx`](src\components\ui\Button.tsx) | 23:17 | Mui | 🟡 Warning | Hardcoded colors and spacing detected - use theme tokens ins... | Replace hardcoded colors with theme.palette.* and spacing wi... |
| [`src\components\home\FuturePlans.tsx`](src\components\home\FuturePlans.tsx) | 23:41 | Mui | 🟡 Warning | Hardcoded colors and spacing detected - use theme tokens ins... | Replace hardcoded colors with theme.palette.* and spacing wi... |
| [`src\lib\theme.ts`](src\lib\theme.ts) | 27:26 | Mui | 🟡 Warning | Hardcoded colors and spacing detected - use theme tokens ins... | Replace hardcoded colors with theme.palette.* and spacing wi... |
| [`src\components\ui\Button.tsx`](src\components\ui\Button.tsx) | 27:14 | Mui | 🟡 Warning | Hardcoded colors and spacing detected - use theme tokens ins... | Replace hardcoded colors with theme.palette.* and spacing wi... |
| [`src\components\home\Hero.tsx`](src\components\home\Hero.tsx) | 27:11 | Mui | 🟡 Warning | Grid component without responsive breakpoints | Add responsive props like xs={12} md={6} for mobile-first de... |
| [`src\components\ui\Button.tsx`](src\components\ui\Button.tsx) | 28:17 | Mui | 🟡 Warning | Hardcoded colors and spacing detected - use theme tokens ins... | Replace hardcoded colors with theme.palette.* and spacing wi... |
| [`src\components\ui\Button.tsx`](src\components\ui\Button.tsx) | 32:14 | Mui | 🟡 Warning | Hardcoded colors and spacing detected - use theme tokens ins... | Replace hardcoded colors with theme.palette.* and spacing wi... |
| [`src\components\ui\Button.tsx`](src\components\ui\Button.tsx) | 33:17 | Mui | 🟡 Warning | Hardcoded colors and spacing detected - use theme tokens ins... | Replace hardcoded colors with theme.palette.* and spacing wi... |
| [`src\components\home\FuturePlans.tsx`](src\components\home\FuturePlans.tsx) | 33:11 | Mui | 🟡 Warning | Grid component without responsive breakpoints | Add responsive props like xs={12} md={6} for mobile-first de... |
| [`src\lib\theme.ts`](src\lib\theme.ts) | 34:26 | Mui | 🟡 Warning | Hardcoded colors and spacing detected - use theme tokens ins... | Replace hardcoded colors with theme.palette.* and spacing wi... |
| [`src\components\home\Subscription.tsx`](src\components\home\Subscription.tsx) | 34:9 | Mui | 🟡 Warning | Grid component without responsive breakpoints | Add responsive props like xs={12} md={6} for mobile-first de... |
| [`src\components\home\FuturePlans.tsx`](src\components\home\FuturePlans.tsx) | 35:15 | Mui | 🟡 Warning | Grid component without responsive breakpoints | Add responsive props like xs={12} md={6} for mobile-first de... |
| [`src\components\home\CallToAction.tsx`](src\components\home\CallToAction.tsx) | 35:30 | Mui | 🟡 Warning | Hardcoded colors and spacing detected - use theme tokens ins... | Replace hardcoded colors with theme.palette.* and spacing wi... |
| [`src\components\home\Subscription.tsx`](src\components\home\Subscription.tsx) | 36:13 | Mui | 🟡 Warning | Grid component without responsive breakpoints | Add responsive props like xs={12} md={6} for mobile-first de... |
| [`src\components\ui\Button.tsx`](src\components\ui\Button.tsx) | 37:14 | Mui | 🟡 Warning | Hardcoded colors and spacing detected - use theme tokens ins... | Replace hardcoded colors with theme.palette.* and spacing wi... |
| [`src\components\ui\Button.tsx`](src\components\ui\Button.tsx) | 38:13 | Mui | 🟡 Warning | Hardcoded colors and spacing detected - use theme tokens ins... | Replace hardcoded colors with theme.palette.* and spacing wi... |
| [`src\components\ui\Button.tsx`](src\components\ui\Button.tsx) | 39:16 | Mui | 🟡 Warning | Hardcoded colors and spacing detected - use theme tokens ins... | Replace hardcoded colors with theme.palette.* and spacing wi... |
| [`src\components\home\Services.tsx`](src\components\home\Services.tsx) | 40:9 | Mui | 🟡 Warning | Grid component without responsive breakpoints | Add responsive props like xs={12} md={6} for mobile-first de... |
| [`src\components\home\CallToAction.tsx`](src\components\home\CallToAction.tsx) | 41:11 | Mui | 🟡 Warning | Grid component without responsive breakpoints | Add responsive props like xs={12} md={6} for mobile-first de... |
| [`src\components\home\Services.tsx`](src\components\home\Services.tsx) | 42:13 | Mui | 🟡 Warning | Grid component without responsive breakpoints | Add responsive props like xs={12} md={6} for mobile-first de... |
| [`src\lib\theme.ts`](src\lib\theme.ts) | 48:26 | Mui | 🟡 Warning | Hardcoded colors and spacing detected - use theme tokens ins... | Replace hardcoded colors with theme.palette.* and spacing wi... |
| [`src\components\home\Hero.tsx`](src\components\home\Hero.tsx) | 56:49 | Mui | 🟡 Warning | Hardcoded colors and spacing detected - use theme tokens ins... | Replace hardcoded colors with theme.palette.* and spacing wi... |
| [`src\components\home\Hero.tsx`](src\components\home\Hero.tsx) | 56:49 | Mui | 🟡 Warning | Hardcoded spacing '150px' found. Use theme.spacing() or sx s... | Replace with theme.spacing(2), theme.spacing(3), or sx={{ m:... |
| [`src\lib\theme.ts`](src\lib\theme.ts) | 60:26 | Mui | 🟡 Warning | Hardcoded colors and spacing detected - use theme tokens ins... | Replace hardcoded colors with theme.palette.* and spacing wi... |
| [`src\components\ui\Button.tsx`](src\components\ui\Button.tsx) | 61:14 | Mui | 🟡 Warning | Hardcoded colors and spacing detected - use theme tokens ins... | Replace hardcoded colors with theme.palette.* and spacing wi... |
| [`src\components\home\Hero.tsx`](src\components\home\Hero.tsx) | 62:11 | Mui | 🟡 Warning | Grid component without responsive breakpoints | Add responsive props like xs={12} md={6} for mobile-first de... |
| [`src\app\layout.tsx`](src\app\layout.tsx) | 65:55 | Mui | 🟡 Warning | Hardcoded colors and spacing detected - use theme tokens ins... | Replace hardcoded colors with theme.palette.* and spacing wi... |
| [`src\app\layout.tsx`](src\app\layout.tsx) | 66:54 | Mui | 🟡 Warning | Hardcoded colors and spacing detected - use theme tokens ins... | Replace hardcoded colors with theme.palette.* and spacing wi... |
| [`src\lib\theme.ts`](src\lib\theme.ts) | 70:26 | Mui | 🟡 Warning | Hardcoded colors and spacing detected - use theme tokens ins... | Replace hardcoded colors with theme.palette.* and spacing wi... |
| [`src\lib\theme.ts`](src\lib\theme.ts) | 71:25 | Mui | 🟡 Warning | Hardcoded colors and spacing detected - use theme tokens ins... | Replace hardcoded colors with theme.palette.* and spacing wi... |
| [`src\lib\theme.ts`](src\lib\theme.ts) | 71:29 | Mui | 🟡 Warning | Hardcoded colors and spacing detected - use theme tokens ins... | Replace hardcoded colors with theme.palette.* and spacing wi... |
| [`src\lib\theme.ts`](src\lib\theme.ts) | 71:35 | Mui | 🟡 Warning | Hardcoded colors and spacing detected - use theme tokens ins... | Replace hardcoded colors with theme.palette.* and spacing wi... |
| [`src\components\home\WhyPureWash.tsx`](src\components\home\WhyPureWash.tsx) | 71:9 | Mui | 🟡 Warning | Grid component without responsive breakpoints | Add responsive props like xs={12} md={6} for mobile-first de... |
| [`src\components\home\WhyPureWash.tsx`](src\components\home\WhyPureWash.tsx) | 73:13 | Mui | 🟡 Warning | Grid component without responsive breakpoints | Add responsive props like xs={12} md={6} for mobile-first de... |
| [`src\components\home\Hero.tsx`](src\components\home\Hero.tsx) | 76:30 | Mui | 🟡 Warning | Hardcoded colors and spacing detected - use theme tokens ins... | Replace hardcoded colors with theme.palette.* and spacing wi... |
| [`src\components\ui\Button.tsx`](src\components\ui\Button.tsx) | 77:27 | Mui | 🟡 Warning | Hardcoded colors and spacing detected - use theme tokens ins... | Replace hardcoded colors with theme.palette.* and spacing wi... |
| [`src\components\home\CallToAction.tsx`](src\components\home\CallToAction.tsx) | 79:32 | Mui | 🟡 Warning | Hardcoded colors and spacing detected - use theme tokens ins... | Replace hardcoded colors with theme.palette.* and spacing wi... |
| [`src\app\layout.tsx`](src\app\layout.tsx) | 94:55 | Mui | 🟡 Warning | Hardcoded colors and spacing detected - use theme tokens ins... | Replace hardcoded colors with theme.palette.* and spacing wi... |
| [`src\components\PWAInstallPrompt.tsx`](src\components\PWAInstallPrompt.tsx) | 107:22 | Mui | 🟡 Warning | Hardcoded colors and spacing detected - use theme tokens ins... | Replace hardcoded colors with theme.palette.* and spacing wi... |
| [`src\app\layout.tsx`](src\app\layout.tsx) | 114:26 | Mui | 🟡 Warning | Hardcoded colors and spacing detected - use theme tokens ins... | Replace hardcoded colors with theme.palette.* and spacing wi... |
| [`src\app\layout.tsx`](src\app\layout.tsx) | 115:26 | Mui | 🟡 Warning | Hardcoded colors and spacing detected - use theme tokens ins... | Replace hardcoded colors with theme.palette.* and spacing wi... |

---

### 📄 [`src\lib\theme.ts`](src\lib\theme.ts)

| Line:Col | Category | Severity | Issue | Suggestion |
|----------|----------|----------|-------|------------|
| 6:14 | Mui | 🟡 Warning | Hardcoded colors and spacing detected - use theme tokens instead | Replace hardcoded colors with theme.palette.* and spacing with theme.spacing() o... |
| 7:22 | Mui | 🟡 Warning | Hardcoded colors and spacing detected - use theme tokens instead | Replace hardcoded colors with theme.palette.* and spacing with theme.spacing() o... |
| 10:14 | Mui | 🟡 Warning | Hardcoded colors and spacing detected - use theme tokens instead | Replace hardcoded colors with theme.palette.* and spacing with theme.spacing() o... |
| 11:22 | Mui | 🟡 Warning | Hardcoded colors and spacing detected - use theme tokens instead | Replace hardcoded colors with theme.palette.* and spacing with theme.spacing() o... |
| 14:17 | Mui | 🟡 Warning | Hardcoded colors and spacing detected - use theme tokens instead | Replace hardcoded colors with theme.palette.* and spacing with theme.spacing() o... |
| 15:15 | Mui | 🟡 Warning | Hardcoded colors and spacing detected - use theme tokens instead | Replace hardcoded colors with theme.palette.* and spacing with theme.spacing() o... |
| 18:17 | Mui | 🟡 Warning | Hardcoded colors and spacing detected - use theme tokens instead | Replace hardcoded colors with theme.palette.* and spacing with theme.spacing() o... |
| 19:19 | Mui | 🟡 Warning | Hardcoded colors and spacing detected - use theme tokens instead | Replace hardcoded colors with theme.palette.* and spacing with theme.spacing() o... |
| 27:26 | Mui | 🟡 Warning | Hardcoded colors and spacing detected - use theme tokens instead | Replace hardcoded colors with theme.palette.* and spacing with theme.spacing() o... |
| 34:26 | Mui | 🟡 Warning | Hardcoded colors and spacing detected - use theme tokens instead | Replace hardcoded colors with theme.palette.* and spacing with theme.spacing() o... |
| 48:26 | Mui | 🟡 Warning | Hardcoded colors and spacing detected - use theme tokens instead | Replace hardcoded colors with theme.palette.* and spacing with theme.spacing() o... |
| 60:26 | Mui | 🟡 Warning | Hardcoded colors and spacing detected - use theme tokens instead | Replace hardcoded colors with theme.palette.* and spacing with theme.spacing() o... |
| 70:26 | Mui | 🟡 Warning | Hardcoded colors and spacing detected - use theme tokens instead | Replace hardcoded colors with theme.palette.* and spacing with theme.spacing() o... |
| 71:25 | Mui | 🟡 Warning | Hardcoded colors and spacing detected - use theme tokens instead | Replace hardcoded colors with theme.palette.* and spacing with theme.spacing() o... |
| 71:29 | Mui | 🟡 Warning | Hardcoded colors and spacing detected - use theme tokens instead | Replace hardcoded colors with theme.palette.* and spacing with theme.spacing() o... |
| 71:35 | Mui | 🟡 Warning | Hardcoded colors and spacing detected - use theme tokens instead | Replace hardcoded colors with theme.palette.* and spacing with theme.spacing() o... |

### 📄 [`src\components\PWAInstallPrompt.tsx`](src\components\PWAInstallPrompt.tsx)

| Line:Col | Category | Severity | Issue | Suggestion |
|----------|----------|----------|-------|------------|
| 107:22 | Mui | 🟡 Warning | Hardcoded colors and spacing detected - use theme tokens instead | Replace hardcoded colors with theme.palette.* and spacing with theme.spacing() o... |

### 📄 [`src\app\layout.tsx`](src\app\layout.tsx)

| Line:Col | Category | Severity | Issue | Suggestion |
|----------|----------|----------|-------|------------|
| 65:55 | Mui | 🟡 Warning | Hardcoded colors and spacing detected - use theme tokens instead | Replace hardcoded colors with theme.palette.* and spacing with theme.spacing() o... |
| 66:54 | Mui | 🟡 Warning | Hardcoded colors and spacing detected - use theme tokens instead | Replace hardcoded colors with theme.palette.* and spacing with theme.spacing() o... |
| 94:55 | Mui | 🟡 Warning | Hardcoded colors and spacing detected - use theme tokens instead | Replace hardcoded colors with theme.palette.* and spacing with theme.spacing() o... |
| 114:26 | Mui | 🟡 Warning | Hardcoded colors and spacing detected - use theme tokens instead | Replace hardcoded colors with theme.palette.* and spacing with theme.spacing() o... |
| 115:26 | Mui | 🟡 Warning | Hardcoded colors and spacing detected - use theme tokens instead | Replace hardcoded colors with theme.palette.* and spacing with theme.spacing() o... |

### 📄 [`src\components\ui\Button.tsx`](src\components\ui\Button.tsx)

| Line:Col | Category | Severity | Issue | Suggestion |
|----------|----------|----------|-------|------------|
| 15:18 | Mui | 🟡 Warning | Hardcoded colors and spacing detected - use theme tokens instead | Replace hardcoded colors with theme.palette.* and spacing with theme.spacing() o... |
| 22:14 | Mui | 🟡 Warning | Hardcoded colors and spacing detected - use theme tokens instead | Replace hardcoded colors with theme.palette.* and spacing with theme.spacing() o... |
| 23:17 | Mui | 🟡 Warning | Hardcoded colors and spacing detected - use theme tokens instead | Replace hardcoded colors with theme.palette.* and spacing with theme.spacing() o... |
| 27:14 | Mui | 🟡 Warning | Hardcoded colors and spacing detected - use theme tokens instead | Replace hardcoded colors with theme.palette.* and spacing with theme.spacing() o... |
| 28:17 | Mui | 🟡 Warning | Hardcoded colors and spacing detected - use theme tokens instead | Replace hardcoded colors with theme.palette.* and spacing with theme.spacing() o... |
| 32:14 | Mui | 🟡 Warning | Hardcoded colors and spacing detected - use theme tokens instead | Replace hardcoded colors with theme.palette.* and spacing with theme.spacing() o... |
| 33:17 | Mui | 🟡 Warning | Hardcoded colors and spacing detected - use theme tokens instead | Replace hardcoded colors with theme.palette.* and spacing with theme.spacing() o... |
| 37:14 | Mui | 🟡 Warning | Hardcoded colors and spacing detected - use theme tokens instead | Replace hardcoded colors with theme.palette.* and spacing with theme.spacing() o... |
| 38:13 | Mui | 🟡 Warning | Hardcoded colors and spacing detected - use theme tokens instead | Replace hardcoded colors with theme.palette.* and spacing with theme.spacing() o... |
| 39:16 | Mui | 🟡 Warning | Hardcoded colors and spacing detected - use theme tokens instead | Replace hardcoded colors with theme.palette.* and spacing with theme.spacing() o... |
| 61:14 | Mui | 🟡 Warning | Hardcoded colors and spacing detected - use theme tokens instead | Replace hardcoded colors with theme.palette.* and spacing with theme.spacing() o... |
| 77:27 | Mui | 🟡 Warning | Hardcoded colors and spacing detected - use theme tokens instead | Replace hardcoded colors with theme.palette.* and spacing with theme.spacing() o... |

### 📄 [`src\components\shared\Footer.tsx`](src\components\shared\Footer.tsx)

| Line:Col | Category | Severity | Issue | Suggestion |
|----------|----------|----------|-------|------------|
| 10:24 | Mui | 🟡 Warning | Hardcoded colors and spacing detected - use theme tokens instead | Replace hardcoded colors with theme.palette.* and spacing with theme.spacing() o... |
| 10:37 | Mui | 🟡 Warning | Hardcoded colors and spacing detected - use theme tokens instead | Replace hardcoded colors with theme.palette.* and spacing with theme.spacing() o... |

### 📄 [`src\components\shared\Card.tsx`](src\components\shared\Card.tsx)

| Line:Col | Category | Severity | Issue | Suggestion |
|----------|----------|----------|-------|------------|
| 14:23 | Mui | 🟡 Warning | Hardcoded colors and spacing detected - use theme tokens instead | Replace hardcoded colors with theme.palette.* and spacing with theme.spacing() o... |
| 14:27 | Mui | 🟡 Warning | Hardcoded colors and spacing detected - use theme tokens instead | Replace hardcoded colors with theme.palette.* and spacing with theme.spacing() o... |
| 14:33 | Mui | 🟡 Warning | Hardcoded colors and spacing detected - use theme tokens instead | Replace hardcoded colors with theme.palette.* and spacing with theme.spacing() o... |
| 15:24 | Mui | 🟡 Warning | Hardcoded colors and spacing detected - use theme tokens instead | Replace hardcoded colors with theme.palette.* and spacing with theme.spacing() o... |

### 📄 [`src\components\home\WhyPureWash.tsx`](src\components\home\WhyPureWash.tsx)

| Line:Col | Category | Severity | Issue | Suggestion |
|----------|----------|----------|-------|------------|
| 71:9 | Mui | 🟡 Warning | Grid component without responsive breakpoints | Add responsive props like xs={12} md={6} for mobile-first design |
| 73:13 | Mui | 🟡 Warning | Grid component without responsive breakpoints | Add responsive props like xs={12} md={6} for mobile-first design |

### 📄 [`src\components\home\Subscription.tsx`](src\components\home\Subscription.tsx)

| Line:Col | Category | Severity | Issue | Suggestion |
|----------|----------|----------|-------|------------|
| 34:9 | Mui | 🟡 Warning | Grid component without responsive breakpoints | Add responsive props like xs={12} md={6} for mobile-first design |
| 36:13 | Mui | 🟡 Warning | Grid component without responsive breakpoints | Add responsive props like xs={12} md={6} for mobile-first design |

### 📄 [`src\components\home\Services.tsx`](src\components\home\Services.tsx)

| Line:Col | Category | Severity | Issue | Suggestion |
|----------|----------|----------|-------|------------|
| 40:9 | Mui | 🟡 Warning | Grid component without responsive breakpoints | Add responsive props like xs={12} md={6} for mobile-first design |
| 42:13 | Mui | 🟡 Warning | Grid component without responsive breakpoints | Add responsive props like xs={12} md={6} for mobile-first design |

### 📄 [`src\components\home\Hero.tsx`](src\components\home\Hero.tsx)

| Line:Col | Category | Severity | Issue | Suggestion |
|----------|----------|----------|-------|------------|
| 13:31 | Mui | 🟡 Warning | Hardcoded colors and spacing detected - use theme tokens instead | Replace hardcoded colors with theme.palette.* and spacing with theme.spacing() o... |
| 20:9 | Mui | 🟡 Warning | Grid component without responsive breakpoints | Add responsive props like xs={12} md={6} for mobile-first design |
| 27:11 | Mui | 🟡 Warning | Grid component without responsive breakpoints | Add responsive props like xs={12} md={6} for mobile-first design |
| 56:49 | Mui | 🟡 Warning | Hardcoded colors and spacing detected - use theme tokens instead | Replace hardcoded colors with theme.palette.* and spacing with theme.spacing() o... |
| 56:49 | Mui | 🟡 Warning | Hardcoded spacing '150px' found. Use theme.spacing() or sx scale instead. | Replace with theme.spacing(2), theme.spacing(3), or sx={{ m: 2, p: 3 }} |
| 62:11 | Mui | 🟡 Warning | Grid component without responsive breakpoints | Add responsive props like xs={12} md={6} for mobile-first design |
| 76:30 | Mui | 🟡 Warning | Hardcoded colors and spacing detected - use theme tokens instead | Replace hardcoded colors with theme.palette.* and spacing with theme.spacing() o... |

### 📄 [`src\components\home\FuturePlans.tsx`](src\components\home\FuturePlans.tsx)

| Line:Col | Category | Severity | Issue | Suggestion |
|----------|----------|----------|-------|------------|
| 23:41 | Mui | 🟡 Warning | Hardcoded colors and spacing detected - use theme tokens instead | Replace hardcoded colors with theme.palette.* and spacing with theme.spacing() o... |
| 33:11 | Mui | 🟡 Warning | Grid component without responsive breakpoints | Add responsive props like xs={12} md={6} for mobile-first design |
| 35:15 | Mui | 🟡 Warning | Grid component without responsive breakpoints | Add responsive props like xs={12} md={6} for mobile-first design |

### 📄 [`src\components\home\CallToAction.tsx`](src\components\home\CallToAction.tsx)

| Line:Col | Category | Severity | Issue | Suggestion |
|----------|----------|----------|-------|------------|
| 12:27 | Mui | 🟡 Warning | Hardcoded colors and spacing detected - use theme tokens instead | Replace hardcoded colors with theme.palette.* and spacing with theme.spacing() o... |
| 16:9 | Mui | 🟡 Warning | Grid component without responsive breakpoints | Add responsive props like xs={12} md={6} for mobile-first design |
| 21:11 | Mui | 🟡 Warning | Grid component without responsive breakpoints | Add responsive props like xs={12} md={6} for mobile-first design |
| 35:30 | Mui | 🟡 Warning | Hardcoded colors and spacing detected - use theme tokens instead | Replace hardcoded colors with theme.palette.* and spacing with theme.spacing() o... |
| 41:11 | Mui | 🟡 Warning | Grid component without responsive breakpoints | Add responsive props like xs={12} md={6} for mobile-first design |
| 79:32 | Mui | 🟡 Warning | Hardcoded colors and spacing detected - use theme tokens instead | Replace hardcoded colors with theme.palette.* and spacing with theme.spacing() o... |

### Responsive

| File | Line:Col | Category | Severity | Issue | Suggestion |
|------|----------|----------|----------|-------|------------|
| [`src\components\ui\Button.tsx`](src\components\ui\Button.tsx) | 22:5 | Responsive | 🟡 Warning | Fixed pixel dimensions may cause responsive issues | Use relative units (%, rem, vw) or responsive breakpoints |
| [`src\lib\theme.ts`](src\lib\theme.ts) | 27:20 | Responsive | 🟡 Warning | Fixed pixel dimensions may cause responsive issues | Use relative units (%, rem, vw) or responsive breakpoints |
| [`src\components\ui\Button.tsx`](src\components\ui\Button.tsx) | 27:5 | Responsive | 🟡 Warning | Fixed pixel dimensions may cause responsive issues | Use relative units (%, rem, vw) or responsive breakpoints |
| [`src\components\ui\Button.tsx`](src\components\ui\Button.tsx) | 32:5 | Responsive | 🟡 Warning | Fixed pixel dimensions may cause responsive issues | Use relative units (%, rem, vw) or responsive breakpoints |
| [`src\lib\theme.ts`](src\lib\theme.ts) | 34:20 | Responsive | 🟡 Warning | Fixed pixel dimensions may cause responsive issues | Use relative units (%, rem, vw) or responsive breakpoints |
| [`src\components\ui\Button.tsx`](src\components\ui\Button.tsx) | 37:5 | Responsive | 🟡 Warning | Fixed pixel dimensions may cause responsive issues | Use relative units (%, rem, vw) or responsive breakpoints |
| [`src\components\ui\Button.tsx`](src\components\ui\Button.tsx) | 38:5 | Responsive | 🟡 Warning | Fixed pixel dimensions may cause responsive issues | Use relative units (%, rem, vw) or responsive breakpoints |
| [`src\lib\theme.ts`](src\lib\theme.ts) | 48:20 | Responsive | 🟡 Warning | Fixed pixel dimensions may cause responsive issues | Use relative units (%, rem, vw) or responsive breakpoints |
| [`src\components\home\Hero.tsx`](src\components\home\Hero.tsx) | 56:41 | Responsive | 🟡 Warning | Fixed pixel dimensions may cause responsive issues | Use relative units (%, rem, vw) or responsive breakpoints |

---

### 📄 [`src\lib\theme.ts`](src\lib\theme.ts)

| Line:Col | Category | Severity | Issue | Suggestion |
|----------|----------|----------|-------|------------|
| 27:20 | Responsive | 🟡 Warning | Fixed pixel dimensions may cause responsive issues | Use relative units (%, rem, vw) or responsive breakpoints |
| 34:20 | Responsive | 🟡 Warning | Fixed pixel dimensions may cause responsive issues | Use relative units (%, rem, vw) or responsive breakpoints |
| 48:20 | Responsive | 🟡 Warning | Fixed pixel dimensions may cause responsive issues | Use relative units (%, rem, vw) or responsive breakpoints |

### 📄 [`src\components\ui\Button.tsx`](src\components\ui\Button.tsx)

| Line:Col | Category | Severity | Issue | Suggestion |
|----------|----------|----------|-------|------------|
| 22:5 | Responsive | 🟡 Warning | Fixed pixel dimensions may cause responsive issues | Use relative units (%, rem, vw) or responsive breakpoints |
| 27:5 | Responsive | 🟡 Warning | Fixed pixel dimensions may cause responsive issues | Use relative units (%, rem, vw) or responsive breakpoints |
| 32:5 | Responsive | 🟡 Warning | Fixed pixel dimensions may cause responsive issues | Use relative units (%, rem, vw) or responsive breakpoints |
| 37:5 | Responsive | 🟡 Warning | Fixed pixel dimensions may cause responsive issues | Use relative units (%, rem, vw) or responsive breakpoints |
| 38:5 | Responsive | 🟡 Warning | Fixed pixel dimensions may cause responsive issues | Use relative units (%, rem, vw) or responsive breakpoints |

### 📄 [`src\components\home\Hero.tsx`](src\components\home\Hero.tsx)

| Line:Col | Category | Severity | Issue | Suggestion |
|----------|----------|----------|-------|------------|
| 56:41 | Responsive | 🟡 Warning | Fixed pixel dimensions may cause responsive issues | Use relative units (%, rem, vw) or responsive breakpoints |

### I18n

| File | Line:Col | Category | Severity | Issue | Suggestion |
|------|----------|----------|----------|-------|------------|
| [`src\lib\theme.ts`](src\lib\theme.ts) | 1:1 | I18n | 🟡 Warning | RTL cache not configured for MUI | Add RTL cache: const cacheRtl = createCache({ key: "mui-rtl"... |
| [`src\app\layout.tsx`](src\app\layout.tsx) | 1:1 | I18n | 🟡 Warning | RTL cache not configured for MUI | Add RTL cache: const cacheRtl = createCache({ key: "mui-rtl"... |
| [`src\lib\theme.ts`](src\lib\theme.ts) | 1:1 | I18n | 🔵 Info | Consider adding RTL HTML direction support | Add <Html dir="rtl"> support for RTL locales |
| [`src\app\layout.tsx`](src\app\layout.tsx) | 1:1 | I18n | 🔵 Info | Consider adding RTL HTML direction support | Add <Html dir="rtl"> support for RTL locales |

---

### 📄 [`src\lib\theme.ts`](src\lib\theme.ts)

| Line:Col | Category | Severity | Issue | Suggestion |
|----------|----------|----------|-------|------------|
| 1:1 | I18n | 🟡 Warning | RTL cache not configured for MUI | Add RTL cache: const cacheRtl = createCache({ key: "mui-rtl", stylisPlugins: [rt... |
| 1:1 | I18n | 🔵 Info | Consider adding RTL HTML direction support | Add <Html dir="rtl"> support for RTL locales |

### 📄 [`src\app\layout.tsx`](src\app\layout.tsx)

| Line:Col | Category | Severity | Issue | Suggestion |
|----------|----------|----------|-------|------------|
| 1:1 | I18n | 🟡 Warning | RTL cache not configured for MUI | Add RTL cache: const cacheRtl = createCache({ key: "mui-rtl", stylisPlugins: [rt... |
| 1:1 | I18n | 🔵 Info | Consider adding RTL HTML direction support | Add <Html dir="rtl"> support for RTL locales |

### Seo

| File | Line:Col | Category | Severity | Issue | Suggestion |
|------|----------|----------|----------|-------|------------|
| [`src\app\layout.tsx`](src\app\layout.tsx) | 1:1 | Seo | 🔴 Error | Missing page title tag | Add <title>Your Page Title</title> |
| [`src\app\layout.tsx`](src\app\layout.tsx) | 1:1 | Seo | 🟡 Warning | Missing meta tag: description | Add <meta name="description" content="Your description here"... |
| [`src\app\layout.tsx`](src\app\layout.tsx) | 1:1 | Seo | 🟡 Warning | Missing meta tag: keywords | Add <meta name="keywords" content="Your keywords here"> |
| [`src\app\layout.tsx`](src\app\layout.tsx) | 1:1 | Seo | 🟡 Warning | Missing meta tag: author | Add <meta name="author" content="Your author here"> |
| [`src\app\layout.tsx`](src\app\layout.tsx) | 1:1 | Seo | 🟡 Warning | Missing Open Graph tag: og:title | Add <meta property="og:title" content="Your title here"> |
| [`src\app\layout.tsx`](src\app\layout.tsx) | 1:1 | Seo | 🟡 Warning | Missing Open Graph tag: og:description | Add <meta property="og:description" content="Your descriptio... |
| [`src\app\layout.tsx`](src\app\layout.tsx) | 1:1 | Seo | 🟡 Warning | Missing Open Graph tag: og:image | Add <meta property="og:image" content="Your image here"> |
| [`src\app\layout.tsx`](src\app\layout.tsx) | 1:1 | Seo | 🟡 Warning | Missing Open Graph tag: og:type | Add <meta property="og:type" content="Your type here"> |
| [`src\app\layout.tsx`](src\app\layout.tsx) | 1:1 | Seo | 🔵 Info | Missing structured data markup | Add JSON-LD structured data for better SEO and rich snippets |

---

### 📄 [`src\app\layout.tsx`](src\app\layout.tsx)

| Line:Col | Category | Severity | Issue | Suggestion |
|----------|----------|----------|-------|------------|
| 1:1 | Seo | 🟡 Warning | Missing meta tag: description | Add <meta name="description" content="Your description here"> |
| 1:1 | Seo | 🟡 Warning | Missing meta tag: keywords | Add <meta name="keywords" content="Your keywords here"> |
| 1:1 | Seo | 🟡 Warning | Missing meta tag: author | Add <meta name="author" content="Your author here"> |
| 1:1 | Seo | 🟡 Warning | Missing Open Graph tag: og:title | Add <meta property="og:title" content="Your title here"> |
| 1:1 | Seo | 🟡 Warning | Missing Open Graph tag: og:description | Add <meta property="og:description" content="Your description here"> |
| 1:1 | Seo | 🟡 Warning | Missing Open Graph tag: og:image | Add <meta property="og:image" content="Your image here"> |
| 1:1 | Seo | 🟡 Warning | Missing Open Graph tag: og:type | Add <meta property="og:type" content="Your type here"> |
| 1:1 | Seo | 🔴 Error | Missing page title tag | Add <title>Your Page Title</title> |
| 1:1 | Seo | 🔵 Info | Missing structured data markup | Add JSON-LD structured data for better SEO and rich snippets |

### Performance

| File | Line:Col | Category | Severity | Issue | Suggestion |
|------|----------|----------|----------|-------|------------|
| [`src\components\ui\Button.tsx`](src\components\ui\Button.tsx) | 1:1 | Performance | 🟡 Warning | Too many client components may impact performance |  |
| [`src\components\shared\Navbar.tsx`](src\components\shared\Navbar.tsx) | 1:1 | Performance | 🟡 Warning | Too many client components may impact performance |  |

---

### 📄 [`src\components\ui\Button.tsx`](src\components\ui\Button.tsx)

| Line:Col | Category | Severity | Issue | Suggestion |
|----------|----------|----------|-------|------------|
| 1:1 | Performance | 🟡 Warning | Too many client components may impact performance |  |

### 📄 [`src\components\shared\Navbar.tsx`](src\components\shared\Navbar.tsx)

| Line:Col | Category | Severity | Issue | Suggestion |
|----------|----------|----------|-------|------------|
| 1:1 | Performance | 🟡 Warning | Too many client components may impact performance |  |

### Structure

| File | Line:Col | Category | Severity | Issue | Suggestion |
|------|----------|----------|----------|-------|------------|
| [``]() | 1:1 | Structure | 🔵 Info | Sitemap is missing | Create sitemap.xml for better SEO |
| [``]() | 1:1 | Structure | 🔵 Info | Consider adding 192x192 PWA icon | Add 192x192 icon for better PWA compatibility |
| [``]() | 1:1 | Structure | 🔵 Info | Consider adding 512x512 PWA icon | Add 512x512 icon for better PWA compatibility |
| [``]() | 1:1 | Structure | 🔵 Info | Large images should be organized in dedicated folders | Move large images to images/ or assets/ folder for better or... |

---

### 📄 [`public/`](public/)

| Line:Col | Category | Severity | Issue | Suggestion |
|----------|----------|----------|-------|------------|
| 1:1 | Structure | 🔵 Info | Sitemap is missing | Create sitemap.xml for better SEO |
| 1:1 | Structure | 🔵 Info | Consider adding 192x192 PWA icon | Add 192x192 icon for better PWA compatibility |
| 1:1 | Structure | 🔵 Info | Consider adding 512x512 PWA icon | Add 512x512 icon for better PWA compatibility |
| 1:1 | Structure | 🔵 Info | Large images should be organized in dedicated folders | Move large images to images/ or assets/ folder for better organization |



---

## 📋 All Files with Issues Summary

| File | Score | Issues | Critical |
|------|-------|--------|----------|
| [`next.config.ts`](next.config.ts) | ⚫ 32/100 | 5 | 4 |
| [`public\sw.js`](public\sw.js) | ⚫ 0/100 | 26 | 6 |
| [`src\lib\theme.ts`](src\lib\theme.ts) | ⚫ 0/100 | 22 | 0 |
| [`src\components\PWAProvider.tsx`](src\components\PWAProvider.tsx) | ⚫ 0/100 | 15 | 1 |
| [`src\components\PWAInstallPrompt.tsx`](src\components\PWAInstallPrompt.tsx) | ⚫ 0/100 | 18 | 3 |
| [`src\app\page.tsx`](src\app\page.tsx) | 🟡 84/100 | 2 | 0 |
| [`src\app\layout.tsx`](src\app\layout.tsx) | ⚫ 0/100 | 22 | 3 |
| [`src\components\ui\Button.tsx`](src\components\ui\Button.tsx) | ⚫ 0/100 | 20 | 0 |
| [`src\components\shared\SpecialHeading.tsx`](src\components\shared\SpecialHeading.tsx) | 🟡 84/100 | 2 | 0 |
| [`src\components\shared\Navbar.tsx`](src\components\shared\Navbar.tsx) | ⚫ 0/100 | 11 | 3 |
| [`src\components\shared\Footer.tsx`](src\components\shared\Footer.tsx) | 🔴 68/100 | 4 | 0 |
| [`src\components\shared\Card.tsx`](src\components\shared\Card.tsx) | ⚫ 52/100 | 6 | 0 |
| [`src\components\providers\ThemeProvider.tsx`](src\components\providers\ThemeProvider.tsx) | 🟡 84/100 | 2 | 0 |
| [`src\components\home\WhyPureWash.tsx`](src\components\home\WhyPureWash.tsx) | 🔴 68/100 | 4 | 0 |
| [`src\components\home\Subscription.tsx`](src\components\home\Subscription.tsx) | 🟠 76/100 | 3 | 0 |
| [`src\components\home\Services.tsx`](src\components\home\Services.tsx) | 🔴 68/100 | 4 | 0 |
| [`src\components\home\Hero.tsx`](src\components\home\Hero.tsx) | ⚫ 20/100 | 10 | 0 |
| [`src\components\home\FuturePlans.tsx`](src\components\home\FuturePlans.tsx) | 🔴 60/100 | 5 | 0 |
| [`src\components\home\CallToAction.tsx`](src\components\home\CallToAction.tsx) | ⚫ 44/100 | 7 | 0 |
| [`public/`](public/) | 🟡 80/100 | 5 | 0 |


---

## 📋 ESLint Analysis

**Total ESLint Issues:** 0

**Issues by Severity:**

**Files with ESLint Issues:**



---

## 📈 Detailed Metrics & Statistics

#### 📊 File Statistics

- **Total Files Scanned:** 19
- **Files with Issues:** 20
- **Clean Files:** 0

#### 📈 Score Distribution

- **80-89:** 4 files
- **70-79:** 1 files
- **60-69:** 4 files
- **0-59:** 11 files

#### 🚨 Issue Severity Distribution

- **🔴 Error:** 20 issues
- **🟡 Warning:** 165 issues
- **🔵 Info:** 8 issues

#### 🎯 Category Impact Analysis

- **Pwa:** 12 issues, Avg Score: 10/100
- **Security:** 4 issues, Avg Score: 2/100
- **Nextjs:** 5 issues, Avg Score: 0/100
- **Quality:** 70 issues, Avg Score: 65/100
- **Accessibility:** 12 issues, Avg Score: 0/100
- **Mui:** 62 issues, Avg Score: 68/100
- **Responsive:** 9 issues, Avg Score: 1/100
- **I18n:** 4 issues, Avg Score: 0/100
- **Seo:** 9 issues, Avg Score: 0/100
- **Performance:** 2 issues, Avg Score: 0/100
- **Structure:** 4 issues, Avg Score: 16/100


---

## 🎯 Priority Matrix

#### 🔴 High Priority (Errors)

| File | Line | Issue |
|------|------|-------|
| [`next.config.ts`](next.config.ts) | 1:1 | next-pwa not configured in next.config.js... |
| [`next.config.ts`](next.config.ts) | 1:1 | Security headers function not configured... |
| [`next.config.ts`](next.config.ts) | 1:1 | No runtime caching strategy configured... |
| [`next.config.ts`](next.config.ts) | 1:1 | Offline fallback route not configured... |
| [`public\sw.js`](public\sw.js) | 145:22 | SSR hydration mismatch detected - non-deterministic values i... |
| [`public\sw.js`](public\sw.js) | 145:16 | Date.now() detected - this causes SSR hydration mismatches... |
| [`public\sw.js`](public\sw.js) | 213:1 | Unsafe eval() usage detected... |
| [`public\sw.js`](public\sw.js) | 168:34 | Interactive elements must be keyboard accessible... |
| [`public\sw.js`](public\sw.js) | 1:1 | No runtime caching strategy configured... |
| [`public\sw.js`](public\sw.js) | 1:1 | Offline fallback route not configured... |

#### 🟡 Medium Priority (Warnings)

| File | Line | Issue |
|------|------|-------|
| [`next.config.ts`](next.config.ts) | 1:1 | No runtime caching strategy configured... |
| [`public\sw.js`](public\sw.js) | 26:3 | Console statement in production code... |
| [`public\sw.js`](public\sw.js) | 30:9 | Console statement in production code... |
| [`public\sw.js`](public\sw.js) | 34:9 | Console statement in production code... |
| [`public\sw.js`](public\sw.js) | 38:9 | Console statement in production code... |
| [`public\sw.js`](public\sw.js) | 45:3 | Console statement in production code... |
| [`public\sw.js`](public\sw.js) | 52:15 | Console statement in production code... |
| [`public\sw.js`](public\sw.js) | 59:9 | Console statement in production code... |
| [`public\sw.js`](public\sw.js) | 84:11 | Console statement in production code... |
| [`public\sw.js`](public\sw.js) | 88:9 | Console statement in production code... |

#### 🔵 Low Priority (Info)

| File | Line | Issue |
|------|------|-------|
| [`src\lib\theme.ts`](src\lib\theme.ts) | 1:1 | Consider adding RTL HTML direction support... |
| [`src\app\layout.tsx`](src\app\layout.tsx) | 1:1 | Missing structured data markup... |
| [`src\app\layout.tsx`](src\app\layout.tsx) | 1:1 | Consider adding RTL HTML direction support... |
| [`src\components\shared\Navbar.tsx`](src\components\shared\Navbar.tsx) | 1:1 | Imports should be ordered: React -> External -> Internal... |
| [``](public/) | 1:1 | Sitemap is missing... |
| [``](public/) | 1:1 | Consider adding 192x192 PWA icon... |
| [``](public/) | 1:1 | Consider adding 512x512 PWA icon... |
| [``](public/) | 1:1 | Large images should be organized in dedicated folders... |



---

## 🛠️ How to Fix Issues

### 🚨 Critical Issues (Fix First)
- **Errors (🔴):** These must be fixed before production deployment
- **Security Issues:** Address immediately to prevent vulnerabilities
- **PWA Issues:** Required for PWA functionality

### ⚠️ Important Issues (Fix Soon)
- **Warnings (🟡):** These should be addressed in the next development cycle
- **Performance Issues:** Will impact user experience
- **Accessibility Issues:** Required for compliance

### 💡 Enhancement Issues (Fix When Possible)
- **Info (🔵):** These are suggestions for improvement
- **Code Quality:** Will improve maintainability
- **SEO Optimizations:** Will improve search rankings

### 🛠️ General Fix Strategy
1. **Start with Errors** - Fix all critical issues first
2. **Address Warnings** - Fix important issues next
3. **Review Info Items** - Implement improvements when time allows
4. **Re-run Audit** - Verify all issues are resolved
5. **Monitor Regularly** - Run audits during development

---

*Generated by Next.js + MUI Audit Toolkit v1.0.0 By @dev-mhany*
