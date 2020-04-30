if(localStorage.getItem("switch") !== null){
	var status = localStorage.getItem("switch");
	if(status === "on"){
		on_functions();
	}
	else{
		off_functions();
	}
}
else{
	off_functions();
}

document.addEventListener("input", on_off);

function on_off(){
	var status = localStorage.getItem("switch");
	//console.log(status);

	if(status === "on"){
		off_functions();
		chrome.tabs.reload();
	}
	else{
		on_functions();
	}
}


function on_functions(){
	document.getElementById('on-off').checked = true;
	localStorage.setItem("switch", "on");
	//chrome.storage.local.set({"switch": "on"} {});
	chrome.browserAction.setIcon({path: "images/4F19.png"});
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
 		chrome.tabs.sendMessage(tabs[0].id, {on_off: "on"} )
	});
}

function off_functions(){
	document.getElementById('on-off').checked = false;
	localStorage.setItem("switch", "off");
	//chrome.storage.local.set({"switch": "off"} {});
	chrome.browserAction.setIcon({path: "images/4F19_off.png"});
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
 		chrome.tabs.sendMessage(tabs[0].id, {on_off: "off"} )
	});
}
