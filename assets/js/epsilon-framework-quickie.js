!function(e){function i(o){if(n[o])return n[o].exports;var t=n[o]={i:o,l:!1,exports:{}};return e[o].call(t.exports,t,t.exports,i),t.l=!0,t.exports}var n={};i.m=e,i.c=n,i.d=function(e,n,o){i.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},i.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,i){return Object.prototype.hasOwnProperty.call(e,i)},i.p="/assets/js/",i(i.s=73)}({73:function(e,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var o=n(74),t=new o.EpsilonQuickieBar;jQuery(document).on("ready",function(e){t.init()}),jQuery(window).on("load",function(e){t.addBodyClass()})},74:function(e,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var o=function(){function e(){}return e.prototype.init=function(){this.prependEpsilonHTML(),this.moveResponsiveControls(),this.listenForClick()},e.prototype.addBodyClass=function(){jQuery("body").addClass("epsilon-quickie-is-visible")},e.prototype.prependEpsilonHTML=function(){if(null!==EpsilonQuickieObj){var e='<div class="epsilon-quickie">\n\n        <div class="epsilon-quickie-logo">\n            <img src="'+EpsilonQuickieObj.logo.url+'" alt="'+EpsilonQuickieObj.logo.alt+'">\n        </div>\x3c!--/.epsilon-quickie-logo--\x3e\n\n        <div class="epsilon-quickie-shortcuts">';jQuery(EpsilonQuickieObj.links).each(function(i,n){""!==n&&(e+='<a href="#" class="epsilon-quickie-navigation" data-customizer-link="'+n.link_to+'" data-customizer-type="'+n.link_type+'">\n                        <i class="'+n.icon+'"></i>\n                    </a>')}),e+=" </div>\x3c!--/.epsilon-quickie-shortcuts--\x3e</div>",jQuery(".wp-full-overlay-sidebar").prepend(e)}},e.prototype.listenForClick=function(){var e=".epsilon-quickie-navigation";jQuery(e).on("click",function(i){i.preventDefault();var n=jQuery(this).data("customizer-link"),o=jQuery(this).data("customizer-type");""!==n&&""!==o&&(wp.customize[o](n).focus(),jQuery(e).removeClass("quickie-link-active"),jQuery(" [data-customizer-link='"+n+"']")&&jQuery("[data-customizer-link='"+n+"']").addClass("quickie-link-active"))})},e.prototype.moveResponsiveControls=function(){var e=jQuery("#customize-footer-actions");jQuery(e).hide(),jQuery(e).find(".collapse-sidebar-label").hide(),jQuery(e).find(".collapse-sidebar, .devices-wrapper").appendTo(".epsilon-quickie")},e}();i.EpsilonQuickieBar=o}});
//# sourceMappingURL=epsilon-framework-quickie.js.map