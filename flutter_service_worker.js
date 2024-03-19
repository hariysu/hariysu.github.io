'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "6b9bcfa4ca873b42d962203171eaf114",
"index.html": "e291d6d62cf7843716f07dda064b6b02",
"/": "e291d6d62cf7843716f07dda064b6b02",
"CNAME": "3e262c362cef47be6fdee107290e9292",
"main.dart.js": "026e69469241460bff1d34329b8a47ef",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "7eb73808781cf43ab5d2cd3a750587aa",
".git/ORIG_HEAD": "a5dc7bc3e9369eb702719a327c239802",
".git/config": "60312cd8f9745cd376c14bc347c36a2a",
".git/objects/0d/d22ed4be7a834bf96bbd998f66e0d5db4555ac": "06bcea4ff467b297ffdcab9664990d9d",
".git/objects/56/e555f6310c7b1e9852defec3d6905d942fa3b5": "5fb07622de552a82efd6fbdae4f0a8e3",
".git/objects/94/944665c70b8bd0d460d79e37304d4095ed0179": "fa650dff502300c5d04d3cc6bf7cf48c",
".git/objects/5f/d8d64f469a0c09fe47d7debec27eb14c5d9210": "1152e4517dba24b1ceb707e21d6f5016",
".git/objects/05/8db9de10d7057dbbec73a4986332fe30bd67ec": "78df9239a8e23c7af8148cf0d241d2c8",
".git/objects/05/641d68107e1af195d7684778f392873e44471d": "8155f9f09802448720e61d9e1e5d6121",
".git/objects/ab/025215f786f5d025eb0b35ea4e2e642ec5138a": "bed3049970f18f303e2d5794a1ae8dc1",
".git/objects/fc/13bdcd91e30d89c28477242b95f97accf66405": "26a862295a8ca44d94e8d44918de0cbf",
".git/objects/f5/bccbcb5d955ef67024fbccbb9fb6dc79e45bda": "0cbca8029b6f6a6b708c0a44a9800c93",
".git/objects/c6/0f90e9d48c1ec434c8f094e0677fa252534a3c": "d24677fc16345d4c6878d0cc7dd31ab8",
".git/objects/pack/pack-7bdb392d350497ca5af4900526a6f84f7a883ec2.idx": "ec8627aea282b0b700700d8fec7f3e65",
".git/objects/pack/pack-7bdb392d350497ca5af4900526a6f84f7a883ec2.pack": "07467b3b6c19a3663d568fc4e11d388f",
".git/objects/80/785dbd64494168c42015223ed2594af607ceaa": "b251214510716dd9e9e58996de92a02a",
".git/objects/8a/76d1a6153544db302b8718c90bf216f2a298e7": "e5b7063065e9c7beb4206c5574c5e7c9",
".git/objects/4c/76da6658e5e5e4a731d7d47896740ee9f72c8f": "1e2eb2f518522f6482ed35d3eb28d9bc",
".git/objects/5c/de143af674c291b676a3a7a8c9d30f5ec655dc": "c35eaba63f380abdc9f6c5e1d272a6cd",
".git/objects/bf/fc5d2fbb0bd2ffbce465a0a49551c5fa6dd728": "c8f6f47e7733542dd663e6774949dbcb",
".git/objects/bf/7f3fad9f661d447378bdaa1d687c6155d39448": "4a01bef6735c84f79bdcb0f6713c7e78",
".git/objects/d3/10cbfa18d8a593e3c044f8dfc4fd06aae08bca": "bc82eb018d78a8c9a54433ed3a65b10b",
".git/objects/b6/14f70b664201781ea8eefd734a8cb6e9e43624": "c6f4f09f787af4036049713ee04ddbc6",
".git/objects/aa/d88f0fbd493653e27ccd7499b6bb05a337e7aa": "e50c28cfb7c449ba6005b8a957c33c1a",
".git/objects/db/54369eb95055aa548112a6194e23fd8a553139": "441f6572a6e60f80a7c18c10b2757d03",
".git/objects/f9/94dd86f74cf989bb0a122990c8be7a10483a9a": "3e66001375676aebda26f36618c98b13",
".git/objects/f0/b2ac6b1d221a21b54469431de1dbbe806c598d": "056ef9b61137f50b02cecf6c83c27a6f",
".git/objects/13/3fac224d1dfe240adc78c8df32081dadeff80b": "9a31adebc37cf612fea6aabacb2c2d74",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "699a07ce77597b5ccf65c7e53744432c",
".git/logs/refs/heads/master": "699a07ce77597b5ccf65c7e53744432c",
".git/logs/refs/remotes/origin/HEAD": "1b6249644d5e4443f6d8b3768bc0c537",
".git/logs/refs/remotes/origin/master": "eac76cb71b38e53e8a13da1f864fb283",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "12aa0a955b0ea263f8b01dc807b3d6bc",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "12aa0a955b0ea263f8b01dc807b3d6bc",
".git/index": "9651868609932694791a4d91a6b75e12",
".git/packed-refs": "10372ab366d4908f235c1b3ccc81293d",
".git/COMMIT_EDITMSG": "524ddf1f8058ecf7e5b8fff3a83f25b6",
".git/FETCH_HEAD": "7a7410379ad6344a7f34ea9181aea907",
"assets/AssetManifest.json": "459ba591e0356d58183c5ad59417ab13",
"assets/NOTICES": "66ec902684035742083a5b6f245b2e47",
"assets/FontManifest.json": "480f2ecbe54db85487e1571bd24600a4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/medium.png": "3c7f4d8050ba1e9154ef9b488dcb9f4b",
"assets/assets/linkedin.png": "30c453b7f5fbdb09ea0cb42a5dc7a6e5",
"assets/assets/github-mark.png": "43ce87609eb221d09d4832a9c0e709d0",
"assets/assets/img_hello_git.jpg": "1b17991ea05973c265958a1b6bec1a2b",
"assets/assets/fonts/OpenSans-VariableFont_wdth,wght.ttf": "996d0154a25c63500dee2ae91e4f2ea7",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
