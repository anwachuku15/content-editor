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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/react/24/solid */ \"(app-client)/./node_modules/@heroicons/react/24/solid/esm/XMarkIcon.js\");\n/* harmony import */ var _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/react/24/solid */ \"(app-client)/./node_modules/@heroicons/react/24/solid/esm/ChevronDownIcon.js\");\n/* harmony import */ var _context_StateProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/context/StateProvider */ \"(app-client)/./src/context/StateProvider.js\");\n/* harmony import */ var _context_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/context/actions */ \"(app-client)/./src/context/actions.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst SettingsPanel = ()=>{\n    _s();\n    const [state, dispatch] = (0,_context_StateProvider__WEBPACK_IMPORTED_MODULE_1__.useStateValue)();\n    const settings = [\n        {\n            name: \"Content Theme\",\n            isOpen: state.isContentThemeOpen,\n            setIsOpen: ()=>dispatch((0,_context_actions__WEBPACK_IMPORTED_MODULE_2__.setContentThemeOpen)())\n        },\n        {\n            name: \"Tone and Duration\",\n            isOpen: state.isToneDurationOpen,\n            setIsOpen: ()=>dispatch((0,_context_actions__WEBPACK_IMPORTED_MODULE_2__.setToneDurationOpen)())\n        },\n        {\n            name: \"Target Audiences\",\n            isOpen: state.isTargetAudiencesOpen,\n            setIsOpen: ()=>dispatch((0,_context_actions__WEBPACK_IMPORTED_MODULE_2__.setTargetAudiencesOpen)())\n        },\n        {\n            name: \"Descriptive Keywords\",\n            isOpen: state.isDescriptiveWordsOpen,\n            setIsOpen: ()=>dispatch((0,_context_actions__WEBPACK_IMPORTED_MODULE_2__.setDescriptiveWordsOpen)())\n        },\n        {\n            name: \"Fine-Tuning\",\n            isOpen: state.isFineTuningOpen,\n            setIsOpen: ()=>dispatch((0,_context_actions__WEBPACK_IMPORTED_MODULE_2__.setFineTuningOpen)())\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"hidden md:block flex-col z-10 overflow-hidden \".concat(state.isSettingsOpen ? \"w-[35%] mr-[24px] ml-[16px]\" : \"w-[0px]\", \" duration-300 \"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row mt-3 mr-3 mb-2 w-full justify-between items-center duration-100 \".concat(!state.isSettingsOpen && \"opacity-0\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-light-purple text-lg xl:text-xl select-none\",\n                        children: \"Script Generation Settings\"\n                    }, void 0, false, {\n                        fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/SettingsPanel.js\",\n                        lineNumber: 61,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onClick: ()=>dispatch((0,_context_actions__WEBPACK_IMPORTED_MODULE_2__.closeSettings)()),\n                        className: \"flex align-middle cursor-pointer\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            className: \"h-5 w-5 black\"\n                        }, void 0, false, {\n                            fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/SettingsPanel.js\",\n                            lineNumber: 68,\n                            columnNumber: 6\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/SettingsPanel.js\",\n                        lineNumber: 64,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/SettingsPanel.js\",\n                lineNumber: 56,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\".concat(!state.isSettingsOpen && \"opacity-0\", \" duration-100\"),\n                children: settings.map((setting, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"h-[0.1px] bg-divider mt-4 mb-2\"\n                            }, void 0, false, {\n                                fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/SettingsPanel.js\",\n                                lineNumber: 76,\n                                columnNumber: 7\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        onClick: ()=>setting.setIsOpen(!setting.isOpen),\n                                        className: \"cursor-pointer flex justify-between mb-2\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-stone-400 text-[0.8rem] font-bold font-open-sans select-none ml-[0.4rem]\",\n                                                children: setting.name\n                                            }, void 0, false, {\n                                                fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/SettingsPanel.js\",\n                                                lineNumber: 82,\n                                                columnNumber: 9\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"cursor-pointer\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                                    className: \"h-4 w-4 text-divider \".concat(setting.isOpen && \"-rotate-180\", \" duration-300\")\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/SettingsPanel.js\",\n                                                    lineNumber: 86,\n                                                    columnNumber: 10\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/SettingsPanel.js\",\n                                                lineNumber: 85,\n                                                columnNumber: 9\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/SettingsPanel.js\",\n                                        lineNumber: 78,\n                                        columnNumber: 8\n                                    }, undefined),\n                                    setting.isOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"overflow-hidden\",\n                                        children: setting.name === \"Target Audiences\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                                    className: \"flex justify-between w-11/12\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                            type: \"text\",\n                                                            value: state.targetInput,\n                                                            onChange: (e)=>{\n                                                                dispatch((0,_context_actions__WEBPACK_IMPORTED_MODULE_2__.setTargetInput)(e.target.value));\n                                                            },\n                                                            className: \"rounded-sm h-8 w-5/6 focus:outline-none p-1\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/SettingsPanel.js\",\n                                                            lineNumber: 99,\n                                                            columnNumber: 13\n                                                        }, undefined),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                            onClick: ()=>dispatch((0,_context_actions__WEBPACK_IMPORTED_MODULE_2__.addTarget)()),\n                                                            disabled: state.targetInput.trim().length === 0,\n                                                            className: \"bg-gray-300 rounded-sm ml-1 h-8 w-1/6 text-xs \".concat(state.targetInput.trim().length < 1 ? \"text-gray-400\" : \"text-gray-700\"),\n                                                            children: \"Add\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/SettingsPanel.js\",\n                                                            lineNumber: 107,\n                                                            columnNumber: 13\n                                                        }, undefined)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/SettingsPanel.js\",\n                                                    lineNumber: 98,\n                                                    columnNumber: 12\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"flex flex-wrap mt-3 bg-[#0f1120] rounded-md \".concat(state.targets.length > 0 && \"p-2\"),\n                                                    children: state.targets.map((target, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                            className: \"flex flex-wrap max-w-fit items-center mr-2 mb-2 py-0.5 px-[0.4rem] bg-chip-bg rounded-xl\",\n                                                            children: [\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                                    className: \"mr-1 text-chip-text text-[0.7rem] text-clip font-medium\",\n                                                                    children: target\n                                                                }, void 0, false, {\n                                                                    fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/SettingsPanel.js\",\n                                                                    lineNumber: 130,\n                                                                    columnNumber: 15\n                                                                }, undefined),\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                                                    onClick: ()=>dispatch((0,_context_actions__WEBPACK_IMPORTED_MODULE_2__.removeTarget)(index)),\n                                                                    className: \"cursor-pointer h-3 w-3 text-gray-600\"\n                                                                }, void 0, false, {\n                                                                    fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/SettingsPanel.js\",\n                                                                    lineNumber: 133,\n                                                                    columnNumber: 15\n                                                                }, undefined)\n                                                            ]\n                                                        }, index, true, {\n                                                            fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/SettingsPanel.js\",\n                                                            lineNumber: 126,\n                                                            columnNumber: 14\n                                                        }, undefined))\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/SettingsPanel.js\",\n                                                    lineNumber: 120,\n                                                    columnNumber: 12\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                                className: \"text-white text-sm ml-4\",\n                                                children: [\n                                                    \"Dummy content for \",\n                                                    setting.name\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/SettingsPanel.js\",\n                                                lineNumber: 143,\n                                                columnNumber: 12\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/SettingsPanel.js\",\n                                            lineNumber: 142,\n                                            columnNumber: 11\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/SettingsPanel.js\",\n                                        lineNumber: 95,\n                                        columnNumber: 9\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/SettingsPanel.js\",\n                                lineNumber: 77,\n                                columnNumber: 7\n                            }, undefined)\n                        ]\n                    }, index, true, {\n                        fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/SettingsPanel.js\",\n                        lineNumber: 75,\n                        columnNumber: 6\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/SettingsPanel.js\",\n                lineNumber: 73,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/SettingsPanel.js\",\n        lineNumber: 50,\n        columnNumber: 3\n    }, undefined);\n};\n_s(SettingsPanel, \"qeVE2oq6+t8Tw+Pxr9/HpLgjh68=\", false, function() {\n    return [\n        _context_StateProvider__WEBPACK_IMPORTED_MODULE_1__.useStateValue\n    ];\n});\n_c = SettingsPanel;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SettingsPanel);\nvar _c;\n$RefreshReg$(_c, \"SettingsPanel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2NvbXBvbmVudHMvU2lkZWJhci9TZXR0aW5nc1BhbmVsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRXVDO0FBQ2dDO0FBQ2Y7QUFXN0I7QUFFM0IsTUFBTWEsZ0JBQWdCOztJQUNyQixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR1oscUVBQWFBO0lBRXZDLE1BQU1hLFdBQVc7UUFDaEI7WUFDQ0MsTUFBTTtZQUNOQyxRQUFRSixNQUFNSztZQUNkQyxXQUFXLElBQU1MLFNBQVNSLHFFQUFtQkE7UUFDOUM7UUFDQTtZQUNDVSxNQUFNO1lBQ05DLFFBQVFKLE1BQU1PO1lBQ2RELFdBQVcsSUFBTUwsU0FBU1AscUVBQW1CQTtRQUM5QztRQUNBO1lBQ0NTLE1BQU07WUFDTkMsUUFBUUosTUFBTVE7WUFDZEYsV0FBVyxJQUFNTCxTQUFTTix3RUFBc0JBO1FBQ2pEO1FBQ0E7WUFDQ1EsTUFBTTtZQUNOQyxRQUFRSixNQUFNUztZQUNkSCxXQUFXLElBQU1MLFNBQVNMLHlFQUF1QkE7UUFDbEQ7UUFDQTtZQUNDTyxNQUFNO1lBQ05DLFFBQVFKLE1BQU1VO1lBQ2RKLFdBQVcsSUFBTUwsU0FBU0osbUVBQWlCQTtRQUM1QztLQUNBO0lBRUQscUJBQ0MsOERBQUNjO1FBQ0FDLFdBQVcsaURBRVYsT0FEQVosTUFBTWEsaUJBQWlCLGdDQUFnQyxXQUN2RDs7MEJBR0QsOERBQUNGO2dCQUNBQyxXQUFXLGlGQUVWLE9BREEsQ0FBQ1osTUFBTWEsa0JBQWtCOztrQ0FHMUIsOERBQUNDO3dCQUFHRixXQUFVO2tDQUFtRDs7Ozs7O2tDQUdqRSw4REFBQ0Q7d0JBQ0FJLFNBQVMsSUFBTWQsU0FBU0gsK0RBQWFBO3dCQUNyQ2MsV0FBVTtrQ0FFViw0RUFBQ3pCLGlFQUFTQTs0QkFBQ3lCLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUt2Qiw4REFBQ0Q7Z0JBQUlDLFdBQVcsR0FBd0MsT0FBckMsQ0FBQ1osTUFBTWEsa0JBQWtCLGFBQVk7MEJBQ3REWCxTQUFTYyxJQUFJLENBQUNDLFNBQVNDLHNCQUN2Qiw4REFBQ1A7OzBDQUNBLDhEQUFDQTtnQ0FBSUMsV0FBVTs7Ozs7OzBDQUNmLDhEQUFDRDs7a0RBQ0EsOERBQUNBO3dDQUNBSSxTQUFTLElBQU1FLFFBQVFYLFVBQVUsQ0FBQ1csUUFBUWI7d0NBQzFDUSxXQUFVOzswREFFViw4REFBQ087Z0RBQUVQLFdBQVU7MERBQ1hLLFFBQVFkOzs7Ozs7MERBRVYsOERBQUNRO2dEQUFJQyxXQUFZOzBEQUNoQiw0RUFBQ3hCLGlFQUFlQTtvREFDZndCLFdBQVcsd0JBRVYsT0FEQUssUUFBUWIsVUFBVSxlQUNsQjs7Ozs7Ozs7Ozs7Ozs7Ozs7b0NBS0hhLFFBQVFiLHdCQUNSLDhEQUFDTzt3Q0FBSUMsV0FBVTtrREFDYkssUUFBUWQsU0FBUyxtQ0FDakI7OzhEQUNDLDhEQUFDaUI7b0RBQUtSLFdBQVU7O3NFQUNmLDhEQUFDUzs0REFDQUMsTUFBSzs0REFDTEMsT0FBT3ZCLE1BQU13Qjs0REFDYkMsVUFBVSxDQUFDQztnRUFDVnpCLFNBQVNYLGdFQUFjQSxDQUFDb0MsRUFBRUMsT0FBT0o7NERBQ2xDOzREQUNBWCxXQUFVOzs7Ozs7c0VBRVgsOERBQUNnQjs0REFDQWIsU0FBUyxJQUFNZCxTQUFTViwyREFBU0E7NERBQ2pDc0MsVUFBVTdCLE1BQU13QixZQUFZTSxPQUFPQyxXQUFXOzREQUM5Q25CLFdBQVcsaURBSVYsT0FIQVosTUFBTXdCLFlBQVlNLE9BQU9DLFNBQVMsSUFDL0Isa0JBQ0E7c0VBRUo7Ozs7Ozs7Ozs7Ozs4REFLRiw4REFBQ3BCO29EQUNBQyxXQUFXLCtDQUVWLE9BREFaLE1BQU1nQyxRQUFRRCxTQUFTLEtBQUs7OERBRzVCL0IsTUFBTWdDLFFBQVFoQixJQUFJLENBQUNXLFFBQVFULHNCQUMzQiw4REFBQ1A7NERBRUFDLFdBQVU7OzhFQUVWLDhEQUFDTztvRUFBRVAsV0FBVTs4RUFDWGU7Ozs7Ozs4RUFFRiw4REFBQ3hDLGlFQUFTQTtvRUFDVDRCLFNBQVMsSUFBTWQsU0FBU1QsOERBQVlBLENBQUMwQjtvRUFDckNOLFdBQVU7Ozs7Ozs7MkRBUk5NOzs7Ozs7Ozs7Ozt5RUFlVCw4REFBQ1A7c0RBQ0EsNEVBQUNHO2dEQUFHRixXQUFVOztvREFBMEI7b0RBQ3BCSyxRQUFRZDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VCQXJFeEJlOzs7Ozs7Ozs7Ozs7Ozs7O0FBaUZmO0dBMUlNbkI7O1FBQ3FCVixpRUFBYUE7OztLQURsQ1U7QUE0SU4sK0RBQWVBLGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2lkZWJhci9TZXR0aW5nc1BhbmVsLmpzP2I1ZDEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgeyBYTWFya0ljb24sIENoZXZyb25Eb3duSWNvbiB9IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0LzI0L3NvbGlkXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZVZhbHVlIH0gZnJvbSBcIkAvY29udGV4dC9TdGF0ZVByb3ZpZGVyXCI7XG5pbXBvcnQge1xuXHRzZXRUYXJnZXRJbnB1dCxcblx0YWRkVGFyZ2V0LFxuXHRyZW1vdmVUYXJnZXQsXG5cdHNldENvbnRlbnRUaGVtZU9wZW4sXG5cdHNldFRvbmVEdXJhdGlvbk9wZW4sXG5cdHNldFRhcmdldEF1ZGllbmNlc09wZW4sXG5cdHNldERlc2NyaXB0aXZlV29yZHNPcGVuLFxuXHRzZXRGaW5lVHVuaW5nT3Blbixcblx0Y2xvc2VTZXR0aW5ncyxcbn0gZnJvbSBcIkAvY29udGV4dC9hY3Rpb25zXCI7XG5cbmNvbnN0IFNldHRpbmdzUGFuZWwgPSAoKSA9PiB7XG5cdGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlU3RhdGVWYWx1ZSgpO1xuXG5cdGNvbnN0IHNldHRpbmdzID0gW1xuXHRcdHtcblx0XHRcdG5hbWU6IFwiQ29udGVudCBUaGVtZVwiLFxuXHRcdFx0aXNPcGVuOiBzdGF0ZS5pc0NvbnRlbnRUaGVtZU9wZW4sXG5cdFx0XHRzZXRJc09wZW46ICgpID0+IGRpc3BhdGNoKHNldENvbnRlbnRUaGVtZU9wZW4oKSksXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRuYW1lOiBcIlRvbmUgYW5kIER1cmF0aW9uXCIsXG5cdFx0XHRpc09wZW46IHN0YXRlLmlzVG9uZUR1cmF0aW9uT3Blbixcblx0XHRcdHNldElzT3BlbjogKCkgPT4gZGlzcGF0Y2goc2V0VG9uZUR1cmF0aW9uT3BlbigpKSxcblx0XHR9LFxuXHRcdHtcblx0XHRcdG5hbWU6IFwiVGFyZ2V0IEF1ZGllbmNlc1wiLFxuXHRcdFx0aXNPcGVuOiBzdGF0ZS5pc1RhcmdldEF1ZGllbmNlc09wZW4sXG5cdFx0XHRzZXRJc09wZW46ICgpID0+IGRpc3BhdGNoKHNldFRhcmdldEF1ZGllbmNlc09wZW4oKSksXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRuYW1lOiBcIkRlc2NyaXB0aXZlIEtleXdvcmRzXCIsXG5cdFx0XHRpc09wZW46IHN0YXRlLmlzRGVzY3JpcHRpdmVXb3Jkc09wZW4sXG5cdFx0XHRzZXRJc09wZW46ICgpID0+IGRpc3BhdGNoKHNldERlc2NyaXB0aXZlV29yZHNPcGVuKCkpLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0bmFtZTogXCJGaW5lLVR1bmluZ1wiLFxuXHRcdFx0aXNPcGVuOiBzdGF0ZS5pc0ZpbmVUdW5pbmdPcGVuLFxuXHRcdFx0c2V0SXNPcGVuOiAoKSA9PiBkaXNwYXRjaChzZXRGaW5lVHVuaW5nT3BlbigpKSxcblx0XHR9LFxuXHRdO1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdlxuXHRcdFx0Y2xhc3NOYW1lPXtgaGlkZGVuIG1kOmJsb2NrIGZsZXgtY29sIHotMTAgb3ZlcmZsb3ctaGlkZGVuICR7XG5cdFx0XHRcdHN0YXRlLmlzU2V0dGluZ3NPcGVuID8gXCJ3LVszNSVdIG1yLVsyNHB4XSBtbC1bMTZweF1cIiA6IFwidy1bMHB4XVwiXG5cdFx0XHR9IGR1cmF0aW9uLTMwMCBgfVxuXHRcdD5cblx0XHRcdHsvKiBTRVRUSU5HUyBIRUFERVIgKi99XG5cdFx0XHQ8ZGl2XG5cdFx0XHRcdGNsYXNzTmFtZT17YGZsZXggZmxleC1yb3cgbXQtMyBtci0zIG1iLTIgdy1mdWxsIGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgZHVyYXRpb24tMTAwICR7XG5cdFx0XHRcdFx0IXN0YXRlLmlzU2V0dGluZ3NPcGVuICYmIFwib3BhY2l0eS0wXCJcblx0XHRcdFx0fWB9XG5cdFx0XHQ+XG5cdFx0XHRcdDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWxpZ2h0LXB1cnBsZSB0ZXh0LWxnIHhsOnRleHQteGwgc2VsZWN0LW5vbmVcIj5cblx0XHRcdFx0XHRTY3JpcHQgR2VuZXJhdGlvbiBTZXR0aW5nc1xuXHRcdFx0XHQ8L2gxPlxuXHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0b25DbGljaz17KCkgPT4gZGlzcGF0Y2goY2xvc2VTZXR0aW5ncygpKX1cblx0XHRcdFx0XHRjbGFzc05hbWU9XCJmbGV4IGFsaWduLW1pZGRsZSBjdXJzb3ItcG9pbnRlclwiXG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8WE1hcmtJY29uIGNsYXNzTmFtZT1cImgtNSB3LTUgYmxhY2tcIiAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXG5cdFx0XHR7LyogTUVOVSBJVEVNUyAqL31cblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgJHshc3RhdGUuaXNTZXR0aW5nc09wZW4gJiYgXCJvcGFjaXR5LTBcIn0gZHVyYXRpb24tMTAwYH0+XG5cdFx0XHRcdHtzZXR0aW5ncy5tYXAoKHNldHRpbmcsIGluZGV4KSA9PiAoXG5cdFx0XHRcdFx0PGRpdiBrZXk9e2luZGV4fT5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaC1bMC4xcHhdIGJnLWRpdmlkZXIgbXQtNCBtYi0yXCIgLz5cblx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBzZXR0aW5nLnNldElzT3Blbighc2V0dGluZy5pc09wZW4pfVxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyIGZsZXgganVzdGlmeS1iZXR3ZWVuIG1iLTJcIlxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidGV4dC1zdG9uZS00MDAgdGV4dC1bMC44cmVtXSBmb250LWJvbGQgZm9udC1vcGVuLXNhbnMgc2VsZWN0LW5vbmUgbWwtWzAuNHJlbV1cIj5cblx0XHRcdFx0XHRcdFx0XHRcdHtzZXR0aW5nLm5hbWV9XG5cdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgY3Vyc29yLXBvaW50ZXJgfT5cblx0XHRcdFx0XHRcdFx0XHRcdDxDaGV2cm9uRG93bkljb25cblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgaC00IHctNCB0ZXh0LWRpdmlkZXIgJHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZXR0aW5nLmlzT3BlbiAmJiBcIi1yb3RhdGUtMTgwXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSBkdXJhdGlvbi0zMDBgfVxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHRcdFx0e3NldHRpbmcuaXNPcGVuICYmIChcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93LWhpZGRlblwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0e3NldHRpbmcubmFtZSA9PT0gXCJUYXJnZXQgQXVkaWVuY2VzXCIgPyAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDw+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGZvcm0gY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gdy0xMS8xMlwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3N0YXRlLnRhcmdldElucHV0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkaXNwYXRjaChzZXRUYXJnZXRJbnB1dChlLnRhcmdldC52YWx1ZSkpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJyb3VuZGVkLXNtIGgtOCB3LTUvNiBmb2N1czpvdXRsaW5lLW5vbmUgcC0xXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKGFkZFRhcmdldCgpKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGlzYWJsZWQ9e3N0YXRlLnRhcmdldElucHV0LnRyaW0oKS5sZW5ndGggPT09IDB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGJnLWdyYXktMzAwIHJvdW5kZWQtc20gbWwtMSBoLTggdy0xLzYgdGV4dC14cyAke1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0YXRlLnRhcmdldElucHV0LnRyaW0oKS5sZW5ndGggPCAxXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ/IFwidGV4dC1ncmF5LTQwMFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6IFwidGV4dC1ncmF5LTcwMFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1gfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRBZGRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZm9ybT5cblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGZsZXggZmxleC13cmFwIG10LTMgYmctWyMwZjExMjBdIHJvdW5kZWQtbWQgJHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3RhdGUudGFyZ2V0cy5sZW5ndGggPiAwICYmIFwicC0yXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1gfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtzdGF0ZS50YXJnZXRzLm1hcCgodGFyZ2V0LCBpbmRleCkgPT4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0a2V5PXtpbmRleH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBtYXgtdy1maXQgaXRlbXMtY2VudGVyIG1yLTIgbWItMiBweS0wLjUgcHgtWzAuNHJlbV0gYmctY2hpcC1iZyByb3VuZGVkLXhsXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm1yLTEgdGV4dC1jaGlwLXRleHQgdGV4dC1bMC43cmVtXSB0ZXh0LWNsaXAgZm9udC1tZWRpdW1cIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHt0YXJnZXR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxYTWFya0ljb25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKHJlbW92ZVRhcmdldChpbmRleCkpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgaC0zIHctMyB0ZXh0LWdyYXktNjAwXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCkpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8Lz5cblx0XHRcdFx0XHRcdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC1zbSBtbC00XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHREdW1teSBjb250ZW50IGZvciB7c2V0dGluZy5uYW1lfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvaDE+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQpKX1cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2V0dGluZ3NQYW5lbDtcbiJdLCJuYW1lcyI6WyJtb3Rpb24iLCJYTWFya0ljb24iLCJDaGV2cm9uRG93bkljb24iLCJ1c2VTdGF0ZVZhbHVlIiwic2V0VGFyZ2V0SW5wdXQiLCJhZGRUYXJnZXQiLCJyZW1vdmVUYXJnZXQiLCJzZXRDb250ZW50VGhlbWVPcGVuIiwic2V0VG9uZUR1cmF0aW9uT3BlbiIsInNldFRhcmdldEF1ZGllbmNlc09wZW4iLCJzZXREZXNjcmlwdGl2ZVdvcmRzT3BlbiIsInNldEZpbmVUdW5pbmdPcGVuIiwiY2xvc2VTZXR0aW5ncyIsIlNldHRpbmdzUGFuZWwiLCJzdGF0ZSIsImRpc3BhdGNoIiwic2V0dGluZ3MiLCJuYW1lIiwiaXNPcGVuIiwiaXNDb250ZW50VGhlbWVPcGVuIiwic2V0SXNPcGVuIiwiaXNUb25lRHVyYXRpb25PcGVuIiwiaXNUYXJnZXRBdWRpZW5jZXNPcGVuIiwiaXNEZXNjcmlwdGl2ZVdvcmRzT3BlbiIsImlzRmluZVR1bmluZ09wZW4iLCJkaXYiLCJjbGFzc05hbWUiLCJpc1NldHRpbmdzT3BlbiIsImgxIiwib25DbGljayIsIm1hcCIsInNldHRpbmciLCJpbmRleCIsInAiLCJmb3JtIiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJ0YXJnZXRJbnB1dCIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImJ1dHRvbiIsImRpc2FibGVkIiwidHJpbSIsImxlbmd0aCIsInRhcmdldHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./src/components/Sidebar/SettingsPanel.js\n"));

/***/ })

});