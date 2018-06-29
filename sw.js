// OBJECTIVES
// + store actual page
// + store server response
// + store rate
// + store chart
// + update page when updates show
// + show toaster for 'new updates'
// + show poster saying 'showing old posts'


const CACHE_NAME = "alc-v5";

this.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME).then(
            (cache) => {
                return cache.addAll([
                    '/index.html',
                    '/main.5e197483e089933b15dc.js',
                    '/polyfills.7a0e6866a34e280f48e7.js',
                    '/runtime.a66f828dca56eeb90e02.js',
                    '/styles.7621cbd6ab483dbe4bee.css',
                    '/manifest.json',
                    'https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxPKTU1Kg.ttf'
                ]);
            }
        )       
    );
})

// delete stale caches
self.addEventListener('activate', function(event) {
    event.waitUntil(
      caches.keys().then(function(cacheNames) {
        return Promise.all(
          cacheNames.filter(function(cacheName) {
            return cacheName.startsWith('alc-') &&
                   cacheName != CACHE_NAME;
          }).map(function(cacheName) {
            return caches.delete(cacheName);
          })
        );
      })
    );
});

// send requests over the network first and cache the response
// if the network fails
// try to serve from the cache
self.addEventListener('fetch', event => {

    event.respondWith(
                
        fetch(event.request)
        .then(function(newResponse) {
            const response = newResponse.clone();
            console.log(`Adding network response to cache`)

            caches.open(CACHE_NAME).then(
                cache => cache.put(event.request, response)
                              .catch( err => console.log(`ERROR while attempting to cache: ${err}`))
            )

            return newResponse
        })
        .catch(function(error) {
            console.log('Network failed. Now serving from cache', error)
            return caches.match(event.request)
        })

    );
});

self.addEventListener('message', event => {
    if (event.data.action == 'skipWaiting') {
        console.log('message recieved');
        self.skipWaiting();
    }
})