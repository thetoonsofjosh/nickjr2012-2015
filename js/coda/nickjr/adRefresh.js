if(typeof KIDS == "undefined" || !KIDS) var KIDS = {};

KIDS.namespace("ads.refresh");

KIDS.ads.refresh.minSponsor = 1;
KIDS.ads.refresh.maxSponsor = 3;
KIDS.ads.refresh.randSponsor = Math.floor(Math.random()*(KIDS.ads.refresh.maxSponsor-KIDS.ads.refresh.minSponsor+1)+KIDS.ads.refresh.minSponsor);

KIDS.ads.refresh.placeAd = function(adDivId){
	try{		
		if(KIDS.get("adfree")!="true"){ 
			var sz = adDivId.substring(adDivId.indexOf("-")+1,adDivId.indexOf("D"));	
			for(var one in KIDS.ads.adArray){	
				if(sz==KIDS.ads.adArray[one].getSize()){	
					if(sz.indexOf("-")>0) sz = sz.substring(0,sz.indexOf("-"));
					var zone = location.pathname;					
					if(zone.indexOf(".html")<0){
						if(zone.charAt(zone.length-1)!="/") zone+="/";
						zone+="index.html";
					}
					if(zone.indexOf("ad-entry")>-1){
						var zArr = zone.split(".");
						if(zArr.length==2)zone=zArr[0]+"/interstitial."+zArr[1];
					}
					zone=zone.replace(/[- ]/gi,"_");
					if(zone.indexOf(".">0)){
						var arr = zone.split("/");
						if(arr.length==2){
							if(arr[1]=="index.html")zone = "/_hp";
						}else if(arr.length==3){
							if(arr[2]=="index.html")zone = "/"+arr[1]+"/_mn";
						}
					}	
					var kVals = ""+KIDS.ads.adArray[one].getKeyValues();	
					kVals = (kVals.lastIndexOf(";")==(kVals.length-1)) ? kVals : kVals+";";
					if(KIDS.reporting.qs.testmode) kVals += "testmode=" + KIDS.reporting.qs.testmode+";";
					if(KIDS.ads.refresh.maxSponsor>1) kVals+="cat="+KIDS.ads.refresh.randSponsor+";";
					if(KIDS.get("urlAlias").length>0)kVals+='activity='+KIDS.get("urlAlias")+';';
					if(KIDS.get("showId").length>0)kVals+='!category='+KIDS.get("showId")+';showid='+KIDS.get("showId")+';';
					if(location.pathname.indexOf("/kids/")>-1||location.pathname.indexOf("/kids-games/")>-1||location.pathname.indexOf("/kids-videos/")>-1||location.pathname.indexOf("/kids-create/")>-1){kVals+="demo=D;";}
					if(KIDS.ads.adArray[one].isRefreshable()){
						var rate = ""+KIDS.ads.adArray[one].getRefreshRate();
						if(rate.indexOf(".")>-1){
					 		if(rate.substring(rate.indexOf(".")+1).length>1)
					 			rate = rate.substring(0,rate.indexOf(".")+1);
					 		if(rate.charAt(rate.length-1)=="0")
								rate = rate.substring(0,rate.indexOf(".")-1)
							else if(rate.charAt(rate.length-1)=="5")
								rate = rate;
							else
								rate=Math.round(rate);
						}
						var fn = "https://thetoonsofjosh.github.io/nickjr2012-2015/ads/ads.html";
						mtvn.btg.Controller.placeIFrameAd(
							fn,
							{
								   size:sz,				
								   contentType:'adj',			
								   keyValues:kVals,		
								   sections:zone,
								   reloadableAdId:new Number(one).valueOf()+1, 				
								   loadOrder:new Number(one).valueOf()+1 				
							}
						); 
					}else{
						mtvn.btg.Controller.placeAd(
				            {
				               size:sz,
				               contentType:"adj",
				               keyValues:kVals,
				               sections:zone,
				               loadOrder:new Number(one).valueOf()+1
				            }
				         );
					}
				}
			}
		}
	}catch(e){KIDS.utils.doLog("KIDS.ads.refresh.placeAd failed:"+e);}	
}
