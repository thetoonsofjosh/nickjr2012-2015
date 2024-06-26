// requires /js/session-cookies.js
if(typeof NICKJR == "undefined" || !NICKJR) var NICKJR = {};
KIDS.namespace("kids", NICKJR);
NICKJR.kids = function(){};

//NICKJR.kids.game
game = function(){};

// NICKJR.kids.game.cookie
cookie = function() {
	var kidsPlayedGameCookieLimit = 10;
	var kidsPlayedGameCookie = {"name":"kids-played-game-cookie","value":[],"period":"days","time":30};
	var that = this;
	
	this.saveRecentlyPlayedGame = function(gameUrlAlias) {
		KIDS.utils.doLog('NICKJR.kids.saveRecentlyPlayedGame ' + gameUrlAlias);
		var cookie = that.getKidsPlayedGameCookie();
		that.getGameValue(gameUrlAlias)[1] = new Date().getTime();
		writePersistentCookie(cookie.name,that.cookieToString(cookie.value),cookie.period,cookie.time);
	}
	
	this.getGameValue = function(gameUrlAlias) {
		var i,g,game;
		var cookie = that.getKidsPlayedGameCookie();
		for(i=0;i<cookie.value.length;i++){
			g = cookie.value[i];
			if(g[0] == gameUrlAlias){
				game = g;
				cookie.value.splice(i,1);
				break;
			}
		}
		if(!game){
			game = [gameUrlAlias];
		}
		cookie.value.unshift(game);
		
		while(cookie.value.length>kidsPlayedGameCookieLimit){
			cookie.value.pop();
		}
		
		return game;
	}
	
	this.cookieToString = function(value) {
		var vstr = "";
		var f = true;
		var v,i;
		for(i=0;i<value.length;i++){
			v = value[i];
			if(!f)vstr+="|";
			vstr+=v[0]+','+v[1];
			f = false;
		}
		return vstr;
	}
	
	this.getKidsPlayedGameCookie = function() {
		var cookie = kidsPlayedGameCookie;
		cookie.value = []
		var vstr = getCookieValue(cookie.name);
		KIDS.utils.doLog('NICKJR.kids.getKidsPlayedGameCookie ' + vstr);
		if(vstr){
			var varr = vstr.split("|");
			var i;
			for(i=0;i<varr.length;i++){
				cookie.value.push(varr[i].split(","));
			}
		}
		KIDS.utils.doLog(cookie);
		return cookie;
	}
	
}
		
// NICKJR.kids.game.preloader
preloader = function() {
	var that = this;
	
	this.kidsFormatGameTile = function(){
		that.kidsFormatCenter("#game-outer","#ad-bg");
		that.kidsFormatCenter("#game-outer","#ad-content");
		that.kidsFormatCenter("#game-outer","#game-game");
		$("#game-outer").css("visibility","visible");
	}

	this.kidsFormatCenter = function(a,b){
		var ptop = Math.round(($(a).height()-$(b).height())/2);
		var pleft = Math.round(($(a).width()-$(b).width())/2);
		$(b).css("padding-top",ptop+"px");
		$(b).css("padding-left",pleft+"px");
	}

	this.clearAdContent = function () {
		$("#game-game").css("z-index",300);
		$("#ad-bg").html(" ");
		$("#ad-content").html(" ");
		clearStandaloneAd();
	}
	
}
		
var kids = new NICKJR.kids();
kids.game = new game();
kids.game.cookie = new cookie();
kids.game.preloader = new preloader();