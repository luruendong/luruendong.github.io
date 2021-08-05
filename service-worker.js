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
    "revision": "e55c83f1ba48d0892ce702eb70d41088"
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
    "url": "assets/js/11.be9d463e.js",
    "revision": "9b6f46d536707f2fad59d876e13814bd"
  },
  {
    "url": "assets/js/12.3088f834.js",
    "revision": "ffa6964117dfb42527e86420d9d5479c"
  },
  {
    "url": "assets/js/13.9003f86a.js",
    "revision": "2fd0e2189db3e617947240ab4705ce5b"
  },
  {
    "url": "assets/js/14.2694e2a5.js",
    "revision": "e400ef619dce6a115d78988b806f1049"
  },
  {
    "url": "assets/js/15.8062a8a6.js",
    "revision": "5e51c6e6b17657dfff977a74a1f5c6e7"
  },
  {
    "url": "assets/js/16.acd52635.js",
    "revision": "d8b0054d4cced242b7e2ae95b64a87ba"
  },
  {
    "url": "assets/js/17.e634416d.js",
    "revision": "1be3f5571fe8afa1d216485e98986bce"
  },
  {
    "url": "assets/js/18.4c76795e.js",
    "revision": "2c32aa839734bff9073a198a0d9cd579"
  },
  {
    "url": "assets/js/19.197f2968.js",
    "revision": "8591cb54f3a50844792ac9cdc047f552"
  },
  {
    "url": "assets/js/20.d2dc298a.js",
    "revision": "cf5a3461c6cefae57aec332ad45493fa"
  },
  {
    "url": "assets/js/21.7e48aedd.js",
    "revision": "0661ca9287e7a7b78cd056a57fc736fb"
  },
  {
    "url": "assets/js/22.f52525b9.js",
    "revision": "d1675b6773873de3425d04925d6048b9"
  },
  {
    "url": "assets/js/23.19934122.js",
    "revision": "ae304f78a191131a000feb5fa7711dad"
  },
  {
    "url": "assets/js/24.458e744b.js",
    "revision": "873a4297e071f4a339f54e5ff10c962d"
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
    "url": "assets/js/app.2fdcc590.js",
    "revision": "e573394a820f1033e7d4ec50d8bc3c4f"
  },
  {
    "url": "avatar.png",
    "revision": "df4467759eab42a8de547f7fe386f68d"
  },
  {
    "url": "blogs/category1/2018/121501.html",
    "revision": "4cf2ef023f18b1b13172dee902c211f2"
  },
  {
    "url": "blogs/category1/2019/092101.html",
    "revision": "4697f623581cd65710ad7b21798635d7"
  },
  {
    "url": "blogs/category2/2016/121501.html",
    "revision": "d14ca4b525f75926dd9151773c1bda8f"
  },
  {
    "url": "blogs/category2/2017/092101.html",
    "revision": "e8e61e5129537f83ad9954d0317f167c"
  },
  {
    "url": "blogs/other/guide.html",
    "revision": "3503748d743451dcf41cd8b5e408aa07"
  },
  {
    "url": "categories/category1/index.html",
    "revision": "64444cdda07620d19a2c1da89f676289"
  },
  {
    "url": "categories/category2/index.html",
    "revision": "1548e6b4c5f3c6ee795b94fa833ed1da"
  },
  {
    "url": "categories/index.html",
    "revision": "8cd3a8cead8a22d8d67e47374380a94c"
  },
  {
    "url": "categories/直播机构/index.html",
    "revision": "9d3a1febe253dbc189a13f205056c2dd"
  },
  {
    "url": "categories/类别/index.html",
    "revision": "7e47f54be718ecff2417881ff1d8e069"
  },
  {
    "url": "docs/theme-reco/213.html",
    "revision": "3488e64a6d389be5628eace221abe59a"
  },
  {
    "url": "docs/theme-reco/215.html",
    "revision": "0ed8cd6cbc0992cc1345f3e961e5ad6c"
  },
  {
    "url": "docs/theme-reco/216.html",
    "revision": "d6fa5006984aff9c6d6f6b60c28f853b"
  },
  {
    "url": "docs/theme-reco/api.html",
    "revision": "d34452b1be17ae2bf480dcb342c65961"
  },
  {
    "url": "docs/theme-reco/index.html",
    "revision": "8a75d23581a8c7a85d552a62ed35ed9d"
  },
  {
    "url": "docs/theme-reco/introduction.html",
    "revision": "98d7c379d95be34db1c3dbe67b223f8f"
  },
  {
    "url": "docs/theme-reco/plugin.html",
    "revision": "9f3ca5f9a6fad1300f671eb77bd82a6e"
  },
  {
    "url": "docs/theme-reco/theme.html",
    "revision": "4d1b582df7eceb75a723797689854244"
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
    "revision": "5b727706964afead0b1dcc9d5ad5afb6"
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
    "revision": "576c6c9908cdf7d24872dbd99669650c"
  },
  {
    "url": "tag/MCN/index.html",
    "revision": "3b4c343f73d8e8d859eae5f4c249e6ea"
  },
  {
    "url": "tag/MCN机构/index.html",
    "revision": "cebeec781ea0131b91b5de8d5c689593"
  },
  {
    "url": "tag/tag1/index.html",
    "revision": "a8421806589f5d32f622259d7d633e17"
  },
  {
    "url": "tag/tag2/index.html",
    "revision": "c9b87693dec5bf524e5b8ad8eb8750d9"
  },
  {
    "url": "tag/tag3/index.html",
    "revision": "2f6400cf21d73e5c54e9e9c4731ac2bc"
  },
  {
    "url": "tag/tag4/index.html",
    "revision": "fce774e1cf4bd317521aba48a0a0b438"
  },
  {
    "url": "tag/会员相关/index.html",
    "revision": "e71f513b07c225725b775914503c7836"
  },
  {
    "url": "tag/教程/index.html",
    "revision": "54d400af6e852d304cace0769bfa59f5"
  },
  {
    "url": "tag/直播机构/index.html",
    "revision": "74ad1980b57ffe89fff304d77f97d659"
  },
  {
    "url": "tag/进阶教程/index.html",
    "revision": "148de31bfdbd40fd584c06d288a18b21"
  },
  {
    "url": "timeline/index.html",
    "revision": "6f7545eb7bec74e372829005f9f7dd07"
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
