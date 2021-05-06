'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "7170389726f7c8264b91157dfed85b21",
"assets/assets/1.png": "c3ff10041dca94620c90c8331dfd00c8",
"assets/assets/2.png": "8374bbc3c2c6410c8b74daa4fa66f633",
"assets/assets/logo.png": "88b01f681a96ed7c964f17c6c08e36be",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "32935d0270d07d764880713113492947",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"i/linkkader.github.io/.git/COMMIT_EDITMSG": "d778d8b1f42d0dd1bb284e5ca9549187",
"i/linkkader.github.io/.git/config": "920a11de313bfb8d93d81f4a3a5b71b6",
"i/linkkader.github.io/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"i/linkkader.github.io/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"i/linkkader.github.io/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"i/linkkader.github.io/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"i/linkkader.github.io/.git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
"i/linkkader.github.io/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"i/linkkader.github.io/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"i/linkkader.github.io/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"i/linkkader.github.io/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"i/linkkader.github.io/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"i/linkkader.github.io/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"i/linkkader.github.io/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"i/linkkader.github.io/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"i/linkkader.github.io/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"i/linkkader.github.io/.git/index": "821a7d63a583776ff663c375a0a3c423",
"i/linkkader.github.io/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"i/linkkader.github.io/.git/logs/HEAD": "21eff9f288f79cf9d3f9c446bf356e8f",
"i/linkkader.github.io/.git/logs/refs/heads/main": "21eff9f288f79cf9d3f9c446bf356e8f",
"i/linkkader.github.io/.git/objects/6f/9509c88bed7080d496fc5e1d87a9315e30549d": "c02716d7aaed30ce1c5697a2fb40d317",
"i/linkkader.github.io/.git/objects/81/6760a73a6597a7972dc38eec19c5b376633307": "814bf4e16408ad1ece87db69f23d706b",
"i/linkkader.github.io/.git/objects/df/e0770424b2a19faf507a501ebfc23be8f54e7b": "76f8baefc49c326b504db7bf751c967d",
"i/linkkader.github.io/.git/refs/heads/main": "b75a4e777de9e98b14c3ab59bc1633be",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "a7a8531b9fcbc0969d9d370a0d773ca7",
"/": "a7a8531b9fcbc0969d9d370a0d773ca7",
"linkkader.github.io/.git/COMMIT_EDITMSG": "d778d8b1f42d0dd1bb284e5ca9549187",
"linkkader.github.io/.git/config": "920a11de313bfb8d93d81f4a3a5b71b6",
"linkkader.github.io/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"linkkader.github.io/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"linkkader.github.io/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"linkkader.github.io/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"linkkader.github.io/.git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
"linkkader.github.io/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"linkkader.github.io/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"linkkader.github.io/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"linkkader.github.io/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"linkkader.github.io/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"linkkader.github.io/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"linkkader.github.io/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"linkkader.github.io/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"linkkader.github.io/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"linkkader.github.io/.git/index": "f4da1d1ead8f0aadfdba23ec06f11346",
"linkkader.github.io/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"linkkader.github.io/.git/logs/HEAD": "174eda5416349f531d94de262a262e57",
"linkkader.github.io/.git/logs/refs/heads/main": "174eda5416349f531d94de262a262e57",
"linkkader.github.io/.git/objects/6f/9509c88bed7080d496fc5e1d87a9315e30549d": "c02716d7aaed30ce1c5697a2fb40d317",
"linkkader.github.io/.git/objects/df/e0770424b2a19faf507a501ebfc23be8f54e7b": "76f8baefc49c326b504db7bf751c967d",
"linkkader.github.io/.git/objects/f8/4fbe5bcb7e8e856337b541ddd7c638b3f5c517": "9c1241517c19b9e8535397dd4ad0a252",
"linkkader.github.io/.git/refs/heads/main": "cfaf23355f01b205b95a1bb974941a2f",
"main.dart.js": "20894d14c826ac8850b94307f3279f1d",
"manifest.json": "0ceccd831badde5b973e7af798d27ec1",
"version.json": "fb800d37cb51ce25f91a8114a375508b"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
