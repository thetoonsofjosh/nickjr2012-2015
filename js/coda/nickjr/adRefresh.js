if(typeof KIDS == "undefined" || !KIDS) var KIDS = {};

KIDS.namespace("ads.refresh");

KIDS.ads.refresh.placeAd = function(adDivId){
	try{		
		if(KIDS.get("adfree")!="true"){ 
			var sz = adDivId.substring(adDivId.indexOf("-")+1,adDivId.indexOf("D"));	
			for(var i=0;i<KIDS.ads.adArray.length;i++){	
				var adObj = KIDS.ads.adArray[i];
				if(sz==adObj.getSize()){
					if(sz.indexOf("-")>0) sz = sz.substring(0,sz.indexOf("-"));
					var actualSize = adObj.getActualSize();
					var contentType = adObj.getContentType();
					
					var aokvs = adObj.getKeyValues();
					if(aokvs.indexOf("pos=")>-1){
						aokvs = aokvs.substring(0,aokvs.indexOf("pos="))+aokvs.substring(aokvs.indexOf("pos=")+8);
					}
					var kvs = KIDS.ads.pageLevelAdConfig.keyValues+aokvs;	
					
					var rate = "";
					if(adObj.isRefreshable()){
						rate=parseInt(adObj.getRefreshRate());
						if(isNaN(rate)||rate<0.5)rate=0.5;
						rate*=60000;
					}
					
					var secs = KIDS.ads.pageLevelAdConfig.zone;
										
					if(contentType=="adi"&&!adObj.isRefreshable()){
						mtvn.btg.Controller.placeAd(
							{
								size:sz,	
								keyValues:kvs,	
								sections:secs,
								contentType:"adi"
							}
						);
					}else if(contentType=="adj"){
						if(!adObj.isRefreshable()){
							mtvn.btg.Controller.placeAd(
								{
									size:sz,	
									keyValues:kvs,
									sections:secs
								}
							);							
						}else{	
							mtvn.btg.Controller.placeAd(
								{
									size:sz,	
									realSize:actualSize,
									keyValues:kvs,	
									sections:secs,
									isReloadable:adObj.isRefreshable(),
									reloadInterval:rate
								}
							);
						}						
					}
				}
			}
		}
	}catch(e){
			KIDS.utils.doLog("KIDS.ads.refresh.placeAd failed:"+e);
	}	
}
