if(typeof NICK == "undefined" || !NICK) var NICK = {};

NICK.scriptLoader = function(scriptSrc){
	
	var live = location.hostname.search(/[d|q]\.mtvi\.com/i) == -1;
	var domain = live && location.hostname !== "" ? "http://www.nick.com" : "http://www.nick-q.mtvi.com";

	var loaded = false;
	var script = domain + scriptSrc;
	var optScript = document.createElement('script');
		optScript.src = script;
		optScript.language = "javascript";
	var headTag = document.getElementsByTagName('head')[0];
	headTag.insertBefore(optScript, headTag.firstChild);
};

NICK.scriptLoader("/static/js/min/wwdop-overlay-deps.js");
NICK.scriptLoader("/static/js/wwdop-overlay.js");
 