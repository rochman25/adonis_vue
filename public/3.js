(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/pages/Users.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--10-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/pages/Users.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store_users_moduleUsers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../store/users/moduleUsers */ "./resources/assets/js/store/users/moduleUsers.js");
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
  data: function data() {
    return {
      isMounted: false
    };
  },
  computed: {
    currentPage: function currentPage() {
      if (this.isMounted) {
        return this.$refs.table.currentx;
      }
    },
    users: function users() {
      // console.log(this.$store.state.users)
      return this.$store.state.users.users;
    },
    queriedItems: function queriedItems() {
      return this.$refs.table ? this.$refs.table.queriedResults.length : this.users.length;
    }
  },
  methods: {},
  created: function created() {
    if (!_store_users_moduleUsers__WEBPACK_IMPORTED_MODULE_0__["default"].isRegistered) {
      this.$store.registerModule("users", _store_users_moduleUsers__WEBPACK_IMPORTED_MODULE_0__["default"]);
      _store_users_moduleUsers__WEBPACK_IMPORTED_MODULE_0__["default"].isRegistered = true;
    }

    this.$store.dispatch("users/fetchDataListItems");
  },
  mounted: function mounted() {
    this.isMounted = true;
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/pages/Users.vue?vue&type=template&id=331e87fa&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/views/pages/Users.vue?vue&type=template&id=331e87fa& ***!
  \****************************************************************************************************************************************************************************************************************/
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
  return _c(
    "vx-card",
    { attrs: { title: "Users List", subtitle: "List data users account" } },
    [
      _c(
        "div",
        [
          _c(
            "vs-table",
            {
              attrs: { stripe: "", data: _vm.users.data.data },
              scopedSlots: _vm._u([
                {
                  key: "default",
                  fn: function(ref) {
                    var data = ref.data
                    return _vm._l(data, function(tr, indextr) {
                      return _c(
                        "vs-tr",
                        { key: indextr },
                        [
                          _c(
                            "vs-td",
                            { attrs: { data: data[indextr].email } },
                            [_vm._v(_vm._s(data[indextr].email))]
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-td",
                            { attrs: { data: data[indextr].username } },
                            [_vm._v(_vm._s(data[indextr].username))]
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-td",
                            { attrs: { data: data[indextr].created_at } },
                            [_vm._v(_vm._s(data[indextr].created_at))]
                          )
                        ],
                        1
                      )
                    })
                  }
                }
              ])
            },
            [
              _c(
                "template",
                { slot: "thead" },
                [
                  _c("vs-th", [_vm._v("Email")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Username")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Created at")])
                ],
                1
              )
            ],
            2
          )
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/store/users/moduleUsers.js":
/*!********************************************************!*\
  !*** ./resources/assets/js/store/users/moduleUsers.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _moduleUsersAction_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moduleUsersAction.js */ "./resources/assets/js/store/users/moduleUsersAction.js");
/* harmony import */ var _moduleUsersState_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moduleUsersState.js */ "./resources/assets/js/store/users/moduleUsersState.js");
/* harmony import */ var _moduleUsersMutation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./moduleUsersMutation.js */ "./resources/assets/js/store/users/moduleUsersMutation.js");
/* harmony import */ var _moduleUsersGetter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./moduleUsersGetter.js */ "./resources/assets/js/store/users/moduleUsersGetter.js");




/* harmony default export */ __webpack_exports__["default"] = ({
  isRegistered: false,
  namespaced: true,
  state: _moduleUsersState_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  actions: _moduleUsersAction_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  mutations: _moduleUsersMutation_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  getters: _moduleUsersGetter_js__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./resources/assets/js/store/users/moduleUsersAction.js":
/*!**************************************************************!*\
  !*** ./resources/assets/js/store/users/moduleUsersAction.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _axios_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/axios.js */ "./resources/assets/js/axios.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  fetchDataListItems: function fetchDataListItems(_ref) {
    var commit = _ref.commit;
    return new Promise(function (resolve, reject) {
      _axios_js__WEBPACK_IMPORTED_MODULE_0__["default"].get("/api/v1/users").then(function (response) {
        commit("SET_PRODUCTS", response.data);
        resolve(response); // console.log(response.data.data.data)
      })["catch"](function (error) {
        reject(error);
      });
    });
  }
});

/***/ }),

/***/ "./resources/assets/js/store/users/moduleUsersGetter.js":
/*!**************************************************************!*\
  !*** ./resources/assets/js/store/users/moduleUsersGetter.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./resources/assets/js/store/users/moduleUsersMutation.js":
/*!****************************************************************!*\
  !*** ./resources/assets/js/store/users/moduleUsersMutation.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_array_find_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.find-index */ "./node_modules/core-js/modules/es6.array.find-index.js");
/* harmony import */ var core_js_modules_es6_array_find_index__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find_index__WEBPACK_IMPORTED_MODULE_0__);


/*=========================================================================================
  File Name: moduleCalendarMutations.js
  Description: Calendar Module Mutations
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

/* harmony default export */ __webpack_exports__["default"] = ({
  ADD_ITEM: function ADD_ITEM(state, item) {
    state.products.unshift(item);
  },
  SET_PRODUCTS: function SET_PRODUCTS(state, products) {
    state.users = products;
  },
  // SET_LABELS(state, labels) {
  //   state.eventLabels = labels
  // },
  UPDATE_PRODUCT: function UPDATE_PRODUCT(state, product) {
    var productIndex = state.products.findIndex(function (p) {
      return p.id == product.id;
    });
    Object.assign(state.products[productIndex], product);
  },
  REMOVE_ITEM: function REMOVE_ITEM(state, itemId) {
    var ItemIndex = state.products.findIndex(function (p) {
      return p.id == itemId;
    });
    state.products.splice(ItemIndex, 1);
  }
});

/***/ }),

/***/ "./resources/assets/js/store/users/moduleUsersState.js":
/*!*************************************************************!*\
  !*** ./resources/assets/js/store/users/moduleUsersState.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  users: []
});

/***/ }),

/***/ "./resources/assets/js/views/pages/Users.vue":
/*!***************************************************!*\
  !*** ./resources/assets/js/views/pages/Users.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_vue_vue_type_template_id_331e87fa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Users.vue?vue&type=template&id=331e87fa& */ "./resources/assets/js/views/pages/Users.vue?vue&type=template&id=331e87fa&");
/* harmony import */ var _Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Users.vue?vue&type=script&lang=js& */ "./resources/assets/js/views/pages/Users.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Users_vue_vue_type_template_id_331e87fa___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Users_vue_vue_type_template_id_331e87fa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/views/pages/Users.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/views/pages/Users.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/assets/js/views/pages/Users.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_10_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/babel-loader/lib??ref--10-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Users.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/pages/Users.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_10_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/views/pages/Users.vue?vue&type=template&id=331e87fa&":
/*!**********************************************************************************!*\
  !*** ./resources/assets/js/views/pages/Users.vue?vue&type=template&id=331e87fa& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_331e87fa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Users.vue?vue&type=template&id=331e87fa& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/views/pages/Users.vue?vue&type=template&id=331e87fa&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_331e87fa___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_331e87fa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);