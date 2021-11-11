// ==UserScript==
// @name         36KR 去强制下载app
// @namespace    https://github.com/KuTear/app-daily/script/36kr.js
// @version      0.0.1
// @description  36KR 去强制下载app
// @author       KuTear
// @license      GPL-3.0 License
// @match        *://www.36kr.com/*
// @grant GM_addStyle
// @run-at document-start
// ==/UserScript==

(function() {
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


    setUserAgent(window, 'Mozilla/5.0 (Linux; Android 5.0; SM-N9100 Build/LRX21V) > AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 > Chrome/37.0.0.0 Mobile Safari/537.36 > MicroMessenger/6.0.2.56_r958800.520 NetType/WIFI');
    // 顶部Logo
    removeElementByClassName("logo-container");
    removeElementByClassName("goapp-btn");
    GM_addStyle('.kr-mobile-layout .layout-children.show-login { padding-top: 0px }')

    // 顶部广告
    removeElementByClassName("article-top-swiper-goapp");
    // 推荐
    removeElementByClassName("may-like-art-wrp");
    removeElementByClassName("showMoreComment");
    removeElementByClassName("float-home-button-wrp");
    removeElementByClassName("float-app-button-wrp");
    removeElementByClassName("interact-area");
    // 网站底部
    removeElementByClassName("kr-mobile-footer");
})();