(self.webpackChunkshane_crosby=self.webpackChunkshane_crosby||[]).push([[351],{8550:function(t,e,i){t.exports=i(6562)},1923:function(t,e,i){"use strict";var n=i(4852),r=i(2695),s=i(1247),o=i(7118),a=i(1051),l=["projectId","dataset","imageOptions","ignoreUnknownTypes"],h={imageOptions:{},ignoreUnknownTypes:!0};function u(t){return"block"===t._type&&t.listItem}t.exports=function(t,e,i,c){var p=n({},h,e),f=Array.isArray(p.blocks)?p.blocks:[p.blocks],d=o(f),g=s(d,p.listNestMode),m=a(i,p.serializers||{}),v=l.reduce((function(t,e){var i=p[e];return void 0!==i&&(t[e]=i),t}),{});function y(e,i,n,s){return"list"===(f=e)._type&&f.listItem?(a=(o=e).listItem,l=o.level,h=o._key,p=o.children.map(y),t(m.list,{key:h,level:l,type:a,options:v},p)):u(e)?function(e,i){var n=e._key,s=r(e),o=s.map(y);return t(m.listItem,{node:e,serializers:m,index:i,key:n,options:v},o)}(e,function(t,e){for(var i=0,n=0;n<e.length;n++){if(e[n]===t)return i;u(e[n])&&i++}return i}(e,n)):function(t){return"string"==typeof t||t.marks||"span"===t._type}(e)?c(e,m,i,{serializeNode:y}):function(e,i,n){var s=r(e),o=s.map((function(t,e,i){return y(t,e,i,!0)})),a={key:e._key||"block-".concat(i),node:e,isInline:n,serializers:m,options:v};return t(m.block,a,o)}(e,i,s);var o,a,l,h,p,f}var w=Boolean(p.renderContainerOnSingleChild),b=g.map(y);if(w||b.length>1){var k=p.className?{className:p.className}:{};return t(m.container,k,b)}return b[0]?b[0]:"function"==typeof m.empty?t(m.empty):m.empty}},2695:function(t){"use strict";var e=["strong","em","code","underline","strike-through"];function i(t,e,i){if(!t.marks||0===t.marks.length)return t.marks||[];var r=t.marks.reduce((function(t,n){t[n]=t[n]?t[n]+1:1;for(var r=e+1;r<i.length;r++){var s=i[r];if(!s.marks||!Array.isArray(s.marks)||-1===s.marks.indexOf(n))break;t[n]++}return t}),{}),s=n.bind(null,r);return t.marks.slice().sort(s)}function n(t,i,n){var r=t[i]||0,s=t[n]||0;if(r!==s)return s-r;var o=e.indexOf(i),a=e.indexOf(n);return o!==a?o-a:i<n?-1:i>n?1:0}t.exports=function(t){var e=t.children,n=t.markDefs;if(!e||!e.length)return[];var r=e.map(i),s={_type:"span",children:[]},o=[s];return e.forEach((function(t,e){var i=r[e];if(i){var s=1;if(o.length>1)for(;s<o.length;s++){var a=o[s].markKey,l=i.indexOf(a);if(-1===l)break;i.splice(l,1)}var h,u=function(t){for(var e=t.length-1;e>=0;e--){var i=t[e];if("span"===i._type&&i.children)return i}return}(o=o.slice(0,s));if(i.forEach((function(e){var i={_type:"span",_key:t._key,children:[],mark:n.find((function(t){return t._key===e}))||e,markKey:e};u.children.push(i),o.push(i),u=i})),"span"!==(h=t)._type||"string"!=typeof h.text||!Array.isArray(h.marks)&&void 0!==h.marks)u.children=u.children.concat(t);else{for(var c=t.text.split("\n"),p=c.length;p-- >1;)c.splice(p,0,"\n");u.children=u.children.concat(c)}}else{o[o.length-1].children.push(t)}})),s.children}},7118:function(t,e,i){"use strict";var n=i(4852);function r(t){var e=0,i=t.length;if(0===i)return e;for(var n=0;n<i;n++)e=(e<<5)-e+t.charCodeAt(n),e&=e;return e}t.exports=function(t){return t.map((function(t){return t._key?t:n({_key:(e=t,r(JSON.stringify(e)).toString(36).replace(/[^A-Za-z0-9]/g,""))},t);var e}))}},1643:function(t,e,i){"use strict";var n=i(261),r=i(6803),s=i(4852),o=encodeURIComponent,a="You must either:\n  - Pass `projectId` and `dataset` to the block renderer\n  - Materialize images to include the `url` field.\n\nFor more information, see ".concat(n("block-content-image-materializing"));t.exports=function(t){var e=t.node,i=t.options,n=i.projectId,l=i.dataset,h=e.asset;if(!h)throw new Error("Image does not have required `asset` property");if(h.url)return h.url+function(t){var e=t.imageOptions,i=Object.keys(e);if(!i.length)return"";var n=i.map((function(t){return"".concat(o(t),"=").concat(o(e[t]))}));return"?".concat(n.join("&"))}(i);if(!n||!l)throw new Error(a);if(!h._ref)throw new Error("Invalid image reference in block, no `_ref` found on `asset`");return r(s({projectId:n,dataset:l},i.imageOptions||{})).image(e).toString()}},6562:function(t,e,i){"use strict";var n=i(8019),r=i(1923),s=i(1643),o=i(1051);t.exports={blocksToNodes:function(t,e,i,s){if(i)return r(t,e,i,s);var o=n(t);return r(t,e,o.defaultSerializers,o.serializeSpan)},getSerializers:n,getImageUrl:s,mergeSerializers:o}},1051:function(t,e,i){"use strict";function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}var r=i(4852);t.exports=function(t,e){return Object.keys(t).reduce((function(i,s){var o=n(t[s]);return i[s]="function"===o?void 0!==e[s]?e[s]:t[s]:"object"===o?r({},t[s],e[s]):void 0===e[s]?t[s]:e[s],i}),{})}},1247:function(t,e,i){"use strict";var n=i(4852);function r(t){return Boolean(t.listItem)}function s(t,e){return t.level===e.level&&t.listItem===e.listItem}function o(t){return{_type:"list",_key:"".concat(t._key,"-parent"),level:t.level,listItem:t.listItem,children:[t]}}function a(t){return t.children&&t.children[t.children.length-1]}function l(t,e){var i="string"==typeof e.listItem;if("list"===t._type&&t.level===e.level&&i&&t.listItem===e.listItem)return t;var n=a(t);return!!n&&l(n,e)}t.exports=function(t){for(var e,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"html",h=[],u=0;u<t.length;u++){var c=t[u];if(r(c))if(e)if(s(c,e))e.children.push(c);else if(c.level>e.level){var p=o(c);if("html"===i){var f=a(e),d=n({},f,{children:f.children.concat(p)});e.children[e.children.length-1]=d}else e.children.push(p);e=p}else if(c.level<e.level){var g=l(h[h.length-1],c);if(g){(e=g).children.push(c);continue}e=o(c),h.push(e)}else if(c.listItem===e.listItem)console.warn("Unknown state encountered for block",c),h.push(c);else{var m=l(h[h.length-1],{level:c.level});if(m&&m.listItem===c.listItem){(e=m).children.push(c);continue}e=o(c),h.push(e)}else e=o(c),h.push(e);else h.push(c),e=null}return h}},8019:function(t,e,i){"use strict";var n=i(4852),r=i(1643);t.exports=function(t,e){var i=e||{useDashedStyles:!1};function s(e,i){return t(e,null,i.children)}return{defaultSerializers:{types:{block:function(e){var i=e.node.style||"normal";return/^h\d/.test(i)?t(i,null,e.children):t("blockquote"===i?"blockquote":"p",null,e.children)},image:function(e){if(!e.node.asset)return null;var i=t("img",{src:r(e)});return e.isInline?i:t("figure",null,i)}},marks:{strong:s.bind(null,"strong"),em:s.bind(null,"em"),code:s.bind(null,"code"),underline:function(e){var n=i.useDashedStyles?{"text-decoration":"underline"}:{textDecoration:"underline"};return t("span",{style:n},e.children)},"strike-through":function(e){return t("del",null,e.children)},link:function(e){return t("a",{href:e.mark.href},e.children)}},list:function(e){var i="bullet"===e.type?"ul":"ol";return t(i,null,e.children)},listItem:function(e){var i=e.node.style&&"normal"!==e.node.style?t(e.serializers.types.block,e,e.children):e.children;return t("li",null,i)},block:function(e){var i=e.node,n=e.serializers,r=e.options,s=e.isInline,o=e.children,a=i._type,l=n.types[a];if(!l){if(r.ignoreUnknownTypes)return console.warn('Unknown block type "'.concat(a,'", please specify a serializer for it in the `serializers.types` prop')),t(n.unknownType,{node:i,options:r,isInline:s},o);throw new Error('Unknown block type "'.concat(a,'", please specify a serializer for it in the `serializers.types` prop'))}return t(l,{node:i,options:r,isInline:s},o)},span:function(e){var i=e.node,n=i.mark,r=i.children,s="string"==typeof n?n:n._type,o=e.serializers.marks[s];return o?t(o,e.node,r):(console.warn('Unknown mark type "'.concat(s,'", please specify a serializer for it in the `serializers.marks` prop')),t(e.serializers.unknownMark,null,r))},hardBreak:function(){return t("br")},unknownType:function(e){return t("div",{style:{display:"none"}},'Unknown block type "'.concat(e.node._type,'", please specify a serializer for it in the `serializers.types` prop'))},unknownMark:"span",container:"div",text:void 0,empty:""},serializeSpan:function(e,i,r,s){if("\n"===e&&i.hardBreak)return t(i.hardBreak,{key:"hb-".concat(r)});if("string"==typeof e)return i.text?t(i.text,{key:"text-".concat(r)},e):e;var o;e.children&&(o={children:e.children.map((function(t,i){return s.serializeNode(t,i,e.children,!0)}))});var a=n({},e,o);return t(i.span,{key:e._key||"span-".concat(r),node:a,serializers:i})}}}},8863:function(t,e,i){"use strict";var n=i(7294),r=i(5697),s=i(8550),o=i(8675),a=o.serializers,l=o.serializeSpan,h=o.renderProps,u=s.getImageUrl,c=s.blocksToNodes,p=s.mergeSerializers,f=n.createElement,d=function t(e){var i=p(t.defaultSerializers,e.serializers),n=Object.assign({},h,e,{serializers:i,blocks:e.blocks||[]});return c(f,n,a,l)};d.defaultSerializers=a,d.getImageUrl=u,d.propTypes={className:r.string,renderContainerOnSingleChild:r.bool,ignoreUnknownTypes:r.bool,projectId:r.string,dataset:r.string,imageOptions:r.object,serializers:r.shape({types:r.object,marks:r.object,list:r.func,listItem:r.func,block:r.func,span:r.func}),blocks:r.oneOfType([r.arrayOf(r.shape({_type:r.string.isRequired})),r.shape({_type:r.string.isRequired})]).isRequired},d.defaultProps={ignoreUnknownTypes:!0,renderContainerOnSingleChild:!1,serializers:{},imageOptions:{}},t.exports=d},8675:function(t,e,i){"use strict";var n=i(7294),r=(0,i(8550).getSerializers)(n.createElement),s=r.defaultSerializers,o=r.serializeSpan;t.exports={serializeSpan:o,serializers:s,renderProps:{nestMarks:!0}}},261:function(t){t.exports=function(t){return"https://docs.sanity.io/help/"+t}},6803:function(t){t.exports=function(){function t(){return t=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},t.apply(this,arguments)}function e(t,e){if(t){if("string"==typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(t,e):void 0}}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function n(t){var i=0;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=e(t)))return function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}};throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(i=t[Symbol.iterator]()).next.bind(i)}var r="image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg";function s(t){var e=t.split("-"),i=e[1],n=e[2],s=e[3];if(!i||!n||!s)throw new Error("Malformed asset _ref '"+t+"'. Expected an id like \""+r+'".');var o=n.split("x"),a=+o[0],l=+o[1];if(!isFinite(a)||!isFinite(l))throw new Error("Malformed asset _ref '"+t+"'. Expected an id like \""+r+'".');return{id:i,width:a,height:l,format:s}}var o=function(t){return!!t&&"string"==typeof t._ref},a=function(t){return!!t&&"string"==typeof t._id},l=function(t){var e=t;return!(!e||!e.asset)&&"string"==typeof e.asset.url};function h(t){if(!t)return null;var e;if("string"==typeof t&&u(t))e={asset:{_ref:c(t)}};else if("string"==typeof t)e={asset:{_ref:t}};else if(o(t))e={asset:t};else if(a(t))e={asset:{_ref:t._id||""}};else if(l(t))e={asset:{_ref:c(t.asset.url)}};else{if("object"!=typeof t.asset)return null;e=t}var i=t;return i.crop&&(e.crop=i.crop),i.hotspot&&(e.hotspot=i.hotspot),p(e)}function u(t){return/^https?:\/\//.test(""+t)}function c(t){return("image-"+t.split("/").slice(-1)[0]).replace(/\.([a-z]+)$/,"-$1")}function p(e){if(e.crop&&e.hotspot)return e;var i=t({},e);return i.crop||(i.crop={left:0,top:0,bottom:0,right:0}),i.hotspot||(i.hotspot={x:.5,y:.5,height:1,width:1}),i}var f=[["width","w"],["height","h"],["format","fm"],["download","dl"],["blur","blur"],["sharpen","sharp"],["invert","invert"],["orientation","or"],["minHeight","min-h"],["maxHeight","max-h"],["minWidth","min-w"],["maxWidth","max-w"],["quality","q"],["fit","fit"],["crop","crop"],["saturation","sat"],["auto","auto"],["dpr","dpr"],["pad","pad"]];function d(e){var i=t({},e||{}),n=i.source;delete i.source;var r=h(n);if(!r)return null;var o=s(r.asset._ref||r.asset._id||""),a=Math.round(r.crop.left*o.width),l=Math.round(r.crop.top*o.height),u={left:a,top:l,width:Math.round(o.width-r.crop.right*o.width-a),height:Math.round(o.height-r.crop.bottom*o.height-l)},c=r.hotspot.height*o.height/2,p=r.hotspot.width*o.width/2,f=r.hotspot.x*o.width,d=r.hotspot.y*o.height,v={left:f-p,top:d-c,right:f+p,bottom:d+c};return i.rect||i.focalPoint||i.ignoreImageParams||i.crop||(i=t(t({},i),m({crop:u,hotspot:v},i))),g(t(t({},i),{},{asset:o}))}function g(t){var e=t.baseUrl||"https://cdn.sanity.io",i=t.asset.id+"-"+t.asset.width+"x"+t.asset.height+"."+t.asset.format,n=e+"/images/"+t.projectId+"/"+t.dataset+"/"+i,r=[];if(t.rect){var s=t.rect,o=s.left,a=s.top,l=s.width,h=s.height;(0!==o||0!==a||h!==t.asset.height||l!==t.asset.width)&&r.push("rect="+o+","+a+","+l+","+h)}t.bg&&r.push("bg="+t.bg),t.focalPoint&&(r.push("fp-x="+t.focalPoint.x),r.push("fp-y="+t.focalPoint.y));var u=[t.flipHorizontal&&"h",t.flipVertical&&"v"].filter(Boolean).join("");return u&&r.push("flip="+u),f.forEach((function(e){var i=e[0],n=e[1];void 0!==t[i]?r.push(n+"="+encodeURIComponent(t[i])):void 0!==t[n]&&r.push(n+"="+encodeURIComponent(t[n]))})),0===r.length?n:n+"?"+r.join("&")}function m(t,e){var i,n=e.width,r=e.height;if(!n||!r)return{width:n,height:r,rect:t.crop};var s=t.crop,o=t.hotspot,a=n/r;if(s.width/s.height>a){var l=s.height,h=l*a,u=s.top,c=(o.right-o.left)/2+o.left-h/2;c<s.left?c=s.left:c+h>s.left+s.width&&(c=s.left+s.width-h),i={left:Math.round(c),top:Math.round(u),width:Math.round(h),height:Math.round(l)}}else{var p=s.width,f=p/a,d=s.left,g=(o.bottom-o.top)/2+o.top-f/2;g<s.top?g=s.top:g+f>s.top+s.height&&(g=s.top+s.height-f),i={left:Math.max(0,Math.floor(d)),top:Math.max(0,Math.floor(g)),width:Math.round(p),height:Math.round(f)}}return{width:n,height:r,rect:i}}var v=["clip","crop","fill","fillmax","max","scale","min"],y=["top","bottom","left","right","center","focalpoint","entropy"],w=["format"];function b(t){return!!t&&"object"==typeof t.clientConfig}function k(t){for(var e,i=n(f);!(e=i()).done;){var r=e.value,s=r[0],o=r[1];if(t===s||t===o)return s}return t}function x(t){var e=t;if(b(e)){var i=e.clientConfig,n=i.apiHost,r=i.projectId,s=i.dataset;return new z(null,{baseUrl:(n||"https://api.sanity.io").replace(/^https:\/\/api\./,"https://cdn."),projectId:r,dataset:s})}return new z(null,t)}var z=function(){function e(e,i){this.options=t(e?t({},e.options||{}):{},i||{})}var i=e.prototype;return i.withOptions=function(i){var n=i.baseUrl||this.options.baseUrl,r={baseUrl:n};for(var s in i)i.hasOwnProperty(s)&&(r[k(s)]=i[s]);return new e(this,t({baseUrl:n},r))},i.image=function(t){return this.withOptions({source:t})},i.dataset=function(t){return this.withOptions({dataset:t})},i.projectId=function(t){return this.withOptions({projectId:t})},i.bg=function(t){return this.withOptions({bg:t})},i.dpr=function(t){return this.withOptions({dpr:t})},i.width=function(t){return this.withOptions({width:t})},i.height=function(t){return this.withOptions({height:t})},i.focalPoint=function(t,e){return this.withOptions({focalPoint:{x:t,y:e}})},i.maxWidth=function(t){return this.withOptions({maxWidth:t})},i.minWidth=function(t){return this.withOptions({minWidth:t})},i.maxHeight=function(t){return this.withOptions({maxHeight:t})},i.minHeight=function(t){return this.withOptions({minHeight:t})},i.size=function(t,e){return this.withOptions({width:t,height:e})},i.blur=function(t){return this.withOptions({blur:t})},i.sharpen=function(t){return this.withOptions({sharpen:t})},i.rect=function(t,e,i,n){return this.withOptions({rect:{left:t,top:e,width:i,height:n}})},i.format=function(t){return this.withOptions({format:t})},i.invert=function(t){return this.withOptions({invert:t})},i.orientation=function(t){return this.withOptions({orientation:t})},i.quality=function(t){return this.withOptions({quality:t})},i.forceDownload=function(t){return this.withOptions({download:t})},i.flipHorizontal=function(){return this.withOptions({flipHorizontal:!0})},i.flipVertical=function(){return this.withOptions({flipVertical:!0})},i.ignoreImageParams=function(){return this.withOptions({ignoreImageParams:!0})},i.fit=function(t){if(-1===v.indexOf(t))throw new Error('Invalid fit mode "'+t+'"');return this.withOptions({fit:t})},i.crop=function(t){if(-1===y.indexOf(t))throw new Error('Invalid crop mode "'+t+'"');return this.withOptions({crop:t})},i.saturation=function(t){return this.withOptions({saturation:t})},i.auto=function(t){if(-1===w.indexOf(t))throw new Error('Invalid auto mode "'+t+'"');return this.withOptions({auto:t})},i.pad=function(t){return this.withOptions({pad:t})},i.url=function(){return d(this.options)},i.toString=function(){return this.url()},e}();return x}()},4852:function(t){"use strict";t.exports=Object.assign},2662:function(t){"use strict";var e=function(){function t(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),!(e instanceof Node))throw"Can't initialize VanillaTilt because "+e+" is not a Node.";this.width=null,this.height=null,this.clientWidth=null,this.clientHeight=null,this.left=null,this.top=null,this.gammazero=null,this.betazero=null,this.lastgammazero=null,this.lastbetazero=null,this.transitionTimeout=null,this.updateCall=null,this.event=null,this.updateBind=this.update.bind(this),this.resetBind=this.reset.bind(this),this.element=e,this.settings=this.extendSettings(i),this.reverse=this.settings.reverse?-1:1,this.resetToStart=t.isSettingTrue(this.settings["reset-to-start"]),this.glare=t.isSettingTrue(this.settings.glare),this.glarePrerender=t.isSettingTrue(this.settings["glare-prerender"]),this.fullPageListening=t.isSettingTrue(this.settings["full-page-listening"]),this.gyroscope=t.isSettingTrue(this.settings.gyroscope),this.gyroscopeSamples=this.settings.gyroscopeSamples,this.elementListener=this.getElementListener(),this.glare&&this.prepareGlare(),this.fullPageListening&&this.updateClientSize(),this.addEventListeners(),this.reset(),!1===this.resetToStart&&(this.settings.startX=0,this.settings.startY=0)}return t.isSettingTrue=function(t){return""===t||!0===t||1===t},t.prototype.getElementListener=function(){if(this.fullPageListening)return window.document;if("string"==typeof this.settings["mouse-event-element"]){var t=document.querySelector(this.settings["mouse-event-element"]);if(t)return t}return this.settings["mouse-event-element"]instanceof Node?this.settings["mouse-event-element"]:this.element},t.prototype.addEventListeners=function(){this.onMouseEnterBind=this.onMouseEnter.bind(this),this.onMouseMoveBind=this.onMouseMove.bind(this),this.onMouseLeaveBind=this.onMouseLeave.bind(this),this.onWindowResizeBind=this.onWindowResize.bind(this),this.onDeviceOrientationBind=this.onDeviceOrientation.bind(this),this.elementListener.addEventListener("mouseenter",this.onMouseEnterBind),this.elementListener.addEventListener("mouseleave",this.onMouseLeaveBind),this.elementListener.addEventListener("mousemove",this.onMouseMoveBind),(this.glare||this.fullPageListening)&&window.addEventListener("resize",this.onWindowResizeBind),this.gyroscope&&window.addEventListener("deviceorientation",this.onDeviceOrientationBind)},t.prototype.removeEventListeners=function(){this.elementListener.removeEventListener("mouseenter",this.onMouseEnterBind),this.elementListener.removeEventListener("mouseleave",this.onMouseLeaveBind),this.elementListener.removeEventListener("mousemove",this.onMouseMoveBind),this.gyroscope&&window.removeEventListener("deviceorientation",this.onDeviceOrientationBind),(this.glare||this.fullPageListening)&&window.removeEventListener("resize",this.onWindowResizeBind)},t.prototype.destroy=function(){clearTimeout(this.transitionTimeout),null!==this.updateCall&&cancelAnimationFrame(this.updateCall),this.element.style.willChange="",this.element.style.transition="",this.element.style.transform="",this.resetGlare(),this.removeEventListeners(),this.element.vanillaTilt=null,delete this.element.vanillaTilt,this.element=null},t.prototype.onDeviceOrientation=function(t){if(null!==t.gamma&&null!==t.beta){this.updateElementPosition(),this.gyroscopeSamples>0&&(this.lastgammazero=this.gammazero,this.lastbetazero=this.betazero,null===this.gammazero?(this.gammazero=t.gamma,this.betazero=t.beta):(this.gammazero=(t.gamma+this.lastgammazero)/2,this.betazero=(t.beta+this.lastbetazero)/2),this.gyroscopeSamples-=1);var e=this.settings.gyroscopeMaxAngleX-this.settings.gyroscopeMinAngleX,i=this.settings.gyroscopeMaxAngleY-this.settings.gyroscopeMinAngleY,n=e/this.width,r=i/this.height,s=(t.gamma-(this.settings.gyroscopeMinAngleX+this.gammazero))/n,o=(t.beta-(this.settings.gyroscopeMinAngleY+this.betazero))/r;null!==this.updateCall&&cancelAnimationFrame(this.updateCall),this.event={clientX:s+this.left,clientY:o+this.top},this.updateCall=requestAnimationFrame(this.updateBind)}},t.prototype.onMouseEnter=function(){this.updateElementPosition(),this.element.style.willChange="transform",this.setTransition()},t.prototype.onMouseMove=function(t){null!==this.updateCall&&cancelAnimationFrame(this.updateCall),this.event=t,this.updateCall=requestAnimationFrame(this.updateBind)},t.prototype.onMouseLeave=function(){this.setTransition(),this.settings.reset&&requestAnimationFrame(this.resetBind)},t.prototype.reset=function(){this.onMouseEnter(),this.fullPageListening?this.event={clientX:(this.settings.startX+this.settings.max)/(2*this.settings.max)*this.clientWidth,clientY:(this.settings.startY+this.settings.max)/(2*this.settings.max)*this.clientHeight}:this.event={clientX:this.left+(this.settings.startX+this.settings.max)/(2*this.settings.max)*this.width,clientY:this.top+(this.settings.startY+this.settings.max)/(2*this.settings.max)*this.height};var t=this.settings.scale;this.settings.scale=1,this.update(),this.settings.scale=t,this.resetGlare()},t.prototype.resetGlare=function(){this.glare&&(this.glareElement.style.transform="rotate(180deg) translate(-50%, -50%)",this.glareElement.style.opacity="0")},t.prototype.getValues=function(){var t=void 0,e=void 0;return this.fullPageListening?(t=this.event.clientX/this.clientWidth,e=this.event.clientY/this.clientHeight):(t=(this.event.clientX-this.left)/this.width,e=(this.event.clientY-this.top)/this.height),t=Math.min(Math.max(t,0),1),e=Math.min(Math.max(e,0),1),{tiltX:(this.reverse*(this.settings.max-t*this.settings.max*2)).toFixed(2),tiltY:(this.reverse*(e*this.settings.max*2-this.settings.max)).toFixed(2),percentageX:100*t,percentageY:100*e,angle:Math.atan2(this.event.clientX-(this.left+this.width/2),-(this.event.clientY-(this.top+this.height/2)))*(180/Math.PI)}},t.prototype.updateElementPosition=function(){var t=this.element.getBoundingClientRect();this.width=this.element.offsetWidth,this.height=this.element.offsetHeight,this.left=t.left,this.top=t.top},t.prototype.update=function(){var t=this.getValues();this.element.style.transform="perspective("+this.settings.perspective+"px) rotateX("+("x"===this.settings.axis?0:t.tiltY)+"deg) rotateY("+("y"===this.settings.axis?0:t.tiltX)+"deg) scale3d("+this.settings.scale+", "+this.settings.scale+", "+this.settings.scale+")",this.glare&&(this.glareElement.style.transform="rotate("+t.angle+"deg) translate(-50%, -50%)",this.glareElement.style.opacity=""+t.percentageY*this.settings["max-glare"]/100),this.element.dispatchEvent(new CustomEvent("tiltChange",{detail:t})),this.updateCall=null},t.prototype.prepareGlare=function(){if(!this.glarePrerender){var t=document.createElement("div");t.classList.add("js-tilt-glare");var e=document.createElement("div");e.classList.add("js-tilt-glare-inner"),t.appendChild(e),this.element.appendChild(t)}this.glareElementWrapper=this.element.querySelector(".js-tilt-glare"),this.glareElement=this.element.querySelector(".js-tilt-glare-inner"),this.glarePrerender||(Object.assign(this.glareElementWrapper.style,{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",overflow:"hidden","pointer-events":"none","border-radius":"inherit"}),Object.assign(this.glareElement.style,{position:"absolute",top:"50%",left:"50%","pointer-events":"none","background-image":"linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",transform:"rotate(180deg) translate(-50%, -50%)","transform-origin":"0% 0%",opacity:"0"}),this.updateGlareSize())},t.prototype.updateGlareSize=function(){if(this.glare){var t=2*(this.element.offsetWidth>this.element.offsetHeight?this.element.offsetWidth:this.element.offsetHeight);Object.assign(this.glareElement.style,{width:t+"px",height:t+"px"})}},t.prototype.updateClientSize=function(){this.clientWidth=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,this.clientHeight=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight},t.prototype.onWindowResize=function(){this.updateGlareSize(),this.updateClientSize()},t.prototype.setTransition=function(){var t=this;clearTimeout(this.transitionTimeout),this.element.style.transition=this.settings.speed+"ms "+this.settings.easing,this.glare&&(this.glareElement.style.transition="opacity "+this.settings.speed+"ms "+this.settings.easing),this.transitionTimeout=setTimeout((function(){t.element.style.transition="",t.glare&&(t.glareElement.style.transition="")}),this.settings.speed)},t.prototype.extendSettings=function(t){var e={reverse:!1,max:15,startX:0,startY:0,perspective:1e3,easing:"cubic-bezier(.03,.98,.52,.99)",scale:1,speed:300,transition:!0,axis:null,glare:!1,"max-glare":1,"glare-prerender":!1,"full-page-listening":!1,"mouse-event-element":null,reset:!0,"reset-to-start":!0,gyroscope:!0,gyroscopeMinAngleX:-45,gyroscopeMaxAngleX:45,gyroscopeMinAngleY:-45,gyroscopeMaxAngleY:45,gyroscopeSamples:10},i={};for(var n in e)if(n in t)i[n]=t[n];else if(this.element.hasAttribute("data-tilt-"+n)){var r=this.element.getAttribute("data-tilt-"+n);try{i[n]=JSON.parse(r)}catch(s){i[n]=r}}else i[n]=e[n];return i},t.init=function(e,i){e instanceof Node&&(e=[e]),e instanceof NodeList&&(e=[].slice.call(e)),e instanceof Array&&e.forEach((function(e){"vanillaTilt"in e||(e.vanillaTilt=new t(e,i))}))},t}();"undefined"!=typeof document&&(window.VanillaTilt=e,e.init(document.querySelectorAll("[data-tilt]"))),t.exports=e}}]);
//# sourceMappingURL=commons-0e05df7cb8f037856578.js.map