(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c6da8eea","chunk-593eea03","chunk-2d0cfe82","chunk-2d226008","chunk-2d2371fe"],{"0306":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("div",{staticClass:"block"},[n("el-row",[n("el-col",{attrs:{span:24}},[n("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["/category/edit"],expression:"['/category/edit']"}],attrs:{type:"success",size:"mini",icon:"el-icon-plus"},nativeOn:{click:function(t){return e.add(t)}}},[e._v(e._s(e.$t("button.add")))]),e._v(" "),n("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["/category/edit"],expression:"['/category/edit']"}],attrs:{type:"primary",size:"mini",icon:"el-icon-edit"},nativeOn:{click:function(t){return e.edit(t)}}},[e._v(e._s(e.$t("button.edit")))]),e._v(" "),n("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["/category/edit"],expression:"['/category/edit']"}],attrs:{type:"danger",size:"mini",icon:"el-icon-delete"},nativeOn:{click:function(t){return e.remove(t)}}},[e._v(e._s(e.$t("button.delete")))])],1)],1)],1),e._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],attrs:{data:e.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""},on:{"current-change":e.handleCurrentChange}},[n("el-table-column",{attrs:{label:"名称"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n                "+e._s(t.row.name)+"\n            ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"Banner管理"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-edit"},nativeOn:{click:function(n){return e.bannerMgr(t.row.id)}}},[e._v("管理")])]}}])})],1),e._v(" "),n("el-pagination",{attrs:{background:"",layout:"total, sizes, prev, pager, next, jumper","page-sizes":[10,20,50,100,500],"page-size":e.listQuery.limit,total:e.total},on:{"size-change":e.changeSize,"current-change":e.fetchPage,"prev-click":e.fetchPrev,"next-click":e.fetchNext}}),e._v(" "),n("el-dialog",{attrs:{title:e.formTitle,visible:e.formVisible,width:"70%"},on:{"update:visible":function(t){e.formVisible=t}}},[n("el-form",{ref:"form",attrs:{model:e.form,"label-width":"150px"}},[n("el-row",[n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"名称"}},[n("el-input",{attrs:{minlength:"1"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1)],1)],1),e._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:e.save}},[e._v(e._s(e.$t("button.submit")))]),e._v(" "),n("el-button",{nativeOn:{click:function(t){e.formVisible=!1}}},[e._v(e._s(e.$t("button.cancel")))])],1)],1)],1),e._v(" "),n("el-dialog",{attrs:{title:"Banner管理",visible:e.banner.visible,width:"70%"},on:{"update:visible":function(t){return e.$set(e.banner,"visible",t)}}},[n("el-tabs",{model:{value:e.banner.activeName,callback:function(t){e.$set(e.banner,"activeName",t)},expression:"banner.activeName"}},[n("el-tab-pane",{attrs:{label:"管理",name:"first"}},[n("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-plus"},nativeOn:{click:function(t){return e.addBanner(t)}}},[e._v("添加")]),e._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],attrs:{data:e.banner.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{label:"标题"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n              "+e._s(t.row.title)+"\n            ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"url"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n              "+e._s(t.row.url)+"\n            ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"图片"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("img",{staticStyle:{width:"100px"},attrs:{src:e.apiUrl+"/file/getImgStream?idFile="+t.row.idFile}})]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{type:"danger",size:"mini",icon:"el-icon-delete"},nativeOn:{click:function(n){return e.bannerRemove(t.row.id)}}},[e._v("删除")])]}}])})],1)],1),e._v(" "),n("el-tab-pane",{attrs:{label:"预览",name:"second"}},[n("el-carousel",{attrs:{"indicator-position":"outside"}},e._l(e.banner.list,(function(t){return n("el-carousel-item",{key:t},[n("img",{staticStyle:{width:"100%"},attrs:{src:e.apiUrl+"/file/getImgStream?idFile="+t.idFile}})])})),1)],1)],1)],1)],1)},r=[],a=(n("7f7f"),n("665a")),s=n("fa7d"),o=n("4381"),l={directives:{permission:o["default"]},data:function(){return{formVisible:!1,formTitle:"添加商品类别",isAdd:!0,form:{name:"",url:"",icon:"",id:""},listQuery:{page:1,limit:20,id:void 0},total:0,list:null,listLoading:!0,selRow:{},apiUrl:Object(s["getApiUrl"])(),banner:{idCategory:"",activeName:"first",visible:!1,list:[]}}},filters:{statusFilter:function(e){var t={published:"success",draft:"gray",deleted:"danger"};return t[e]}},created:function(){this.init()},methods:{init:function(){this.fetchData()},fetchData:function(){var e=this;this.listLoading=!0,Object(a["getList"])(this.listQuery).then((function(t){e.list=t.data.records,e.listLoading=!1,e.total=t.data.total}))},search:function(){this.fetchData()},reset:function(){this.listQuery.id="",this.fetchData()},handleFilter:function(){this.listQuery.page=1,this.getList()},handleClose:function(){},fetchNext:function(){this.listQuery.page=this.listQuery.page+1,this.fetchData()},fetchPrev:function(){this.listQuery.page=this.listQuery.page-1,this.fetchData()},fetchPage:function(e){this.listQuery.page=e,this.fetchData()},changeSize:function(e){this.listQuery.limit=e,this.fetchData()},handleCurrentChange:function(e,t){this.selRow=e},resetForm:function(){this.form={name:"",url:"",icon:"",id:""}},add:function(){this.resetForm(),this.formTitle="添加商品类别",this.formVisible=!0,this.isAdd=!0},save:function(){var e=this;this.$refs["form"].validate((function(t){if(!t)return!1;Object(a["save"])({name:e.form.name,url:e.form.url,icon:e.form.icon,id:e.form.id}).then((function(t){e.$message({message:e.$t("common.optionSuccess"),type:"success"}),e.fetchData(),e.formVisible=!1}))}))},checkSel:function(){return!(!this.selRow||!this.selRow.id)||(this.$message({message:this.$t("common.mustSelectOne"),type:"warning"}),!1)},edit:function(){this.checkSel()&&(this.isAdd=!1,this.form=this.selRow,this.formTitle="编辑商品类别",this.formVisible=!0)},remove:function(){var e=this;if(this.checkSel()){var t=this.selRow.id;this.$confirm(this.$t("common.deleteConfirm"),this.$t("common.tooltip"),{confirmButtonText:this.$t("button.submit"),cancelButtonText:this.$t("button.cancel"),type:"warning"}).then((function(){Object(a["remove"])(t).then((function(t){e.$message({message:e.$t("common.optionSuccess"),type:"success"}),e.fetchData()})).catch((function(e){}))})).catch((function(){}))}},bannerMgr:function(e){var t=this;this.banner.visible=!0,this.banner.idCategory=e,Object(a["getBanners"])(e).then((function(e){t.banner.list=e.data,console.log("banner",t.banner)}))},bannerRemove:function(e){var t=this;console.log("item",e),Object(a["removeBanner"])(this.banner.idCategory,e).then((function(e){t.$message({message:t.$t("common.optionSuccess"),type:"success"}),t.bannerMgr(t.banner.idCategory)}))},bannerEdit:function(){},addBanner:function(){this.$router.push({path:"banner",query:{idCategory:this.banner.idCategory}})}}},c=l,u=(n("11fd"),n("2877")),d=Object(u["a"])(c,i,r,!1,null,"1e6cc48d",null);t["default"]=d.exports},"11fd":function(e,t,n){"use strict";var i=n("cbd0"),r=n.n(i);r.a},4381:function(e,t,n){"use strict";n.r(t);var i=n("e799"),r=function(e){e.directive("permission",i["default"])};window.Vue&&(window["permission"]=i["default"],Vue.use(r)),i["default"].install=r,t["default"]=i["default"]},"665a":function(e,t,n){"use strict";n.r(t),n.d(t,"getList",(function(){return r})),n.d(t,"getCategories",(function(){return a})),n.d(t,"getBanners",(function(){return s})),n.d(t,"save",(function(){return o})),n.d(t,"remove",(function(){return l})),n.d(t,"removeBanner",(function(){return c})),n.d(t,"setCategoryBanner",(function(){return u}));var i=n("b775");function r(e){return Object(i["default"])({url:"/shop/category/list",method:"get",params:e})}function a(){return Object(i["default"])({url:"/shop/category/getAll",method:"get"})}function s(e){return Object(i["default"])({url:"/shop/category/getBanners/"+e,method:"get"})}function o(e){return Object(i["default"])({url:"/shop/category",method:"post",params:e})}function l(e){return Object(i["default"])({url:"/shop/category",method:"delete",params:{id:e}})}function c(e,t){return Object(i["default"])({url:"/shop/category/removeBanner/"+e+"/"+t,method:"delete"})}function u(e,t){return Object(i["default"])({url:"/shop/category/setBanner/"+e+"/"+t,method:"post"})}},cbd0:function(e,t,n){},e799:function(e,t,n){"use strict";n.r(t);n("6762"),n("2fdb");var i=n("4360");t["default"]={inserted:function(e,t,n){var r=t.value,a=i["default"].getters&&i["default"].getters.permissions;if(!(r&&r instanceof Array&&r.length>0))throw new Error("need roles! Like v-permission=\"['admin','editor']\"");var s=r,o=a.some((function(e){return s.includes(e)}));o||e.parentNode&&e.parentNode.removeChild(e)}}},fa7d:function(e,t,n){"use strict";n.r(t),n.d(t,"getApiUrl",(function(){return r}));var i="/api/admin/";function r(){return i}}}]);