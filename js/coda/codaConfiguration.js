function Configuration(orig){
	this.orig = orig;
	this.setting = {};
	this.setting["name"]="";
	this.setting["dynamicAccountSelection"] = false;
	this.setting["dynamicAccountList"] = "";
	this.setting["linkInternalFilters"] = "";
	this.setting["trackExternalLinks"] = false;
	this.setting["trackDownloadLinks"] = false;
	this.setting["trackInlineStats"] = false;
	this.setting["pageName"] = "";
	this.setting["hier2"] = "";
	this.setting["channel"] = "";
	this.setting["prop1"] = "";
	this.setting["prop2"] = "";
	this.setting["prop3"] = "";
	this.setting["prop4"] = "";
	this.setting["prop5"] = "";
	this.setting["prop6"] = "";
	this.setting["prop7"] = "";
	this.setting["prop8"] = "";
	this.setting["prop9"] = "";
	this.setting["prop10"] = "";
	this.setting["prop11"] = "";
	this.setting["prop12"] = "";
	this.setting["prop13"] = "";
	this.setting["prop14"] = "";
	this.setting["prop15"] = "";
	this.setting["prop16"] = "";
	this.setting["prop17"] = "";
	this.setting["prop18"] = "";
	this.setting["prop19"] = "";
	this.setting["prop20"] = "";
	this.setting["prop23"] = "";
	this.setting["prop24"] = "";
	this.setting["prop25"] = "";
	this.setting["prop26"] = "";
	this.setting["prop27"] = "";
	this.setting["prop28"] = "";
	this.setting["prop29"] = "";
	this.setting["prop30"] = "";
	this.setting["prop31"] = "";
	this.setting["prop32"] = "";
	this.setting["prop33"] = "";
	this.setting["prop34"] = "";
	this.setting["prop35"] = "";
	this.setting["prop36"] = "";
	this.setting["prop37"] = "";
	this.setting["prop38"] = "";
	this.setting["prop39"] = "";
	this.setting["prop40"] = "";
	this.setting["prop41"] = "";
	this.setting["prop42"] = "";
	this.setting["prop43"] = "";
	this.setting["prop44"] = "";
	this.setting["prop45"] = "";
	this.setting["prop46"] = "";
	this.setting["prop47"] = "";
	this.setting["prop48"] = "";
	this.setting["prop49"] = "";
	this.setting["prop50"] = "";
	
	this.setting["eVar1"] = "";
	this.setting["eVar2"] = "";
	this.setting["eVar3"] = "";
	this.setting["eVar4"] = "";
	this.setting["eVar5"] = "";
	this.setting["campaign"] = "";
	this.setting["events"] = "";
	
	this.setting["lnk"] = false;
	this.setting["linkType"] = "";
	this.setting["linkName"] = "";

	this.showPage = false;
	this.videoSuite = "";

	this.init = function(){
		if(typeof this.orig != "undefined"){
			this.setting.name = this.orig.getName();
			this.setting.dynamicAccountSelection = this.orig.isDynamicAccountSelection();
			this.setting.dynamicAccountList = this.orig.getDynamicAccountList();
			this.setting.linkInternalFilters = this.orig.getLinkInternalFilters();
			this.setting.trackExternalLinks = this.orig.isTrackExternalLinks();
			this.setting.trackDownloadLinks = this.orig.isTrackDownloadLinks();
			this.setting.trackInlineStats = this.orig.isTrackInlineStats();
			this.setting.pageName = this.orig.getPageName();
			this.setting.hier1 = this.orig.getHier1();
			this.setting.hier2 = this.orig.getHier2();
			this.setting.channel = this.orig.getChannel();
			this.setting.prop1 = this.orig.getProp(1);
			this.setting.prop2 = this.orig.getProp(2);
			this.setting.prop3 = this.orig.getProp(3);
			this.setting.prop4 = this.orig.getProp(4);
			this.setting.prop5 = this.orig.getProp(5);
			this.setting.prop6 = this.orig.getProp(6);
			this.setting.prop7 = this.orig.getProp(7);
			this.setting.prop8 = this.orig.getProp(8);
			this.setting.prop9 = this.orig.getProp(9);
			this.setting.prop10 = this.orig.getProp(10);
			this.setting.prop11 = this.orig.getProp(11);
			this.setting.prop12 = this.orig.getProp(12);
			this.setting.prop13 = this.orig.getProp(13);
			this.setting.prop14 = this.orig.getProp(14);
			this.setting.prop15 = this.orig.getProp(15);
			this.setting.prop16 = this.orig.getProp(16);
			this.setting.prop17 = this.orig.getProp(17);
			this.setting.prop18 = this.orig.getProp(18);
			this.setting.prop19 = this.orig.getProp(19);
			this.setting.prop20 = this.orig.getProp(20);
			this.setting.prop23 = this.orig.getProp(23);
			this.setting.prop24 = this.orig.getProp(24);
			this.setting.prop25 = this.orig.getProp(25);
			this.setting.prop26 = this.orig.getProp(26);
			this.setting.prop27 = this.orig.getProp(27);
			this.setting.prop28 = this.orig.getProp(28);
			this.setting.prop29 = this.orig.getProp(29);
			this.setting.prop30 = this.orig.getProp(30);
			this.setting.prop31 = this.orig.getProp(31);
			this.setting.prop32 = this.orig.getProp(32);
			this.setting.prop33 = this.orig.getProp(33);
			this.setting.prop34 = this.orig.getProp(34);
			this.setting.prop35 = this.orig.getProp(35);
			this.setting.prop36 = this.orig.getProp(36);
			this.setting.prop37 = this.orig.getProp(37);
			this.setting.prop38 = this.orig.getProp(38);
			this.setting.prop39 = this.orig.getProp(39);
			this.setting.prop40 = this.orig.getProp(40);
			this.setting.prop41 = this.orig.getProp(41);
			this.setting.prop42 = this.orig.getProp(42);
			this.setting.prop43 = this.orig.getProp(43);
			this.setting.prop44 = this.orig.getProp(44);
			this.setting.prop45 = this.orig.getProp(45);
			this.setting.prop46 = this.orig.getProp(46);
			this.setting.prop47 = this.orig.getProp(47);
			this.setting.prop48 = this.orig.getProp(48);
			this.setting.prop49 = this.orig.getProp(49);
			this.setting.prop50 = this.orig.getProp(50);
			this.setting.eVar1	= this.orig.getEVar(1);
			this.setting.eVar2	= this.orig.getEVar(2);
			this.setting.eVar3	= this.orig.getEVar(3);
			this.setting.eVar4	= this.orig.getEVar(4);
			this.setting.eVar5	= this.orig.getEVar(5);
			this.setting.campaign	= this.orig.getCampaign();
			this.setting.events	= this.orig.getEvents();
			this.showPage = this.orig.isShowPage();
			this.videoSuite = this.orig.getVideoSuite();
		}
	}

	this.getName = function(){return this.setting.name;}
	this.setName = function(name){this.setting.name = name;}
	this.isDynamicAccountSelection = function(){return this.setting.dynamicAccountSelection;}
	this.setDynamicAccountSelection = function(das){this.setting.dynamicAccountSelection = das;}
	this.getDynamicAccountList = function(){return this.setting.dynamicAccountList;}
	this.setDynamicAccountList = function(dal){this.setting.dynamicAccountList = dal;}
	this.getLinkInternalFilters = function(){return this.setting.linkInternalFilters;}
	this.setLinkInternalFilters = function(lif){this.setting.linkInternalFilters = lif;}
	this.isTrackExternalLinks = function(){return this.setting.trackExternalLinks};
	this.setTrackExternalLinks = function(tel){this.setting.trackExternalLinks = tel};
	this.isTrackDownloadLinks = function(){return this.setting.trackDownloadLinks;}
	this.setTrackDownloadLinks = function(tdl){this.setting.trackDownloadLinks = tdl;}
	this.isTrackInlineStats = function(){return this.setting.trackInlineStats;}
	this.setTrackInlineStats = function(tns){this.setting.trackInlineStats = tns;}
	this.getPageName = function(){return this.setting.pageName;}
	this.setPageName = function(pagename){this.setting.pageName = pagename;}
	this.getHier1 = function(){return this.setting.hier1;}
	this.setHier1 = function(hier1){this.setting.hier1 = hier1;}
	this.getHier2 = function(){return this.setting.hier2;}
	this.setHier2 = function(hier2){this.setting.hier2 = hier2;}
	this.getChannel = function(){return this.setting.channel;}
	this.setChannel = function(chan){this.setting.channel = chan;}
	this.isShowPage = function(){return this.showPage;}
	this.setShowPage = function(isSP){this.showPage = isSP;}
	this.getVideoSuite = function(){return this.videoSuite;}
	this.setVideoSuite = function(vs){this.videoSuite = vs;}
	this.getProp = function(n){return(eval("this.setting.prop"+n));}
	this.setProp = function(n,value){eval("this.setting.prop"+n+"=\""+value+"\"");}
	this.getEVar = function(n){return(eval("this.setting.eVar"+n));}
	this.setEVar = function(n,value){eval("this.setting.eVar"+n+"=\""+value+"\"");}
	this.getCampaign = function(){return this.setting.campaign;}
	this.setCampaign = function(c){this.setting.campaign = c;}
	this.getEvents = function(){return this.setting.events;}
	this.setEvents = function(e){this.setting.events = e;}
	this.isLink = function(){return this.setting.lnk;}
	this.setLink = function(lnk){this.setting.lnk = lnk;}	
	this.getLinkType = function(){return this.setting.linkType;}
	this.setLinkType = function(linkType){this.setting.linkType = linkType;}	
	this.getLinkName = function(){return this.setting.linkName;}
	this.setLinkName = function(linkName){this.setting.linkName = linkName;}
}


}