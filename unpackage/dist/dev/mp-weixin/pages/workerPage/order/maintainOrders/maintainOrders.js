(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/workerPage/order/maintainOrders/maintainOrders"],{

/***/ 203:
/*!********************************************************************************************************************************************************!*\
  !*** C:/Users/19464/Desktop/zha/project/uni-app/maintainSystem_uniapp/main.js?{"page":"pages%2FworkerPage%2Forder%2FmaintainOrders%2FmaintainOrders"} ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _maintainOrders = _interopRequireDefault(__webpack_require__(/*! ./pages/workerPage/order/maintainOrders/maintainOrders.vue */ 204));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_maintainOrders.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 204:
/*!*********************************************************************************************************************************!*\
  !*** C:/Users/19464/Desktop/zha/project/uni-app/maintainSystem_uniapp/pages/workerPage/order/maintainOrders/maintainOrders.vue ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _maintainOrders_vue_vue_type_template_id_73b2bdc5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./maintainOrders.vue?vue&type=template&id=73b2bdc5& */ 205);
/* harmony import */ var _maintainOrders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./maintainOrders.vue?vue&type=script&lang=js& */ 207);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _maintainOrders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _maintainOrders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../HBuilderX.2.6.11.20200409/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);

var renderjs




/* normalize component */

var component = Object(_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _maintainOrders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _maintainOrders_vue_vue_type_template_id_73b2bdc5___WEBPACK_IMPORTED_MODULE_0__["render"],
  _maintainOrders_vue_vue_type_template_id_73b2bdc5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _maintainOrders_vue_vue_type_template_id_73b2bdc5___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/workerPage/order/maintainOrders/maintainOrders.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 205:
/*!****************************************************************************************************************************************************************!*\
  !*** C:/Users/19464/Desktop/zha/project/uni-app/maintainSystem_uniapp/pages/workerPage/order/maintainOrders/maintainOrders.vue?vue&type=template&id=73b2bdc5& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_maintainOrders_vue_vue_type_template_id_73b2bdc5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../HBuilderX.2.6.11.20200409/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../HBuilderX.2.6.11.20200409/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../../../HBuilderX.2.6.11.20200409/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../HBuilderX.2.6.11.20200409/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../HBuilderX.2.6.11.20200409/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../HBuilderX.2.6.11.20200409/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./maintainOrders.vue?vue&type=template&id=73b2bdc5& */ 206);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_maintainOrders_vue_vue_type_template_id_73b2bdc5___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_maintainOrders_vue_vue_type_template_id_73b2bdc5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_maintainOrders_vue_vue_type_template_id_73b2bdc5___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_maintainOrders_vue_vue_type_template_id_73b2bdc5___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 206:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/19464/Desktop/zha/project/uni-app/maintainSystem_uniapp/pages/workerPage/order/maintainOrders/maintainOrders.vue?vue&type=template&id=73b2bdc5& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    gUpload: function() {
      return __webpack_require__.e(/*! import() | components/g-upload/g-upload */ "components/g-upload/g-upload").then(__webpack_require__.bind(null, /*! @/components/g-upload/g-upload.vue */ 334))
    },
    uniTable: function() {
      return __webpack_require__.e(/*! import() | uni_modules/uni-table/components/uni-table/uni-table */ "uni_modules/uni-table/components/uni-table/uni-table").then(__webpack_require__.bind(null, /*! @/uni_modules/uni-table/components/uni-table/uni-table.vue */ 285))
    },
    uniTr: function() {
      return __webpack_require__.e(/*! import() | uni_modules/uni-table/components/uni-tr/uni-tr */ "uni_modules/uni-table/components/uni-tr/uni-tr").then(__webpack_require__.bind(null, /*! @/uni_modules/uni-table/components/uni-tr/uni-tr.vue */ 292))
    },
    uniTh: function() {
      return __webpack_require__.e(/*! import() | uni_modules/uni-table/components/uni-th/uni-th */ "uni_modules/uni-table/components/uni-th/uni-th").then(__webpack_require__.bind(null, /*! @/uni_modules/uni-table/components/uni-th/uni-th.vue */ 299))
    },
    uniTd: function() {
      return __webpack_require__.e(/*! import() | uni_modules/uni-table/components/uni-td/uni-td */ "uni_modules/uni-table/components/uni-td/uni-td").then(__webpack_require__.bind(null, /*! @/uni_modules/uni-table/components/uni-td/uni-td.vue */ 306))
    }
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 207:
/*!**********************************************************************************************************************************************************!*\
  !*** C:/Users/19464/Desktop/zha/project/uni-app/maintainSystem_uniapp/pages/workerPage/order/maintainOrders/maintainOrders.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_maintainOrders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../HBuilderX.2.6.11.20200409/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../HBuilderX.2.6.11.20200409/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../../HBuilderX.2.6.11.20200409/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../HBuilderX.2.6.11.20200409/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../HBuilderX.2.6.11.20200409/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./maintainOrders.vue?vue&type=script&lang=js& */ 208);
/* harmony import */ var _HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_maintainOrders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_maintainOrders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_maintainOrders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_maintainOrders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_2_6_11_20200409_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_maintainOrders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 208:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/19464/Desktop/zha/project/uni-app/maintainSystem_uniapp/pages/workerPage/order/maintainOrders/maintainOrders.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default =
{
  data: function data() {
    return {
      columnNum: 3,
      imgList: [],
      imgPath: [],
      tableData: null,
      id: null,
      showPop: false, //弹窗
      consumable: null };

  },
  methods: {
    confirmOrder: function confirmOrder(id) {
      this.id = id;
      this.showPop = true;
    },
    //弹窗
    confirmPop: function confirmPop() {//确认
      if (this.consumable == null || this.consumable == "") {
        uni.showToast({
          title: "请填写维修耗材",
          icon: "none" });

      } else {
        if (this.imgList.length == 0) {
          console.log("没有选择图片，直接提交确认");
          this.addConsumable();
        } else {
          this.uploadImg(this.imgList, 0);
        }
      }
    },
    cancelPop: function cancelPop() {//取消
      this.consumable = null;
      this.showPop = false;
    },
    chooseFile: function chooseFile(list, v) {
      this.imgList = list;
    },
    imgDelete: function imgDelete(list, eq) {
      this.imgList = list;
    },
    uploadImg: function uploadImg(imgList, i) {
      var that = this;
      uni.showLoading({
        title: "正在上传第" + (i + 1) + "张图片" });

      uni.uploadFile({
        url: getApp().globalData.BASE_URL + '/user/uploadImgOne',
        filePath: imgList[i],
        name: 'file',
        success: function success(response) {
          uni.hideLoading();
          console.log(response);
          that.imgPath.push(response.data);
          if (++i < imgList.length) {
            that.uploadImg(imgList, i);
          } else {
            that.addConsumable();
          }
        } });

    },
    addConsumable: function addConsumable() {
      var that = this;
      uni.showLoading({
        title: "正在确认" });

      var token = getApp().globalData.token;
      var id = that.id;
      var consumable = that.consumable;
      var imgsfileids2 = JSON.stringify(that.imgPath);
      uni.request({
        url: getApp().globalData.BASE_URL + '/worker/completeOrder',
        data: {
          token: token,
          id: id,
          consumable: consumable,
          imgsfileids2: imgsfileids2 },

        header: {},
        success: function success(response) {
          console.log(response);
          uni.hideLoading();
          if (response.data.status === 444) {
            uni.showToast({
              title: '您的登录信息已过期，请重新登录',
              duration: 2000,
              icon: "none",
              success: function success() {
                setTimeout(function () {
                  uni.reLaunch({
                    url: "/pages/login/login" });

                }, 2000);
              } });

          } else if (response.data.status === 445) {
            uni.showToast({
              title: '您没有此操作权限',
              duration: 2000,
              icon: "none" });

          } else if (response.data === 1) {
            uni.showToast({
              title: '确认成功',
              duration: 2000,
              success: function success() {
                setTimeout(function () {
                  uni.redirectTo({
                    url: "/pages/workerPage/order/maintainOrders/maintainOrders" });

                }, 2000);
              } });

          } else {
            uni.showToast({
              title: '提交失败',
              duration: 2000,
              icon: "none" });

          }
        } });

    },
    lookImg: function lookImg(imgs) {
      console.log(imgs);
      imgs = JSON.parse(imgs);
      for (var i = 0; i < imgs.length; i++) {
        imgs[i] = (getApp().globalData.BASE_URL + "/upload/" + imgs[i]).replace(/[\r\n]/g, "");
      }
      console.log(imgs);
      uni.previewImage({
        urls: imgs });

    },
    selectOrders: function selectOrders() {
      var that = this;
      uni.showLoading({});
      var token = getApp().globalData.token;
      uni.request({
        url: getApp().globalData.BASE_URL + '/worker/selectOrders',
        data: {
          token: token,
          status: '工人已接单' },

        header: {},
        success: function success(response) {
          console.log(response);
          uni.hideLoading();
          if (response.data.status === 444) {
            uni.showToast({
              title: '您的登录信息已过期，请重新登录',
              duration: 2000,
              icon: "none",
              success: function success() {
                setTimeout(function () {
                  uni.reLaunch({
                    url: "/pages/login/login" });

                }, 2000);
              } });

          } else if (response.data.status === 445) {
            uni.showToast({
              title: '您没有此操作权限',
              duration: 2000,
              icon: "none" });

          } else {
            that.tableData = response.data.orders;
          }
        } });


    } },

  created: function created() {
    this.selectOrders();
  },
  onShow: function onShow() {} };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ })

},[[203,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/pages/workerPage/order/maintainOrders/maintainOrders.js.map