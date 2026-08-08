const CACHE = 'qcmc-v1';
self.addEventListener('install', e => { self.skipWaiting(); });
self.addEventListener('activate', e => { self.clients.claim(); });
self.addEventListener('fetch', e => {
  // Réseau prioritaire, pas de cache agressif (données en temps réel via Firestore)
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
