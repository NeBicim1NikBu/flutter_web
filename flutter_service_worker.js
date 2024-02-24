'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "d970c6722051b356ad3a632e9eee1e4f",
".git/config": "b69e1ac9d5628fd998c9cbe52bbb9eca",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d26b2016032b00c7acfa40e0687dbdf1",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "b1cd5c3772d15c7de15fa2bc52358730",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "10be1708d2c7f9a5c823b5d359507cd6",
".git/logs/refs/heads/main": "98e3ecf71ef8a150968feeb21d0a7a51",
".git/logs/refs/heads/master": "cf2384af906bec9864676b6c81d8df0f",
".git/logs/refs/remotes/flutter_everyday/main": "1faa5568605c6cb3f58064943ab06810",
".git/logs/refs/remotes/flutter_everyday/master": "cd0a6dab67b54dab845ea9db801d1a55",
".git/logs/refs/remotes/flutter_everyday/old_main": "9a58d0ba7ee65f670ab38b980e341cf7",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/0c/5c7f02cc775c766b0a5b716d52e0846085cde1": "f10fac0c0d7a234dd197a3481d0ef2f6",
".git/objects/0c/8b371fca46f9abea29a314f6977445bc3a2777": "dc954dc2f1046ee980eec6e8e742ecbc",
".git/objects/12/417cafc1c2c0769cc68067feefebc8b16af5e9": "220591bdc8bef23af0da551fa86d7023",
".git/objects/15/175d16a956b69384badad96ad6b88921d7d99c": "ee16ff06abf4e30943d711ce5a30810f",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/17/126f24af5d56584c1668ad36946d265a467650": "bc2a7d2703077feb8c2ff103e33062d8",
".git/objects/1a/162b7233124ef00ec126cc792d09bbc6d1e28b": "90e8527d0c79f656527abf692098ff33",
".git/objects/1b/0d81f4117777c5970b829f5cc65f9c15cdf6cf": "be74c056720b855428de9ae1598da70d",
".git/objects/1d/90d5df15addd343fca125b4bf0dcf269745543": "2ef59161d202fd2e5843f0f50d7d8cb8",
".git/objects/1f/dea9924e406d7f0aa2d0e949a4e70dd8cf6252": "c76ce4c79e1cd14dbf509514d559403c",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/22/1a910c49fd9aa7fe09917631f4bfd9a09142f3": "620879d32c1fa5f55e504c0665fd3cdc",
".git/objects/2b/dc4abcebf19e1928eb95839a3b72ea7a4eeeec": "9b375f9b67694a67a3a277faaf825cb6",
".git/objects/2c/a09d34e6fb6204d4df63b603ab083f21efd663": "09ff1b8202245261eaa37e550fb3d8a9",
".git/objects/2e/da4a86f27cd7f51003462bce00af11341e8dfd": "0367bdd85942545681580af5de32398d",
".git/objects/31/d095934c852bc775c09859df349817d4731569": "468c9615fe9eeb1eff006f0e770680eb",
".git/objects/38/fab5fa00f292f2a271d204546bb23260c0e206": "cc187890f95c11735c8e1e4b3eca367e",
".git/objects/3a/7fae21b9f056904ae0034829b72b16329698bc": "fb828901847a0155b317d141a981944a",
".git/objects/3f/090f423dfcc5eebf2bb634494828c450baecee": "ce3a8fff7469d6d64f69283950d36cb2",
".git/objects/43/9bc78087a732ba6f32b78e8d469b130bcc6e32": "d2d68fc815c4622184d57c982bba25ac",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/59c38bd20c3b630f42a2c147533a0a7b132d57": "31ff549806c69fbf2d5c415651b718f2",
".git/objects/49/e737b4236f697742ab68ea159f88f93982e5f7": "7ccd3f525f04126c0794e7df4be1b05e",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4a/526f43f0fe903e9cd42908dfd568835a833353": "10abdea3c13f4132d26c45551a6d9163",
".git/objects/4c/16b5a6dd4d767380f7677e70fdaf8541df497b": "30e1a1a11bfbaffec77d635106cd903f",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/54/90fe1c1b80d581cc3cea96fc5ef210f5b44f4d": "41056cf975c3fc606bac06d9b38acde6",
".git/objects/56/feddb0c5675f3d696a17a14d6caf12d198d34f": "3c0f4f5cecd6ce9fe2a30edd378e5f10",
".git/objects/57/7fdc056ece8be21e8424f1478437471c940736": "efe280c78492601af20891650937dde5",
".git/objects/58/b864c979473bff7e3efcc63a750a75c263b8f8": "998347aaa93abdb32569ccb6bcfab272",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/5a/ca59a60ff62d44959e1045f3f3ed546b75414a": "72925cbb48f977139e91aaaded3267b1",
".git/objects/64/a3c4dd2fd24abb4e4e6f24c9741789230d2aea": "f18e498f02e0f7969e210e185a969f90",
".git/objects/65/7c44ceb8bf8e1479a605a78d38746b5c93b841": "81bae135593004908cecdaca6e9a216c",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/6f/803b83319659bcff02e664e426e9c1fcc154d3": "b78cafdcbea7e187bf18bdf788671ce3",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/7b/5ed8aad2e8c2e58578bce28ddeba58fc126a98": "f9a31a42a713bec1fdf764108e916e5e",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/82/8ee7f13bc2819bdfcdf17815719d9123b790a7": "34c031d3ad964cd0a5d10e6e33fc7539",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/9fc481bdbd47802d09bbf2ddb27eb5fe7e26bf": "0081a343f2bd91bac34c5f6b240747c8",
".git/objects/89/e9aad155c72472f83f8d1712fe6472cfe07bf9": "c5520bc5f8040406b69ad4dd95987b51",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/91/fb44f1d837646eb329ff58b3ec54b3fd9538f0": "e016422e03441148bdfa8237de628971",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/98/0320bb9972259bc0d85403615f0b744d2cadc1": "513c37a3e28f7c8d1e61b87895a62311",
".git/objects/98/e7cf52a77dd1f805ab67d6569cf16a9f2ee20d": "6867ff885122cd4432844b642318b94f",
".git/objects/a2/bc1136d55c249c2e9c9c134acd4cad916635e3": "60c668b7ebd9db3a555d3198d6baf005",
".git/objects/a6/e07acbf318d0b2b8f753b0b10019999c07ac92": "138d4ab4927f53298e8c5efa4a56869f",
".git/objects/ab/bf5962941dd4f68a99c4a60572617866b8bd6d": "a7e95ad2705beb33bb9d28a83b9ccb60",
".git/objects/ab/c93553c702641ac3a2e3a8e1d7f98a0e2152d9": "73ba23c5eaeb59d066f3c2d9b65d4868",
".git/objects/ac/ada23a27116c5b016c8ec9e2e620b9a82dcf07": "969c37e4d186b02908aa12b3000c49fe",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bd/ac4c6862760aeeae5ca98c20971f744eb25a43": "c036d2ea1aa24a6e79106ebeda024923",
".git/objects/be/5ce834cd3498d8eb0acc6dfdb3689c53400497": "b195baa65bf0faff818ac7623a45023c",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/ce/20ee681139e84d7bb3f4f6c0dbaea20ee40c47": "0c1561af73176355ef69d242d56d1612",
".git/objects/d1/ca3927c16fef8091391f5b72bdc3c8c91f379d": "41d9ab0b4699d479429f3f107c9737c9",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/53177de22119249124c4606eae74a60a15814b": "2b872c34bf327e0be9ac099bce068fa1",
".git/objects/d5/ae52de8dcdd67c27ce727ef81a2f26a2609d79": "5c68650f0e65360dde66480f3a3de32e",
".git/objects/d6/548050db322f61155473292c7555906799bc43": "4882ee6c0cbe69446574644b470cade4",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e0/4367f44174e5cf4f825196e7d5e998bc16b60a": "b5347c457258aa4649b55daecaa43595",
".git/objects/e1/367e85d58c27d5aaa2b8aaeae8fc78b5f30960": "596ff4a86166969f38c83cf1293abf39",
".git/objects/e3/e9a91f9b3fbb414b567838594d55d62993f820": "04ef78f499cf6f3bfe6c4bcd1b02a156",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/d96e42fe3ff6564363bdddd41908ca522f4977": "2c5e8d787fc266b5f1b1cec86e843667",
".git/objects/ed/7092e2e01dbdeb70040b56082524ae82e8e380": "c2fffeadc86e6dd8bed832c224e49f6a",
".git/objects/ee/386500cbeca82e63493c06d2b14a233e9af7cb": "a82f414f90277a43c0b3f0b24ed6e716",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/ac6a189ffa31db2cdc688334d657ecba4b5b8f": "689badb152d2320617b5542aeded88f9",
".git/objects/f6/f1f8f8d0e73f7947d3cc0ef088b37330397fc0": "23e000074e6db908fc0d74e9aec9f07e",
".git/objects/fa/5656f03fdd6212f0144e05859ef0ab3b42b31b": "77b84fde6550745877de9d676cf80f1a",
".git/objects/fe/201938b94449d005674fed55473a08e6fc0079": "9b9aac518825e535beb56da061db673e",
".git/objects/fe/c35636bf17a0ec00ce4a81da6764d45b6e5d48": "00a4eb9b41f050b30829dd505c300c1d",
".git/objects/ff/35b510d0cbb356da318161c3c477bcb412089b": "cac50090e45de31f2d46cd504892ef29",
".git/objects/ff/f438ba4f88fc0ef8ff28e2021b34023ff64c15": "f440a6d950c9859d1ee12b394afff882",
".git/refs/heads/main": "a168ae28dc48e6c01e95f41d250e2259",
".git/refs/heads/master": "a168ae28dc48e6c01e95f41d250e2259",
".git/refs/remotes/flutter_everyday/main": "a168ae28dc48e6c01e95f41d250e2259",
".git/refs/remotes/flutter_everyday/master": "a168ae28dc48e6c01e95f41d250e2259",
".git/refs/remotes/flutter_everyday/old_main": "ac080e26aaabf166ab18635310007be4",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "3492b308ba3cfc861389ad49a5370684",
"assets/NOTICES": "a35be6efcbb14ea7c6045156047725c2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "3fe12102a3a2b77fcc7a8b977d167183",
"/": "3fe12102a3a2b77fcc7a8b977d167183",
"main.dart.js": "f0887b6a9f7c062e90733322cf7388a4",
"manifest.json": "adb8c638c8d30123323fb73e0713cc0c",
"version.json": "ed2aa11d705e6deff22794acd26137cb"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
