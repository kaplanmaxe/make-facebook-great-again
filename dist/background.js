"use strict";

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    chrome.pageAction.show(sender.tab.id);
    console.log(request);
});
console.log("OK");