// ==UserScript==
// @name         remove ugly youtube player
// @version      0.1
// @description  cope sneed buck chuck
// @author       Kyle
// @match        https://www.youtube.com/*
// @compatible   chrome
// @compatible   firefox
// @compatible   opera
// @compatible   safari
// @compatible   edge
// @icon         https://www.google.com/s2/favicons?domain=youtube.com
// @downloadURL  https://github.com/kylesbowling2021/uglyplayer/raw/main/fix%20ugly%20player.js
// @updateURL   https://github.com/kylesbowling2021/uglyplayer/raw/main/fix%20ugly%20player.js
// @grant        none
// @run-at       document-end
// ==/UserScript==

function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
};
waitForElm('#movie_player').then(function(elm) {document.getElementById("movie_player").classList.remove("ytp-larger-tap-buttons")});
