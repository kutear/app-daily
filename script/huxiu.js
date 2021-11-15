// ==UserScript==
// @name         虎嗅网
// @namespace    https://github.com/KuTear/app-daily/script/huxiu.js
// @version      0.0.1
// @description  虎嗅网
// @author       KuTear
// @license      GPL-3.0 License
// @match        *://m.huxiu.com/article/*
// @grant GM_addStyle
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
            for (let i = 0; i < elements.length; i++) {
                elements[i].remove();
            }
        }
    }
    function removeElementByTagName(name) {
        if(!(typeof name === 'string')) {
            return
        }
        let elements = document.getElementsByTagName(name)
        if (elements != null && elements.length > 0) {
            for (let i = 0; i < elements.length; i++) {
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

    removeElementByClassName("article-detail-swiper-container")
    removeElementByClassName("fresh-article-box")
    findElementClickByClassName("js-article-all-content")
    findElementClickByClassName("cancel-go-btn")
    removeElementByClassName("placeholder-line")
    removeElementByClassName("rec-article-feed-ul")
    removeElementByClassName("article-recommend-wrap")
    removeElementByClassName("hot-so-wrap")
    removeElementByClassName("related-article-wrap")
    removeElementByClassName("detail-rec-title")
    removeElementByClassName("mod-sidebar")
    removeElementByClassName("share-box")
    GM_addStyle(".mod-sidebar {display: none;}")
    removeElementByTagName("footer")

})();
