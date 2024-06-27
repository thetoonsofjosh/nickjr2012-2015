/**
 * @author carrillos
 * @version 1.0, 03/05/2009
 */
if(typeof NickProxy == "undefined" || !NickProxy) var NickProxy = {};

NickProxy.swfObserver;
NickProxy.DO_DEBUG = window && typeof window.console != "undefined";

// executed when ScriptProxy is initialized
NickProxy.registerSwf = function(swfId) {
	if(swfId == null) return;
	if(NickProxy.swfObserver == null) NickProxy.swfObserver = new ObserverSwf();
	NickProxy.swfObserver.init(swfId);
	//NickProxy.doLog("JS: registerSwf: "+swfId);
}

// wrapper function for ObserverSwf -- Also executed from ScriptProxy
NickProxy.addListener = function(service) {
	if(NickProxy.swfObserver == null) NickProxy.swfObserver = new ObserverSwf();
	NickProxy.swfObserver.addListener(service);
}

NickProxy.doLog = function() {
	if (!NickProxy.DO_DEBUG) return; // flag should already verify window && window.console. Fixes an odd bug

	if (typeof window.console.debug != "undefined") {
		// firebug error console
		window.console.debug.apply(window.console, arguments);
	} else if (typeof window.console.log != "undefined") {
		// safari error console
		window.console.log.apply(window.console, arguments);
	}
}

NickProxy.getSwf = function(id) {
    if(navigator.appName.indexOf("Microsoft") != -1) {
        return window[id];
    } else {
    	if(document[id].length != undefined) {
			return document[id][1];
    	}
    	return document[id];
	}
}
