

chrome.tabs.onActivated.addListener(function(info) {
    var tab = chrome.tabs.get(info.tabId, function(tab) {
        if(tab.url !== "https://www.facebook.com/"){
        	chrome.browserAction.setPopup({popup: "popup.html"});
        } 
        else {
        	//chrome.tabs.executeScript({code: "content.js"});
        	chrome.browserAction.setPopup({popup: "on_off.html"});
        }
	});
});