(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5dae7af5"],{"0ba6":function(e,a,t){"use strict";t.r(a);var s,o=function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",[s("img",{staticClass:"user-poster",attrs:{src:t("d156")}}),e._v(" "),s("div",{staticClass:"input-group"},[s("van-cell-group",[s("van-field",{attrs:{required:"",clearable:"",label:"账号",placeholder:"测试账号:15011112222"},model:{value:e.mobile,callback:function(a){e.mobile=a},expression:"mobile"}})],1),e._v(" "),s("van-cell-group",{directives:[{name:"show",rawName:"v-show",value:e.show1,expression:"show1"}]},[s("van-field",{attrs:{center:"",clearable:"",label:"短信验证码",placeholder:"请输入短信验证码"},model:{value:e.smsCode,callback:function(a){e.smsCode=a},expression:"smsCode"}},[s("van-button",{directives:[{name:"show",rawName:"v-show",value:!e.hasSendSms,expression:"!hasSendSms"}],attrs:{slot:"button",size:"small",type:"primary"},on:{click:e.sendSms},slot:"button"},[e._v("发送验证码")]),e._v(" "),s("van-button",{directives:[{name:"show",rawName:"v-show",value:e.hasSendSms,expression:"hasSendSms"}],attrs:{slot:"button",size:"small",disabled:"",type:"primary"},slot:"button"},[e._v(e._s(e.second)+"秒后重新获取")])],1)],1),e._v(" "),s("van-cell-group",{directives:[{name:"show",rawName:"v-show",value:e.show2,expression:"show2"}]},[s("van-field",{attrs:{type:"password",label:"密码",placeholder:"测试密码：admin",required:""},model:{value:e.password,callback:function(a){e.password=a},expression:"password"}})],1)],1),e._v(" "),s("div",{staticClass:"button-group"},[s("van-button",{directives:[{name:"show",rawName:"v-show",value:e.show1,expression:"show1"}],attrs:{type:"warning",size:"large",round:""},on:{click:e.loginOrRegister}},[e._v("立即登录/注册")]),e._v(" "),s("van-button",{directives:[{name:"show",rawName:"v-show",value:e.show1,expression:"show1"}],attrs:{type:"info",size:"large",round:""},on:{click:e.toLoginByPassword}},[e._v("用户名密码登录")]),e._v(" "),s("van-button",{directives:[{name:"show",rawName:"v-show",value:e.show2,expression:"show2"}],attrs:{type:"warning",size:"large",round:""},on:{click:e.loginByPass}},[e._v("登录")]),e._v(" "),s("van-button",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{type:"info",size:"large",round:""},on:{click:e.toRegister}},[e._v("手机短信登录/注册")]),e._v(" "),s("van-button",{directives:[{name:"show",rawName:"v-show",value:e.show2,expression:"show2"}],attrs:{type:"primary",size:"large",round:""},on:{click:e.wxLogin}},[e._v("微信登录")])],1),e._v(" "),s("van-tabbar",{model:{value:e.activeFooter,callback:function(a){e.activeFooter=a},expression:"activeFooter"}},[s("van-tabbar-item",{attrs:{icon:"home-o",replace:"",to:"/index"}},[e._v("首页")]),e._v(" "),s("van-tabbar-item",{attrs:{icon:"search",replace:"",to:"/search"}},[e._v("发现")]),e._v(" "),s("van-tabbar-item",{attrs:{icon:"cart-o",replace:"",to:"/cart"}},[e._v("购物车")]),e._v(" "),s("van-tabbar-item",{attrs:{icon:"user-o",replace:"",to:"/user"}},[e._v("我的")])],1)],1)},n=[],r=t("bd86"),i=(t("e17f"),t("2241")),c=(t("e7e5"),t("d399")),d=(t("66b9"),t("b650")),l=(t("be7f"),t("565f")),u=(t("a52c"),t("2ed4")),p=(t("537a"),t("ac28")),h=(t("0653"),t("34e9")),m=(t("c194"),t("7744")),v=(t("c3a6"),t("ad06")),g=(t("81e6"),t("9ffb")),b=(t("4d48"),t("d1e1")),w=t("7ded"),f=t("4360"),O={components:(s={},Object(r["a"])(s,b["a"].name,b["a"]),Object(r["a"])(s,g["a"].name,g["a"]),Object(r["a"])(s,v["a"].name,v["a"]),Object(r["a"])(s,m["a"].name,m["a"]),Object(r["a"])(s,h["a"].name,h["a"]),Object(r["a"])(s,p["a"].name,p["a"]),Object(r["a"])(s,u["a"].name,u["a"]),Object(r["a"])(s,l["a"].name,l["a"]),Object(r["a"])(s,d["a"].name,d["a"]),Object(r["a"])(s,c["a"].name,c["a"]),Object(r["a"])(s,i["a"].name,i["a"]),s),data:function(){return{mobile:"",smsCode:"",password:"",activeFooter:3,show1:!1,show2:!0,redirect:"",hasSendSms:!1,second:60}},mounted:function(){this.init()},methods:{init:function(){f["a"].state.app.user.nickName?this.$router.push({path:"/index"}):this.$route.query.redirect&&(this.redirect=this.$route.query.redirect,console.log("redirect",this.redirect))},toLoginByPassword:function(){this.show1=!1,this.show2=!0},toRegister:function(){this.show2=!1,this.show1=!0},wxLogin:function(){var e=this;w["a"].wxLogin().then((function(a){console.log(a);var t=a.wxuser;c["a"].success("欢迎 "+t.nickname+" 来到海格拉斯养生小店！"),f["a"].dispatch("app/wxUser",t),e.$router.push({path:"/index"})})).catch((function(e){console.log(e),c["a"].fail(e)}))},loginOrRegister:function(){var e=this;w["a"].loginOrReg(this.mobile,this.smsCode).then((function(a){f["a"].dispatch("app/toggleToken",a.data.token),f["a"].dispatch("app/toggleUser",a.data.user),a.data.initPassword&&Object(c["a"])({duration:8e3,message:"欢迎新用户，请谨慎保管您的初始密码："+a.data.initPassword}),e.redirect?e.$router.push({path:e.redirect}):e.$router.push({path:"/index"})})).then((function(e){}))},loginByPass:function(){var e=this;w["a"].loginByPassword(this.mobile,this.password).then((function(a){f["a"].dispatch("app/toggleToken",a.data.token),f["a"].dispatch("app/toggleUser",a.data.user),e.redirect?e.$router.push({path:e.redirect}):e.$router.push({path:"/index"})})).catch((function(e){Object(c["a"])(e)}))},sendSms:function(){var e=this;this.hasSendSms=!0,w["a"].sendSmsCode(this.mobile).then((function(a){e.setTimeOut();var t=a.data;Object(c["a"])("提示：测试阶段不发送短信验证码："+t)}))},setTimeOut:function(){var e=this,a=setTimeout((function(){e.setTimeOut(),e.second>0&&e.second--}),1e3);this.second<=0&&(this.hasSendSms=!1,this.second=60,clearTimeout(a))}}},j=O,x=(t("47dc"),t("2877")),_=Object(x["a"])(j,o,n,!1,null,null,null);a["default"]=_.exports},"47dc":function(e,a,t){"use strict";var s=t("8d2a"),o=t.n(s);o.a},"7ded":function(e,a,t){"use strict";var s=t("b775");a["a"]={loginOrReg:function(e,a){return Object(s["a"])({url:"/loginOrReg",method:"post",params:{mobile:e,smsCode:a}})},loginByPassword:function(e,a){return Object(s["a"])({url:"/loginByPass",method:"post",params:{mobile:e,password:a}})},wxLogin:function(){return Object(s["a"])({url:"/wxLogin/login",method:"get"})},sendSmsCode:function(e){return Object(s["a"])({url:"/sendSmsCode",method:"post",params:{mobile:e}})},logout:function(){return Object(s["a"])({url:"/logout",method:"post"})}}},"8d2a":function(e,a,t){},b775:function(e,a,t){"use strict";t("a481");var s=t("bc3a"),o=t.n(s),n=t("41cb"),r=t("4360"),i=t("5d2d"),c=o.a.create({baseURL:"http://139.129.117.238/api/mobile/",headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json"},withCredentials:!1,timeout:15e3});c.interceptors.request.use((function(e){return i["a"].getToken()&&(e.headers["Authorization"]=i["a"].getToken()),e}),(function(e){return Promise.reject(e)})),c.interceptors.response.use((function(e){console.log("response",e),e.headers.token&&r["a"].dispatch("app/toggleToken",e.headers.token);var a=e.data;return console.log(a.code),1e4==a.code?e:2e4!=a.code?Promise.reject(a.msg||"error"):a}),(function(e){if(e.response)switch(e.response.status){case 401:return r["a"].dispatch("app/toggleUser",{}),r["a"].dispatch("app/toggleToken",""),n["a"].replace({path:"/login",query:{redirect:n["a"].currentRoute.path}}),Promise.reject(e.response.data.message);case 500:return e.response.data.message&&e.response.data.message.indexOf("relogin")>-1?(console.log("need relogin"),r["a"].dispatch("app/toggleUser",{}),r["a"].dispatch("app/toggleToken",""),n["a"].replace({path:"/login",query:{redirect:n["a"].currentRoute.path}}),Promise.reject(e.response.data.message)):Promise.reject(e.response.data.message);default:return Promise.reject(e.response.data.message)}})),a["a"]=c},d156:function(e,a,t){e.exports=t.p+"img/banner.b32e46fd.jpg"}}]);