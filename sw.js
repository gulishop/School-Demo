// sw.js - Demo Service Worker
const CACHE_NAME = 'sms-demo-v1';
const urlsToCache = [
  '/School-Demo/',
  '/School-Demo/index.html',
  '/School-Demo/manifest.json',
  '/School-Demo/icon-192.png',
  '/School-Demo/icon-512.png'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        return response || fetch(event.request);
      })
  );
});
