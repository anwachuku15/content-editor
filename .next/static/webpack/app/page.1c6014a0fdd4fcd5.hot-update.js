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

/***/ "(app-client)/./src/components/Sidebar/SettingsPanel.js":
/*!*************************************************!*\
  !*** ./src/components/Sidebar/SettingsPanel.js ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"(app-client)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/react/24/solid */ \"(app-client)/./node_modules/@heroicons/react/24/solid/esm/XMarkIcon.js\");\n/* harmony import */ var _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/react/24/solid */ \"(app-client)/./node_modules/@heroicons/react/24/solid/esm/ChevronDownIcon.js\");\n/* harmony import */ var _context_StateProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/context/StateProvider */ \"(app-client)/./src/context/StateProvider.js\");\n/* harmony import */ var _context_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/context/actions */ \"(app-client)/./src/context/actions.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst SettingsPanel = ()=>{\n    _s();\n    const [state, dispatch] = (0,_context_StateProvider__WEBPACK_IMPORTED_MODULE_1__.useStateValue)();\n    const settings = [\n        {\n            name: \"Content Theme\",\n            isOpen: state.isContentThemeOpen,\n            setIsOpen: ()=>dispatch((0,_context_actions__WEBPACK_IMPORTED_MODULE_2__.setContentThemeOpen)())\n        },\n        {\n            name: \"Tone and Duration\",\n            isOpen: state.isToneDurationOpen,\n            setIsOpen: ()=>dispatch((0,_context_actions__WEBPACK_IMPORTED_MODULE_2__.setToneDurationOpen)())\n        },\n        {\n            name: \"Target Audiences\",\n            isOpen: state.isTargetAudiencesOpen,\n            setIsOpen: ()=>dispatch((0,_context_actions__WEBPACK_IMPORTED_MODULE_2__.setTargetAudiencesOpen)())\n        },\n        {\n            name: \"Descriptive Keywords\",\n            isOpen: state.isDescriptiveWordsOpen,\n            setIsOpen: ()=>dispatch((0,_context_actions__WEBPACK_IMPORTED_MODULE_2__.setDescriptiveWordsOpen)())\n        },\n        {\n            name: \"Fine-Tuning\",\n            isOpen: state.isFineTuningOpen,\n            setIsOpen: ()=>dispatch((0,_context_actions__WEBPACK_IMPORTED_MODULE_2__.setFineTuningOpen)())\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"hidden md:block flex-col z-10 overflow-hidden \".concat(state.isSettingsOpen ? \"w-[35%] mr-[24px] ml-[16px]\" : \"w-[0px]\", \" duration-300 \"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row mt-3 mr-3 mb-2 w-full justify-between items-center duration-300 \".concat(!state.isSettingsOpen && \"scale-0\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-light-purple text-lg xl:text-xl select-none\",\n                        children: \"Script Generation Settings\"\n                    }, void 0, false, {\n                        fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/SettingsPanel.js\",\n                        lineNumber: 61,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onClick: ()=>dispatch((0,_context_actions__WEBPACK_IMPORTED_MODULE_2__.closeSettings)()),\n                        className: \"flex align-middle cursor-pointer\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            className: \"h-5 w-5 text-gray-400\"\n                        }, void 0, false, {\n                            fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/SettingsPanel.js\",\n                            lineNumber: 68,\n                            columnNumber: 6\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/SettingsPanel.js\",\n                        lineNumber: 64,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/SettingsPanel.js\",\n                lineNumber: 56,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\".concat(!state.isSettingsOpen && \"scale-0\", \" duration-300\"),\n                children: settings.map((setting, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"h-[0.1px] bg-divider mt-4 mb-2\"\n                            }, void 0, false, {\n                                fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/SettingsPanel.js\",\n                                lineNumber: 76,\n                                columnNumber: 7\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        onClick: ()=>setting.setIsOpen(!setting.isOpen),\n                                        className: \"cursor-pointer flex justify-between mb-2\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-stone-400 text-[0.8rem] font-bold font-open-sans select-none ml-[0.4rem]\",\n                                                children: setting.name\n                                            }, void 0, false, {\n                                                fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/SettingsPanel.js\",\n                                                lineNumber: 82,\n                                                columnNumber: 9\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"cursor-pointer\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                                    className: \"h-4 w-4 text-gray-400 \".concat(setting.isOpen && \"-rotate-180\", \" duration-300\")\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/SettingsPanel.js\",\n                                                    lineNumber: 86,\n                                                    columnNumber: 10\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/SettingsPanel.js\",\n                                                lineNumber: 85,\n                                                columnNumber: 9\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/SettingsPanel.js\",\n                                        lineNumber: 78,\n                                        columnNumber: 8\n                                    }, undefined),\n                                    setting.name === \"Target Audiences\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                                        initial: {\n                                            height: 0\n                                        },\n                                        animate: setting.isOpen ? {\n                                            height: \"fit-content\"\n                                        } : {\n                                            height: 0\n                                        },\n                                        className: \"overflow-hidden\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                                className: \"flex justify-between w-11/12\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                        type: \"text\",\n                                                        value: state.targetInput,\n                                                        onChange: (e)=>{\n                                                            dispatch((0,_context_actions__WEBPACK_IMPORTED_MODULE_2__.setTargetInput)(e.target.value));\n                                                        },\n                                                        className: \"rounded-sm h-8 w-5/6 focus:outline-none p-1\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/SettingsPanel.js\",\n                                                        lineNumber: 103,\n                                                        columnNumber: 11\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                        onClick: ()=>dispatch((0,_context_actions__WEBPACK_IMPORTED_MODULE_2__.addTarget)()),\n                                                        disabled: state.targetInput.trim().length === 0,\n                                                        className: \"bg-gray-300 rounded-sm ml-1 h-8 w-1/6 text-xs \".concat(state.targetInput.trim().length < 1 ? \"text-gray-400\" : \"text-gray-700\"),\n                                                        children: \"Add\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/SettingsPanel.js\",\n                                                        lineNumber: 111,\n                                                        columnNumber: 11\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/SettingsPanel.js\",\n                                                lineNumber: 102,\n                                                columnNumber: 10\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"flex flex-wrap mt-3 bg-[#0f1120] rounded-md \".concat(state.targets.length > 0 && \"p-2\"),\n                                                children: state.targets.map((target, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"flex flex-wrap max-w-fit items-center mr-2 mb-2 py-0.5 px-[0.4rem] bg-chip-bg rounded-xl\",\n                                                        children: [\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                                className: \"mr-1 text-chip-text text-[0.7rem] text-clip font-medium\",\n                                                                children: target\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/SettingsPanel.js\",\n                                                                lineNumber: 134,\n                                                                columnNumber: 13\n                                                            }, undefined),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                                                onClick: ()=>dispatch((0,_context_actions__WEBPACK_IMPORTED_MODULE_2__.removeTarget)(index)),\n                                                                className: \"cursor-pointer h-3 w-3 text-gray-600\"\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/SettingsPanel.js\",\n                                                                lineNumber: 137,\n                                                                columnNumber: 13\n                                                            }, undefined)\n                                                        ]\n                                                    }, index, true, {\n                                                        fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/SettingsPanel.js\",\n                                                        lineNumber: 130,\n                                                        columnNumber: 12\n                                                    }, undefined))\n                                            }, void 0, false, {\n                                                fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/SettingsPanel.js\",\n                                                lineNumber: 124,\n                                                columnNumber: 10\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/SettingsPanel.js\",\n                                        lineNumber: 95,\n                                        columnNumber: 9\n                                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                            children: [\n                                                \"Dummy content for \",\n                                                setting.name\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/SettingsPanel.js\",\n                                            lineNumber: 147,\n                                            columnNumber: 10\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/SettingsPanel.js\",\n                                        lineNumber: 146,\n                                        columnNumber: 9\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/SettingsPanel.js\",\n                                lineNumber: 77,\n                                columnNumber: 7\n                            }, undefined)\n                        ]\n                    }, index, true, {\n                        fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/SettingsPanel.js\",\n                        lineNumber: 75,\n                        columnNumber: 6\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/SettingsPanel.js\",\n                lineNumber: 73,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/SettingsPanel.js\",\n        lineNumber: 50,\n        columnNumber: 3\n    }, undefined);\n};\n_s(SettingsPanel, \"qeVE2oq6+t8Tw+Pxr9/HpLgjh68=\", false, function() {\n    return [\n        _context_StateProvider__WEBPACK_IMPORTED_MODULE_1__.useStateValue\n    ];\n});\n_c = SettingsPanel;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SettingsPanel);\nvar _c;\n$RefreshReg$(_c, \"SettingsPanel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2NvbXBvbmVudHMvU2lkZWJhci9TZXR0aW5nc1BhbmVsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUV1QztBQUNnQztBQUNmO0FBVzdCO0FBRTNCLE1BQU1hLGdCQUFnQjs7SUFDckIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdaLHFFQUFhQTtJQUV2QyxNQUFNYSxXQUFXO1FBQ2hCO1lBQ0NDLE1BQU07WUFDTkMsUUFBUUosTUFBTUs7WUFDZEMsV0FBVyxJQUFNTCxTQUFTUixxRUFBbUJBO1FBQzlDO1FBQ0E7WUFDQ1UsTUFBTTtZQUNOQyxRQUFRSixNQUFNTztZQUNkRCxXQUFXLElBQU1MLFNBQVNQLHFFQUFtQkE7UUFDOUM7UUFDQTtZQUNDUyxNQUFNO1lBQ05DLFFBQVFKLE1BQU1RO1lBQ2RGLFdBQVcsSUFBTUwsU0FBU04sd0VBQXNCQTtRQUNqRDtRQUNBO1lBQ0NRLE1BQU07WUFDTkMsUUFBUUosTUFBTVM7WUFDZEgsV0FBVyxJQUFNTCxTQUFTTCx5RUFBdUJBO1FBQ2xEO1FBQ0E7WUFDQ08sTUFBTTtZQUNOQyxRQUFRSixNQUFNVTtZQUNkSixXQUFXLElBQU1MLFNBQVNKLG1FQUFpQkE7UUFDNUM7S0FDQTtJQUVELHFCQUNDLDhEQUFDYztRQUNBQyxXQUFXLGlEQUVWLE9BREFaLE1BQU1hLGlCQUFpQixnQ0FBZ0MsV0FDdkQ7OzBCQUdELDhEQUFDRjtnQkFDQUMsV0FBVyxpRkFFVixPQURBLENBQUNaLE1BQU1hLGtCQUFrQjs7a0NBRzFCLDhEQUFDQzt3QkFBR0YsV0FBVTtrQ0FBbUQ7Ozs7OztrQ0FHakUsOERBQUNEO3dCQUNBSSxTQUFTLElBQU1kLFNBQVNILCtEQUFhQTt3QkFDckNjLFdBQVU7a0NBRVYsNEVBQUN6QixpRUFBU0E7NEJBQUN5QixXQUFVOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFLdkIsOERBQUNEO2dCQUFJQyxXQUFXLEdBQXNDLE9BQW5DLENBQUNaLE1BQU1hLGtCQUFrQixXQUFVOzBCQUNwRFgsU0FBU2MsSUFBSSxDQUFDQyxTQUFTQyxzQkFDdkIsOERBQUNQOzswQ0FDQSw4REFBQ0E7Z0NBQUlDLFdBQVU7Ozs7OzswQ0FDZiw4REFBQ0Q7O2tEQUNBLDhEQUFDQTt3Q0FDQUksU0FBUyxJQUFNRSxRQUFRWCxVQUFVLENBQUNXLFFBQVFiO3dDQUMxQ1EsV0FBVTs7MERBRVYsOERBQUNPO2dEQUFFUCxXQUFVOzBEQUNYSyxRQUFRZDs7Ozs7OzBEQUVWLDhEQUFDUTtnREFBSUMsV0FBWTswREFDaEIsNEVBQUN4QixpRUFBZUE7b0RBQ2Z3QixXQUFXLHlCQUVWLE9BREFLLFFBQVFiLFVBQVUsZUFDbEI7Ozs7Ozs7Ozs7Ozs7Ozs7O29DQUtIYSxRQUFRZCxTQUFTLG1DQUNqQiw4REFBQ2pCLHFEQUFVeUI7d0NBQ1ZTLFNBQVM7NENBQUVDLFFBQVE7d0NBQUU7d0NBQ3JCQyxTQUNDTCxRQUFRYixTQUFTOzRDQUFFaUIsUUFBUTt3Q0FBYyxJQUFJOzRDQUFFQSxRQUFRO3dDQUFFO3dDQUUxRFQsV0FBVTs7MERBRVYsOERBQUNXO2dEQUFLWCxXQUFVOztrRUFDZiw4REFBQ1k7d0RBQ0FDLE1BQUs7d0RBQ0xDLE9BQU8xQixNQUFNMkI7d0RBQ2JDLFVBQVUsQ0FBQ0M7NERBQ1Y1QixTQUFTWCxnRUFBY0EsQ0FBQ3VDLEVBQUVDLE9BQU9KO3dEQUNsQzt3REFDQWQsV0FBVTs7Ozs7O2tFQUVYLDhEQUFDbUI7d0RBQ0FoQixTQUFTLElBQU1kLFNBQVNWLDJEQUFTQTt3REFDakN5QyxVQUFVaEMsTUFBTTJCLFlBQVlNLE9BQU9DLFdBQVc7d0RBQzlDdEIsV0FBVyxpREFJVixPQUhBWixNQUFNMkIsWUFBWU0sT0FBT0MsU0FBUyxJQUMvQixrQkFDQTtrRUFFSjs7Ozs7Ozs7Ozs7OzBEQUtGLDhEQUFDdkI7Z0RBQ0FDLFdBQVcsK0NBRVYsT0FEQVosTUFBTW1DLFFBQVFELFNBQVMsS0FBSzswREFHNUJsQyxNQUFNbUMsUUFBUW5CLElBQUksQ0FBQ2MsUUFBUVosc0JBQzNCLDhEQUFDUDt3REFFQUMsV0FBVTs7MEVBRVYsOERBQUNPO2dFQUFFUCxXQUFVOzBFQUNYa0I7Ozs7OzswRUFFRiw4REFBQzNDLGlFQUFTQTtnRUFDVDRCLFNBQVMsSUFBTWQsU0FBU1QsOERBQVlBLENBQUMwQjtnRUFDckNOLFdBQVU7Ozs7Ozs7dURBUk5NOzs7Ozs7Ozs7Ozs7Ozs7a0VBZVQsOERBQUNQO2tEQUNBLDRFQUFDRzs7Z0RBQUc7Z0RBQW1CRyxRQUFRZDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1QkF4RXpCZTs7Ozs7Ozs7Ozs7Ozs7OztBQWlGZjtHQTFJTW5COztRQUNxQlYsaUVBQWFBOzs7S0FEbENVO0FBNElOLCtEQUFlQSxhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1NpZGViYXIvU2V0dGluZ3NQYW5lbC5qcz9iNWQxIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHsgWE1hcmtJY29uLCBDaGV2cm9uRG93bkljb24gfSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC8yNC9zb2xpZFwiO1xuaW1wb3J0IHsgdXNlU3RhdGVWYWx1ZSB9IGZyb20gXCJAL2NvbnRleHQvU3RhdGVQcm92aWRlclwiO1xuaW1wb3J0IHtcblx0c2V0VGFyZ2V0SW5wdXQsXG5cdGFkZFRhcmdldCxcblx0cmVtb3ZlVGFyZ2V0LFxuXHRzZXRDb250ZW50VGhlbWVPcGVuLFxuXHRzZXRUb25lRHVyYXRpb25PcGVuLFxuXHRzZXRUYXJnZXRBdWRpZW5jZXNPcGVuLFxuXHRzZXREZXNjcmlwdGl2ZVdvcmRzT3Blbixcblx0c2V0RmluZVR1bmluZ09wZW4sXG5cdGNsb3NlU2V0dGluZ3MsXG59IGZyb20gXCJAL2NvbnRleHQvYWN0aW9uc1wiO1xuXG5jb25zdCBTZXR0aW5nc1BhbmVsID0gKCkgPT4ge1xuXHRjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVN0YXRlVmFsdWUoKTtcblxuXHRjb25zdCBzZXR0aW5ncyA9IFtcblx0XHR7XG5cdFx0XHRuYW1lOiBcIkNvbnRlbnQgVGhlbWVcIixcblx0XHRcdGlzT3Blbjogc3RhdGUuaXNDb250ZW50VGhlbWVPcGVuLFxuXHRcdFx0c2V0SXNPcGVuOiAoKSA9PiBkaXNwYXRjaChzZXRDb250ZW50VGhlbWVPcGVuKCkpLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0bmFtZTogXCJUb25lIGFuZCBEdXJhdGlvblwiLFxuXHRcdFx0aXNPcGVuOiBzdGF0ZS5pc1RvbmVEdXJhdGlvbk9wZW4sXG5cdFx0XHRzZXRJc09wZW46ICgpID0+IGRpc3BhdGNoKHNldFRvbmVEdXJhdGlvbk9wZW4oKSksXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRuYW1lOiBcIlRhcmdldCBBdWRpZW5jZXNcIixcblx0XHRcdGlzT3Blbjogc3RhdGUuaXNUYXJnZXRBdWRpZW5jZXNPcGVuLFxuXHRcdFx0c2V0SXNPcGVuOiAoKSA9PiBkaXNwYXRjaChzZXRUYXJnZXRBdWRpZW5jZXNPcGVuKCkpLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0bmFtZTogXCJEZXNjcmlwdGl2ZSBLZXl3b3Jkc1wiLFxuXHRcdFx0aXNPcGVuOiBzdGF0ZS5pc0Rlc2NyaXB0aXZlV29yZHNPcGVuLFxuXHRcdFx0c2V0SXNPcGVuOiAoKSA9PiBkaXNwYXRjaChzZXREZXNjcmlwdGl2ZVdvcmRzT3BlbigpKSxcblx0XHR9LFxuXHRcdHtcblx0XHRcdG5hbWU6IFwiRmluZS1UdW5pbmdcIixcblx0XHRcdGlzT3Blbjogc3RhdGUuaXNGaW5lVHVuaW5nT3Blbixcblx0XHRcdHNldElzT3BlbjogKCkgPT4gZGlzcGF0Y2goc2V0RmluZVR1bmluZ09wZW4oKSksXG5cdFx0fSxcblx0XTtcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXZcblx0XHRcdGNsYXNzTmFtZT17YGhpZGRlbiBtZDpibG9jayBmbGV4LWNvbCB6LTEwIG92ZXJmbG93LWhpZGRlbiAke1xuXHRcdFx0XHRzdGF0ZS5pc1NldHRpbmdzT3BlbiA/IFwidy1bMzUlXSBtci1bMjRweF0gbWwtWzE2cHhdXCIgOiBcInctWzBweF1cIlxuXHRcdFx0fSBkdXJhdGlvbi0zMDAgYH1cblx0XHQ+XG5cdFx0XHR7LyogU0VUVElOR1MgSEVBREVSICovfVxuXHRcdFx0PGRpdlxuXHRcdFx0XHRjbGFzc05hbWU9e2BmbGV4IGZsZXgtcm93IG10LTMgbXItMyBtYi0yIHctZnVsbCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIGR1cmF0aW9uLTMwMCAke1xuXHRcdFx0XHRcdCFzdGF0ZS5pc1NldHRpbmdzT3BlbiAmJiBcInNjYWxlLTBcIlxuXHRcdFx0XHR9YH1cblx0XHRcdD5cblx0XHRcdFx0PGgxIGNsYXNzTmFtZT1cInRleHQtbGlnaHQtcHVycGxlIHRleHQtbGcgeGw6dGV4dC14bCBzZWxlY3Qtbm9uZVwiPlxuXHRcdFx0XHRcdFNjcmlwdCBHZW5lcmF0aW9uIFNldHRpbmdzXG5cdFx0XHRcdDwvaDE+XG5cdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaChjbG9zZVNldHRpbmdzKCkpfVxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImZsZXggYWxpZ24tbWlkZGxlIGN1cnNvci1wb2ludGVyXCJcblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxYTWFya0ljb24gY2xhc3NOYW1lPVwiaC01IHctNSB0ZXh0LWdyYXktNDAwXCIgLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblxuXHRcdFx0ey8qIE1FTlUgSVRFTVMgKi99XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YCR7IXN0YXRlLmlzU2V0dGluZ3NPcGVuICYmIFwic2NhbGUtMFwifSBkdXJhdGlvbi0zMDBgfT5cblx0XHRcdFx0e3NldHRpbmdzLm1hcCgoc2V0dGluZywgaW5kZXgpID0+IChcblx0XHRcdFx0XHQ8ZGl2IGtleT17aW5kZXh9PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJoLVswLjFweF0gYmctZGl2aWRlciBtdC00IG1iLTJcIiAvPlxuXHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHNldHRpbmcuc2V0SXNPcGVuKCFzZXR0aW5nLmlzT3Blbil9XG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgZmxleCBqdXN0aWZ5LWJldHdlZW4gbWItMlwiXG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ0ZXh0LXN0b25lLTQwMCB0ZXh0LVswLjhyZW1dIGZvbnQtYm9sZCBmb250LW9wZW4tc2FucyBzZWxlY3Qtbm9uZSBtbC1bMC40cmVtXVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0e3NldHRpbmcubmFtZX1cblx0XHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2BjdXJzb3ItcG9pbnRlcmB9PlxuXHRcdFx0XHRcdFx0XHRcdFx0PENoZXZyb25Eb3duSWNvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2BoLTQgdy00IHRleHQtZ3JheS00MDAgJHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZXR0aW5nLmlzT3BlbiAmJiBcIi1yb3RhdGUtMTgwXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSBkdXJhdGlvbi0zMDBgfVxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHRcdFx0e3NldHRpbmcubmFtZSA9PT0gXCJUYXJnZXQgQXVkaWVuY2VzXCIgPyAoXG5cdFx0XHRcdFx0XHRcdFx0PG1vdGlvbi5kaXZcblx0XHRcdFx0XHRcdFx0XHRcdGluaXRpYWw9e3sgaGVpZ2h0OiAwIH19XG5cdFx0XHRcdFx0XHRcdFx0XHRhbmltYXRlPXtcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0dGluZy5pc09wZW4gPyB7IGhlaWdodDogXCJmaXQtY29udGVudFwiIH0gOiB7IGhlaWdodDogMCB9XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJvdmVyZmxvdy1oaWRkZW5cIlxuXHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdDxmb3JtIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIHctMTEvMTJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtzdGF0ZS50YXJnZXRJbnB1dH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRpc3BhdGNoKHNldFRhcmdldElucHV0KGUudGFyZ2V0LnZhbHVlKSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJyb3VuZGVkLXNtIGgtOCB3LTUvNiBmb2N1czpvdXRsaW5lLW5vbmUgcC0xXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKGFkZFRhcmdldCgpKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkaXNhYmxlZD17c3RhdGUudGFyZ2V0SW5wdXQudHJpbSgpLmxlbmd0aCA9PT0gMH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2BiZy1ncmF5LTMwMCByb3VuZGVkLXNtIG1sLTEgaC04IHctMS82IHRleHQteHMgJHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0YXRlLnRhcmdldElucHV0LnRyaW0oKS5sZW5ndGggPCAxXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdD8gXCJ0ZXh0LWdyYXktNDAwXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0OiBcInRleHQtZ3JheS03MDBcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1gfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0QWRkXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9mb3JtPlxuXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGZsZXggZmxleC13cmFwIG10LTMgYmctWyMwZjExMjBdIHJvdW5kZWQtbWQgJHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdGF0ZS50YXJnZXRzLmxlbmd0aCA+IDAgJiYgXCJwLTJcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9YH1cblx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0e3N0YXRlLnRhcmdldHMubWFwKCh0YXJnZXQsIGluZGV4KSA9PiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0a2V5PXtpbmRleH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIG1heC13LWZpdCBpdGVtcy1jZW50ZXIgbXItMiBtYi0yIHB5LTAuNSBweC1bMC40cmVtXSBiZy1jaGlwLWJnIHJvdW5kZWQteGxcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm1yLTEgdGV4dC1jaGlwLXRleHQgdGV4dC1bMC43cmVtXSB0ZXh0LWNsaXAgZm9udC1tZWRpdW1cIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e3RhcmdldH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxYTWFya0ljb25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gZGlzcGF0Y2gocmVtb3ZlVGFyZ2V0KGluZGV4KSl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyIGgtMyB3LTMgdGV4dC1ncmF5LTYwMFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpKX1cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvbW90aW9uLmRpdj5cblx0XHRcdFx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGgxPkR1bW15IGNvbnRlbnQgZm9yIHtzZXR0aW5nLm5hbWV9PC9oMT5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQpKX1cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2V0dGluZ3NQYW5lbDtcbiJdLCJuYW1lcyI6WyJtb3Rpb24iLCJYTWFya0ljb24iLCJDaGV2cm9uRG93bkljb24iLCJ1c2VTdGF0ZVZhbHVlIiwic2V0VGFyZ2V0SW5wdXQiLCJhZGRUYXJnZXQiLCJyZW1vdmVUYXJnZXQiLCJzZXRDb250ZW50VGhlbWVPcGVuIiwic2V0VG9uZUR1cmF0aW9uT3BlbiIsInNldFRhcmdldEF1ZGllbmNlc09wZW4iLCJzZXREZXNjcmlwdGl2ZVdvcmRzT3BlbiIsInNldEZpbmVUdW5pbmdPcGVuIiwiY2xvc2VTZXR0aW5ncyIsIlNldHRpbmdzUGFuZWwiLCJzdGF0ZSIsImRpc3BhdGNoIiwic2V0dGluZ3MiLCJuYW1lIiwiaXNPcGVuIiwiaXNDb250ZW50VGhlbWVPcGVuIiwic2V0SXNPcGVuIiwiaXNUb25lRHVyYXRpb25PcGVuIiwiaXNUYXJnZXRBdWRpZW5jZXNPcGVuIiwiaXNEZXNjcmlwdGl2ZVdvcmRzT3BlbiIsImlzRmluZVR1bmluZ09wZW4iLCJkaXYiLCJjbGFzc05hbWUiLCJpc1NldHRpbmdzT3BlbiIsImgxIiwib25DbGljayIsIm1hcCIsInNldHRpbmciLCJpbmRleCIsInAiLCJpbml0aWFsIiwiaGVpZ2h0IiwiYW5pbWF0ZSIsImZvcm0iLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsInRhcmdldElucHV0Iiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiYnV0dG9uIiwiZGlzYWJsZWQiLCJ0cmltIiwibGVuZ3RoIiwidGFyZ2V0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./src/components/Sidebar/SettingsPanel.js\n"));

/***/ })

});