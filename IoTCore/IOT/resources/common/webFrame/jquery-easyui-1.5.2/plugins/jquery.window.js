/**
 * jQuery EasyUI 1.5.2
 * 
 * Copyright (c) 2009-2017 www.jeasyui.com. All rights reserved.
 *
 * Licensed under the freeware license: http://www.jeasyui.com/license_freeware.php
 * To use it on other terms please contact us: info@jeasyui.com
 *
 */
(function(b){function h(d,a){var e=b.data(d,"window");a&&(null!=a.left&&(e.options.left=a.left),null!=a.top&&(e.options.top=a.top));b(d).panel("move",e.options);e.shadow&&e.shadow.css({left:e.options.left,top:e.options.top})}function k(d,a){var e=b.data(d,"window").options,f=b(d).window("panel"),c=f._outerWidth();e.inline?(f=f.parent(),e.left=Math.ceil((f.width()-c)/2+f.scrollLeft())):e.left=Math.ceil((b(window)._outerWidth()-c)/2+b(document).scrollLeft());a&&h(d)}function l(d,a){var e=b.data(d,"window").options,f=b(d).window("panel"),c=f._outerHeight();e.inline?(f=f.parent(),e.top=Math.ceil((f.height()-c)/2+f.scrollTop())):e.top=Math.ceil((b(window)._outerHeight()-c)/2+b(document).scrollTop());a&&h(d)}function n(d){var a=b.data(d,"window"),e=a.options,f=b(d).panel(b.extend({},a.options,{border:!1,doSize:!0,closed:!0,cls:"window "+(e.border?"thin"==e.border?"window-thinborder ":"":"window-thinborder window-noborder ")+(e.cls||""),headerCls:"window-header "+(e.headerCls||""),bodyCls:"window-body "+(e.noheader?"window-body-noheader ":" ")+(e.bodyCls||""),onBeforeDestroy:function(){if(0==e.onBeforeDestroy.call(d))return!1;a.shadow&&a.shadow.remove();a.mask&&a.mask.remove()},onClose:function(){a.shadow&&a.shadow.hide();a.mask&&a.mask.hide();e.onClose.call(d)},onOpen:function(){a.mask&&a.mask.css(b.extend({display:"block",zIndex:b.fn.window.defaults.zIndex++},b.fn.window.getMaskSize(d)));a.shadow&&a.shadow.css({display:"block",zIndex:b.fn.window.defaults.zIndex++,left:e.left,top:e.top,width:a.window._outerWidth(),height:a.window._outerHeight()});a.window.css("z-index",b.fn.window.defaults.zIndex++);e.onOpen.call(d)},onResize:function(c,f){var g=b(this).panel("options");b.extend(e,{width:g.width,height:g.height,left:g.left,top:g.top});a.shadow&&a.shadow.css({left:e.left,top:e.top,width:a.window._outerWidth(),height:a.window._outerHeight()});e.onResize.call(d,c,f)},onMinimize:function(){a.shadow&&a.shadow.hide();a.mask&&a.mask.hide();a.options.onMinimize.call(d)},onBeforeCollapse:function(){if(0==e.onBeforeCollapse.call(d))return!1;a.shadow&&a.shadow.hide()},onExpand:function(){a.shadow&&a.shadow.show();e.onExpand.call(d)}}));a.window=f.panel("panel");a.mask&&a.mask.remove();e.modal&&(a.mask=b('\x3cdiv class\x3d"window-mask" style\x3d"display:none"\x3e\x3c/div\x3e').insertAfter(a.window));a.shadow&&a.shadow.remove();e.shadow&&(a.shadow=b('\x3cdiv class\x3d"window-shadow" style\x3d"display:none"\x3e\x3c/div\x3e').insertAfter(a.window));var c=e.closed;null==e.left&&k(d);null==e.top&&l(d);h(d);c||f.window("open")}function m(d,a,e,f){var c=b.data(this,"window").options;if(!c.constrain)return{};if(b.isFunction(c.constrain))return c.constrain.call(this,d,a,e,f);var g=b(this).window("window"),c=c.inline?g.parent():b(window);0>d&&(d=0);a<c.scrollTop()&&(a=c.scrollTop());d+e>c.width()&&(e==g.outerWidth()?d=c.width()-e:e=c.width()-d);a-c.scrollTop()+f>c.height()&&(f==g.outerHeight()?a=c.height()-f+c.scrollTop():f=c.height()-a+c.scrollTop());return{left:d,top:a,width:e,height:f}}function p(d){function a(a){c.pmask&&c.pmask.remove();c.pmask=b('\x3cdiv class\x3d"window-proxy-mask"\x3e\x3c/div\x3e').insertAfter(c.window);c.pmask.css({display:"none",zIndex:b.fn.window.defaults.zIndex++,left:a.data.left,top:a.data.top,width:c.window._outerWidth(),height:c.window._outerHeight()});c.proxy&&c.proxy.remove();c.proxy=b('\x3cdiv class\x3d"window-proxy"\x3e\x3c/div\x3e').insertAfter(c.window);c.proxy.css({display:"none",zIndex:b.fn.window.defaults.zIndex++,left:a.data.left,top:a.data.top});c.proxy._outerWidth(a.data.width)._outerHeight(a.data.height);c.proxy.hide();setTimeout(function(){c.pmask&&c.pmask.show();c.proxy&&c.proxy.show()},500)}function e(a){b.extend(a.data,m.call(d,a.data.left,a.data.top,a.data.width,a.data.height));c.pmask.show();c.proxy.css({display:"block",left:a.data.left,top:a.data.top});c.proxy._outerWidth(a.data.width);c.proxy._outerHeight(a.data.height)}function f(a,e){b.extend(a.data,m.call(d,a.data.left,a.data.top,a.data.width+.1,a.data.height+.1));b(d).window(e,a.data);c.pmask.remove();c.pmask=null;c.proxy.remove();c.proxy=null}var c=b.data(d,"window");c.window.draggable({handle:"\x3ediv.panel-header\x3ediv.panel-title",disabled:0==c.options.draggable,onBeforeDrag:function(a){c.mask&&c.mask.css("z-index",b.fn.window.defaults.zIndex++);c.shadow&&c.shadow.css("z-index",b.fn.window.defaults.zIndex++);c.window.css("z-index",b.fn.window.defaults.zIndex++)},onStartDrag:function(b){a(b)},onDrag:function(a){e(a);return!1},onStopDrag:function(a){f(a,"move")}});c.window.resizable({disabled:0==c.options.resizable,onStartResize:function(b){a(b)},onResize:function(a){e(a);return!1},onStopResize:function(a){f(a,"resize")}})}b(function(){b._positionFixed||b(window).resize(function(){b("body\x3ediv.window-mask:visible").css({width:"",height:""});setTimeout(function(){b("body\x3ediv.window-mask:visible").css(b.fn.window.getMaskSize())},50)})});b.fn.window=function(d,a){if("string"==typeof d){var e=b.fn.window.methods[d];return e?e(this,a):this.panel(d,a)}d=d||{};return this.each(function(){var a=b.data(this,"window");a?b.extend(a.options,d):(a=b.data(this,"window",{options:b.extend({},b.fn.window.defaults,b.fn.window.parseOptions(this),d)}),a.options.inline||document.body.appendChild(this));n(this);p(this)})};b.fn.window.methods={options:function(d){var a=d.panel("options");d=b.data(d[0],"window").options;return b.extend(d,{closed:a.closed,collapsed:a.collapsed,minimized:a.minimized,maximized:a.maximized})},window:function(d){return b.data(d[0],"window").window},move:function(b,a){return b.each(function(){h(this,a)})},hcenter:function(b){return b.each(function(){k(this,!0)})},vcenter:function(b){return b.each(function(){l(this,!0)})},center:function(b){return b.each(function(){k(this);l(this);h(this)})}};b.fn.window.getMaskSize=function(d){return(d=b(d).data("window"))&&d.options.inline?{}:b._positionFixed?{position:"fixed"}:{width:b(document).width(),height:b(document).height()}};b.fn.window.parseOptions=function(d){return b.extend({},b.fn.panel.parseOptions(d),b.parser.parseOptions(d,[{draggable:"boolean",resizable:"boolean",shadow:"boolean",modal:"boolean",inline:"boolean"}]))};b.fn.window.defaults=b.extend({},b.fn.panel.defaults,{zIndex:9E3,draggable:!0,resizable:!0,shadow:!0,modal:!1,border:!0,inline:!1,title:"New Window",collapsible:!0,minimizable:!0,maximizable:!0,closable:!0,closed:!1,constrain:!1})})(jQuery);