(this["webpackJsonpib-front"]=this["webpackJsonpib-front"]||[]).push([[2],{125:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function n(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}return function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}}(),i=e(0),o=u(i),a=u(e(19)),c=u(e(6));function u(n){return n&&n.__esModule?n:{default:n}}function f(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function l(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?n:t}var d=function(n){function t(){var n,e,r;f(this,t);for(var i=arguments.length,o=Array(i),a=0;a<i;a++)o[a]=arguments[a];return e=r=l(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this].concat(o))),r.state={isSticky:!1,wasSticky:!1,style:{}},r.handleContainerEvent=function(n){var t=n.distanceFromTop,e=n.distanceFromBottom,i=n.eventSource,o=r.context.getParent(),a=!1;r.props.relative&&(a=i!==o,t=-(i.scrollTop+i.offsetTop)+r.placeholder.offsetTop);var c=r.placeholder.getBoundingClientRect(),u=r.content.getBoundingClientRect().height,f=e-r.props.bottomOffset-u,l=!!r.state.isSticky,d=a?l:t<=-r.props.topOffset&&e>-r.props.bottomOffset;e=(r.props.relative?o.scrollHeight-o.scrollTop:e)-u;var s=d?{position:"fixed",top:f>0?r.props.relative?o.offsetTop-o.offsetParent.scrollTop:0:f,left:c.left,width:c.width}:{};r.props.disableHardwareAcceleration||(s.transform="translateZ(0)"),r.setState({isSticky:d,wasSticky:l,distanceFromTop:t,distanceFromBottom:e,calculatedHeight:u,style:s})},l(r,e)}return function(n,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):n.__proto__=t)}(t,n),r(t,[{key:"componentWillMount",value:function(){if(!this.context.subscribe)throw new TypeError("Expected Sticky to be mounted within StickyContainer");this.context.subscribe(this.handleContainerEvent)}},{key:"componentWillUnmount",value:function(){this.context.unsubscribe(this.handleContainerEvent)}},{key:"componentDidUpdate",value:function(){this.placeholder.style.paddingBottom=this.props.disableCompensation?0:(this.state.isSticky?this.state.calculatedHeight:0)+"px"}},{key:"render",value:function(){var n=this,t=o.default.cloneElement(this.props.children({isSticky:this.state.isSticky,wasSticky:this.state.wasSticky,distanceFromTop:this.state.distanceFromTop,distanceFromBottom:this.state.distanceFromBottom,calculatedHeight:this.state.calculatedHeight,style:this.state.style}),{ref:function(t){n.content=a.default.findDOMNode(t)}});return o.default.createElement("div",null,o.default.createElement("div",{ref:function(t){return n.placeholder=t}}),t)}}]),t}(i.Component);d.propTypes={topOffset:c.default.number,bottomOffset:c.default.number,relative:c.default.bool,children:c.default.func.isRequired},d.defaultProps={relative:!1,topOffset:0,bottomOffset:0,disableCompensation:!1,disableHardwareAcceleration:!1},d.contextTypes={subscribe:c.default.func,unsubscribe:c.default.func,getParent:c.default.func},t.default=d},126:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n},i=function(){function n(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}return function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}}(),o=e(0),a=f(o),c=f(e(6)),u=f(e(127));function f(n){return n&&n.__esModule?n:{default:n}}function l(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function d(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?n:t}var s=function(n){function t(){var n,e,r;l(this,t);for(var i=arguments.length,o=Array(i),a=0;a<i;a++)o[a]=arguments[a];return e=r=d(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this].concat(o))),r.events=["resize","scroll","touchstart","touchmove","touchend","pageshow","load"],r.subscribers=[],r.rafHandle=null,r.subscribe=function(n){r.subscribers=r.subscribers.concat(n)},r.unsubscribe=function(n){r.subscribers=r.subscribers.filter((function(t){return t!==n}))},r.notifySubscribers=function(n){if(!r.framePending){var t=n.currentTarget;r.rafHandle=(0,u.default)((function(){r.framePending=!1;var n=r.node.getBoundingClientRect(),e=n.top,i=n.bottom;r.subscribers.forEach((function(n){return n({distanceFromTop:e,distanceFromBottom:i,eventSource:t===window?document.body:r.node})}))})),r.framePending=!0}},r.getParent=function(){return r.node},d(r,e)}return function(n,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):n.__proto__=t)}(t,n),i(t,[{key:"getChildContext",value:function(){return{subscribe:this.subscribe,unsubscribe:this.unsubscribe,getParent:this.getParent}}},{key:"componentDidMount",value:function(){var n=this;this.events.forEach((function(t){return window.addEventListener(t,n.notifySubscribers)}))}},{key:"componentWillUnmount",value:function(){var n=this;this.rafHandle&&(u.default.cancel(this.rafHandle),this.rafHandle=null),this.events.forEach((function(t){return window.removeEventListener(t,n.notifySubscribers)}))}},{key:"render",value:function(){var n=this;return a.default.createElement("div",r({},this.props,{ref:function(t){return n.node=t},onScroll:this.notifySubscribers,onTouchStart:this.notifySubscribers,onTouchMove:this.notifySubscribers,onTouchEnd:this.notifySubscribers}))}}]),t}(o.PureComponent);s.childContextTypes={subscribe:c.default.func,unsubscribe:c.default.func,getParent:c.default.func},t.default=s},127:function(n,t,e){(function(t){for(var r=e(128),i="undefined"===typeof window?t:window,o=["moz","webkit"],a="AnimationFrame",c=i["request"+a],u=i["cancel"+a]||i["cancelRequest"+a],f=0;!c&&f<o.length;f++)c=i[o[f]+"Request"+a],u=i[o[f]+"Cancel"+a]||i[o[f]+"CancelRequest"+a];if(!c||!u){var l=0,d=0,s=[];c=function(n){if(0===s.length){var t=r(),e=Math.max(0,16.666666666666668-(t-l));l=e+t,setTimeout((function(){var n=s.slice(0);s.length=0;for(var t=0;t<n.length;t++)if(!n[t].cancelled)try{n[t].callback(l)}catch(e){setTimeout((function(){throw e}),0)}}),Math.round(e))}return s.push({handle:++d,callback:n,cancelled:!1}),d},u=function(n){for(var t=0;t<s.length;t++)s[t].handle===n&&(s[t].cancelled=!0)}}n.exports=function(n){return c.call(i,n)},n.exports.cancel=function(){u.apply(i,arguments)},n.exports.polyfill=function(n){n||(n=i),n.requestAnimationFrame=c,n.cancelAnimationFrame=u}}).call(this,e(28))},128:function(n,t,e){(function(t){(function(){var e,r,i,o,a,c;"undefined"!==typeof performance&&null!==performance&&performance.now?n.exports=function(){return performance.now()}:"undefined"!==typeof t&&null!==t&&t.hrtime?(n.exports=function(){return(e()-a)/1e6},r=t.hrtime,o=(e=function(){var n;return 1e9*(n=r())[0]+n[1]})(),c=1e9*t.uptime(),a=o-c):Date.now?(n.exports=function(){return Date.now()-i},i=Date.now()):(n.exports=function(){return(new Date).getTime()-i},i=(new Date).getTime())}).call(this)}).call(this,e(29))},47:function(n,t,e){"use strict";e.d(t,"a",(function(){return i}));var r=e(48);function i(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(n)){var e=[],r=!0,i=!1,o=void 0;try{for(var a,c=n[Symbol.iterator]();!(r=(a=c.next()).done)&&(e.push(a.value),!t||e.length!==t);r=!0);}catch(u){i=!0,o=u}finally{try{r||null==c.return||c.return()}finally{if(i)throw o}}return e}}(n,t)||Object(r.a)(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},48:function(n,t,e){"use strict";e.d(t,"a",(function(){return i}));var r=e(49);function i(n,t){if(n){if("string"===typeof n)return Object(r.a)(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?Object(r.a)(n,t):void 0}}},49:function(n,t,e){"use strict";function r(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}e.d(t,"a",(function(){return r}))},55:function(n,t,e){"use strict";e.d(t,"a",(function(){return u}));var r=e(0);function i(){return(i=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n}).apply(this,arguments)}function o(n,t){if(null==n)return{};var e,r,i=function(n,t){if(null==n)return{};var e,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)e=o[r],t.indexOf(e)>=0||(i[e]=n[e]);return i}(n,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)e=o[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(i[e]=n[e])}return i}var a=r.createElement("path",{fill:"currentColor",d:"M26 4h-20c-2.209 0-4 1.791-4 4v12c0 2.209 1.791 4 4 4h2v5.040c0.016 0.54 0.457 0.972 1 0.972 0.209 0 0.403-0.064 0.564-0.174l8.437-5.838h8c2.209 0 4-1.791 4-4v-12c0-2.209-1.791-4-4-4z"});function c(n,t){var e=n.title,c=n.titleId,u=o(n,["title","titleId"]);return r.createElement("svg",i({id:"icon-comments-mini",viewBox:"0 0 32 32",ref:t,"aria-labelledby":c},u),e?r.createElement("title",{id:c},e):null,a)}var u=r.forwardRef(c);e.p},57:function(n,t,e){"use strict";e.d(t,"g",(function(){return O})),e.d(t,"c",(function(){return j})),e.d(t,"h",(function(){return k})),e.d(t,"k",(function(){return E})),e.d(t,"f",(function(){return S})),e.d(t,"j",(function(){return z})),e.d(t,"i",(function(){return C})),e.d(t,"e",(function(){return P})),e.d(t,"d",(function(){return T})),e.d(t,"n",(function(){return _})),e.d(t,"m",(function(){return M})),e.d(t,"p",(function(){return F})),e.d(t,"o",(function(){return H})),e.d(t,"l",(function(){return I})),e.d(t,"b",(function(){return A})),e.d(t,"a",(function(){return B}));var r=e(9),i=e(8),o=e(12);function a(){var n=Object(r.a)(["\n  color: #2c2d30;\n  display: block;\n  text-align: center;\n  margin-left: 16px !important;\n  font-weight: 400;\n  font-size: 15px;\n  line-height: 24px;\n  @media only screen and (max-width: 1024px){\n    font-size: 14px;\n    line-height: 20px;\n  }\n\n  p{\n    font-size: 13px;\n    line-height: 18px;\n    font-weight: 400;\n    color: rgba(80,102,123,.5);\n    white-space: nowrap;\n    margin: 0;\n    @media only screen and (max-width: 1024px){\n      font-size: 12px;\n      line-height: 16px;\n    } \n  }\n  @media only screen and (max-width: 768px){\n    display: none;\n  }\n"]);return a=function(){return n},n}function c(){var n=Object(r.a)(["\n  color: #08d092;\n  width: fit-content;\n  display: block;\n  p{\n    width: fit-content;\n    margin: 0 auto;\n    font-weight: 400;\n    font-size: 15px;\n    line-height: 24px;\n  }\n  \n  @media only screen and (max-width: 1024px){\n    p{\n      font-size: 14px;\n      line-height: 20px;\n    }\n    \n  }\n\n"]);return c=function(){return n},n}function u(){var n=Object(r.a)(["\n  font-size: 13px;\n  line-height: 18px;\n  font-weight: 400;\n  color: rgba(80,102,123,.5);\n  margin: 0;\n  @media only screen and (max-width: 1024px){\n    font-size: 12px;\n    line-height: 16px;\n  }\n"]);return u=function(){return n},n}function f(){var n=Object(r.a)(["\n  font-size: 14px;\n  line-height: 20px;\n  color: #50667b;\n  font-weight: 400;\n  margin: 0;\n  @media only screen and (max-width: 1024px){\n    font-size: 14px;\n    line-height: 18px;\n  }\n"]);return f=function(){return n},n}function l(){var n=Object(r.a)(["\n  margin: 0;\n  @media only screen and (max-width: 1024px){\n    margin-right: 16px;\n  }\n"]);return l=function(){return n},n}function d(){var n=Object(r.a)(["\n  width:34px;\n  margin-right: 16px!important;\n  overflow: hidden;\n  border-radius: 50%;  \n  img{\n    width: 100%;\n  }\n"]);return d=function(){return n},n}function s(){var n=Object(r.a)(["\n  width: 235px;\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  justify-content: flex-start;\n  @media only screen and (max-width: 768px){\n    display: none;\n  }\n"]);return s=function(){return n},n}function p(){var n=Object(r.a)(["\n  width: 40%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-direction: row;\n  @media only screen and (max-width: 768px){\n    justify-content: flex-end;\n    width: 30%;\n  }\n"]);return p=function(){return n},n}function h(){var n=Object(r.a)(["\n  margin: 0;\n"]);return h=function(){return n},n}function b(){var n=Object(r.a)(["\n  text-decoration: none;\n  color: rgba(80,102,123,.5);\n  &:hover, &:visited, &:active{\n    color: rgba(80,102,123,.5);\n  }\n"]);return b=function(){return n},n}function m(){var n=Object(r.a)(["\n  margin-right: 16px !important;\n  margin-bottom: 0;\n  height: fit-content;\n  display: flex;\n  flex-wrap: wrap;\n  small {\n    margin-right: 5px;\n    font-size: 13px;\n    line-height: 20px;\n    font-weight: 400;\n  }\n"]);return m=function(){return n},n}function x(){var n=Object(r.a)(["\n  display: flex;\n  font-size: 13px;\n  line-height: 18px;\n  font-weight: 400;\n  color: rgba(80,102,123,.5);\n  margin: 0;\n  @media only screen and (max-width: 1024px){\n    font-size: 12px;\n    line-height: 16px;\n    flex-direction: column;\n  }\n"]);return x=function(){return n},n}function v(){var n=Object(r.a)(["\n  font-size: 17px;\n  font-weight: 500;\n  height: fit-content;\n  display: flex;\n  margin: 0;\n  @media only screen and (max-width: 1024px){\n    font-size: 15px;\n    line-height: 20px;\n  }\n"]);return v=function(){return n},n}function g(){var n=Object(r.a)(["\n  width: 15px;\n  margin-right: 8px !important;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  svg{\n    height: ",";\n  }\n"]);return g=function(){return n},n}function y(){var n=Object(r.a)(["\n  width: 60%;\n  \n  @media only screen and (max-width: 768px){\n    width: 70%;\n  }\n"]);return y=function(){return n},n}function w(){var n=Object(r.a)(["\n  width: 100%;\n  padding: 17px 0!important;\n  display: flex;\n  border-bottom: 1px solid rgba(164,175,221,.2);\n  color:#818181;\n  &:hover{\n    color: black;\n  }\n"]);return w=function(){return n},n}var O=Object(i.a)(o.Link)(w()),j=i.a.div(y()),k=i.a.span(g(),(function(n){return n.pin?"15px":"10px"})),E=i.a.p(v()),S=i.a.div(x()),z=i.a.p(m()),C=i.a.a(b()),P=i.a.p(h()),T=i.a.div(p()),_=i.a.div(s()),M=i.a.div(d()),F=i.a.div(l()),H=i.a.p(f()),I=i.a.p(u()),A=i.a.div(c()),B=i.a.div(a())},58:function(n,t,e){"use strict";e.d(t,"d",(function(){return v})),e.d(t,"k",(function(){return g})),e.d(t,"b",(function(){return y})),e.d(t,"a",(function(){return w})),e.d(t,"e",(function(){return O})),e.d(t,"f",(function(){return j})),e.d(t,"l",(function(){return k})),e.d(t,"c",(function(){return E})),e.d(t,"j",(function(){return S})),e.d(t,"h",(function(){return z})),e.d(t,"g",(function(){return C})),e.d(t,"i",(function(){return P}));var r=e(9),i=e(8),o=e(12);function a(){var n=Object(r.a)(["\n  font-size: 14px;\n  font-weight: 400;\n  @media only screen and (max-width: 1024px){\n    font-size: 12px;\n  }\n"]);return a=function(){return n},n}function c(){var n=Object(r.a)(["\n  color: #DCE0E5;\n  margin-right: 3px;\n  svg{\n    height: 16px;\n  }\n\n"]);return c=function(){return n},n}function u(){var n=Object(r.a)(["\n  height: 16px;\n  display:flex;\n  align-items: center;\n  margin-right: 16px;\n\n"]);return u=function(){return n},n}function f(){var n=Object(r.a)(["\n  width: 100%;\n  display:flex;\n  font-size: 13px;\n  line-height: 18px;\n  font-weight: 400;\n"]);return f=function(){return n},n}function l(){var n=Object(r.a)(["\n  width: 100%;\n  font-size: 13px;\n  line-height: 18px;\n  font-weight: 400;\n  margin: 5px 0 15px;\n  color: black;\n  opacity: .5;\n  cursor: pointer;\n  &:hover {\n    opacity: 1;\n  }\n  @media only screen and (max-width: 1024px){\n    font-size: 12px;\n    line-height: 16px;\n  }\n"]);return l=function(){return n},n}function d(){var n=Object(r.a)(["\n  width: 100%;\n  font-weight: 500;\n  font-size: 17px;\n  line-height: 24px;\n  cursor: pointer;\n  color: #3F5368;\n  @media only screen and (max-width: 1024px){\n    font-size: 15px;\n  }\n"]);return d=function(){return n},n}function s(){var n=Object(r.a)(["\n  font-size: 12px;\n  color: black;\n  @media only screen and (max-width: 1024px){\n    font-size: 10px;\n  }\n"]);return s=function(){return n},n}function p(){var n=Object(r.a)(["\n  width: ",";\n  @media only screen and (max-width: 1024px){\n    width: 100%; \n  }\n"]);return p=function(){return n},n}function h(){var n=Object(r.a)(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  transition-duration: .2s;\n  background-color: transparent;\n  border-radius: 5px;\n  &:hover{\n    background-color: rgba(80, 102, 123, 0.4);  \n  }\n"]);return h=function(){return n},n}function b(){var n=Object(r.a)(["\n  width: fit-content;\n  padding: 8px 16px;\n  background-color: #00E4E3;\n  font-size: 12px;\n  font-weight: 500;\n  border-radius: 4px;\n  position: absolute;\n  top: 8px;\n  left: -8px;\n  color: white;\n  transition-duration: .2s;\n  span {\n    text-transform: uppercase;\n  }\n"]);return b=function(){return n},n}function m(){var n=Object(r.a)(["\n  width: ",";\n  height:fit-content;\n  margin-bottom: 16px;\n  border-radius: 5px;\n  position: relative;\n  background-color: rgba(80, 102, 123, 0.4);\n  margin-right: 16px;\n  img {\n    width: 100%;\n    border-radius: 5px;\n  }\n  \n  &:hover {\n    .till {\n      left: 8px;\n    }\n  }\n  @media only screen and (max-width: 1024px){\n    width: 100%; \n  }\n"]);return m=function(){return n},n}function x(){var n=Object(r.a)(["\n  width: ",";\n  height: ",";\n  display: ",";\n  padding-bottom: ",";\n  margin: 0;\n  cursor: pointer;\n  \n  @media only screen and (max-width: 1024px){\n    display: block;\n    padding-bottom: 15px;\n  }\n  @media only screen and (max-width: 768px){\n    width: 100%;\n  }\n  \n"]);return x=function(){return n},n}var v=Object(i.a)(o.Link)(x(),(function(n){return n.fullWidth?"100%":"49%"}),(function(n){return n.fullWidth?"50%":"fit-content"}),(function(n){return n.mainFirstCard?"block":"flex"}),(function(n){return n.mainFirstCard?"15px":"20px"})),g=i.a.div(m(),(function(n){return n.mainFirstCard?"100%":"50%"})),y=i.a.div(b()),w=i.a.div(h()),O=i.a.div(p(),(function(n){return n.mainFirstCard?"100%":"50%"})),j=i.a.div(s()),k=i.a.div(d()),E=i.a.div(l()),S=i.a.div(f()),z=i.a.div(u()),C=i.a.div(c()),P=i.a.div(a())},59:function(n,t,e){"use strict";e.d(t,"a",(function(){return f}));var r=e(0);function i(){return(i=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n}).apply(this,arguments)}function o(n,t){if(null==n)return{};var e,r,i=function(n,t){if(null==n)return{};var e,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)e=o[r],t.indexOf(e)>=0||(i[e]=n[e]);return i}(n,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)e=o[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(i[e]=n[e])}return i}var a=r.createElement("path",{fill:"currentColor",d:"M30 15.5c-0.316-0.992-1.044-1.772-1.977-2.152-1.834-0.719-3.289-1.391-4.702-2.132 3.299-4.916 2.859-7.436 2.519-8.076-0.304-0.633-0.913-1.077-1.632-1.139-0.123-0.020-0.257-0.031-0.393-0.031-1.095 0-2.021 0.721-2.33 1.713-0.93 1.647-1.956 3.056-3.122 4.336-2.603 2.501-7.523 3.861-10.223 5.741-0.084 0.044-0.14 0.131-0.14 0.231 0 0.003 0 0.007 0 0.010v12.34c0.006 0.079 0.053 0.145 0.119 0.179 3.95 2.017 8.586 3.28 13.496 3.479l0.385 0.002c0.848-0.048 1.578-0.512 1.994-1.189 0.864-1.41 1.727-3.065 2.48-4.779 0.775-2.034 1.447-3.49 2.206-4.893 0.787-0.679 1.336-1.899 1.336-3.248 0-0.138-0.006-0.274-0.017-0.409z"}),c=r.createElement("path",{fill:"currentColor",d:"M4 12.5c-0.045-0.004-0.097-0.006-0.15-0.006-0.959 0-1.748 0.726-1.849 1.658l-0.001 11.668c0.101 0.94 0.891 1.666 1.85 1.666 0.053 0 0.105-0.002 0.157-0.007 0.038 0.004 0.091 0.007 0.143 0.007 0.959 0 1.748-0.726 1.849-1.658l0.001-11.668c-0.101-0.94-0.891-1.666-1.85-1.666-0.053 0-0.105 0.002-0.157 0.007z"});function u(n,t){var e=n.title,u=n.titleId,f=o(n,["title","titleId"]);return r.createElement("svg",i({id:"icon-like-mini",viewBox:"0 0 32 32",ref:t,"aria-labelledby":u},f),e?r.createElement("title",{id:u},e):null,a,c)}var f=r.forwardRef(u);e.p},60:function(n,t,e){"use strict";e.d(t,"a",(function(){return u}));var r=e(0);function i(){return(i=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n}).apply(this,arguments)}function o(n,t){if(null==n)return{};var e,r,i=function(n,t){if(null==n)return{};var e,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)e=o[r],t.indexOf(e)>=0||(i[e]=n[e]);return i}(n,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)e=o[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(i[e]=n[e])}return i}var a=r.createElement("path",{fill:"currentColor",d:"M440.667 182.109l7.143-40c1.313-7.355-4.342-14.109-11.813-14.109h-74.81l14.623-81.891C377.123 38.754 371.468 32 363.997 32h-40.632a12 12 0 0 0-11.813 9.891L296.175 128H197.54l14.623-81.891C213.477 38.754 207.822 32 200.35 32h-40.632a12 12 0 0 0-11.813 9.891L132.528 128H53.432a12 12 0 0 0-11.813 9.891l-7.143 40C33.163 185.246 38.818 192 46.289 192h74.81L98.242 320H19.146a12 12 0 0 0-11.813 9.891l-7.143 40C-1.123 377.246 4.532 384 12.003 384h74.81L72.19 465.891C70.877 473.246 76.532 480 84.003 480h40.632a12 12 0 0 0 11.813-9.891L151.826 384h98.634l-14.623 81.891C234.523 473.246 240.178 480 247.65 480h40.632a12 12 0 0 0 11.813-9.891L315.472 384h79.096a12 12 0 0 0 11.813-9.891l7.143-40c1.313-7.355-4.342-14.109-11.813-14.109h-74.81l22.857-128h79.096a12 12 0 0 0 11.813-9.891zM261.889 320h-98.634l22.857-128h98.634l-22.857 128z"});function c(n,t){var e=n.title,c=n.titleId,u=o(n,["title","titleId"]);return r.createElement("svg",i({focusable:"false",className:"svg-inline--fa fa-hashtag fa-w-14",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",ref:t,"aria-labelledby":c},u),e?r.createElement("title",{id:c},e):null,a)}var u=r.forwardRef(c);e.p},61:function(n,t,e){"use strict";e.d(t,"a",(function(){return d}));var r=e(0);function i(){return(i=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n}).apply(this,arguments)}function o(n,t){if(null==n)return{};var e,r,i=function(n,t){if(null==n)return{};var e,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)e=o[r],t.indexOf(e)>=0||(i[e]=n[e]);return i}(n,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)e=o[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(i[e]=n[e])}return i}var a=r.createElement("path",{fill:"currentColor",d:"M18 8c0 3.314-2.686 6-6 6s-6-2.686-6-6c0-3.314 2.686-6 6-6s6 2.686 6 6z"}),c=r.createElement("path",{fill:"currentColor",d:"M28 12c0 2.209-1.791 4-4 4s-4-1.791-4-4c0-2.209 1.791-4 4-4s4 1.791 4 4z"}),u=r.createElement("path",{fill:"currentColor",d:"M12 16c-5.523 0-10 4.477-10 10v2c0 1.105 0.895 2 2 2h16c1.105 0 2-0.895 2-2v-2c0-5.523-4.477-10-10-10z"}),f=r.createElement("path",{fill:"currentColor",d:"M24 18c-0.94 0.006-1.826 0.227-2.615 0.616 1.636 1.999 2.607 4.578 2.615 7.382v2.002h4c1.105 0 2-0.895 2-2v-2c0-3.314-2.686-6-6-6z"});function l(n,t){var e=n.title,l=n.titleId,d=o(n,["title","titleId"]);return r.createElement("svg",i({id:"icon-group-mini",viewBox:"0 0 32 32",ref:t,"aria-labelledby":l},d),e?r.createElement("title",{id:l},e):null,a,c,u,f)}var d=r.forwardRef(l);e.p},69:function(n,t,e){"use strict";e.d(t,"p",(function(){return S})),e.d(t,"m",(function(){return z})),e.d(t,"q",(function(){return C})),e.d(t,"o",(function(){return P})),e.d(t,"n",(function(){return T})),e.d(t,"r",(function(){return _})),e.d(t,"j",(function(){return M})),e.d(t,"h",(function(){return F})),e.d(t,"i",(function(){return H})),e.d(t,"l",(function(){return I})),e.d(t,"k",(function(){return A})),e.d(t,"b",(function(){return B})),e.d(t,"a",(function(){return R})),e.d(t,"c",(function(){return L})),e.d(t,"g",(function(){return D})),e.d(t,"d",(function(){return q})),e.d(t,"e",(function(){return W})),e.d(t,"f",(function(){return U}));var r=e(9),i=e(8),o=e(58),a=e(57),c=e(88);function u(){var n=Object(r.a)(["\n  font-size: 13px;\n  line-height: 18px;\n  font-weight: 400;\n  text-align: center;\n  color: rgba(80,102,123,.5);\n"]);return u=function(){return n},n}function f(){var n=Object(r.a)(["\n  margin-bottom: 8px;\n  img{\n    width: 64px;\n    height: 64px;\n    margin: auto;\n    display: block;\n    border-radius: 50%;\n  }\n"]);return f=function(){return n},n}function l(){var n=Object(r.a)(["\n  width: 33.3333333%;\n  padding: 0 16px 32px;\n  @media only screen and (max-width:768px){\n    width:25%\n  }\n  @media only screen and (max-width:425px){\n    width:33.333333333%\n  }\n"]);return l=function(){return n},n}function d(){var n=Object(r.a)(["\n  display: flex;\n  flex-wrap: wrap;\n"]);return d=function(){return n},n}function s(){var n=Object(r.a)(["\n  font-size: 24px;\n  line-height: 32px;\n  color: #50667b;\n  padding: 32px 16px;\n  margin-bottom: 0;\n  \n  @media only screen and (max-width:1024px){\n    font-size: 20px;\n    line-height: 28px;\n  }\n  \n"]);return s=function(){return n},n}function p(){var n=Object(r.a)(["\n  width: 100%;\n  margin: auto;\n  background-color: #f4f5fa;\n  max-height: 450px;\n  overflow-y: auto;\n  overflow-x: hidden;\n  border-radius: 4px;\n  //top: 24px !important;\n\n"]);return p=function(){return n},n}function h(){var n=Object(r.a)(["\n  width: 37%;\n  @media only screen and (max-width:768px){\n    width:100%\n  }\n"]);return h=function(){return n},n}function b(){var n=Object(r.a)(["\n  color: rgba(80,102,123,.5);\n"]);return b=function(){return n},n}function m(){var n=Object(r.a)(["\n  margin-bottom: 16px;\n  font-size: 15px;\n  font-weight: 400;\n  line-height: 24px;\n  color: #3f5368;\n  strong{\n    margin-bottom: 8px;\n    display: inline-block;\n    font-weight: 700;\n  }\n \n"]);return m=function(){return n},n}function x(){var n=Object(r.a)(["\n  margin-right: 8px;\n  width: 24px;\n  height: 24px;\n  overflow: hidden;\n  border-radius: 50%;\n  img{\n    width: 100%;\n  }\n"]);return x=function(){return n},n}function v(){var n=Object(r.a)(["\n  width: fit-content;\n  margin: 10px 32px 10px 0;\n  display: inline-flex;\n  align-items: center;\n"]);return v=function(){return n},n}function g(){var n=Object(r.a)(["\n  width: fit-content;\n  line-height: unset;\n  margin-right: 32px;\n"]);return g=function(){return n},n}function y(){var n=Object(r.a)(["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n  white-space: nowrap;\n  padding: 32px 0 40px;\n  flex-wrap: wrap;\n  div:nth-child(3){\n    width: fit-content;\n  }\n"]);return y=function(){return n},n}function w(){var n=Object(r.a)(["\n  text-decoration: none;\n  width: 40px;\n  padding: 2px 8px;\n  background-color: ",";\n  color: white;\n  border-radius: 4px;\n  margin-right: 8px;\n  &:hover{\n    color:white\n  }\n"]);return w=function(){return n},n}function O(){var n=Object(r.a)(["\n  display: flex;\n"]);return O=function(){return n},n}function j(){var n=Object(r.a)(["\n  margin-bottom: 32px;\n  font-weight: 500;\n  font-size: 34px;\n  line-height: 44px;\n  color:  #3f5368; //#50667b;\n  \n  @media only screen and (max-width: 1024px){\n    font-size: 24px;\n    line-height: 32px;\n  }\n  \n"]);return j=function(){return n},n}function k(){var n=Object(r.a)(["\n  width: 63%;\n  @media only screen and (max-width:768px){\n    width:100%\n  }\n"]);return k=function(){return n},n}function E(){var n=Object(r.a)(["\n  padding: 24px 32px;\n  display: flex;\n  @media only screen and (max-width:1024px){\n    padding: 12px 16px;\n  }\n  \n  @media only screen and (max-width:768px){\n    flex-direction: column;\n  }\n"]);return E=function(){return n},n}var S=i.a.div(E()),z=i.a.div(k()),C=i.a.p(j()),P=i.a.div(O()),T=i.a.a(w(),(function(n){return n.bgColor})),_=i.a.div(y()),M=Object(i.a)(o.f)(g()),F=Object(i.a)(o.c)(v()),H=i.a.div(x()),I=i.a.p(m()),A=Object(i.a)(a.j)(b()),B=Object(i.a)(c.StickyContainer)(h()),R=i.a.div(p()),L=i.a.p(s()),D=i.a.div(d()),q=i.a.div(l()),W=i.a.div(f()),U=i.a.p(u())},88:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.StickyContainer=t.Sticky=void 0;var r=o(e(125)),i=o(e(126));function o(n){return n&&n.__esModule?n:{default:n}}t.Sticky=r.default,t.StickyContainer=i.default,t.default=r.default}}]);
//# sourceMappingURL=2.90b35dc0.chunk.js.map