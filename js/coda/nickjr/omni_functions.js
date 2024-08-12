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

KIDS.namespace("reporting.omnifunctions");

KIDS.reporting.omnifunctions.nrtrackingcode="";
KIDS.reporting.omnifunctions.NRcall="";

KIDS.reporting.omnifunctions.sendAnalyticsEvent = function(str){
	try {
		var conf =  new Configuration();		
		conf.init();
		if(btg.String.isDefined(str)) conf.setting.name += "," + str;
		KIDS.reporting.omnifunctions.sendReportingCall(conf);
	} catch(e){KIDS.utils.doLog(e.toString());}
}
KIDS.reporting.omnifunctions.sendLinkEvent = function(str,lnkname){
	try{	
		var oldacct = KIDS.reporting.config.setting.name;
		if(btg.String.isDefined(str)){ 
			btg.config.Omniture.account += "," + str;
			btg.Controller.init();
		}
		btg.Controller.sendLinkEvent({linkName:lnkname,linkType:'o'});
		if(btg.String.isDefined(str)){
			btg.config.Omniture.account = oldacct;
			btg.Controller.init();
		}
	}catch(e){KIDS.utils.doLog(e.toString());}
}
KIDS.reporting.omnifunctions.sendReportingCall = function(cObj){
	try{
		if(cObj==null) cObj = KIDS.reporting.config;
		if(cObj.getPageName().indexOf("ads.comscore")<0){
			var oldacct = KIDS.reporting.config.setting.name;
			if(btg.String.isDefined(cObj.setting.name)){
				btg.config.Omniture.account = cObj.setting.name;
			}
			btg.Controller.init();
			btg.Controller.sendPageCall(cObj.setting);
			if(btg.String.isDefined(cObj.setting.name)){
				btg.config.Omniture.account = oldacct;
				btg.Controller.init();
			}
		}
	}catch(e){KIDS.utils.doLog(e.toString());}
}
KIDS.reporting.omnifunctions.oldReportingCall = function(ro){
	try{
		var conf =  new Configuration(KIDS.reporting.config);
		conf.init();
		var or = ro.setOverrides;
		KIDS.reporting.omnifunctions.omniSetOverrides(or,"overwrite",conf);
		KIDS.reporting.omnifunctions.sendReportingCall(conf);
	}catch(e){KIDS.utils.doLog(e.toString());}
}
KIDS.reporting.omnifunctions.omniSetOverrides = function(or,acctNameAction,config){
	try{
		for(i in or){
			var tmpi=i.replace(/s_/,"");
			tmpi=(tmpi=="account")? "name" : tmpi;
			config.setting[tmpi]=or[i];
			
			if(tmpi=="name"){
				if(acctNameAction){
					if(acctNameAction=="append"){
						var pattern = new RegExp("^"+ro[tmpi]+"$|^"+ro[tmpi]+",|,"+ro[tmpi]+"$|,"+ro[tmpi]+",");
						if(!pattern.test(KIDS.reporting.config.getName()))config.setName(KIDS.reporting.config.getName()+","+config.getName());
					}
				}
			}
		}
	}catch(e){KIDS.utils.doLog(e.toString());}
}
KIDS.reporting.omnifunctions.sendLinkCall = function(linkName, ro){
	try{
		var lnkname = unescape(linkName);
		if(ro){
			if(ro.setOverrides.name){
				KIDS.reporting.omnifunctions.sendLinkEvent(ro.setOverrides.name,lnkname);
			}
			else if(ro.setOverrides.s_account){
				KIDS.reporting.omnifunctions.sendLinkEvent(ro.setOverrides.s_account,lnkname);
			}
		}else {
			KIDS.reporting.omnifunctions.sendLinkEvent(null,lnkname);	
		}
	}catch(e){KIDS.utils.doLog(e.toString());}
}
KIDS.reporting.omnifunctions.sendReportingCallTN2 = function(ro){
	try{
		var conf =  new Configuration(KIDS.reporting.config);
		conf.init();
		var or = ro.setOverrides;
		or.name = "vianickvision";
		KIDS.reporting.omnifunctions.omniSetOverrides(or,"append",conf);
		KIDS.reporting.omnifunctions.sendReportingCall(conf);
	}catch(e){KIDS.utils.doLog(e.toString());}
}
KIDS.reporting.omnifunctions.sendInitCall = function(e1,e2,e3){
	try{
		elementString=e1+"-"+e2+"-"+e3;
		linkName="/init_click_tracking/"+elementString;
		KIDS.reporting.omnifunctions.sendLinkEvent(null,linkName);
	}catch(e){KIDS.utils.doLog(e.toString());}
}
KIDS.reporting.omnifunctions.TrackLinkNickJr = function(e1,e2,e3)
{
	try{
		KIDS.reporting.omnifunctions.sendInitCall(e1,e2,e3);
	}catch(e){KIDS.utils.doLog(e.toString());}
}
KIDS.reporting.omnifunctions.comscoreReport = function(htmlID){
	try{
		var str = '<iframe id="'+htmlID+'" src="/ads.comscore" style="overflow:hidden;margin:0px;padding:0px;display:none;" scrolling="no" width="1" height="1" frameborder="0"></iframe>';
		if($("#"+htmlID).length) $("#"+htmlID).replaceWith(str);
		else $(str).appendTo("body");
	}catch(e){}
}
KIDS.reporting.omnifunctions.pageNameAppend = function(newPageName){
	try{
		var conf =  new Configuration();
		conf.initialize();
		var oldPN = KIDS.reporting.config.getPageName();
		conf.setPageName(oldPN+ "-" +newPageName);
		if(newPageName!="games") conf.setProp("4",newPageName);	
		
		KIDS.reporting.omnifunctions.sendReportingCall(conf);
	}catch(e){KIDS.utils.doLog(e.toString());}
}
KIDS.reporting.omnifunctions.pageNameReset = function(newPageName){
	try{
		var conf =  new Configuration();
		conf.initialize();
		conf.setPageName(newPageName);	
		KIDS.reporting.omnifunctions.sendReportingCall(conf);
	}catch(e){KIDS.utils.doLog(e.toString());}
}
KIDS.reporting.omnifunctions.trackKidsGamePlay = function(gameName){
	try{
		var conf =  new Configuration();		
		conf.init();
		var site = fetchGamePlaySite(document.URL);
		var suite = "viakidsgameplay";		
		conf.setName(suite);
		conf.setDynamicAccountSelection("false");
		conf.setChannel(site);
		conf.setHier1(site+"/"+gameName);
		conf.setHier2("");
		conf.setProp(1,conf.getHier1());
		conf.setProp(2,gameName);
		conf.setProp(3,site);		
		KIDS.reporting.omnifunctions.sendReportingCall(conf);		
	}catch(e){KIDS.utils.doLog(e.toString());}
}
KIDS.reporting.omnifunctions.fetchGamePlaySite = function(locStr){
	try{
		var pattern = new RegExp("(nick)(?:-(?:jd|d|jq|q).mtvi)?.com","gi");
		var result = pattern.exec(locStr);
		if(result){//has nick
			pattern = new RegExp("/(turbonick|nicktropolis)/","gi");
			var result2 = pattern.exec(locStr);
			if(result2){//has turbonick or nicktrolopis
				return(result2[1]);
			}
			return(result[1]);
		}else{
			pattern = new RegExp("(nickjr)(?:-[dq].mtvi)?.com","gi");
			result = pattern.exec(locStr);
			if(result){//has nickjr
				if(locStr.indexOf("/playtime/")>0) return("playtime");
				return(result[1]);
			}else{
				pattern = new RegExp("(noggin)(?:-[dq].mtvi)?.com","gi");
				result = pattern.exec(locStr);
				if(result){//has noggin
					return(result[1]);
				}else{
					pattern = new RegExp("(shockwave|addictinggames|the-n).*.com","gi");
					result = pattern.exec(locStr);
					if(result) return(result[1]);
					else{//hardcoding for local envs
						pattern = new RegExp("localhost:9090","gi");
						result = pattern.exec(locStr);
						if(result) return("nickjr-localhost");
						else return(null);
					}
				}
			}
		}
	}catch(e){KIDS.utils.doLog(e.toString());}
}
KIDS.reporting.omnifunctions.flashReport = function(category){
	try{
		KIDS.reporting.omnifunctions.pageNameAppend(category);
	}catch(e){KIDS.utils.doLog(e.toString());}
}
KIDS.reporting.omnifunctions.printTracker = function(urlAlias,contentType,showID,numberPages){
	try{
		var conf =  new Configuration(KIDS.reporting.config);		
		conf.init();
		var site = "nickjr";
		conf.setName("viakfprint");
		conf.setPageName(site+"-"+contentType+"-"+showID+"-"+urlAlias);
		conf.setChannel(site);
		conf.setHier1(site+"/"+contentType+"/"+showID+"/"+urlAlias);
		conf.setHier2(conf.getHier1());
		conf.setProp(1,numberPages);
		conf.setProp(2,site);
		conf.setProp(3,contentType);
		conf.setProp(4,showID);
		conf.setProp(5,urlAlias);		
		KIDS.reporting.omnifunctions.sendReportingCall(conf);	
		
		var _printPixel = "http://web.archive.org/web/20140122053024/http://ad.doubleclick.net/ad/nickjr.nol/hp_printables;adid=227986931;sz=1x1;ord=2654564545?";
		var DCPrint = document.createElement('img');
		DCPrint.setAttribute('src',_printPixel);
		
		btg.Controller.init();
		btg.Controller.sendLinkEvent({pageName:"",linkName:urlAlias,linkType:'o',events:"event9",eVar24:urlAlias});
		
	}catch(e){KIDS.utils.doLog(e.toString());}
}
KIDS.reporting.omnifunctions.printReporting = function(site,urlAlias,contentType,showID,numberPages){
	try{
		var conf =  new Configuration(KIDS.reporting.config);
		conf.init();
		conf.setName("viakfprint");
		conf.setPageName(site+"-"+contentType+"-"+showID+"-"+urlAlias);
		conf.setChannel(site);
		conf.setHier1(site+"/"+contentType+"/"+showID+"/"+urlAlias);
		conf.setHier2(conf.getHier1());
		conf.setProp(1,numberPages);
		conf.setProp(2,site);
		conf.setProp(3,contentType);
		conf.setProp(4,showID);
		conf.setProp(5,urlAlias);
		KIDS.reporting.omnifunctions.sendReportingCall(conf);
		
		var _printPixel = "http://web.archive.org/web/20140122053024/http://ad.doubleclick.net/ad/nickjr.nol/hp_printables;adid=227986931;sz=1x1;ord=2654564545?";
		var DCPrint = document.createElement('img');
		DCPrint.setAttribute('src',_printPixel);
		
		btg.Controller.init();
		btg.Controller.sendLinkEvent({pageName:"",linkName:urlAlias,linkType:'o',events:"event9",eVar24:urlAlias});

	}catch(e){KIDS.utils.doLog(e.toString());}
}
KIDS.reporting.omnifunctions.trackFlashClicks = function(index, urlAlias,  ev){  
    var sm_urlAlias = urlAlias.substr(0, 18); 
    var theTracker = String(index)  + "__" +  String(sm_urlAlias) + "__" + String(ev);   
    KIDS.reporting.omnifunctions.pageNameAppend(theTracker); 
}  
KIDS.reporting.omnifunctions.dorasWorldGame = function(DWlocation,gameName,loginState){
	try{
		var conf =  new Configuration();
		conf.init();
		conf.setName("vianickjr");
		conf.setDynamicAccountSelection("true");
		conf.setDynamicAccountList("devvianickjr=nickjr-d.mtvi.com,nickjr-q.mtvi.com");
		conf.setLinkInternalFilters("javascript:,nickjr.com");
		conf.setTrackExternalLinks(true);
		conf.setTrackDownloadLinks(true);
		conf.setTrackInlineStats(true);
		conf.setProp(4,'DorasWorld_'+gameName);
		conf.setProp(5,'DorasWorld_'+gameName);
		conf.setProp(7,gameName);
		if(NICKJR){
			if(NICKJR.profile.flashapi.isLoggedIn()) conf.setProp(8,"UserLoggedIn");
			else conf.setProp(8,"UserNotLoggedIn");
		}
		conf.setPageName(location.pathname+'/'+DWlocation+'/'+gameName);
		conf.setHier2('kids/kids-games/doras-great-big-world-game.html');
		KIDS.reporting.omnifunctions.sendReportingCall(conf);
	}catch(e){KIDS.utils.doLog(e.toString());}
}
KIDS.reporting.omnifunctions.dorasWorldLocation = function(DWlocation,loginState){
	try{
		var conf =  new Configuration();
		conf.init();
		conf.setName("vianickjr");
		conf.setDynamicAccountSelection("true");
		conf.setDynamicAccountList("devvianickjr=nickjr-d.mtvi.com,nickjr-q.mtvi.com");
		conf.setLinkInternalFilters("javascript:,nickjr.com");
		conf.setTrackExternalLinks(true);
		conf.setTrackDownloadLinks(true);
		conf.setTrackInlineStats(true);
		conf.setPageName(location.pathname+'/'+DWlocation);
		conf.setHier2(location.pathname+'/'+DWlocation);
		if(NICKJR){
			if(NICKJR.profile.flashapi.isLoggedIn()) conf.setProp(8,"UserLoggedIn");
			else conf.setProp(8,"UserNotLoggedIn");
		}
		KIDS.reporting.omnifunctions.sendReportingCall(conf);
	}catch(e){KIDS.utils.doLog(e.toString());}
}
KIDS.reporting.omnifunctions.DoraWeDidIt = function(buttonID){
	try{
		KIDS.reporting.omnifunctions.sendLinkEvent(null,"Explore with Dora - We Did It - "+buttonID);
	}catch(e){KIDS.utils.doLog(e.toString());}
}
KIDS.reporting.omnifunctions.tabReporting = function(tabTitle,tabName){
	try{			
		var conf =  new Configuration();
		conf.initialize();
		conf.setName("vianickjr");
		conf.setDynamicAccountSelection("true");
		conf.setDynamicAccountList("devvianickjr=nickjr-d.mtvi.com,nickjr-q.mtvi.com");
		conf.setLinkInternalFilters("javascript:,nickjr.com");
		conf.setTrackExternalLinks(true);
		conf.setTrackDownloadLinks(true);
		conf.setTrackInlineStats(true);
		conf.setPageName(conf.getPageName() + tabTitle + " - " + tabName);
		conf.setHier2(conf.getPageName());
		KIDS.reporting.omnifunctions.sendReportingCall(conf);
	}catch(e){KIDS.utils.doLog(e.toString());}
}
KIDS.reporting.omnifunctions.galleryPhotoClick = function(galleryTitle){
	try{			
		KIDS.reporting.omnifunctions.sendLinkEvent(null, galleryTitle + " - Photo Gallery Click");
	}catch(e){KIDS.utils.doLog(e.toString());}
}
KIDS.reporting.omnifunctions.DoraBackpackSubmitEvent = function(){
	try{
		if(location.pathname.indexOf("spanish")>-1)
			KIDS.reporting.omnifunctions.sendLinkEvent(null,"Dora's Beyond the Backpack - Spanish Checklist/Quiz Submit");
		else KIDS.reporting.omnifunctions.sendLinkEvent(null,"Dora's Beyond the Backpack - English Checklist/Quiz Submit");
	}catch(e){KIDS.utils.doLog(e.toString());}
}
KIDS.reporting.omnifunctions.boostPromoEvent = function(){
	try{
		if(location.pathname.indexOf("spanish")>-1)
			KIDS.reporting.omnifunctions.sendLinkEvent(null,"Dora's Beyond the Backpack - Spanish Results - Boost Promo");
		else KIDS.reporting.omnifunctions.sendLinkEvent(null,"Dora's Beyond the Backpack - English Results - Boost Promo");
	}catch(e){KIDS.utils.doLog(e.toString());}
}
KIDS.reporting.omnifunctions.sendLogin=function(){
	try{
		var conf =  new Configuration();
		conf.init();
		conf.setName("vianickjr");
		conf.setDynamicAccountSelection("true");
		conf.setDynamicAccountList("devvianickjr=nickjr-d.mtvi.com,nickjr-q.mtvi.com");
		conf.setLinkInternalFilters("javascript:,nickjr.com");
		conf.setTrackExternalLinks(true);
		conf.setTrackDownloadLinks(true);
		conf.setTrackInlineStats(true);
		conf.setPageName("/LoginComplete");
		conf.setHier2("LoginComplete");
		conf.setEvents("event4");
		KIDS.reporting.omnifunctions.sendReportingCall(conf);
	}catch(e){}
}
KIDS.reporting.omnifunctions.UGVUploadEvent = function(){
	try{			
		KIDS.reporting.omnifunctions.sendLinkEvent(null, KIDS.reporting.config.getPageName() + " - Upload Your Video");
	}catch(e){KIDS.utils.doLog(e.toString());}
}
KIDS.reporting.omnifunctions.UGVVideoThumbnailEvent = function(){
	try{			
		KIDS.reporting.omnifunctions.sendLinkEvent(null, KIDS.reporting.config.getPageName() + " - Video Thumbnail");
	}catch(e){KIDS.utils.doLog(e.toString());}
}
KIDS.reporting.omnifunctions.UGVViewAllEvent = function(){
	try{			
		KIDS.reporting.omnifunctions.sendLinkEvent(null, KIDS.reporting.config.getPageName() + " - View All");
	}catch(e){KIDS.utils.doLog(e.toString());}
}
KIDS.reporting.omnifunctions.UGVMostEvent=function(mostType){
	try{
		KIDS.reporting.omnifunctions.pageNameAppend(mostType)
	}catch(e){}
}
KIDS.reporting.omnifunctions.doraInvitationSend=function(invitedNumber){
	try{
		KIDS.reporting.omnifunctions.sendLinkEvent(null, KIDS.reporting.config.getPageName() + " - Send Invitation - " + invitedNumber +" invited");
	}catch(e){}
}
KIDS.reporting.omnifunctions.doraInvitationShare=function(shareName){
	try{
		KIDS.reporting.omnifunctions.sendLinkEvent(null, KIDS.reporting.config.getPageName() + " - Share on "+shareName);
	}catch(e){}
}
KIDS.reporting.omnifunctions.doraInvitationNewsLetter=function(){
	try{
		KIDS.reporting.omnifunctions.sendLinkEvent(null, KIDS.reporting.config.getPageName() + " - Newsletter Signup");
	}catch(e){}
}
KIDS.reporting.omnifunctions.doraInvitationPlayAgain=function(){
	try{
		KIDS.reporting.omnifunctions.pageNameAppend("Play Again")
	}catch(e){}
}
KIDS.reporting.omnifunctions.umiCityLocation = function(UClocation){
	try{
		var conf =  new Configuration(KIDS.reporting.config);
		conf.init();
		conf.setName("vianickjr");
		conf.setPageName(conf.getPageName()+'/'+UClocation);
		conf.setHier2(conf.getPageName());
		KIDS.reporting.omnifunctions.sendReportingCall(conf);
	}catch(e){KIDS.utils.doLog(e.toString());}
}
KIDS.reporting.omnifunctions.BTBPrintTracker = function(urlAlias,showID){
	try{
		KIDS.reporting.omnifunctions.printTracker(urlAlias,"BeyondTheBackpackPrintable",showID,"1");		
	}catch(e){KIDS.utils.doLog(e.toString());}
}
/* temporarily expose functions outside of namespace */
_nrtrackingcode 		= KIDS.reporting.omnifunctions.nrtrackingcode;
NRcall 					= KIDS.reporting.omnifunctions.NRcall;
sendAnalyticsEvent  	= KIDS.reporting.omnifunctions.sendAnalyticsEvent;
sendLinkEvent 			= KIDS.reporting.omnifunctions.sendLinkEvent;
sendReportingCall 		= KIDS.reporting.omnifunctions.oldReportingCall;
omniSetOverrides 		= KIDS.reporting.omnifunctions.omniSetOverrides;
sendLinkCall 			= KIDS.reporting.omnifunctions.sendLinkCall;
sendReportingCallTN2 	= KIDS.reporting.omnifunctions.sendReportingCallTN2;
sendInitCall 			= KIDS.reporting.omnifunctions.sendInitCall;
TrackLinkNickJr			= KIDS.reporting.omnifunctions.TrackLinkNickJr;
pageNameAppend 			= KIDS.reporting.omnifunctions.pageNameAppend;
pageNameReset 			= KIDS.reporting.omnifunctions.pageNameReset;
trackKidsGamePlay 		= KIDS.reporting.omnifunctions.trackKidsGamePlay;
fetchGamePlaySite 		= KIDS.reporting.omnifunctions.fetchGamePlaySite;
flashReport				= KIDS.reporting.omnifunctions.flashReport;
printTracker 			= KIDS.reporting.omnifunctions.printTracker;
printReporting 			= KIDS.reporting.omnifunctions.printReporting;
dorasWorldGame 			= KIDS.reporting.omnifunctions.dorasWorldGame;
dorasWorldLocation		= KIDS.reporting.omnifunctions.dorasWorldLocation;


}
/*
     FILE ARCHIVED ON 05:30:24 Jan 22, 2014 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 00:49:45 Aug 12, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.468
  exclusion.robots: 0.015
  exclusion.robots.policy: 0.008
  esindex: 0.01
  cdx.remote: 18.692
  LoadShardBlock: 177.669 (3)
  PetaboxLoader3.resolve: 207.167 (5)
  PetaboxLoader3.datanode: 102.413 (5)
  load_resource: 160.112 (2)
*/
