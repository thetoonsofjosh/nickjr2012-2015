if(typeof KIDS == "undefined" || !KIDS) var KIDS = {};
KIDS.namespace("games.player");

KIDS.games.player.adType = "";
KIDS.games.player.gamesInitId = -1;
KIDS.games.player.gamesLaunchId = -1;
KIDS.games.player.gameDivName = "games-player-game";
KIDS.games.player.gameSwfObjectId = "kidsGame";
KIDS.games.player.intervalLaunchGame = 5000;
KIDS.games.player.intervalPageReady = 500;

KIDS.games.player.adSwfObjectId = "GamePlayer";

if(window.self.location == window.top.location) {
	$(document).ready(function() {
		KIDS.games.player.adType = KIDS.get("preloaderSetting");
		if(location.search.indexOf("af=1")>-1){
			KIDS.games.player.gamesLaunchId = setTimeout("launchGame()", KIDS.games.player.intervalPageReady);
		}else{
			if(KIDS.games.player.gamesLaunchId >= 0) {
				clearTimeout(KIDS.games.player.gamesLaunchId);
			}
			if(KIDS.utils.getCookie("adEntryPageShown"))KIDS.games.player.checkCookie();
		}
	});
}else{
	KIDS.games.player.adType = KIDS.get("preloaderSetting");
	if(location.search.indexOf("af=1")>-1){
		KIDS.games.player.gamesLaunchId = setTimeout("launchGame()", KIDS.games.player.intervalPageReady);
	}else{
		if(KIDS.games.player.gamesLaunchId >= 0) {
			clearTimeout(KIDS.games.player.gamesLaunchId);
		}
		if(KIDS.utils.getCookie("adEntryPageShown"))KIDS.games.player.checkCookie();
	}
}

KIDS.games.player.staticAd = function(){
	try{
		var kvals = "";
		if(KIDS.get("showId")) kvals = "!category="+KIDS.get("showId")+";";
		if(KIDS.get("urlAlias")) kvals = "gameName="+KIDS.get("urlAlias")+";";
		var ad=com.mtvi.ads.AdManager.getAd({size: "2000x300",containerId: "adLoaderContainerDiv",contentType:"adi", dartSite: "nickjr.playtime.nol", keyValues: kvals});
		var html='<iframe id="preloader"'+' src="'+ad.getUrl()+'" width="300" height="250" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"><\/iframe>';
		$("#adLoaderContainerDiv").html(html);
		KIDS.games.player.gamesLaunchId = setTimeout("KIDS.games.player.launchGame()", KIDS.games.player.intervalLaunchGame);
	}catch(e){KIDS.utils.doLog(e)}
}
KIDS.games.player.videoAd = function() {
	try{
		if(KIDS.games.player.gamesLaunchId >= 0) {
			clearTimeout(KIDS.games.player.adLaunchId);
		}
		doLaunchSwf(KIDS.games.player.adSwfObjectId);
	}catch(e){KIDS.utils.doLog("KIDS.games.player.videoAd failed:"+e)}
}
KIDS.games.player.checkCookie = function() {
	try{
		KIDS.utils.doLog("adType: " + KIDS.games.player.adType);
		
		if(KIDS.games.player.adType != "null" && KIDS.games.player.adType != null && KIDS.games.player.adType != "" && KIDS.games.player.adType != "No Ad"){
			
			//KIDS.games.player.adFrequency = KIDS.ads.getVideoAdFrequency();
			KIDS.games.player.adFrequency = 0;
			var tmpCookVal = KIDS.utils.getCookie("KIDS.games.player.plycnt");
			
			if(!tmpCookVal || tmpCookVal >= KIDS.games.player.adFrequency){
				KIDS.games.player.cookieVal = 0;
			}else{
				KIDS.games.player.cookieVal = parseInt(tmpCookVal) + 1;
			}
			
			KIDS.utils.doLog("cookie: " + KIDS.games.player.cookieVal);
			
			var exdate = new Date();
			exdate.setDate(exdate.getDate()+1);	
			document.cookie="KIDS.games.player.plycnt=" +KIDS.games.player.cookieVal+ ";expires="+exdate.toGMTString();
			
			if(KIDS.utils.getCookie("adEntryPageShown")){
				if(KIDS.games.player.cookieVal == 0){
					if(KIDS.games.player.adType == 'Video Ad'){
						KIDS.games.player.adLaunchId = setTimeout("KIDS.games.player.videoAd()", KIDS.games.player.intervalPageReady);
					}else if (KIDS.games.player.adType == 'Display Ad'){
						KIDS.games.player.adLaunchId = setTimeout("KIDS.games.player.staticAd()", KIDS.games.player.intervalPageReady);
					}
				}else{
					KIDS.games.player.gamesLaunchId = setTimeout("launchGame()", KIDS.games.player.intervalPageReady);
				}
			}
		}else{
			KIDS.games.player.gamesLaunchId = setTimeout("launchGame()", KIDS.games.player.intervalPageReady);
		}
		
	}catch(e){KIDS.utils.doLog("KIDS.games.player.checkCookie() failed: " + e);}
}
KIDS.games.player.launchGame = function() {
	if(KIDS.games.player.gamesLaunchId >= 0) {
		clearTimeout(KIDS.games.player.gamesLaunchId);
	}
	doLaunchSwf(KIDS.games.player.gameSwfObjectId);
}
var launchGame = KIDS.games.player.launchGame;
// support the game's team ad preloader
function AdLoaderMessages(str) {
	KIDS.utils.doLog("Ad Preloader: "+str);
}