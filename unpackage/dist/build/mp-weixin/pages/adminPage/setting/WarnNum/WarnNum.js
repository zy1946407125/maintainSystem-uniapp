(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/adminPage/setting/WarnNum/WarnNum"],{"6b5a":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{blueNum:null,yellowNum:null,redNum:null}},methods:{selectWarnNum:function(){var n=this;t.showLoading({});var e=getApp().globalData.token;t.request({url:getApp().globalData.BASE_URL+"/admin/selectWarnSet",data:{token:e,type:this.type},header:{},success:function(e){console.log(e),t.hideLoading(),444===e.data.status?t.showToast({title:"您的登录信息已过期，请重新登录",duration:2e3,icon:"none",success:function(){setTimeout((function(){t.reLaunch({url:"/pages/login/login"})}),2e3)}}):445===e.data.status?t.showToast({title:"您没有此操作权限",duration:2e3,icon:"none"}):(n.blueNum=e.data.bluenum,n.yellowNum=e.data.yellownum,n.redNum=e.data.rednum)}})},setWarnNum:function(){var n=getApp().globalData.token,e=this;t.showLoading({}),t.request({url:getApp().globalData.BASE_URL+"/admin/warnSet",data:{token:n,blueNum:e.blueNum,yellowNum:e.yellowNum,redNum:e.redNum},header:{},success:function(n){console.log(n),t.hideLoading(),444===n.data.status?t.showToast({title:"您的登录信息已过期，请重新登录",duration:2e3,icon:"none",success:function(){setTimeout((function(){t.reLaunch({url:"/pages/login/login"})}),2e3)}}):445===n.data.status?t.showToast({title:"您没有此操作权限",duration:2e3,icon:"none"}):1===n.data?t.showToast({title:"设置成功",duration:2e3,success:function(){setTimeout((function(){e.dept=null}),2e3)}}):t.showToast({title:"预警天数设置失败",duration:2e3,icon:"none"})}})}},created:function(){this.selectWarnNum()}};n.default=e}).call(this,e("543d")["default"])},"6dc2":function(t,n,e){"use strict";e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return u}));var u={uniNumberBox:function(){return e.e("uni_modules/uni-number-box/components/uni-number-box/uni-number-box").then(e.bind(null,"c74a"))}},o=function(){var t=this,n=t.$createElement;t._self._c},a=[]},"9c68":function(t,n,e){"use strict";e.r(n);var u=e("6b5a"),o=e.n(u);for(var a in u)"default"!==a&&function(t){e.d(n,t,(function(){return u[t]}))}(a);n["default"]=o.a},ef47:function(t,n,e){"use strict";e.r(n);var u=e("6dc2"),o=e("9c68");for(var a in o)"default"!==a&&function(t){e.d(n,t,(function(){return o[t]}))}(a);var i,l=e("f0c5"),c=Object(l["a"])(o["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],i);n["default"]=c.exports},f10c:function(t,n,e){"use strict";(function(t){e("c6f8");u(e("66fd"));var n=u(e("ef47"));function u(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])}},[["f10c","common/runtime","common/vendor"]]]);