"use strict";

var tab_id = null;

chrome.tabs.query({
    currentWindow: true,
    active: true
}, function (tabArray) {
    console.log("NOW");
    console.log(tabArray[0]);
    tab_id = tabArray[0].id;

    chrome.tabs.executeScript(tab_id, {
        code: 'document.write("HEYO");console.log("OK");'
    });
});

// bk.console.log('HELLO WORLD');