
// ==UserScript==
// @name         华尔街见闻 去强制下载app
// @namespace    https://github.com/KuTear/app-daily/script/wallstreetcn.js
// @version      0.0.1
// @description  华尔街见闻 去强制下载app
// @author       KuTear
// @license      GPL-3.0 License
// @match        *://wallstreetcn.com/articles/*
// @run-at document-start
// ==/UserScript==

(function() {
    'use strict';

    function removeElementByClassName(name) {
        if(!(typeof name === 'string')) {
            return
        }
        let elements = document.getElementsByClassName(name)
        if (elements != null && elements.length > 0) {
            for (var i = 0; i < elements.length; i++) {
                elements[i].remove();
            }
        }
    }

    function findElementClickByClassName(name) {
        if(!(typeof name === 'string')) {
            return
        }
        let elements = document.getElementsByClassName(name)
        if (elements != null && elements.length > 0) {
            for (var i = 0; i < elements.length; i++) {
                elements[i].click();
            }
        }
    }

    function removeElementByTagName(name) {
        if(!(typeof name === 'string')) {
            return
        }
        let elements = document.getElementsByName(name)
    }


    findElementClickByClassName("modal");
    findElementClickByClassName("unfold");
    removeElementByClassName("open-in-app");
    removeElementByClassName("app-nav");
    removeElementByClassName("open-app-banner");
    removeElementByClassName("article-entry");
    removeElementByClassName("share-to-weibo");
    removeElementByClassName("oia");
    removeElementByClassName("article-header");
    removeElementByClassName("article-entry");

})();