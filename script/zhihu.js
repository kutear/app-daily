// ==UserScript==
// @name         知乎广告移除
// @version      0.0.1
// @author       KuTear
// @description  知乎移动端移除底部推荐、广告
// @match        *://www.zhihu.com/*
// @match        *://zhuanlan.zhihu.com/*
// @license      GPL-3.0 License
// @run-at       document-end
// @namespace    https://github.com/KuTear/app-daily/script/zhihu.js
// @supportURL   https://github.com/KuTear/app-daily
// @homepageURL  https://github.com/KuTear/app-daily
// ==/UserScript==

(function () {
    document.getElementsByClassName("MBannerAd")[0].remove();
    document.getElementsByClassName("jumpThird-ad-tip")[0].remove();
    document.getElementsByClassName("RelatedReadings")[0].remove();
    document.getElementsByClassName("HotQuestions")[0].remove();
})()