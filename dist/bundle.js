/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/background-img.png */ "./src/assets/background-img.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/mark-X.png */ "./src/assets/mark-X.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/mark-O.png */ "./src/assets/mark-O.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/player-icon.png */ "./src/assets/player-icon.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/AI-icon.png */ "./src/assets/AI-icon.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n.container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  height: 100vh;\n}\n\n.main-container__mark-selection {\n  display: none;\n}\n\n.mark-selection--x {\n  width: 140px;\n  height: 140px;\n  border: 5px solid #5c4c68;\n  border-radius: 15px;\n  cursor: pointer;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-size: 80px;\n  background-repeat: no-repeat;\n  background-position: center;\n  transform: translate(-50px, 130px);\n}\n.mark-selection--x:hover {\n  position: relative;\n  z-index: 2;\n  outline: 2px solid #6dd6da;\n}\n.mark-selection--o {\n  width: 140px;\n  height: 140px;\n  border: 5px solid #5c4c68;\n  border-radius: 15px;\n  cursor: pointer;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-size: 80px;\n  background-repeat: no-repeat;\n  background-position: center;\n  transform: translate(50px, -130px);\n}\n.mark-selection--o:hover {\n  outline: 2px solid #edb458;\n}\n\n.enemy-selection--player {\n  display: none;\n  width: 140px;\n  height: 140px;\n  border: 5px solid #5c4c68;\n  border-radius: 15px;\n  cursor: pointer;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n  background-size: 80px;\n  background-repeat: no-repeat;\n  background-position: center;\n  transform: translate(-50px, 10px);\n}\n.enemy-selection--player:hover {\n  position: relative;\n  z-index: 2;\n  outline: 2px solid #6dd6da;\n}\n.enemy-selection--AI {\n  width: 140px;\n  height: 140px;\n  border: 5px solid #5c4c68;\n  border-radius: 15px;\n  cursor: pointer;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n  background-size: 80px;\n  background-repeat: no-repeat;\n  background-position: center;\n  transform: translate(50px, -10px);\n  display: none;\n}\n.enemy-selection--AI:hover {\n  outline: 2px solid #edb458;\n}\n\n.main__board {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: 1fr 1fr 1fr;\n  justify-items: center;\n  align-items: center;\n  gap: 1.5rem;\n  position: relative;\n}\n.main__board-cell {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 160px;\n  height: 160px;\n  border: 1px solid green;\n}\n.main__board-cell:hover {\n  cursor: pointer;\n}\n.main__board-divider--horizontal {\n  position: absolute;\n  width: 0;\n  height: 0;\n}\n.main__board-divider--horizontal::before {\n  content: \"\";\n  display: block;\n  background-color: #5c4c68;\n  width: 540px;\n  height: 12px;\n  transform: translate(-270px, 86px);\n  border-radius: 20px;\n}\n.main__board-divider--horizontal::after {\n  content: \"\";\n  display: block;\n  background-color: #5c4c68;\n  width: 540px;\n  height: 12px;\n  transform: translate(-270px, -110px);\n  border-radius: 20px;\n}\n.main__board-divider--vertical {\n  position: absolute;\n  width: 0;\n  height: 0;\n}\n.main__board-divider--vertical::before {\n  position: fixed;\n  content: \"\";\n  display: block;\n  background-color: #5c4c68;\n  width: 12px;\n  height: 540px;\n  transform: translate(87px, -265px);\n  border-radius: 20px;\n}\n.main__board-divider--vertical::after {\n  content: \"\";\n  display: block;\n  background-color: #5c4c68;\n  width: 12px;\n  height: 540px;\n  transform: translate(-97px, -265px);\n  border-radius: 20px;\n}", "",{"version":3,"sources":["webpack://./src/styles/base/_reset.scss","webpack://./src/styles/main.scss","webpack://./src/styles/base/_general.scss","webpack://./src/styles/pages/_markSelection.scss","webpack://./src/styles/abstracts.scss/_mixins.scss","webpack://./src/styles/pages/_enemySelection.scss","webpack://./src/styles/pages/_game.scss","webpack://./src/styles/abstracts.scss/_variables.scss"],"names":[],"mappings":"AAAA;;;EAGE,SAAA;EACA,UAAA;EACA,sBAAA;ACCF;;ACNA;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,mDAAA;EACA,aAAA;ADSF;;AEdA;EACE,aAAA;AFiBF;;AEbE;ECJA,YAAA;EACA,aAAA;EACA,yBAAA;EACA,mBAAA;EACA,eAAA;EAEA,mDAAA;EACA,qBAAA;EACA,4BAAA;EACA,2BAAA;EACA,kCAAA;AHoBF;AEvBI;EACE,kBAAA;EACA,UAAA;EACA,0BAAA;AFyBN;AErBE;ECdA,YAAA;EACA,aAAA;EACA,yBAAA;EACA,mBAAA;EACA,eAAA;EAEA,mDAAA;EACA,qBAAA;EACA,4BAAA;EACA,2BAAA;EACA,kCAAA;AHqCF;AE9BI;EACE,0BAAA;AFgCN;;AIlDE;EACE,aAAA;EDDF,YAAA;EACA,aAAA;EACA,yBAAA;EACA,mBAAA;EACA,eAAA;EAEA,mDAAA;EACA,qBAAA;EACA,4BAAA;EACA,2BAAA;EACA,iCAAA;AHsDF;AI5DI;EACE,kBAAA;EACA,UAAA;EACA,0BAAA;AJ8DN;AI3DE;EDVA,YAAA;EACA,aAAA;EACA,yBAAA;EACA,mBAAA;EACA,eAAA;EAEA,mDAAA;EACA,qBAAA;EACA,4BAAA;EACA,2BAAA;EACA,iCAAA;ECEE,aAAA;AJsEJ;AIrEI;EACE,0BAAA;AJuEN;;AKtFA;EACE,aAAA;EACA,kCAAA;EACA,+BAAA;EAEA,qBAAA;EACA,mBAAA;EAEA,WAAA;EAEA,kBAAA;ALsFF;AKpFE;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EAEA,YAAA;EACA,aAAA;EACA,uBAAA;ALqFJ;AKnFI;EACE,eAAA;ALqFN;AKhFI;EACE,kBAAA;EACA,QAAA;EACA,SAAA;ALkFN;AKhFM;EFjBJ,WAAA;EACA,cAAA;EACA,yBGbkB;EHelB,YEc6B;EFb7B,YEaoC;EFXpC,kCAAA;EAEA,mBAAA;AHiGF;AKrFM;EFrBJ,WAAA;EACA,cAAA;EACA,yBGbkB;EHelB,YEkB6B;EFjB7B,YEiBoC;EFfpC,oCAAA;EAEA,mBAAA;AH0GF;AK1FI;EACE,kBAAA;EACA,QAAA;EACA,SAAA;AL4FN;AK1FM;EACE,eAAA;EF/BN,WAAA;EACA,cAAA;EACA,yBGbkB;EHelB,WE4B6B;EF3B7B,aE2BmC;EFzBnC,kCAAA;EAEA,mBAAA;AHyHF;AKhGM;EFlCJ,WAAA;EACA,cAAA;EACA,yBGbkB;EHelB,WE+B6B;EF9B7B,aE8BmC;EF5BnC,mCAAA;EAEA,mBAAA;AHkIF","sourcesContent":["*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  // outline: 2px solid green;\n}\n","*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n.container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: url(../assets/background-img.png);\n  height: 100vh;\n}\n\n.main-container__mark-selection {\n  display: none;\n}\n\n.mark-selection--x {\n  width: 140px;\n  height: 140px;\n  border: 5px solid #5c4c68;\n  border-radius: 15px;\n  cursor: pointer;\n  background: url(../assets/mark-X.png);\n  background-size: 80px;\n  background-repeat: no-repeat;\n  background-position: center;\n  transform: translate(-50px, 130px);\n}\n.mark-selection--x:hover {\n  position: relative;\n  z-index: 2;\n  outline: 2px solid #6dd6da;\n}\n.mark-selection--o {\n  width: 140px;\n  height: 140px;\n  border: 5px solid #5c4c68;\n  border-radius: 15px;\n  cursor: pointer;\n  background: url(../assets/mark-O.png);\n  background-size: 80px;\n  background-repeat: no-repeat;\n  background-position: center;\n  transform: translate(50px, -130px);\n}\n.mark-selection--o:hover {\n  outline: 2px solid #edb458;\n}\n\n.enemy-selection--player {\n  display: none;\n  width: 140px;\n  height: 140px;\n  border: 5px solid #5c4c68;\n  border-radius: 15px;\n  cursor: pointer;\n  background: url(../assets/player-icon.png);\n  background-size: 80px;\n  background-repeat: no-repeat;\n  background-position: center;\n  transform: translate(-50px, 10px);\n}\n.enemy-selection--player:hover {\n  position: relative;\n  z-index: 2;\n  outline: 2px solid #6dd6da;\n}\n.enemy-selection--AI {\n  width: 140px;\n  height: 140px;\n  border: 5px solid #5c4c68;\n  border-radius: 15px;\n  cursor: pointer;\n  background: url(../assets/AI-icon.png);\n  background-size: 80px;\n  background-repeat: no-repeat;\n  background-position: center;\n  transform: translate(50px, -10px);\n  display: none;\n}\n.enemy-selection--AI:hover {\n  outline: 2px solid #edb458;\n}\n\n.main__board {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: 1fr 1fr 1fr;\n  justify-items: center;\n  align-items: center;\n  gap: 1.5rem;\n  position: relative;\n}\n.main__board-cell {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 160px;\n  height: 160px;\n  border: 1px solid green;\n}\n.main__board-cell:hover {\n  cursor: pointer;\n}\n.main__board-divider--horizontal {\n  position: absolute;\n  width: 0;\n  height: 0;\n}\n.main__board-divider--horizontal::before {\n  content: \"\";\n  display: block;\n  background-color: #5c4c68;\n  width: 540px;\n  height: 12px;\n  transform: translate(-270px, 86px);\n  border-radius: 20px;\n}\n.main__board-divider--horizontal::after {\n  content: \"\";\n  display: block;\n  background-color: #5c4c68;\n  width: 540px;\n  height: 12px;\n  transform: translate(-270px, -110px);\n  border-radius: 20px;\n}\n.main__board-divider--vertical {\n  position: absolute;\n  width: 0;\n  height: 0;\n}\n.main__board-divider--vertical::before {\n  position: fixed;\n  content: \"\";\n  display: block;\n  background-color: #5c4c68;\n  width: 12px;\n  height: 540px;\n  transform: translate(87px, -265px);\n  border-radius: 20px;\n}\n.main__board-divider--vertical::after {\n  content: \"\";\n  display: block;\n  background-color: #5c4c68;\n  width: 12px;\n  height: 540px;\n  transform: translate(-97px, -265px);\n  border-radius: 20px;\n}",".container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: url(../assets/background-img.png);\n  height: 100vh;\n}\n\n//  USED TO VISUALIZE IN APP.JS\n// .main {\n//   &-container {\n//   }\n\n//   &__board {\n//     &-container {\n//     }\n//     z-index: 2;\n//     display: grid;\n//     grid-template-columns: 1fr 1fr 1fr;\n//     grid-template-rows: 1fr 1fr 1fr;\n\n//     gap: 1rem;\n//     justify-items: center;\n//     align-items: center;\n\n//     &-cell {\n//       display: flex;\n//       justify-content: center;\n//       align-items: center;\n\n//       width: 120px;\n//       height: 120px;\n//       background-color: red;\n//       border-left: 1px solid green;\n\n//       &:hover {\n//         cursor: pointer;\n//       }\n//     }\n//   }\n// }\n",".main-container__mark-selection {\n  display: none;\n}\n\n.mark-selection {\n  &--x {\n    @include box-select(mark-X, -50px, 130px);\n    // display: none;\n    &:hover {\n      position: relative;\n      z-index: 2;\n      outline: 2px solid $first-mark-color;\n    }\n  }\n\n  &--o {\n    @include box-select(mark-O, 50px, -130px);\n    // display: none;\n    &:hover {\n      outline: 2px solid $second-mark-color;\n    }\n  }\n}\n","@mixin box-select($img, $x, $y) {\n  width: 140px;\n  height: 140px;\n  border: 5px solid $primary-container;\n  border-radius: 15px;\n  cursor: pointer;\n\n  background: url(../assets/#{$img}.png);\n  background-size: 80px;\n  background-repeat: no-repeat;\n  background-position: center;\n  transform: translate($x, $y);\n}\n\n@mixin board-divider($width, $height, $x, $y) {\n  content: \"\";\n  display: block;\n  background-color: $primary-container;\n\n  width: $width;\n  height: $height;\n\n  transform: translate($x, $y);\n\n  border-radius: 20px;\n}\n",".enemy-selection {\n  &--player {\n    display: none;\n    @include box-select(player-icon, -50px, 10px);\n\n    &:hover {\n      position: relative;\n      z-index: 2;\n      outline: 2px solid $first-mark-color;\n    }\n  }\n  &--AI {\n    @include box-select(AI-icon, 50px, -10px);\n    display: none;\n    &:hover {\n      outline: 2px solid $second-mark-color;\n    }\n  }\n}\n",".main__board {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: 1fr 1fr 1fr;\n\n  justify-items: center;\n  align-items: center;\n\n  gap: 1.5rem;\n\n  position: relative;\n\n  &-cell {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    width: 160px;\n    height: 160px;\n    border: 1px solid green;\n\n    &:hover {\n      cursor: pointer;\n    }\n  }\n\n  &-divider {\n    &--horizontal {\n      position: absolute;\n      width: 0;\n      height: 0;\n\n      &::before {\n        @include board-divider(540px, 12px, -270px, 86px);\n      }\n\n      &::after {\n        @include board-divider(540px, 12px, -270px, -110px);\n      }\n    }\n    &--vertical {\n      position: absolute;\n      width: 0;\n      height: 0;\n\n      &::before {\n        position: fixed;\n        @include board-divider(12px, 540px, 87px, -265px);\n      }\n      &::after {\n        @include board-divider(12px, 540px, -97px, -265px);\n      }\n    }\n  }\n}\n","// COLORS\n\n$primary: #3a3042;\n$on-primary: #beb3c7;\n$primary-container: #5c4c68;\n\n$first-mark-color: #6dd6da;\n$second-mark-color: #edb458;\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/AI-icon.png":
/*!********************************!*\
  !*** ./src/assets/AI-icon.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fada1bfe0717f884aa48.png";

/***/ }),

/***/ "./src/assets/background-img.png":
/*!***************************************!*\
  !*** ./src/assets/background-img.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5f3525434e0ad75f2e50.png";

/***/ }),

/***/ "./src/assets/mark-O.png":
/*!*******************************!*\
  !*** ./src/assets/mark-O.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "394604b0dfab2256d9d2.png";

/***/ }),

/***/ "./src/assets/mark-X.png":
/*!*******************************!*\
  !*** ./src/assets/mark-X.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "44b333bacc1297e16dde.png";

/***/ }),

/***/ "./src/assets/player-icon.png":
/*!************************************!*\
  !*** ./src/assets/player-icon.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "415bd416d0f27ecad052.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"bundle": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _assets_mark_X_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/mark-X.png */ "./src/assets/mark-X.png");






function insertImg(img) {
  return `<img src="${img}">`;
}

const Board = (() => {
  const cells = document.querySelectorAll(".main__board-cell");
  console.log(cells);
  return { cells };
})();

const Player = (name, mark) => {
  const getName = () => name;
  const getMark = () => mark;

  const score = 0;

  return { getName, getMark, score };
};

const player1 = Player("robert", "X");
const player2 = Player("mark", "O");

const Game = (() => {
  // current board
  let currBoard = Array(9);

  // check if there is currently a winner
  let winner = false;

  // Player switch
  let currPlayerTurn = player2;
  let currPlayer = () => {
    if (currPlayerTurn === player1) {
      return (currPlayerTurn = player2);
    } else return (currPlayerTurn = player1);
  };

  // change board state
  Board.cells.forEach((cell, i) => {
    cell.addEventListener("click", () => {
      if (typeof currBoard[i] === "undefined") {
        currBoard[i] = currPlayer().getMark(); // gets images

        // cell.textContent = currBoard[i];insertImg(xImg)
        cell.innerHtml = insertImg(_assets_mark_X_png__WEBPACK_IMPORTED_MODULE_1__);
        console.log(cell.textContent);
        checkWinCondition();
      }

      if (winner) {
        currPlayerTurn.score++;

        setTimeout(resetBoard, 1000);
      }
    });
  });

  function resetBoard() {
    currBoard = Array(9);
    for (let i = 0; i < Board.cells.length; i++) {
      Board.cells[i].textContent = undefined;
    }
    currPlayerTurn = player2;
    winner = false;
  }

  // Check Win Condition
  function checkWinCondition() {
    if (
      //ROWS
      (currBoard[0] === currPlayerTurn.getMark() &&
        currBoard[1] === currPlayerTurn.getMark() &&
        currBoard[2] === currPlayerTurn.getMark()) ||
      (currBoard[3] === currPlayerTurn.getMark() &&
        currBoard[4] === currPlayerTurn.getMark() &&
        currBoard[5] === currPlayerTurn.getMark()) ||
      (currBoard[6] === currPlayerTurn.getMark() &&
        currBoard[7] === currPlayerTurn.getMark() &&
        currBoard[8] === currPlayerTurn.getMark()) ||
      //COLUMNS
      (currBoard[0] === currPlayerTurn.getMark() &&
        currBoard[3] === currPlayerTurn.getMark() &&
        currBoard[6] === currPlayerTurn.getMark()) ||
      (currBoard[1] === currPlayerTurn.getMark() &&
        currBoard[4] === currPlayerTurn.getMark() &&
        currBoard[7] === currPlayerTurn.getMark()) ||
      (currBoard[2] === currPlayerTurn.getMark() &&
        currBoard[5] === currPlayerTurn.getMark() &&
        currBoard[8] === currPlayerTurn.getMark()) ||
      //DIAGONALS
      (currBoard[0] === currPlayerTurn.getMark() &&
        currBoard[4] === currPlayerTurn.getMark() &&
        currBoard[8] === currPlayerTurn.getMark()) ||
      (currBoard[2] === currPlayerTurn.getMark() &&
        currBoard[4] === currPlayerTurn.getMark() &&
        currBoard[6] === currPlayerTurn.getMark())
    ) {
      winner = currPlayerTurn.getName();
    }
  }
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUEsV0FBVztBQUNYOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQzs7QUFFL0MsMkNBQTJDO0FBQzNDLG1DQUFtQywrQ0FBSTtBQUN2QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBLG9CQUFvQix3QkFBd0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aWMtdGFjLXRvZS8uL3NyYy9zdHlsZXMvbWFpbi5zY3NzIiwid2VicGFjazovL3RpYy10YWMtdG9lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS8uL3NyYy9zdHlsZXMvbWFpbi5zY3NzPzY5YzciLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RpYy10YWMtdG9lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90aWMtdGFjLXRvZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RpYy10YWMtdG9lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdGljLXRhYy10b2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RpYy10YWMtdG9lLy4vc3JjL2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2JhY2tncm91bmQtaW1nLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9tYXJrLVgucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL21hcmstTy5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvcGxheWVyLWljb24ucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL0FJLWljb24ucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLm1haW4tY29udGFpbmVyX19tYXJrLXNlbGVjdGlvbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubWFyay1zZWxlY3Rpb24tLXgge1xcbiAgd2lkdGg6IDE0MHB4O1xcbiAgaGVpZ2h0OiAxNDBweDtcXG4gIGJvcmRlcjogNXB4IHNvbGlkICM1YzRjNjg7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogODBweDtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTBweCwgMTMwcHgpO1xcbn1cXG4ubWFyay1zZWxlY3Rpb24tLXg6aG92ZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMjtcXG4gIG91dGxpbmU6IDJweCBzb2xpZCAjNmRkNmRhO1xcbn1cXG4ubWFyay1zZWxlY3Rpb24tLW8ge1xcbiAgd2lkdGg6IDE0MHB4O1xcbiAgaGVpZ2h0OiAxNDBweDtcXG4gIGJvcmRlcjogNXB4IHNvbGlkICM1YzRjNjg7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogODBweDtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MHB4LCAtMTMwcHgpO1xcbn1cXG4ubWFyay1zZWxlY3Rpb24tLW86aG92ZXIge1xcbiAgb3V0bGluZTogMnB4IHNvbGlkICNlZGI0NTg7XFxufVxcblxcbi5lbmVteS1zZWxlY3Rpb24tLXBsYXllciB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgd2lkdGg6IDE0MHB4O1xcbiAgaGVpZ2h0OiAxNDBweDtcXG4gIGJvcmRlcjogNXB4IHNvbGlkICM1YzRjNjg7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogODBweDtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTBweCwgMTBweCk7XFxufVxcbi5lbmVteS1zZWxlY3Rpb24tLXBsYXllcjpob3ZlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAyO1xcbiAgb3V0bGluZTogMnB4IHNvbGlkICM2ZGQ2ZGE7XFxufVxcbi5lbmVteS1zZWxlY3Rpb24tLUFJIHtcXG4gIHdpZHRoOiAxNDBweDtcXG4gIGhlaWdodDogMTQwcHg7XFxuICBib3JkZXI6IDVweCBzb2xpZCAjNWM0YzY4O1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDgwcHg7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTBweCwgLTEwcHgpO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLmVuZW15LXNlbGVjdGlvbi0tQUk6aG92ZXIge1xcbiAgb3V0bGluZTogMnB4IHNvbGlkICNlZGI0NTg7XFxufVxcblxcbi5tYWluX19ib2FyZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxLjVyZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5tYWluX19ib2FyZC1jZWxsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTYwcHg7XFxuICBoZWlnaHQ6IDE2MHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XFxufVxcbi5tYWluX19ib2FyZC1jZWxsOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLm1haW5fX2JvYXJkLWRpdmlkZXItLWhvcml6b250YWwge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDA7XFxuICBoZWlnaHQ6IDA7XFxufVxcbi5tYWluX19ib2FyZC1kaXZpZGVyLS1ob3Jpem9udGFsOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1YzRjNjg7XFxuICB3aWR0aDogNTQwcHg7XFxuICBoZWlnaHQ6IDEycHg7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMjcwcHgsIDg2cHgpO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuLm1haW5fX2JvYXJkLWRpdmlkZXItLWhvcml6b250YWw6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWM0YzY4O1xcbiAgd2lkdGg6IDU0MHB4O1xcbiAgaGVpZ2h0OiAxMnB4O1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTI3MHB4LCAtMTEwcHgpO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuLm1haW5fX2JvYXJkLWRpdmlkZXItLXZlcnRpY2FsIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAwO1xcbiAgaGVpZ2h0OiAwO1xcbn1cXG4ubWFpbl9fYm9hcmQtZGl2aWRlci0tdmVydGljYWw6OmJlZm9yZSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVjNGM2ODtcXG4gIHdpZHRoOiAxMnB4O1xcbiAgaGVpZ2h0OiA1NDBweDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDg3cHgsIC0yNjVweCk7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cXG4ubWFpbl9fYm9hcmQtZGl2aWRlci0tdmVydGljYWw6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWM0YzY4O1xcbiAgd2lkdGg6IDEycHg7XFxuICBoZWlnaHQ6IDU0MHB4O1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTk3cHgsIC0yNjVweCk7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2Jhc2UvX3Jlc2V0LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvbWFpbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2Jhc2UvX2dlbmVyYWwuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9wYWdlcy9fbWFya1NlbGVjdGlvbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2Fic3RyYWN0cy5zY3NzL19taXhpbnMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9wYWdlcy9fZW5lbXlTZWxlY3Rpb24uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9wYWdlcy9fZ2FtZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2Fic3RyYWN0cy5zY3NzL192YXJpYWJsZXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0VBR0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtBQ0NGOztBQ05BO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtREFBQTtFQUNBLGFBQUE7QURTRjs7QUVkQTtFQUNFLGFBQUE7QUZpQkY7O0FFYkU7RUNKQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBRUEsbURBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQ0FBQTtBSG9CRjtBRXZCSTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLDBCQUFBO0FGeUJOO0FFckJFO0VDZEEsWUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUVBLG1EQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0NBQUE7QUhxQ0Y7QUU5Qkk7RUFDRSwwQkFBQTtBRmdDTjs7QUlsREU7RUFDRSxhQUFBO0VEREYsWUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUVBLG1EQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUNBQUE7QUhzREY7QUk1REk7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSwwQkFBQTtBSjhETjtBSTNERTtFRFZBLFlBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFFQSxtREFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLGlDQUFBO0VDRUUsYUFBQTtBSnNFSjtBSXJFSTtFQUNFLDBCQUFBO0FKdUVOOztBS3RGQTtFQUNFLGFBQUE7RUFDQSxrQ0FBQTtFQUNBLCtCQUFBO0VBRUEscUJBQUE7RUFDQSxtQkFBQTtFQUVBLFdBQUE7RUFFQSxrQkFBQTtBTHNGRjtBS3BGRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBRUEsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBTHFGSjtBS25GSTtFQUNFLGVBQUE7QUxxRk47QUtoRkk7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FMa0ZOO0FLaEZNO0VGakJKLFdBQUE7RUFDQSxjQUFBO0VBQ0EseUJHYmtCO0VIZWxCLFlFYzZCO0VGYjdCLFlFYW9DO0VGWHBDLGtDQUFBO0VBRUEsbUJBQUE7QUhpR0Y7QUtyRk07RUZyQkosV0FBQTtFQUNBLGNBQUE7RUFDQSx5Qkdia0I7RUhlbEIsWUVrQjZCO0VGakI3QixZRWlCb0M7RUZmcEMsb0NBQUE7RUFFQSxtQkFBQTtBSDBHRjtBSzFGSTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUw0Rk47QUsxRk07RUFDRSxlQUFBO0VGL0JOLFdBQUE7RUFDQSxjQUFBO0VBQ0EseUJHYmtCO0VIZWxCLFdFNEI2QjtFRjNCN0IsYUUyQm1DO0VGekJuQyxrQ0FBQTtFQUVBLG1CQUFBO0FIeUhGO0FLaEdNO0VGbENKLFdBQUE7RUFDQSxjQUFBO0VBQ0EseUJHYmtCO0VIZWxCLFdFK0I2QjtFRjlCN0IsYUU4Qm1DO0VGNUJuQyxtQ0FBQTtFQUVBLG1CQUFBO0FIa0lGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLy8gb3V0bGluZTogMnB4IHNvbGlkIGdyZWVuO1xcbn1cXG5cIixcIiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiB1cmwoLi4vYXNzZXRzL2JhY2tncm91bmQtaW1nLnBuZyk7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4ubWFpbi1jb250YWluZXJfX21hcmstc2VsZWN0aW9uIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5tYXJrLXNlbGVjdGlvbi0teCB7XFxuICB3aWR0aDogMTQwcHg7XFxuICBoZWlnaHQ6IDE0MHB4O1xcbiAgYm9yZGVyOiA1cHggc29saWQgIzVjNGM2ODtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kOiB1cmwoLi4vYXNzZXRzL21hcmstWC5wbmcpO1xcbiAgYmFja2dyb3VuZC1zaXplOiA4MHB4O1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MHB4LCAxMzBweCk7XFxufVxcbi5tYXJrLXNlbGVjdGlvbi0teDpob3ZlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAyO1xcbiAgb3V0bGluZTogMnB4IHNvbGlkICM2ZGQ2ZGE7XFxufVxcbi5tYXJrLXNlbGVjdGlvbi0tbyB7XFxuICB3aWR0aDogMTQwcHg7XFxuICBoZWlnaHQ6IDE0MHB4O1xcbiAgYm9yZGVyOiA1cHggc29saWQgIzVjNGM2ODtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kOiB1cmwoLi4vYXNzZXRzL21hcmstTy5wbmcpO1xcbiAgYmFja2dyb3VuZC1zaXplOiA4MHB4O1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwcHgsIC0xMzBweCk7XFxufVxcbi5tYXJrLXNlbGVjdGlvbi0tbzpob3ZlciB7XFxuICBvdXRsaW5lOiAycHggc29saWQgI2VkYjQ1ODtcXG59XFxuXFxuLmVuZW15LXNlbGVjdGlvbi0tcGxheWVyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICB3aWR0aDogMTQwcHg7XFxuICBoZWlnaHQ6IDE0MHB4O1xcbiAgYm9yZGVyOiA1cHggc29saWQgIzVjNGM2ODtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kOiB1cmwoLi4vYXNzZXRzL3BsYXllci1pY29uLnBuZyk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDgwcHg7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwcHgsIDEwcHgpO1xcbn1cXG4uZW5lbXktc2VsZWN0aW9uLS1wbGF5ZXI6aG92ZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMjtcXG4gIG91dGxpbmU6IDJweCBzb2xpZCAjNmRkNmRhO1xcbn1cXG4uZW5lbXktc2VsZWN0aW9uLS1BSSB7XFxuICB3aWR0aDogMTQwcHg7XFxuICBoZWlnaHQ6IDE0MHB4O1xcbiAgYm9yZGVyOiA1cHggc29saWQgIzVjNGM2ODtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kOiB1cmwoLi4vYXNzZXRzL0FJLWljb24ucG5nKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogODBweDtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MHB4LCAtMTBweCk7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4uZW5lbXktc2VsZWN0aW9uLS1BSTpob3ZlciB7XFxuICBvdXRsaW5lOiAycHggc29saWQgI2VkYjQ1ODtcXG59XFxuXFxuLm1haW5fX2JvYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEuNXJlbTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLm1haW5fX2JvYXJkLWNlbGwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxNjBweDtcXG4gIGhlaWdodDogMTYwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcXG59XFxuLm1haW5fX2JvYXJkLWNlbGw6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ubWFpbl9fYm9hcmQtZGl2aWRlci0taG9yaXpvbnRhbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMDtcXG4gIGhlaWdodDogMDtcXG59XFxuLm1haW5fX2JvYXJkLWRpdmlkZXItLWhvcml6b250YWw6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVjNGM2ODtcXG4gIHdpZHRoOiA1NDBweDtcXG4gIGhlaWdodDogMTJweDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0yNzBweCwgODZweCk7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cXG4ubWFpbl9fYm9hcmQtZGl2aWRlci0taG9yaXpvbnRhbDo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1YzRjNjg7XFxuICB3aWR0aDogNTQwcHg7XFxuICBoZWlnaHQ6IDEycHg7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMjcwcHgsIC0xMTBweCk7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cXG4ubWFpbl9fYm9hcmQtZGl2aWRlci0tdmVydGljYWwge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDA7XFxuICBoZWlnaHQ6IDA7XFxufVxcbi5tYWluX19ib2FyZC1kaXZpZGVyLS12ZXJ0aWNhbDo6YmVmb3JlIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWM0YzY4O1xcbiAgd2lkdGg6IDEycHg7XFxuICBoZWlnaHQ6IDU0MHB4O1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoODdweCwgLTI2NXB4KTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxufVxcbi5tYWluX19ib2FyZC1kaXZpZGVyLS12ZXJ0aWNhbDo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1YzRjNjg7XFxuICB3aWR0aDogMTJweDtcXG4gIGhlaWdodDogNTQwcHg7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtOTdweCwgLTI2NXB4KTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxufVwiLFwiLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogdXJsKC4uL2Fzc2V0cy9iYWNrZ3JvdW5kLWltZy5wbmcpO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLy8gIFVTRUQgVE8gVklTVUFMSVpFIElOIEFQUC5KU1xcbi8vIC5tYWluIHtcXG4vLyAgICYtY29udGFpbmVyIHtcXG4vLyAgIH1cXG5cXG4vLyAgICZfX2JvYXJkIHtcXG4vLyAgICAgJi1jb250YWluZXIge1xcbi8vICAgICB9XFxuLy8gICAgIHotaW5kZXg6IDI7XFxuLy8gICAgIGRpc3BsYXk6IGdyaWQ7XFxuLy8gICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuLy8gICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnI7XFxuXFxuLy8gICAgIGdhcDogMXJlbTtcXG4vLyAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbi8vICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbi8vICAgICAmLWNlbGwge1xcbi8vICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuLy8gICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuLy8gICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4vLyAgICAgICB3aWR0aDogMTIwcHg7XFxuLy8gICAgICAgaGVpZ2h0OiAxMjBweDtcXG4vLyAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuLy8gICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBncmVlbjtcXG5cXG4vLyAgICAgICAmOmhvdmVyIHtcXG4vLyAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4vLyAgICAgICB9XFxuLy8gICAgIH1cXG4vLyAgIH1cXG4vLyB9XFxuXCIsXCIubWFpbi1jb250YWluZXJfX21hcmstc2VsZWN0aW9uIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5tYXJrLXNlbGVjdGlvbiB7XFxuICAmLS14IHtcXG4gICAgQGluY2x1ZGUgYm94LXNlbGVjdChtYXJrLVgsIC01MHB4LCAxMzBweCk7XFxuICAgIC8vIGRpc3BsYXk6IG5vbmU7XFxuICAgICY6aG92ZXIge1xcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICB6LWluZGV4OiAyO1xcbiAgICAgIG91dGxpbmU6IDJweCBzb2xpZCAkZmlyc3QtbWFyay1jb2xvcjtcXG4gICAgfVxcbiAgfVxcblxcbiAgJi0tbyB7XFxuICAgIEBpbmNsdWRlIGJveC1zZWxlY3QobWFyay1PLCA1MHB4LCAtMTMwcHgpO1xcbiAgICAvLyBkaXNwbGF5OiBub25lO1xcbiAgICAmOmhvdmVyIHtcXG4gICAgICBvdXRsaW5lOiAycHggc29saWQgJHNlY29uZC1tYXJrLWNvbG9yO1xcbiAgICB9XFxuICB9XFxufVxcblwiLFwiQG1peGluIGJveC1zZWxlY3QoJGltZywgJHgsICR5KSB7XFxuICB3aWR0aDogMTQwcHg7XFxuICBoZWlnaHQ6IDE0MHB4O1xcbiAgYm9yZGVyOiA1cHggc29saWQgJHByaW1hcnktY29udGFpbmVyO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gIGJhY2tncm91bmQ6IHVybCguLi9hc3NldHMvI3skaW1nfS5wbmcpO1xcbiAgYmFja2dyb3VuZC1zaXplOiA4MHB4O1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKCR4LCAkeSk7XFxufVxcblxcbkBtaXhpbiBib2FyZC1kaXZpZGVyKCR3aWR0aCwgJGhlaWdodCwgJHgsICR5KSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29udGFpbmVyO1xcblxcbiAgd2lkdGg6ICR3aWR0aDtcXG4gIGhlaWdodDogJGhlaWdodDtcXG5cXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKCR4LCAkeSk7XFxuXFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cXG5cIixcIi5lbmVteS1zZWxlY3Rpb24ge1xcbiAgJi0tcGxheWVyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgQGluY2x1ZGUgYm94LXNlbGVjdChwbGF5ZXItaWNvbiwgLTUwcHgsIDEwcHgpO1xcblxcbiAgICAmOmhvdmVyIHtcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgei1pbmRleDogMjtcXG4gICAgICBvdXRsaW5lOiAycHggc29saWQgJGZpcnN0LW1hcmstY29sb3I7XFxuICAgIH1cXG4gIH1cXG4gICYtLUFJIHtcXG4gICAgQGluY2x1ZGUgYm94LXNlbGVjdChBSS1pY29uLCA1MHB4LCAtMTBweCk7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICY6aG92ZXIge1xcbiAgICAgIG91dGxpbmU6IDJweCBzb2xpZCAkc2Vjb25kLW1hcmstY29sb3I7XFxuICAgIH1cXG4gIH1cXG59XFxuXCIsXCIubWFpbl9fYm9hcmQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyO1xcblxcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIGdhcDogMS41cmVtO1xcblxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgJi1jZWxsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIHdpZHRoOiAxNjBweDtcXG4gICAgaGVpZ2h0OiAxNjBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XFxuXFxuICAgICY6aG92ZXIge1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgfVxcbiAgfVxcblxcbiAgJi1kaXZpZGVyIHtcXG4gICAgJi0taG9yaXpvbnRhbCB7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHdpZHRoOiAwO1xcbiAgICAgIGhlaWdodDogMDtcXG5cXG4gICAgICAmOjpiZWZvcmUge1xcbiAgICAgICAgQGluY2x1ZGUgYm9hcmQtZGl2aWRlcig1NDBweCwgMTJweCwgLTI3MHB4LCA4NnB4KTtcXG4gICAgICB9XFxuXFxuICAgICAgJjo6YWZ0ZXIge1xcbiAgICAgICAgQGluY2x1ZGUgYm9hcmQtZGl2aWRlcig1NDBweCwgMTJweCwgLTI3MHB4LCAtMTEwcHgpO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgICAmLS12ZXJ0aWNhbCB7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHdpZHRoOiAwO1xcbiAgICAgIGhlaWdodDogMDtcXG5cXG4gICAgICAmOjpiZWZvcmUge1xcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICAgICAgQGluY2x1ZGUgYm9hcmQtZGl2aWRlcigxMnB4LCA1NDBweCwgODdweCwgLTI2NXB4KTtcXG4gICAgICB9XFxuICAgICAgJjo6YWZ0ZXIge1xcbiAgICAgICAgQGluY2x1ZGUgYm9hcmQtZGl2aWRlcigxMnB4LCA1NDBweCwgLTk3cHgsIC0yNjVweCk7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVxcblwiLFwiLy8gQ09MT1JTXFxuXFxuJHByaW1hcnk6ICMzYTMwNDI7XFxuJG9uLXByaW1hcnk6ICNiZWIzYzc7XFxuJHByaW1hcnktY29udGFpbmVyOiAjNWM0YzY4O1xcblxcbiRmaXJzdC1tYXJrLWNvbG9yOiAjNmRkNmRhO1xcbiRzZWNvbmQtbWFyay1jb2xvcjogI2VkYjQ1ODtcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImJ1bmRsZVwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFwiLi9zdHlsZXMvbWFpbi5zY3NzXCI7XG5cbmltcG9ydCB4SW1nIGZyb20gXCIuL2Fzc2V0cy9tYXJrLVgucG5nXCI7XG5cbmZ1bmN0aW9uIGluc2VydEltZyhpbWcpIHtcbiAgcmV0dXJuIGA8aW1nIHNyYz1cIiR7aW1nfVwiPmA7XG59XG5cbmNvbnN0IEJvYXJkID0gKCgpID0+IHtcbiAgY29uc3QgY2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1haW5fX2JvYXJkLWNlbGxcIik7XG4gIGNvbnNvbGUubG9nKGNlbGxzKTtcbiAgcmV0dXJuIHsgY2VsbHMgfTtcbn0pKCk7XG5cbmNvbnN0IFBsYXllciA9IChuYW1lLCBtYXJrKSA9PiB7XG4gIGNvbnN0IGdldE5hbWUgPSAoKSA9PiBuYW1lO1xuICBjb25zdCBnZXRNYXJrID0gKCkgPT4gbWFyaztcblxuICBjb25zdCBzY29yZSA9IDA7XG5cbiAgcmV0dXJuIHsgZ2V0TmFtZSwgZ2V0TWFyaywgc2NvcmUgfTtcbn07XG5cbmNvbnN0IHBsYXllcjEgPSBQbGF5ZXIoXCJyb2JlcnRcIiwgXCJYXCIpO1xuY29uc3QgcGxheWVyMiA9IFBsYXllcihcIm1hcmtcIiwgXCJPXCIpO1xuXG5jb25zdCBHYW1lID0gKCgpID0+IHtcbiAgLy8gY3VycmVudCBib2FyZFxuICBsZXQgY3VyckJvYXJkID0gQXJyYXkoOSk7XG5cbiAgLy8gY2hlY2sgaWYgdGhlcmUgaXMgY3VycmVudGx5IGEgd2lubmVyXG4gIGxldCB3aW5uZXIgPSBmYWxzZTtcblxuICAvLyBQbGF5ZXIgc3dpdGNoXG4gIGxldCBjdXJyUGxheWVyVHVybiA9IHBsYXllcjI7XG4gIGxldCBjdXJyUGxheWVyID0gKCkgPT4ge1xuICAgIGlmIChjdXJyUGxheWVyVHVybiA9PT0gcGxheWVyMSkge1xuICAgICAgcmV0dXJuIChjdXJyUGxheWVyVHVybiA9IHBsYXllcjIpO1xuICAgIH0gZWxzZSByZXR1cm4gKGN1cnJQbGF5ZXJUdXJuID0gcGxheWVyMSk7XG4gIH07XG5cbiAgLy8gY2hhbmdlIGJvYXJkIHN0YXRlXG4gIEJvYXJkLmNlbGxzLmZvckVhY2goKGNlbGwsIGkpID0+IHtcbiAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBpZiAodHlwZW9mIGN1cnJCb2FyZFtpXSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBjdXJyQm9hcmRbaV0gPSBjdXJyUGxheWVyKCkuZ2V0TWFyaygpOyAvLyBnZXRzIGltYWdlc1xuXG4gICAgICAgIC8vIGNlbGwudGV4dENvbnRlbnQgPSBjdXJyQm9hcmRbaV07aW5zZXJ0SW1nKHhJbWcpXG4gICAgICAgIGNlbGwuaW5uZXJIdG1sID0gaW5zZXJ0SW1nKHhJbWcpO1xuICAgICAgICBjb25zb2xlLmxvZyhjZWxsLnRleHRDb250ZW50KTtcbiAgICAgICAgY2hlY2tXaW5Db25kaXRpb24oKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHdpbm5lcikge1xuICAgICAgICBjdXJyUGxheWVyVHVybi5zY29yZSsrO1xuXG4gICAgICAgIHNldFRpbWVvdXQocmVzZXRCb2FyZCwgMTAwMCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIHJlc2V0Qm9hcmQoKSB7XG4gICAgY3VyckJvYXJkID0gQXJyYXkoOSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBCb2FyZC5jZWxscy5sZW5ndGg7IGkrKykge1xuICAgICAgQm9hcmQuY2VsbHNbaV0udGV4dENvbnRlbnQgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGN1cnJQbGF5ZXJUdXJuID0gcGxheWVyMjtcbiAgICB3aW5uZXIgPSBmYWxzZTtcbiAgfVxuXG4gIC8vIENoZWNrIFdpbiBDb25kaXRpb25cbiAgZnVuY3Rpb24gY2hlY2tXaW5Db25kaXRpb24oKSB7XG4gICAgaWYgKFxuICAgICAgLy9ST1dTXG4gICAgICAoY3VyckJvYXJkWzBdID09PSBjdXJyUGxheWVyVHVybi5nZXRNYXJrKCkgJiZcbiAgICAgICAgY3VyckJvYXJkWzFdID09PSBjdXJyUGxheWVyVHVybi5nZXRNYXJrKCkgJiZcbiAgICAgICAgY3VyckJvYXJkWzJdID09PSBjdXJyUGxheWVyVHVybi5nZXRNYXJrKCkpIHx8XG4gICAgICAoY3VyckJvYXJkWzNdID09PSBjdXJyUGxheWVyVHVybi5nZXRNYXJrKCkgJiZcbiAgICAgICAgY3VyckJvYXJkWzRdID09PSBjdXJyUGxheWVyVHVybi5nZXRNYXJrKCkgJiZcbiAgICAgICAgY3VyckJvYXJkWzVdID09PSBjdXJyUGxheWVyVHVybi5nZXRNYXJrKCkpIHx8XG4gICAgICAoY3VyckJvYXJkWzZdID09PSBjdXJyUGxheWVyVHVybi5nZXRNYXJrKCkgJiZcbiAgICAgICAgY3VyckJvYXJkWzddID09PSBjdXJyUGxheWVyVHVybi5nZXRNYXJrKCkgJiZcbiAgICAgICAgY3VyckJvYXJkWzhdID09PSBjdXJyUGxheWVyVHVybi5nZXRNYXJrKCkpIHx8XG4gICAgICAvL0NPTFVNTlNcbiAgICAgIChjdXJyQm9hcmRbMF0gPT09IGN1cnJQbGF5ZXJUdXJuLmdldE1hcmsoKSAmJlxuICAgICAgICBjdXJyQm9hcmRbM10gPT09IGN1cnJQbGF5ZXJUdXJuLmdldE1hcmsoKSAmJlxuICAgICAgICBjdXJyQm9hcmRbNl0gPT09IGN1cnJQbGF5ZXJUdXJuLmdldE1hcmsoKSkgfHxcbiAgICAgIChjdXJyQm9hcmRbMV0gPT09IGN1cnJQbGF5ZXJUdXJuLmdldE1hcmsoKSAmJlxuICAgICAgICBjdXJyQm9hcmRbNF0gPT09IGN1cnJQbGF5ZXJUdXJuLmdldE1hcmsoKSAmJlxuICAgICAgICBjdXJyQm9hcmRbN10gPT09IGN1cnJQbGF5ZXJUdXJuLmdldE1hcmsoKSkgfHxcbiAgICAgIChjdXJyQm9hcmRbMl0gPT09IGN1cnJQbGF5ZXJUdXJuLmdldE1hcmsoKSAmJlxuICAgICAgICBjdXJyQm9hcmRbNV0gPT09IGN1cnJQbGF5ZXJUdXJuLmdldE1hcmsoKSAmJlxuICAgICAgICBjdXJyQm9hcmRbOF0gPT09IGN1cnJQbGF5ZXJUdXJuLmdldE1hcmsoKSkgfHxcbiAgICAgIC8vRElBR09OQUxTXG4gICAgICAoY3VyckJvYXJkWzBdID09PSBjdXJyUGxheWVyVHVybi5nZXRNYXJrKCkgJiZcbiAgICAgICAgY3VyckJvYXJkWzRdID09PSBjdXJyUGxheWVyVHVybi5nZXRNYXJrKCkgJiZcbiAgICAgICAgY3VyckJvYXJkWzhdID09PSBjdXJyUGxheWVyVHVybi5nZXRNYXJrKCkpIHx8XG4gICAgICAoY3VyckJvYXJkWzJdID09PSBjdXJyUGxheWVyVHVybi5nZXRNYXJrKCkgJiZcbiAgICAgICAgY3VyckJvYXJkWzRdID09PSBjdXJyUGxheWVyVHVybi5nZXRNYXJrKCkgJiZcbiAgICAgICAgY3VyckJvYXJkWzZdID09PSBjdXJyUGxheWVyVHVybi5nZXRNYXJrKCkpXG4gICAgKSB7XG4gICAgICB3aW5uZXIgPSBjdXJyUGxheWVyVHVybi5nZXROYW1lKCk7XG4gICAgfVxuICB9XG59KSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9