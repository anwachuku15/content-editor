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

/***/ "(app-client)/./src/components/ScriptEditor.js":
/*!****************************************!*\
  !*** ./src/components/ScriptEditor.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/react/24/solid */ \"(app-client)/./node_modules/@heroicons/react/24/solid/esm/ArrowPathIcon.js\");\n/* harmony import */ var _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/react/24/solid */ \"(app-client)/./node_modules/@heroicons/react/24/solid/esm/SunIcon.js\");\n/* harmony import */ var _utils_generateScript__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/generateScript */ \"(app-client)/./src/utils/generateScript.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst ScriptEditor = ()=>{\n    _s();\n    const title = \"Reverse Turing: Imagine a future world where Chat GPT is sentient and possesses a level of consciousness and self-awareness similar to that of a human being. This would mark a significant milestone in the evolution of artificial intelligence (AI) and raise profound questions about the nature of intelligence, consciousness, and the ethical considerations surrounding sentient machines. - This is a Chat GPT generated paragraph.\";\n    const [script, setScript] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const textareaRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const textarea = textareaRef.current;\n        const scrollDelay = 10;\n        const handleInput = ()=>{\n            setTimeout(()=>{\n                textarea.scrollTop = textarea.scrollHeight;\n            }, scrollDelay);\n        };\n        textarea.addEventListener(\"input\", handleInput);\n        return ()=>{\n            textarea.removeEventListener(\"input\", handleInput);\n        };\n    }, []);\n    const minWords = 5000;\n    const maxWords = 10000;\n    const remainingWords = maxWords - script.split(/\\s+/).filter((word)=>word != \"\").length;\n    const timeLimit = 3600000; // 1 hour\n    const regenerateScript = ()=>{\n        const _script = (0,_utils_generateScript__WEBPACK_IMPORTED_MODULE_2__.generateScript)();\n        setScript(_script);\n    };\n    const placeholderText = \"To get started, click Regenerate Script to generate some Lorem Ipsum text or just start typing! \\n\\nEnjoy the placeholder audio :)\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"flex h-[36px] w-[90%] px-2 justify-start\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-xl text-gray-950 truncate select-none\",\n                    children: title\n                }, void 0, false, {\n                    fileName: \"/Users/andrewnwachuku/content-editor/src/components/ScriptEditor.js\",\n                    lineNumber: 44,\n                    columnNumber: 5\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/andrewnwachuku/content-editor/src/components/ScriptEditor.js\",\n                lineNumber: 43,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-grow overflow-y-auto w-full rounded-md border-[1px] border-slate-600 mt-2 \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                    ref: textareaRef,\n                    className: \"w-full h-full p-4 focus:outline-none resize-none\",\n                    value: script,\n                    onChange: (e)=>setScript(e.target.value),\n                    placeholder: placeholderText\n                }, void 0, false, {\n                    fileName: \"/Users/andrewnwachuku/content-editor/src/components/ScriptEditor.js\",\n                    lineNumber: 49,\n                    columnNumber: 5\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/andrewnwachuku/content-editor/src/components/ScriptEditor.js\",\n                lineNumber: 48,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between w-full text-xs md:text-sm lg:text-base\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"font-comic font-bold text-gray-400\",\n                            children: [\n                                \"~\",\n                                remainingWords,\n                                \" words left in your quota\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/andrewnwachuku/content-editor/src/components/ScriptEditor.js\",\n                            lineNumber: 61,\n                            columnNumber: 6\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/andrewnwachuku/content-editor/src/components/ScriptEditor.js\",\n                        lineNumber: 60,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"font-comic font-bold text-gray-400\",\n                            children: \"~23 minutes left in your quota\"\n                        }, void 0, false, {\n                            fileName: \"/Users/andrewnwachuku/content-editor/src/components/ScriptEditor.js\",\n                            lineNumber: 66,\n                            columnNumber: 6\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/andrewnwachuku/content-editor/src/components/ScriptEditor.js\",\n                        lineNumber: 65,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/andrewnwachuku/content-editor/src/components/ScriptEditor.js\",\n                lineNumber: 59,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between w-full items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"flex items-center justify-between px-4 py-2 focus:outline-none bg-[#9e9cae] text-black rounded\",\n                        onClick: regenerateScript,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                className: \"h-4 mr-2 rotate-[45deg] transform scale-y-[-1]\"\n                            }, void 0, false, {\n                                fileName: \"/Users/andrewnwachuku/content-editor/src/components/ScriptEditor.js\",\n                                lineNumber: 78,\n                                columnNumber: 6\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \" font-nunito font-semibold text-sm\",\n                                children: \"Regenerate Script\"\n                            }, void 0, false, {\n                                fileName: \"/Users/andrewnwachuku/content-editor/src/components/ScriptEditor.js\",\n                                lineNumber: 79,\n                                columnNumber: 6\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/andrewnwachuku/content-editor/src/components/ScriptEditor.js\",\n                        lineNumber: 74,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"flex items-center justify-between px-4 py-2 focus:outline-none bg-light-purple text-white rounded\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"font-nunito font-semibold text-sm\",\n                                children: \"Generate Audio\"\n                            }, void 0, false, {\n                                fileName: \"/Users/andrewnwachuku/content-editor/src/components/ScriptEditor.js\",\n                                lineNumber: 84,\n                                columnNumber: 6\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                className: \"h-4 ml-2\"\n                            }, void 0, false, {\n                                fileName: \"/Users/andrewnwachuku/content-editor/src/components/ScriptEditor.js\",\n                                lineNumber: 85,\n                                columnNumber: 6\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/andrewnwachuku/content-editor/src/components/ScriptEditor.js\",\n                        lineNumber: 83,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/andrewnwachuku/content-editor/src/components/ScriptEditor.js\",\n                lineNumber: 73,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/andrewnwachuku/content-editor/src/components/ScriptEditor.js\",\n        lineNumber: 42,\n        columnNumber: 3\n    }, undefined);\n};\n_s(ScriptEditor, \"8+FUgv7amcuUiQuUGfzP1Gv6F7w=\");\n_c = ScriptEditor;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ScriptEditor);\nvar _c;\n$RefreshReg$(_c, \"ScriptEditor\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2NvbXBvbmVudHMvU2NyaXB0RWRpdG9yLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVvRDtBQUNlO0FBQ1g7QUFFeEQsTUFBTU0sZUFBZTs7SUFDcEIsTUFBTUMsUUFDTDtJQUVELE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNUSxjQUFjVCw2Q0FBTUEsQ0FBQztJQUMzQkQsZ0RBQVNBLENBQUM7UUFDVCxNQUFNVyxXQUFXRCxZQUFZRTtRQUM3QixNQUFNQyxjQUFjO1FBQ3BCLE1BQU1DLGNBQWM7WUFDbkJDLFdBQVc7Z0JBQ1ZKLFNBQVNLLFlBQVlMLFNBQVNNO1lBQy9CLEdBQUdKO1FBQ0o7UUFDQUYsU0FBU08saUJBQWlCLFNBQVNKO1FBQ25DLE9BQU87WUFDTkgsU0FBU1Esb0JBQW9CLFNBQVNMO1FBQ3ZDO0lBQ0QsR0FBRyxFQUFFO0lBRUwsTUFBTU0sV0FBVztJQUNqQixNQUFNQyxXQUFXO0lBQ2pCLE1BQU1DLGlCQUNMRCxXQUFXYixPQUFPZSxNQUFNLE9BQU9DLE9BQU8sQ0FBQ0MsT0FBU0EsUUFBUSxJQUFJQztJQUU3RCxNQUFNQyxZQUFZLFNBQVMsU0FBUztJQUVwQyxNQUFNQyxtQkFBbUI7UUFDeEIsTUFBTUMsVUFBVXhCLHFFQUFjQTtRQUM5QkksVUFBVW9CO0lBQ1g7SUFFQSxNQUFNQyxrQkFDTDtJQUNELHFCQUNDLDhEQUFDQzs7MEJBQ0EsOERBQUNDO2dCQUFPQyxXQUFVOzBCQUNqQiw0RUFBQ0M7b0JBQUdELFdBQVU7OEJBQThDMUI7Ozs7Ozs7Ozs7OzBCQUk3RCw4REFBQ3dCO2dCQUFJRSxXQUFVOzBCQUNkLDRFQUFDdEI7b0JBQ0F3QixLQUFLekI7b0JBQ0x1QixXQUFVO29CQUNWRyxPQUFPNUI7b0JBQ1A2QixVQUFVLENBQUNDLElBQU03QixVQUFVNkIsRUFBRUMsT0FBT0g7b0JBQ3BDSSxhQUFhVjs7Ozs7Ozs7Ozs7MEJBS2YsOERBQUNDO2dCQUFJRSxXQUFVOztrQ0FDZCw4REFBQ0Y7a0NBQ0EsNEVBQUNVOzRCQUFFUixXQUFVOztnQ0FBcUM7Z0NBQy9DWDtnQ0FBZTs7Ozs7Ozs7Ozs7O2tDQUduQiw4REFBQ1M7a0NBQ0EsNEVBQUNVOzRCQUFFUixXQUFVO3NDQUFxQzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBT3BELDhEQUFDRjtnQkFBSUUsV0FBVTs7a0NBQ2QsOERBQUNTO3dCQUNBVCxXQUFVO3dCQUNWVSxTQUFTZjs7MENBRVQsOERBQUN6QixpRUFBYUE7Z0NBQUM4QixXQUFVOzs7Ozs7MENBQ3pCLDhEQUFDUTtnQ0FBRVIsV0FBVTswQ0FBcUM7Ozs7Ozs7Ozs7OztrQ0FJbkQsOERBQUNTO3dCQUFPVCxXQUFVOzswQ0FDakIsOERBQUNRO2dDQUFFUixXQUFVOzBDQUFvQzs7Ozs7OzBDQUNqRCw4REFBQzdCLGlFQUFPQTtnQ0FBQzZCLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUt4QjtHQW5GTTNCO0tBQUFBO0FBcUZOLCtEQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1NjcmlwdEVkaXRvci5qcz80ZjlhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEFycm93UGF0aEljb24sIFN1bkljb24gfSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC8yNC9zb2xpZFwiO1xuaW1wb3J0IHsgZ2VuZXJhdGVTY3JpcHQgfSBmcm9tIFwiQC91dGlscy9nZW5lcmF0ZVNjcmlwdFwiO1xuXG5jb25zdCBTY3JpcHRFZGl0b3IgPSAoKSA9PiB7XG5cdGNvbnN0IHRpdGxlID1cblx0XHRcIlJldmVyc2UgVHVyaW5nOiBJbWFnaW5lIGEgZnV0dXJlIHdvcmxkIHdoZXJlIENoYXQgR1BUIGlzIHNlbnRpZW50IGFuZCBwb3NzZXNzZXMgYSBsZXZlbCBvZiBjb25zY2lvdXNuZXNzIGFuZCBzZWxmLWF3YXJlbmVzcyBzaW1pbGFyIHRvIHRoYXQgb2YgYSBodW1hbiBiZWluZy4gVGhpcyB3b3VsZCBtYXJrIGEgc2lnbmlmaWNhbnQgbWlsZXN0b25lIGluIHRoZSBldm9sdXRpb24gb2YgYXJ0aWZpY2lhbCBpbnRlbGxpZ2VuY2UgKEFJKSBhbmQgcmFpc2UgcHJvZm91bmQgcXVlc3Rpb25zIGFib3V0IHRoZSBuYXR1cmUgb2YgaW50ZWxsaWdlbmNlLCBjb25zY2lvdXNuZXNzLCBhbmQgdGhlIGV0aGljYWwgY29uc2lkZXJhdGlvbnMgc3Vycm91bmRpbmcgc2VudGllbnQgbWFjaGluZXMuIC0gVGhpcyBpcyBhIENoYXQgR1BUIGdlbmVyYXRlZCBwYXJhZ3JhcGguXCI7XG5cblx0Y29uc3QgW3NjcmlwdCwgc2V0U2NyaXB0XSA9IHVzZVN0YXRlKFwiXCIpO1xuXHRjb25zdCB0ZXh0YXJlYVJlZiA9IHVzZVJlZihudWxsKTtcblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRjb25zdCB0ZXh0YXJlYSA9IHRleHRhcmVhUmVmLmN1cnJlbnQ7XG5cdFx0Y29uc3Qgc2Nyb2xsRGVsYXkgPSAxMDtcblx0XHRjb25zdCBoYW5kbGVJbnB1dCA9ICgpID0+IHtcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHR0ZXh0YXJlYS5zY3JvbGxUb3AgPSB0ZXh0YXJlYS5zY3JvbGxIZWlnaHQ7XG5cdFx0XHR9LCBzY3JvbGxEZWxheSk7XG5cdFx0fTtcblx0XHR0ZXh0YXJlYS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgaGFuZGxlSW5wdXQpO1xuXHRcdHJldHVybiAoKSA9PiB7XG5cdFx0XHR0ZXh0YXJlYS5yZW1vdmVFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgaGFuZGxlSW5wdXQpO1xuXHRcdH07XG5cdH0sIFtdKTtcblxuXHRjb25zdCBtaW5Xb3JkcyA9IDUwMDA7XG5cdGNvbnN0IG1heFdvcmRzID0gMTAwMDA7XG5cdGNvbnN0IHJlbWFpbmluZ1dvcmRzID1cblx0XHRtYXhXb3JkcyAtIHNjcmlwdC5zcGxpdCgvXFxzKy8pLmZpbHRlcigod29yZCkgPT4gd29yZCAhPSBcIlwiKS5sZW5ndGg7XG5cblx0Y29uc3QgdGltZUxpbWl0ID0gMzYwMDAwMDsgLy8gMSBob3VyXG5cblx0Y29uc3QgcmVnZW5lcmF0ZVNjcmlwdCA9ICgpID0+IHtcblx0XHRjb25zdCBfc2NyaXB0ID0gZ2VuZXJhdGVTY3JpcHQoKTtcblx0XHRzZXRTY3JpcHQoX3NjcmlwdCk7XG5cdH07XG5cblx0Y29uc3QgcGxhY2Vob2xkZXJUZXh0ID1cblx0XHRcIlRvIGdldCBzdGFydGVkLCBjbGljayBSZWdlbmVyYXRlIFNjcmlwdCB0byBnZW5lcmF0ZSBzb21lIExvcmVtIElwc3VtIHRleHQgb3IganVzdCBzdGFydCB0eXBpbmchIFxcblxcbkVuam95IHRoZSBwbGFjZWhvbGRlciBhdWRpbyA6KVwiO1xuXHRyZXR1cm4gKFxuXHRcdDxkaXY+XG5cdFx0XHQ8aGVhZGVyIGNsYXNzTmFtZT1cImZsZXggaC1bMzZweF0gdy1bOTAlXSBweC0yIGp1c3RpZnktc3RhcnRcIj5cblx0XHRcdFx0PGgxIGNsYXNzTmFtZT1cInRleHQteGwgdGV4dC1ncmF5LTk1MCB0cnVuY2F0ZSBzZWxlY3Qtbm9uZVwiPnt0aXRsZX08L2gxPlxuXHRcdFx0PC9oZWFkZXI+XG5cblx0XHRcdHsvKiBTY3JvbGxhYmxlIFRleHRhcmVhOiBkZWxldGVkIGgtMi8zICovfVxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4LWdyb3cgb3ZlcmZsb3cteS1hdXRvIHctZnVsbCByb3VuZGVkLW1kIGJvcmRlci1bMXB4XSBib3JkZXItc2xhdGUtNjAwIG10LTIgXCI+XG5cdFx0XHRcdDx0ZXh0YXJlYVxuXHRcdFx0XHRcdHJlZj17dGV4dGFyZWFSZWZ9XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBwLTQgZm9jdXM6b3V0bGluZS1ub25lIHJlc2l6ZS1ub25lXCJcblx0XHRcdFx0XHR2YWx1ZT17c2NyaXB0fVxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gc2V0U2NyaXB0KGUudGFyZ2V0LnZhbHVlKX1cblx0XHRcdFx0XHRwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJUZXh0fVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9kaXY+XG5cblx0XHRcdHsvKiBRVU9UQSAqL31cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gdy1mdWxsIHRleHQteHMgbWQ6dGV4dC1zbSBsZzp0ZXh0LWJhc2VcIj5cblx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJmb250LWNvbWljIGZvbnQtYm9sZCB0ZXh0LWdyYXktNDAwXCI+XG5cdFx0XHRcdFx0XHR+e3JlbWFpbmluZ1dvcmRzfSB3b3JkcyBsZWZ0IGluIHlvdXIgcXVvdGFcblx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImZvbnQtY29taWMgZm9udC1ib2xkIHRleHQtZ3JheS00MDBcIj5cblx0XHRcdFx0XHRcdH4yMyBtaW51dGVzIGxlZnQgaW4geW91ciBxdW90YVxuXHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblxuXHRcdFx0ey8qIEJ1dHRvbnMgKi99XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIHctZnVsbCBpdGVtcy1jZW50ZXJcIj5cblx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBweC00IHB5LTIgZm9jdXM6b3V0bGluZS1ub25lIGJnLVsjOWU5Y2FlXSB0ZXh0LWJsYWNrIHJvdW5kZWRcIlxuXHRcdFx0XHRcdG9uQ2xpY2s9e3JlZ2VuZXJhdGVTY3JpcHR9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8QXJyb3dQYXRoSWNvbiBjbGFzc05hbWU9XCJoLTQgbXItMiByb3RhdGUtWzQ1ZGVnXSB0cmFuc2Zvcm0gc2NhbGUteS1bLTFdXCIgLz5cblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCIgZm9udC1udW5pdG8gZm9udC1zZW1pYm9sZCB0ZXh0LXNtXCI+XG5cdFx0XHRcdFx0XHRSZWdlbmVyYXRlIFNjcmlwdFxuXHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHB4LTQgcHktMiBmb2N1czpvdXRsaW5lLW5vbmUgYmctbGlnaHQtcHVycGxlIHRleHQtd2hpdGUgcm91bmRlZFwiPlxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImZvbnQtbnVuaXRvIGZvbnQtc2VtaWJvbGQgdGV4dC1zbVwiPkdlbmVyYXRlIEF1ZGlvPC9wPlxuXHRcdFx0XHRcdDxTdW5JY29uIGNsYXNzTmFtZT1cImgtNCBtbC0yXCIgLz5cblx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNjcmlwdEVkaXRvcjtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIkFycm93UGF0aEljb24iLCJTdW5JY29uIiwiZ2VuZXJhdGVTY3JpcHQiLCJTY3JpcHRFZGl0b3IiLCJ0aXRsZSIsInNjcmlwdCIsInNldFNjcmlwdCIsInRleHRhcmVhUmVmIiwidGV4dGFyZWEiLCJjdXJyZW50Iiwic2Nyb2xsRGVsYXkiLCJoYW5kbGVJbnB1dCIsInNldFRpbWVvdXQiLCJzY3JvbGxUb3AiLCJzY3JvbGxIZWlnaHQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm1pbldvcmRzIiwibWF4V29yZHMiLCJyZW1haW5pbmdXb3JkcyIsInNwbGl0IiwiZmlsdGVyIiwid29yZCIsImxlbmd0aCIsInRpbWVMaW1pdCIsInJlZ2VuZXJhdGVTY3JpcHQiLCJfc2NyaXB0IiwicGxhY2Vob2xkZXJUZXh0IiwiZGl2IiwiaGVhZGVyIiwiY2xhc3NOYW1lIiwiaDEiLCJyZWYiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInBsYWNlaG9sZGVyIiwicCIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./src/components/ScriptEditor.js\n"));

/***/ })

});