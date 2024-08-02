if(typeof KIDS == "undefined" || !KIDS) var KIDS = {};

KIDS.namespace("ads.pageLevelAdConfig");

KIDS.ads.pageLevelAdConfig.minSponsor = 1;
KIDS.ads.pageLevelAdConfig.maxSponsor = 3;
KIDS.ads.pageLevelAdConfig.randSponsor = Math.floor(Math.random()*(KIDS.ads.pageLevelAdConfig.maxSponsor-KIDS.ads.pageLevelAdConfig.minSponsor+1)+KIDS.ads.pageLevelAdConfig.minSponsor);

KIDS.ads.pageLevelAdConfig.zone;
KIDS.ads.pageLevelAdConfig.keyValues;

KIDS.ads.pageLevelAdConfig.init = function(){
	try{
		var zone = location.pathname;
		var kVals = "";
		
		if(zone.indexOf(".jhtml")<0){
			if(zone.indexOf(".html")<0){
				if(zone.charAt(zone.length-1)!="/") zone+="/";
				zone+="index.html";
			}
			if(zone.indexOf("ad-entry")>-1){
				var zArr = zone.split(".");
				if(zArr.length==2)zone=zArr[0]+"/interstitial."+zArr[1];
			}
			zone=zone.replace(/[- ]/gi,"_");
		}
		var arr = zone.split("/");
		if(zone.indexOf(".jhtml")<0){
			if(arr.length==2){
				if(arr[1]=="index.html")zone = "/_hp";
			}else if(arr.length==3){
				if(arr[2]=="index.html")zone = "/"+arr[1]+"/_mn";
			}
		}	
		if(KIDS.ads.pageLevelAdConfig.maxSponsor>1) kVals+="cat="+KIDS.ads.pageLevelAdConfig.randSponsor+";";	
		if(KIDS.get("urlAlias"))kVals+='activity='+KIDS.get("urlAlias")+';';
		if(KIDS.get("showId"))kVals+='!category='+KIDS.get("showId")+';showid='+KIDS.get("showId")+';';
		if(location.pathname.indexOf("/kids/")>-1
					||location.pathname.indexOf("/kids-games/")>-1
					||location.pathname.indexOf("/kids-videos/")>-1
					||location.pathname.indexOf("/kids-create/")>-1)
		{kVals+="demo=D;";}
		
		var str = location.search;
		if(str.length>0){
		    str = str.replace("?","");
		    tmp = str.split("&");
		    for(var i=0;i<tmp.length;i++){
		    	if(tmp[i].indexOf("testmode")>-1)kVals+=tmp[i]+";";
		    }
		}
		if(zone.indexOf(".html")>-1)zone = zone.substring(0,zone.indexOf(".html"));
		
		zone=zone.replace(/[- ]/gi,"_");
		kVals=kVals.replace(/[- ]/gi,"_");
	
		KIDS.ads.pageLevelAdConfig.zone = zone;
		KIDS.ads.pageLevelAdConfig.keyValues = kVals;
		
		if(KIDS.get("adfree")=="true"){
			KIDS.ads.pageLevelAdConfig.keyValues+="!category=poe;"
		}
		
		KIDS.utils.doLog("KIDS.ads.pageLevelAdConfig.zone:"+KIDS.ads.pageLevelAdConfig.zone);
		KIDS.utils.doLog("KIDS.ads.pageLevelAdConfig.keyValues:"+KIDS.ads.pageLevelAdConfig.keyValues);
		
		if(typeof MTVN=="undefined")MTVN={};
		if(typeof MTVN.config=="undefined")MTVN.config={};
		if(typeof MTVN.config.btg=="undefined")MTVN.config.btg={};
		if(typeof MTVN.config.btg.DoubleClick=="undefined")MTVN.config.btg.DoubleClick={};
		
		MTVN.config.btg.DoubleClick.sections = KIDS.ads.pageLevelAdConfig.zone;
		
		if(location.pathname.indexOf("/kids/")==0||location.pathname.indexOf("/kids-games/")==0||location.pathname.indexOf("/kids-videos/")==0||location.pathname.indexOf("/kids-create/")==0)
			MTVN.config.btg.DoubleClick.dartSite = 'nickjr.playtime.nol';
				
		if (typeof MTVN.config.btg.DoubleClick.keyValues == "string") 
			MTVN.config.btg.DoubleClick.keyValues += KIDS.ads.pageLevelAdConfig.keyValues;
		else 
			MTVN.config.btg.DoubleClick.keyValues = KIDS.ads.pageLevelAdConfig.keyValues;
		
	}catch(e){KIDS.utils.doLog("pageLevelAdSettings failed:"+e);}
}

KIDS.ads.pageLevelAdConfig.init();