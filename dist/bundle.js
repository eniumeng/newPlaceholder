!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).NewPlaceholder=t()}(this,function(){"use strict";function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var r='\n  html {\n    position: relative;\n  }\n\n  .nph-ctn {\n    visibility: hidden;\n  }\n\n  .ph-ctn {\n    box-sizing: border-box;\n    background-color: #fff;\n    border: 1px solid #e6e6e6;\n    border-radius: 2px;\n    overflow: hidden;\n  }\n\n  .ph-ctn::before {\n    content: " ";\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 50%;\n    z-index: 1;\n    width: 500%;\n    margin-left: -250%;\n    -webkit-animation: phAnimation 0.8s linear infinite;\n            animation: phAnimation 0.8s linear infinite;\n    background: linear-gradient(to right, rgba(255, 255, 255, 0) 46%, rgba(255, 255, 255, 0.35) 50%, rgba(255, 255, 255, 0) 54%) 50% 50%; }\n\n  @keyframes phAnimation {\n    0% { transform: translate3d(-30%, 0, 0); }\n    100% { transform: translate3d(30%, 0, 0); }\n  }\n\n  .ph-item {\n    background-color: #ced4da;\n  }\n',s=document.documentElement,a=document.body;function c(t,n){["border-radius"].forEach(function(e){t.style[e]=getComputedStyle(n)[e]})}function d(e){var t=e.getBoundingClientRect(),n=s.scrollLeft,o=s.scrollTop,i=document.createElement("div");return c(i,e),i.style.position="absolute",i.style.top="".concat(o+t.top,"px"),i.style.left="".concat(n+t.left,"px"),i.style.width="".concat(t.width,"px"),i.style.height="".concat(t.height,"px"),i.classList.add("ph-ctn"),e.querySelectorAll(".nph-item").forEach(function(e){var t=document.createElement("div");c(t,e),t.style.position="absolute",t.style.top="".concat(e.offsetTop,"px"),t.style.left="".concat(e.offsetLeft,"px"),t.style.width="".concat(e.offsetWidth,"px"),t.style.height="".concat(e.offsetHeight,"px"),t.classList.add("ph-item"),i.appendChild(t)}),a.appendChild(i),i}return function(){function n(e){var t=this;if(!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),this.ele=null,this.mask=null,document.querySelector("#new-placeholder-style")||(document.head.insertAdjacentHTML("beforeend",'<style id="new-placeholder-style">'.concat(r,"</style>")),window.addEventListener("resize",function(){a.removeChild(t.mask),t.mask=d(t.ele)})),"object"===i(e)?this.ele=e:"string"==typeof e&&(this.ele=document.querySelector(e)),!this.ele)throw new Error("NewPlaceholder' element must be a html element or an exist selector");this.mask=d(this.ele)}var e,t,o;return e=n,(t=[{key:"showPlaceholder",value:function(e){e?(this.ele.style.visibility="hidden",this.mask.style.display="block"):(this.ele.style.visibility="visible",this.mask.style.display="none")}},{key:"resize",value:function(){this.mask=d(this.ele)}}])&&l(e.prototype,t),o&&l(e,o),n}()});