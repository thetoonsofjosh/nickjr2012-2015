if(typeof KIDS == "undefined" || !KIDS) var KIDS = {};

KIDS.namespace("reporting");

KIDS.reporting.config;
KIDS.reporting.dispatcher;
KIDS.reporting.qs;

Configuration.prototype.initialize = function(){
	this.init();
	this.setting["name"]="vianickjr,vianickjrparents";
	this.setting["dynamicAccountSelection"] = true;
	this.setting["dynamicAccountList"] = "devvianickjr=nickjr-d.mtvi.com,nickjr-q.mtvi.com";
	this.setting["linkInternalFilters"] = "javascript:,nickjr.com";
	this.setting["trackExternalLinks"] = true;
	this.setting["trackDownloadLinks"] = true;
	this.setting["trackInlineStats"] = true;
	if(!this.isLink()){
		if(KIDS.get("reportingKey").length>0) this.setting.pageName = KIDS.get("reportingKey");
		else if(KIDS.get("categoryPath").length>0) this.setting.pageName = KIDS.get("categoryPath");
		this.setting.pageName = this.setting.pageName.replace(/\/2009-Redesign/,"");
		if(this.setting.pageName.indexOf(".")<0){
			if(this.setting.pageName.lastIndexOf("/")!=this.setting.pageName.length-1) this.setting.pageName+="/";	
			this.setting.hier2 = this.setting.pageName.substr(1) + "index";
		}else this.setting.hier2 = this.setting.pageName.substr(1, this.setting.pageName.lastIndexOf(".")-1);
		this.setting.channel = this.setting.hier2.substr(0,this.setting.hier2.indexOf("/"));
		this.setting.prop3 = location.search;
		this.setting.prop11 = "grownups";
	}
}
KIDS.reporting.init = function(){
	com.mtvi.reporting.Account={
		name:'vianickjr,vianickjrparents',
		dynamicAccountSelection:true,
		dynamicAccountList:'devvianickjr=nickjr-d.mtvi.com,nickjr-q.mtvi.com',
		linkInternalFilters:'javascript:,nickjr.com',
		trackInlineStats : true,
		trackExternalLinks: true,
		trackDownloadLinks: true
	};
	KIDS.reporting.dispatcher = new com.mtvi.reporting.Dispatcher();
	KIDS.reporting.dispatcher.setDefaultData();
	com.mtvi.config.qs=com.mtvi.util.queryStringToHash(window.location.search);
	KIDS.reporting.qs = com.mtvi.config.qs;
	KIDS.reporting.config = new Configuration();
	KIDS.reporting.config.initialize();
	KIDS.reporting.config.setProp(9,KIDS.reporting.qs.partner);
	KIDS.reporting.config.setEVar(2,com.mtvi.config.qs.searchterm?com.mtvi.config.qs.searchterm:"");
	KIDS.reporting.config.setEVar(3,com.mtvi.config.qs.searchtype?com.mtvi.config.qs.searchtype:"");
	KIDS.reporting.config.setCampaign(com.mtvi.config.qs.sem?com.mtvi.config.qs.sem:com.mtvi.config.qs.extcmp?com.mtvi.config.qs.extcmp:"");	
	KIDS.reporting.config.setProp(17,KIDS.reporting.config.getEVar(2));	
	KIDS.reporting.config.setProp(42,KIDS.reporting.config.getCampaign());
}
KIDS.reporting.firePageLoad = function(){
	KIDS.reporting.omnifunctions.sendReportingCall();
}


}