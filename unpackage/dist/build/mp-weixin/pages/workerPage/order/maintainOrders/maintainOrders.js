(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/workerPage/order/maintainOrders/maintainOrders"],{"10e1":function(n,t,e){"use strict";e.r(t);var o=e("5ced"),i=e.n(o);for(var a in o)"default"!==a&&function(n){e.d(t,n,(function(){return o[n]}))}(a);t["default"]=i.a},"321c":function(n,t,e){"use strict";e.r(t);var o=e("32b1"),i=e("10e1");for(var a in i)"default"!==a&&function(n){e.d(t,n,(function(){return i[n]}))}(a);var u,s=e("f0c5"),l=Object(s["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],u);t["default"]=l.exports},"32b1":function(n,t,e){"use strict";e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return a})),e.d(t,"a",(function(){return o}));var o={gUpload:function(){return e.e("components/g-upload/g-upload").then(e.bind(null,"60b1"))},uniTable:function(){return e.e("uni_modules/uni-table/components/uni-table/uni-table").then(e.bind(null,"c226"))},uniTr:function(){return e.e("uni_modules/uni-table/components/uni-tr/uni-tr").then(e.bind(null,"2863"))},uniTh:function(){return e.e("uni_modules/uni-table/components/uni-th/uni-th").then(e.bind(null,"b9c3"))},uniTd:function(){return e.e("uni_modules/uni-table/components/uni-td/uni-td").then(e.bind(null,"6cd9"))}},i=function(){var n=this,t=n.$createElement;n._self._c},a=[]},"5ced":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{columnNum:3,imgList:[],imgPath:[],tableData:null,id:null,showPop:!1,consumable:null}},methods:{confirmOrder:function(n){this.id=n,this.showPop=!0},confirmPop:function(){null==this.consumable||""==this.consumable?n.showToast({title:"请填写维修耗材",icon:"none"}):0==this.imgList.length?(console.log("没有选择图片，直接提交确认"),this.addConsumable()):this.uploadImg(this.imgList,0)},cancelPop:function(){this.consumable=null,this.showPop=!1},chooseFile:function(n,t){this.imgList=n},imgDelete:function(n,t){this.imgList=n},uploadImg:function(t,e){var o=this;n.showLoading({title:"正在上传第"+(e+1)+"张图片"}),n.uploadFile({url:getApp().globalData.BASE_URL+"/user/uploadImgOne",filePath:t[e],name:"file",success:function(i){n.hideLoading(),console.log(i),o.imgPath.push(i.data),++e<t.length?o.uploadImg(t,e):o.addConsumable()}})},addConsumable:function(){var t=this;n.showLoading({title:"正在确认"});var e=getApp().globalData.token,o=t.id,i=t.consumable,a=JSON.stringify(t.imgPath);n.request({url:getApp().globalData.BASE_URL+"/worker/completeOrder",data:{token:e,id:o,consumable:i,imgsfileids2:a},header:{},success:function(t){console.log(t),n.hideLoading(),444===t.data.status?n.showToast({title:"您的登录信息已过期，请重新登录",duration:2e3,icon:"none",success:function(){setTimeout((function(){n.reLaunch({url:"/pages/login/login"})}),2e3)}}):445===t.data.status?n.showToast({title:"您没有此操作权限",duration:2e3,icon:"none"}):1===t.data?n.showToast({title:"确认成功",duration:2e3,success:function(){setTimeout((function(){n.redirectTo({url:"/pages/workerPage/order/maintainOrders/maintainOrders"})}),2e3)}}):n.showToast({title:"提交失败",duration:2e3,icon:"none"})}})},lookImg:function(t){console.log(t),t=JSON.parse(t);for(var e=0;e<t.length;e++)t[e]=(getApp().globalData.BASE_URL+"/upload/"+t[e]).replace(/[\r\n]/g,"");console.log(t),n.previewImage({urls:t})},selectOrders:function(){var t=this;n.showLoading({});var e=getApp().globalData.token;n.request({url:getApp().globalData.BASE_URL+"/worker/selectOrders",data:{token:e,status:"工人已接单"},header:{},success:function(e){console.log(e),n.hideLoading(),444===e.data.status?n.showToast({title:"您的登录信息已过期，请重新登录",duration:2e3,icon:"none",success:function(){setTimeout((function(){n.reLaunch({url:"/pages/login/login"})}),2e3)}}):445===e.data.status?n.showToast({title:"您没有此操作权限",duration:2e3,icon:"none"}):t.tableData=e.data.orders}})}},created:function(){this.selectOrders()},onShow:function(){}};t.default=e}).call(this,e("543d")["default"])},fb0b:function(n,t,e){"use strict";(function(n){e("c6f8");o(e("66fd"));var t=o(e("321c"));function o(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("543d")["createPage"])}},[["fb0b","common/runtime","common/vendor"]]]);