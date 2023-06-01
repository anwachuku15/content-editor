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

/***/ "(app-client)/./src/components/Editor.js":
/*!**********************************!*\
  !*** ./src/components/Editor.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _constants_textarea_dummy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/constants/textarea-dummy */ \"(app-client)/./src/constants/textarea-dummy.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @heroicons/react/24/solid */ \"(app-client)/./node_modules/@heroicons/react/24/solid/esm/ArrowPathIcon.js\");\n/* harmony import */ var _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @heroicons/react/24/solid */ \"(app-client)/./node_modules/@heroicons/react/24/solid/esm/SunIcon.js\");\n/* harmony import */ var _utils_generateScript__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/generateScript */ \"(app-client)/./src/utils/generateScript.js\");\n/* harmony import */ var _MediaPlayer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MediaPlayer */ \"(app-client)/./src/components/MediaPlayer.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Editor = ()=>{\n    _s();\n    const title = \"Reverse Turing: Imagine a future world where Chat GPT is sentient and possesses a level of consciousness and self-awareness similar to that of a human being. This would mark a significant milestone in the evolution of artificial intelligence (AI) and raise profound questions about the nature of intelligence, consciousness, and the ethical considerations surrounding sentient machines. - This is a Chat GPT generated paragraph.\";\n    const [script, setScript] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const textareaRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const textarea = textareaRef.current;\n        const scrollDelay = 10;\n        const handleInput = ()=>{\n            setTimeout(()=>{\n                textarea.scrollTop = textarea.scrollHeight;\n            }, scrollDelay);\n        };\n        textarea.addEventListener(\"input\", handleInput);\n        return ()=>{\n            textarea.removeEventListener(\"input\", handleInput);\n        };\n    }, []);\n    const minWords = 5000;\n    const maxWords = 10000;\n    const remainingWords = maxWords - script.split(/\\s+/).filter((word)=>word != \"\").length;\n    const timeLimit = 3600000; // 1 hour\n    const regenerateScript = ()=>{\n        const _script = (0,_utils_generateScript__WEBPACK_IMPORTED_MODULE_3__.generateScript)();\n        setScript(_script);\n    };\n    const placeholderText = \"To get started, click Regenerate Script to generate some Lorem Ipsum text or just start typing! \\n\\nEnjoy the placeholder audio :)\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col w-screen mb-12 md:mr-14 md:ml-0 mx-6 truncate  bg-white   rounded-md\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-full p-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                        className: \"flex h-[36px] w-[90%] px-2 justify-start\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-xl text-gray-950 truncate select-none\",\n                            children: title\n                        }, void 0, false, {\n                            fileName: \"/Users/andrewnwachuku/content-editor/src/components/Editor.js\",\n                            lineNumber: 48,\n                            columnNumber: 6\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/andrewnwachuku/content-editor/src/components/Editor.js\",\n                        lineNumber: 47,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex-grow overflow-y-auto w-full rounded-md border-[1px] border-slate-600 mt-2 \",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                            ref: textareaRef,\n                            className: \"w-full h-full p-4 focus:outline-none resize-none\",\n                            value: script,\n                            onChange: (e)=>setScript(e.target.value),\n                            placeholder: placeholderText\n                        }, void 0, false, {\n                            fileName: \"/Users/andrewnwachuku/content-editor/src/components/Editor.js\",\n                            lineNumber: 55,\n                            columnNumber: 6\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/andrewnwachuku/content-editor/src/components/Editor.js\",\n                        lineNumber: 54,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-between w-full text-xs md:text-sm lg:text-base\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"font-comic font-bold text-gray-400\",\n                                    children: [\n                                        \"~\",\n                                        remainingWords,\n                                        \" words left in your quota\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/andrewnwachuku/content-editor/src/components/Editor.js\",\n                                    lineNumber: 67,\n                                    columnNumber: 7\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/andrewnwachuku/content-editor/src/components/Editor.js\",\n                                lineNumber: 66,\n                                columnNumber: 6\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"font-comic font-bold text-gray-400\",\n                                    children: \"~23 minutes left in your quota\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/andrewnwachuku/content-editor/src/components/Editor.js\",\n                                    lineNumber: 72,\n                                    columnNumber: 7\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/andrewnwachuku/content-editor/src/components/Editor.js\",\n                                lineNumber: 71,\n                                columnNumber: 6\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/andrewnwachuku/content-editor/src/components/Editor.js\",\n                        lineNumber: 65,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-between w-full items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"flex items-center justify-between px-4 py-2 focus:outline-none bg-[#9e9cae] text-black rounded\",\n                                onClick: regenerateScript,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                        className: \"h-4 mr-2 rotate-[45deg] transform scale-y-[-1]\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/andrewnwachuku/content-editor/src/components/Editor.js\",\n                                        lineNumber: 84,\n                                        columnNumber: 7\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \" font-nunito font-semibold text-sm\",\n                                        children: \"Regenerate Script\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/andrewnwachuku/content-editor/src/components/Editor.js\",\n                                        lineNumber: 85,\n                                        columnNumber: 7\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/andrewnwachuku/content-editor/src/components/Editor.js\",\n                                lineNumber: 80,\n                                columnNumber: 6\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"flex items-center justify-between px-4 py-2 focus:outline-none bg-light-purple text-white rounded\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"font-nunito font-semibold text-sm\",\n                                        children: \"Generate Audio\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/andrewnwachuku/content-editor/src/components/Editor.js\",\n                                        lineNumber: 90,\n                                        columnNumber: 7\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                        className: \"h-4 ml-2\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/andrewnwachuku/content-editor/src/components/Editor.js\",\n                                        lineNumber: 91,\n                                        columnNumber: 7\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/andrewnwachuku/content-editor/src/components/Editor.js\",\n                                lineNumber: 89,\n                                columnNumber: 6\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/andrewnwachuku/content-editor/src/components/Editor.js\",\n                        lineNumber: 79,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/andrewnwachuku/content-editor/src/components/Editor.js\",\n                lineNumber: 46,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MediaPlayer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/andrewnwachuku/content-editor/src/components/Editor.js\",\n                lineNumber: 95,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/andrewnwachuku/content-editor/src/components/Editor.js\",\n        lineNumber: 45,\n        columnNumber: 3\n    }, undefined);\n};\n_s(Editor, \"8+FUgv7amcuUiQuUGfzP1Gv6F7w=\");\n_c = Editor;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Editor);\nvar _c;\n$RefreshReg$(_c, \"Editor\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2NvbXBvbmVudHMvRWRpdG9yLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRXVEO0FBQ0g7QUFDZTtBQUNYO0FBQ2hCO0FBRXhDLE1BQU1RLFNBQVM7O0lBQ2QsTUFBTUMsUUFDTDtJQUVELE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHUiwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNUyxjQUFjViw2Q0FBTUEsQ0FBQztJQUMzQkQsZ0RBQVNBLENBQUM7UUFDVCxNQUFNWSxXQUFXRCxZQUFZRTtRQUM3QixNQUFNQyxjQUFjO1FBQ3BCLE1BQU1DLGNBQWM7WUFDbkJDLFdBQVc7Z0JBQ1ZKLFNBQVNLLFlBQVlMLFNBQVNNO1lBQy9CLEdBQUdKO1FBQ0o7UUFDQUYsU0FBU08saUJBQWlCLFNBQVNKO1FBQ25DLE9BQU87WUFDTkgsU0FBU1Esb0JBQW9CLFNBQVNMO1FBQ3ZDO0lBQ0QsR0FBRyxFQUFFO0lBRUwsTUFBTU0sV0FBVztJQUNqQixNQUFNQyxXQUFXO0lBQ2pCLE1BQU1DLGlCQUNMRCxXQUFXYixPQUFPZSxNQUFNLE9BQU9DLE9BQU8sQ0FBQ0MsT0FBU0EsUUFBUSxJQUFJQztJQUU3RCxNQUFNQyxZQUFZLFNBQVMsU0FBUztJQUVwQyxNQUFNQyxtQkFBbUI7UUFDeEIsTUFBTUMsVUFBVXpCLHFFQUFjQTtRQUM5QkssVUFBVW9CO0lBQ1g7SUFFQSxNQUFNQyxrQkFDTDtJQUVELHFCQUNDLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDZCw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNkLDhEQUFDQzt3QkFBT0QsV0FBVTtrQ0FDakIsNEVBQUNFOzRCQUFHRixXQUFVO3NDQUNaekI7Ozs7Ozs7Ozs7O2tDQUtILDhEQUFDd0I7d0JBQUlDLFdBQVU7a0NBQ2QsNEVBQUNyQjs0QkFDQXdCLEtBQUt6Qjs0QkFDTHNCLFdBQVU7NEJBQ1ZJLE9BQU81Qjs0QkFDUDZCLFVBQVUsQ0FBQ0MsSUFBTTdCLFVBQVU2QixFQUFFQyxPQUFPSDs0QkFDcENJLGFBQWFWOzs7Ozs7Ozs7OztrQ0FLZiw4REFBQ0M7d0JBQUlDLFdBQVU7OzBDQUNkLDhEQUFDRDswQ0FDQSw0RUFBQ1U7b0NBQUVULFdBQVU7O3dDQUFxQzt3Q0FDL0NWO3dDQUFlOzs7Ozs7Ozs7Ozs7MENBR25CLDhEQUFDUzswQ0FDQSw0RUFBQ1U7b0NBQUVULFdBQVU7OENBQXFDOzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FPcEQsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDZCw4REFBQ1U7Z0NBQ0FWLFdBQVU7Z0NBQ1ZXLFNBQVNmOztrREFFVCw4REFBQzFCLGlFQUFhQTt3Q0FBQzhCLFdBQVU7Ozs7OztrREFDekIsOERBQUNTO3dDQUFFVCxXQUFVO2tEQUFxQzs7Ozs7Ozs7Ozs7OzBDQUluRCw4REFBQ1U7Z0NBQU9WLFdBQVU7O2tEQUNqQiw4REFBQ1M7d0NBQUVULFdBQVU7a0RBQW9DOzs7Ozs7a0RBQ2pELDhEQUFDN0IsaUVBQU9BO3dDQUFDNkIsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUl0Qiw4REFBQzNCLG9EQUFXQTs7Ozs7Ozs7Ozs7QUFHZjtHQXpGTUM7S0FBQUE7QUEyRk4sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRWRpdG9yLmpzP2RlOWQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IGR1bW15dGV4dCB9IGZyb20gXCJAL2NvbnN0YW50cy90ZXh0YXJlYS1kdW1teVwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBBcnJvd1BhdGhJY29uLCBTdW5JY29uIH0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3QvMjQvc29saWRcIjtcbmltcG9ydCB7IGdlbmVyYXRlU2NyaXB0IH0gZnJvbSBcIkAvdXRpbHMvZ2VuZXJhdGVTY3JpcHRcIjtcbmltcG9ydCBNZWRpYVBsYXllciBmcm9tIFwiLi9NZWRpYVBsYXllclwiO1xuXG5jb25zdCBFZGl0b3IgPSAoKSA9PiB7XG5cdGNvbnN0IHRpdGxlID1cblx0XHRcIlJldmVyc2UgVHVyaW5nOiBJbWFnaW5lIGEgZnV0dXJlIHdvcmxkIHdoZXJlIENoYXQgR1BUIGlzIHNlbnRpZW50IGFuZCBwb3NzZXNzZXMgYSBsZXZlbCBvZiBjb25zY2lvdXNuZXNzIGFuZCBzZWxmLWF3YXJlbmVzcyBzaW1pbGFyIHRvIHRoYXQgb2YgYSBodW1hbiBiZWluZy4gVGhpcyB3b3VsZCBtYXJrIGEgc2lnbmlmaWNhbnQgbWlsZXN0b25lIGluIHRoZSBldm9sdXRpb24gb2YgYXJ0aWZpY2lhbCBpbnRlbGxpZ2VuY2UgKEFJKSBhbmQgcmFpc2UgcHJvZm91bmQgcXVlc3Rpb25zIGFib3V0IHRoZSBuYXR1cmUgb2YgaW50ZWxsaWdlbmNlLCBjb25zY2lvdXNuZXNzLCBhbmQgdGhlIGV0aGljYWwgY29uc2lkZXJhdGlvbnMgc3Vycm91bmRpbmcgc2VudGllbnQgbWFjaGluZXMuIC0gVGhpcyBpcyBhIENoYXQgR1BUIGdlbmVyYXRlZCBwYXJhZ3JhcGguXCI7XG5cblx0Y29uc3QgW3NjcmlwdCwgc2V0U2NyaXB0XSA9IHVzZVN0YXRlKFwiXCIpO1xuXHRjb25zdCB0ZXh0YXJlYVJlZiA9IHVzZVJlZihudWxsKTtcblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRjb25zdCB0ZXh0YXJlYSA9IHRleHRhcmVhUmVmLmN1cnJlbnQ7XG5cdFx0Y29uc3Qgc2Nyb2xsRGVsYXkgPSAxMDtcblx0XHRjb25zdCBoYW5kbGVJbnB1dCA9ICgpID0+IHtcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHR0ZXh0YXJlYS5zY3JvbGxUb3AgPSB0ZXh0YXJlYS5zY3JvbGxIZWlnaHQ7XG5cdFx0XHR9LCBzY3JvbGxEZWxheSk7XG5cdFx0fTtcblx0XHR0ZXh0YXJlYS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgaGFuZGxlSW5wdXQpO1xuXHRcdHJldHVybiAoKSA9PiB7XG5cdFx0XHR0ZXh0YXJlYS5yZW1vdmVFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgaGFuZGxlSW5wdXQpO1xuXHRcdH07XG5cdH0sIFtdKTtcblxuXHRjb25zdCBtaW5Xb3JkcyA9IDUwMDA7XG5cdGNvbnN0IG1heFdvcmRzID0gMTAwMDA7XG5cdGNvbnN0IHJlbWFpbmluZ1dvcmRzID1cblx0XHRtYXhXb3JkcyAtIHNjcmlwdC5zcGxpdCgvXFxzKy8pLmZpbHRlcigod29yZCkgPT4gd29yZCAhPSBcIlwiKS5sZW5ndGg7XG5cblx0Y29uc3QgdGltZUxpbWl0ID0gMzYwMDAwMDsgLy8gMSBob3VyXG5cblx0Y29uc3QgcmVnZW5lcmF0ZVNjcmlwdCA9ICgpID0+IHtcblx0XHRjb25zdCBfc2NyaXB0ID0gZ2VuZXJhdGVTY3JpcHQoKTtcblx0XHRzZXRTY3JpcHQoX3NjcmlwdCk7XG5cdH07XG5cblx0Y29uc3QgcGxhY2Vob2xkZXJUZXh0ID1cblx0XHRcIlRvIGdldCBzdGFydGVkLCBjbGljayBSZWdlbmVyYXRlIFNjcmlwdCB0byBnZW5lcmF0ZSBzb21lIExvcmVtIElwc3VtIHRleHQgb3IganVzdCBzdGFydCB0eXBpbmchIFxcblxcbkVuam95IHRoZSBwbGFjZWhvbGRlciBhdWRpbyA6KVwiO1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHctc2NyZWVuIG1iLTEyIG1kOm1yLTE0IG1kOm1sLTAgbXgtNiB0cnVuY2F0ZSAgYmctd2hpdGUgICByb3VuZGVkLW1kXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImgtZnVsbCBwLTNcIj5cblx0XHRcdFx0PGhlYWRlciBjbGFzc05hbWU9XCJmbGV4IGgtWzM2cHhdIHctWzkwJV0gcHgtMiBqdXN0aWZ5LXN0YXJ0XCI+XG5cdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT1cInRleHQteGwgdGV4dC1ncmF5LTk1MCB0cnVuY2F0ZSBzZWxlY3Qtbm9uZVwiPlxuXHRcdFx0XHRcdFx0e3RpdGxlfVxuXHRcdFx0XHRcdDwvaDE+XG5cdFx0XHRcdDwvaGVhZGVyPlxuXG5cdFx0XHRcdHsvKiBTY3JvbGxhYmxlIFRleHRhcmVhOiBkZWxldGVkIGgtMi8zICovfVxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXgtZ3JvdyBvdmVyZmxvdy15LWF1dG8gdy1mdWxsIHJvdW5kZWQtbWQgYm9yZGVyLVsxcHhdIGJvcmRlci1zbGF0ZS02MDAgbXQtMiBcIj5cblx0XHRcdFx0XHQ8dGV4dGFyZWFcblx0XHRcdFx0XHRcdHJlZj17dGV4dGFyZWFSZWZ9XG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIHAtNCBmb2N1czpvdXRsaW5lLW5vbmUgcmVzaXplLW5vbmVcIlxuXHRcdFx0XHRcdFx0dmFsdWU9e3NjcmlwdH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gc2V0U2NyaXB0KGUudGFyZ2V0LnZhbHVlKX1cblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlclRleHR9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0ey8qIFFVT1RBICovfVxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIHctZnVsbCB0ZXh0LXhzIG1kOnRleHQtc20gbGc6dGV4dC1iYXNlXCI+XG5cdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImZvbnQtY29taWMgZm9udC1ib2xkIHRleHQtZ3JheS00MDBcIj5cblx0XHRcdFx0XHRcdFx0fntyZW1haW5pbmdXb3Jkc30gd29yZHMgbGVmdCBpbiB5b3VyIHF1b3RhXG5cdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImZvbnQtY29taWMgZm9udC1ib2xkIHRleHQtZ3JheS00MDBcIj5cblx0XHRcdFx0XHRcdFx0fjIzIG1pbnV0ZXMgbGVmdCBpbiB5b3VyIHF1b3RhXG5cdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdHsvKiBCdXR0b25zICovfVxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIHctZnVsbCBpdGVtcy1jZW50ZXJcIj5cblx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcHgtNCBweS0yIGZvY3VzOm91dGxpbmUtbm9uZSBiZy1bIzllOWNhZV0gdGV4dC1ibGFjayByb3VuZGVkXCJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9e3JlZ2VuZXJhdGVTY3JpcHR9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PEFycm93UGF0aEljb24gY2xhc3NOYW1lPVwiaC00IG1yLTIgcm90YXRlLVs0NWRlZ10gdHJhbnNmb3JtIHNjYWxlLXktWy0xXVwiIC8+XG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCIgZm9udC1udW5pdG8gZm9udC1zZW1pYm9sZCB0ZXh0LXNtXCI+XG5cdFx0XHRcdFx0XHRcdFJlZ2VuZXJhdGUgU2NyaXB0XG5cdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcHgtNCBweS0yIGZvY3VzOm91dGxpbmUtbm9uZSBiZy1saWdodC1wdXJwbGUgdGV4dC13aGl0ZSByb3VuZGVkXCI+XG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJmb250LW51bml0byBmb250LXNlbWlib2xkIHRleHQtc21cIj5HZW5lcmF0ZSBBdWRpbzwvcD5cblx0XHRcdFx0XHRcdDxTdW5JY29uIGNsYXNzTmFtZT1cImgtNCBtbC0yXCIgLz5cblx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxNZWRpYVBsYXllciAvPlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yO1xuIl0sIm5hbWVzIjpbImR1bW15dGV4dCIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiQXJyb3dQYXRoSWNvbiIsIlN1bkljb24iLCJnZW5lcmF0ZVNjcmlwdCIsIk1lZGlhUGxheWVyIiwiRWRpdG9yIiwidGl0bGUiLCJzY3JpcHQiLCJzZXRTY3JpcHQiLCJ0ZXh0YXJlYVJlZiIsInRleHRhcmVhIiwiY3VycmVudCIsInNjcm9sbERlbGF5IiwiaGFuZGxlSW5wdXQiLCJzZXRUaW1lb3V0Iiwic2Nyb2xsVG9wIiwic2Nyb2xsSGVpZ2h0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJtaW5Xb3JkcyIsIm1heFdvcmRzIiwicmVtYWluaW5nV29yZHMiLCJzcGxpdCIsImZpbHRlciIsIndvcmQiLCJsZW5ndGgiLCJ0aW1lTGltaXQiLCJyZWdlbmVyYXRlU2NyaXB0IiwiX3NjcmlwdCIsInBsYWNlaG9sZGVyVGV4dCIsImRpdiIsImNsYXNzTmFtZSIsImhlYWRlciIsImgxIiwicmVmIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJwbGFjZWhvbGRlciIsInAiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./src/components/Editor.js\n"));

/***/ })

});