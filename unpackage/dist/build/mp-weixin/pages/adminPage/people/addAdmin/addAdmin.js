(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/adminPage/people/addAdmin/addAdmin"],{"004f":function(e,n,t){"use strict";t.r(n);var o=t("c562"),u=t.n(o);for(var a in o)"default"!==a&&function(e){t.d(n,e,(function(){return o[e]}))}(a);n["default"]=u.a},"9a2f":function(e,n,t){"use strict";t.d(n,"b",(function(){return u})),t.d(n,"c",(function(){return a})),t.d(n,"a",(function(){return o}));var o={uniForms:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uni-forms/components/uni-forms/uni-forms")]).then(t.bind(null,"5b58"))},uniFormsItem:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uni-forms/components/uni-forms-item/uni-forms-item")]).then(t.bind(null,"b1e2"))},uniEasyinput:function(){return t.e("uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput").then(t.bind(null,"f53b"))}},u=function(){var e=this,n=e.$createElement;e._self._c},a=[]},"9b1d":function(e,n,t){"use strict";t.r(n);var o=t("9a2f"),u=t("004f");for(var a in u)"default"!==a&&function(e){t.d(n,e,(function(){return u[e]}))}(a);var i,s=t("f0c5"),r=Object(s["a"])(u["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],i);n["default"]=r.exports},"9c3d":function(e,n,t){"use strict";(function(e){t("c6f8");o(t("66fd"));var n=o(t("9b1d"));function o(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},c562:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t={data:function(){return{optionsDept:[],index:0,formData:{id:"",phone:"",username:""},rules:{id:{rules:[{required:!0,errorMessage:"请输入编号"}]},phone:{rules:[{required:!0,errorMessage:"请输入手机号"}]},username:{rules:[{required:!0,errorMessage:"请输入姓名"}]}}}},methods:{bindPickerChange:function(e){console.log("picker发送选择改变，携带值为",e.target.value),this.index=e.target.value},submit:function(){var n=this;this.$refs.form.submit().then((function(t){var o=n;e.showLoading({});var u=t.id,a=o.optionsDept[o.index],i=t.phone,s=t.username,r=getApp().globalData.token;e.request({url:getApp().globalData.BASE_URL+"/superAdmin/addAdmin",data:{token:r,id:u,dept:a,phone:i,username:s},header:{},success:function(n){console.log(n),e.hideLoading(),444===n.data.status?e.showToast({title:"您的登录信息已过期，请重新登录",duration:2e3,icon:"none",success:function(){setTimeout((function(){e.reLaunch({url:"/pages/login/login"})}),2e3)}}):445===n.data.status?e.showToast({title:"您没有此操作权限",duration:2e3,icon:"none"}):1===n.data?(e.showToast({title:"添加管理员成功",duration:2e3}),o.formData.id=null,o.formData.phone=null,o.formData.username=null):e.showToast({title:"添加失败",duration:2e3,icon:"none"})}})})).catch((function(e){console.log("表单错误信息：",e)}))},selectDept:function(){var n=getApp().globalData.token,t=this;e.showLoading({}),e.request({url:getApp().globalData.BASE_URL+"/user/selectDept",data:{token:n},header:{},success:function(n){if(console.log(n),e.hideLoading(),444===n.data.status)e.showToast({title:"您的登录信息已过期，请重新登录",duration:2e3,icon:"none",success:function(){setTimeout((function(){e.reLaunch({url:"/pages/login/login"})}),2e3)}});else if(445===n.data.status)e.showToast({title:"您没有此操作权限",duration:2e3,icon:"none"});else for(var o=0;o<n.data.length;o++)t.optionsDept.push(n.data[o].dept)}})}},onShow:function(){this.selectDept()}};n.default=t}).call(this,t("543d")["default"])}},[["9c3d","common/runtime","common/vendor"]]]);