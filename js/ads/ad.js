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


}
/*
     FILE ARCHIVED ON 21:58:28 Jan 09, 2013 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 21:59:08 May 01, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 175.088
  exclusion.robots: 0.136
  exclusion.robots.policy: 0.127
  cdx.remote: 0.069
  esindex: 0.008
  LoadShardBlock: 135.167 (3)
  PetaboxLoader3.datanode: 136.997 (4)
  load_resource: 60.391
  PetaboxLoader3.resolve: 32.067
*/