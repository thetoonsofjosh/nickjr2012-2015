if(typeof KIDS == "undefined" || !KIDS) var KIDS = {};
KIDS.namespace("reporting.omnifunctions");

KIDS.reporting.omnifunctions.nrtrackingcode="";
KIDS.reporting.omnifunctions.NRcall="";

KIDS.reporting.omnifunctions.sendAnalyticsEvent = function(str){
	try {
		var conf =  new Configuration();		
		conf.init();
		if(com.mtvi.util.isDefined(str)) com.mtvi.reporting.Account += "," + str;
		else com.mtvi.reporting.Account = com.mtvi.reporting.Account;
		KIDS.reporting.omnifunctions.sendReportingCall(conf);
	} catch(e){KIDS.utils.doLog(e.toString());}
}
KIDS.reporting.omnifunctions.sendLinkEvent = function(str,lnkname){
	try{
		if(com.mtvi.util.isDefined(str)) com.mtvi.reporting.Account += "," + str;
		KIDS.reporting.dispatcher.sendLinkEvent({linkType:"o",lnk:true,linkName:lnkname});
	}catch(e){KIDS.utils.doLog(e.toString());}
}
KIDS.reporting.omnifunctions.sendReportingCall = function(cObj){
	try{
		if(!com.mtvi.util.isDefined(cObj)) cObj = KIDS.reporting.config;
		if(cObj.getPageName().indexOf("ads.comscore")<0){
			KIDS.reporting.dispatcher.setAccountVars(cObj.setting);
			KIDS.reporting.dispatcher.sendCall();
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
			if(ro.setOverrides.name)KIDS.reporting.omnifunctions.sendLinkEvent(ro.setOverrides.name,lnkname);
			else if(ro.setOverrides.s_account)KIDS.reporting.omnifunctions.sendLinkEvent(ro.setOverrides.s_account,lnkname);
		}else KIDS.reporting.omnifunctions.sendLinkEvent(null,lnkname);	
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
		conf.init();
		conf.setName("vianickjr,vianickjrparents");
		conf.setDynamicAccountSelection(true);
		conf.setDynamicAccountList("devvianickjr=nickjr-d.mtvi.com,nickjr-q.mtvi.com");
		conf.setLinkInternalFilters("javascript:,nickjr.com");
		conf.setTrackExternalLinks(true);
		conf.setTrackDownloadLinks(true);
		conf.setTrackInlineStats(true);
		var oldPN = KIDS.reporting.config.getPageName();
		conf.setPageName(oldPN+ "-" +newPageName);
		if(newPageName!="games") conf.setProp("5",newPageName);
		KIDS.reporting.omnifunctions.sendReportingCall(conf);
		//KIDS.reporting.omnifunctions.comscoreReport("comscore");
	}catch(e){KIDS.utils.doLog(e.toString());}
}
KIDS.reporting.omnifunctions.pageNameReset = function(newPageName){
	try{
		var conf =  new Configuration();
		conf.init();
		conf.setName("vianickjr,vianickjrparents");
		conf.setDynamicAccountSelection(true);
		conf.setDynamicAccountList("devvianickjr=nickjr-d.mtvi.com,nickjr-q.mtvi.com");
		conf.setLinkInternalFilters("javascript:,nickjr.com");
		conf.setTrackExternalLinks(true);
		conf.setTrackDownloadLinks(true);
		conf.setTrackInlineStats(true);
		conf.setPageName(newPageName);
		KIDS.reporting.omnifunctions.sendReportingCall(conf);
		//KIDS.reporting.omnifunctions.comscoreReport("comscore");
	}catch(e){KIDS.utils.doLog(e.toString());}
}
KIDS.reporting.omnifunctions.trackKidsGamePlay = function(gameName){
	try{
		var conf =  new Configuration();		
		conf.init();
		var site = fetchGamePlaySite(document.URL);
		var suite = "viakidsgameplay";
		conf.setName(suite);
		conf.setDynamicAccountSelection(false);
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
KIDS.reporting.omnifunctions.resetParamsToDefault = function(){
	try {
		if(com.mtvi.util.isDefined(KIDS.reporting.config)){
			dispatcher.setAccountVars({
				name:'vianickjr,vianickjrparents',
				dynamicAccountSelection:'false',
				dynamicAccountList:'devvianickjr=nickjr-d',
				linkInternalFilters:'javascript:,nickjr.com',
				trackExternalLinks: true,
				trackDownloadLinks: true
			});
			var tmpConfig = KIDS.reporting.config;			
			dispatcher.setAttribute("pageName", tmpConfig.getPageName());
			dispatcher.setAttribute("hier1", tmpConfig.getHier1());
			dispatcher.setAttribute("hier2", tmpConfig.getHier2());
			dispatcher.setAttribute("channel", tmpConfig.getChannel());
			dispatcher.setAttribute("prop1", tmpConfig.getProp("1"));
			dispatcher.setAttribute("prop2", tmpConfig.getProp("2"));
			dispatcher.setAttribute("prop3", tmpConfig.getProp("3"));
			dispatcher.setAttribute("prop4", tmpConfig.getProp("4"));
			dispatcher.setAttribute("prop5", tmpConfig.getProp("5"));
			dispatcher.setAttribute("prop7", tmpConfig.getProp("7"));
			dispatcher.setAttribute("prop8", tmpConfig.getProp("8"));
			dispatcher.setAttribute("prop9", tmpConfig.getProp("9"));
			dispatcher.setAttribute("prop10", tmpConfig.getProp("10"));
			dispatcher.setAttribute("prop11", tmpConfig.getProp("11"));
			dispatcher.setAttribute("prop12", tmpConfig.getProp("12"));
			dispatcher.setAttribute("prop13", tmpConfig.getProp("13"));
			dispatcher.setAttribute("prop14", tmpConfig.getProp("14"));
			dispatcher.setAttribute("prop15", tmpConfig.getProp("15"));
			dispatcher.setAttribute("prop16", tmpConfig.getProp("16"));
			dispatcher.setAttribute("prop18", tmpConfig.getProp("18"));
			dispatcher.setAttribute("prop19", tmpConfig.getProp("19"));
			dispatcher.setAttribute("prop20", tmpConfig.getProp("20"));
			dispatcher.setAttribute("prop21", tmpConfig.getProp("21"));
			dispatcher.setAttribute("prop22", tmpConfig.getProp("22"));
			dispatcher.setAttribute("prop23", tmpConfig.getProp("23"));
			dispatcher.setAttribute("prop24", tmpConfig.getProp("24"));
			dispatcher.setAttribute("prop25", tmpConfig.getProp("25"));
			dispatcher.setAttribute("prop26", tmpConfig.getProp("26"));
			dispatcher.setAttribute("prop27", tmpConfig.getProp("27"));
			dispatcher.setAttribute("prop28", tmpConfig.getProp("28"));
			dispatcher.setAttribute("prop29", tmpConfig.getProp("29"));
			dispatcher.setAttribute("prop30", tmpConfig.getProp("30"));
			dispatcher.setAttribute("prop31", tmpConfig.getProp("31"));
			dispatcher.setAttribute("prop32", tmpConfig.getProp("32"));
			dispatcher.setAttribute("prop33", tmpConfig.getProp("33"));
			dispatcher.setAttribute("prop34", tmpConfig.getProp("34"));
			dispatcher.setAttribute("prop35", tmpConfig.getProp("35"));
			dispatcher.setAttribute("prop36", tmpConfig.getProp("36"));
			dispatcher.setAttribute("prop37", tmpConfig.getProp("37"));
			dispatcher.setAttribute("prop38", tmpConfig.getProp("38"));
			dispatcher.setAttribute("prop39", tmpConfig.getProp("39"));
			dispatcher.setAttribute("prop40", tmpConfig.getProp("40"));
			dispatcher.setAttribute("prop41", tmpConfig.getProp("41"));
			dispatcher.setAttribute("prop42", tmpConfig.getProp("42"));
			dispatcher.setAttribute("prop43", tmpConfig.getProp("43"));
			dispatcher.setAttribute("prop44", tmpConfig.getProp("44"));
			dispatcher.setAttribute("prop45", tmpConfig.getProp("45"));
			dispatcher.setAttribute("prop46", tmpConfig.getProp("46"));
			dispatcher.setAttribute("prop47", tmpConfig.getProp("47"));
			dispatcher.setAttribute("prop48", tmpConfig.getProp("48"));
			dispatcher.setAttribute("prop49", tmpConfig.getProp("49"));
			dispatcher.setAttribute("prop50", tmpConfig.getProp("50"));
		}
	} catch(e){KIDS.utils.doLog(e.toString());}
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
resetParamsToDefault	= KIDS.reporting.omnifunctions.resetParamsToDefault;
flashReport				= KIDS.reporting.omnifunctions.flashReport;
printTracker 			= KIDS.reporting.omnifunctions.printTracker;
printReporting 			= KIDS.reporting.omnifunctions.printReporting;


}