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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @heroicons/react/24/solid */ \"(app-client)/./node_modules/@heroicons/react/24/solid/esm/AdjustmentsHorizontalIcon.js\");\n/* harmony import */ var _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @heroicons/react/24/solid */ \"(app-client)/./node_modules/@heroicons/react/24/solid/esm/UserIcon.js\");\n/* harmony import */ var _context_StateProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/context/StateProvider */ \"(app-client)/./src/context/StateProvider.js\");\n/* harmony import */ var _context_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/context/actions */ \"(app-client)/./src/context/actions.js\");\n/* harmony import */ var _SettingsPanel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SettingsPanel */ \"(app-client)/./src/components/Sidebar/SettingsPanel.js\");\n/* harmony import */ var _DummyPanel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DummyPanel */ \"(app-client)/./src/components/Sidebar/DummyPanel.js\");\n/* harmony import */ var _BottomBar_Overlay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../BottomBar/Overlay */ \"(app-client)/./src/components/BottomBar/Overlay.js\");\n/* harmony import */ var _BottomBar_DummyOverlay__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../BottomBar/DummyOverlay */ \"(app-client)/./src/components/BottomBar/DummyOverlay.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst Sidebar = ()=>{\n    _s();\n    const [state, dispatch] = (0,_context_StateProvider__WEBPACK_IMPORTED_MODULE_2__.useStateValue)();\n    const [isMounted, setIsMounted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [windowWidth, setWindowWidth] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setIsMounted(true);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleResize = ()=>{\n            setWindowWidth(window.innerWidth);\n        };\n        window.addEventListener(\"resize\", handleResize);\n        setWindowWidth(window.innerWidth);\n        return ()=>{\n            window.removeEventListener(\"resize\", handleResize);\n        };\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"hidden md:block flex-col bg-dark-purple items-center p-3 pt-3 relative w-14 z-50\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onClick: ()=>dispatch((0,_context_actions__WEBPACK_IMPORTED_MODULE_3__.setIsSettingsOpen)()),\n                        className: \"flex items-center justify-center rounded-md h-9 w-9 \".concat(state.isSettingsOpen ? \"bg-light-purple\" : \"transparent\", \" duration-100 cursor-pointer\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                            className: \"h-6 w-6 \".concat(state.isSettingsOpen ? \"text-white\" : \"text-light-purple\")\n                        }, void 0, false, {\n                            fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/index.js\",\n                            lineNumber: 61,\n                            columnNumber: 6\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/index.js\",\n                        lineNumber: 55,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onClick: ()=>dispatch((0,_context_actions__WEBPACK_IMPORTED_MODULE_3__.setIsSpeakerOpen)()),\n                        className: \"mt-8 flex items-center justify-center rounded-md h-9 w-9 \".concat(state.isSpeakerOpen ? \"bg-light-purple\" : \"transparent\", \" duration-100 cursor-pointer\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                            className: \"h-6 w-6 \".concat(state.isSpeakerOpen ? \"text-white\" : \"text-light-purple\")\n                        }, void 0, false, {\n                            fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/index.js\",\n                            lineNumber: 73,\n                            columnNumber: 6\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/index.js\",\n                        lineNumber: 67,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/index.js\",\n                lineNumber: 54,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SettingsPanel__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/index.js\",\n                lineNumber: 81,\n                columnNumber: 4\n            }, undefined),\n            state.isSettingsOpen && windowWidth < 768 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BottomBar_Overlay__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/index.js\",\n                lineNumber: 82,\n                columnNumber: 50\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DummyPanel__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/index.js\",\n                lineNumber: 83,\n                columnNumber: 4\n            }, undefined),\n            state.isSpeakerOpen && windowWidth < 768 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BottomBar_DummyOverlay__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/index.js\",\n                lineNumber: 84,\n                columnNumber: 49\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Sidebar, \"beu5SvxVHDPIPOxDJdzlHuBQ0sM=\", false, function() {\n    return [\n        _context_StateProvider__WEBPACK_IMPORTED_MODULE_2__.useStateValue\n    ];\n});\n_c = Sidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);\nvar _c;\n$RefreshReg$(_c, \"Sidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2NvbXBvbmVudHMvU2lkZWJhci9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUU0QztBQUNMO0FBTUo7QUFDcUI7QUFhN0I7QUFDaUI7QUFDTjtBQUNLO0FBQ1U7QUFFckQsTUFBTXVCLFVBQVU7O0lBQ2YsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdsQixxRUFBYUE7SUFDdkMsTUFBTSxDQUFDbUIsV0FBV0MsYUFBYSxHQUFHMUIsK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDMkIsYUFBYUMsZUFBZSxHQUFHNUIsK0NBQVFBO0lBRTlDRCxnREFBU0EsQ0FBQztRQUNUMkIsYUFBYTtJQUNkLEdBQUcsRUFBRTtJQUVMM0IsZ0RBQVNBLENBQUM7UUFDVCxNQUFNOEIsZUFBZTtZQUNwQkQsZUFBZUUsT0FBT0M7UUFDdkI7UUFDQUQsT0FBT0UsaUJBQWlCLFVBQVVIO1FBQ2xDRCxlQUFlRSxPQUFPQztRQUV0QixPQUFPO1lBQ05ELE9BQU9HLG9CQUFvQixVQUFVSjtRQUN0QztJQUNEO0lBRUEscUJBQ0M7OzBCQUVDLDhEQUFDSztnQkFBSUMsV0FBVTs7a0NBQ2QsOERBQUNEO3dCQUNBRSxTQUFTLElBQU1aLFNBQVNSLG1FQUFpQkE7d0JBQ3pDbUIsV0FBVyx1REFFVixPQURBWixNQUFNYyxpQkFBaUIsb0JBQW9CLGVBQzNDO2tDQUVELDRFQUFDbkMsaUVBQXlCQTs0QkFDekJpQyxXQUFXLFdBRVYsT0FEQVosTUFBTWMsaUJBQWlCLGVBQWU7Ozs7Ozs7Ozs7O2tDQUl6Qyw4REFBQ0g7d0JBQ0FFLFNBQVMsSUFBTVosU0FBU1Asa0VBQWdCQTt3QkFDeENrQixXQUFXLDREQUVWLE9BREFaLE1BQU1lLGdCQUFnQixvQkFBb0IsZUFDMUM7a0NBRUQsNEVBQUNuQyxpRUFBUUE7NEJBQ1JnQyxXQUFXLFdBRVYsT0FEQVosTUFBTWUsZ0JBQWdCLGVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQU16Qyw4REFBQ3BCLHNEQUFhQTs7Ozs7WUFDYkssTUFBTWMsa0JBQWtCVixjQUFjLHFCQUFPLDhEQUFDUCwwREFBT0E7Ozs7OzBCQUN0RCw4REFBQ0QsbURBQVVBOzs7OztZQUNWSSxNQUFNZSxpQkFBaUJYLGNBQWMscUJBQU8sOERBQUNOLCtEQUFZQTs7Ozs7OztBQUc3RDtHQXpETUM7O1FBQ3FCaEIsaUVBQWFBOzs7S0FEbENnQjtBQTJETiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9TaWRlYmFyL2luZGV4LmpzPzRhMDMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQge1xuXHRBZGp1c3RtZW50c0hvcml6b250YWxJY29uLFxuXHRVc2VySWNvbixcblx0WE1hcmtJY29uLFxuXHRDaGV2cm9uRG93bkljb24sXG59IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0LzI0L3NvbGlkXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZVZhbHVlIH0gZnJvbSBcIkAvY29udGV4dC9TdGF0ZVByb3ZpZGVyXCI7XG5pbXBvcnQge1xuXHRzZXRUYXJnZXRJbnB1dCxcblx0YWRkVGFyZ2V0LFxuXHRyZW1vdmVUYXJnZXQsXG5cdHNldENvbnRlbnRUaGVtZU9wZW4sXG5cdHNldFRvbmVEdXJhdGlvbk9wZW4sXG5cdHNldFRhcmdldEF1ZGllbmNlc09wZW4sXG5cdHNldERlc2NyaXB0aXZlV29yZHNPcGVuLFxuXHRzZXRGaW5lVHVuaW5nT3Blbixcblx0Y2xvc2VTZXR0aW5ncyxcblx0c2V0SXNTZXR0aW5nc09wZW4sXG5cdHNldElzU3BlYWtlck9wZW4sXG59IGZyb20gXCJAL2NvbnRleHQvYWN0aW9uc1wiO1xuaW1wb3J0IFNldHRpbmdzUGFuZWwgZnJvbSBcIi4vU2V0dGluZ3NQYW5lbFwiO1xuaW1wb3J0IER1bW15UGFuZWwgZnJvbSBcIi4vRHVtbXlQYW5lbFwiO1xuaW1wb3J0IE92ZXJsYXkgZnJvbSBcIi4uL0JvdHRvbUJhci9PdmVybGF5XCI7XG5pbXBvcnQgRHVtbXlPdmVybGF5IGZyb20gXCIuLi9Cb3R0b21CYXIvRHVtbXlPdmVybGF5XCI7XG5cbmNvbnN0IFNpZGViYXIgPSAoKSA9PiB7XG5cdGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlU3RhdGVWYWx1ZSgpO1xuXHRjb25zdCBbaXNNb3VudGVkLCBzZXRJc01vdW50ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXHRjb25zdCBbd2luZG93V2lkdGgsIHNldFdpbmRvd1dpZHRoXSA9IHVzZVN0YXRlKCk7XG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRzZXRJc01vdW50ZWQodHJ1ZSk7XG5cdH0sIFtdKTtcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGNvbnN0IGhhbmRsZVJlc2l6ZSA9ICgpID0+IHtcblx0XHRcdHNldFdpbmRvd1dpZHRoKHdpbmRvdy5pbm5lcldpZHRoKTtcblx0XHR9O1xuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVJlc2l6ZSk7XG5cdFx0c2V0V2luZG93V2lkdGgod2luZG93LmlubmVyV2lkdGgpO1xuXG5cdFx0cmV0dXJuICgpID0+IHtcblx0XHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVJlc2l6ZSk7XG5cdFx0fTtcblx0fSk7XG5cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0ey8qIEZJWEVEIFNJREVCQVIgKi99XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBtZDpibG9jayBmbGV4LWNvbCBiZy1kYXJrLXB1cnBsZSBpdGVtcy1jZW50ZXIgcC0zIHB0LTMgcmVsYXRpdmUgdy0xNCB6LTUwXCI+XG5cdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaChzZXRJc1NldHRpbmdzT3BlbigpKX1cblx0XHRcdFx0XHRjbGFzc05hbWU9e2BmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLW1kIGgtOSB3LTkgJHtcblx0XHRcdFx0XHRcdHN0YXRlLmlzU2V0dGluZ3NPcGVuID8gXCJiZy1saWdodC1wdXJwbGVcIiA6IFwidHJhbnNwYXJlbnRcIlxuXHRcdFx0XHRcdH0gZHVyYXRpb24tMTAwIGN1cnNvci1wb2ludGVyYH1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxBZGp1c3RtZW50c0hvcml6b250YWxJY29uXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9e2BoLTYgdy02ICR7XG5cdFx0XHRcdFx0XHRcdHN0YXRlLmlzU2V0dGluZ3NPcGVuID8gXCJ0ZXh0LXdoaXRlXCIgOiBcInRleHQtbGlnaHQtcHVycGxlXCJcblx0XHRcdFx0XHRcdH1gfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0b25DbGljaz17KCkgPT4gZGlzcGF0Y2goc2V0SXNTcGVha2VyT3BlbigpKX1cblx0XHRcdFx0XHRjbGFzc05hbWU9e2BtdC04IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtbWQgaC05IHctOSAke1xuXHRcdFx0XHRcdFx0c3RhdGUuaXNTcGVha2VyT3BlbiA/IFwiYmctbGlnaHQtcHVycGxlXCIgOiBcInRyYW5zcGFyZW50XCJcblx0XHRcdFx0XHR9IGR1cmF0aW9uLTEwMCBjdXJzb3ItcG9pbnRlcmB9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8VXNlckljb25cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGgtNiB3LTYgJHtcblx0XHRcdFx0XHRcdFx0c3RhdGUuaXNTcGVha2VyT3BlbiA/IFwidGV4dC13aGl0ZVwiIDogXCJ0ZXh0LWxpZ2h0LXB1cnBsZVwiXG5cdFx0XHRcdFx0XHR9YH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXG5cdFx0XHQ8U2V0dGluZ3NQYW5lbCAvPlxuXHRcdFx0e3N0YXRlLmlzU2V0dGluZ3NPcGVuICYmIHdpbmRvd1dpZHRoIDwgNzY4ICYmIDxPdmVybGF5IC8+fVxuXHRcdFx0PER1bW15UGFuZWwgLz5cblx0XHRcdHtzdGF0ZS5pc1NwZWFrZXJPcGVuICYmIHdpbmRvd1dpZHRoIDwgNzY4ICYmIDxEdW1teU92ZXJsYXkgLz59XG5cdFx0PC8+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyO1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwibW90aW9uIiwiQWRqdXN0bWVudHNIb3Jpem9udGFsSWNvbiIsIlVzZXJJY29uIiwiWE1hcmtJY29uIiwiQ2hldnJvbkRvd25JY29uIiwidXNlU3RhdGVWYWx1ZSIsInNldFRhcmdldElucHV0IiwiYWRkVGFyZ2V0IiwicmVtb3ZlVGFyZ2V0Iiwic2V0Q29udGVudFRoZW1lT3BlbiIsInNldFRvbmVEdXJhdGlvbk9wZW4iLCJzZXRUYXJnZXRBdWRpZW5jZXNPcGVuIiwic2V0RGVzY3JpcHRpdmVXb3Jkc09wZW4iLCJzZXRGaW5lVHVuaW5nT3BlbiIsImNsb3NlU2V0dGluZ3MiLCJzZXRJc1NldHRpbmdzT3BlbiIsInNldElzU3BlYWtlck9wZW4iLCJTZXR0aW5nc1BhbmVsIiwiRHVtbXlQYW5lbCIsIk92ZXJsYXkiLCJEdW1teU92ZXJsYXkiLCJTaWRlYmFyIiwic3RhdGUiLCJkaXNwYXRjaCIsImlzTW91bnRlZCIsInNldElzTW91bnRlZCIsIndpbmRvd1dpZHRoIiwic2V0V2luZG93V2lkdGgiLCJoYW5kbGVSZXNpemUiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiaXNTZXR0aW5nc09wZW4iLCJpc1NwZWFrZXJPcGVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./src/components/Sidebar/index.js\n"));

/***/ })

});