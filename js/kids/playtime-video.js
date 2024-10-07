var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

var player;
var playerEndRedirect;
var playerTitleDisabled;
var pendingVideo = null;
var contentType = "all";
var controller = new MTVNPlayerController('playtime-player','onPlayerLoaded');

	function onPlayerLoaded(controller){
	   player = controller.player;
	   player.addEventListener('READY','onReady');
	   player.addEventListener('METADATA','onMetaData');
	   player.addEventListener('STATE_CHANGE','onStateChange');
	   player.addEventListener('PLAYHEAD_UPDATE','onPlayheadUpdate');
	   player.addEventListener('NO_AD','onNoAd');
	   player.addEventListener('AD_PACKAGE_LOADED','onAdPackageLoaded');
	   player.addEventListener('MEDIA_ENDED','onMediaEnded');
	   player.addEventListener('PLAYLIST_COMPLETE','onPlaylistComplete');
	   player.addEventListener('PLAYLIST_ERROR','onPlaylistError');   
	};

	function onMediaEnded(info) {

	    if( contentType=="all" || isPlayingAd() )return;

	    player.pause();
	    
	    var pl = player.getPlaylist();
	    
	    var i;
	    for (i = pl.index + 1; i < pl.items.length; i++) {
	        if (pl.items[i].metaData.contentType == contentType) {
	            pendingVideo = i;
	            return;
	        }
	    }
	    for (i = 0; pl.index; i++) {
	        if (pl.items[i].metaData.contentType == contentType) {
	            pendingVideo = i;   
	            return;
	        }
	    }

	} 
	
	function onReady() {
	
		if ( !isPlayingAd() ){
			
			if(pendingVideo != null)playVideo(pendingVideo);

			var title = "";
			if(!playerTitleDisabled)title = player.getMetadata().title;
			$("#playtime-player-info-message").html(title);
			thisMovie("kidsPromoContainer").send('VideoListPromo','videoChange',player.getMetadata());
			
		} else {
			$("#playtime-player-info-message").html("And now a message from our sponsors");	
		}	
		forcedMutePlayerCheck("nickjrPlaytime");
	};  
	
	function isPlayingAd(){
		return (player.getMetadata().isAd || player.getMetadata().isBumper);
	}
	
	function pageIsAdFree() {
		// return  KIDS.get("adfree");
		return (document.location.search.match(/[&?]af=1/) != null);
	}
		
	function onMetaData( metadata ){};

	function onStateChange(playState) {};

	function onPlayheadUpdate(info) {};

	function onNoAd( info ) {}; 

	function onAdPackageLoaded(info) {};

	function setVideoEndRedirect(url){
		playerEndRedirect = url;
	}
	
	function disableVideoTitle(){
		playerTitleDisabled = true;
	}
	
	function restrictToContentType(type){
		contentType = type;
	};

	function onPlaylistComplete(info) {
		
		if(playerEndRedirect){
			
			if(pageIsAdFree){
				playerEndRedirect = "/bumper.html?url="+playerEndRedirect;
			}
			
			KIDS.utils.doLog("Redirecting to : " + playerEndRedirect);
			window.location = playerEndRedirect;
			
			return;
		}
		
		//loop the content in the player when it reaches the end
		player.playIndex(0, 0);
	};

	function onPlaylistError(info) {};	

	function playCMSID(cmsid) {
		if (player && !player.getMetadata().isAd && !player.getMetadata().isBumper) {
			player.pause();
			player.playUri("mgid:cms:item:nickjr.com:" + cmsid);
		}
	}
	
	function nextVideo() {
		if (player && !player.getMetadata().isAd && !player.getMetadata().isBumper) {	
			player.next();
		}
	};

	function prevVideo() {
		if (player && !player.getMetadata().isAd && !player.getMetadata().isBumper) {
			player.previous();
		}
	};

	function getCMSIDfromGUID(guid) {
		var a=guid.split(":");
		return(a[4]);
	};

	function playVideo(index) {
		pendingVideo = null;
		KIDS.utils.doLog("playVideo "+index);
		if (player && !player.getMetadata().isAd && !player.getMetadata().isBumper) {
			player.playIndex(index, 0);						
		}
	};	

	function thisMovie(movieName) {
		if (navigator.appName.indexOf("Microsoft") != -1) {
			return window[movieName];
		} else {
			return document[movieName];
		}
	}
	

}
/*
     FILE ARCHIVED ON 02:29:59 Apr 30, 2014 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 04:10:08 Mar 05, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 1071.932
  exclusion.robots: 0.065
  exclusion.robots.policy: 0.057
  cdx.remote: 0.05
  esindex: 0.006
  LoadShardBlock: 358.942 (3)
  PetaboxLoader3.datanode: 374.367 (4)
  load_resource: 59.589
  PetaboxLoader3.resolve: 27.323
*/
