"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Index = ({ images  })=>{\n    console.log({\n        images\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: \"Hi!\"\n    }, void 0, false, {\n        fileName: \"/Users/ry/Code/ryanbuckleyca/aura/nextjs/pages/index.tsx\",\n        lineNumber: 3,\n        columnNumber: 10\n    }, undefined);\n};\nconst getStaticProps = async ()=>{\n    const res = await fetch(\"http://localhost:1337/api/images?populate=image\");\n    const images = await res.json();\n    console.log({\n        res,\n        images\n    });\n    return {\n        props: {\n            images\n        }\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQUEsTUFBTUEsS0FBSyxHQUFHLENBQUMsRUFBRUMsTUFBTSxHQUFFLEdBQUs7SUFDNUJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDO1FBQUNGLE1BQU07S0FBQyxDQUFDO0lBQ3JCLHFCQUFPLDhEQUFDRyxJQUFFO2tCQUFDLEtBQUc7Ozs7O2lCQUFLO0NBQ3BCO0FBRU0sTUFBTUMsY0FBYyxHQUFJLFVBQVc7SUFDeEMsTUFBTUMsR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FBQyxpREFBaUQsQ0FBQztJQUMxRSxNQUFNTixNQUFNLEdBQUcsTUFBTUssR0FBRyxDQUFDRSxJQUFJLEVBQUU7SUFFL0JOLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDO1FBQUNHLEdBQUc7UUFBRUwsTUFBTTtLQUFDLENBQUM7SUFDMUIsT0FBTztRQUNMUSxLQUFLLEVBQUU7WUFBRVIsTUFBTTtTQUFFO0tBQ2xCO0NBQ0Y7QUFFRCxpRUFBZUQsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEluZGV4ID0gKHsgaW1hZ2VzIH0pID0+IHtcbiAgY29uc29sZS5sb2coe2ltYWdlc30pXG4gIHJldHVybiA8aDE+SGkhPC9oMT5cbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gIGFzeW5jKCkgPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDoxMzM3L2FwaS9pbWFnZXM/cG9wdWxhdGU9aW1hZ2UnKVxuICBjb25zdCBpbWFnZXMgPSBhd2FpdCByZXMuanNvbigpXG5cbiAgY29uc29sZS5sb2coe3JlcywgaW1hZ2VzfSlcbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyBpbWFnZXMgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4XG5cbiJdLCJuYW1lcyI6WyJJbmRleCIsImltYWdlcyIsImNvbnNvbGUiLCJsb2ciLCJoMSIsImdldFN0YXRpY1Byb3BzIiwicmVzIiwiZmV0Y2giLCJqc29uIiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();