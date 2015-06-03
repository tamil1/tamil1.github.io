(function(){var c=window.addEventListener||function(g,e){window.attachEvent("on"+g,e)},b=window.removeEventListener||function(h,g,e){window.detachEvent("on"+h,g)};var d={cache:[],mobileScreenSize:500,addObservers:function(){c("scroll",d.throttledLoad);c("resize",d.throttledLoad)},removeObservers:function(){b("scroll",d.throttledLoad,false);b("resize",d.throttledLoad,false)},throttleTimer:new Date().getTime(),throttledLoad:function(){var e=new Date().getTime();if((e-d.throttleTimer)>=200){d.throttleTimer=e;d.loadVisibleImages()}},loadVisibleImages:function(){var m=window.pageYOffset||document.documentElement.scrollTop;var j=window.innerHeight||document.documentElement.clientHeight;var g={min:m-200,max:m+j+200};var h=0;while(h<d.cache.length){var l=d.cache[h];var k=a(l);var e=l.height||0;if((k>=g.min-e)&&(k<=g.max)){var f=l.getAttribute("data-src-mobile");l.onload=function(){this.className=this.className.replace(/(^|\s+)story-image-imgpreload(\s+|$)/,"$1story-image-img$2")};if(f&&screen.width<=d.mobileScreenSize){l.src=f}else{l.src=l.getAttribute("data-src")}l.removeAttribute("data-src");d.cache.splice(h,1);continue}h++}if(d.cache.length===0){d.removeObservers()}},init:function(){if(!document.querySelectorAll){document.querySelectorAll=function(g){var i=document,h=i.documentElement.firstChild,f=i.createElement("STYLE");h.appendChild(f);i.__qsaels=[];f.styleSheet.cssText=g+"{x:expression(document.__qsaels.push(this))}";window.scrollBy(0,0);return i.__qsaels}}c("load",function e(){var h=document.querySelectorAll("img[data-src]");for(var f=0;f<h.length;f++){var g=h[f];d.cache.push(g)}d.addObservers();d.loadVisibleImages();b("load",e,false)})}};function a(e){var f=0;if(e.offsetParent){do{f+=e.offsetTop}while(e=e.offsetParent);return f}}d.init()})();

if (top != self) { top.location.replace(self.location.href); }


var newwindow;
function poptastic(url)
{
	newwindow=window.open(url,'name','height=400,width=200');
	if (window.focus) {newwindow.focus()}
}