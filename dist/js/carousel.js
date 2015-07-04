/*! formstone v0.6.12 [carousel.js] 2015-07-04 | MIT License | formstone.it */

!function(a,b){"use strict";function c(){F.iterate.call(G,i)}function d(){G=a(C.base)}function e(c){var e;c.maxWidth=c.maxWidth===1/0?"100000px":c.maxWidth,c.mq="(min-width:"+c.minWidth+") and (max-width:"+c.maxWidth+")",b.support.transform||(c.useMargin=!0);var f="",i="";if(c.controls&&(f+='<div class="'+D.controls+'">',f+='<button type="button" class="'+[D.control,D.control_previous].join(" ")+'">'+c.labels.previous+"</button>",f+='<button type="button" class="'+[D.control,D.control_next].join(" ")+'">'+c.labels.next+"</button>",f+="</div>"),c.pagination&&(i+='<div class="'+D.pagination+'">',i+="</div>"),this.addClass([D.base,c.customClass,c.rtl?D.rtl:D.ltr].join(" ")).wrapInner('<div class="'+D.wrapper+'"><div class="'+D.container+'"><div class="'+D.canister+'"></div></div></div>').append(f).wrapInner('<div class="'+D.viewport+'"></div>').append(i),c.$viewport=this.find(C.viewport).eq(0),c.$container=this.find(C.container).eq(0),c.$canister=this.find(C.canister).eq(0),c.$controls=this.find(C.controls).eq(0),c.$pagination=this.find(C.pagination).eq(0),c.$items=c.$canister.children().addClass(D.item),c.$controlItems=c.$controls.find(C.control),c.$paginationItems=c.$pagination.find(C.page),c.$images=c.$canister.find("img"),c.index=0,c.enabled=!1,c.leftPosition=0,c.totalImages=c.$images.length,c.autoTimer=null,c.resizeTimer=null,"object"===a.type(c.show)){var j=c.show,k=[];for(e in j)j.hasOwnProperty(e)&&k.push(e);k.sort(F.sortAsc),c.show={};for(e in k)k.hasOwnProperty(e)&&(c.show[k[e]]={width:parseInt(k[e]),count:j[k[e]]})}a.fsMediaquery("bind",c.rawGuid,c.mq,{enter:function(){h.call(c.$el,c)},leave:function(){g.call(c.$el,c)}}),c.$images.on(E.load,c,n),c.autoAdvance&&(c.autoTimer=F.startTimer(c.autoTimer,c.autoTime,function(){o(c)},!0)),d()}function f(b){F.clearTimer(b.autoTimer),F.startTimer(b.resizeTimer),g.call(this,b),a.fsMediaquery("unbind",b.rawGuid),b.$images.off(E.namespace),b.$canister.fsTouch("destroy"),b.$items.removeClass([D.item,D.visible].join(" ")).unwrap().unwrap().unwrap().unwrap(),b.pagination&&b.$pagination.remove(),b.controls&&b.$controls.remove(),this.removeClass([D.base,D.ltr,D.rtl,D.enabled,D.animated,b.customClass].join(" ")),d()}function g(a){a.enabled&&(F.clearTimer(a.autoTimer),a.enabled=!1,this.removeClass([D.enabled,D.animated].join(" ")).off(E.namespace),a.$canister.fsTouch("destroy").off(E.namespace).attr("style","").css(I,"none"),a.$items.css({width:"",height:""}),a.$controls.removeClass(D.visible),a.$pagination.removeClass(D.visible).html(""),a.useMargin?a.$canister.css({marginLeft:""}):a.$canister.css(H,""),a.index=0)}function h(a){a.enabled||(a.enabled=!0,this.addClass(D.enabled).on(E.clickTouchStart,C.control,a,p).on(E.clickTouchStart,C.page,a,q),a.$canister.fsTouch({axis:"x",pan:!0,swipe:!0}).on(E.panStart,a,u).on(E.pan,a,v).on(E.panEnd,a,w).on(E.swipe,a,x).css(I,""),i.call(this,a))}function i(a){if(a.enabled){var b,c,d,e,f,g;if(a.count=a.$items.length,a.count<1)return;for(this.removeClass(D.animated),a.containerWidth=a.$container.outerWidth(!1),a.visible=t(a),a.perPage=a.paged?1:a.visible,a.itemMargin=parseInt(a.$items.eq(0).css("marginRight"))+parseInt(a.$items.eq(0).css("marginLeft")),a.itemWidth=(a.containerWidth-a.itemMargin*(a.visible-1))/a.visible,a.itemHeight=0,a.pageWidth=a.paged?a.itemWidth:a.containerWidth,a.pageCount=Math.ceil(a.count/a.perPage),a.canisterWidth=(a.pageWidth+a.itemMargin)*a.pageCount,a.$canister.css({width:a.canisterWidth}),a.$items.css({width:a.itemWidth,height:""}).removeClass(D.visible),a.pages=[],b=0,c=0;b<a.count;b+=a.perPage)d=a.$items.slice(b,b+a.perPage),d.length<a.perPage&&(d=0===b?a.$items:a.$items.slice(a.$items.length-a.perPage)),e=d.eq(a.rtl?d.length-1:0),f=e.outerHeight(),g=e.position().left,a.pages.push({left:a.rtl?g-(a.canisterWidth-a.pageWidth-a.itemMargin):g,height:f,$items:d}),f>a.itemHeight&&(a.itemHeight=f),c++;a.paged&&(a.pageCount-=a.count%a.visible),a.maxMove=-a.pages[a.pageCount-1].left,a.autoHeight&&a.$items.css({height:a.itemHeight});var h="";for(b=0;b<a.pageCount;b++)h+='<button type="button" class="'+D.page+'">'+(b+1)+"</button>";a.$pagination.html(h),a.pageCount<=1?(a.$controls.removeClass(D.visible),a.$pagination.removeClass(D.visible)):(a.$controls.addClass(D.visible),a.$pagination.addClass(D.visible)),a.$paginationItems=a.$el.find(C.page),r(a,a.index,!1),setTimeout(function(){a.$el.addClass(D.animated)},5)}}function j(a){a.enabled&&(a.$items=a.$canister.children().addClass(D.item),i.call(this,a))}function k(a,b){a.enabled&&(F.clearTimer(a.autoTimer),r(a,b-1))}function l(a){var b=a.index-1;a.infinite&&0>b&&(b=a.pageCount-1),r(a,b)}function m(a){var b=a.index+1;a.infinite&&b>=a.pageCount&&(b=0),r(a,b)}function n(a){var b=a.data;b.resizeTimer=F.startTimer(b.resizeTimer,20,function(){i.call(b.$el,b)})}function o(a){var b=a.index+1;b>=a.pageCount&&(b=0),r(a,b)}function p(b){F.killEvent(b);var c=b.data,d=c.index+(a(b.currentTarget).hasClass(D.control_next)?1:-1);F.clearTimer(c.autoTimer),r(c,d)}function q(b){F.killEvent(b);var c=b.data,d=c.$paginationItems.index(a(b.currentTarget));F.clearTimer(c.autoTimer),r(c,d)}function r(a,b,c){0>b&&(b=a.infinite?a.pageCount-1:0),b>=a.pageCount&&(b=a.infinite?0:a.pageCount-1),a.pages[b]&&(a.leftPosition=-a.pages[b].left),a.leftPosition=z(a,a.leftPosition),a.useMargin?a.$canister.css({marginLeft:a.leftPosition}):c===!1?(a.$canister.css(I,"none").css(H,"translateX("+a.leftPosition+"px)"),setTimeout(function(){a.$canister.css(I,"")},5)):a.$canister.css(H,"translateX("+a.leftPosition+"px)"),a.$items.removeClass(D.visible),a.pages[b].$items.addClass(D.visible),c!==!1&&b!==a.index&&(a.infinite||b>-1&&b<a.pageCount)&&a.$el.trigger(E.update,[b]),a.index=b,s(a)}function s(a){a.$paginationItems.removeClass(D.active).eq(a.index).addClass(D.active),a.infinite?a.$controlItems.addClass(D.visible):a.pageCount<1?a.$controlItems.removeClass(D.visible):(a.$controlItems.addClass(D.visible),a.index<=0?a.$controlItems.filter(C.control_previous).removeClass(D.visible):(a.index>=a.pageCount||a.leftPosition===a.maxMove)&&a.$controlItems.filter(C.control_next).removeClass(D.visible))}function t(c){if("object"===a.type(c.show)){for(var d in c.show)if(c.show.hasOwnProperty(d)&&b.windowWidth>=c.show[d].width)return c.fill&&c.count<c.show[d].count?c.count:c.show[d].count;return 1}return c.fill&&c.count<c.show?c.count:c.show}function u(a){var b=a.data;if(b.useMargin)b.leftPosition=parseInt(b.$canister.css("marginLeft"));else{var c=b.$canister.css(H).split(",");b.leftPosition=parseInt(c[4])}b.$canister.css(I,"none"),v(a),b.isTouching=!0}function v(a){var b=a.data;b.touchLeft=z(b,b.leftPosition+a.deltaX),b.useMargin?b.$canister.css({marginLeft:b.touchLeft}):b.$canister.css(H,"translateX("+b.touchLeft+"px)")}function w(a){var b=a.data,c=A(b,a),d=a.deltaX>-50&&a.deltaX<50?b.index:b.index+c;y(b,d)}function x(a){var b=a.data,c=A(b,a),d=b.index+c;y(b,d)}function y(a,b){a.$canister.css(I,""),r(a,b),a.isTouching=!1}function z(a,b){return isNaN(b)?b=0:a.rtl?(b>a.maxMove&&(b=a.maxMove),0>b&&(b=0)):(b<a.maxMove&&(b=a.maxMove),b>0&&(b=0)),b}function A(a,b){return a.rtl?"right"===b.directionX?1:-1:"left"===b.directionX?1:-1}var B=b.Plugin("carousel",{widget:!0,defaults:{autoAdvance:!1,autoHeight:!1,autoTime:8e3,controls:!0,customClass:"",fill:!1,infinite:!1,labels:{next:"Next",previous:"Previous"},maxWidth:1/0,minWidth:"0px",paged:!1,pagination:!0,show:1,rtl:!1,useMargin:!1},classes:["ltr","rtl","viewport","wrapper","container","canister","item","controls","control","pagination","page","animated","enabled","visible","active","control_previous","control_next"],events:{update:"update",panStart:"panstart",pan:"pan",panEnd:"panend",swipe:"swipe"},methods:{_construct:e,_destruct:f,_resize:c,disable:g,enable:h,jump:k,previous:l,next:m,reset:j,resize:i}}),C=B.classes,D=C.raw,E=B.events,F=B.functions,G=[],H=b.transform,I=b.transition}(jQuery,Formstone);