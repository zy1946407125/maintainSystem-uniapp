(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/adminPage/order/allOrders/allOrders"],{"1f8a":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return o}));var o={uniDatetimePicker:function(){return n.e("uni_modules/uni-datetime-picker/components/uni-datetime-picker/uni-datetime-picker").then(n.bind(null,"364f"))},uniTable:function(){return n.e("uni_modules/uni-table/components/uni-table/uni-table").then(n.bind(null,"c226"))},uniTr:function(){return n.e("uni_modules/uni-table/components/uni-tr/uni-tr").then(n.bind(null,"2863"))},uniTh:function(){return n.e("uni_modules/uni-table/components/uni-th/uni-th").then(n.bind(null,"b9c3"))},uniTd:function(){return n.e("uni_modules/uni-table/components/uni-td/uni-td").then(n.bind(null,"6cd9"))}},i=function(){var t=this,e=t.$createElement;t._self._c},a=[]},"4f34":function(t,e,n){"use strict";(function(t){function n(t){return s(t)||a(t)||i(t)||o()}function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function i(t,e){if(t){if("string"===typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(t,e):void 0}}function a(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function s(t){if(Array.isArray(t))return l(t)}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={data:function(){return{index1:0,status:["全部状态","未派单","用户已撤单","管理员已撤单","管理员已派单","工人申请退单","工人已退单","工人已接单","工人已完成","已完成"],type:[],index2:0,total:0,current:1,pageSize:10,timestamp:null,selectStartTime:null,selectEndTime:null,defaultStartTime:null,defaultEndTime:null,tableData:null}},onReachBottom:function(){console.log("触底"),this.total/this.pageSize>this.current?(this.current=this.current+1,this.selectOrders2()):t.showToast({title:"没有更多了",icon:"none"})},methods:{cancelOrder:function(e){var n=this;t.showModal({title:"撤单",content:"确认撤销该工单吗",success:function(o){if(o.confirm){t.showLoading({});var i=getApp().globalData.token;t.request({url:getApp().globalData.BASE_URL+"/admin/removeOrder",data:{token:i,id:e},header:{},success:function(e){console.log(e),t.hideLoading(),444===e.data.status?t.showToast({title:"您的登录信息已过期，请重新登录",duration:2e3,icon:"none",success:function(){setTimeout((function(){t.reLaunch({url:"/pages/login/login"})}),2e3)}}):445===e.data.status?t.showToast({title:"您没有此操作权限",duration:2e3,icon:"none"}):1===e.data?t.showToast({title:"撤单成功",duration:2e3,success:function(){setTimeout((function(){n.selectOrders()}),2e3)}}):t.showToast({title:"撤单失败",duration:2e3,icon:"none"})}})}}})},change:function(t){console.log(t),this.currentIndex=t.current,this.selectOrders2()},lookImg:function(e){console.log(e),e=JSON.parse(e);for(var n=0;n<e.length;n++)e[n]=(getApp().globalData.BASE_URL+"/upload/"+e[n]).replace(/[\r\n]/g,"");console.log(e),t.previewImage({urls:e})},bindPickerChange1:function(t){console.log("picker发送选择改变，携带值为",t.target.value),this.index1=t.target.value},bindPickerChange2:function(t){console.log("picker发送选择改变，携带值为",t.target.value),this.index2=t.target.value},dateChange:function(t){console.log(t),this.selectStartTime=t[0],this.selectEndTime=t[1]+864e5-1,console.log(this.selectStartTime),console.log(this.selectEndTime)},selectOrders:function(){if(console.log(this.status[this.index1]),console.log(this.type[this.index2]),null==this.selectStartTime||null==this.selectEndTime)t.showToast({title:"请选择起止日期",icon:"none"});else{var e=this;t.showLoading({});var n=getApp().globalData.token;t.request({url:getApp().globalData.BASE_URL+"/admin/selectOrders",data:{token:n,status:e.status[e.index1],type:e.type[e.index2],startTime:e.selectStartTime,endTime:e.selectEndTime,pageNum:1,pageSize:e.pageSize},header:{},success:function(n){console.log(n),t.hideLoading(),444===n.data.status?t.showToast({title:"您的登录信息已过期，请重新登录",duration:2e3,icon:"none",success:function(){setTimeout((function(){t.reLaunch({url:"/pages/login/login"})}),2e3)}}):445===n.data.status?t.showToast({title:"您没有此操作权限",duration:2e3,icon:"none"}):(e.tableData=n.data.orders,e.total=n.data.total,e.current=1)}})}},selectOrders2:function(){if(console.log(this.status[this.index1]),console.log(this.type[this.index2]),null==this.selectStartTime||null==this.selectEndTime)t.showToast({title:"请选择起止日期",icon:"none"});else{var e=this;t.showLoading({title:"加载第"+e.current+"页"});var o=getApp().globalData.token;t.request({url:getApp().globalData.BASE_URL+"/admin/selectOrders",data:{token:o,status:e.status[e.index1],type:e.type[e.index2],startTime:e.selectStartTime,endTime:e.selectEndTime,pageNum:e.current,pageSize:e.pageSize},header:{},success:function(o){console.log(o),t.hideLoading(),444===o.data.status?t.showToast({title:"您的登录信息已过期，请重新登录",duration:2e3,icon:"none",success:function(){setTimeout((function(){t.reLaunch({url:"/pages/login/login"})}),2e3)}}):445===o.data.status?t.showToast({title:"您没有此操作权限",duration:2e3,icon:"none"}):(e.tableData=[].concat(n(e.tableData),n(o.data.orders)),e.total=o.data.total)}})}},selectWorkType:function(){var e=getApp().globalData.token,n=this;t.showLoading({}),t.request({url:getApp().globalData.BASE_URL+"/user/selectWorkType",data:{token:e},header:{},success:function(e){if(console.log(e),t.hideLoading(),444===e.data.status)t.showToast({title:"您的登录信息已过期，请重新登录",duration:2e3,icon:"none",success:function(){setTimeout((function(){t.reLaunch({url:"/pages/login/login"})}),2e3)}});else if(445===e.data.status)t.showToast({title:"您没有此操作权限",duration:2e3,icon:"none"});else{n.type.push("全部类别");for(var o=0;o<e.data.length;o++)n.type.push(e.data[o].type)}}})}},created:function(){this.selectWorkType(),this.defaultEndTime=new Date((new Date).toLocaleDateString()).getTime(),this.selectEndTime=this.defaultEndTime+864e5-1}};e.default=r}).call(this,n("543d")["default"])},"79c6":function(t,e,n){"use strict";n.r(e);var o=n("1f8a"),i=n("84f9");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);var s,l=n("f0c5"),r=Object(l["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],s);e["default"]=r.exports},"84f9":function(t,e,n){"use strict";n.r(e);var o=n("4f34"),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);e["default"]=i.a},b47f:function(t,e,n){"use strict";(function(t){n("c6f8");o(n("66fd"));var e=o(n("79c6"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])}},[["b47f","common/runtime","common/vendor"]]]);