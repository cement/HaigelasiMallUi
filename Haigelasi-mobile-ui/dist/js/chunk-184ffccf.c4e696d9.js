(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-184ffccf"],{"0a26":function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a("ad06"),i=a("9884"),r=a("ea8e"),s=function(e){var t=e.parent,a=e.bem,s=e.role;return{mixins:[Object(i["a"])(t)],props:{name:null,value:null,disabled:Boolean,iconSize:[Number,String],checkedColor:String,labelPosition:String,labelDisabled:Boolean,shape:{type:String,default:"round"},bindGroup:{type:Boolean,default:!0}},computed:{disableBindRelation:function(){return!this.bindGroup},isDisabled:function(){return this.parent&&this.parent.disabled||this.disabled},iconStyle:function(){var e=this.checkedColor||this.parent&&this.parent.checkedColor;if(e&&this.checked&&!this.isDisabled)return{borderColor:e,backgroundColor:e}},tabindex:function(){return this.isDisabled||"radio"===s&&!this.checked?-1:0}},methods:{onClick:function(e){var t=e.target,a=this.$refs.icon,n=a===t||a.contains(t);this.isDisabled||!n&&this.labelDisabled||this.toggle(),this.$emit("click",e)},genIcon:function(){var e=this.$createElement,t=this.checked,i=this.iconSize||this.parent&&this.parent.iconSize;return e("div",{ref:"icon",class:a("icon",[this.shape,{disabled:this.isDisabled,checked:t}]),style:{fontSize:Object(r["a"])(i)}},[this.slots("icon",{checked:t})||e(n["a"],{attrs:{name:"success"},style:this.iconStyle})])},genLabel:function(){var e=this.$createElement,t=this.slots();if(t)return e("span",{class:a("label",[this.labelPosition,{disabled:this.isDisabled}])},[t])}},render:function(){var e=arguments[0],t=[this.genIcon()];return"left"===this.labelPosition?t.unshift(this.genLabel()):t.push(this.genLabel()),e("div",{attrs:{role:s,tabindex:this.tabindex,"aria-checked":String(this.checked)},class:a({disabled:this.isDisabled,"label-disabled":this.labelDisabled}),on:{click:this.onClick}},[t])}}}},"0fee":function(e,t,a){},2381:function(e,t,a){},3647:function(e,t,a){"use strict";a("68ef"),a("9d70"),a("3743"),a("1a04"),a("5c56"),a("0fee")},"3acc":function(e,t,a){"use strict";var n=a("d282"),i=a("9884"),r=Object(n["a"])("checkbox-group"),s=r[0],o=r[1];t["a"]=s({mixins:[Object(i["b"])("vanCheckbox")],props:{max:[Number,String],disabled:Boolean,iconSize:[Number,String],checkedColor:String,value:{type:Array,default:function(){return[]}}},watch:{value:function(e){this.$emit("change",e)}},methods:{toggleAll:function(e){if(!1!==e){var t=this.children;e||(t=t.filter((function(e){return!e.checked})));var a=t.map((function(e){return e.name}));this.$emit("input",a)}else this.$emit("input",[])}},render:function(){var e=arguments[0];return e("div",{class:o()},[this.slots()])}})},"3b42":function(e,t,a){},"3c32":function(e,t,a){"use strict";a("68ef"),a("9d70"),a("3743"),a("2381")},"417e":function(e,t,a){"use strict";var n=a("d282"),i=a("0a26"),r=Object(n["a"])("checkbox"),s=r[0],o=r[1];t["a"]=s({mixins:[Object(i["a"])({bem:o,role:"checkbox",parent:"vanCheckbox"})],computed:{checked:{get:function(){return this.parent?-1!==this.parent.value.indexOf(this.name):this.value},set:function(e){this.parent?this.setParentValue(e):this.$emit("input",e)}}},watch:{value:function(e){this.$emit("change",e)}},methods:{toggle:function(e){var t=this;void 0===e&&(e=!this.checked),clearTimeout(this.toggleTask),this.toggleTask=setTimeout((function(){t.checked=e}))},setParentValue:function(e){var t=this.parent,a=t.value.slice();if(e){if(t.max&&a.length>=t.max)return;-1===a.indexOf(this.name)&&(a.push(this.name),t.$emit("input",a))}else{var n=a.indexOf(this.name);-1!==n&&(a.splice(n,1),t.$emit("input",a))}}}})},"45e1":function(e,t,a){"use strict";a.r(t);var n,i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("van-nav-bar",{attrs:{title:"我的订单","left-arrow":""},on:{"click-left":e.onClickLeft}}),e._v(" "),a("van-tabs",{on:{click:e.clickNav},model:{value:e.activeNav,callback:function(t){e.activeNav=t},expression:"activeNav"}},e._l(e.navList,(function(e){return a("van-tab",{key:e.id,attrs:{title:e.name}})})),1),e._v(" "),a("div",{staticClass:"order_list"},[a("van-list",{attrs:{finished:e.finished,"immediate-check":!1,"finished-text":"没有更多了"},on:{load:e.getData},model:{value:e.loading,callback:function(t){e.loading=t},expression:"loading"}},e._l(e.orderList,(function(t,n){return a("van-panel",{key:n,attrs:{title:"订单编号: "+t.orderSn,status:t.statusName},nativeOn:{click:function(a){return e.toOrderDetail(t.orderSn)}}},[e._l(t.items,(function(t,n){return a("van-card",{key:n,attrs:{title:t.title,desc:t.goods.descript,price:e.formatPrice(t.price),num:t.count,thumb:e.imgUrl+t.goods.pic},on:{click:function(a){return a.stopPropagation(),e.toGoods(t.goods.id)}}})})),e._v(" "),a("div",{staticClass:"total"},[e._v("合计: "+e._s(e.formatPrice(t.totalPrice))+" ")]),e._v(" "),a("div",{staticClass:"footer_btn",attrs:{slot:"footer"},slot:"footer"},[a("van-button",{directives:[{name:"show",rawName:"v-show",value:"待付款"===t.statusName,expression:"item.statusName === '待付款'"}],attrs:{size:"small",type:"default"},on:{click:function(a){return a.stopPropagation(),e.cancelOrder(t)}}},[e._v("取消订单")]),e._v(" "),a("van-button",{attrs:{size:"small",type:"danger"},on:{click:function(a){return a.stopPropagation(),e.handleOrder(t)}}},[e._v("\n          "+e._s(e.getHandlerText(t.statusName))+"\n        ")])],1)],2)})),1)],1),e._v(" "),a("van-tabbar",{model:{value:e.activeFooter,callback:function(t){e.activeFooter=t},expression:"activeFooter"}},[a("van-tabbar-item",{attrs:{icon:"home-o",replace:"",to:"/index"}},[e._v("首页")]),e._v(" "),a("van-tabbar-item",{attrs:{icon:"search",replace:"",to:"/search"}},[e._v("发现")]),e._v(" "),a("van-tabbar-item",{attrs:{icon:"cart-o",replace:"",to:"/cart"}},[e._v("购物车")]),e._v(" "),a("van-tabbar-item",{attrs:{icon:"user-o",replace:"",to:"/user"}},[e._v("我的")])],1)],1)},r=[],s=(a("e7e5"),a("d399")),o=a("bd86"),c=(a("66b9"),a("b650")),l=(a("2994"),a("2bdd")),u=(a("3647"),a("ea47")),d=(a("a52c"),a("2ed4")),f=(a("bda7"),a("5e46")),b=(a("537a"),a("ac28")),h=(a("da3c"),a("0b33")),p=(a("5246"),a("6b41")),g=(a("a909"),a("3acc")),m=(a("be39"),a("efa0")),v=(a("3c32"),a("417e")),k=(a("9cb7"),a("66fd")),x=(a("81e6"),a("9ffb")),O=(a("4d48"),a("d1e1")),S=a("b30f"),y="/api/mobile/",j={components:(n={},Object(o["a"])(n,O["a"].name,O["a"]),Object(o["a"])(n,x["a"].name,x["a"]),Object(o["a"])(n,k["a"].name,k["a"]),Object(o["a"])(n,v["a"].name,v["a"]),Object(o["a"])(n,m["a"].name,m["a"]),Object(o["a"])(n,g["a"].name,g["a"]),Object(o["a"])(n,p["a"].name,p["a"]),Object(o["a"])(n,h["a"].name,h["a"]),Object(o["a"])(n,b["a"].name,b["a"]),Object(o["a"])(n,f["a"].name,f["a"]),Object(o["a"])(n,d["a"].name,d["a"]),Object(o["a"])(n,u["a"].name,u["a"]),Object(o["a"])(n,l["a"].name,l["a"]),Object(o["a"])(n,c["a"].name,c["a"]),n),data:function(){return{navList:[{name:"全部",id:0},{name:"待付款",id:1},{name:"待发货",id:2},{name:"已发货",id:3},{name:"已完成",id:4}],orderList:[],activeNav:0,activeFooter:3,checkedGoods:["1"],goods:[],imgUrl:y+"/file/getImgStream?idFile=",listQuery:{page:1,limit:20,status:0},loading:!1,finished:!1}},mounted:function(){if(this.$route.query){var e=this.$route.query.status;this.activeNav=parseInt(e)-1,this.listQuery.status=e}this.init()},computed:{submitBarText:function(){var e=this.checkedGoods.length;return"结算"+(e?"(".concat(e,")"):"")}},methods:{init:function(){this.getData()},getData:function(){var e=this;S["a"].getOrders(this.listQuery).then((function(t){var a=t.data.records;for(var n in a){var i=a[n];i.title=""+i.createTime,i.descript=""+i.orderSn}e.orderList=a,e.loading=!1,e.finished=0===t.data.total||t.data.current===t.data.pages})).catch((function(e){}))},formatPrice:function(e){return(e/100).toFixed(2)},onClickLeft:function(){this.$router.go(-1)},clickNav:function(e,t){this.activeNav=e,this.listQuery.status=this.navList[e].id,this.getData()},toOrderDetail:function(e){this.$router.push("/order/detail/"+e)},toGoods:function(e){this.$router.push({path:"/goods/"+e})},cancelOrder:function(e){var t=this;S["a"].remove(e.orderSn).then((function(e){t.getData()}))},getHandlerText:function(e){return"已发货"===e?"确认收货":"待付款"===e?"立即付款":e},handleOrder:function(e){var t=this;"待付款"===e.statusName&&this.$router.push({path:"payment",query:{orderSn:e.orderSn,totalPrice:e.totalPrice}}),"已发货"===e.statusName&&e.confirm(orderInfo.orderSn).then((function(e){Object(s["a"])("成功收货"),t.getData()}))}}},T=j,_=(a("74c9"),a("2877")),C=Object(_["a"])(T,i,r,!1,null,null,null);t["default"]=C.exports},5246:function(e,t,a){"use strict";a("68ef"),a("9d70"),a("3743"),a("8a0b")},"66b9":function(e,t,a){"use strict";a("68ef"),a("9d70"),a("3743"),a("e3b3"),a("bc1b")},"6b41":function(e,t,a){"use strict";var n=a("2638"),i=a.n(n),r=a("d282"),s=a("a142"),o=a("ba31"),c=a("b1d2"),l=a("ad06"),u=Object(r["a"])("nav-bar"),d=u[0],f=u[1];function b(e,t,a,n){var r;function u(){return a.left?a.left():[t.leftArrow&&e(l["a"],{class:f("arrow"),attrs:{name:"arrow-left"}}),t.leftText&&e("span",{class:f("text")},[t.leftText])]}function d(){return a.right?a.right():t.rightText?e("span",{class:f("text")},[t.rightText]):void 0}return e("div",i()([{style:{zIndex:t.zIndex},class:[f({fixed:t.fixed}),(r={},r[c["b"]]=t.border,r)]},Object(o["b"])(n)]),[e("div",{class:f("left"),on:{click:n.listeners["click-left"]||s["f"]}},[u()]),e("div",{class:[f("title"),"van-ellipsis"]},[a.title?a.title():t.title]),e("div",{class:f("right"),on:{click:n.listeners["click-right"]||s["f"]}},[d()])])}b.props={title:String,fixed:Boolean,zIndex:[Number,String],leftText:String,rightText:String,leftArrow:Boolean,border:{type:Boolean,default:!0}},t["a"]=d(b)},"74c9":function(e,t,a){"use strict";var n=a("d236"),i=a.n(n);i.a},"8a0b":function(e,t,a){},a909:function(e,t,a){"use strict";a("68ef")},b30f:function(e,t,a){"use strict";var n=a("b775");t["a"]={save:function(e){return Object(n["a"])({url:"/user/order/save",method:"post",params:e})},get:function(e){return Object(n["a"])({url:"/user/order/"+e,method:"get"})},remove:function(e){return Object(n["a"])({url:"/user/order/cancel/"+e,method:"post"})},getOrders:function(e){return Object(n["a"])({url:"/user/order/getOrders",method:"get",params:e})},prepareCheckout:function(e){return Object(n["a"])({url:"/user/order/prepareCheckout",params:e,method:"get"})},confirm:function(e){return Object(n["a"])({url:"/user/order/confirm/"+e,method:"post"})}}},b650:function(e,t,a){"use strict";var n=a("c31d"),i=a("2638"),r=a.n(i),s=a("d282"),o=a("ba31"),c=a("b1d2"),l=a("48f4"),u=a("ad06"),d=a("543e"),f=Object(s["a"])("button"),b=f[0],h=f[1];function p(e,t,a,n){var i,s=t.tag,f=t.icon,b=t.type,p=t.color,g=t.plain,m=t.disabled,v=t.loading,k=t.hairline,x=t.loadingText,O={};function S(e){v||m||(Object(o["a"])(n,"click",e),Object(l["a"])(n))}function y(e){Object(o["a"])(n,"touchstart",e)}p&&(O.color=g?p:c["h"],g||(O.background=p),-1!==p.indexOf("gradient")?O.border=0:O.borderColor=p);var j=[h([b,t.size,{plain:g,loading:v,disabled:m,hairline:k,block:t.block,round:t.round,square:t.square}]),(i={},i[c["d"]]=k,i)];function T(){var n,i=[];return v?i.push(e(d["a"],{class:h("loading"),attrs:{size:t.loadingSize,type:t.loadingType,color:"currentColor"}})):f&&i.push(e(u["a"],{attrs:{name:f},class:h("icon")})),n=v?x:a.default?a.default():t.text,n&&i.push(e("span",{class:h("text")},[n])),i}return e(s,r()([{style:O,class:j,attrs:{type:t.nativeType,disabled:m},on:{click:S,touchstart:y}},Object(o["b"])(n)]),[T()])}p.props=Object(n["a"])({},l["c"],{text:String,icon:String,color:String,block:Boolean,plain:Boolean,round:Boolean,square:Boolean,loading:Boolean,hairline:Boolean,disabled:Boolean,nativeType:String,loadingText:String,loadingType:String,tag:{type:String,default:"button"},type:{type:String,default:"default"},size:{type:String,default:"normal"},loadingSize:{type:String,default:"20px"}}),t["a"]=b(p)},b775:function(e,t,a){"use strict";a("a481");var n=a("bc3a"),i=a.n(n),r=a("41cb"),s=a("4360"),o=a("5d2d"),c=i.a.create({baseURL:"http://139.129.117.238/api/mobile/",headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json"},withCredentials:!1,timeout:15e3});c.interceptors.request.use((function(e){return o["a"].getToken()&&(e.headers["Authorization"]=o["a"].getToken()),e}),(function(e){return Promise.reject(e)})),c.interceptors.response.use((function(e){console.log("response",e),e.headers.token&&s["a"].dispatch("app/toggleToken",e.headers.token);var t=e.data;return console.log(t.code),1e4==t.code?e:2e4!=t.code?Promise.reject(t.msg||"error"):t}),(function(e){if(e.response)switch(e.response.status){case 401:return s["a"].dispatch("app/toggleUser",{}),s["a"].dispatch("app/toggleToken",""),r["a"].replace({path:"/login",query:{redirect:r["a"].currentRoute.path}}),Promise.reject(e.response.data.message);case 500:return e.response.data.message&&e.response.data.message.indexOf("relogin")>-1?(console.log("need relogin"),s["a"].dispatch("app/toggleUser",{}),s["a"].dispatch("app/toggleToken",""),r["a"].replace({path:"/login",query:{redirect:r["a"].currentRoute.path}}),Promise.reject(e.response.data.message)):Promise.reject(e.response.data.message);default:return Promise.reject(e.response.data.message)}})),t["a"]=c},bc1b:function(e,t,a){},be39:function(e,t,a){"use strict";a("68ef"),a("9d70"),a("3743"),a("e3b3"),a("bc1b"),a("3b42")},d236:function(e,t,a){},ea47:function(e,t,a){"use strict";var n=a("2638"),i=a.n(n),r=a("d282"),s=a("ba31"),o=a("b1d2"),c=a("7744"),l=a("34e9"),u=Object(r["a"])("panel"),d=u[0],f=u[1];function b(e,t,a,n){var r=function(){return[a.header?a.header():e(c["a"],{attrs:{icon:t.icon,label:t.desc,title:t.title,value:t.status,valueClass:f("header-value")},class:f("header")}),e("div",{class:f("content")},[a.default&&a.default()]),a.footer&&e("div",{class:[f("footer"),o["e"]]},[a.footer()])]};return e(l["a"],i()([{class:f(),scopedSlots:{default:r}},Object(s["b"])(n,!0)]))}b.props={icon:String,desc:String,title:String,status:String},t["a"]=d(b)},efa0:function(e,t,a){"use strict";var n=a("2638"),i=a.n(n),r=a("d282"),s=a("ba31"),o=a("ad06"),c=a("b650"),l=Object(r["a"])("submit-bar"),u=l[0],d=l[1],f=l[2];function b(e,t,a,n){var r=t.tip,l=t.price,u=t.tipIcon;function b(){if("number"===typeof l){var a=(l/100).toFixed(t.decimalLength).split("."),n=t.decimalLength?"."+a[1]:"";return e("div",{style:{textAlign:t.textAlign?t.textAlign:""},class:d("text")},[e("span",[t.label||f("label")]),e("span",{class:d("price")},[t.currency,e("span",{class:d("price","integer")},[a[0]]),n]),t.suffixLabel&&e("span",{class:d("suffix-label")},[t.suffixLabel])])}}function h(){if(a.tip||r)return e("div",{class:d("tip")},[u&&e(o["a"],{class:d("tip-icon"),attrs:{name:u}}),r&&e("span",{class:d("tip-text")},[r]),a.tip&&a.tip()])}return e("div",i()([{class:d({"safe-area-inset-bottom":t.safeAreaInsetBottom})},Object(s["b"])(n)]),[a.top&&a.top(),h(),e("div",{class:d("bar")},[a.default&&a.default(),b(),e(c["a"],{attrs:{round:!0,type:t.buttonType,loading:t.loading,disabled:t.disabled,text:t.loading?"":t.buttonText},class:d("button",t.buttonType),on:{click:function(){Object(s["a"])(n,"submit")}}})])])}b.props={tip:String,label:String,price:Number,tipIcon:String,loading:Boolean,disabled:Boolean,textAlign:String,buttonText:String,suffixLabel:String,safeAreaInsetBottom:Boolean,decimalLength:{type:[Number,String],default:2},currency:{type:String,default:"¥"},buttonType:{type:String,default:"danger"}},t["a"]=u(b)}}]);