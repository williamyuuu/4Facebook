//const regex = /u_ps_{1}[0-9]{1}_{1}[0-9]{1}_{1}[0-9a-z]{1,4}/gi; //u_ps_0_0__1ad2
//const fetchregex = /u_fetchstream_{1}[0-9]{1}_{1}[0-9]{1}./gi; //u_fetchstream_1_3

//Operates properly at start, but icon doesn't show correctly after updates
console.log("HERE1");
var sw = localStorage.getItem("switch");
if(sw !== null){
	stop_feed(sw);
	console.log("HERE2");
}

chrome.runtime.onMessage.addListener(
	function(request) {
		console.log("HERE3");
    	stop_feed(request.on_off);
    	console.log(request.on_off);

    	function stop_feed(x){
			if (x === "on"){
				var data = document.getElementById('topnews_main_stream_408239535924329');
				if(data !== null) {
					document.getElementById('topnews_main_stream_408239535924329').innerHTML = "";
				}
				localStorage.setItem("switch", "on");
				console.log("HERE4");
			} else {
				localStorage.setItem("switch", "off");
				console.log("HERE5");
			}
		}
  	}
);

function stop_feed(sw){
	if (sw === "on"){
		var data = document.getElementById('topnews_main_stream_408239535924329');
		if(data !== null) {
			document.getElementById('topnews_main_stream_408239535924329').innerHTML = "";
		}
	} 
}
console.log("HERE6");