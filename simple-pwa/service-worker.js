const CACHE_NAME = 'simple-pwa-cache-v1';
const urlsToCache = [
  '/Programming-for-the-web/simple-pwa/index.html',
  '/Programming-for-the-web/simple-pwa/manifest.json',
  '/Programming-for-the-web/simple-pwa/app.js',
  '/Programming-for-the-web/simple-pwa/service-worker.js',
  '/Programming-for-the-web/simple-pwa/icon.png'
];

// Install the service worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

// Fetch resources
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
