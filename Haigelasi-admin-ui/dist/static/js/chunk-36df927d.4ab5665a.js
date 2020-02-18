(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-36df927d","chunk-593eea03","chunk-2d0b9976","chunk-2d0cfe82","chunk-2d226008","chunk-2d2371fe"],{"22d2":function(e,t,n){"use strict";var i=n("c254"),r=n.n(i);r.a},3432:function(e,t,n){"use strict";n.r(t),n.d(t,"getApiUrl",(function(){return a})),n.d(t,"getList",(function(){return o})),n.d(t,"save",(function(){return s})),n.d(t,"remove",(function(){return l}));var i=n("b775"),r=Object({NODE_ENV:"production",VUE_APP_BASE_API:"/api/admin/",VUE_APP_HOST:"http://139.129.117.238",BASE_URL:"/ui/admin/"}).BASE_API;function a(){return r}function o(e){return Object(i["default"])({url:"/banner/list",method:"get",params:e})}function s(e){return Object(i["default"])({url:"/banner",method:"post",params:e})}function l(e){return Object(i["default"])({url:"/banner",method:"delete",params:{id:e}})}},4381:function(e,t,n){"use strict";n.r(t);var i=n("e799"),r=function(e){e.directive("permission",i["default"])};window.Vue&&(window["permission"]=i["default"],Vue.use(r)),i["default"].install=r,t["default"]=i["default"]},"665a":function(e,t,n){"use strict";n.r(t),n.d(t,"getList",(function(){return r})),n.d(t,"getCategories",(function(){return a})),n.d(t,"getBanners",(function(){return o})),n.d(t,"save",(function(){return s})),n.d(t,"remove",(function(){return l})),n.d(t,"removeBanner",(function(){return u})),n.d(t,"setCategoryBanner",(function(){return c}));var i=n("b775");function r(e){return Object(i["default"])({url:"/shop/category/list",method:"get",params:e})}function a(){return Object(i["default"])({url:"/shop/category/getAll",method:"get"})}function o(e){return Object(i["default"])({url:"/shop/category/getBanners/"+e,method:"get"})}function s(e){return Object(i["default"])({url:"/shop/category",method:"post",params:e})}function l(e){return Object(i["default"])({url:"/shop/category",method:"delete",params:{id:e}})}function u(e,t){return Object(i["default"])({url:"/shop/category/removeBanner/"+e+"/"+t,method:"delete"})}function c(e,t){return Object(i["default"])({url:"/shop/category/setBanner/"+e+"/"+t,method:"post"})}},af42:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("div",{staticClass:"block"},[n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:6}},[n("el-input",{attrs:{size:"mini",placeholder:"标题"},model:{value:e.listQuery.title,callback:function(t){e.$set(e.listQuery,"title",t)},expression:"listQuery.title"}})],1),e._v(" "),n("el-col",{attrs:{span:6}},[n("el-button",{attrs:{type:"success",size:"mini",icon:"el-icon-search"},nativeOn:{click:function(t){return e.search(t)}}},[e._v(e._s(e.$t("button.search")))]),e._v(" "),n("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-refresh"},nativeOn:{click:function(t){return e.reset(t)}}},[e._v(e._s(e.$t("button.reset")))])],1)],1),e._v(" "),n("br"),e._v(" "),n("el-row",[n("el-col",{attrs:{span:24}},[n("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["/banner/edit"],expression:"['/banner/edit']"}],attrs:{type:"success",size:"mini",icon:"el-icon-plus"},nativeOn:{click:function(t){return e.add(t)}}},[e._v(e._s(e.$t("button.add")))]),e._v(" "),n("el-button",{directives:[{name:"show",rawName:"v-show",value:e.shopCategory.show,expression:"shopCategory.show"}],attrs:{type:"success",size:"mini",icon:"el-icon-edit",disabled:e.shopCategory.disabled},nativeOn:{click:function(t){return e.setBanner(t)}}},[e._v("选中banner")]),e._v(" "),n("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["/banner/delete"],expression:"['/banner/delete']"}],attrs:{type:"danger",size:"mini",icon:"el-icon-delete"},nativeOn:{click:function(t){return e.remove(t)}}},[e._v(e._s(e.$t("button.delete")))])],1)],1)],1),e._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],attrs:{data:e.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""},on:{"current-change":e.handleCurrentChange,"row-click":e.clickRow}},[n("el-table-column",{attrs:{label:"ID"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.id)+"\n      ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"标题"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.title)+"\n      ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"类别"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.type)+"\n      ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"打开界面"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.page)+"\n      ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"参数"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.param)+"\n      ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"图片"},scopedSlots:e._u([{key:"default",fn:function(e){return[n("img",{staticStyle:{width:"200px"},attrs:{src:e.row.img}})]}}])})],1),e._v(" "),n("el-dialog",{attrs:{title:e.formTitle,visible:e.formVisible,width:"70%"},on:{"update:visible":function(t){e.formVisible=t}}},[n("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"150px"}},[n("el-row",[n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"标题",prop:"title"}},[n("el-input",{attrs:{minlength:"1"},model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}})],1)],1),e._v(" "),n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"打开的界面"}},[n("el-input",{model:{value:e.form.page,callback:function(t){e.$set(e.form,"page",t)},expression:"form.page"}})],1)],1),e._v(" "),n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"参数",prop:"param"}},[n("el-input",{model:{value:e.form.param,callback:function(t){e.$set(e.form,"param",t)},expression:"form.param"}})],1)],1),e._v(" "),n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"类型"}},[n("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},e._l(e.options,(function(e){return n("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1),e._v(" "),n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"banner图片"}},[n("el-upload",{staticClass:"upload-demo",attrs:{drag:"",multiple:"false",action:e.uploadUrl,headers:e.uploadHeaders,"before-upload":e.handleBeforeUpload,"on-success":e.handleUploadSuccess}},[n("i",{staticClass:"el-icon-upload"}),e._v(" "),n("div",{staticClass:"el-upload__text"},[e._v("上传图片")])])],1)],1)],1),e._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:e.save}},[e._v(e._s(e.$t("button.submit")))]),e._v(" "),n("el-button",{nativeOn:{click:function(t){e.formVisible=!1}}},[e._v(e._s(e.$t("button.cancel")))])],1)],1)],1)],1)},r=[],a=n("3432"),o=n("665a"),s=n("5f87"),l=n("5c96"),u=n("fa7d"),c=n("4381"),d={directives:{permission:c["default"]},data:function(){return{uploadUrl:"",uploadFileId:"",uploadHeaders:{Authorization:""},loadingInstance:{},formVisible:!1,formTitle:"添加banner",deptList:[],isAdd:!0,options:[{label:"首页",value:"index"},{label:"新闻",value:"news"},{label:"产品",value:"product"},{label:"解决方案",value:"solution"},{label:"案例",value:"case"}],form:{id:"",title:"",page:"",param:"",img:"",idFile:"",type:"index"},listQuery:{title:void 0},list:null,listLoading:!0,selRow:{},shopCategory:{id:void 0,show:!1,disabled:!0}}},computed:{rules:function(){return{title:[{required:!0,message:"标题不能为空",trigger:"blur"}]}}},created:function(){this.shopCategory.id=this.$route.query.idCategory,this.init()},methods:{init:function(){this.uploadUrl=Object(u["getApiUrl"])()+"/file",this.uploadHeaders["Authorization"]=Object(s["getToken"])(),this.fetchData(),this.shopCategory.id&&(this.shopCategory.show=!0)},fetchData:function(){var e=this;this.listLoading=!0,Object(a["getList"])(this.listQuery).then((function(t){for(var n in e.list=t.data,e.list){var i=e.list[n];i.img=Object(u["getApiUrl"])()+"/file/download?idFile="+i.idFile}e.listLoading=!1}))},search:function(){this.fetchData()},reset:function(){this.listQuery.title="",this.fetchData()},handleFilter:function(){this.getList()},handleCurrentChange:function(e,t){this.selRow=e},resetForm:function(){this.form={id:"",title:"",page:"",param:"",idFile:this.uploadFileId,type:""}},add:function(){this.resetForm(),this.formTitle="添加banner",this.formVisible=!0,this.isAdd=!0},save:function(){var e=this;this.$refs["form"].validate((function(t){if(!t)return!1;Object(a["save"])({id:e.form.id,title:e.form.title,page:e.form.page,param:e.form.param,idFile:e.uploadFileId,type:e.form.type}).then((function(t){e.$message({message:e.$t("common.optionSuccess"),type:"success"}),e.fetchData(),e.formVisible=!1}))}))},checkSel:function(){return!(!this.selRow||!this.selRow.id)||(this.$message({message:this.$t("common.mustSelectOne"),type:"warning"}),!1)},clickRow:function(e){this.shopCategory.disabled=!1,this.shopCategory.idBanner=e.id},setBanner:function(){var e=this;this.shopCategory.idBanner?Object(o["setCategoryBanner"])(this.shopCategory.id,this.shopCategory.idBanner).then((function(t){e.$message({message:"设置成功",type:"success"}),e.shopCategory.disabled=!0})):this.$message({message:"请先选中要设置的banner",type:"warning"})},remove:function(){var e=this;if(this.checkSel()){var t=this.selRow.id;this.$confirm(this.$t("common.deleteConfirm"),this.$t("common.tooltip"),{confirmButtonText:this.$t("button.submit"),cancelButtonText:this.$t("button.cancel"),type:"warning"}).then((function(){Object(a["remove"])(t).then((function(t){e.$message({message:e.$t("common.optionSuccess"),type:"success"}),e.fetchData()}))})).catch((function(){}))}},handleBeforeUpload:function(){if(""!==this.uploadFileId)return this.$message({message:this.$t("common.mustSelectOne"),type:"warning"}),!1;this.loadingInstance=l["Loading"].service({lock:!0,text:this.$t("common.uploading"),spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"})},handleUploadSuccess:function(e,t){this.loadingInstance.close(),2e4===e.code?(this.uploadFileId=e.data.id,this.form.fileName=e.data.originalFileName):this.$message({message:this.$t("common.uploadError"),type:"error"})}}},f=d,m=(n("22d2"),n("2877")),p=Object(m["a"])(f,i,r,!1,null,"22d49f9e",null);t["default"]=p.exports},c254:function(e,t,n){},e799:function(e,t,n){"use strict";n.r(t);n("6762"),n("2fdb");var i=n("4360");t["default"]={inserted:function(e,t,n){var r=t.value,a=i["default"].getters&&i["default"].getters.permissions;if(!(r&&r instanceof Array&&r.length>0))throw new Error("need roles! Like v-permission=\"['admin','editor']\"");var o=r,s=a.some((function(e){return o.includes(e)}));s||e.parentNode&&e.parentNode.removeChild(e)}}},fa7d:function(e,t,n){"use strict";n.r(t),n.d(t,"getApiUrl",(function(){return r}));var i="/api/admin/";function r(){return i}}}]);