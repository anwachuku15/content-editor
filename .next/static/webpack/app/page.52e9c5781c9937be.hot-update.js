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

/***/ "(app-client)/./src/components/BottomNav.js":
/*!*************************************!*\
  !*** ./src/components/BottomNav.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @heroicons/react/24/solid */ \"(app-client)/./node_modules/@heroicons/react/24/solid/esm/AdjustmentsHorizontalIcon.js\");\n/* harmony import */ var _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @heroicons/react/24/solid */ \"(app-client)/./node_modules/@heroicons/react/24/solid/esm/UserIcon.js\");\n/* harmony import */ var _Overlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Overlay */ \"(app-client)/./src/components/Overlay.js\");\n/* harmony import */ var _context_StateProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/context/StateProvider */ \"(app-client)/./src/context/StateProvider.js\");\n/* harmony import */ var _context_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/context/actions */ \"(app-client)/./src/context/actions.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst BottomNav = ()=>{\n    _s();\n    const [state, dispatch] = (0,_context_StateProvider__WEBPACK_IMPORTED_MODULE_3__.useStateValue)();\n    const [windowWidth, setWindowWidth] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleResize = ()=>{\n            setWindowWidth(window.innerWidth);\n        };\n        window.addEventListener(\"resize\", handleResize);\n        setWindowWidth(window.innerWidth);\n        return ()=>{\n            window.removeEventListener(\"resize\", handleResize);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            state.isSettingsOpen && windowWidth < 768 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Overlay__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/andrewnwachuku/content-editor/src/components/BottomNav.js\",\n                lineNumber: 27,\n                columnNumber: 50\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center h-[60px] md:hidden  justify-evenly\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onClick: ()=>dispatch((0,_context_actions__WEBPACK_IMPORTED_MODULE_4__.setIsSettingsOpen)()),\n                        className: \"cursor-pointer flex items-center justify-center rounded-md h-9 w-9 duration-100 \".concat(state.isSettingsOpen ? \"bg-light-purple\" : \"transparent\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            className: \"h-6 w-6 text-white\"\n                        }, void 0, false, {\n                            fileName: \"/Users/andrewnwachuku/content-editor/src/components/BottomNav.js\",\n                            lineNumber: 36,\n                            columnNumber: 6\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/andrewnwachuku/content-editor/src/components/BottomNav.js\",\n                        lineNumber: 30,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onClick: ()=>dispatch((0,_context_actions__WEBPACK_IMPORTED_MODULE_4__.setIsSpeakerOpen)()),\n                        className: \"flex items-center justify-center rounded-md h-9 w-9 cursor-pointer duration-100 \".concat(state.isSpeakerOpen ? \"bg-light-purple\" : \"transparent\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            className: \"h-6 w-6 text-white\"\n                        }, void 0, false, {\n                            fileName: \"/Users/andrewnwachuku/content-editor/src/components/BottomNav.js\",\n                            lineNumber: 45,\n                            columnNumber: 6\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/andrewnwachuku/content-editor/src/components/BottomNav.js\",\n                        lineNumber: 39,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/andrewnwachuku/content-editor/src/components/BottomNav.js\",\n                lineNumber: 29,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(BottomNav, \"aQLeC+F2b5be7ynVxQMIxOiKs6s=\", false, function() {\n    return [\n        _context_StateProvider__WEBPACK_IMPORTED_MODULE_3__.useStateValue\n    ];\n});\n_c = BottomNav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BottomNav);\nvar _c;\n$RefreshReg$(_c, \"BottomNav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2NvbXBvbmVudHMvQm90dG9tTmF2LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRW1EO0FBQzZCO0FBQ2hEO0FBQ3dCO0FBQ2dCO0FBRXhFLE1BQU1TLFlBQVk7O0lBQ2pCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHTCxxRUFBYUE7SUFDdkMsTUFBTSxDQUFDTSxhQUFhQyxlQUFlLEdBQUdaLCtDQUFRQTtJQUU5Q0MsZ0RBQVNBLENBQUM7UUFDVCxNQUFNWSxlQUFlO1lBQ3BCRCxlQUFlRSxPQUFPQztRQUN2QjtRQUNBRCxPQUFPRSxpQkFBaUIsVUFBVUg7UUFDbENELGVBQWVFLE9BQU9DO1FBRXRCLE9BQU87WUFDTkQsT0FBT0csb0JBQW9CLFVBQVVKO1FBQ3RDO0lBQ0QsR0FBRyxFQUFFO0lBRUwscUJBQ0M7O1lBQ0VKLE1BQU1TLGtCQUFrQlAsY0FBYyxxQkFBTyw4REFBQ1AsZ0RBQU9BOzs7OzswQkFFdEQsOERBQUNlO2dCQUFJQyxXQUFVOztrQ0FDZCw4REFBQ0Q7d0JBQ0FFLFNBQVMsSUFBTVgsU0FBU0osbUVBQWlCQTt3QkFDekNjLFdBQVcsbUZBRVYsT0FEQVgsTUFBTVMsaUJBQWlCLG9CQUFvQjtrQ0FHNUMsNEVBQUNoQixpRUFBeUJBOzRCQUFDa0IsV0FBVTs7Ozs7Ozs7Ozs7a0NBR3RDLDhEQUFDRDt3QkFDQUUsU0FBUyxJQUFNWCxTQUFTSCxrRUFBZ0JBO3dCQUN4Q2EsV0FBVyxtRkFFVixPQURBWCxNQUFNYSxnQkFBZ0Isb0JBQW9CO2tDQUczQyw0RUFBQ25CLGlFQUFRQTs0QkFBQ2lCLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLekI7R0F6Q01aOztRQUNxQkgsaUVBQWFBOzs7S0FEbENHO0FBMkNOLCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0JvdHRvbU5hdi5qcz9hNjYwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQWRqdXN0bWVudHNIb3Jpem9udGFsSWNvbiwgVXNlckljb24gfSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC8yNC9zb2xpZFwiO1xuaW1wb3J0IE92ZXJsYXkgZnJvbSBcIi4vT3ZlcmxheVwiO1xuaW1wb3J0IHsgdXNlU3RhdGVWYWx1ZSB9IGZyb20gXCJAL2NvbnRleHQvU3RhdGVQcm92aWRlclwiO1xuaW1wb3J0IHsgc2V0SXNTZXR0aW5nc09wZW4sIHNldElzU3BlYWtlck9wZW4gfSBmcm9tIFwiQC9jb250ZXh0L2FjdGlvbnNcIjtcblxuY29uc3QgQm90dG9tTmF2ID0gKCkgPT4ge1xuXHRjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVN0YXRlVmFsdWUoKTtcblx0Y29uc3QgW3dpbmRvd1dpZHRoLCBzZXRXaW5kb3dXaWR0aF0gPSB1c2VTdGF0ZSgpO1xuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0Y29uc3QgaGFuZGxlUmVzaXplID0gKCkgPT4ge1xuXHRcdFx0c2V0V2luZG93V2lkdGgod2luZG93LmlubmVyV2lkdGgpO1xuXHRcdH07XG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlUmVzaXplKTtcblx0XHRzZXRXaW5kb3dXaWR0aCh3aW5kb3cuaW5uZXJXaWR0aCk7XG5cblx0XHRyZXR1cm4gKCkgPT4ge1xuXHRcdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlUmVzaXplKTtcblx0XHR9O1xuXHR9LCBbXSk7XG5cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0e3N0YXRlLmlzU2V0dGluZ3NPcGVuICYmIHdpbmRvd1dpZHRoIDwgNzY4ICYmIDxPdmVybGF5IC8+fVxuXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGgtWzYwcHhdIG1kOmhpZGRlbiAganVzdGlmeS1ldmVubHlcIj5cblx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKHNldElzU2V0dGluZ3NPcGVuKCkpfVxuXHRcdFx0XHRcdGNsYXNzTmFtZT17YGN1cnNvci1wb2ludGVyIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtbWQgaC05IHctOSBkdXJhdGlvbi0xMDAgJHtcblx0XHRcdFx0XHRcdHN0YXRlLmlzU2V0dGluZ3NPcGVuID8gXCJiZy1saWdodC1wdXJwbGVcIiA6IFwidHJhbnNwYXJlbnRcIlxuXHRcdFx0XHRcdH1gfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PEFkanVzdG1lbnRzSG9yaXpvbnRhbEljb24gY2xhc3NOYW1lPVwiaC02IHctNiB0ZXh0LXdoaXRlXCIgLz5cblx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKHNldElzU3BlYWtlck9wZW4oKSl9XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXtgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC1tZCBoLTkgdy05IGN1cnNvci1wb2ludGVyIGR1cmF0aW9uLTEwMCAke1xuXHRcdFx0XHRcdFx0c3RhdGUuaXNTcGVha2VyT3BlbiA/IFwiYmctbGlnaHQtcHVycGxlXCIgOiBcInRyYW5zcGFyZW50XCJcblx0XHRcdFx0XHR9YH1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxVc2VySWNvbiBjbGFzc05hbWU9XCJoLTYgdy02IHRleHQtd2hpdGVcIiAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvPlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQm90dG9tTmF2O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJBZGp1c3RtZW50c0hvcml6b250YWxJY29uIiwiVXNlckljb24iLCJPdmVybGF5IiwidXNlU3RhdGVWYWx1ZSIsInNldElzU2V0dGluZ3NPcGVuIiwic2V0SXNTcGVha2VyT3BlbiIsIkJvdHRvbU5hdiIsInN0YXRlIiwiZGlzcGF0Y2giLCJ3aW5kb3dXaWR0aCIsInNldFdpbmRvd1dpZHRoIiwiaGFuZGxlUmVzaXplIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaXNTZXR0aW5nc09wZW4iLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiaXNTcGVha2VyT3BlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./src/components/BottomNav.js\n"));

/***/ })

});