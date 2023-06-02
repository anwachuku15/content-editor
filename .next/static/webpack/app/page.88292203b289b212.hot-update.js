"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./src/components/Sidebar/index.js":
/*!*****************************************!*\
  !*** ./src/components/Sidebar/index.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @heroicons/react/24/solid */ \"(app-client)/./node_modules/@heroicons/react/24/solid/esm/AdjustmentsHorizontalIcon.js\");\n/* harmony import */ var _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @heroicons/react/24/solid */ \"(app-client)/./node_modules/@heroicons/react/24/solid/esm/UserIcon.js\");\n/* harmony import */ var _context_StateProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/context/StateProvider */ \"(app-client)/./src/context/StateProvider.js\");\n/* harmony import */ var _context_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/context/actions */ \"(app-client)/./src/context/actions.js\");\n/* harmony import */ var _SettingsPanel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SettingsPanel */ \"(app-client)/./src/components/Sidebar/SettingsPanel.js\");\n/* harmony import */ var _DummyPanel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DummyPanel */ \"(app-client)/./src/components/Sidebar/DummyPanel.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst Sidebar = ()=>{\n    _s();\n    const [isMounted, setIsMounted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [state, dispatch] = (0,_context_StateProvider__WEBPACK_IMPORTED_MODULE_2__.useStateValue)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setIsMounted(true);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"hidden md:block flex-col bg-dark-purple items-center p-3 pt-3 relative w-14 z-50\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onClick: ()=>dispatch((0,_context_actions__WEBPACK_IMPORTED_MODULE_3__.setIsSettingsOpen)()),\n                        className: \"flex items-center justify-center rounded-md h-9 w-9 \".concat(state.isSettingsOpen ? \"bg-light-purple\" : \"transparent\", \" duration-100 cursor-pointer\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            className: \"h-6 w-6 \".concat(state.isSettingsOpen ? \"text-white\" : \"text-light-purple\")\n                        }, void 0, false, {\n                            fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/index.js\",\n                            lineNumber: 29,\n                            columnNumber: 6\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/index.js\",\n                        lineNumber: 23,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onClick: ()=>dispatch((0,_context_actions__WEBPACK_IMPORTED_MODULE_3__.setIsSpeakerOpen)()),\n                        className: \"mt-8 flex items-center justify-center rounded-md h-9 w-9 \".concat(state.isSpeakerOpen ? \"bg-light-purple\" : \"transparent\", \" duration-100 cursor-pointer\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            className: \"h-6 w-6 \".concat(state.isSpeakerOpen ? \"text-white\" : \"text-light-purple\")\n                        }, void 0, false, {\n                            fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/index.js\",\n                            lineNumber: 41,\n                            columnNumber: 6\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/index.js\",\n                        lineNumber: 35,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/index.js\",\n                lineNumber: 22,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SettingsPanel__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/index.js\",\n                lineNumber: 49,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DummyPanel__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/index.js\",\n                lineNumber: 50,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Sidebar, \"WX1BX6Rd6aNRx8RORcEZVQ4I6Q8=\", false, function() {\n    return [\n        _context_StateProvider__WEBPACK_IMPORTED_MODULE_2__.useStateValue\n    ];\n});\n_c = Sidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);\nvar _c;\n$RefreshReg$(_c, \"Sidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2NvbXBvbmVudHMvU2lkZWJhci9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFNEM7QUFDTDtBQUN5QztBQUN4QjtBQUNnQjtBQUM1QjtBQUNOO0FBRXRDLE1BQU1VLFVBQVU7O0lBQ2YsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdYLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ1ksT0FBT0MsU0FBUyxHQUFHVCxxRUFBYUE7SUFFdkNMLGdEQUFTQSxDQUFDO1FBQ1RZLGFBQWE7SUFDZCxHQUFHLEVBQUU7SUFFTCxxQkFDQzs7MEJBRUMsOERBQUNHO2dCQUFJQyxXQUFVOztrQ0FDZCw4REFBQ0Q7d0JBQ0FFLFNBQVMsSUFBTUgsU0FBU1IsbUVBQWlCQTt3QkFDekNVLFdBQVcsdURBRVYsT0FEQUgsTUFBTUssaUJBQWlCLG9CQUFvQixlQUMzQztrQ0FFRCw0RUFBQ2YsaUVBQXlCQTs0QkFDekJhLFdBQVcsV0FFVixPQURBSCxNQUFNSyxpQkFBaUIsZUFBZTs7Ozs7Ozs7Ozs7a0NBSXpDLDhEQUFDSDt3QkFDQUUsU0FBUyxJQUFNSCxTQUFTUCxrRUFBZ0JBO3dCQUN4Q1MsV0FBVyw0REFFVixPQURBSCxNQUFNTSxnQkFBZ0Isb0JBQW9CLGVBQzFDO2tDQUVELDRFQUFDZixpRUFBUUE7NEJBQ1JZLFdBQVcsV0FFVixPQURBSCxNQUFNTSxnQkFBZ0IsZUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBTXpDLDhEQUFDWCxzREFBYUE7Ozs7OzBCQUNkLDhEQUFDQyxtREFBVUE7Ozs7Ozs7QUFHZDtHQTFDTUM7O1FBRXFCTCxpRUFBYUE7OztLQUZsQ0s7QUE0Q04sK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2lkZWJhci9pbmRleC5qcz80YTAzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHsgQWRqdXN0bWVudHNIb3Jpem9udGFsSWNvbiwgVXNlckljb24gfSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC8yNC9zb2xpZFwiO1xuaW1wb3J0IHsgdXNlU3RhdGVWYWx1ZSB9IGZyb20gXCJAL2NvbnRleHQvU3RhdGVQcm92aWRlclwiO1xuaW1wb3J0IHsgc2V0SXNTZXR0aW5nc09wZW4sIHNldElzU3BlYWtlck9wZW4gfSBmcm9tIFwiQC9jb250ZXh0L2FjdGlvbnNcIjtcbmltcG9ydCBTZXR0aW5nc1BhbmVsIGZyb20gXCIuL1NldHRpbmdzUGFuZWxcIjtcbmltcG9ydCBEdW1teVBhbmVsIGZyb20gXCIuL0R1bW15UGFuZWxcIjtcblxuY29uc3QgU2lkZWJhciA9ICgpID0+IHtcblx0Y29uc3QgW2lzTW91bnRlZCwgc2V0SXNNb3VudGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblx0Y29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VTdGF0ZVZhbHVlKCk7XG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRzZXRJc01vdW50ZWQodHJ1ZSk7XG5cdH0sIFtdKTtcblxuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHR7LyogRklYRUQgU0lERUJBUiAqL31cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIG1kOmJsb2NrIGZsZXgtY29sIGJnLWRhcmstcHVycGxlIGl0ZW1zLWNlbnRlciBwLTMgcHQtMyByZWxhdGl2ZSB3LTE0IHotNTBcIj5cblx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKHNldElzU2V0dGluZ3NPcGVuKCkpfVxuXHRcdFx0XHRcdGNsYXNzTmFtZT17YGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtbWQgaC05IHctOSAke1xuXHRcdFx0XHRcdFx0c3RhdGUuaXNTZXR0aW5nc09wZW4gPyBcImJnLWxpZ2h0LXB1cnBsZVwiIDogXCJ0cmFuc3BhcmVudFwiXG5cdFx0XHRcdFx0fSBkdXJhdGlvbi0xMDAgY3Vyc29yLXBvaW50ZXJgfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PEFkanVzdG1lbnRzSG9yaXpvbnRhbEljb25cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGgtNiB3LTYgJHtcblx0XHRcdFx0XHRcdFx0c3RhdGUuaXNTZXR0aW5nc09wZW4gPyBcInRleHQtd2hpdGVcIiA6IFwidGV4dC1saWdodC1wdXJwbGVcIlxuXHRcdFx0XHRcdFx0fWB9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaChzZXRJc1NwZWFrZXJPcGVuKCkpfVxuXHRcdFx0XHRcdGNsYXNzTmFtZT17YG10LTggZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC1tZCBoLTkgdy05ICR7XG5cdFx0XHRcdFx0XHRzdGF0ZS5pc1NwZWFrZXJPcGVuID8gXCJiZy1saWdodC1wdXJwbGVcIiA6IFwidHJhbnNwYXJlbnRcIlxuXHRcdFx0XHRcdH0gZHVyYXRpb24tMTAwIGN1cnNvci1wb2ludGVyYH1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxVc2VySWNvblxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgaC02IHctNiAke1xuXHRcdFx0XHRcdFx0XHRzdGF0ZS5pc1NwZWFrZXJPcGVuID8gXCJ0ZXh0LXdoaXRlXCIgOiBcInRleHQtbGlnaHQtcHVycGxlXCJcblx0XHRcdFx0XHRcdH1gfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cblx0XHRcdDxTZXR0aW5nc1BhbmVsIC8+XG5cdFx0XHQ8RHVtbXlQYW5lbCAvPlxuXHRcdDwvPlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhcjtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIm1vdGlvbiIsIkFkanVzdG1lbnRzSG9yaXpvbnRhbEljb24iLCJVc2VySWNvbiIsInVzZVN0YXRlVmFsdWUiLCJzZXRJc1NldHRpbmdzT3BlbiIsInNldElzU3BlYWtlck9wZW4iLCJTZXR0aW5nc1BhbmVsIiwiRHVtbXlQYW5lbCIsIlNpZGViYXIiLCJpc01vdW50ZWQiLCJzZXRJc01vdW50ZWQiLCJzdGF0ZSIsImRpc3BhdGNoIiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayIsImlzU2V0dGluZ3NPcGVuIiwiaXNTcGVha2VyT3BlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./src/components/Sidebar/index.js\n"));

/***/ })

});