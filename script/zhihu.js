// ==UserScript==
// @name         知乎广告移除
// @version      0.0.1
// @author       KuTear
// @description  知乎移动端移除底部推荐、广告
// @match        *://www.zhihu.com/*
// @match        *://zhuanlan.zhihu.com/*
// @match        *://daily.zhihu.com/*
// @license      GPL-3.0 License
// @run-at       document-end
// @namespace    https://github.com/KuTear/app-daily/script/zhihu.js
// @supportURL   https://github.com/KuTear/app-daily
// @homepageURL  https://github.com/KuTear/app-daily
// ==/UserScript==

(function () {
    'use strict';

    function setUserAgent(window, userAgent) {
        if (window.navigator.userAgent !== userAgent) {
            const userAgentProp = {
                get: function () {
                    return userAgent;
                }
            };
            try {
                Object.defineProperty(window.navigator, 'userAgent', userAgentProp);
            } catch (e) {
                window.navigator = Object.create(navigator, {
                    userAgent: userAgentProp
                });
            }
        }
    }

    function removeElementByClassName(name) {
        if(!(typeof name === 'string')) {
            return
        }
        let elements = document.getElementsByClassName(name)
        if (elements != null && elements.length > 0) {
            elements[0].remove()
        }
    }

    setUserAgent(window, 'Mozilla/5.0 (Windows Phone 10)');
    GM_addStyle(".MobileModal-closeButton { bottom:150px;top:initial;} .MobileModal-content--default {padding-top: 0px;}");
    removeElementByClassName("MBannerAd");
    removeElementByClassName("jumpThird-ad-tip");
    removeElementByClassName("RelatedReadings");
    removeElementByClassName("HotQuestions");
    // 日报
    removeElementByClassName("view-more");

})()