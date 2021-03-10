!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("chroma-js")):"function"==typeof define&&define.amd?define(["chroma-js"],t):(e="undefined"!=typeof globalThis?globalThis:e||self).VuetifyColorInput=t(e.chroma)}(this,(function(e){"use strict";function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var r=t(e);function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,i=!1,o=void 0;try{for(var a,s=e[Symbol.iterator]();!(n=(a=s.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){i=!0,o=e}finally{try{n||null==s.return||s.return()}finally{if(i)throw o}}return r}(e,t)||l(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e){return function(e){if(Array.isArray(e))return h(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||l(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){if(e){if("string"==typeof e)return h(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?h(e,t):void 0}}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function f(e,t,r){return function(e,t,r){return{background:"url('data:image/svg+xml;base64,".concat(btoa(e),"') center center / ").concat(t,"px ").concat(t,"px repeat ").concat(r)}}('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2 2" fill="'.concat(t,'"><rect x="1" width="1" height="1"/><rect y="1" width="1" height="1"/></svg>'),2*e,r)}function d(e){return{backgroundColor:e}}var p={overflow:"hidden"},b={pointerEvents:"none"},g={bottom:"50%",position:"absolute",right:"50%",transform:"translate(50%,50%)"},v={position:"relative"},y={borderRadius:"9999px"};function m(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e;return{height:t,width:e}}var w=m("100%"),S={transition:"all .3s cubic-bezier(.25,.8,.5,1)"},j={userSelect:"none"},O=function(){function e(t,r,n,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),Object.assign(this,{r:t,g:r,b:n,a:i})}var t,n,o;return t=e,o=[{key:"from",value:function(e){var t=u(r.default(e).rgba(),4),n=t[0],i=t[1],o=t[2],a=t[3];return new this(n,i,o,a=Number(a.toFixed(3)))}}],(n=[{key:"toObject",value:function(e,t){var n=this,i=function(){var t=n.r,i=n.g,o=n.b,a=n.a;switch(e){case"hsl":var s=r.default({r:t,g:i,b:o,a:h}).hsl(),u=s.h,c=s.s,l=s.l,h=s.a;return{h:u,s:c,l:l,a:h};case"hsv":var f=r.default({r:t,g:i,b:o,a:g}).hsv(),d=f.h,p=f.s,b=f.v,g=f.a;return{h:d,s:p,v:b,a:g}}return{r:t,g:i,b:o,a:a}}();return t&&delete i.a,i}},{key:"toString",value:function(e){var t=this.r,n=this.g,i=this.b,o=this.a;switch(e){case"hex":return r.default({r:t,g:n,b:i,a:o}).hex();case"rgb":return r.default({r:t,g:n,b:i,a:o}).css()}return o<1?r.default({r:t,g:n,b:i,a:o}).css():r.default({r:t,g:n,b:i,a:o}).hex()}}])&&i(t.prototype,n),o&&i(t,o),e}(),x=Array.isArray,k=Object.is;function A(e){if(e){var t=n(e);return"object"===t||"function"===t}return!1}function V(e,t){if(k(e,t))return!0;if(x(e)){if(x(t)){var r=e.length;if(r===t.length){for(var n=0;n<r;n++)if(!V(e[n],t[n]))return!1;return!0}}}else if(A(e)&&A(t)){var i=Object.keys(e).sort();if(V(i,Object.keys(t).sort())&&(e=i.map((function(t){return e[t]})),t=i.map((function(e){return t[e]})),V(e,t)))return!0}return!1}var C,I,B={name:"VColorInput",inject:{theme:{default:{isDark:!1}}},props:{appendIcon:String,canvasHeight:{type:[String,Number]},disabled:Boolean,error:Boolean,errorCount:{},errorMessages:{},hideDetails:[Boolean,String],hint:{},id:{},label:String,messages:{},noAlpha:Boolean,persistentHint:Boolean,prependIcon:{},rules:{},success:Boolean,successMessages:{},validateOnBlur:Boolean,value:{},dotSize:{type:[Number,String]},hideCanvas:Boolean,hideInputs:Boolean,hideModeSwitch:Boolean,hideSliders:Boolean,mode:{type:String,default:"hex"},showSwatches:Boolean,swatches:Array,swatchesMaxHeight:{type:[Number,String]}},data:function(){return{fallbackValue:{r:0,g:0,b:0,a:0},format:"string",lazyValue:this.value,mandatory:!1,menuActive:!1,validationState:void 0}},computed:{dark:function(){return this.theme.isDark},internalValue:{get:function(){return this.getValue(this.format,this.mandatory)},set:function(e){this.lazyValue=e}},modeForColorPicker:{get:function(){var e=this.mode;switch(e){case"hex":return"hexa";case"hsl":return"hsla";case"rgb":return"rgba"}return e},set:function(e){e=function(){switch(e){case"hexa":return"hex";case"hsla":return"hsl";case"rgba":return"rgb"}return e}(),this.$emit("update:mode",e)}},valueAsString:function(){return this.getValue("string",!0)},valueForColorPicker:function(){return this.getValue("object.rgb",!0)}},watch:{internalValue:{handler:function(e,t){V(e,t)||this.$emit("input",e)},immediate:!0},value:function(e){this.lazyValue=e}},mounted:function(){var e=this;this.$watch((function(){return e.$refs.input.validationState}),(function(t){e.validationState=t}),{immediate:!0})},methods:{getValue:function(e,t){var r=this.lazyValue;if(!r){if(!t)return null;r=this.fallbackValue}var n=O.from(r),i=this.noAlpha;switch(i&&(n.a=1),e){case"object.hsl":return n.toObject("hsl",i);case"object.hsv":return n.toObject("hsv",i);case"object.rgb":return n.toObject("rgb",i);case"string.hex":return n.toString("rgb");case"string.rgb":return n.toString("hex")}return n.toString()}},render:function(e){var t=this,r=this.$scopedSlots,n=this.appendIcon,i=this.canvasHeight,o=this.dark,a=this.disabled,u=this.dotSize,l=this.error,h=this.errorCount,O=this.errorMessages,x=this.hideCanvas,k=this.hideDetails,A=this.hideInputs,V=this.hideModeSwitch,C=this.hideSliders,I=this.hint,B=this.id,P=this.internalValue,M=this.menuActive,D=this.messages,H=this.modeForColorPicker,$=this.persistentHint,z=this.prependIcon,T=this.rules,E=this.showSwatches,F=this.success,N=this.successMessages,q=this.swatches,L=this.swatchesMaxHeight,R=this.validateOnBlur,U=this.valueForColorPicker;return e("VInput",{props:{appendIcon:n,disabled:a,error:l,errorCount:h,errorMessages:O,hideDetails:k,hint:I,id:B,messages:D,persistentHint:$,prependIcon:z,rules:T,success:F,successMessages:N,validateOnBlur:R,value:P},on:{"click:append":function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];t.$emit.apply(t,["click:append"].concat(r))},"click:prepend":function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];t.$emit.apply(t,["click:prepend"].concat(r))},"update:error":function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];t.$emit.apply(t,["update:error"].concat(r))}},scopedSlots:{append:r.append,message:r.message,prepend:r.prepend},ref:"input"},[e("VMenu",{ref:"menu",props:{closeOnContentClick:!1,disabled:a,offsetY:!0,value:M},on:{input:function(e){t.menuActive=e}},scopedSlots:{activator:function(n){var i=n.attrs,u=n.on;return e("div",{attrs:i,on:u},[e("div",{style:s(s(s({},b),j),{},{alignItems:"center",display:"grid",gap:"8px",gridTemplateColumns:"auto 1fr"})},[e("div",{style:s(s({},m("24px")),v)},[e("div",{style:s(s(s(s(s({},a?s({},m("8px")):P?s(s({},w),o?f(8,"#fff","#000"):f(8,"#f00","#0f0")):{}),p),g),y),S)},[e("div",{style:s(s(s({},a?s({},d(o?"hsla(0,0%,100%,.2)":"rgba(0,0,0,.26)")):P?s({},d(t.valueAsString)):{}),w),S)})])])].concat(c(function(){var n,i=r.label;if(i)n=i();else{var o=t.label;if(!o)return[];n=o}var s=t.validationState;return[e("div",[e("VLabel",{props:{color:s,disabled:a,focused:!!s}},n)])]}())))])},default:function(){return e("VColorPicker",{props:{canvasHeight:i,disabled:a,dotSize:u,hideCanvas:x,hideInputs:A,hideModeSwitch:V,hideSliders:C,mode:H,showSwatches:E,swatches:q,swatchesMaxHeight:L,value:U},on:{input:function(e){t.internalValue=e},"update:mode":function(e){t.modeForColorPicker=e}}})}}})])}};return null===(C=globalThis.window)||void 0===C||null===(I=C.Vue)||void 0===I||I.component(B.name,B),B}));
