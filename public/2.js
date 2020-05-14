(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Locations.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Locations.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = ({
  mounted: function mounted() {
    console.log('Component mounted.');
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Locations.vue?vue&type=template&id=789fbafa&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Locations.vue?vue&type=template&id=789fbafa& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "header",
      { staticClass: "page_title" },
      [
        _c("h2", [_vm._v("Locations")]),
        _vm._v(" "),
        _c("router-link", { attrs: { exact: "", to: "locations/add" } }, [
          _c("button", { staticClass: "btn btn-primary float-right" }, [
            _vm._v("Add Locations")
          ])
        ])
      ],
      1
    ),
    _vm._v(" "),
    _vm._m(0)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("table", { staticClass: "table" }, [
      _c("thead", [
        _c("tr", [
          _c("th", { attrs: { scope: "col" } }, [_vm._v("Name")]),
          _vm._v(" "),
          _c("th", { attrs: { scope: "col" } }, [_vm._v("Location")]),
          _vm._v(" "),
          _c("th", { attrs: { scope: "col" } }, [_vm._v("Date Created")]),
          _vm._v(" "),
          _c("th", { attrs: { scope: "col" } }, [_vm._v("Actions")])
        ])
      ]),
      _vm._v(" "),
      _c("tbody", [
        _c("tr", [
          _c("th", { attrs: { scope: "row" } }, [_vm._v("1")]),
          _vm._v(" "),
          _c("td", [_vm._v("Mark")]),
          _vm._v(" "),
          _c("td", [_vm._v("Otto")]),
          _vm._v(" "),
          _c("td", [_vm._v("@mdo")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("th", { attrs: { scope: "row" } }, [_vm._v("2")]),
          _vm._v(" "),
          _c("td", [_vm._v("Jacob")]),
          _vm._v(" "),
          _c("td", [_vm._v("Thornton")]),
          _vm._v(" "),
          _c("td", [_vm._v("@fat")])
        ]),
        _vm._v(" "),
        _c("tr", [
          _c("th", { attrs: { scope: "row" } }, [_vm._v("3")]),
          _vm._v(" "),
          _c("td", [_vm._v("Larry")]),
          _vm._v(" "),
          _c("td", [_vm._v("the Bird")]),
          _vm._v(" "),
          _c("td", [_vm._v("@twitter")])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Locations.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/Locations.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Locations_vue_vue_type_template_id_789fbafa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Locations.vue?vue&type=template&id=789fbafa& */ "./resources/js/components/Locations.vue?vue&type=template&id=789fbafa&");
/* harmony import */ var _Locations_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Locations.vue?vue&type=script&lang=js& */ "./resources/js/components/Locations.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Locations_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Locations_vue_vue_type_template_id_789fbafa___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Locations_vue_vue_type_template_id_789fbafa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Locations.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Locations.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/Locations.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Locations_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Locations.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Locations.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Locations_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Locations.vue?vue&type=template&id=789fbafa&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/Locations.vue?vue&type=template&id=789fbafa& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Locations_vue_vue_type_template_id_789fbafa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Locations.vue?vue&type=template&id=789fbafa& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Locations.vue?vue&type=template&id=789fbafa&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Locations_vue_vue_type_template_id_789fbafa___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Locations_vue_vue_type_template_id_789fbafa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);