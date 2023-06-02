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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/react/24/solid */ \"(app-client)/./node_modules/@heroicons/react/24/solid/esm/XMarkIcon.js\");\n/* harmony import */ var _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/react/24/solid */ \"(app-client)/./node_modules/@heroicons/react/24/solid/esm/ChevronDownIcon.js\");\n/* harmony import */ var _context_StateProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/context/StateProvider */ \"(app-client)/./src/context/StateProvider.js\");\n/* harmony import */ var _context_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/context/actions */ \"(app-client)/./src/context/actions.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst SettingsPanel = ()=>{\n    _s();\n    const [state, dispatch] = (0,_context_StateProvider__WEBPACK_IMPORTED_MODULE_1__.useStateValue)();\n    const settings = [\n        {\n            name: \"Content Theme\",\n            isOpen: state.isContentThemeOpen,\n            setIsOpen: ()=>dispatch((0,_context_actions__WEBPACK_IMPORTED_MODULE_2__.setContentThemeOpen)())\n        },\n        {\n            name: \"Tone and Duration\",\n            isOpen: state.isToneDurationOpen,\n            setIsOpen: ()=>dispatch((0,_context_actions__WEBPACK_IMPORTED_MODULE_2__.setToneDurationOpen)())\n        },\n        {\n            name: \"Target Audiences\",\n            isOpen: state.isTargetAudiencesOpen,\n            setIsOpen: ()=>dispatch((0,_context_actions__WEBPACK_IMPORTED_MODULE_2__.setTargetAudiencesOpen)())\n        },\n        {\n            name: \"Descriptive Keywords\",\n            isOpen: state.isDescriptiveWordsOpen,\n            setIsOpen: ()=>dispatch((0,_context_actions__WEBPACK_IMPORTED_MODULE_2__.setDescriptiveWordsOpen)())\n        },\n        {\n            name: \"Fine-Tuning\",\n            isOpen: state.isFineTuningOpen,\n            setIsOpen: ()=>dispatch((0,_context_actions__WEBPACK_IMPORTED_MODULE_2__.setFineTuningOpen)())\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"hidden md:block flex-col z-10 overflow-hidden \".concat(state.isSettingsOpen ? \"w-[35%] mr-[24px] ml-[16px]\" : \"w-[0px]\", \" duration-300 \"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row mt-3 mr-3 mb-2 w-full justify-between items-center duration-300 \".concat(!state.isSettingsOpen && \"scale-0\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-light-purple text-lg xl:text-xl select-none\",\n                        children: \"Script Generation Settings\"\n                    }, void 0, false, {\n                        fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/SettingsPanel.js\",\n                        lineNumber: 61,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onClick: ()=>dispatch((0,_context_actions__WEBPACK_IMPORTED_MODULE_2__.closeSettings)()),\n                        className: \"flex align-middle cursor-pointer\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            className: \"h-5 w-5 black\"\n                        }, void 0, false, {\n                            fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/SettingsPanel.js\",\n                            lineNumber: 68,\n                            columnNumber: 6\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/SettingsPanel.js\",\n                        lineNumber: 64,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/SettingsPanel.js\",\n                lineNumber: 56,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\".concat(!state.isSettingsOpen && \"opacity-0\", \" transition-opacity\"),\n                children: settings.map((setting, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"h-[0.1px] bg-divider mt-4 mb-2\"\n                            }, void 0, false, {\n                                fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/SettingsPanel.js\",\n                                lineNumber: 78,\n                                columnNumber: 7\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        onClick: ()=>setting.setIsOpen(!setting.isOpen),\n                                        className: \"cursor-pointer flex justify-between mb-2\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-stone-400 text-[0.8rem] font-bold font-open-sans select-none ml-[0.4rem]\",\n                                                children: setting.name\n                                            }, void 0, false, {\n                                                fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/SettingsPanel.js\",\n                                                lineNumber: 84,\n                                                columnNumber: 9\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"cursor-pointer\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                                    className: \"h-4 w-4 text-divider \".concat(setting.isOpen && \"-rotate-180\", \" duration-300\")\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/SettingsPanel.js\",\n                                                    lineNumber: 88,\n                                                    columnNumber: 10\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/SettingsPanel.js\",\n                                                lineNumber: 87,\n                                                columnNumber: 9\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/SettingsPanel.js\",\n                                        lineNumber: 80,\n                                        columnNumber: 8\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"overflow-hidden\",\n                                        children: setting.name === \"Target Audiences\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                                    className: \"flex justify-between w-11/12\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                            type: \"text\",\n                                                            value: state.targetInput,\n                                                            onChange: (e)=>{\n                                                                dispatch((0,_context_actions__WEBPACK_IMPORTED_MODULE_2__.setTargetInput)(e.target.value));\n                                                            },\n                                                            className: \"rounded-sm h-8 w-5/6 focus:outline-none p-1\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/SettingsPanel.js\",\n                                                            lineNumber: 100,\n                                                            columnNumber: 12\n                                                        }, undefined),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                            onClick: ()=>dispatch((0,_context_actions__WEBPACK_IMPORTED_MODULE_2__.addTarget)()),\n                                                            disabled: state.targetInput.trim().length === 0,\n                                                            className: \"bg-gray-300 rounded-sm ml-1 h-8 w-1/6 text-xs \".concat(state.targetInput.trim().length < 1 ? \"text-gray-400\" : \"text-gray-700\"),\n                                                            children: \"Add\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/SettingsPanel.js\",\n                                                            lineNumber: 108,\n                                                            columnNumber: 12\n                                                        }, undefined)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/SettingsPanel.js\",\n                                                    lineNumber: 99,\n                                                    columnNumber: 11\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"flex flex-wrap mt-3 bg-[#0f1120] rounded-md \".concat(state.targets.length > 0 && \"p-2\"),\n                                                    children: state.targets.map((target, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                            className: \"flex flex-wrap max-w-fit items-center mr-2 mb-2 py-0.5 px-[0.4rem] bg-chip-bg rounded-xl\",\n                                                            children: [\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                                    className: \"mr-1 text-chip-text text-[0.7rem] text-clip font-medium\",\n                                                                    children: target\n                                                                }, void 0, false, {\n                                                                    fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/SettingsPanel.js\",\n                                                                    lineNumber: 131,\n                                                                    columnNumber: 14\n                                                                }, undefined),\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                                                    onClick: ()=>dispatch((0,_context_actions__WEBPACK_IMPORTED_MODULE_2__.removeTarget)(index)),\n                                                                    className: \"cursor-pointer h-3 w-3 text-gray-600\"\n                                                                }, void 0, false, {\n                                                                    fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/SettingsPanel.js\",\n                                                                    lineNumber: 134,\n                                                                    columnNumber: 14\n                                                                }, undefined)\n                                                            ]\n                                                        }, index, true, {\n                                                            fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/SettingsPanel.js\",\n                                                            lineNumber: 127,\n                                                            columnNumber: 13\n                                                        }, undefined))\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/SettingsPanel.js\",\n                                                    lineNumber: 121,\n                                                    columnNumber: 11\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                                className: \"text-white text-sm ml-4\",\n                                                children: [\n                                                    \"Dummy content for \",\n                                                    setting.name\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/SettingsPanel.js\",\n                                                lineNumber: 144,\n                                                columnNumber: 11\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/SettingsPanel.js\",\n                                            lineNumber: 143,\n                                            columnNumber: 10\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/SettingsPanel.js\",\n                                        lineNumber: 96,\n                                        columnNumber: 8\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/SettingsPanel.js\",\n                                lineNumber: 79,\n                                columnNumber: 7\n                            }, undefined)\n                        ]\n                    }, index, true, {\n                        fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/SettingsPanel.js\",\n                        lineNumber: 77,\n                        columnNumber: 6\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/SettingsPanel.js\",\n                lineNumber: 73,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/andrewnwachuku/content-editor/src/components/Sidebar/SettingsPanel.js\",\n        lineNumber: 50,\n        columnNumber: 3\n    }, undefined);\n};\n_s(SettingsPanel, \"qeVE2oq6+t8Tw+Pxr9/HpLgjh68=\", false, function() {\n    return [\n        _context_StateProvider__WEBPACK_IMPORTED_MODULE_1__.useStateValue\n    ];\n});\n_c = SettingsPanel;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SettingsPanel);\nvar _c;\n$RefreshReg$(_c, \"SettingsPanel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2NvbXBvbmVudHMvU2lkZWJhci9TZXR0aW5nc1BhbmVsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRXVDO0FBQ2dDO0FBQ2Y7QUFXN0I7QUFFM0IsTUFBTWEsZ0JBQWdCOztJQUNyQixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR1oscUVBQWFBO0lBRXZDLE1BQU1hLFdBQVc7UUFDaEI7WUFDQ0MsTUFBTTtZQUNOQyxRQUFRSixNQUFNSztZQUNkQyxXQUFXLElBQU1MLFNBQVNSLHFFQUFtQkE7UUFDOUM7UUFDQTtZQUNDVSxNQUFNO1lBQ05DLFFBQVFKLE1BQU1PO1lBQ2RELFdBQVcsSUFBTUwsU0FBU1AscUVBQW1CQTtRQUM5QztRQUNBO1lBQ0NTLE1BQU07WUFDTkMsUUFBUUosTUFBTVE7WUFDZEYsV0FBVyxJQUFNTCxTQUFTTix3RUFBc0JBO1FBQ2pEO1FBQ0E7WUFDQ1EsTUFBTTtZQUNOQyxRQUFRSixNQUFNUztZQUNkSCxXQUFXLElBQU1MLFNBQVNMLHlFQUF1QkE7UUFDbEQ7UUFDQTtZQUNDTyxNQUFNO1lBQ05DLFFBQVFKLE1BQU1VO1lBQ2RKLFdBQVcsSUFBTUwsU0FBU0osbUVBQWlCQTtRQUM1QztLQUNBO0lBRUQscUJBQ0MsOERBQUNjO1FBQ0FDLFdBQVcsaURBRVYsT0FEQVosTUFBTWEsaUJBQWlCLGdDQUFnQyxXQUN2RDs7MEJBR0QsOERBQUNGO2dCQUNBQyxXQUFXLGlGQUVWLE9BREEsQ0FBQ1osTUFBTWEsa0JBQWtCOztrQ0FHMUIsOERBQUNDO3dCQUFHRixXQUFVO2tDQUFtRDs7Ozs7O2tDQUdqRSw4REFBQ0Q7d0JBQ0FJLFNBQVMsSUFBTWQsU0FBU0gsK0RBQWFBO3dCQUNyQ2MsV0FBVTtrQ0FFViw0RUFBQ3pCLGlFQUFTQTs0QkFBQ3lCLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUt2Qiw4REFBQ0Q7Z0JBQ0FDLFdBQVcsR0FBd0MsT0FBckMsQ0FBQ1osTUFBTWEsa0JBQWtCLGFBQVk7MEJBRWxEWCxTQUFTYyxJQUFJLENBQUNDLFNBQVNDLHNCQUN2Qiw4REFBQ1A7OzBDQUNBLDhEQUFDQTtnQ0FBSUMsV0FBVTs7Ozs7OzBDQUNmLDhEQUFDRDs7a0RBQ0EsOERBQUNBO3dDQUNBSSxTQUFTLElBQU1FLFFBQVFYLFVBQVUsQ0FBQ1csUUFBUWI7d0NBQzFDUSxXQUFVOzswREFFViw4REFBQ087Z0RBQUVQLFdBQVU7MERBQ1hLLFFBQVFkOzs7Ozs7MERBRVYsOERBQUNRO2dEQUFJQyxXQUFZOzBEQUNoQiw0RUFBQ3hCLGlFQUFlQTtvREFDZndCLFdBQVcsd0JBRVYsT0FEQUssUUFBUWIsVUFBVSxlQUNsQjs7Ozs7Ozs7Ozs7Ozs7Ozs7a0RBS0osOERBQUNPO3dDQUFJQyxXQUFVO2tEQUNiSyxRQUFRZCxTQUFTLG1DQUNqQjs7OERBQ0MsOERBQUNpQjtvREFBS1IsV0FBVTs7c0VBQ2YsOERBQUNTOzREQUNBQyxNQUFLOzREQUNMQyxPQUFPdkIsTUFBTXdCOzREQUNiQyxVQUFVLENBQUNDO2dFQUNWekIsU0FBU1gsZ0VBQWNBLENBQUNvQyxFQUFFQyxPQUFPSjs0REFDbEM7NERBQ0FYLFdBQVU7Ozs7OztzRUFFWCw4REFBQ2dCOzREQUNBYixTQUFTLElBQU1kLFNBQVNWLDJEQUFTQTs0REFDakNzQyxVQUFVN0IsTUFBTXdCLFlBQVlNLE9BQU9DLFdBQVc7NERBQzlDbkIsV0FBVyxpREFJVixPQUhBWixNQUFNd0IsWUFBWU0sT0FBT0MsU0FBUyxJQUMvQixrQkFDQTtzRUFFSjs7Ozs7Ozs7Ozs7OzhEQUtGLDhEQUFDcEI7b0RBQ0FDLFdBQVcsK0NBRVYsT0FEQVosTUFBTWdDLFFBQVFELFNBQVMsS0FBSzs4REFHNUIvQixNQUFNZ0MsUUFBUWhCLElBQUksQ0FBQ1csUUFBUVQsc0JBQzNCLDhEQUFDUDs0REFFQUMsV0FBVTs7OEVBRVYsOERBQUNPO29FQUFFUCxXQUFVOzhFQUNYZTs7Ozs7OzhFQUVGLDhEQUFDeEMsaUVBQVNBO29FQUNUNEIsU0FBUyxJQUFNZCxTQUFTVCw4REFBWUEsQ0FBQzBCO29FQUNyQ04sV0FBVTs7Ozs7OzsyREFSTk07Ozs7Ozs7Ozs7O3lFQWVULDhEQUFDUDtzREFDQSw0RUFBQ0c7Z0RBQUdGLFdBQVU7O29EQUEwQjtvREFDcEJLLFFBQVFkOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUJBcEV2QmU7Ozs7Ozs7Ozs7Ozs7Ozs7QUErRWY7R0ExSU1uQjs7UUFDcUJWLGlFQUFhQTs7O0tBRGxDVTtBQTRJTiwrREFBZUEsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9TaWRlYmFyL1NldHRpbmdzUGFuZWwuanM/YjVkMSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCB7IFhNYXJrSWNvbiwgQ2hldnJvbkRvd25JY29uIH0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3QvMjQvc29saWRcIjtcbmltcG9ydCB7IHVzZVN0YXRlVmFsdWUgfSBmcm9tIFwiQC9jb250ZXh0L1N0YXRlUHJvdmlkZXJcIjtcbmltcG9ydCB7XG5cdHNldFRhcmdldElucHV0LFxuXHRhZGRUYXJnZXQsXG5cdHJlbW92ZVRhcmdldCxcblx0c2V0Q29udGVudFRoZW1lT3Blbixcblx0c2V0VG9uZUR1cmF0aW9uT3Blbixcblx0c2V0VGFyZ2V0QXVkaWVuY2VzT3Blbixcblx0c2V0RGVzY3JpcHRpdmVXb3Jkc09wZW4sXG5cdHNldEZpbmVUdW5pbmdPcGVuLFxuXHRjbG9zZVNldHRpbmdzLFxufSBmcm9tIFwiQC9jb250ZXh0L2FjdGlvbnNcIjtcblxuY29uc3QgU2V0dGluZ3NQYW5lbCA9ICgpID0+IHtcblx0Y29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VTdGF0ZVZhbHVlKCk7XG5cblx0Y29uc3Qgc2V0dGluZ3MgPSBbXG5cdFx0e1xuXHRcdFx0bmFtZTogXCJDb250ZW50IFRoZW1lXCIsXG5cdFx0XHRpc09wZW46IHN0YXRlLmlzQ29udGVudFRoZW1lT3Blbixcblx0XHRcdHNldElzT3BlbjogKCkgPT4gZGlzcGF0Y2goc2V0Q29udGVudFRoZW1lT3BlbigpKSxcblx0XHR9LFxuXHRcdHtcblx0XHRcdG5hbWU6IFwiVG9uZSBhbmQgRHVyYXRpb25cIixcblx0XHRcdGlzT3Blbjogc3RhdGUuaXNUb25lRHVyYXRpb25PcGVuLFxuXHRcdFx0c2V0SXNPcGVuOiAoKSA9PiBkaXNwYXRjaChzZXRUb25lRHVyYXRpb25PcGVuKCkpLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0bmFtZTogXCJUYXJnZXQgQXVkaWVuY2VzXCIsXG5cdFx0XHRpc09wZW46IHN0YXRlLmlzVGFyZ2V0QXVkaWVuY2VzT3Blbixcblx0XHRcdHNldElzT3BlbjogKCkgPT4gZGlzcGF0Y2goc2V0VGFyZ2V0QXVkaWVuY2VzT3BlbigpKSxcblx0XHR9LFxuXHRcdHtcblx0XHRcdG5hbWU6IFwiRGVzY3JpcHRpdmUgS2V5d29yZHNcIixcblx0XHRcdGlzT3Blbjogc3RhdGUuaXNEZXNjcmlwdGl2ZVdvcmRzT3Blbixcblx0XHRcdHNldElzT3BlbjogKCkgPT4gZGlzcGF0Y2goc2V0RGVzY3JpcHRpdmVXb3Jkc09wZW4oKSksXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRuYW1lOiBcIkZpbmUtVHVuaW5nXCIsXG5cdFx0XHRpc09wZW46IHN0YXRlLmlzRmluZVR1bmluZ09wZW4sXG5cdFx0XHRzZXRJc09wZW46ICgpID0+IGRpc3BhdGNoKHNldEZpbmVUdW5pbmdPcGVuKCkpLFxuXHRcdH0sXG5cdF07XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2XG5cdFx0XHRjbGFzc05hbWU9e2BoaWRkZW4gbWQ6YmxvY2sgZmxleC1jb2wgei0xMCBvdmVyZmxvdy1oaWRkZW4gJHtcblx0XHRcdFx0c3RhdGUuaXNTZXR0aW5nc09wZW4gPyBcInctWzM1JV0gbXItWzI0cHhdIG1sLVsxNnB4XVwiIDogXCJ3LVswcHhdXCJcblx0XHRcdH0gZHVyYXRpb24tMzAwIGB9XG5cdFx0PlxuXHRcdFx0ey8qIFNFVFRJTkdTIEhFQURFUiAqL31cblx0XHRcdDxkaXZcblx0XHRcdFx0Y2xhc3NOYW1lPXtgZmxleCBmbGV4LXJvdyBtdC0zIG1yLTMgbWItMiB3LWZ1bGwganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBkdXJhdGlvbi0zMDAgJHtcblx0XHRcdFx0XHQhc3RhdGUuaXNTZXR0aW5nc09wZW4gJiYgXCJzY2FsZS0wXCJcblx0XHRcdFx0fWB9XG5cdFx0XHQ+XG5cdFx0XHRcdDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWxpZ2h0LXB1cnBsZSB0ZXh0LWxnIHhsOnRleHQteGwgc2VsZWN0LW5vbmVcIj5cblx0XHRcdFx0XHRTY3JpcHQgR2VuZXJhdGlvbiBTZXR0aW5nc1xuXHRcdFx0XHQ8L2gxPlxuXHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0b25DbGljaz17KCkgPT4gZGlzcGF0Y2goY2xvc2VTZXR0aW5ncygpKX1cblx0XHRcdFx0XHRjbGFzc05hbWU9XCJmbGV4IGFsaWduLW1pZGRsZSBjdXJzb3ItcG9pbnRlclwiXG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8WE1hcmtJY29uIGNsYXNzTmFtZT1cImgtNSB3LTUgYmxhY2tcIiAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXG5cdFx0XHR7LyogTUVOVSBJVEVNUyAqL31cblx0XHRcdDxkaXZcblx0XHRcdFx0Y2xhc3NOYW1lPXtgJHshc3RhdGUuaXNTZXR0aW5nc09wZW4gJiYgXCJvcGFjaXR5LTBcIn0gdHJhbnNpdGlvbi1vcGFjaXR5YH1cblx0XHRcdD5cblx0XHRcdFx0e3NldHRpbmdzLm1hcCgoc2V0dGluZywgaW5kZXgpID0+IChcblx0XHRcdFx0XHQ8ZGl2IGtleT17aW5kZXh9PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJoLVswLjFweF0gYmctZGl2aWRlciBtdC00IG1iLTJcIiAvPlxuXHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHNldHRpbmcuc2V0SXNPcGVuKCFzZXR0aW5nLmlzT3Blbil9XG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgZmxleCBqdXN0aWZ5LWJldHdlZW4gbWItMlwiXG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ0ZXh0LXN0b25lLTQwMCB0ZXh0LVswLjhyZW1dIGZvbnQtYm9sZCBmb250LW9wZW4tc2FucyBzZWxlY3Qtbm9uZSBtbC1bMC40cmVtXVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0e3NldHRpbmcubmFtZX1cblx0XHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2BjdXJzb3ItcG9pbnRlcmB9PlxuXHRcdFx0XHRcdFx0XHRcdFx0PENoZXZyb25Eb3duSWNvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2BoLTQgdy00IHRleHQtZGl2aWRlciAke1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNldHRpbmcuaXNPcGVuICYmIFwiLXJvdGF0ZS0xODBcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9IGR1cmF0aW9uLTMwMGB9XG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93LWhpZGRlblwiPlxuXHRcdFx0XHRcdFx0XHRcdHtzZXR0aW5nLm5hbWUgPT09IFwiVGFyZ2V0IEF1ZGllbmNlc1wiID8gKFxuXHRcdFx0XHRcdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGZvcm0gY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gdy0xMS8xMlwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3N0YXRlLnRhcmdldElucHV0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRpc3BhdGNoKHNldFRhcmdldElucHV0KGUudGFyZ2V0LnZhbHVlKSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwicm91bmRlZC1zbSBoLTggdy01LzYgZm9jdXM6b3V0bGluZS1ub25lIHAtMVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaChhZGRUYXJnZXQoKSl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkaXNhYmxlZD17c3RhdGUudGFyZ2V0SW5wdXQudHJpbSgpLmxlbmd0aCA9PT0gMH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGJnLWdyYXktMzAwIHJvdW5kZWQtc20gbWwtMSBoLTggdy0xLzYgdGV4dC14cyAke1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdGF0ZS50YXJnZXRJbnB1dC50cmltKCkubGVuZ3RoIDwgMVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdD8gXCJ0ZXh0LWdyYXktNDAwXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6IFwidGV4dC1ncmF5LTcwMFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9YH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRBZGRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9mb3JtPlxuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2BmbGV4IGZsZXgtd3JhcCBtdC0zIGJnLVsjMGYxMTIwXSByb3VuZGVkLW1kICR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdGF0ZS50YXJnZXRzLmxlbmd0aCA+IDAgJiYgXCJwLTJcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1gfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e3N0YXRlLnRhcmdldHMubWFwKCh0YXJnZXQsIGluZGV4KSA9PiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGtleT17aW5kZXh9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIG1heC13LWZpdCBpdGVtcy1jZW50ZXIgbXItMiBtYi0yIHB5LTAuNSBweC1bMC40cmVtXSBiZy1jaGlwLWJnIHJvdW5kZWQteGxcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJtci0xIHRleHQtY2hpcC10ZXh0IHRleHQtWzAuN3JlbV0gdGV4dC1jbGlwIGZvbnQtbWVkaXVtXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e3RhcmdldH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8WE1hcmtJY29uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gZGlzcGF0Y2gocmVtb3ZlVGFyZ2V0KGluZGV4KSl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgaC0zIHctMyB0ZXh0LWdyYXktNjAwXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCkpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvPlxuXHRcdFx0XHRcdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDEgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LXNtIG1sLTRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHREdW1teSBjb250ZW50IGZvciB7c2V0dGluZy5uYW1lfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2gxPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0KSl9XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNldHRpbmdzUGFuZWw7XG4iXSwibmFtZXMiOlsibW90aW9uIiwiWE1hcmtJY29uIiwiQ2hldnJvbkRvd25JY29uIiwidXNlU3RhdGVWYWx1ZSIsInNldFRhcmdldElucHV0IiwiYWRkVGFyZ2V0IiwicmVtb3ZlVGFyZ2V0Iiwic2V0Q29udGVudFRoZW1lT3BlbiIsInNldFRvbmVEdXJhdGlvbk9wZW4iLCJzZXRUYXJnZXRBdWRpZW5jZXNPcGVuIiwic2V0RGVzY3JpcHRpdmVXb3Jkc09wZW4iLCJzZXRGaW5lVHVuaW5nT3BlbiIsImNsb3NlU2V0dGluZ3MiLCJTZXR0aW5nc1BhbmVsIiwic3RhdGUiLCJkaXNwYXRjaCIsInNldHRpbmdzIiwibmFtZSIsImlzT3BlbiIsImlzQ29udGVudFRoZW1lT3BlbiIsInNldElzT3BlbiIsImlzVG9uZUR1cmF0aW9uT3BlbiIsImlzVGFyZ2V0QXVkaWVuY2VzT3BlbiIsImlzRGVzY3JpcHRpdmVXb3Jkc09wZW4iLCJpc0ZpbmVUdW5pbmdPcGVuIiwiZGl2IiwiY2xhc3NOYW1lIiwiaXNTZXR0aW5nc09wZW4iLCJoMSIsIm9uQ2xpY2siLCJtYXAiLCJzZXR0aW5nIiwiaW5kZXgiLCJwIiwiZm9ybSIsImlucHV0IiwidHlwZSIsInZhbHVlIiwidGFyZ2V0SW5wdXQiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJidXR0b24iLCJkaXNhYmxlZCIsInRyaW0iLCJsZW5ndGgiLCJ0YXJnZXRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./src/components/Sidebar/SettingsPanel.js\n"));

/***/ })

});