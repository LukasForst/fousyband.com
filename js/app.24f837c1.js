(function(t){function e(e){for(var a,s,i=e[0],c=e[1],l=e[2],f=0,d=[];f<i.length;f++)s=i[f],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&d.push(o[s][0]),o[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(a=!1)}a&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},o={app:0},r=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("85ec"),o=n.n(a);o.a},"28b0":function(t,e,n){},"402a":function(t,e,n){},"4bbb":function(t,e,n){},"4cd7":function(t,e,n){t.exports=n.p+"img/fousy.bdefa0b3.png"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("link",{attrs:{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"}}),n("link",{attrs:{href:"//fonts.googleapis.com/css?family=Long Cang:300,400,500,700,400italic",rel:"stylesheet"}}),n("Container")],1)},r=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"top-level-container"}},[n("SlideShow"),n("div",{staticClass:"content"},[n("Logo")],1),n("Socials")],1)},i=[],c=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main-container"},[a("div",{staticClass:"item name"},[a("p",[t._v("FOUsY")])]),a("div",{staticClass:"item logo"},[a("img",{attrs:{alt:"Fousy Logo",src:n("4cd7")}})])])}],u={name:"Logo"},f=u,d=(n("a514"),n("2877")),p=Object(d["a"])(f,c,l,!1,null,"25bd9a60",null),b=p.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"socials"},[n("md-button",{staticClass:"social-icon md-fab md-big",attrs:{href:t.facebook,target:"_blank"}},[n("div",{staticClass:"social-icon fa fa-facebook"})]),n("md-button",{staticClass:"social-icon md-fab md-big",attrs:{href:t.instagram,target:"_blank"}},[n("div",{staticClass:"social-icon fa fa-instagram"})]),n("md-button",{staticClass:"social-icon md-fab md-big",attrs:{href:t.youtube,target:"_blank"}},[n("div",{staticClass:"social-icon fa fa-youtube"})]),n("md-button",{staticClass:"social-icon md-fab md-big",attrs:{href:t.email}},[n("div",{staticClass:"social-icon fa fa-envelope-o"})])],1)},v=[],h={name:"Socials",data:function(){return{facebook:"https://www.facebook.com/fousyband/",instagram:"https://www.instagram.com/fousyband/",youtube:"https://www.youtube.com/channel/UCf6j1ffSdmnY6pZ4wyKjx4g",email:"mailto:booking@fousyband.com"}}},g=h,y=(n("f95f"),n("dd27"),Object(d["a"])(g,m,v,!1,null,"6a190ab1",null)),w=y.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"slides-show-container"},[n("div",{staticClass:"slider"},[n("vue-flux",{ref:"slider",attrs:{images:t.vfImages,options:t.vfOptions,transitions:t.vfTransitions},scopedSlots:t._u([{key:"preloader",fn:function(){return[n("flux-preloader")]},proxy:!0}])})],1)])},x=[],j=(n("d81d"),n("d3b7"),n("ddb0"),n("2909")),C=n("fcb2"),O={name:"SlideShow",components:{VueFlux:C["VueFlux"],FluxPreloader:C["FluxPreloader"]},methods:{shuffle:function(t){var e,n,a=t.length;while(0!==a)n=Math.floor(Math.random()*a),a-=1,e=t[a],t[a]=t[n],t[n]=e;return t},getData:function(){return this.shuffle(Object(j["a"])(Array(18).keys()).map((function(t){return"photos/".concat(t+1,".jpg")})))}},data:function(){return{vfOptions:{autoplay:!0},vfImages:this.getData(),vfTransitions:["swipe"]}}},S=O,k=(n("9494"),Object(d["a"])(S,_,x,!1,null,"51abd690",null)),P=k.exports,$={name:"Container",components:{SlideShow:P,Logo:b,Socials:w}},E=$,F=(n("c281"),Object(d["a"])(E,s,i,!1,null,"878ef1ac",null)),M=F.exports,L={name:"App",components:{Container:M}},T=L,A=(n("034f"),Object(d["a"])(T,o,r,!1,null,null,null)),D=A.exports,I=n("43f9"),J=n.n(I);n("51de");a["default"].use(J.a),a["default"].config.productionTip=!1,new a["default"]({render:function(t){return t(D)}}).$mount("#app")},"85ec":function(t,e,n){},9494:function(t,e,n){"use strict";var a=n("28b0"),o=n.n(a);o.a},"9b77":function(t,e,n){},a514:function(t,e,n){"use strict";var a=n("4bbb"),o=n.n(a);o.a},af56:function(t,e,n){},c281:function(t,e,n){"use strict";var a=n("402a"),o=n.n(a);o.a},dd27:function(t,e,n){"use strict";var a=n("af56"),o=n.n(a);o.a},f95f:function(t,e,n){"use strict";var a=n("9b77"),o=n.n(a);o.a}});
//# sourceMappingURL=app.24f837c1.js.map