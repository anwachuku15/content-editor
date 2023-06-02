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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"(app-client)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/react/24/solid */ \"(app-client)/./node_modules/@heroicons/react/24/solid/esm/XMarkIcon.js\");\n/* harmony import */ var _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/react/24/solid */ \"(app-client)/./node_modules/@heroicons/react/24/solid/esm/ChevronDownIcon.js\");\n/* harmony import */ var _context_StateProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/context/StateProvider */ \"(app-client)/./src/context/StateProvider.js\");\n/* harmony import */ var _context_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/context/actions */ \"(app-client)/./src/context/actions.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst SettingsPanel = ()=>{\n    _s();\n    const [state, dispatch] = (0,_context_StateProvider__WEBPACK_IMPORTED_MODULE_1__.useStateValue)();\n    const settings = [\n        {\n            name: \"Content Theme\",\n            isOpen: state.isContentThemeOpen,\n            setIsOpen: ()=>dispatch((0,_context_actions__WEBPACK_IMPORTED_MODULE_2__.setContentThemeOpen)())\n        },\n        {\n            name: \"Tone and Duration\",\n            isOpen: state.isToneDurationOpen,\n            setIsOpen: ()=>dispatch((0,_context_actions__WEBPACK_IMPORTED_MODULE_2__.setToneDurationOpen)())\n        },\n        {\n            name: \"Target Audiences\",\n            isOpen: state.isTargetAudiencesOpen,\n            setIsOpen: ()=>dispatch((0,_context_actions__WEBPACK_IMPORTED_MODULE_2__.setTargetAudiencesOpen)())\n        },\n        {\n            name: \"Descriptive Keywords\",\n            isOpen: state.isDescriptiveWordsOpen,\n            setIsOpen: ()=>dispatch((0,_context_actions__WEBPACK_IMPORTED_MODULE_2__.setDescriptiveWordsOpen)())\n        },\n        {\n            name: \"Fine-Tuning\",\n            isOpen: state.isFineTuningOpen,\n            setIsOpen: ()=>dispatch((0,_context_actions__WEBPACK_IMPORTED_MODULE_2__.setFineTuningOpen)())\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"hidden md:block flex-col z-10 overflow-hidden \".concat(state.isSettingsOpen ? \"w-[35%] mr-[24px] ml-[16px]\" : \"w-[0px]\", \" duration-300 \"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row mt-3 mr-3 mb-2 w-full justify-between items-center duration-300 \".concat(!state.isSettingsOpen && \"scale-0\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-light-purple text-lg xl:text-xl select-none\",\n                        children: \"Script Generation Settings\"\n                    }, void 0, false, {\n                        fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/SettingsPanel.js\",\n                        lineNumber: 61,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onClick: ()=>dispatch((0,_context_actions__WEBPACK_IMPORTED_MODULE_2__.closeSettings)()),\n                        className: \"flex align-middle cursor-pointer\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            className: \"h-5 w-5 black\"\n                        }, void 0, false, {\n                            fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/SettingsPanel.js\",\n                            lineNumber: 68,\n                            columnNumber: 6\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/SettingsPanel.js\",\n                        lineNumber: 64,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/SettingsPanel.js\",\n                lineNumber: 56,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\".concat(!state.isSettingsOpen && \"opacity-0\", \" overflow-hidden duration-1000 -translate-x-full\"),\n                children: settings.map((setting, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"h-[0.1px] bg-divider mt-4 mb-2\"\n                            }, void 0, false, {\n                                fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/SettingsPanel.js\",\n                                lineNumber: 80,\n                                columnNumber: 7\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        onClick: ()=>setting.setIsOpen(!setting.isOpen),\n                                        className: \"cursor-pointer flex justify-between mb-2\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-stone-400 text-[0.8rem] font-bold font-open-sans select-none ml-[0.4rem]\",\n                                                children: setting.name\n                                            }, void 0, false, {\n                                                fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/SettingsPanel.js\",\n                                                lineNumber: 86,\n                                                columnNumber: 9\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"cursor-pointer\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                                    className: \"h-4 w-4 text-divider \".concat(setting.isOpen && \"-rotate-180\", \" duration-300\")\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/SettingsPanel.js\",\n                                                    lineNumber: 90,\n                                                    columnNumber: 10\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/SettingsPanel.js\",\n                                                lineNumber: 89,\n                                                columnNumber: 9\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/SettingsPanel.js\",\n                                        lineNumber: 82,\n                                        columnNumber: 8\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                                        initial: {\n                                            height: 0\n                                        },\n                                        animate: setting.isOpen ? {\n                                            height: \"fit-content\"\n                                        } : {\n                                            height: 0\n                                        },\n                                        className: \"overflow-hidden\",\n                                        children: setting.name === \"Target Audiences\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                                    className: \"flex justify-between w-11/12\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                            type: \"text\",\n                                                            value: state.targetInput,\n                                                            onChange: (e)=>{\n                                                                dispatch((0,_context_actions__WEBPACK_IMPORTED_MODULE_2__.setTargetInput)(e.target.value));\n                                                            },\n                                                            className: \"rounded-sm h-8 w-5/6 focus:outline-none p-1\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/SettingsPanel.js\",\n                                                            lineNumber: 108,\n                                                            columnNumber: 12\n                                                        }, undefined),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                            onClick: ()=>dispatch((0,_context_actions__WEBPACK_IMPORTED_MODULE_2__.addTarget)()),\n                                                            disabled: state.targetInput.trim().length === 0,\n                                                            className: \"bg-gray-300 rounded-sm ml-1 h-8 w-1/6 text-xs \".concat(state.targetInput.trim().length < 1 ? \"text-gray-400\" : \"text-gray-700\"),\n                                                            children: \"Add\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/SettingsPanel.js\",\n                                                            lineNumber: 116,\n                                                            columnNumber: 12\n                                                        }, undefined)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/SettingsPanel.js\",\n                                                    lineNumber: 107,\n                                                    columnNumber: 11\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"flex flex-wrap mt-3 bg-[#0f1120] rounded-md \".concat(state.targets.length > 0 && \"p-2\"),\n                                                    children: state.targets.map((target, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                            className: \"flex flex-wrap max-w-fit items-center mr-2 mb-2 py-0.5 px-[0.4rem] bg-chip-bg rounded-xl\",\n                                                            children: [\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                                    className: \"mr-1 text-chip-text text-[0.7rem] text-clip font-medium\",\n                                                                    children: target\n                                                                }, void 0, false, {\n                                                                    fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/SettingsPanel.js\",\n                                                                    lineNumber: 139,\n                                                                    columnNumber: 14\n                                                                }, undefined),\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                                                    onClick: ()=>dispatch((0,_context_actions__WEBPACK_IMPORTED_MODULE_2__.removeTarget)(index)),\n                                                                    className: \"cursor-pointer h-3 w-3 text-gray-600\"\n                                                                }, void 0, false, {\n                                                                    fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/SettingsPanel.js\",\n                                                                    lineNumber: 142,\n                                                                    columnNumber: 14\n                                                                }, undefined)\n                                                            ]\n                                                        }, index, true, {\n                                                            fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/SettingsPanel.js\",\n                                                            lineNumber: 135,\n                                                            columnNumber: 13\n                                                        }, undefined))\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/SettingsPanel.js\",\n                                                    lineNumber: 129,\n                                                    columnNumber: 11\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                                className: \"text-white text-sm ml-4\",\n                                                children: [\n                                                    \"Dummy content for \",\n                                                    setting.name\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/SettingsPanel.js\",\n                                                lineNumber: 152,\n                                                columnNumber: 11\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/SettingsPanel.js\",\n                                            lineNumber: 151,\n                                            columnNumber: 10\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/SettingsPanel.js\",\n                                        lineNumber: 98,\n                                        columnNumber: 8\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/SettingsPanel.js\",\n                                lineNumber: 81,\n                                columnNumber: 7\n                            }, undefined)\n                        ]\n                    }, index, true, {\n                        fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/SettingsPanel.js\",\n                        lineNumber: 79,\n                        columnNumber: 6\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/SettingsPanel.js\",\n                lineNumber: 73,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/SettingsPanel.js\",\n        lineNumber: 50,\n        columnNumber: 3\n    }, undefined);\n};\n_s(SettingsPanel, \"qeVE2oq6+t8Tw+Pxr9/HpLgjh68=\", false, function() {\n    return [\n        _context_StateProvider__WEBPACK_IMPORTED_MODULE_1__.useStateValue\n    ];\n});\n_c = SettingsPanel;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SettingsPanel);\nvar _c;\n$RefreshReg$(_c, \"SettingsPanel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2NvbXBvbmVudHMvU2lkZWJhci9TZXR0aW5nc1BhbmVsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUV1QztBQUNnQztBQUNmO0FBVzdCO0FBRTNCLE1BQU1hLGdCQUFnQjs7SUFDckIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdaLHFFQUFhQTtJQUV2QyxNQUFNYSxXQUFXO1FBQ2hCO1lBQ0NDLE1BQU07WUFDTkMsUUFBUUosTUFBTUs7WUFDZEMsV0FBVyxJQUFNTCxTQUFTUixxRUFBbUJBO1FBQzlDO1FBQ0E7WUFDQ1UsTUFBTTtZQUNOQyxRQUFRSixNQUFNTztZQUNkRCxXQUFXLElBQU1MLFNBQVNQLHFFQUFtQkE7UUFDOUM7UUFDQTtZQUNDUyxNQUFNO1lBQ05DLFFBQVFKLE1BQU1RO1lBQ2RGLFdBQVcsSUFBTUwsU0FBU04sd0VBQXNCQTtRQUNqRDtRQUNBO1lBQ0NRLE1BQU07WUFDTkMsUUFBUUosTUFBTVM7WUFDZEgsV0FBVyxJQUFNTCxTQUFTTCx5RUFBdUJBO1FBQ2xEO1FBQ0E7WUFDQ08sTUFBTTtZQUNOQyxRQUFRSixNQUFNVTtZQUNkSixXQUFXLElBQU1MLFNBQVNKLG1FQUFpQkE7UUFDNUM7S0FDQTtJQUVELHFCQUNDLDhEQUFDYztRQUNBQyxXQUFXLGlEQUVWLE9BREFaLE1BQU1hLGlCQUFpQixnQ0FBZ0MsV0FDdkQ7OzBCQUdELDhEQUFDRjtnQkFDQUMsV0FBVyxpRkFFVixPQURBLENBQUNaLE1BQU1hLGtCQUFrQjs7a0NBRzFCLDhEQUFDQzt3QkFBR0YsV0FBVTtrQ0FBbUQ7Ozs7OztrQ0FHakUsOERBQUNEO3dCQUNBSSxTQUFTLElBQU1kLFNBQVNILCtEQUFhQTt3QkFDckNjLFdBQVU7a0NBRVYsNEVBQUN6QixpRUFBU0E7NEJBQUN5QixXQUFVOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFLdkIsOERBQUNEO2dCQUNBQyxXQUFXLEdBRVYsT0FEQSxDQUFDWixNQUFNYSxrQkFBa0IsYUFDekI7MEJBRUFYLFNBQVNjLElBQUksQ0FBQ0MsU0FBU0Msc0JBQ3ZCLDhEQUFDUDs7MENBQ0EsOERBQUNBO2dDQUFJQyxXQUFVOzs7Ozs7MENBQ2YsOERBQUNEOztrREFDQSw4REFBQ0E7d0NBQ0FJLFNBQVMsSUFBTUUsUUFBUVgsVUFBVSxDQUFDVyxRQUFRYjt3Q0FDMUNRLFdBQVU7OzBEQUVWLDhEQUFDTztnREFBRVAsV0FBVTswREFDWEssUUFBUWQ7Ozs7OzswREFFViw4REFBQ1E7Z0RBQUlDLFdBQVk7MERBQ2hCLDRFQUFDeEIsaUVBQWVBO29EQUNmd0IsV0FBVyx3QkFFVixPQURBSyxRQUFRYixVQUFVLGVBQ2xCOzs7Ozs7Ozs7Ozs7Ozs7OztrREFLSiw4REFBQ2xCLHFEQUFVeUI7d0NBQ1ZTLFNBQVM7NENBQUVDLFFBQVE7d0NBQUU7d0NBQ3JCQyxTQUNDTCxRQUFRYixTQUFTOzRDQUFFaUIsUUFBUTt3Q0FBYyxJQUFJOzRDQUFFQSxRQUFRO3dDQUFFO3dDQUUxRFQsV0FBVTtrREFFVEssUUFBUWQsU0FBUyxtQ0FDakI7OzhEQUNDLDhEQUFDb0I7b0RBQUtYLFdBQVU7O3NFQUNmLDhEQUFDWTs0REFDQUMsTUFBSzs0REFDTEMsT0FBTzFCLE1BQU0yQjs0REFDYkMsVUFBVSxDQUFDQztnRUFDVjVCLFNBQVNYLGdFQUFjQSxDQUFDdUMsRUFBRUMsT0FBT0o7NERBQ2xDOzREQUNBZCxXQUFVOzs7Ozs7c0VBRVgsOERBQUNtQjs0REFDQWhCLFNBQVMsSUFBTWQsU0FBU1YsMkRBQVNBOzREQUNqQ3lDLFVBQVVoQyxNQUFNMkIsWUFBWU0sT0FBT0MsV0FBVzs0REFDOUN0QixXQUFXLGlEQUlWLE9BSEFaLE1BQU0yQixZQUFZTSxPQUFPQyxTQUFTLElBQy9CLGtCQUNBO3NFQUVKOzs7Ozs7Ozs7Ozs7OERBS0YsOERBQUN2QjtvREFDQUMsV0FBVywrQ0FFVixPQURBWixNQUFNbUMsUUFBUUQsU0FBUyxLQUFLOzhEQUc1QmxDLE1BQU1tQyxRQUFRbkIsSUFBSSxDQUFDYyxRQUFRWixzQkFDM0IsOERBQUNQOzREQUVBQyxXQUFVOzs4RUFFViw4REFBQ087b0VBQUVQLFdBQVU7OEVBQ1hrQjs7Ozs7OzhFQUVGLDhEQUFDM0MsaUVBQVNBO29FQUNUNEIsU0FBUyxJQUFNZCxTQUFTVCw4REFBWUEsQ0FBQzBCO29FQUNyQ04sV0FBVTs7Ozs7OzsyREFSTk07Ozs7Ozs7Ozs7O3lFQWVULDhEQUFDUDtzREFDQSw0RUFBQ0c7Z0RBQUdGLFdBQVU7O29EQUEwQjtvREFDcEJLLFFBQVFkOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUJBMUV2QmU7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxRmY7R0FsSk1uQjs7UUFDcUJWLGlFQUFhQTs7O0tBRGxDVTtBQW9KTiwrREFBZUEsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9TaWRlYmFyL1NldHRpbmdzUGFuZWwuanM/YjVkMSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCB7IFhNYXJrSWNvbiwgQ2hldnJvbkRvd25JY29uIH0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3QvMjQvc29saWRcIjtcbmltcG9ydCB7IHVzZVN0YXRlVmFsdWUgfSBmcm9tIFwiQC9jb250ZXh0L1N0YXRlUHJvdmlkZXJcIjtcbmltcG9ydCB7XG5cdHNldFRhcmdldElucHV0LFxuXHRhZGRUYXJnZXQsXG5cdHJlbW92ZVRhcmdldCxcblx0c2V0Q29udGVudFRoZW1lT3Blbixcblx0c2V0VG9uZUR1cmF0aW9uT3Blbixcblx0c2V0VGFyZ2V0QXVkaWVuY2VzT3Blbixcblx0c2V0RGVzY3JpcHRpdmVXb3Jkc09wZW4sXG5cdHNldEZpbmVUdW5pbmdPcGVuLFxuXHRjbG9zZVNldHRpbmdzLFxufSBmcm9tIFwiQC9jb250ZXh0L2FjdGlvbnNcIjtcblxuY29uc3QgU2V0dGluZ3NQYW5lbCA9ICgpID0+IHtcblx0Y29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VTdGF0ZVZhbHVlKCk7XG5cblx0Y29uc3Qgc2V0dGluZ3MgPSBbXG5cdFx0e1xuXHRcdFx0bmFtZTogXCJDb250ZW50IFRoZW1lXCIsXG5cdFx0XHRpc09wZW46IHN0YXRlLmlzQ29udGVudFRoZW1lT3Blbixcblx0XHRcdHNldElzT3BlbjogKCkgPT4gZGlzcGF0Y2goc2V0Q29udGVudFRoZW1lT3BlbigpKSxcblx0XHR9LFxuXHRcdHtcblx0XHRcdG5hbWU6IFwiVG9uZSBhbmQgRHVyYXRpb25cIixcblx0XHRcdGlzT3Blbjogc3RhdGUuaXNUb25lRHVyYXRpb25PcGVuLFxuXHRcdFx0c2V0SXNPcGVuOiAoKSA9PiBkaXNwYXRjaChzZXRUb25lRHVyYXRpb25PcGVuKCkpLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0bmFtZTogXCJUYXJnZXQgQXVkaWVuY2VzXCIsXG5cdFx0XHRpc09wZW46IHN0YXRlLmlzVGFyZ2V0QXVkaWVuY2VzT3Blbixcblx0XHRcdHNldElzT3BlbjogKCkgPT4gZGlzcGF0Y2goc2V0VGFyZ2V0QXVkaWVuY2VzT3BlbigpKSxcblx0XHR9LFxuXHRcdHtcblx0XHRcdG5hbWU6IFwiRGVzY3JpcHRpdmUgS2V5d29yZHNcIixcblx0XHRcdGlzT3Blbjogc3RhdGUuaXNEZXNjcmlwdGl2ZVdvcmRzT3Blbixcblx0XHRcdHNldElzT3BlbjogKCkgPT4gZGlzcGF0Y2goc2V0RGVzY3JpcHRpdmVXb3Jkc09wZW4oKSksXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRuYW1lOiBcIkZpbmUtVHVuaW5nXCIsXG5cdFx0XHRpc09wZW46IHN0YXRlLmlzRmluZVR1bmluZ09wZW4sXG5cdFx0XHRzZXRJc09wZW46ICgpID0+IGRpc3BhdGNoKHNldEZpbmVUdW5pbmdPcGVuKCkpLFxuXHRcdH0sXG5cdF07XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2XG5cdFx0XHRjbGFzc05hbWU9e2BoaWRkZW4gbWQ6YmxvY2sgZmxleC1jb2wgei0xMCBvdmVyZmxvdy1oaWRkZW4gJHtcblx0XHRcdFx0c3RhdGUuaXNTZXR0aW5nc09wZW4gPyBcInctWzM1JV0gbXItWzI0cHhdIG1sLVsxNnB4XVwiIDogXCJ3LVswcHhdXCJcblx0XHRcdH0gZHVyYXRpb24tMzAwIGB9XG5cdFx0PlxuXHRcdFx0ey8qIFNFVFRJTkdTIEhFQURFUiAqL31cblx0XHRcdDxkaXZcblx0XHRcdFx0Y2xhc3NOYW1lPXtgZmxleCBmbGV4LXJvdyBtdC0zIG1yLTMgbWItMiB3LWZ1bGwganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBkdXJhdGlvbi0zMDAgJHtcblx0XHRcdFx0XHQhc3RhdGUuaXNTZXR0aW5nc09wZW4gJiYgXCJzY2FsZS0wXCJcblx0XHRcdFx0fWB9XG5cdFx0XHQ+XG5cdFx0XHRcdDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWxpZ2h0LXB1cnBsZSB0ZXh0LWxnIHhsOnRleHQteGwgc2VsZWN0LW5vbmVcIj5cblx0XHRcdFx0XHRTY3JpcHQgR2VuZXJhdGlvbiBTZXR0aW5nc1xuXHRcdFx0XHQ8L2gxPlxuXHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0b25DbGljaz17KCkgPT4gZGlzcGF0Y2goY2xvc2VTZXR0aW5ncygpKX1cblx0XHRcdFx0XHRjbGFzc05hbWU9XCJmbGV4IGFsaWduLW1pZGRsZSBjdXJzb3ItcG9pbnRlclwiXG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8WE1hcmtJY29uIGNsYXNzTmFtZT1cImgtNSB3LTUgYmxhY2tcIiAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXG5cdFx0XHR7LyogTUVOVSBJVEVNUyAqL31cblx0XHRcdDxkaXZcblx0XHRcdFx0Y2xhc3NOYW1lPXtgJHtcblx0XHRcdFx0XHQhc3RhdGUuaXNTZXR0aW5nc09wZW4gJiYgXCJvcGFjaXR5LTBcIlxuXHRcdFx0XHR9IG92ZXJmbG93LWhpZGRlbiBkdXJhdGlvbi0xMDAwIC10cmFuc2xhdGUteC1mdWxsYH1cblx0XHRcdD5cblx0XHRcdFx0e3NldHRpbmdzLm1hcCgoc2V0dGluZywgaW5kZXgpID0+IChcblx0XHRcdFx0XHQ8ZGl2IGtleT17aW5kZXh9PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJoLVswLjFweF0gYmctZGl2aWRlciBtdC00IG1iLTJcIiAvPlxuXHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHNldHRpbmcuc2V0SXNPcGVuKCFzZXR0aW5nLmlzT3Blbil9XG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgZmxleCBqdXN0aWZ5LWJldHdlZW4gbWItMlwiXG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ0ZXh0LXN0b25lLTQwMCB0ZXh0LVswLjhyZW1dIGZvbnQtYm9sZCBmb250LW9wZW4tc2FucyBzZWxlY3Qtbm9uZSBtbC1bMC40cmVtXVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0e3NldHRpbmcubmFtZX1cblx0XHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2BjdXJzb3ItcG9pbnRlcmB9PlxuXHRcdFx0XHRcdFx0XHRcdFx0PENoZXZyb25Eb3duSWNvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2BoLTQgdy00IHRleHQtZGl2aWRlciAke1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNldHRpbmcuaXNPcGVuICYmIFwiLXJvdGF0ZS0xODBcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9IGR1cmF0aW9uLTMwMGB9XG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0XHQ8bW90aW9uLmRpdlxuXHRcdFx0XHRcdFx0XHRcdGluaXRpYWw9e3sgaGVpZ2h0OiAwIH19XG5cdFx0XHRcdFx0XHRcdFx0YW5pbWF0ZT17XG5cdFx0XHRcdFx0XHRcdFx0XHRzZXR0aW5nLmlzT3BlbiA/IHsgaGVpZ2h0OiBcImZpdC1jb250ZW50XCIgfSA6IHsgaGVpZ2h0OiAwIH1cblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwib3ZlcmZsb3ctaGlkZGVuXCJcblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdHtzZXR0aW5nLm5hbWUgPT09IFwiVGFyZ2V0IEF1ZGllbmNlc1wiID8gKFxuXHRcdFx0XHRcdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGZvcm0gY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gdy0xMS8xMlwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3N0YXRlLnRhcmdldElucHV0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRpc3BhdGNoKHNldFRhcmdldElucHV0KGUudGFyZ2V0LnZhbHVlKSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwicm91bmRlZC1zbSBoLTggdy01LzYgZm9jdXM6b3V0bGluZS1ub25lIHAtMVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaChhZGRUYXJnZXQoKSl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkaXNhYmxlZD17c3RhdGUudGFyZ2V0SW5wdXQudHJpbSgpLmxlbmd0aCA9PT0gMH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGJnLWdyYXktMzAwIHJvdW5kZWQtc20gbWwtMSBoLTggdy0xLzYgdGV4dC14cyAke1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdGF0ZS50YXJnZXRJbnB1dC50cmltKCkubGVuZ3RoIDwgMVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdD8gXCJ0ZXh0LWdyYXktNDAwXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6IFwidGV4dC1ncmF5LTcwMFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9YH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRBZGRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9mb3JtPlxuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2BmbGV4IGZsZXgtd3JhcCBtdC0zIGJnLVsjMGYxMTIwXSByb3VuZGVkLW1kICR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdGF0ZS50YXJnZXRzLmxlbmd0aCA+IDAgJiYgXCJwLTJcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1gfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e3N0YXRlLnRhcmdldHMubWFwKCh0YXJnZXQsIGluZGV4KSA9PiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGtleT17aW5kZXh9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIG1heC13LWZpdCBpdGVtcy1jZW50ZXIgbXItMiBtYi0yIHB5LTAuNSBweC1bMC40cmVtXSBiZy1jaGlwLWJnIHJvdW5kZWQteGxcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJtci0xIHRleHQtY2hpcC10ZXh0IHRleHQtWzAuN3JlbV0gdGV4dC1jbGlwIGZvbnQtbWVkaXVtXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e3RhcmdldH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8WE1hcmtJY29uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gZGlzcGF0Y2gocmVtb3ZlVGFyZ2V0KGluZGV4KSl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgaC0zIHctMyB0ZXh0LWdyYXktNjAwXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCkpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvPlxuXHRcdFx0XHRcdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDEgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LXNtIG1sLTRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHREdW1teSBjb250ZW50IGZvciB7c2V0dGluZy5uYW1lfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2gxPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdFx0PC9tb3Rpb24uZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdCkpfVxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZXR0aW5nc1BhbmVsO1xuIl0sIm5hbWVzIjpbIm1vdGlvbiIsIlhNYXJrSWNvbiIsIkNoZXZyb25Eb3duSWNvbiIsInVzZVN0YXRlVmFsdWUiLCJzZXRUYXJnZXRJbnB1dCIsImFkZFRhcmdldCIsInJlbW92ZVRhcmdldCIsInNldENvbnRlbnRUaGVtZU9wZW4iLCJzZXRUb25lRHVyYXRpb25PcGVuIiwic2V0VGFyZ2V0QXVkaWVuY2VzT3BlbiIsInNldERlc2NyaXB0aXZlV29yZHNPcGVuIiwic2V0RmluZVR1bmluZ09wZW4iLCJjbG9zZVNldHRpbmdzIiwiU2V0dGluZ3NQYW5lbCIsInN0YXRlIiwiZGlzcGF0Y2giLCJzZXR0aW5ncyIsIm5hbWUiLCJpc09wZW4iLCJpc0NvbnRlbnRUaGVtZU9wZW4iLCJzZXRJc09wZW4iLCJpc1RvbmVEdXJhdGlvbk9wZW4iLCJpc1RhcmdldEF1ZGllbmNlc09wZW4iLCJpc0Rlc2NyaXB0aXZlV29yZHNPcGVuIiwiaXNGaW5lVHVuaW5nT3BlbiIsImRpdiIsImNsYXNzTmFtZSIsImlzU2V0dGluZ3NPcGVuIiwiaDEiLCJvbkNsaWNrIiwibWFwIiwic2V0dGluZyIsImluZGV4IiwicCIsImluaXRpYWwiLCJoZWlnaHQiLCJhbmltYXRlIiwiZm9ybSIsImlucHV0IiwidHlwZSIsInZhbHVlIiwidGFyZ2V0SW5wdXQiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJidXR0b24iLCJkaXNhYmxlZCIsInRyaW0iLCJsZW5ndGgiLCJ0YXJnZXRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./src/components/Sidebar/SettingsPanel.js\n"));

/***/ })

});