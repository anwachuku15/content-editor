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

/***/ "(app-client)/./src/components/BottomBar/DummyOverlay.js":
/*!**************************************************!*\
  !*** ./src/components/BottomBar/DummyOverlay.js ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-client)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @heroicons/react/24/solid */ \"(app-client)/./node_modules/@heroicons/react/24/solid/esm/XMarkIcon.js\");\n/* harmony import */ var _context_StateProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/context/StateProvider */ \"(app-client)/./src/context/StateProvider.js\");\n/* harmony import */ var _context_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/context/actions */ \"(app-client)/./src/context/actions.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst DummyOverlay = ()=>{\n    _s();\n    const [state, dispatch] = (0,_context_StateProvider__WEBPACK_IMPORTED_MODULE_2__.useStateValue)();\n    const [isMounted, setIsMounted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setIsMounted(true);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n        initial: {\n            opacity: 0\n        },\n        animate: {\n            opacity: 1\n        },\n        exit: {\n            opacity: 0\n        },\n        className: \"fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50\",\n        onClick: ()=>dispatch((0,_context_actions__WEBPACK_IMPORTED_MODULE_3__.closeDummyPanel)()),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n            initial: {\n                scale: 0\n            },\n            animate: {\n                scale: 1\n            },\n            exit: {\n                scale: 0\n            },\n            className: \"bg-dark-purple rounded-lg min-w-[80%] \",\n            onClick: (e)=>e.stopPropagation(),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-4 pb-4 mx-[15px]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-row mt-3 mr-3 mb-2 w-full justify-between items-center duration-300 \".concat(!state.isSpeakerOpen && \"scale-0\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-light-purple text-lg xl:text-xl select-none\",\n                                children: \"Dummy Panel\"\n                            }, void 0, false, {\n                                fileName: \"/Users/andrewnwachuku/content-editor/src/components/BottomBar/DummyOverlay.js\",\n                                lineNumber: 38,\n                                columnNumber: 7\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                onClick: ()=>dispatch((0,_context_actions__WEBPACK_IMPORTED_MODULE_3__.closeDummyPanel)()),\n                                className: \"flex align-middle cursor-pointer\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    className: \"h-5 w-5 #ffffff\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/andrewnwachuku/content-editor/src/components/BottomBar/DummyOverlay.js\",\n                                    lineNumber: 45,\n                                    columnNumber: 8\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/andrewnwachuku/content-editor/src/components/BottomBar/DummyOverlay.js\",\n                                lineNumber: 41,\n                                columnNumber: 7\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/andrewnwachuku/content-editor/src/components/BottomBar/DummyOverlay.js\",\n                        lineNumber: 33,\n                        columnNumber: 6\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-white\",\n                            children: \"Dummy content goes here\"\n                        }, void 0, false, {\n                            fileName: \"/Users/andrewnwachuku/content-editor/src/components/BottomBar/DummyOverlay.js\",\n                            lineNumber: 49,\n                            columnNumber: 7\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/andrewnwachuku/content-editor/src/components/BottomBar/DummyOverlay.js\",\n                        lineNumber: 48,\n                        columnNumber: 6\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/andrewnwachuku/content-editor/src/components/BottomBar/DummyOverlay.js\",\n                lineNumber: 32,\n                columnNumber: 5\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/andrewnwachuku/content-editor/src/components/BottomBar/DummyOverlay.js\",\n            lineNumber: 25,\n            columnNumber: 4\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/andrewnwachuku/content-editor/src/components/BottomBar/DummyOverlay.js\",\n        lineNumber: 18,\n        columnNumber: 3\n    }, undefined);\n};\n_s(DummyOverlay, \"Qw5UEj1FVoHJbla2zkD/qRH612M=\", false, function() {\n    return [\n        _context_StateProvider__WEBPACK_IMPORTED_MODULE_2__.useStateValue\n    ];\n});\n_c = DummyOverlay;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DummyOverlay);\nvar _c;\n$RefreshReg$(_c, \"DummyOverlay\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2NvbXBvbmVudHMvQm90dG9tQmFyL0R1bW15T3ZlcmxheS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRW1EO0FBQ1o7QUFDZTtBQUNFO0FBQ0o7QUFFcEQsTUFBTU8sZUFBZTs7SUFDcEIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdKLHFFQUFhQTtJQUV2QyxNQUFNLENBQUNLLFdBQVdDLGFBQWEsR0FBR1QsK0NBQVFBLENBQUM7SUFDM0NELGdEQUFTQSxDQUFDO1FBQ1RVLGFBQWE7SUFDZCxHQUFHLEVBQUU7SUFFTCxxQkFDQyw4REFBQ1IscURBQVVTO1FBQ1ZDLFNBQVM7WUFBRUMsU0FBUztRQUFFO1FBQ3RCQyxTQUFTO1lBQUVELFNBQVM7UUFBRTtRQUN0QkUsTUFBTTtZQUFFRixTQUFTO1FBQUU7UUFDbkJHLFdBQVU7UUFDVkMsU0FBUyxJQUFNVCxTQUFTSCxpRUFBZUE7a0JBRXZDLDRFQUFDSCxxREFBVVM7WUFDVkMsU0FBUztnQkFBRU0sT0FBTztZQUFFO1lBQ3BCSixTQUFTO2dCQUFFSSxPQUFPO1lBQUU7WUFDcEJILE1BQU07Z0JBQUVHLE9BQU87WUFBRTtZQUNqQkYsV0FBVTtZQUNWQyxTQUFTLENBQUNFLElBQU1BLEVBQUVDO3NCQUVsQiw0RUFBQ1Q7Z0JBQUlLLFdBQVU7O2tDQUNkLDhEQUFDTDt3QkFDQUssV0FBVyxpRkFFVixPQURBLENBQUNULE1BQU1jLGlCQUFpQjs7MENBR3pCLDhEQUFDQztnQ0FBR04sV0FBVTswQ0FBbUQ7Ozs7OzswQ0FHakUsOERBQUNMO2dDQUNBTSxTQUFTLElBQU1ULFNBQVNILGlFQUFlQTtnQ0FDdkNXLFdBQVU7MENBRVYsNEVBQUNiLGlFQUFTQTtvQ0FBQ2EsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBR3ZCLDhEQUFDTDtrQ0FDQSw0RUFBQ1c7NEJBQUdOLFdBQVU7c0NBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1qQztHQTlDTVY7O1FBQ3FCRixpRUFBYUE7OztLQURsQ0U7QUFnRE4sK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQm90dG9tQmFyL0R1bW15T3ZlcmxheS5qcz9iMTAzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCB7IFhNYXJrSWNvbiB9IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0LzI0L3NvbGlkXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZVZhbHVlIH0gZnJvbSBcIkAvY29udGV4dC9TdGF0ZVByb3ZpZGVyXCI7XG5pbXBvcnQgeyBjbG9zZUR1bW15UGFuZWwgfSBmcm9tIFwiQC9jb250ZXh0L2FjdGlvbnNcIjtcblxuY29uc3QgRHVtbXlPdmVybGF5ID0gKCkgPT4ge1xuXHRjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVN0YXRlVmFsdWUoKTtcblxuXHRjb25zdCBbaXNNb3VudGVkLCBzZXRJc01vdW50ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdHNldElzTW91bnRlZCh0cnVlKTtcblx0fSwgW10pO1xuXG5cdHJldHVybiAoXG5cdFx0PG1vdGlvbi5kaXZcblx0XHRcdGluaXRpYWw9e3sgb3BhY2l0eTogMCB9fVxuXHRcdFx0YW5pbWF0ZT17eyBvcGFjaXR5OiAxIH19XG5cdFx0XHRleGl0PXt7IG9wYWNpdHk6IDAgfX1cblx0XHRcdGNsYXNzTmFtZT1cImZpeGVkIHRvcC0wIGxlZnQtMCByaWdodC0wIGJvdHRvbS0wIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLWJsYWNrIGJnLW9wYWNpdHktNTBcIlxuXHRcdFx0b25DbGljaz17KCkgPT4gZGlzcGF0Y2goY2xvc2VEdW1teVBhbmVsKCkpfVxuXHRcdD5cblx0XHRcdDxtb3Rpb24uZGl2XG5cdFx0XHRcdGluaXRpYWw9e3sgc2NhbGU6IDAgfX1cblx0XHRcdFx0YW5pbWF0ZT17eyBzY2FsZTogMSB9fVxuXHRcdFx0XHRleGl0PXt7IHNjYWxlOiAwIH19XG5cdFx0XHRcdGNsYXNzTmFtZT1cImJnLWRhcmstcHVycGxlIHJvdW5kZWQtbGcgbWluLXctWzgwJV0gXCJcblx0XHRcdFx0b25DbGljaz17KGUpID0+IGUuc3RvcFByb3BhZ2F0aW9uKCl9XG5cdFx0XHQ+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibXQtNCBwYi00IG14LVsxNXB4XVwiPlxuXHRcdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGZsZXggZmxleC1yb3cgbXQtMyBtci0zIG1iLTIgdy1mdWxsIGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgZHVyYXRpb24tMzAwICR7XG5cdFx0XHRcdFx0XHRcdCFzdGF0ZS5pc1NwZWFrZXJPcGVuICYmIFwic2NhbGUtMFwiXG5cdFx0XHRcdFx0XHR9YH1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8aDEgY2xhc3NOYW1lPVwidGV4dC1saWdodC1wdXJwbGUgdGV4dC1sZyB4bDp0ZXh0LXhsIHNlbGVjdC1ub25lXCI+XG5cdFx0XHRcdFx0XHRcdER1bW15IFBhbmVsXG5cdFx0XHRcdFx0XHQ8L2gxPlxuXHRcdFx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaChjbG9zZUR1bW15UGFuZWwoKSl9XG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImZsZXggYWxpZ24tbWlkZGxlIGN1cnNvci1wb2ludGVyXCJcblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0PFhNYXJrSWNvbiBjbGFzc05hbWU9XCJoLTUgdy01ICNmZmZmZmZcIiAvPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+RHVtbXkgY29udGVudCBnb2VzIGhlcmU8L2gxPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvbW90aW9uLmRpdj5cblx0XHQ8L21vdGlvbi5kaXY+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEdW1teU92ZXJsYXk7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIm1vdGlvbiIsIlhNYXJrSWNvbiIsInVzZVN0YXRlVmFsdWUiLCJjbG9zZUR1bW15UGFuZWwiLCJEdW1teU92ZXJsYXkiLCJzdGF0ZSIsImRpc3BhdGNoIiwiaXNNb3VudGVkIiwic2V0SXNNb3VudGVkIiwiZGl2IiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJhbmltYXRlIiwiZXhpdCIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJzY2FsZSIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJpc1NwZWFrZXJPcGVuIiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./src/components/BottomBar/DummyOverlay.js\n"));

/***/ })

});