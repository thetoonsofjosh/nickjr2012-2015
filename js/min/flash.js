var swfobject=function(){var aq="undefined",aD="object",ab="Shockwave Flash",X="ShockwaveFlash.ShockwaveFlash",aE="application/x-shockwave-flash",ac="SWFObjectExprInst",ax="onreadystatechange",af=window,aL=document,aB=navigator,aa=false,Z=[aN],aG=[],ag=[],al=[],aJ,ad,ap,at,ak=false,aU=false,aH,an,aI=true,ah=function(){var a=typeof aL.getElementById!=aq&&typeof aL.getElementsByTagName!=aq&&typeof aL.createElement!=aq,e=aB.userAgent.toLowerCase(),c=aB.platform.toLowerCase(),h=c?/win/.test(c):/win/.test(e),j=c?/mac/.test(c):/mac/.test(e),g=/webkit/.test(e)?parseFloat(e.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,d=!+"\v1",f=[0,0,0],k=null;
if(typeof aB.plugins!=aq&&typeof aB.plugins[ab]==aD){k=aB.plugins[ab].description;
if(k&&!(typeof aB.mimeTypes!=aq&&aB.mimeTypes[aE]&&!aB.mimeTypes[aE].enabledPlugin)){aa=true;
d=false;
k=k.replace(/^.*\s+(\S+\s+\S+$)/,"$1");
f[0]=parseInt(k.replace(/^(.*)\..*$/,"$1"),10);
f[1]=parseInt(k.replace(/^.*\.(.*)\s.*$/,"$1"),10);
f[2]=/[a-zA-Z]/.test(k)?parseInt(k.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0;
}}else{if(typeof af.ActiveXObject!=aq){try{var i=new ActiveXObject(X);
if(i){k=i.GetVariable("$version");
if(k){d=true;
k=k.split(" ")[1].split(",");
f=[parseInt(k[0],10),parseInt(k[1],10),parseInt(k[2],10)];
}}}catch(b){}}}return{w3:a,pv:f,wk:g,ie:d,win:h,mac:j};
}(),aK=function(){if(!ah.w3){return;
}if((typeof aL.readyState!=aq&&aL.readyState=="complete")||(typeof aL.readyState==aq&&(aL.getElementsByTagName("body")[0]||aL.body))){aP();
}if(!ak){if(typeof aL.addEventListener!=aq){aL.addEventListener("DOMContentLoaded",aP,false);
}if(ah.ie&&ah.win){aL.attachEvent(ax,function(){if(aL.readyState=="complete"){aL.detachEvent(ax,arguments.callee);
aP();
}});
if(af==top){(function(){if(ak){return;
}try{aL.documentElement.doScroll("left");
}catch(a){setTimeout(arguments.callee,0);
return;
}aP();
})();
}}if(ah.wk){(function(){if(ak){return;
}if(!/loaded|complete/.test(aL.readyState)){setTimeout(arguments.callee,0);
return;
}aP();
})();
}aC(aP);
}}();
function aP(){if(ak){return;
}try{var b=aL.getElementsByTagName("body")[0].appendChild(ar("span"));
b.parentNode.removeChild(b);
}catch(a){return;
}ak=true;
var d=Z.length;
for(var c=0;
c<d;
c++){Z[c]();
}}function aj(a){if(ak){a();
}else{Z[Z.length]=a;
}}function aC(a){if(typeof af.addEventListener!=aq){af.addEventListener("load",a,false);
}else{if(typeof aL.addEventListener!=aq){aL.addEventListener("load",a,false);
}else{if(typeof af.attachEvent!=aq){aM(af,"onload",a);
}else{if(typeof af.onload=="function"){var b=af.onload;
af.onload=function(){b();
a();
};
}else{af.onload=a;
}}}}}function aN(){if(aa){Y();
}else{am();
}}function Y(){var d=aL.getElementsByTagName("body")[0];
var b=ar(aD);
b.setAttribute("type",aE);
var a=d.appendChild(b);
if(a){var c=0;
(function(){if(typeof a.GetVariable!=aq){var e=a.GetVariable("$version");
if(e){e=e.split(" ")[1].split(",");
ah.pv=[parseInt(e[0],10),parseInt(e[1],10),parseInt(e[2],10)];
}}else{if(c<10){c++;
setTimeout(arguments.callee,10);
return;
}}d.removeChild(b);
a=null;
am();
})();
}else{am();
}}function am(){var g=aG.length;
if(g>0){for(var h=0;
h<g;
h++){var c=aG[h].id;
var l=aG[h].callbackFn;
var a={success:false,id:c};
if(ah.pv[0]>0){var i=aS(c);
if(i){if(ao(aG[h].swfVersion)&&!(ah.wk&&ah.wk<312)){ay(c,true);
if(l){a.success=true;
a.ref=av(c);
l(a);
}}else{if(aG[h].expressInstall&&au()){var e={};
e.data=aG[h].expressInstall;
e.width=i.getAttribute("width")||"0";
e.height=i.getAttribute("height")||"0";
if(i.getAttribute("class")){e.styleclass=i.getAttribute("class");
}if(i.getAttribute("align")){e.align=i.getAttribute("align");
}var f={};
var d=i.getElementsByTagName("param");
var k=d.length;
for(var j=0;
j<k;
j++){if(d[j].getAttribute("name").toLowerCase()!="movie"){f[d[j].getAttribute("name")]=d[j].getAttribute("value");
}}ae(e,f,c,l);
}else{aF(i);
if(l){l(a);
}}}}}else{ay(c,true);
if(l){var b=av(c);
if(b&&typeof b.SetVariable!=aq){a.success=true;
a.ref=b;
}l(a);
}}}}}function av(b){var d=null;
var c=aS(b);
if(c&&c.nodeName=="OBJECT"){if(typeof c.SetVariable!=aq){d=c;
}else{var a=c.getElementsByTagName(aD)[0];
if(a){d=a;
}}}return d;
}function au(){return !aU&&ao("6.0.65")&&(ah.win||ah.mac)&&!(ah.wk&&ah.wk<312);
}function ae(f,d,h,e){aU=true;
ap=e||null;
at={success:false,id:h};
var a=aS(h);
if(a){if(a.nodeName=="OBJECT"){aJ=aO(a);
ad=null;
}else{aJ=a;
ad=h;
}f.id=ac;
if(typeof f.width==aq||(!/%$/.test(f.width)&&parseInt(f.width,10)<310)){f.width="310";
}if(typeof f.height==aq||(!/%$/.test(f.height)&&parseInt(f.height,10)<137)){f.height="137";
}aL.title=aL.title.slice(0,47)+" - Flash Player Installation";
var b=ah.ie&&ah.win?"ActiveX":"PlugIn",c="MMredirectURL="+af.location.toString().replace(/&/g,"%26")+"&MMplayerType="+b+"&MMdoctitle="+aL.title;
if(typeof d.flashvars!=aq){d.flashvars+="&"+c;
}else{d.flashvars=c;
}if(ah.ie&&ah.win&&a.readyState!=4){var g=ar("div");
h+="SWFObjectNew";
g.setAttribute("id",h);
a.parentNode.insertBefore(g,a);
a.style.display="none";
(function(){if(a.readyState==4){a.parentNode.removeChild(a);
}else{setTimeout(arguments.callee,10);
}})();
}aA(f,d,h);
}}function aF(a){if(ah.ie&&ah.win&&a.readyState!=4){var b=ar("div");
a.parentNode.insertBefore(b,a);
b.parentNode.replaceChild(aO(a),b);
a.style.display="none";
(function(){if(a.readyState==4){a.parentNode.removeChild(a);
}else{setTimeout(arguments.callee,10);
}})();
}else{a.parentNode.replaceChild(aO(a),a);
}}function aO(b){var d=ar("div");
if(ah.win&&ah.ie){d.innerHTML=b.innerHTML;
}else{var e=b.getElementsByTagName(aD)[0];
if(e){var a=e.childNodes;
if(a){var f=a.length;
for(var c=0;
c<f;
c++){if(!(a[c].nodeType==1&&a[c].nodeName=="PARAM")&&!(a[c].nodeType==8)){d.appendChild(a[c].cloneNode(true));
}}}}}return d;
}function aA(e,g,c){var d,a=aS(c);
if(ah.wk&&ah.wk<312){return d;
}if(a){if(typeof e.id==aq){e.id=c;
}if(ah.ie&&ah.win){var f="";
for(var i in e){if(e[i]!=Object.prototype[i]){if(i.toLowerCase()=="data"){g.movie=e[i];
}else{if(i.toLowerCase()=="styleclass"){f+=' class="'+e[i]+'"';
}else{if(i.toLowerCase()!="classid"){f+=" "+i+'="'+e[i]+'"';
}}}}}var h="";
for(var j in g){if(g[j]!=Object.prototype[j]){h+='<param name="'+j+'" value="'+g[j]+'" />';
}}a.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+f+">"+h+"</object>";
ag[ag.length]=e.id;
d=aS(e.id);
}else{var b=ar(aD);
b.setAttribute("type",aE);
for(var k in e){if(e[k]!=Object.prototype[k]){if(k.toLowerCase()=="styleclass"){b.setAttribute("class",e[k]);
}else{if(k.toLowerCase()!="classid"){b.setAttribute(k,e[k]);
}}}}for(var l in g){if(g[l]!=Object.prototype[l]&&l.toLowerCase()!="movie"){aQ(b,l,g[l]);
}}a.parentNode.replaceChild(b,a);
d=b;
}}return d;
}function aQ(b,d,c){var a=ar("param");
a.setAttribute("name",d);
a.setAttribute("value",c);
b.appendChild(a);
}function aw(a){var b=aS(a);
if(b&&b.nodeName=="OBJECT"){if(ah.ie&&ah.win){b.style.display="none";
(function(){if(b.readyState==4){aT(a);
}else{setTimeout(arguments.callee,10);
}})();
}else{b.parentNode.removeChild(b);
}}}function aT(a){var b=aS(a);
if(b){for(var c in b){if(typeof b[c]=="function"){b[c]=null;
}}b.parentNode.removeChild(b);
}}function aS(a){var c=null;
try{c=aL.getElementById(a);
}catch(b){}return c;
}function ar(a){return aL.createElement(a);
}function aM(a,c,b){a.attachEvent(c,b);
al[al.length]=[a,c,b];
}function ao(a){var b=ah.pv,c=a.split(".");
c[0]=parseInt(c[0],10);
c[1]=parseInt(c[1],10)||0;
c[2]=parseInt(c[2],10)||0;
return(b[0]>c[0]||(b[0]==c[0]&&b[1]>c[1])||(b[0]==c[0]&&b[1]==c[1]&&b[2]>=c[2]))?true:false;
}function az(b,f,a,c){if(ah.ie&&ah.mac){return;
}var e=aL.getElementsByTagName("head")[0];
if(!e){return;
}var g=(a&&typeof a=="string")?a:"screen";
if(c){aH=null;
an=null;
}if(!aH||an!=g){var d=ar("style");
d.setAttribute("type","text/css");
d.setAttribute("media",g);
aH=e.appendChild(d);
if(ah.ie&&ah.win&&typeof aL.styleSheets!=aq&&aL.styleSheets.length>0){aH=aL.styleSheets[aL.styleSheets.length-1];
}an=g;
}if(ah.ie&&ah.win){if(aH&&typeof aH.addRule==aD){aH.addRule(b,f);
}}else{if(aH&&typeof aL.createTextNode!=aq){aH.appendChild(aL.createTextNode(b+" {"+f+"}"));
}}}function ay(a,c){if(!aI){return;
}var b=c?"visible":"hidden";
if(ak&&aS(a)){aS(a).style.visibility=b;
}else{az("#"+a,"visibility:"+b);
}}function ai(b){var a=/[\\\"<>\.;]/;
var c=a.exec(b)!=null;
return c&&typeof encodeURIComponent!=aq?encodeURIComponent(b):b;
}var aR=function(){if(ah.ie&&ah.win){window.attachEvent("onunload",function(){var a=al.length;
for(var b=0;
b<a;
b++){al[b][0].detachEvent(al[b][1],al[b][2]);
}var d=ag.length;
for(var c=0;
c<d;
c++){aw(ag[c]);
}for(var e in ah){ah[e]=null;
}ah=null;
for(var f in swfobject){swfobject[f]=null;
}swfobject=null;
});
}}();
return{registerObject:function(a,e,c,b){if(ah.w3&&a&&e){var d={};
d.id=a;
d.swfVersion=e;
d.expressInstall=c;
d.callbackFn=b;
aG[aG.length]=d;
ay(a,false);
}else{if(b){b({success:false,id:a});
}}},getObjectById:function(a){if(ah.w3){return av(a);
}},embedSWF:function(k,e,h,f,c,a,b,i,g,j){var d={success:false,id:e};
if(ah.w3&&!(ah.wk&&ah.wk<312)&&k&&e&&h&&f&&c){ay(e,false);
aj(function(){h+="";
f+="";
var q={};
if(g&&typeof g===aD){for(var o in g){q[o]=g[o];
}}q.data=k;
q.width=h;
q.height=f;
var n={};
if(i&&typeof i===aD){for(var p in i){n[p]=i[p];
}}if(b&&typeof b===aD){for(var l in b){if(typeof n.flashvars!=aq){n.flashvars+="&"+l+"="+b[l];
}else{n.flashvars=l+"="+b[l];
}}}if(ao(c)){var m=aA(q,n,e);
if(q.id==e){ay(e,true);
}d.success=true;
d.ref=m;
}else{if(a&&au()){q.data=a;
ae(q,n,e,j);
return;
}else{ay(e,true);
}}if(j){j(d);
}});
}else{if(j){j(d);
}}},switchOffAutoHideShow:function(){aI=false;
},ua:ah,getFlashPlayerVersion:function(){return{major:ah.pv[0],minor:ah.pv[1],release:ah.pv[2]};
},hasFlashPlayerVersion:ao,createSWF:function(a,b,c){if(ah.w3){return aA(a,b,c);
}else{return undefined;
}},showExpressInstall:function(b,a,d,c){if(ah.w3&&au()){ae(b,a,d,c);
}},removeSWF:function(a){if(ah.w3){aw(a);
}},createCSS:function(b,a,c,d){if(ah.w3){az(b,a,c,d);
}},addDomLoadEvent:aj,addLoadEvent:aC,getQueryParamValue:function(b){var a=aL.location.search||aL.location.hash;
if(a){if(/\?/.test(a)){a=a.split("?")[1];
}if(b==null){return ai(a);
}var c=a.split("&");
for(var d=0;
d<c.length;
d++){if(c[d].substring(0,c[d].indexOf("="))==b){return ai(c[d].substring((c[d].indexOf("=")+1)));
}}}return"";
},expressInstallCallback:function(){if(aU){var a=aS(ac);
if(a&&aJ){a.parentNode.replaceChild(aJ,a);
if(ad){ay(ad,true);
if(ah.ie&&ah.win){aJ.style.display="block";
}}if(ap){ap(at);
}}aU=false;
}}};
}();

function getFlashVars(a){if(typeof a!="object"){return false;
}var c="";
for(var b in a){if(a[b]!=Object.prototype[b]){if(c!=""){c+="&"+b+"="+a[b];
}else{c=b+"="+a[b];
}}}return c;
}function doAttachDiv(d,c){if(d==null||c==null){return;
}var a=document.createElement("div");
a.id=d;
var e=document.createElement("div");
if(e==null){return;
}e.id=c;
var b=$("#"+d).attr("class");
$("#"+d).replaceWith(a);
$("#"+d).html(e);
$("#"+d).addClass(b);
$("#"+d).addClass("swf");
}function initPageRedraw(){return;
if(typeof(swfobject)=="undefined"){return;
}}function doPageRedraw(c){return;
c=c&&(typeof c=="string")?c:"SwfObjectPageRefresher";
var a=document.getElementById(c);
if(a!=null){a.style.visibility="visible";
a.style.display="none";
a.style.display="block";
KIDS.utils.doLog("swf: !doPageRedraw: reset: "+c+" | "+a.style.visibility+" | "+a.style.display);
return;
}KIDS.utils.doLog("swf: !doPageRedraw: create");
var b=document.createElement("div");
b.id="SwfObjectPageRefresher";
document.getElementsByTagName("body")[0].appendChild(b);
}function doSwfObjectEmbed(a){if(!a){return;
}if(!a.validVersion&&!a.express){KIDS.utils.doLog("swf: doSwfObjectEmbed: incompatible client version: requires: "+a.version+" | "+a.id);
if(a.redirectUrl){window.location.href=a.redirectUrl;
}}else{if(a.delayEmbed){KIDS.utils.doLog("swf: doSwfObjectEmbed: embed halted enabled: geoLock or haltWrite: "+a.id);
}else{doAttachDiv(a.div,a.id);
swfobject.embedSWF(a.flashSrc,a.id,a.width,a.height,a.version,a.expressUrl,a.flashvars,a.params,a.attributes);
KIDS.utils.doLog("swf: doSwfObjectEmbed: embed swf: "+a.id);
doSwfEmbedComplete(a);
}}}doSwfEmbedComplete=function(a){if(typeof doSwfEmbedCompleteNick!=="undefined"){doSwfEmbedCompleteNick(a);
}};
function doSwfObjectEmbedDelayed(a){if(!a||!a.delayEmbed){KIDS.utils.doLog("swf: doSwfObjectEmbedDelayed: launchSwf: display alt content: id: "+a.id);
return;
}if(!a.validVersion&&a.express=="true"){KIDS.utils.doLog("swf: doSwfObjectEmbedDelayed: invalid version: id: "+a.id+" | express: "+a.express);
if(a.flashvars==null){a.flashvars={};
}a.flashvars.MMredirectURL=window.location;
a.flashvars.MMdoctitle=document.title;
a.attributes.data=a.expressUrl;
}else{a.attributes.data=a.validVersion?a.flashSrc:a.expressUrl;
KIDS.utils.doLog("swf: doSwfObjectEmbedDelayed: id: "+a.id+" | valid version?: "+a.attributes.data);
}a.attributes.height=a.height;
a.attributes.width=a.width;
a.params.flashvars=getFlashVars(a.flashvars);
if(a.validVersion||a.express){doAttachDiv(a.div,a.id);
swfobject.createSWF(a.attributes,a.params,a.id);
KIDS.utils.doLog("swf: doSwfObjectEmbedDelayed: create swf: "+a.id+" | "+a.attributes.data);
doSwfEmbedComplete(a);
}else{KIDS.utils.doLog("swf: doSwfObjectEmbedDelayed: alt content: "+a.id+" | "+a.attributes.data);
}}var swfObjHash={};
function doRegisterSwf(e,b,c,k,m,f,g,l,d,h,a,i,j){if(typeof(swfObjHash)=="undefined"){swfObjHash={};
}swfObjHash[e]={id:e,div:c,version:k,validVersion:swfobject.hasFlashPlayerVersion(k),flashvars:g,params:i,attributes:j,height:m,width:f,flashSrc:b,express:d,expressUrl:h,redirectUrl:a,delayEmbed:l=="true",launchSwf:function(){doSwfObjectEmbedDelayed(this);
}};
KIDS.utils.doLog("swf: doRegisterSwf: id: "+e+" | delayEmbed: "+swfObjHash[e].delayEmbed+" | "+swfObjHash[e].expressUrl);
doSwfObjectEmbed(swfObjHash[e]);
swfobject.createCSS("#"+c,"height:"+m+";width:"+f);
}function doLaunchSwf(a){if(a==null||swfObjHash==null||swfObjHash[a]==null){return;
}swfObjHash[a].launchSwf();
}