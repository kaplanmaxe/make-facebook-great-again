"use strict";

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    console.log("WE HERE");
});
console.log("OK");