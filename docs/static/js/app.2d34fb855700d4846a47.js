webpackJsonp([0],{"+MrZ":function(t,n){},"2BgX":function(t,n){t.exports="../../static/img/5.a94af0b.jpg"},"3lFO":function(t,n){t.exports="../../static/img/4.0540d6e.jpg"},"53WL":function(t,n,e){var a={"./1.jpg":"dE1y","./2.jpg":"AsW3","./3.jpg":"iCB0","./4.jpg":"3lFO","./5.jpg":"2BgX"};function o(t){return e(r(t))}function r(t){var n=a[t];if(!(n+1))throw new Error("Cannot find module '"+t+"'.");return n}o.keys=function(){return Object.keys(a)},o.resolve=r,t.exports=o,o.id="53WL"},AsW3:function(t,n){t.exports="../../static/img/2.7229412.jpg"},KRZR:function(t,n){},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("7+uW"),o={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]};var r=e("VU/8")({name:"App"},o,!1,function(t){e("+MrZ")},null,null).exports,i=e("/ocq"),s={name:"TransparentButton",props:{text:String,isLarge:Boolean},data:function(){return{isReady:!1}},methods:{clickBtn:function(){this.$emit("btnClicked")}}},c={render:function(){var t=this,n=t.$createElement;return(t._self._c||n)("button",{class:{"ready-button":t.isReady,large:t.isLarge},on:{click:t.clickBtn,mouseenter:function(n){t.isReady=!0},mouseout:function(n){t.isReady=!1}}},[t._v("\n    "+t._s(t.text)+"\n")])},staticRenderFns:[]};var u=e("VU/8")(s,c,!1,function(t){e("qTnX")},"data-v-406ca36c",null).exports,l={name:"ImageBlock",props:{imageName:String,product:Object},data:function(){return{isReady:!1}},components:{"transparent-button":u}},p={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"image-block"},[n("img",{attrs:{src:e("53WL")("./"+this.imageName+".jpg"),alt:"."}}),this._v(" "),n("div",{staticClass:"blur"}),this._v(" "),n("div",{staticClass:"product-info"},[n("h2",[this._v(this._s(this.product.name))]),this._v(" "),n("transparent-button",{attrs:{text:"Buy"}})],1)])},staticRenderFns:[]};var d={name:"Main",data:function(){return{height:document.documentElement.clientHeight,scrollTop:window.pageYOffset,products:[{name:"Product 1"},{name:"Product 2"},{name:"Product 3"},{name:"Product 4"},{name:"Product 5"}]}},mounted:function(){var t=this;window.onscroll=function(){t.scrollTop=window.pageYOffset||document.documentElement.scrollTop}},methods:{animateScrollBy:function(t){var n=t>0?this.scrollTop:0,e=t/Math.abs(t),a=10*Math.ceil(t/this.height),o=Math.floor(Math.pow(t/2,2))/a,r=setInterval(function(){n>=Math.abs(t)&&clearInterval(r),window.scrollBy(0,e);var i=(n+=Math.abs(e))-Math.abs(t)/2,s=Math.floor(Math.pow(i,2));e=a-(t>0?Math.floor(s/o):Math.ceil(s/o))},5)}},components:{"image-block":e("VU/8")(l,p,!1,function(t){e("KRZR")},"data-v-10ff9622",null).exports,"transparent-button":u}},m={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"main"},[e("div",{staticClass:"links"},t._l(t.products,function(n,a){return e("transparent-button",{attrs:{text:n.name,isLarge:!0},on:{btnClicked:function(n){t.animateScrollBy(a*t.height)}}})})),t._v(" "),e("div",{staticClass:"logo"},[t._v("\n    YOUR LOGO\n  ")]),t._v(" "),t.scrollTop>=t.height?e("div",{staticClass:"scroll-back"},[e("transparent-button",{attrs:{text:"Go up"},on:{btnClicked:function(n){t.animateScrollBy(-t.scrollTop)}}})],1):t._e(),t._v(" "),t._l(t.products,function(t,n){return e("image-block",{attrs:{imageName:String(n+1),product:t}})})],2)},staticRenderFns:[]};var f=e("VU/8")(d,m,!1,function(t){e("ztBm")},"data-v-5e38e664",null).exports;a.a.use(i.a);var h=new i.a({mode:"history",routes:[{path:"/",name:"main",component:f}]});a.a.config.productionTip=!1,new a.a({el:"#app",router:h,components:{App:r},template:"<App/>"})},dE1y:function(t,n){t.exports="../../static/img/1.df2894a.jpg"},iCB0:function(t,n){t.exports="../../static/img/3.4acdb8c.jpg"},qTnX:function(t,n){},ztBm:function(t,n){}},["NHnr"]);
//# sourceMappingURL=app.2d34fb855700d4846a47.js.map