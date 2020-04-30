//const regex = /u_ps_{1}[0-9]{1}_{1}[0-9]{1}_{1}[0-9a-z]{1,4}/gi; //u_ps_0_0__1ad2
//const fetchregex = /u_fetchstream_{1}[0-9]{1}_{1}[0-9]{1}./gi; //u_fetchstream_1_3

//Operates properly at start, but icon doesn't show correctly after updates
var sw = localStorage.getItem("switch");
if(sw !== null){
	stop_feed(sw);
}

chrome.runtime.onMessage.addListener(
	function(request) {
    	stop_feed(request.on_off);
    	console.log(request.on_off);

    	function stop_feed(x){
			if (x === "on"){
				document.getElementById('topnews_main_stream_408239535924329').innerHTML = "";
				localStorage.setItem("switch", "on");
			} else {
				localStorage.setItem("switch", "off");
			}
		}
  	}
);

function stop_feed(sw){
	if (sw === "on"){
		document.getElementById('topnews_main_stream_408239535924329').innerHTML = "";
	} 
}