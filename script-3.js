/* InstantClick 2.0 | (C) 2014 Alexandre Dieulot | http://instantclick.io/license.html */
var InstantClick=function(g,h){function m(a){var b=a.indexOf("#");return-1==b?a:a.substr(0,b)}function n(a){for(;"A"!=a.nodeName;)a=a.parentNode;return a}function v(a){for(var b=0;b<p[a].length;b++)p[a][b]()}function w(a){var b=g.implementation.createHTMLDocument("");b.documentElement.innerHTML=a;g.documentElement.replaceChild(b.body,g.body)}function z(a){l(n(a.target).href)}function A(a){a=n(a.target);a.addEventListener("mouseout",B);q?(x=a.href,d=setTimeout(l,q)):l(a.href)}function C(a){1<a.which||
a.metaKey||a.ctrlKey||(a.preventDefault(),y(n(a.target).href))}function B(){d?(clearTimeout(d),d=!1):!a.isPreloading||a.isPreloading&&a.isWaitingForCompletion||(a.xhr.abort(),a.isPreloading=!1,a.isWaitingForCompletion=!1)}function D(c){if(!(4>a.xhr.readyState)&&0!=a.xhr.status){a.timing.ready=+new Date-a.timing.start;c=a.xhr.responseText;var b=c.indexOf("<title");-1<b&&(a.title=c.substr(c.indexOf(">",b)+1),a.title=a.title.substr(0,a.title.indexOf("</title")));b=c.indexOf("<body");-1<b?(a.body=c.substr(b),
c=a.body.indexOf("</body"),-1<c&&(a.body=a.body.substr(0,c)),c=m(a.url),e[c]={body:a.body,title:a.title,scrollY:c in e?e[c].scrollY:0}):a.hasBody=!1;a.isWaitingForCompletion&&(a.isWaitingForCompletion=!1,y(a.url))}}function r(a){for(var b=g.getElementsByTagName("a"),f,e=h.protocol+"//"+h.host,d=b.length-1;0<=d;d--)f=b[d],f.target||f.hasAttribute("download")||0!=f.href.indexOf(e+"/")||-1<f.href.indexOf("#")&&m(f.href)==k||(s?f.hasAttribute("data-no-instant"):!f.hasAttribute("data-instant"))||(t?f.addEventListener("mousedown",
z):f.addEventListener("mouseover",A),f.addEventListener("click",C));if(!a){a=g.getElementsByTagName("script");var l,d=0;for(j=a.length;d<j;d++)b=a[d],b.hasAttribute("data-no-instant")||(f=g.createElement("script"),b.src&&(f.src=b.src),b.innerHTML&&(f.innerHTML=b.innerHTML),e=b.parentNode,l=b.nextSibling,e.removeChild(b),e.insertBefore(f,l))}v("change")}function l(c){!t&&"display"in a.timing&&100>+new Date-(a.timing.start+a.timing.display)||(d&&(clearTimeout(d),d=!1),c||(c=x),a.isPreloading&&c==a.url||
a.isPreloading&&a.isWaitingForCompletion||(a.isPreloading=!0,a.isWaitingForCompletion=!1,a.url=c,a.body=!1,a.hasBody=!0,a.timing={},a.timing.start=+new Date,a.xhr.open("GET",c),a.xhr.send()))}function y(c){"display"in a.timing||(a.timing.display=+new Date-a.timing.start);if(d)a.url&&a.url!=c?h.href=c:(l(c),a.isWaitingForCompletion=!0);else if(!a.isPreloading||a.isPreloading&&a.isWaitingForCompletion)h.href=c;else if(a.hasBody)if(a.body){e[k].scrollY=pageYOffset;a.isPreloading=!1;a.isWaitingForCompletion=
!1;w(a.body);g.title=a.title;c=a.url.indexOf("#");c=-1<c&&g.getElementById(a.url.substr(c+1));var b=0;if(a.url!=h.href&&c)for(;c.offsetParent;c=c.offsetParent)b+=c.offsetTop;scrollTo(0,b);history.pushState(null,null,a.url);k=m(h.href);r()}else a.isWaitingForCompletion=!0;else h.href=a.url}var k,x,d,e={},a={},s,t,q,p={change:[]},u="pushState"in history;return{supported:u,init:function(){if(!u)v("change");else if(!k){for(var c=0;c<arguments.length;c++){var b=arguments[c];!0===b?s=!0:"mousedown"==b?
t=!0:"number"==typeof b&&(q=b)}k=m(h.href);e[k]={body:g.body.outerHTML,title:g.title,scrollY:pageYOffset};a.xhr=new XMLHttpRequest;a.xhr.addEventListener("readystatechange",D);a.url=!1;a.body=!1;a.hasBody=!0;a.title=!1;a.isPreloading=!1;a.isWaitingForCompletion=!1;a.timing={};r(!0);addEventListener("popstate",function(){var a=m(h.href);a!=k&&(a in e?(e[k].scrollY=pageYOffset,k=a,w(e[a].body),scrollTo(0,e[a].scrollY),g.title=e[a].title,r()):h.href=h.href)})}},on:function(a,b){p[a].push(b)},debug:function(){return{currentLocationWithoutHash:k,
p:a,pHistory:e,supported:u,useBlacklist:s}}}}(document,location);

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-46962315-1', 'instantclick.io');

InstantClick.on('change', function() {
	ga('send', 'pageview', location.pathname + location.search);
	var emails = document.querySelectorAll('a[data-no-instant=email]')
	for (var i = 0; i < emails.length; i++) {
		emails[i].href = 'mailto:' + ['adieulot', 'gmail.com'].join('@')
	}
})

InstantClick.init(true)