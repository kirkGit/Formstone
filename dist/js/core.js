/*! formstone v0.7.8 [core.js] 2015-07-23 | MIT License | formstone.it */

var Formstone=this.Formstone=function(a,b,c){"use strict";function d(a){l.Plugins[a].initialized||(l.Plugins[a].methods._setup.call(c),l.Plugins[a].initialized=!0)}function e(a,b,c,d){var e,f={raw:{}};d=d||{};for(e in d)d.hasOwnProperty(e)&&("classes"===a?(f.raw[d[e]]=b+"-"+d[e],f[d[e]]="."+b+"-"+d[e]):(f.raw[e]=d[e],f[e]=d[e]+"."+b));for(e in c)c.hasOwnProperty(e)&&("classes"===a?(f.raw[e]=c[e].replace(/{ns}/g,b),f[e]=c[e].replace(/{ns}/g,"."+b)):(f.raw[e]=c[e].replace(/.{ns}/g,""),f[e]=c[e].replace(/{ns}/g,b)));return f}function f(){var a,b={transition:"transitionend",MozTransition:"transitionend",OTransition:"otransitionend",WebkitTransition:"webkitTransitionEnd"},d=["transition","-webkit-transition"],e={transform:"transform",MozTransform:"-moz-transform",OTransform:"-o-transform",msTransform:"-ms-transform",webkitTransform:"-webkit-transform"},f="transitionend",g="",h="",i=c.createElement("div");for(a in b)if(b.hasOwnProperty(a)&&a in i.style){f=b[a],l.support.transition=!0;break}o.transitionEnd=f+".{ns}";for(a in d)if(d.hasOwnProperty(a)&&d[a]in i.style){g=d[a];break}l.transition=g;for(a in e)if(e.hasOwnProperty(a)&&e[a]in i.style){l.support.transform=!0,h=e[a];break}l.transform=h}function g(){l.windowWidth=l.$window.width(),l.windowHeight=l.$window.height(),p=k.startTimer(p,q,h)}function h(){for(var a in l.ResizeHandlers)l.ResizeHandlers.hasOwnProperty(a)&&l.ResizeHandlers[a].callback.call(b,l.windowWidth,l.windowHeight)}function i(a,b){return parseInt(a.priority)-parseInt(b.priority)}var j=function(){this.Version="0.7.8",this.Plugins={},this.DontConflict=!1,this.Conflicts={fn:{}},this.ResizeHandlers=[],this.window=b,this.$window=a(b),this.document=c,this.$document=a(c),this.$body=null,this.windowWidth=0,this.windowHeight=0,this.userAgent=b.navigator.userAgent||b.navigator.vendor||b.opera,this.isFirefox=/Firefox/i.test(this.userAgent),this.isChrome=/Chrome/i.test(this.userAgent),this.isSafari=/Safari/i.test(this.userAgent)&&!this.isChrome,this.isMobile=/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(this.userAgent),this.isFirefoxMobile=this.isFirefox&&this.isMobile,this.transform=null,this.transition=null,this.support={file:!!(b.File&&b.FileList&&b.FileReader),history:!!(b.history&&b.history.pushState&&b.history.replaceState),matchMedia:!(!b.matchMedia&&!b.msMatchMedia),raf:!(!b.requestAnimationFrame||!b.cancelAnimationFrame),touch:!!("ontouchstart"in b||b.DocumentTouch&&c instanceof b.DocumentTouch),transition:!1,transform:!1}},k={killEvent:function(a,b){try{a.preventDefault(),a.stopPropagation(),b&&a.stopImmediatePropagation()}catch(c){}},startTimer:function(a,b,c,d){return k.clearTimer(a),d?setInterval(c,b):setTimeout(c,b)},clearTimer:function(a,b){a&&(b?clearInterval(a):clearTimeout(a),a=null)},sortAsc:function(a,b){return parseInt(b)-parseInt(a)},sortDesc:function(a,b){return parseInt(b)-parseInt(a)}},l=new j,m=a.Deferred(),n={base:"{ns}",element:"{ns}-element"},o={namespace:".{ns}",blur:"blur.{ns}",change:"change.{ns}",click:"click.{ns}",dblClick:"dblclick.{ns}",drag:"drag.{ns}",dragEnd:"dragend.{ns}",dragEnter:"dragenter.{ns}",dragLeave:"dragleave.{ns}",dragOver:"dragover.{ns}",dragStart:"dragstart.{ns}",drop:"drop.{ns}",error:"error.{ns}",focus:"focus.{ns}",focusIn:"focusin.{ns}",focusOut:"focusout.{ns}",input:"input.{ns}",keyDown:"keydown.{ns}",keyPress:"keypress.{ns}",keyUp:"keyup.{ns}",load:"load.{ns}",mouseDown:"mousedown.{ns}",mouseEnter:"mouseenter.{ns}",mouseLeave:"mouseleave.{ns}",mouseMove:"mousemove.{ns}",mouseOut:"mouseout.{ns}",mouseOver:"mouseover.{ns}",mouseUp:"mouseup.{ns}",resize:"resize.{ns}",scroll:"scroll.{ns}",select:"select.{ns}",touchCancel:"touchcancel.{ns}",touchEnd:"touchend.{ns}",touchLeave:"touchleave.{ns}",touchMove:"touchmove.{ns}",touchStart:"touchstart.{ns}"};j.prototype.NoConflict=function(){l.DontConflict=!0;for(var b in l.Plugins)l.Plugins.hasOwnProperty(b)&&(a[b]=l.Conflicts[b],a.fn[b]=l.Conflicts.fn[b])},j.prototype.Plugin=function(c,f){return l.Plugins[c]=function(c,d){function f(b){var e="object"===a.type(b);b=a.extend(!0,{},d.defaults||{},e?b:{});for(var f=this,g=0,i=f.length;i>g;g++){var j=f.eq(g);if(!h(j)){var k="__"+d.guid++,l=d.classes.raw.base+k,m=j.data(c+"-options"),n=a.extend(!0,{$el:j,guid:k,rawGuid:l,dotGuid:"."+l},b,"object"===a.type(m)?m:{});j.addClass(d.classes.raw.element).data(s,n),d.methods._construct.apply(j,[n].concat(Array.prototype.slice.call(arguments,e?1:0)))}}return f}function g(){d.functions.iterate.apply(this,[d.methods._destruct].concat(Array.prototype.slice.call(arguments,1))),this.removeClass(d.classes.raw.element).removeData(s)}function h(a){return a.data(s)}function j(b){if(this instanceof a){var c=d.methods[b];return"object"!==a.type(b)&&b?c&&0!==b.indexOf("_")?d.functions.iterate.apply(this,[c].concat(Array.prototype.slice.call(arguments,1))):this:f.apply(this,arguments)}}function m(c){var e=d.utilities[c]||d.utilities._initialize||!1;return e?e.apply(b,Array.prototype.slice.call(arguments,"object"===a.type(c)?0:1)):void 0}function p(b){d.defaults=a.extend(!0,d.defaults,b||{})}function q(b){for(var c=this,d=0,e=c.length;e>d;d++){var f=c.eq(d),g=h(f)||{};"undefined"!==a.type(g.$el)&&b.apply(f,[g].concat(Array.prototype.slice.call(arguments,1)))}return c}var r="fs-"+c,s="fs"+c.replace(/(^|\s)([a-z])/g,function(a,b,c){return b+c.toUpperCase()});return d.initialized=!1,d.priority=d.priority||10,d.classes=e("classes",r,n,d.classes),d.events=e("events",c,o,d.events),d.functions=a.extend({getData:h,iterate:q},k,d.functions),d.methods=a.extend(!0,{_setup:a.noop,_construct:a.noop,_destruct:a.noop,_resize:!1,destroy:g},d.methods),d.utilities=a.extend(!0,{_initialize:!1,_delegate:!1,defaults:p},d.utilities),d.widget&&(l.Conflicts.fn[c]=a.fn[c],a.fn[s]=j,l.DontConflict||(a.fn[c]=a.fn[s])),l.Conflicts[c]=a[c],a[s]=d.utilities._delegate||m,l.DontConflict||(a[c]=a[s]),d.namespace=c,d.namespaceClean=s,d.guid=0,d.methods._resize&&(l.ResizeHandlers.push({namespace:c,priority:d.priority,callback:d.methods._resize}),l.ResizeHandlers.sort(i)),d}(c,f),m.then(function(){d(c)}),l.Plugins[c]};var p=null,q=20;return l.$window.on("resize.fs",g),g(),a(function(){l.$body=a("body"),m.resolve()}),o.clickTouchStart=o.click+" "+o.touchStart,f(),l}(jQuery,this,document);