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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @heroicons/react/24/solid */ \"(app-client)/./node_modules/@heroicons/react/24/solid/esm/AdjustmentsHorizontalIcon.js\");\n/* harmony import */ var _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @heroicons/react/24/solid */ \"(app-client)/./node_modules/@heroicons/react/24/solid/esm/UserIcon.js\");\n/* harmony import */ var _context_StateProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/context/StateProvider */ \"(app-client)/./src/context/StateProvider.js\");\n/* harmony import */ var _context_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/context/actions */ \"(app-client)/./src/context/actions.js\");\n/* harmony import */ var _SettingsPanel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SettingsPanel */ \"(app-client)/./src/components/Sidebar/SettingsPanel.js\");\n/* harmony import */ var _DummyPanel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DummyPanel */ \"(app-client)/./src/components/Sidebar/DummyPanel.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst Sidebar = ()=>{\n    _s();\n    const [isMounted, setIsMounted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [state, dispatch] = (0,_context_StateProvider__WEBPACK_IMPORTED_MODULE_2__.useStateValue)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setIsMounted(true);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"hidden md:block flex-col bg-dark-purple items-center p-3 pt-3 relative w-14 z-50\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onClick: ()=>dispatch((0,_context_actions__WEBPACK_IMPORTED_MODULE_3__.setIsSettingsOpen)()),\n                        className: \"flex items-center justify-center rounded-md h-9 w-9 \".concat(state.isSettingsOpen ? \"bg-light-purple\" : \"transparent\", \" duration-100 cursor-pointer\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            className: \"h-6 w-6 \".concat(state.isSettingsOpen ? \"text-white\" : \"text-light-purple\")\n                        }, void 0, false, {\n                            fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/index.js\",\n                            lineNumber: 46,\n                            columnNumber: 6\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/index.js\",\n                        lineNumber: 40,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onClick: ()=>dispatch((0,_context_actions__WEBPACK_IMPORTED_MODULE_3__.setIsSpeakerOpen)()),\n                        className: \"mt-8 flex items-center justify-center rounded-md h-9 w-9 \".concat(state.isSpeakerOpen ? \"bg-light-purple\" : \"transparent\", \" duration-100 cursor-pointer\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            className: \"h-6 w-6 \".concat(state.isSpeakerOpen ? \"text-white\" : \"text-light-purple\")\n                        }, void 0, false, {\n                            fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/index.js\",\n                            lineNumber: 58,\n                            columnNumber: 6\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/index.js\",\n                        lineNumber: 52,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/index.js\",\n                lineNumber: 39,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SettingsPanel__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/index.js\",\n                lineNumber: 66,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DummyPanel__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/index.js\",\n                lineNumber: 67,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Sidebar, \"WX1BX6Rd6aNRx8RORcEZVQ4I6Q8=\", false, function() {\n    return [\n        _context_StateProvider__WEBPACK_IMPORTED_MODULE_2__.useStateValue\n    ];\n});\n_c = Sidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);\nvar _c;\n$RefreshReg$(_c, \"Sidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2NvbXBvbmVudHMvU2lkZWJhci9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFNEM7QUFDTDtBQU1KO0FBQ3FCO0FBYTdCO0FBQ2lCO0FBQ047QUFFdEMsTUFBTXFCLFVBQVU7O0lBQ2YsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUd0QiwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUN1QixPQUFPQyxTQUFTLEdBQUdsQixxRUFBYUE7SUFFdkNQLGdEQUFTQSxDQUFDO1FBQ1R1QixhQUFhO0lBQ2QsR0FBRyxFQUFFO0lBRUwscUJBQ0M7OzBCQUVDLDhEQUFDRztnQkFBSUMsV0FBVTs7a0NBQ2QsOERBQUNEO3dCQUNBRSxTQUFTLElBQU1ILFNBQVNSLG1FQUFpQkE7d0JBQ3pDVSxXQUFXLHVEQUVWLE9BREFILE1BQU1LLGlCQUFpQixvQkFBb0IsZUFDM0M7a0NBRUQsNEVBQUMxQixpRUFBeUJBOzRCQUN6QndCLFdBQVcsV0FFVixPQURBSCxNQUFNSyxpQkFBaUIsZUFBZTs7Ozs7Ozs7Ozs7a0NBSXpDLDhEQUFDSDt3QkFDQUUsU0FBUyxJQUFNSCxTQUFTUCxrRUFBZ0JBO3dCQUN4Q1MsV0FBVyw0REFFVixPQURBSCxNQUFNTSxnQkFBZ0Isb0JBQW9CLGVBQzFDO2tDQUVELDRFQUFDMUIsaUVBQVFBOzRCQUNSdUIsV0FBVyxXQUVWLE9BREFILE1BQU1NLGdCQUFnQixlQUFlOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFNekMsOERBQUNYLHNEQUFhQTs7Ozs7MEJBQ2QsOERBQUNDLG1EQUFVQTs7Ozs7OztBQUdkO0dBMUNNQzs7UUFFcUJkLGlFQUFhQTs7O0tBRmxDYztBQTRDTiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9TaWRlYmFyL2luZGV4LmpzPzRhMDMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQge1xuXHRBZGp1c3RtZW50c0hvcml6b250YWxJY29uLFxuXHRVc2VySWNvbixcblx0WE1hcmtJY29uLFxuXHRDaGV2cm9uRG93bkljb24sXG59IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0LzI0L3NvbGlkXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZVZhbHVlIH0gZnJvbSBcIkAvY29udGV4dC9TdGF0ZVByb3ZpZGVyXCI7XG5pbXBvcnQge1xuXHRzZXRUYXJnZXRJbnB1dCxcblx0YWRkVGFyZ2V0LFxuXHRyZW1vdmVUYXJnZXQsXG5cdHNldENvbnRlbnRUaGVtZU9wZW4sXG5cdHNldFRvbmVEdXJhdGlvbk9wZW4sXG5cdHNldFRhcmdldEF1ZGllbmNlc09wZW4sXG5cdHNldERlc2NyaXB0aXZlV29yZHNPcGVuLFxuXHRzZXRGaW5lVHVuaW5nT3Blbixcblx0Y2xvc2VTZXR0aW5ncyxcblx0c2V0SXNTZXR0aW5nc09wZW4sXG5cdHNldElzU3BlYWtlck9wZW4sXG59IGZyb20gXCJAL2NvbnRleHQvYWN0aW9uc1wiO1xuaW1wb3J0IFNldHRpbmdzUGFuZWwgZnJvbSBcIi4vU2V0dGluZ3NQYW5lbFwiO1xuaW1wb3J0IER1bW15UGFuZWwgZnJvbSBcIi4vRHVtbXlQYW5lbFwiO1xuXG5jb25zdCBTaWRlYmFyID0gKCkgPT4ge1xuXHRjb25zdCBbaXNNb3VudGVkLCBzZXRJc01vdW50ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXHRjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVN0YXRlVmFsdWUoKTtcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdHNldElzTW91bnRlZCh0cnVlKTtcblx0fSwgW10pO1xuXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdHsvKiBGSVhFRCBTSURFQkFSICovfVxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gbWQ6YmxvY2sgZmxleC1jb2wgYmctZGFyay1wdXJwbGUgaXRlbXMtY2VudGVyIHAtMyBwdC0zIHJlbGF0aXZlIHctMTQgei01MFwiPlxuXHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0b25DbGljaz17KCkgPT4gZGlzcGF0Y2goc2V0SXNTZXR0aW5nc09wZW4oKSl9XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXtgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC1tZCBoLTkgdy05ICR7XG5cdFx0XHRcdFx0XHRzdGF0ZS5pc1NldHRpbmdzT3BlbiA/IFwiYmctbGlnaHQtcHVycGxlXCIgOiBcInRyYW5zcGFyZW50XCJcblx0XHRcdFx0XHR9IGR1cmF0aW9uLTEwMCBjdXJzb3ItcG9pbnRlcmB9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8QWRqdXN0bWVudHNIb3Jpem9udGFsSWNvblxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgaC02IHctNiAke1xuXHRcdFx0XHRcdFx0XHRzdGF0ZS5pc1NldHRpbmdzT3BlbiA/IFwidGV4dC13aGl0ZVwiIDogXCJ0ZXh0LWxpZ2h0LXB1cnBsZVwiXG5cdFx0XHRcdFx0XHR9YH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKHNldElzU3BlYWtlck9wZW4oKSl9XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXtgbXQtOCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLW1kIGgtOSB3LTkgJHtcblx0XHRcdFx0XHRcdHN0YXRlLmlzU3BlYWtlck9wZW4gPyBcImJnLWxpZ2h0LXB1cnBsZVwiIDogXCJ0cmFuc3BhcmVudFwiXG5cdFx0XHRcdFx0fSBkdXJhdGlvbi0xMDAgY3Vyc29yLXBvaW50ZXJgfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PFVzZXJJY29uXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9e2BoLTYgdy02ICR7XG5cdFx0XHRcdFx0XHRcdHN0YXRlLmlzU3BlYWtlck9wZW4gPyBcInRleHQtd2hpdGVcIiA6IFwidGV4dC1saWdodC1wdXJwbGVcIlxuXHRcdFx0XHRcdFx0fWB9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblxuXHRcdFx0PFNldHRpbmdzUGFuZWwgLz5cblx0XHRcdDxEdW1teVBhbmVsIC8+XG5cdFx0PC8+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyO1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwibW90aW9uIiwiQWRqdXN0bWVudHNIb3Jpem9udGFsSWNvbiIsIlVzZXJJY29uIiwiWE1hcmtJY29uIiwiQ2hldnJvbkRvd25JY29uIiwidXNlU3RhdGVWYWx1ZSIsInNldFRhcmdldElucHV0IiwiYWRkVGFyZ2V0IiwicmVtb3ZlVGFyZ2V0Iiwic2V0Q29udGVudFRoZW1lT3BlbiIsInNldFRvbmVEdXJhdGlvbk9wZW4iLCJzZXRUYXJnZXRBdWRpZW5jZXNPcGVuIiwic2V0RGVzY3JpcHRpdmVXb3Jkc09wZW4iLCJzZXRGaW5lVHVuaW5nT3BlbiIsImNsb3NlU2V0dGluZ3MiLCJzZXRJc1NldHRpbmdzT3BlbiIsInNldElzU3BlYWtlck9wZW4iLCJTZXR0aW5nc1BhbmVsIiwiRHVtbXlQYW5lbCIsIlNpZGViYXIiLCJpc01vdW50ZWQiLCJzZXRJc01vdW50ZWQiLCJzdGF0ZSIsImRpc3BhdGNoIiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayIsImlzU2V0dGluZ3NPcGVuIiwiaXNTcGVha2VyT3BlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./src/components/Sidebar/index.js\n"));

/***/ })

});