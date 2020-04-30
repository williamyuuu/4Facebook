const regex = /u_ps_{1}[0-9]{1}_{1}[0-9]{1}_{1}[0-9a-z]{1,4}/gi; //u_ps_0_0__1ad2
const fetchregex = /u_fetchstream_{1}[0-9]{1}_{1}[0-9]{1}./gi; //u_fetchstream_1_3


chrome.runtime.onMessage.addListener(
	function(request) {
    	have_feed(request.on_off);
    	console.log(request.on_off);

    	function have_feed(x){
			if (x === "on"){
				document.getElementById('topnews_main_stream_408239535924329').innerHTML = "";
			}
		}
  	});
