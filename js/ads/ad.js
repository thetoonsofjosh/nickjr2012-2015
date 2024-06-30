if(typeof KIDS == "undefined" || !KIDS) var KIDS = {};

KIDS.namespace("ads");
KIDS.ads.adArray;

KIDS.ads.Ad = function(ad) {
	try{
		this.ad = ad;
		this.getSize = function () {
			return this.ad.size;
		}
		this.getContentType = function(){
			if(this.ad.contentType) return this.ad.contentType;
			else return "adj";
		}
		this.getActualSize = function(){
			if(this.ad.actualSize) return this.ad.actualSize;
			else return "";
		}
		this.getElementID = function () {
			return this.ad.elementID;
		}
		this.getKeyValues = function () {
			return this.ad.keyValues;
		}
		this.isRefreshable = function () {
			return (this.ad.refreshable=="true") ? true : false;
		}
		this.getRefreshRate = function () {
			if(isNaN(this.ad.refreshRate))return 500;
			return new Number(this.ad.refreshRate);
		}
	}catch(e){}
}
KIDS.ads.getAds = function(uri){
	if(KIDS.ads.adArray != null) return KIDS.ads.adArray;

	KIDS.ads.adArray = new Array();
	
	for(var ad in KIDS.ads.config.ads) {
		KIDS.ads.adArray.push(new KIDS.ads.Ad(KIDS.ads.config.ads[ad]));
		//KIDS.utils.doLog("Ad: "+KIDS.ads.config.ads[ad].size);
	}
	return KIDS.ads.adArray;
}
KIDS.ads.getVideoAdFrequency = function(){
	try{
		if(KIDS.ads.config.videoAdFrequency)return new Number(KIDS.ads.config.videoAdFrequency);
		else return 0;
	}catch(e){return 0}	
}
