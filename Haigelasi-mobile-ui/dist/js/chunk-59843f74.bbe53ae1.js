(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-59843f74"],{"0653":function(t,e,n){"use strict";n("68ef"),n("5c56")},"09fe":function(t,e,n){},"0a26":function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var i=n("ad06"),a=n("9884"),r=n("ea8e"),o=function(t){var e=t.parent,n=t.bem,o=t.role;return{mixins:[Object(a["a"])(e)],props:{name:null,value:null,disabled:Boolean,iconSize:[Number,String],checkedColor:String,labelPosition:String,labelDisabled:Boolean,shape:{type:String,default:"round"},bindGroup:{type:Boolean,default:!0}},computed:{disableBindRelation:function(){return!this.bindGroup},isDisabled:function(){return this.parent&&this.parent.disabled||this.disabled},iconStyle:function(){var t=this.checkedColor||this.parent&&this.parent.checkedColor;if(t&&this.checked&&!this.isDisabled)return{borderColor:t,backgroundColor:t}},tabindex:function(){return this.isDisabled||"radio"===o&&!this.checked?-1:0}},methods:{onClick:function(t){var e=t.target,n=this.$refs.icon,i=n===e||n.contains(e);this.isDisabled||!i&&this.labelDisabled||this.toggle(),this.$emit("click",t)},genIcon:function(){var t=this.$createElement,e=this.checked,a=this.iconSize||this.parent&&this.parent.iconSize;return t("div",{ref:"icon",class:n("icon",[this.shape,{disabled:this.isDisabled,checked:e}]),style:{fontSize:Object(r["a"])(a)}},[this.slots("icon",{checked:e})||t(i["a"],{attrs:{name:"success"},style:this.iconStyle})])},genLabel:function(){var t=this.$createElement,e=this.slots();if(e)return t("span",{class:n("label",[this.labelPosition,{disabled:this.isDisabled}])},[e])}},render:function(){var t=arguments[0],e=[this.genIcon()];return"left"===this.labelPosition?e.unshift(this.genLabel()):e.push(this.genLabel()),t("div",{attrs:{role:o,tabindex:this.tabindex,"aria-checked":String(this.checked)},class:n({disabled:this.isDisabled,"label-disabled":this.labelDisabled}),on:{click:this.onClick}},[e])}}}},"34e9":function(t,e,n){"use strict";var i=n("2638"),a=n.n(i),r=n("d282"),o=n("ba31"),s=n("b1d2"),c=Object(r["a"])("cell-group"),l=c[0],d=c[1];function u(t,e,n,i){var r,c,l=t("div",a()([{class:[d(),(r={},r[s["f"]]=e.border,r)]},Object(o["b"])(i,!0)]),[null===(c=n.default)||void 0===c?void 0:c.call(n)]);return e.title||n.title?t("div",[t("div",{class:d("title")},[n.title?n.title():e.title]),l]):l}u.props={title:String,border:{type:Boolean,default:!0}},e["a"]=l(u)},4056:function(t,e,n){"use strict";n("68ef"),n("9d70"),n("3743"),n("09fe")},"44bf":function(t,e,n){"use strict";var i=n("2638"),a=n.n(i),r=n("d282"),o=n("a142"),s=n("ea8e"),c=n("ad06"),l=Object(r["a"])("image"),d=l[0],u=l[1];e["a"]=d({props:{src:String,fit:String,alt:String,round:Boolean,width:[Number,String],height:[Number,String],radius:[Number,String],lazyLoad:Boolean,showError:{type:Boolean,default:!0},showLoading:{type:Boolean,default:!0},errorIcon:{type:String,default:"warning-o"},loadingIcon:{type:String,default:"photo-o"}},data:function(){return{loading:!0,error:!1}},watch:{src:function(){this.loading=!0,this.error=!1}},computed:{style:function(){var t={};return Object(o["b"])(this.width)&&(t.width=Object(s["a"])(this.width)),Object(o["b"])(this.height)&&(t.height=Object(s["a"])(this.height)),Object(o["b"])(this.radius)&&(t.overflow="hidden",t.borderRadius=Object(s["a"])(this.radius)),t}},created:function(){var t=this.$Lazyload;t&&(t.$on("loaded",this.onLazyLoaded),t.$on("error",this.onLazyLoadError))},beforeDestroy:function(){var t=this.$Lazyload;t&&(t.$off("loaded",this.onLazyLoaded),t.$off("error",this.onLazyLoadError))},methods:{onLoad:function(t){this.loading=!1,this.$emit("load",t)},onLazyLoaded:function(t){var e=t.el;e===this.$refs.image&&this.loading&&this.onLoad()},onLazyLoadError:function(t){var e=t.el;e!==this.$refs.image||this.error||this.onError()},onError:function(t){this.error=!0,this.loading=!1,this.$emit("error",t)},onClick:function(t){this.$emit("click",t)},genPlaceholder:function(){var t=this.$createElement;return this.loading&&this.showLoading?t("div",{class:u("loading")},[this.slots("loading")||t(c["a"],{attrs:{name:this.loadingIcon},class:u("loading-icon")})]):this.error&&this.showError?t("div",{class:u("error")},[this.slots("error")||t(c["a"],{attrs:{name:this.errorIcon},class:u("error-icon")})]):void 0},genImage:function(){var t=this.$createElement,e={class:u("img"),attrs:{alt:this.alt},style:{objectFit:this.fit}};if(!this.error)return this.lazyLoad?t("img",a()([{ref:"image",directives:[{name:"lazy",value:this.src}]},e])):t("img",a()([{attrs:{src:this.src},on:{load:this.onLoad,error:this.onError}},e]))}},render:function(){var t=arguments[0];return t("div",{class:u({round:this.round}),style:this.style,on:{click:this.onClick}},[this.genImage(),this.genPlaceholder()])}})},"4d48":function(t,e,n){"use strict";n("68ef"),n("bf60")},"4ddd":function(t,e,n){"use strict";n("68ef"),n("9d70"),n("3743"),n("dde9")},5246:function(t,e,n){"use strict";n("68ef"),n("9d70"),n("3743"),n("8a0b")},"5c56":function(t,e,n){},"66b9":function(t,e,n){"use strict";n("68ef"),n("9d70"),n("3743"),n("e3b3"),n("bc1b")},"6b41":function(t,e,n){"use strict";var i=n("2638"),a=n.n(i),r=n("d282"),o=n("a142"),s=n("ba31"),c=n("b1d2"),l=n("ad06"),d=Object(r["a"])("nav-bar"),u=d[0],h=d[1];function f(t,e,n,i){var r;function d(){return n.left?n.left():[e.leftArrow&&t(l["a"],{class:h("arrow"),attrs:{name:"arrow-left"}}),e.leftText&&t("span",{class:h("text")},[e.leftText])]}function u(){return n.right?n.right():e.rightText?t("span",{class:h("text")},[e.rightText]):void 0}return t("div",a()([{style:{zIndex:e.zIndex},class:[h({fixed:e.fixed}),(r={},r[c["b"]]=e.border,r)]},Object(s["b"])(i)]),[t("div",{class:h("left"),on:{click:i.listeners["click-left"]||o["f"]}},[d()]),t("div",{class:[h("title"),"van-ellipsis"]},[n.title?n.title():e.title]),t("div",{class:h("right"),on:{click:i.listeners["click-right"]||o["f"]}},[u()])])}f.props={title:String,fixed:Boolean,zIndex:[Number,String],leftText:String,rightText:String,leftArrow:Boolean,border:{type:Boolean,default:!0}},e["a"]=u(f)},"7ded":function(t,e,n){"use strict";var i=n("b775");e["a"]={loginOrReg:function(t,e){return Object(i["a"])({url:"/loginOrReg",method:"post",params:{mobile:t,smsCode:e}})},loginByPassword:function(t,e){return Object(i["a"])({url:"/loginByPass",method:"post",params:{mobile:t,password:e}})},wxLogin:function(){return Object(i["a"])({url:"/wxLogin/login",method:"get"})},sendSmsCode:function(t){return Object(i["a"])({url:"/sendSmsCode",method:"post",params:{mobile:t}})},logout:function(){return Object(i["a"])({url:"/logout",method:"post"})}}},"8a0b":function(t,e,n){},9354:function(t,e,n){"use strict";n.r(e);var i,a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"setting"},[n("van-nav-bar",{attrs:{title:"设置","left-arrow":""},on:{"click-left":t.onClickLeft}}),t._v(" "),n("van-cell-group",[n("van-cell",{attrs:{icon:"flower-o",title:"头像","is-link":"",to:"avatar"}},[n("van-image",{attrs:{round:"",width:"30",height:"30",src:t.avatarUrl}})],1),t._v(" "),n("van-cell",{attrs:{icon:"user-o",title:"姓名",value:t.user.nickName,"is-link":"",to:"updateUserName"}}),t._v(" "),n("van-cell",{attrs:{icon:"share",title:"性别","is-link":"",value:t.user.genderStr},on:{click:function(e){t.showGender=!0}}}),t._v(" "),n("van-cell",{attrs:{icon:"closed-eye",title:"修改密码","is-link":"",to:"updatePwd"}}),t._v(" "),n("van-cell",{attrs:{icon:"phone-o",title:"更换手机","is-link":"",to:"updateMobile"}}),t._v(" "),n("van-cell",{attrs:{icon:"warning-o",title:"关于本公司","is-link":"",url:"http://hagelasi.com"}})],1),t._v(" "),n("div",{staticClass:"logout"},[n("van-button",{attrs:{type:"danger",plain:"",round:"",block:""},on:{click:t.onLogout}},[t._v("退出登录")])],1),t._v(" "),n("van-popup",{style:{padding:"20px",width:"50px",height:"50px"},model:{value:t.showGender,callback:function(e){t.showGender=e},expression:"showGender"}},[n("van-radio-group",{on:{change:t.onChangeGender},model:{value:t.user.gender,callback:function(e){t.$set(t.user,"gender",e)},expression:"user.gender"}},[n("van-radio",{attrs:{name:"male"}},[t._v("男")]),t._v(" "),n("van-radio",{attrs:{name:"female"}},[t._v("女")])],1)],1)],1)},r=[],o=n("bd86"),s=(n("4ddd"),n("9f14")),c=(n("a44c"),n("e27c")),l=(n("68ef"),n("a71a"),n("9d70"),n("3743"),n("4d75"),n("e41f")),d=(n("4056"),n("44bf")),u=(n("e7e5"),n("d399")),h=(n("5246"),n("6b41")),f=(n("0653"),n("34e9")),p=(n("c194"),n("7744")),g=(n("c3a6"),n("ad06")),b=(n("81e6"),n("9ffb")),m=(n("66b9"),n("b650")),v=(n("4d48"),n("d1e1")),y=n("7ded"),k=n("c24f"),j=n("4360"),O="/api/mobile/",S={components:(i={},Object(o["a"])(i,v["a"].name,v["a"]),Object(o["a"])(i,m["a"].name,m["a"]),Object(o["a"])(i,b["a"].name,b["a"]),Object(o["a"])(i,g["a"].name,g["a"]),Object(o["a"])(i,p["a"].name,p["a"]),Object(o["a"])(i,f["a"].name,f["a"]),Object(o["a"])(i,h["a"].name,h["a"]),Object(o["a"])(i,u["a"].name,u["a"]),Object(o["a"])(i,d["a"].name,d["a"]),Object(o["a"])(i,l["a"].name,l["a"]),Object(o["a"])(i,c["a"].name,c["a"]),Object(o["a"])(i,s["a"].name,s["a"]),i),store:j["a"],data:function(){return{avatarUrl:"/logo.jpg",user:{},showGender:!1}},mounted:function(){this.init()},methods:{init:function(){this.user=j["a"].state.app.user,this.user.avatar&&(this.avatarUrl=O+"/file/getImgStream?idFile="+this.user.avatar)},onClickLeft:function(){this.$router.go(-1)},onChangeGender:function(t){var e=this;this.user.gender=t,this.user.genderStr="male"===t?"男":"女",k["a"].updateGender(t).then((function(t){j["a"].dispatch("app/toggleUser",e.user),e.showGender=!1}))},onLogout:function(){var t=this;console.log("logout"),y["a"].logout().then((function(e){j["a"].dispatch("app/toggleUser",{}),j["a"].dispatch("app/toggleToken",""),t.$router.push({path:"/index"})})).catch((function(t){}))}}},x=S,w=(n("a405"),n("2877")),C=Object(w["a"])(x,a,r,!1,null,null,null);e["default"]=C.exports},9884:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o}));var i=n("2b0e");function a(t){var e=[];function n(t){t.forEach((function(t){e.push(t),t.children&&n(t.children)}))}return n(t),e}function r(t,e){var n,r;void 0===e&&(e={});var o=e.indexKey||"index";return i["a"].extend({inject:(n={},n[t]={default:null},n),computed:(r={parent:function(){return this.disableBindRelation?null:this[t]}},r[o]=function(){return this.bindRelation(),this.parent.children.indexOf(this)},r),mounted:function(){this.bindRelation()},beforeDestroy:function(){var t=this;this.parent&&(this.parent.children=this.parent.children.filter((function(e){return e!==t})))},methods:{bindRelation:function(){if(this.parent&&-1===this.parent.children.indexOf(this)){var t=[].concat(this.parent.children,[this]),e=a(this.parent.slots());t.sort((function(t,n){return e.indexOf(t.$vnode)-e.indexOf(n.$vnode)})),this.parent.children=t}}}})}function o(t){return{provide:function(){var e;return e={},e[t]=this,e},data:function(){return{children:[]}}}}},"9f14":function(t,e,n){"use strict";var i=n("d282"),a=n("0a26"),r=Object(i["a"])("radio"),o=r[0],s=r[1];e["a"]=o({mixins:[Object(a["a"])({bem:s,role:"radio",parent:"vanRadio"})],computed:{currentValue:{get:function(){return this.parent?this.parent.value:this.value},set:function(t){(this.parent||this).$emit("input",t)}},checked:function(){return this.currentValue===this.name}},methods:{toggle:function(){this.currentValue=this.name}}})},a405:function(t,e,n){"use strict";var i=n("c71e"),a=n.n(i);a.a},a44c:function(t,e,n){"use strict";n("68ef")},b650:function(t,e,n){"use strict";var i=n("c31d"),a=n("2638"),r=n.n(a),o=n("d282"),s=n("ba31"),c=n("b1d2"),l=n("48f4"),d=n("ad06"),u=n("543e"),h=Object(o["a"])("button"),f=h[0],p=h[1];function g(t,e,n,i){var a,o=e.tag,h=e.icon,f=e.type,g=e.color,b=e.plain,m=e.disabled,v=e.loading,y=e.hairline,k=e.loadingText,j={};function O(t){v||m||(Object(s["a"])(i,"click",t),Object(l["a"])(i))}function S(t){Object(s["a"])(i,"touchstart",t)}g&&(j.color=b?g:c["h"],b||(j.background=g),-1!==g.indexOf("gradient")?j.border=0:j.borderColor=g);var x=[p([f,e.size,{plain:b,loading:v,disabled:m,hairline:y,block:e.block,round:e.round,square:e.square}]),(a={},a[c["d"]]=y,a)];function w(){var i,a=[];return v?a.push(t(u["a"],{class:p("loading"),attrs:{size:e.loadingSize,type:e.loadingType,color:"currentColor"}})):h&&a.push(t(d["a"],{attrs:{name:h},class:p("icon")})),i=v?k:n.default?n.default():e.text,i&&a.push(t("span",{class:p("text")},[i])),a}return t(o,r()([{style:j,class:x,attrs:{type:e.nativeType,disabled:m},on:{click:O,touchstart:S}},Object(s["b"])(i)]),[w()])}g.props=Object(i["a"])({},l["c"],{text:String,icon:String,color:String,block:Boolean,plain:Boolean,round:Boolean,square:Boolean,loading:Boolean,hairline:Boolean,disabled:Boolean,nativeType:String,loadingText:String,loadingType:String,tag:{type:String,default:"button"},type:{type:String,default:"default"},size:{type:String,default:"normal"},loadingSize:{type:String,default:"20px"}}),e["a"]=f(g)},b775:function(t,e,n){"use strict";n("a481");var i=n("bc3a"),a=n.n(i),r=n("41cb"),o=n("4360"),s=n("5d2d"),c=a.a.create({baseURL:"http://139.129.117.238/api/mobile/",headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json"},withCredentials:!1,timeout:15e3});c.interceptors.request.use((function(t){return s["a"].getToken()&&(t.headers["Authorization"]=s["a"].getToken()),t}),(function(t){return Promise.reject(t)})),c.interceptors.response.use((function(t){console.log("response",t),t.headers.token&&o["a"].dispatch("app/toggleToken",t.headers.token);var e=t.data;return console.log(e.code),1e4==e.code?t:2e4!=e.code?Promise.reject(e.msg||"error"):e}),(function(t){if(t.response)switch(t.response.status){case 401:return o["a"].dispatch("app/toggleUser",{}),o["a"].dispatch("app/toggleToken",""),r["a"].replace({path:"/login",query:{redirect:r["a"].currentRoute.path}}),Promise.reject(t.response.data.message);case 500:return t.response.data.message&&t.response.data.message.indexOf("relogin")>-1?(console.log("need relogin"),o["a"].dispatch("app/toggleUser",{}),o["a"].dispatch("app/toggleToken",""),r["a"].replace({path:"/login",query:{redirect:r["a"].currentRoute.path}}),Promise.reject(t.response.data.message)):Promise.reject(t.response.data.message);default:return Promise.reject(t.response.data.message)}})),e["a"]=c},bc1b:function(t,e,n){},bf60:function(t,e,n){},c194:function(t,e,n){"use strict";n("68ef"),n("9d70"),n("3743"),n("1a04")},c24f:function(t,e,n){"use strict";var i=n("b775");e["a"]={getUserInfo:function(){return Object(i["a"])({url:"/user/getInfo",method:"get"})},updateUserName:function(t){return Object(i["a"])({url:"/user/updateUserName/"+t,method:"post"})},updatePwd:function(t){return Object(i["a"])({url:"/account/updatePwd",method:"post",params:t})},updateGender:function(t){return Object(i["a"])({url:"/user/updateGender/"+t,method:"post"})},updatePassword:function(t,e,n){return Object(i["a"])({url:"/user/updatePassword/"+t+"/"+e+"/"+n,method:"post"})},upload:function(t){return console.log("file",t),Object(i["a"])({url:"/file/upload/base64",method:"post",data:t})},sendSmsCode:function(t){return Object(i["a"])({url:"/user/sendSmsCode",method:"post",params:{mobile:t}})}}},c3a6:function(t,e,n){"use strict";n("68ef"),n("9d70"),n("3743")},c71e:function(t,e,n){},d1e1:function(t,e,n){"use strict";var i=n("d282"),a=Object(i["a"])("row"),r=a[0],o=a[1];e["a"]=r({props:{type:String,align:String,justify:String,tag:{type:String,default:"div"},gutter:{type:[Number,String],default:0}},methods:{onClick:function(t){this.$emit("click",t)}},render:function(){var t,e=arguments[0],n=this.align,i=this.justify,a="flex"===this.type,r="-"+Number(this.gutter)/2+"px",s=this.gutter?{marginLeft:r,marginRight:r}:{};return e(this.tag,{style:s,class:o((t={flex:a},t["align-"+n]=a&&n,t["justify-"+i]=a&&i,t)),on:{click:this.onClick}},[this.slots()])}})},dde9:function(t,e,n){},e27c:function(t,e,n){"use strict";var i=n("d282"),a=n("9884"),r=Object(i["a"])("radio-group"),o=r[0],s=r[1];e["a"]=o({mixins:[Object(a["b"])("vanRadio")],props:{value:null,disabled:Boolean,checkedColor:String,iconSize:[Number,String]},watch:{value:function(t){this.$emit("change",t)}},render:function(){var t=arguments[0];return t("div",{class:s(),attrs:{role:"radiogroup"}},[this.slots()])}})},e41f:function(t,e,n){"use strict";var i=n("d282"),a=n("a142"),r=n("6605"),o=n("ad06"),s=Object(i["a"])("popup"),c=s[0],l=s[1];e["a"]=c({mixins:[Object(r["a"])()],props:{round:Boolean,duration:[Number,String],closeable:Boolean,transition:String,safeAreaInsetBottom:Boolean,closeIcon:{type:String,default:"cross"},closeIconPosition:{type:String,default:"top-right"},position:{type:String,default:"center"},overlay:{type:Boolean,default:!0},closeOnClickOverlay:{type:Boolean,default:!0}},beforeCreate:function(){var t=this,e=function(e){return function(n){return t.$emit(e,n)}};this.onClick=e("click"),this.onOpened=e("opened"),this.onClosed=e("closed")},render:function(){var t,e=arguments[0];if(this.shouldRender){var n=this.round,i=this.position,r=this.duration,s="center"===i,c=this.transition||(s?"van-fade":"van-popup-slide-"+i),d={};if(Object(a["b"])(r)){var u=s?"animationDuration":"transitionDuration";d[u]=r+"s"}return e("transition",{attrs:{name:c},on:{afterEnter:this.onOpened,afterLeave:this.onClosed}},[e("div",{directives:[{name:"show",value:this.value}],style:d,class:l((t={round:n},t[i]=i,t["safe-area-inset-bottom"]=this.safeAreaInsetBottom,t)),on:{click:this.onClick}},[this.slots(),this.closeable&&e(o["a"],{attrs:{role:"button",tabindex:"0",name:this.closeIcon},class:l("close-icon",this.closeIconPosition),on:{click:this.close}})])])}}})}}]);