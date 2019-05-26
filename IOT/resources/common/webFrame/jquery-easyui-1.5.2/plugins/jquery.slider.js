/**
 * jQuery EasyUI 1.5.2
 * 
 * Copyright (c) 2009-2017 www.jeasyui.com. All rights reserved.
 *
 * Licensed under the freeware license: http://www.jeasyui.com/license_freeware.php
 * To use it on other terms please contact us: info@jeasyui.com
 *
 */
(function(e){function r(a){var c=e('\x3cdiv class\x3d"slider"\x3e\x3cdiv class\x3d"slider-inner"\x3e\x3ca href\x3d"javascript:;" class\x3d"slider-handle"\x3e\x3c/a\x3e\x3cspan class\x3d"slider-tip"\x3e\x3c/span\x3e\x3c/div\x3e\x3cdiv class\x3d"slider-rule"\x3e\x3c/div\x3e\x3cdiv class\x3d"slider-rulelabel"\x3e\x3c/div\x3e\x3cdiv style\x3d"clear:both"\x3e\x3c/div\x3e\x3cinput type\x3d"hidden" class\x3d"slider-value"\x3e\x3c/div\x3e').insertAfter(a),b=e(a);b.addClass("slider-f").hide();var d=b.attr("name");d&&(c.find("input.slider-value").attr("name",d),b.removeAttr("name").attr("sliderName",d));c.bind("_resize",function(b,c){(e(this).hasClass("easyui-fluid")||c)&&p(a);return!1});return c}function p(a,c){var b=e.data(a,"slider"),d=b.options,b=b.slider;c&&(c.width&&(d.width=c.width),c.height&&(d.height=c.height));b._size(d);"h"==d.mode?(b.css("height",""),b.children("div").css("height","")):(b.css("width",""),b.children("div").css("width",""),b.children("div.slider-rule,div.slider-rulelabel,div.slider-inner")._outerHeight(b._outerHeight()));t(a)}function u(a){var c=e.data(a,"slider");a=c.options;var b=c.slider,c="h"==a.mode?a.rule:a.rule.slice(0).reverse();a.reversed&&(c=c.slice(0).reverse());var d=b.find("div.slider-rule"),b=b.find("div.slider-rulelabel");d.empty();b.empty();for(var g=0;g<c.length;g++){var l=100*g/(c.length-1)+"%",m=e("\x3cspan\x3e\x3c/span\x3e").appendTo(d);m.css("h"==a.mode?"left":"top",l);"|"!=c[g]&&(m=e("\x3cspan\x3e\x3c/span\x3e").appendTo(b),m.html(c[g]),"h"==a.mode?m.css({left:l,marginLeft:-Math.round(m.outerWidth()/2)}):m.css({top:l,marginTop:-Math.round(m.outerHeight()/2)}))}}function q(a){function c(b,c){var f;f=b;var k=e.data(a,"slider"),h=k.options,k=k.slider,k="h"==h.mode?k.width():k.height();f="h"==h.mode?h.reversed?k-f:f:h.reversed?f:k-f;f=h.converter.toValue.call(a,f,k).toFixed(0);h=Math.abs(f%d.step);f=h<d.step/2?f-h:f-h+d.step;if(d.range){var h=d.value[0],k=d.value[1],g=parseFloat((h+k)/2);c?(g=0<e(c).nextAll(".slider-handle").length,f<=k&&g?h=f:f>=h&&!g&&(k=f)):f<h?h=f:f>k?k=f:f<g?h=f:k=f;e(a).slider("setValues",[h,k])}else e(a).slider("setValue",f)}var b=e.data(a,"slider"),d=b.options,g=b.slider;g.removeClass("slider-h slider-v slider-disabled");g.addClass("h"==d.mode?"slider-h":"slider-v");g.addClass(d.disabled?"slider-disabled":"");var l=g.find(".slider-inner");l.html('\x3ca href\x3d"javascript:;" class\x3d"slider-handle"\x3e\x3c/a\x3e\x3cspan class\x3d"slider-tip"\x3e\x3c/span\x3e');d.range&&l.append('\x3ca href\x3d"javascript:;" class\x3d"slider-handle"\x3e\x3c/a\x3e\x3cspan class\x3d"slider-tip"\x3e\x3c/span\x3e');g.find("a.slider-handle").draggable({axis:d.mode,cursor:"pointer",disabled:d.disabled,onDrag:function(a){var b=a.data.left,e=g.width();"h"!=d.mode&&(b=a.data.top,e=g.height());0>b||b>e||c(b,this);return!1},onStartDrag:function(){b.isDragging=!0;d.onSlideStart.call(a,d.value)},onStopDrag:function(e){c("h"==d.mode?e.data.left:e.data.top,this);d.onSlideEnd.call(a,d.value);d.onComplete.call(a,d.value);b.isDragging=!1}});g.find("div.slider-inner").unbind(".slider").bind("mousedown.slider",function(g){if(!b.isDragging&&!d.disabled){var l=e(this).offset();c("h"==d.mode?g.pageX-l.left:g.pageY-l.top);d.onComplete.call(a,d.value)}})}function n(a,c){var b=e.data(a,"slider"),d=b.options,b=b.slider,g=e.isArray(d.value)?d.value:[d.value],l=[];e.isArray(c)||(c=e.map(String(c).split(d.separator),function(a){return parseFloat(a)}));b.find(".slider-value").remove();for(var m=e(a).attr("sliderName")||"",n=0;n<c.length;n++){var f=c[n];f<d.min&&(f=d.min);f>d.max&&(f=d.max);var k=e('\x3cinput type\x3d"hidden" class\x3d"slider-value"\x3e').appendTo(b);k.attr("name",m);k.val(f);l.push(f);var k=b.find(".slider-handle:eq("+n+")"),h=k.next(),p=v(a,f);d.showTip?(h.show(),h.html(d.tipFormatter.call(a,f))):h.hide();"h"==d.mode?(f="left:"+p+"px;",k.attr("style",f),h.attr("style",f+"margin-left:"+-Math.round(h.outerWidth()/2)+"px")):(f="top:"+p+"px;",k.attr("style",f),h.attr("style",f+"margin-left:"+-Math.round(h.outerWidth())+"px"))}d.value=d.range?l:l[0];e(a).val(d.range?l.join(d.separator):l[0]);g.join(",")!=l.join(",")&&d.onChange.call(a,d.value,d.range?g:g[0])}function t(a){var c=e.data(a,"slider").options,b=c.onChange;c.onChange=function(){};n(a,c.value);c.onChange=b}function v(a,c){var b=e.data(a,"slider"),d=b.options,b=b.slider,g="h"==d.mode?b.width():b.height(),l=d.converter.toPosition.call(a,c,g);"v"==d.mode&&(l=b.height()-l);d.reversed&&(l=g-l);return l.toFixed(0)}e.fn.slider=function(a,c){if("string"==typeof a)return e.fn.slider.methods[a](this,c);a=a||{};return this.each(function(){var b=e.data(this,"slider");b?e.extend(b.options,a):(b=e.data(this,"slider",{options:e.extend({},e.fn.slider.defaults,e.fn.slider.parseOptions(this),a),slider:r(this)}),e(this).removeAttr("disabled"));b=b.options;b.min=parseFloat(b.min);b.max=parseFloat(b.max);b.range?(e.isArray(b.value)||(b.value=e.map(String(b.value).split(b.separator),function(a){return parseFloat(a)})),2>b.value.length&&b.value.push(b.max)):b.value=parseFloat(b.value);b.step=parseFloat(b.step);b.originalValue=b.value;q(this);u(this);p(this)})};e.fn.slider.methods={options:function(a){return e.data(a[0],"slider").options},destroy:function(a){return a.each(function(){e.data(this,"slider").slider.remove();e(this).remove()})},resize:function(a,c){return a.each(function(){p(this,c)})},getValue:function(a){return a.slider("options").value},getValues:function(a){return a.slider("options").value},setValue:function(a,c){return a.each(function(){n(this,[c])})},setValues:function(a,c){return a.each(function(){n(this,c)})},clear:function(a){return a.each(function(){var a=e(this).slider("options");n(this,a.range?[a.min,a.max]:[a.min])})},reset:function(a){return a.each(function(){var a=e(this).slider("options");e(this).slider(a.range?"setValues":"setValue",a.originalValue)})},enable:function(a){return a.each(function(){e.data(this,"slider").options.disabled=!1;q(this)})},disable:function(a){return a.each(function(){e.data(this,"slider").options.disabled=!0;q(this)})}};e.fn.slider.parseOptions=function(a){var c=e(a);return e.extend({},e.parser.parseOptions(a,["width","height","mode",{reversed:"boolean",showTip:"boolean",range:"boolean",min:"number",max:"number",step:"number"}]),{value:c.val()||void 0,disabled:c.attr("disabled")?!0:void 0,rule:c.attr("rule")?eval(c.attr("rule")):void 0})};e.fn.slider.defaults={width:"auto",height:"auto",mode:"h",reversed:!1,showTip:!1,disabled:!1,range:!1,value:0,separator:",",min:0,max:100,step:1,rule:[],tipFormatter:function(a){return a},converter:{toPosition:function(a,c){var b=e(this).slider("options");return(a-b.min)/(b.max-b.min)*c},toValue:function(a,c){var b=e(this).slider("options");return b.min+a/c*(b.max-b.min)}},onChange:function(a,c){},onSlideStart:function(a){},onSlideEnd:function(a){},onComplete:function(a){}}})(jQuery);