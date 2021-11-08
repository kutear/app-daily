// ==UserScript==
// @name         页面大小变化监听
// @version      0.0.1
// @author       KuTear
// @description  页面大小变化监听
// @match        *
// @license      GPL-3.0 License
// @run-at       document-end
// @namespace    https://github.com/KuTear/app-daily/script/common.js
// @supportURL   https://github.com/KuTear/app-daily
// @homepageURL  https://github.com/KuTear/app-daily
// ==/UserScript==

(function () {
    const observer = new ResizeObserver(entries => {
        for (const entry of entries) {
            console.log(entry.contentRect.height)
            pageBridge.onPageSizeChanged(entry.contentRect.height)
        }
    });
    observer.observe(document.querySelector('body'));
})()