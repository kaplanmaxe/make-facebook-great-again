chrome.runtime.onMessage.addListener((request,sender,sendResponse) => {
    chrome.pageAction.show(sender.tab.id);
    console.log(request);
});
console.log("OK");