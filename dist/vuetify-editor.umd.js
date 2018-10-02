(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vuetify-editor"] = factory();
	else
		root["vuetify-editor"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "1eb2":
/***/ (function(module, exports, __webpack_require__) {

// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}


/***/ }),

/***/ "35e0":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "5856":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VuetifyEditor_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("35e0");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VuetifyEditor_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VuetifyEditor_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VuetifyEditor_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "8c00":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "8fe4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VColor_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8c00");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VColor_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VColor_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VColor_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "c0a4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var red = Object.freeze({
    base: '#f44336',
    lighten5: '#ffebee',
    lighten4: '#ffcdd2',
    lighten3: '#ef9a9a',
    lighten2: '#e57373',
    lighten1: '#ef5350',
    darken1: '#e53935',
    darken2: '#d32f2f',
    darken3: '#c62828',
    darken4: '#b71c1c',
    accent1: '#ff8a80',
    accent2: '#ff5252',
    accent3: '#ff1744',
    accent4: '#d50000'
});
var pink = Object.freeze({
    base: '#e91e63',
    lighten5: '#fce4ec',
    lighten4: '#f8bbd0',
    lighten3: '#f48fb1',
    lighten2: '#f06292',
    lighten1: '#ec407a',
    darken1: '#d81b60',
    darken2: '#c2185b',
    darken3: '#ad1457',
    darken4: '#880e4f',
    accent1: '#ff80ab',
    accent2: '#ff4081',
    accent3: '#f50057',
    accent4: '#c51162'
});
var purple = Object.freeze({
    base: '#9c27b0',
    lighten5: '#f3e5f5',
    lighten4: '#e1bee7',
    lighten3: '#ce93d8',
    lighten2: '#ba68c8',
    lighten1: '#ab47bc',
    darken1: '#8e24aa',
    darken2: '#7b1fa2',
    darken3: '#6a1b9a',
    darken4: '#4a148c',
    accent1: '#ea80fc',
    accent2: '#e040fb',
    accent3: '#d500f9',
    accent4: '#aa00ff'
});
var deepPurple = Object.freeze({
    base: '#673ab7',
    lighten5: '#ede7f6',
    lighten4: '#d1c4e9',
    lighten3: '#b39ddb',
    lighten2: '#9575cd',
    lighten1: '#7e57c2',
    darken1: '#5e35b1',
    darken2: '#512da8',
    darken3: '#4527a0',
    darken4: '#311b92',
    accent1: '#b388ff',
    accent2: '#7c4dff',
    accent3: '#651fff',
    accent4: '#6200ea'
});
var indigo = Object.freeze({
    base: '#3f51b5',
    lighten5: '#e8eaf6',
    lighten4: '#c5cae9',
    lighten3: '#9fa8da',
    lighten2: '#7986cb',
    lighten1: '#5c6bc0',
    darken1: '#3949ab',
    darken2: '#303f9f',
    darken3: '#283593',
    darken4: '#1a237e',
    accent1: '#8c9eff',
    accent2: '#536dfe',
    accent3: '#3d5afe',
    accent4: '#304ffe'
});
var blue = Object.freeze({
    base: '#2196f3',
    lighten5: '#e3f2fd',
    lighten4: '#bbdefb',
    lighten3: '#90caf9',
    lighten2: '#64b5f6',
    lighten1: '#42a5f5',
    darken1: '#1e88e5',
    darken2: '#1976d2',
    darken3: '#1565c0',
    darken4: '#0d47a1',
    accent1: '#82b1ff',
    accent2: '#448aff',
    accent3: '#2979ff',
    accent4: '#2962ff'
});
var lightBlue = Object.freeze({
    base: '#03a9f4',
    lighten5: '#e1f5fe',
    lighten4: '#b3e5fc',
    lighten3: '#81d4fa',
    lighten2: '#4fc3f7',
    lighten1: '#29b6f6',
    darken1: '#039be5',
    darken2: '#0288d1',
    darken3: '#0277bd',
    darken4: '#01579b',
    accent1: '#80d8ff',
    accent2: '#40c4ff',
    accent3: '#00b0ff',
    accent4: '#0091ea'
});
var cyan = Object.freeze({
    base: '#00bcd4',
    lighten5: '#e0f7fa',
    lighten4: '#b2ebf2',
    lighten3: '#80deea',
    lighten2: '#4dd0e1',
    lighten1: '#26c6da',
    darken1: '#00acc1',
    darken2: '#0097a7',
    darken3: '#00838f',
    darken4: '#006064',
    accent1: '#84ffff',
    accent2: '#18ffff',
    accent3: '#00e5ff',
    accent4: '#00b8d4'
});
var teal = Object.freeze({
    base: '#009688',
    lighten5: '#e0f2f1',
    lighten4: '#b2dfdb',
    lighten3: '#80cbc4',
    lighten2: '#4db6ac',
    lighten1: '#26a69a',
    darken1: '#00897b',
    darken2: '#00796b',
    darken3: '#00695c',
    darken4: '#004d40',
    accent1: '#a7ffeb',
    accent2: '#64ffda',
    accent3: '#1de9b6',
    accent4: '#00bfa5'
});
var green = Object.freeze({
    base: '#4caf50',
    lighten5: '#e8f5e9',
    lighten4: '#c8e6c9',
    lighten3: '#a5d6a7',
    lighten2: '#81c784',
    lighten1: '#66bb6a',
    darken1: '#43a047',
    darken2: '#388e3c',
    darken3: '#2e7d32',
    darken4: '#1b5e20',
    accent1: '#b9f6ca',
    accent2: '#69f0ae',
    accent3: '#00e676',
    accent4: '#00c853'
});
var lightGreen = Object.freeze({
    base: '#8bc34a',
    lighten5: '#f1f8e9',
    lighten4: '#dcedc8',
    lighten3: '#c5e1a5',
    lighten2: '#aed581',
    lighten1: '#9ccc65',
    darken1: '#7cb342',
    darken2: '#689f38',
    darken3: '#558b2f',
    darken4: '#33691e',
    accent1: '#ccff90',
    accent2: '#b2ff59',
    accent3: '#76ff03',
    accent4: '#64dd17'
});
var lime = Object.freeze({
    base: '#cddc39',
    lighten5: '#f9fbe7',
    lighten4: '#f0f4c3',
    lighten3: '#e6ee9c',
    lighten2: '#dce775',
    lighten1: '#d4e157',
    darken1: '#c0ca33',
    darken2: '#afb42b',
    darken3: '#9e9d24',
    darken4: '#827717',
    accent1: '#f4ff81',
    accent2: '#eeff41',
    accent3: '#c6ff00',
    accent4: '#aeea00'
});
var yellow = Object.freeze({
    base: '#ffeb3b',
    lighten5: '#fffde7',
    lighten4: '#fff9c4',
    lighten3: '#fff59d',
    lighten2: '#fff176',
    lighten1: '#ffee58',
    darken1: '#fdd835',
    darken2: '#fbc02d',
    darken3: '#f9a825',
    darken4: '#f57f17',
    accent1: '#ffff8d',
    accent2: '#ffff00',
    accent3: '#ffea00',
    accent4: '#ffd600'
});
var amber = Object.freeze({
    base: '#ffc107',
    lighten5: '#fff8e1',
    lighten4: '#ffecb3',
    lighten3: '#ffe082',
    lighten2: '#ffd54f',
    lighten1: '#ffca28',
    darken1: '#ffb300',
    darken2: '#ffa000',
    darken3: '#ff8f00',
    darken4: '#ff6f00',
    accent1: '#ffe57f',
    accent2: '#ffd740',
    accent3: '#ffc400',
    accent4: '#ffab00'
});
var orange = Object.freeze({
    base: '#ff9800',
    lighten5: '#fff3e0',
    lighten4: '#ffe0b2',
    lighten3: '#ffcc80',
    lighten2: '#ffb74d',
    lighten1: '#ffa726',
    darken1: '#fb8c00',
    darken2: '#f57c00',
    darken3: '#ef6c00',
    darken4: '#e65100',
    accent1: '#ffd180',
    accent2: '#ffab40',
    accent3: '#ff9100',
    accent4: '#ff6d00'
});
var deepOrange = Object.freeze({
    base: '#ff5722',
    lighten5: '#fbe9e7',
    lighten4: '#ffccbc',
    lighten3: '#ffab91',
    lighten2: '#ff8a65',
    lighten1: '#ff7043',
    darken1: '#f4511e',
    darken2: '#e64a19',
    darken3: '#d84315',
    darken4: '#bf360c',
    accent1: '#ff9e80',
    accent2: '#ff6e40',
    accent3: '#ff3d00',
    accent4: '#dd2c00'
});
var brown = Object.freeze({
    base: '#795548',
    lighten5: '#efebe9',
    lighten4: '#d7ccc8',
    lighten3: '#bcaaa4',
    lighten2: '#a1887f',
    lighten1: '#8d6e63',
    darken1: '#6d4c41',
    darken2: '#5d4037',
    darken3: '#4e342e',
    darken4: '#3e2723'
});
var blueGrey = Object.freeze({
    base: '#607d8b',
    lighten5: '#eceff1',
    lighten4: '#cfd8dc',
    lighten3: '#b0bec5',
    lighten2: '#90a4ae',
    lighten1: '#78909c',
    darken1: '#546e7a',
    darken2: '#455a64',
    darken3: '#37474f',
    darken4: '#263238'
});
var grey = Object.freeze({
    base: '#9e9e9e',
    lighten5: '#fafafa',
    lighten4: '#f5f5f5',
    lighten3: '#eeeeee',
    lighten2: '#e0e0e0',
    lighten1: '#bdbdbd',
    darken1: '#757575',
    darken2: '#616161',
    darken3: '#424242',
    darken4: '#212121'
});
var shades = Object.freeze({
    black: '#000000',
    white: '#ffffff',
    transparent: 'transparent'
});
exports.default = Object.freeze({
    red: red,
    pink: pink,
    purple: purple,
    deepPurple: deepPurple,
    indigo: indigo,
    blue: blue,
    lightBlue: lightBlue,
    cyan: cyan,
    teal: teal,
    green: green,
    lightGreen: lightGreen,
    lime: lime,
    yellow: yellow,
    amber: amber,
    orange: orange,
    deepOrange: deepOrange,
    brown: brown,
    blueGrey: blueGrey,
    grey: grey,
    shades: shades
});
//# sourceMappingURL=colors.js.map

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
var setPublicPath = __webpack_require__("1eb2");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0595ba96-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/VuetifyEditor/VuetifyEditor.vue?vue&type=template&id=d80b3d1e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',_vm._b({staticClass:"vuetify-editor"},'v-card',_vm.$attrs,false),[_c('v-card-title',[_c('v-btn-toggle',{staticClass:"transparent elevation-0",attrs:{"multiple":""},model:{value:(_vm.state.font_styles),callback:function ($$v) {_vm.$set(_vm.state, "font_styles", $$v)},expression:"state.font_styles"}},_vm._l((_vm.font_style_items),function(item,index){return _c('v-btn',{key:index+'-fontstyle',attrs:{"flat":"","value":item.value},on:{"click":function($event){_vm.execCommand(item.value)}}},[_c('v-icon',[_vm._v(_vm._s(item.icon))])],1)})),_c('v-divider',{staticClass:"mx-2",staticStyle:{"height":"32px"},attrs:{"vertical":""}}),_c('v-btn',{staticClass:"pa-0 ma-0",staticStyle:{"min-width":"40px"},attrs:{"flat":""},on:{"click":function($event){_vm.openDialogColor()}}},[_c('v-icon',{style:({color:_vm.state.foreColor})},[_vm._v("format_color_text")])],1),_c('v-divider',{staticClass:"mx-2",staticStyle:{"height":"32px"},attrs:{"vertical":""}}),_c('v-btn-toggle',{staticClass:"transparent elevation-0",model:{value:(_vm.state.justify),callback:function ($$v) {_vm.$set(_vm.state, "justify", $$v)},expression:"state.justify"}},_vm._l((_vm.justify_items),function(item,index){return _c('v-btn',{key:index+'-justify',attrs:{"flat":"","value":item.value},on:{"click":function($event){_vm.execCommand(item.value)}}},[_c('v-icon',[_vm._v(_vm._s(item.icon))])],1)})),_c('v-divider',{staticClass:"mx-2",staticStyle:{"height":"32px"},attrs:{"vertical":""}}),_c('v-btn-toggle',{staticClass:"transparent elevation-0",model:{value:(_vm.state.list),callback:function ($$v) {_vm.$set(_vm.state, "list", $$v)},expression:"state.list"}},_vm._l((_vm.list_items),function(item,index){return _c('v-btn',{key:index+'-justify',attrs:{"flat":"","value":item.value},on:{"click":function($event){_vm.execCommand(item.value)}}},[_c('v-icon',[_vm._v(_vm._s(item.icon))])],1)})),_c('v-divider',{staticClass:"mx-2",staticStyle:{"height":"32px"},attrs:{"vertical":""}}),_c('v-btn',{staticClass:"pa-0 ma-0",staticStyle:{"min-width":"40px"},attrs:{"flat":""},on:{"click":function($event){_vm.openDialogLink()}}},[_c('v-icon',[_vm._v("link")])],1),_c('v-btn',{staticClass:"pa-0 ma-0",staticStyle:{"min-width":"40px"},attrs:{"flat":""},on:{"click":function($event){_vm.execCommand('unlink')}}},[_c('v-icon',[_vm._v("link_off")])],1),_c('v-divider',{staticClass:"mx-2",staticStyle:{"height":"32px"},attrs:{"vertical":""}}),_c('v-btn',{staticClass:"pa-0 ma-0",staticStyle:{"min-width":"40px"},attrs:{"flat":""},on:{"click":function($event){_vm.openDialogImage()}}},[_c('v-icon',[_vm._v("image")])],1),_c('v-btn',{staticClass:"pa-0 ma-0",staticStyle:{"min-width":"40px"},attrs:{"flat":""},on:{"click":function($event){_vm.openDialogVideo()}}},[_c('v-icon',[_vm._v("video_library")])],1),_c('v-btn',{directives:[{name:"show",rawName:"v-show",value:(_vm.options.save_button_top),expression:"options.save_button_top"}],attrs:{"depressed":"","color":"primary"},on:{"click":function($event){_vm.submitUpdate()}}},[_vm._v("submit update")])],1),_c('v-divider'),_c('v-card-text',{ref:"EditorContent",staticClass:"vuetify-editor-content scroll-y",style:([{height:_vm.options.height-(_vm.options.save_button_top?0:64)+'px'}]),attrs:{"contenteditable":""},domProps:{"innerHTML":_vm._s(_vm.value)},on:{"click":_vm.commandQuery,"keydown":_vm.commandQuery,"paste":_vm.onPaste,"blur":function($event){_vm.selRange = _vm.saveSelection()}}}),_c('v-dialog',{attrs:{"max-width":"500px","transition":"dialog-transition"},model:{value:(_vm.link_dialog),callback:function ($$v) {_vm.link_dialog=$$v},expression:"link_dialog"}},[_c('v-card',[_c('v-card-title',{staticClass:"headline"},[_vm._v("\n        Add Link\n      ")]),_c('v-card-text',[_c('v-text-field',{attrs:{"label":"Link"},on:{"keyup":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }_vm.addLink()}},model:{value:(_vm.input_link),callback:function ($$v) {_vm.input_link=$$v},expression:"input_link"}}),_c('v-switch',{attrs:{"label":"Opens the linked document in a new window or tab"},model:{value:(_vm.input_link_options._blank),callback:function ($$v) {_vm.$set(_vm.input_link_options, "_blank", $$v)},expression:"input_link_options._blank"}})],1),_c('v-card-actions',[_c('v-spacer'),_c('v-btn',{attrs:{"flat":""},on:{"click":function($event){_vm.link_dialog=false,_vm.input_link=null}}},[_vm._v("Cancel")]),_c('v-btn',{attrs:{"flat":"","color":"primary"},on:{"click":function($event){_vm.addLink()}}},[_vm._v("Submit")])],1)],1)],1),_c('v-dialog',{attrs:{"max-width":"500px","transition":"dialog-transition"},model:{value:(_vm.image_dialog),callback:function ($$v) {_vm.image_dialog=$$v},expression:"image_dialog"}},[(_vm.image_dialog)?_c('v-card',[_c('v-card-title',{staticClass:"headline"},[_vm._v("\n        Add Picture\n      ")]),_c('v-card-text',[_c('v-text-field',{attrs:{"label":"Link"},on:{"keyup":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }_vm.addImage()}},model:{value:(_vm.input_image),callback:function ($$v) {_vm.input_image=$$v},expression:"input_image"}}),_c('div',[_c('v-btn',{attrs:{"color":"primary"},on:{"click":function($event){_vm.$refs.image_input.click()}}},[_c('v-icon',{attrs:{"left":""}},[_vm._v("backup")]),_vm._v("\n            Upload\n          ")],1),_c('input',{directives:[{name:"show",rawName:"v-show",value:(false),expression:"false"}],ref:"image_input",attrs:{"type":"file","accept":_vm.input_image_options.accept},on:{"change":_vm.uploadImageLocal}}),_c('v-layout',{staticClass:"my-3",attrs:{"row":""}},[_c('v-flex',{staticClass:"mr-3",attrs:{"xs12":""}},[_c('v-text-field',{attrs:{"type":"number","label":"Width"},model:{value:(_vm.input_image_options.width),callback:function ($$v) {_vm.$set(_vm.input_image_options, "width", $$v)},expression:"input_image_options.width"}})],1),_c('v-flex',{staticClass:"ml-3",attrs:{"xs12":""}},[_c('v-text-field',{attrs:{"type":"number","label":"Height"},model:{value:(_vm.input_image_options.height),callback:function ($$v) {_vm.$set(_vm.input_image_options, "height", $$v)},expression:"input_image_options.height"}})],1)],1)],1)],1),_c('v-subheader',[_vm._v("Review:")]),_c('v-card-text',{staticClass:"text-xs-center"},[_c('img',{directives:[{name:"show",rawName:"v-show",value:(_vm.review_image),expression:"review_image"}],staticStyle:{"max-width":"100%"},attrs:{"width":_vm.input_image_options.width,"height":_vm.input_image_options.height,"src":_vm.input_image,"alt":"Image"},on:{"error":function($event){_vm.review_image=false},"load":function($event){_vm.review_image=true}}})]),_c('v-card-actions',[_c('v-spacer'),_c('v-btn',{attrs:{"flat":""},on:{"click":function($event){_vm.image_dialog=false,_vm.input_image=null}}},[_vm._v("Cancel")]),_c('v-btn',{attrs:{"flat":"","color":"primary"},on:{"click":function($event){_vm.addImage()}}},[_vm._v("Submit")])],1)],1):_vm._e()],1),_c('v-dialog',{attrs:{"scrollable":"","max-width":"600px","transition":"dialog-transition"},model:{value:(_vm.video_dialog),callback:function ($$v) {_vm.video_dialog=$$v},expression:"video_dialog"}},[(_vm.video_dialog)?_c('v-card',[_c('v-card-title',{staticClass:"headline"},[_vm._v("\n        Add Video\n      ")]),_c('v-card-text',[_c('v-text-field',{attrs:{"label":"Link"},on:{"keyup":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }_vm.addVideo()}},model:{value:(_vm.input_video),callback:function ($$v) {_vm.input_video=$$v},expression:"input_video"}}),_c('v-layout',{staticClass:"my-3",attrs:{"row":""}},[_c('v-flex',{staticClass:"mr-3",attrs:{"xs12":""}},[_c('v-text-field',{attrs:{"type":"number","label":"Width"},model:{value:(_vm.input_video_options.width),callback:function ($$v) {_vm.$set(_vm.input_video_options, "width", $$v)},expression:"input_video_options.width"}})],1),_c('v-flex',{staticClass:"ml-3",attrs:{"xs12":""}},[_c('v-text-field',{attrs:{"type":"number","label":"Height"},model:{value:(_vm.input_video_options.height),callback:function ($$v) {_vm.$set(_vm.input_video_options, "height", $$v)},expression:"input_video_options.height"}})],1)],1),_c('v-switch',{attrs:{"label":"Youtube video"},model:{value:(_vm.input_video_options.is_youtube),callback:function ($$v) {_vm.$set(_vm.input_video_options, "is_youtube", $$v)},expression:"input_video_options.is_youtube"}}),_c('v-switch',{directives:[{name:"show",rawName:"v-show",value:(_vm.input_video_options.is_youtube),expression:"input_video_options.is_youtube"}],attrs:{"label":"Show title Youtube video"},model:{value:(_vm.input_video_options.has_title_youtube),callback:function ($$v) {_vm.$set(_vm.input_video_options, "has_title_youtube", $$v)},expression:"input_video_options.has_title_youtube"}}),_c('v-subheader',{staticClass:"pa-0"},[_vm._v("Review:")]),(_vm.input_video)?_c('div',{staticClass:"text-xs-center"},[(_vm.input_video_options.is_youtube)?_c('iframe',{staticStyle:{"max-width":"100%"},attrs:{"width":"500","height":"315","src":'https://www.youtube.com/embed/'+_vm.input_video_options.id_youtube+'?rel=0'+(_vm.input_video_options.has_title_youtube?'':'&showinfo=0'),"frameborder":"0","allow":"autoplay; encrypted-media","allowfullscreen":""}}):_c('video',{staticStyle:{"max-width":"100%"},attrs:{"width":"500","height":"315","controls":"","playsinline":"","src":_vm.input_video,"type":"video/mp4"}},[_vm._v("\n            Your browser does not support the video tag.\n          ")])]):_vm._e()],1),_c('v-card-actions',[_c('v-spacer'),_c('v-btn',{attrs:{"flat":""},on:{"click":function($event){_vm.video_dialog=false,_vm.input_video=null}}},[_vm._v("Cancel")]),_c('v-btn',{attrs:{"flat":"","color":"primary"},on:{"click":function($event){_vm.addVideo()}}},[_vm._v("Submit")])],1)],1):_vm._e()],1),_c('v-dialog',{attrs:{"max-width":"400px","transition":"dialog-transition"},model:{value:(_vm.color_dialog),callback:function ($$v) {_vm.color_dialog=$$v},expression:"color_dialog"}},[_c('v-card',{attrs:{"width":"100%"}},[_c('v-card-title',{staticClass:"title"},[_vm._v("\n        Material Color Picker\n      ")]),_c('v-card-text',[_c('p',{staticClass:"subheading"},[_vm._v("Hex Color: "),_c('span',{staticClass:"grey--text text--darken-1"},[_vm._v(_vm._s(_vm.input_color))])]),_c('v-color',{model:{value:(_vm.input_color),callback:function ($$v) {_vm.input_color=$$v},expression:"input_color"}})],1),_c('v-card-actions',[_c('v-spacer'),_c('v-btn',{attrs:{"flat":""},on:{"click":function($event){_vm.color_dialog=false,_vm.input_color=null}}},[_vm._v("Cancel")]),_c('v-btn',{attrs:{"flat":"","color":"primary"},on:{"click":function($event){_vm.addForeColor()}}},[_vm._v("Submit")])],1)],1)],1),[_c('v-divider'),_c('v-card-actions',[_c('v-spacer'),_c('v-btn',{attrs:{"depressed":"","color":"primary"},on:{"click":function($event){_vm.submitUpdate()}}},[_vm._v("submit update")])],1)]],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/VuetifyEditor/VuetifyEditor.vue?vue&type=template&id=d80b3d1e&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0595ba96-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/VuetifyEditor/VColor.vue?vue&type=template&id=0678b262&
var VColorvue_type_template_id_0678b262_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',{staticClass:"scroll-y",attrs:{"flat":"","height":"300"}},[_c('v-layout',{attrs:{"row":"","wrap":""}},_vm._l((_vm.palette),function(item,index){return _c('v-flex',{key:index+'-color-group',staticClass:"mb-1 text-xs-center",attrs:{"xs3":""}},_vm._l((item),function(subitem,subindex){return _c('v-btn',{key:subindex+'-color-'+index,staticClass:"ma-0 pa-0",staticStyle:{"min-width":"70px"},style:({backgroundColor:subitem}),attrs:{"small":""},on:{"click":function($event){_vm.$emit('input',subitem)}}},[_c('v-icon',{directives:[{name:"show",rawName:"v-show",value:(subitem===_vm.value),expression:"subitem===value"}],staticClass:"check-icon",attrs:{"color":"white"}},[_vm._v("check")])],1)}))}))],1)}
var VColorvue_type_template_id_0678b262_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/VuetifyEditor/VColor.vue?vue&type=template&id=0678b262&

// EXTERNAL MODULE: ./node_modules/vuetify/es5/util/colors.js
var colors = __webpack_require__("c0a4");
var colors_default = /*#__PURE__*/__webpack_require__.n(colors);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/VuetifyEditor/VColor.vue?vue&type=script&lang=js&
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


/* harmony default export */ var VColorvue_type_script_lang_js_ = ({
  props: {
    value: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  },
  computed: {
    palette() {
      const palette = [];
      Object.values(colors_default.a).forEach(color => {
        palette.push(Object.values(color));
      });
      return palette;
    }
  }
});

// CONCATENATED MODULE: ./src/components/VuetifyEditor/VColor.vue?vue&type=script&lang=js&
 /* harmony default export */ var VuetifyEditor_VColorvue_type_script_lang_js_ = (VColorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/VuetifyEditor/VColor.vue?vue&type=style&index=0&lang=css&
var VColorvue_type_style_index_0_lang_css_ = __webpack_require__("8fe4");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/VuetifyEditor/VColor.vue






/* normalize component */

var component = normalizeComponent(
  VuetifyEditor_VColorvue_type_script_lang_js_,
  VColorvue_type_template_id_0678b262_render,
  VColorvue_type_template_id_0678b262_staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "VColor.vue"
/* harmony default export */ var VColor = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/VuetifyEditor/VuetifyEditor.vue?vue&type=script&lang=js&
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


/* harmony default export */ var VuetifyEditorvue_type_script_lang_js_ = ({
  name: "VuetifyEditor",
  components: {
    VColor: VColor
  },
  inheritAttrs: false,
  props: {
    value: {
      type: String,
      default: "<p>Your Content</p"
    },
    options: {
      type: Object,
      default: () => {
        return {
          paste_format: true,
          height: "",
          save_button_top: true
        };
      }
    }
  },
  data() {
    return {
      color_dialog: false, // Trạng thái Dialog Color Picker
      input_color: "", // Giá trị color trong Dialog Color Picker
      link_dialog: false, // Trang thái Dialog tạo Link
      input_link: null, // Giá trị link trong Dialog Link
      input_link_options: {
        // Option mặc định cho Link
        _blank: true
      },
      image_dialog: false, // Trang thái Dialog add Image
      input_image: null, // Giá trị image link trong Dialog Link
      input_image_options: {
        // Option mặc định cho Image
        width: 200,
        height: null,
        accept: "image/gif, image/jpg, image/png, image/jpeg"
      },
      review_image: false, // Hiển thị ảnh xem trước
      video_dialog: false, // Trang Thái Dialog add Video
      input_video: null, // Giá trị Video link trong Dialog Link
      input_video_options: {
        // Option mặc định cho Video
        width: 500,
        height: 310,
        is_youtube: false, // Là Video Youtube
        id_youtube: null, // ID Video Youtube
        has_title_youtube: true // Hiển thị Title video youtube
      },
      sel_select: null, // Biến chứa vùng select
      selRange: null, // Object đang được select
      state: {
        // State toolbar
        font_styles: [],
        justify: [],
        list: "",
        foreColor: ""
      },
      inputTimeout: null,
      font_style_items: [
        {
          icon: "format_bold",
          value: "bold"
        },
        {
          icon: "format_italic",
          value: "italic"
        },
        {
          icon: "format_underline",
          value: "underline"
        },
        {
          icon: "strikethrough_s",
          value: "strikeThrough"
        }
      ],
      justify_items: [
        {
          icon: "format_align_left",
          value: "justifyLeft"
        },
        {
          icon: "format_align_center",
          value: "justifyCenter"
        },
        {
          icon: "format_align_right",
          value: "justifyRight"
        },
        {
          icon: "format_align_justify",
          value: "justifyFull"
        }
      ],
      list_items: [
        {
          icon: "format_list_numbered",
          value: "insertOrderedList"
        },
        {
          icon: "format_list_bulleted",
          value: "insertUnorderedList"
        }
      ]
    };
  },
  watch: {
    input_video(val) {
      /**
       * Kiểm tra Link Nhập vào có phải Youtube
       */
      let is_youtube = new RegExp(/https:\/\/www.youtube.com(.*)\w+/g);
      if (val && is_youtube.test(val)) {
        this.input_video_options.is_youtube = true;
        //
        try {
          this.input_video_options.id_youtube = val
            .split("?v=")[1]
            .split("&")[0];
        } catch (error) {
          return error;
          // console.log(error);
        }
      } else {
        this.input_video_options.is_youtube = false;
      }
    }
  },
  methods: {
    /**
     * Save range selection
     */
    saveSelection() {
      if (window.getSelection) {
        this.sel_select = window.getSelection();
        if (this.sel_select.getRangeAt && this.sel_select.rangeCount) {
          return this.sel_select.getRangeAt(0);
        }
      } else if (document.selection && document.selection.createRange) {
        return document.selection.createRange();
      }
      return null;
    },

    /**
     * Restore range Selection
     */
    restoreSelection(range) {
      if (range) {
        if (window.getSelection) {
          this.sel_select = window.getSelection();
          this.sel_select.removeAllRanges();
          this.sel_select.addRange(range);
        } else if (document.selection && range.select) {
          range.select();
        }
      }
    },
    /**
     * Tạo liên kết
     */
    addLink() {
      this.restoreSelection(this.selRange);
      this.execCommand("createLink", false, this.input_link);
      // Add attribute target _blank open new tab
      if (this.input_link_options._blank)
        this.sel_select.anchorNode.parentElement.target = "_blank";
      this.link_dialog = false;
      this.input_link = null;
      this.input_link_options._blank = true;
    },
    /**
     * Tạo Hình Ảnh
     */
    addImage() {
      this.restoreSelection(this.selRange);
      this.execCommand(
        "insertHTML",
        false,
        `<img ${
          this.input_image_options.width
            ? 'width="' + this.input_image_options.width + '" '
            : ""
        } ${
          this.input_image_options.height
            ? 'height="' + this.input_image_options.height + '"'
            : ""
        } src="${this.input_image}" alt="Image" style="max-width:100%;"/>`
      );
      this.image_dialog = false;
      // reset image options
      this.input_image = null;
      this.review_image = false;
      this.input_image_options.width = 200;
      this.input_image_options.height = null;
    },
    /**
     * Tạo Video
     */
    addVideo() {
      this.restoreSelection(this.selRange);

      let content_video = "";
      if (this.input_video_options.is_youtube) {
        content_video = `<iframe ${
          this.input_video_options.width
            ? 'width="' + this.input_video_options.width + '" '
            : ""
        } ${
          this.input_video_options.height
            ? 'height="' + this.input_video_options.height + '"'
            : ""
        } src="https://www.youtube.com/embed/${
          this.input_video_options.id_youtube
        }?rel=0${
          this.input_video_options.has_title_youtube ? "" : "&amp;showinfo=0"
        }" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen  style="max-width:100%;"></iframe>`;
      } else {
        content_video = `<video ${
          this.input_video_options.width
            ? 'width="' + this.input_video_options.width + '" '
            : ""
        } ${
          this.input_video_options.height
            ? 'height="' + this.input_video_options.height + '"'
            : ""
        } controls playsinline src="${
          this.input_video
        }" type="video/mp4"  style="max-width:100%;">
            Your browser does not support the video tag.
          </video>`;
      }
      // Thêm $nbsp; đầu và cuối thẻ video/iframe để có thể chọn bởi người dùng
      content_video = `<p>&nbsp;${content_video}&nbsp;</p>`;
      // Thực thi thêm mã vào vùng đã chọn
      this.execCommand("insertHTML", false, content_video);

      this.video_dialog = false;
      // Reset video options
      this.input_video = null;
      this.$set(this, "input_video", {
        width: 500,
        height: 310,
        is_youtube: false,
        id_youtube: null,
        has_title_youtube: true
      });
    },
    /**
     * Tạo fore Color
     */
    addForeColor() {
      // Thực thi thêm mã vào vùng đã chọn
      this.execCommand("foreColor", false, this.input_color);
      this.color_dialog = false;
      // Reset color
      this.input_color = null;
    },
    /**
     * Mở Dialog tác vụ
     */
    openDialogColor() {
      this.color_dialog = true;
    },
    openDialogLink() {
      this.link_dialog = true;
      // Kiểm tra vùng chọn và lấy thuộc tính thẻ <a> nếu có (Mục đích để đổ data lên form chỉnh sửa thẻ đang được chọn)
      let el_select = this.sel_select.anchorNode.parentElement;
      if (el_select && el_select.tagName === "A") {
        this.input_link = el_select.href;
        this.input_link_options._blank = el_select.target;
      }
    },
    openDialogImage() {
      this.image_dialog = true;
      // Kiểm tra vùng chọn và lấy thuộc tính thẻ <img> nếu có (Mục đích để đổ data lên form chỉnh sửa thẻ đang được chọn)
      let range_select = this.selRange.cloneContents();
      if (
        range_select &&
        range_select.firstChild &&
        range_select.firstChild.tagName === "IMG"
      ) {
        this.input_image = range_select.firstChild.src;
        this.input_image_options.width = range_select.firstChild.width;
        this.input_image_options.height = range_select.firstChild.height;
      }
    },
    openDialogVideo() {
      this.video_dialog = true;
      // Kiểm tra vùng chọn và lấy thuộc tính thẻ <vide>/<iframe> nếu có (Mục đích để đổ data lên form chỉnh sửa thẻ đang được chọn)
      let range_select = this.selRange.cloneContents();
      if (
        range_select &&
        range_select.firstChild &&
        range_select.firstChild.nextSibling
      ) {
        if (range_select.firstChild.nextSibling.tagName === "VIDEO") {
          this.input_video = range_select.firstChild.nextSibling.src;
          this.input_video_options.width =
            range_select.firstChild.nextSibling.width;
          this.input_video_options.height =
            range_select.firstChild.nextSibling.height;
          this.input_video_options.is_youtube = false;
        } else if (range_select.firstChild.nextSibling.tagName === "IFRAME") {
          let src = range_select.firstChild.nextSibling.src
            .split("/embed/")[1]
            .split("?")[0];
          this.input_video = `https://www.youtube.com/watch?v=${src}`;
          this.input_video_options.width =
            range_select.firstChild.nextSibling.width;
          this.input_video_options.height =
            range_select.firstChild.nextSibling.height;
          this.input_video_options.has_title_youtube =
            (range_select.firstChild.nextSibling.src || "").indexOf(
              "showinfo=0"
            ) === -1;
          this.input_video_options.is_youtube = true;
        }
      }
    },
    /**
     * Tải lên hình ảnh, lấy ảnh dưới dạng mã hóa base64
     */
    uploadImageLocal(e) {
      if (e.target.files && e.target.files[0]) {
        var reader = new FileReader();
        reader.onload = ev => {
          this.input_image = ev.target.result;
        };
        reader.readAsDataURL(e.target.files[0]);
      }
    },
    /**
     * Thực thi execCommand
     */
    execCommand(commandName, showDefaultUI = false, value = "") {
      document.execCommand(commandName, showDefaultUI, value);
    },
    /**
     * Emmit value editor (v-model)
     */
    submitUpdate() {
      this.$emit("input", this.$refs.EditorContent.innerHTML);
    },
    /**
     * Bật tắt trạng thái của chức năng trên toolbar phù hợp với định dạng nội dung vùng chọn
     */
    toggleItemArray(states, value, addItem = false) {
      if (addItem) {
        !states.includes(value) ? states.push(value) : "";
      } else {
        let index = states.indexOf(value);
        if (index !== -1) {
          states.splice(index, 1);
        }
      }
    },
    /**
     * Chuyển màu rgb sang hex  rgb(r,g,b) -> #xxxxxx
     */
    rgb2hex(rgb) {
      // Chỉ chấp nhận mã màu rgb() tất cả màu rgba() sẽ được hiển thị màu #000
      if (rgb.indexOf("rgba") === -1) {
        return (
          "#" +
          rgb
            .substr(4, rgb.indexOf(")") - 4)
            .split(",")
            .map(color => parseInt(color).toString(16))
            .join("")
        );
      }
      return "#000000";
    },
    onPaste(e) {
      if (!this.options.paste_format) {
        e.preventDefault();
        document.execCommand(
          "insertHTML",
          false,
          e.clipboardData.getData("text/plain")
        );
      }
    },
    commandQuery() {
      clearTimeout(this.inputTimeout);
      this.inputTimeout = setTimeout(() => {
        // this.saveSelection();
        clearTimeout(this.inputTimeout);
        this.toggleItemArray(
          this.state.font_styles,
          "bold",
          document.queryCommandState("bold")
        );
        this.toggleItemArray(
          this.state.font_styles,
          "italic",
          document.queryCommandState("italic")
        );
        this.toggleItemArray(
          this.state.font_styles,
          "underline",
          document.queryCommandState("underline")
        );

        this.$set(
          this.state,
          "justify",
          document.queryCommandState("justifyLeft")
            ? "justifyLeft"
            : document.queryCommandState("justifyRight")
              ? "justifyRight"
              : document.queryCommandState("justifyCenter")
                ? "justifyCenter"
                : document.queryCommandState("justifyFull")
                  ? "justifyFull"
                  : ""
        );
        this.$set(
          this.state,
          "list",
          document.queryCommandState("insertOrderedList")
            ? "insertOrderedList"
            : document.queryCommandState("insertUnorderedList")
              ? "insertUnorderedList"
              : ""
        );
        this.$set(
          this.state,
          "foreColor",
          this.rgb2hex(document.queryCommandValue("foreColor"))
        );
        this.input_color = this.state.foreColor;
      }, 500);
    }
  }
});

// CONCATENATED MODULE: ./src/components/VuetifyEditor/VuetifyEditor.vue?vue&type=script&lang=js&
 /* harmony default export */ var VuetifyEditor_VuetifyEditorvue_type_script_lang_js_ = (VuetifyEditorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/VuetifyEditor/VuetifyEditor.vue?vue&type=style&index=0&lang=css&
var VuetifyEditorvue_type_style_index_0_lang_css_ = __webpack_require__("5856");

// CONCATENATED MODULE: ./src/components/VuetifyEditor/VuetifyEditor.vue






/* normalize component */

var VuetifyEditor_component = normalizeComponent(
  VuetifyEditor_VuetifyEditorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

VuetifyEditor_component.options.__file = "VuetifyEditor.vue"
/* harmony default export */ var VuetifyEditor = (VuetifyEditor_component.exports);
// CONCATENATED MODULE: ./src/components/VuetifyEditor/index.js
// import Vue from vue

/* harmony default export */ var components_VuetifyEditor = (VuetifyEditor);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (components_VuetifyEditor);



/***/ })

/******/ });
});
//# sourceMappingURL=vuetify-editor.umd.js.map