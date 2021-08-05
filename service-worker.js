/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "a94e3ac5d66e8acc2de5fe7e343c06a0"
  },
  {
    "url": "assets/css/0.styles.73f24776.css",
    "revision": "e9a2de39b414e0736cb18483403ba172"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.96a46351.js",
    "revision": "249f4305d8d772bafec56c93cdc02f8c"
  },
  {
    "url": "assets/js/10.177f39d8.js",
    "revision": "0e94bebd32a55e4fe06c25ca21cf3df9"
  },
  {
    "url": "assets/js/11.246b1537.js",
    "revision": "c9eccdac3a54eebd325d5a4ea4da51cd"
  },
  {
    "url": "assets/js/12.ca87583f.js",
    "revision": "cabc22a2deb82386c72020698febe10a"
  },
  {
    "url": "assets/js/13.14fc5a5a.js",
    "revision": "8fd9a0c83a0293d3a8060bbcd9e0e631"
  },
  {
    "url": "assets/js/14.2694e2a5.js",
    "revision": "e400ef619dce6a115d78988b806f1049"
  },
  {
    "url": "assets/js/15.9201e764.js",
    "revision": "320b1643df0b58610fde5cf45f2d2a93"
  },
  {
    "url": "assets/js/16.5cc4ad0c.js",
    "revision": "4c9e5c940628a41c1b1fe7f1f7e8da58"
  },
  {
    "url": "assets/js/17.41647850.js",
    "revision": "c17d765fb4e3c577efdf547d165c4b3d"
  },
  {
    "url": "assets/js/18.408f73a0.js",
    "revision": "f3445714fe674437762edc96f6bde133"
  },
  {
    "url": "assets/js/19.d56a2665.js",
    "revision": "d552a02ef7f58eadf3e8ad24a685b983"
  },
  {
    "url": "assets/js/20.828293ce.js",
    "revision": "e032cffd27d8d4d9307b0f44f11f3080"
  },
  {
    "url": "assets/js/21.38129305.js",
    "revision": "24c282d2d73fd7a4505bdf1b66194487"
  },
  {
    "url": "assets/js/22.6140c4a8.js",
    "revision": "5b1d1bafd8e8890520bace4a8ec75214"
  },
  {
    "url": "assets/js/23.f8f591c2.js",
    "revision": "bce7aafd7a4e83c8cd4b4cb4af82cb70"
  },
  {
    "url": "assets/js/24.09ec5f98.js",
    "revision": "525079ee58ce13accb574876daba5183"
  },
  {
    "url": "assets/js/25.4efdb122.js",
    "revision": "385c78be2b9ff892d803e465115e2f91"
  },
  {
    "url": "assets/js/3.239c6fda.js",
    "revision": "0035a4b8d582ffdf71aaae6ae276bb0e"
  },
  {
    "url": "assets/js/4.f12a59d2.js",
    "revision": "738d64adacf8e1761c58281d2ba3ddef"
  },
  {
    "url": "assets/js/5.b11e57ef.js",
    "revision": "a74bd7face4cb87ae06b491f022453cc"
  },
  {
    "url": "assets/js/6.ad52a7e7.js",
    "revision": "fac3bebcb19d7f64be2066a53e37eb47"
  },
  {
    "url": "assets/js/7.f36ce151.js",
    "revision": "129a16f68a01004ed3d643cfbdc82f72"
  },
  {
    "url": "assets/js/8.ff70fb25.js",
    "revision": "8abe1cf80374a25e1fbd10901d507660"
  },
  {
    "url": "assets/js/9.b2994b21.js",
    "revision": "bfceaa37542ec9234b7d5143d9eb4abb"
  },
  {
    "url": "assets/js/app.316e2491.js",
    "revision": "ccf281ef1dcd58a018528eef91ae0145"
  },
  {
    "url": "avatar.png",
    "revision": "df4467759eab42a8de547f7fe386f68d"
  },
  {
    "url": "blogs/category1/2018/121501.html",
    "revision": "84952279ea0d04dbed315cbb7f51ae6c"
  },
  {
    "url": "blogs/category1/2019/092101.html",
    "revision": "004b900eae484dda9b34cd3a345cd32b"
  },
  {
    "url": "blogs/category2/2016/121501.html",
    "revision": "3a5b85670167b83d7fcbb539bb7ebbb4"
  },
  {
    "url": "blogs/category2/2017/092101.html",
    "revision": "c153e77d994a0e28b75f7c31f27ca447"
  },
  {
    "url": "blogs/other/guide.html",
    "revision": "8e547e5e2be9dbbfa55d274b40545ea8"
  },
  {
    "url": "categories/category1/index.html",
    "revision": "4ebfab7e5290e3c91ee3eefebb33442e"
  },
  {
    "url": "categories/category2/index.html",
    "revision": "f9e84d7e3125c72fec82bf001c874385"
  },
  {
    "url": "categories/index.html",
    "revision": "fe2f8ac7a98d85d572aec86d9558433a"
  },
  {
    "url": "categories/直播机构/index.html",
    "revision": "1f127dc43ae7a4e943a1cab4dc3c7718"
  },
  {
    "url": "categories/类别/index.html",
    "revision": "40cc2290f44c2d6960d3b69f13a67430"
  },
  {
    "url": "docs/theme-reco/213.html",
    "revision": "f81011e4f4de52ec411c10110a626d7a"
  },
  {
    "url": "docs/theme-reco/215.html",
    "revision": "0b5b8d9a97aaa710f2a12836fb811902"
  },
  {
    "url": "docs/theme-reco/216.html",
    "revision": "0e73bdd0dc008e78879fc515a5cd30af"
  },
  {
    "url": "docs/theme-reco/api.html",
    "revision": "27ca2d8c0e6df5f0a2c7f8521590b1fd"
  },
  {
    "url": "docs/theme-reco/index.html",
    "revision": "69fb60ccf5e29edfde11eafb3eced3b4"
  },
  {
    "url": "docs/theme-reco/introduction.html",
    "revision": "2a5dfa5a46fe2c1a84c28ff5eefd4fb4"
  },
  {
    "url": "docs/theme-reco/plugin.html",
    "revision": "2cf720312cf135506a146924df80e00e"
  },
  {
    "url": "docs/theme-reco/theme.html",
    "revision": "629635c5f303ad9c0f5e382df13984f8"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "imgs/1.png",
    "revision": "c6b80181b9dd28cc6035668be783db34"
  },
  {
    "url": "imgs/banner.jpg",
    "revision": "c1e6df4dfc38fd1b28abfcf66bb29fac"
  },
  {
    "url": "imgs/mcn10.png",
    "revision": "d796204fc46e1f41da500341cd1bb527"
  },
  {
    "url": "imgs/mcn11.png",
    "revision": "53deb3c575ee0fd55b091b41e75cc284"
  },
  {
    "url": "imgs/mcn12.png",
    "revision": "e2fd2ae9492a6acd3b1a0778abdb72b6"
  },
  {
    "url": "imgs/mcn13.png",
    "revision": "f376ab6291a201bb228eb436068a1e2f"
  },
  {
    "url": "imgs/mcn14.png",
    "revision": "ac8c2fd583243bc2026f2a3df542e85f"
  },
  {
    "url": "imgs/mcn15.png",
    "revision": "75942d4241632c5cb660eec70b34d3a5"
  },
  {
    "url": "imgs/mcn2.png",
    "revision": "14016318130e558fc055b0a58f3d8c3b"
  },
  {
    "url": "imgs/mcn3.jpg",
    "revision": "dd526aaddb2684230182e29f8a3bbfa4"
  },
  {
    "url": "imgs/mcn4.png",
    "revision": "5f52222750303529bd32e1001e5f6c30"
  },
  {
    "url": "imgs/mcn5.png",
    "revision": "650384131e2bc410fa4ce6e32da4e507"
  },
  {
    "url": "imgs/mcn6.png",
    "revision": "8bd6f0d6f605f8ba821317aafe50ff3f"
  },
  {
    "url": "imgs/mcn7.jpg",
    "revision": "cbbb35c5d01d2750e09a1d222da57253"
  },
  {
    "url": "imgs/mcn8.png",
    "revision": "bf3fa9750c421f640ea121e2ebaaf5a6"
  },
  {
    "url": "imgs/mcn9.png",
    "revision": "e6f98ad8ce09440acd1581dd4bce3116"
  },
  {
    "url": "imgs/mcnzhuce1.png",
    "revision": "5c20dfc0a055d892eabe0832a01f214d"
  },
  {
    "url": "imgs/mcnzhuce3.png",
    "revision": "c586728184b92362dae5dffd92b54be5"
  },
  {
    "url": "imgs/minilogo.png",
    "revision": "55bb479a3aa598ce47f39cbc28c61a37"
  },
  {
    "url": "imgs/tiaozhuan.png",
    "revision": "bbed734b421354e50d0709100bb22dc7"
  },
  {
    "url": "imgs/场地管理.png",
    "revision": "665153f9a40060fb8ff8b83fe263e5cd"
  },
  {
    "url": "imgs/注册2.png",
    "revision": "4fd79e8567f10f91083d48214e20f81f"
  },
  {
    "url": "imgs/添加场地.png",
    "revision": "117dda5aa9ac9d28601d4b9a33fd4fef"
  },
  {
    "url": "imgs/点击注册.png",
    "revision": "cb433669d3f03157ba7cf93eaf1cd7c6"
  },
  {
    "url": "imgs/直播基地入驻-第1步.png",
    "revision": "3400da58d28eae655b485a2956bc59fc"
  },
  {
    "url": "imgs/类型选择_直播基地.png",
    "revision": "9e3cc2d02ad506738ff0dc49e19b71ab"
  },
  {
    "url": "imgs/类型选择.png",
    "revision": "9e3cc2d02ad506738ff0dc49e19b71ab"
  },
  {
    "url": "index.html",
    "revision": "cdada29a4a0dba415328a388fa6606c6"
  },
  {
    "url": "logo.png",
    "revision": "406370f8f120332c7a41611803a290b6"
  },
  {
    "url": "stopmove/disable-user-zoom.js",
    "revision": "f71d0f86a11d05a61c8734f4ff1fba96"
  },
  {
    "url": "tag/index.html",
    "revision": "7e443b1408f69b52136cf2daf5f314f9"
  },
  {
    "url": "tag/MCN/index.html",
    "revision": "9cf41246846872c8e9c3a389672a0b13"
  },
  {
    "url": "tag/MCN机构/index.html",
    "revision": "684a14a05df744c5addf3ac5a7049b4d"
  },
  {
    "url": "tag/tag1/index.html",
    "revision": "1063ee290baad4b8192195456bab8834"
  },
  {
    "url": "tag/tag2/index.html",
    "revision": "ab9d72afb574de15136681d50048f39b"
  },
  {
    "url": "tag/tag3/index.html",
    "revision": "76c69977f33a16da7bee14defcce424b"
  },
  {
    "url": "tag/tag4/index.html",
    "revision": "c7215c33ee42d3e1049f634f5b4edf87"
  },
  {
    "url": "tag/会员相关/index.html",
    "revision": "d3d0d81c1fb56bbf699933c44382bccd"
  },
  {
    "url": "tag/教程/index.html",
    "revision": "a5fb70f310a9068ca803ac64c335399a"
  },
  {
    "url": "tag/直播机构/index.html",
    "revision": "4a4644c18c24096273db084f7cc4ab81"
  },
  {
    "url": "tag/进阶教程/index.html",
    "revision": "9b967f8a0526c8d16067a698ec36a7f3"
  },
  {
    "url": "timeline/index.html",
    "revision": "8fa23712d85f8aa9752ff2fb69bb387e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
