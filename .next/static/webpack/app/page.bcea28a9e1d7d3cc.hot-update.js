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

/***/ "(app-client)/./src/components/Sidebar/DummyPanel.js":
/*!**********************************************!*\
  !*** ./src/components/Sidebar/DummyPanel.js ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/react/24/solid */ \"(app-client)/./node_modules/@heroicons/react/24/solid/esm/XMarkIcon.js\");\n/* harmony import */ var _context_StateProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/context/StateProvider */ \"(app-client)/./src/context/StateProvider.js\");\n/* harmony import */ var _context_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/context/actions */ \"(app-client)/./src/context/actions.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst DummyPanel = ()=>{\n    _s();\n    const [state, dispatch] = (0,_context_StateProvider__WEBPACK_IMPORTED_MODULE_1__.useStateValue)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"hidden md:block flex-col z-10 overflow-hidden \".concat(state.isSpeakerOpen ? \"w-[35%] mr-[24px] ml-[16px]\" : \"w-[0px]\", \" duration-300 \"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row mt-3 mr-3 mb-2 w-full justify-between items-center duration-300 \".concat(!state.isSpeakerOpen && \"scale-0\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-light-purple text-lg xl:text-xl select-none\",\n                        children: \"Dummy Panel\"\n                    }, void 0, false, {\n                        fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/DummyPanel.js\",\n                        lineNumber: 23,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onClick: ()=>dispatch((0,_context_actions__WEBPACK_IMPORTED_MODULE_2__.closeDummyPanel)()),\n                        className: \"flex align-middle cursor-pointer\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            className: \"h-5 w-5 black\"\n                        }, void 0, false, {\n                            fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/DummyPanel.js\",\n                            lineNumber: 30,\n                            columnNumber: 6\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/DummyPanel.js\",\n                        lineNumber: 26,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/DummyPanel.js\",\n                lineNumber: 18,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\".concat(!state.isSpeakerOpen && \"scale-0\", \" duration-300\"),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-white\",\n                    children: \"Dummy content goes here\"\n                }, void 0, false, {\n                    fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/DummyPanel.js\",\n                    lineNumber: 34,\n                    columnNumber: 5\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/DummyPanel.js\",\n                lineNumber: 33,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/DummyPanel.js\",\n        lineNumber: 12,\n        columnNumber: 3\n    }, undefined);\n};\n_s(DummyPanel, \"qeVE2oq6+t8Tw+Pxr9/HpLgjh68=\", false, function() {\n    return [\n        _context_StateProvider__WEBPACK_IMPORTED_MODULE_1__.useStateValue\n    ];\n});\n_c = DummyPanel;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DummyPanel);\nvar _c;\n$RefreshReg$(_c, \"DummyPanel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2NvbXBvbmVudHMvU2lkZWJhci9EdW1teVBhbmVsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFdUM7QUFDZ0M7QUFDZjtBQUNKO0FBRXBELE1BQU1LLGFBQWE7O0lBQ2xCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHSixxRUFBYUE7SUFFdkMscUJBQ0MsOERBQUNLO1FBQ0FDLFdBQVcsaURBRVYsT0FEQUgsTUFBTUksZ0JBQWdCLGdDQUFnQyxXQUN0RDs7MEJBR0QsOERBQUNGO2dCQUNBQyxXQUFXLGlGQUVWLE9BREEsQ0FBQ0gsTUFBTUksaUJBQWlCOztrQ0FHekIsOERBQUNDO3dCQUFHRixXQUFVO2tDQUFtRDs7Ozs7O2tDQUdqRSw4REFBQ0Q7d0JBQ0FJLFNBQVMsSUFBTUwsU0FBU0gsaUVBQWVBO3dCQUN2Q0ssV0FBVTtrQ0FFViw0RUFBQ1IsaUVBQVNBOzRCQUFDUSxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFHdkIsOERBQUNEO2dCQUFJQyxXQUFXLEdBQXFDLE9BQWxDLENBQUNILE1BQU1JLGlCQUFpQixXQUFVOzBCQUNwRCw0RUFBQ0M7b0JBQUdGLFdBQVU7OEJBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSS9CO0dBOUJNSjs7UUFDcUJGLGlFQUFhQTs7O0tBRGxDRTtBQWdDTiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9TaWRlYmFyL0R1bW15UGFuZWwuanM/YjhhYiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCB7IFhNYXJrSWNvbiwgQ2hldnJvbkRvd25JY29uIH0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3QvMjQvc29saWRcIjtcbmltcG9ydCB7IHVzZVN0YXRlVmFsdWUgfSBmcm9tIFwiQC9jb250ZXh0L1N0YXRlUHJvdmlkZXJcIjtcbmltcG9ydCB7IGNsb3NlRHVtbXlQYW5lbCB9IGZyb20gXCJAL2NvbnRleHQvYWN0aW9uc1wiO1xuXG5jb25zdCBEdW1teVBhbmVsID0gKCkgPT4ge1xuXHRjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVN0YXRlVmFsdWUoKTtcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXZcblx0XHRcdGNsYXNzTmFtZT17YGhpZGRlbiBtZDpibG9jayBmbGV4LWNvbCB6LTEwIG92ZXJmbG93LWhpZGRlbiAke1xuXHRcdFx0XHRzdGF0ZS5pc1NwZWFrZXJPcGVuID8gXCJ3LVszNSVdIG1yLVsyNHB4XSBtbC1bMTZweF1cIiA6IFwidy1bMHB4XVwiXG5cdFx0XHR9IGR1cmF0aW9uLTMwMCBgfVxuXHRcdD5cblx0XHRcdHsvKiBEVU1NWSBIRUFERVIgKi99XG5cdFx0XHQ8ZGl2XG5cdFx0XHRcdGNsYXNzTmFtZT17YGZsZXggZmxleC1yb3cgbXQtMyBtci0zIG1iLTIgdy1mdWxsIGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgZHVyYXRpb24tMzAwICR7XG5cdFx0XHRcdFx0IXN0YXRlLmlzU3BlYWtlck9wZW4gJiYgXCJzY2FsZS0wXCJcblx0XHRcdFx0fWB9XG5cdFx0XHQ+XG5cdFx0XHRcdDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWxpZ2h0LXB1cnBsZSB0ZXh0LWxnIHhsOnRleHQteGwgc2VsZWN0LW5vbmVcIj5cblx0XHRcdFx0XHREdW1teSBQYW5lbFxuXHRcdFx0XHQ8L2gxPlxuXHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0b25DbGljaz17KCkgPT4gZGlzcGF0Y2goY2xvc2VEdW1teVBhbmVsKCkpfVxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImZsZXggYWxpZ24tbWlkZGxlIGN1cnNvci1wb2ludGVyXCJcblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxYTWFya0ljb24gY2xhc3NOYW1lPVwiaC01IHctNSBibGFja1wiIC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YCR7IXN0YXRlLmlzU3BlYWtlck9wZW4gJiYgXCJzY2FsZS0wXCJ9IGR1cmF0aW9uLTMwMGB9PlxuXHRcdFx0XHQ8aDEgY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiPkR1bW15IGNvbnRlbnQgZ29lcyBoZXJlPC9oMT5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRHVtbXlQYW5lbDtcbiJdLCJuYW1lcyI6WyJtb3Rpb24iLCJYTWFya0ljb24iLCJDaGV2cm9uRG93bkljb24iLCJ1c2VTdGF0ZVZhbHVlIiwiY2xvc2VEdW1teVBhbmVsIiwiRHVtbXlQYW5lbCIsInN0YXRlIiwiZGlzcGF0Y2giLCJkaXYiLCJjbGFzc05hbWUiLCJpc1NwZWFrZXJPcGVuIiwiaDEiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./src/components/Sidebar/DummyPanel.js\n"));

/***/ })

});