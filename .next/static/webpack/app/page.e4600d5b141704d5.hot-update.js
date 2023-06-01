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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/react/24/solid */ \"(app-client)/./node_modules/@heroicons/react/24/solid/esm/ArrowPathIcon.js\");\n/* harmony import */ var _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/react/24/solid */ \"(app-client)/./node_modules/@heroicons/react/24/solid/esm/SunIcon.js\");\n/* harmony import */ var _utils_generateScript__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/generateScript */ \"(app-client)/./src/utils/generateScript.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst ScriptEditor = ()=>{\n    _s();\n    const title = \"Reverse Turing: Imagine a future world where Chat GPT is sentient and possesses a level of consciousness and self-awareness similar to that of a human being. This would mark a significant milestone in the evolution of artificial intelligence (AI) and raise profound questions about the nature of intelligence, consciousness, and the ethical considerations surrounding sentient machines. - This is a Chat GPT generated paragraph.\";\n    const [script, setScript] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const textareaRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const textarea = textareaRef.current;\n        const scrollDelay = 10;\n        const handleInput = ()=>{\n            setTimeout(()=>{\n                textarea.scrollTop = textarea.scrollHeight;\n            }, scrollDelay);\n        };\n        textarea.addEventListener(\"input\", handleInput);\n        return ()=>{\n            textarea.removeEventListener(\"input\", handleInput);\n        };\n    }, []);\n    const minWords = 5000;\n    const maxWords = 10000;\n    const remainingWords = maxWords - script.split(/\\s+/).filter((word)=>word != \"\").length;\n    const timeLimit = 3600000; // 1 hour\n    const regenerateScript = ()=>{\n        const _script = (0,_utils_generateScript__WEBPACK_IMPORTED_MODULE_2__.generateScript)();\n        setScript(_script);\n    };\n    const placeholderText = \"To get started, click Regenerate Script to generate some Lorem Ipsum text or just start typing! \\n\\nEnjoy the placeholder audio :)\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"flex h-[36px] w-[90%] px-2 mx-3 mt-3 mb-0 justify-start\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-xl text-gray-950 truncate select-none\",\n                    children: title\n                }, void 0, false, {\n                    fileName: \"/Users/andrewnwachuku/content-editor/src/components/ScriptEditor.js\",\n                    lineNumber: 44,\n                    columnNumber: 5\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/andrewnwachuku/content-editor/src/components/ScriptEditor.js\",\n                lineNumber: 43,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-grow overflow-y-auto w-auto mx-3 rounded-md border-[1px] border-slate-600 \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                    ref: textareaRef,\n                    className: \"w-full h-full p-4 focus:outline-none resize-none\",\n                    value: script,\n                    onChange: (e)=>setScript(e.target.value),\n                    placeholder: placeholderText\n                }, void 0, false, {\n                    fileName: \"/Users/andrewnwachuku/content-editor/src/components/ScriptEditor.js\",\n                    lineNumber: 49,\n                    columnNumber: 5\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/andrewnwachuku/content-editor/src/components/ScriptEditor.js\",\n                lineNumber: 48,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between w-full text-xs md:text-sm lg:text-base\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"font-comic font-bold text-gray-400\",\n                            children: [\n                                \"~\",\n                                remainingWords,\n                                \" words left in your quota\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/andrewnwachuku/content-editor/src/components/ScriptEditor.js\",\n                            lineNumber: 61,\n                            columnNumber: 6\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/andrewnwachuku/content-editor/src/components/ScriptEditor.js\",\n                        lineNumber: 60,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"font-comic font-bold text-gray-400\",\n                            children: \"~23 minutes left in your quota\"\n                        }, void 0, false, {\n                            fileName: \"/Users/andrewnwachuku/content-editor/src/components/ScriptEditor.js\",\n                            lineNumber: 66,\n                            columnNumber: 6\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/andrewnwachuku/content-editor/src/components/ScriptEditor.js\",\n                        lineNumber: 65,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/andrewnwachuku/content-editor/src/components/ScriptEditor.js\",\n                lineNumber: 59,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between w-full items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"flex items-center justify-between px-4 py-2 focus:outline-none bg-[#9e9cae] text-black rounded\",\n                        onClick: regenerateScript,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                className: \"h-4 mr-2 rotate-[45deg] transform scale-y-[-1]\"\n                            }, void 0, false, {\n                                fileName: \"/Users/andrewnwachuku/content-editor/src/components/ScriptEditor.js\",\n                                lineNumber: 78,\n                                columnNumber: 6\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \" font-nunito font-semibold text-sm\",\n                                children: \"Regenerate Script\"\n                            }, void 0, false, {\n                                fileName: \"/Users/andrewnwachuku/content-editor/src/components/ScriptEditor.js\",\n                                lineNumber: 79,\n                                columnNumber: 6\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/andrewnwachuku/content-editor/src/components/ScriptEditor.js\",\n                        lineNumber: 74,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"flex items-center justify-between px-4 py-2 focus:outline-none bg-light-purple text-white rounded\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"font-nunito font-semibold text-sm\",\n                                children: \"Generate Audio\"\n                            }, void 0, false, {\n                                fileName: \"/Users/andrewnwachuku/content-editor/src/components/ScriptEditor.js\",\n                                lineNumber: 84,\n                                columnNumber: 6\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                className: \"h-4 ml-2\"\n                            }, void 0, false, {\n                                fileName: \"/Users/andrewnwachuku/content-editor/src/components/ScriptEditor.js\",\n                                lineNumber: 85,\n                                columnNumber: 6\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/andrewnwachuku/content-editor/src/components/ScriptEditor.js\",\n                        lineNumber: 83,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/andrewnwachuku/content-editor/src/components/ScriptEditor.js\",\n                lineNumber: 73,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(ScriptEditor, \"8+FUgv7amcuUiQuUGfzP1Gv6F7w=\");\n_c = ScriptEditor;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ScriptEditor);\nvar _c;\n$RefreshReg$(_c, \"ScriptEditor\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2NvbXBvbmVudHMvU2NyaXB0RWRpdG9yLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVvRDtBQUNlO0FBQ1g7QUFFeEQsTUFBTU0sZUFBZTs7SUFDcEIsTUFBTUMsUUFDTDtJQUVELE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNUSxjQUFjVCw2Q0FBTUEsQ0FBQztJQUMzQkQsZ0RBQVNBLENBQUM7UUFDVCxNQUFNVyxXQUFXRCxZQUFZRTtRQUM3QixNQUFNQyxjQUFjO1FBQ3BCLE1BQU1DLGNBQWM7WUFDbkJDLFdBQVc7Z0JBQ1ZKLFNBQVNLLFlBQVlMLFNBQVNNO1lBQy9CLEdBQUdKO1FBQ0o7UUFDQUYsU0FBU08saUJBQWlCLFNBQVNKO1FBQ25DLE9BQU87WUFDTkgsU0FBU1Esb0JBQW9CLFNBQVNMO1FBQ3ZDO0lBQ0QsR0FBRyxFQUFFO0lBRUwsTUFBTU0sV0FBVztJQUNqQixNQUFNQyxXQUFXO0lBQ2pCLE1BQU1DLGlCQUNMRCxXQUFXYixPQUFPZSxNQUFNLE9BQU9DLE9BQU8sQ0FBQ0MsT0FBU0EsUUFBUSxJQUFJQztJQUU3RCxNQUFNQyxZQUFZLFNBQVMsU0FBUztJQUVwQyxNQUFNQyxtQkFBbUI7UUFDeEIsTUFBTUMsVUFBVXhCLHFFQUFjQTtRQUM5QkksVUFBVW9CO0lBQ1g7SUFFQSxNQUFNQyxrQkFDTDtJQUNELHFCQUNDOzswQkFDQyw4REFBQ0M7Z0JBQU9DLFdBQVU7MEJBQ2pCLDRFQUFDQztvQkFBR0QsV0FBVTs4QkFBOEN6Qjs7Ozs7Ozs7Ozs7MEJBSTdELDhEQUFDMkI7Z0JBQUlGLFdBQVU7MEJBQ2QsNEVBQUNyQjtvQkFDQXdCLEtBQUt6QjtvQkFDTHNCLFdBQVU7b0JBQ1ZJLE9BQU81QjtvQkFDUDZCLFVBQVUsQ0FBQ0MsSUFBTTdCLFVBQVU2QixFQUFFQyxPQUFPSDtvQkFDcENJLGFBQWFWOzs7Ozs7Ozs7OzswQkFLZiw4REFBQ0k7Z0JBQUlGLFdBQVU7O2tDQUNkLDhEQUFDRTtrQ0FDQSw0RUFBQ087NEJBQUVULFdBQVU7O2dDQUFxQztnQ0FDL0NWO2dDQUFlOzs7Ozs7Ozs7Ozs7a0NBR25CLDhEQUFDWTtrQ0FDQSw0RUFBQ087NEJBQUVULFdBQVU7c0NBQXFDOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFPcEQsOERBQUNFO2dCQUFJRixXQUFVOztrQ0FDZCw4REFBQ1U7d0JBQ0FWLFdBQVU7d0JBQ1ZXLFNBQVNmOzswQ0FFVCw4REFBQ3pCLGlFQUFhQTtnQ0FBQzZCLFdBQVU7Ozs7OzswQ0FDekIsOERBQUNTO2dDQUFFVCxXQUFVOzBDQUFxQzs7Ozs7Ozs7Ozs7O2tDQUluRCw4REFBQ1U7d0JBQU9WLFdBQVU7OzBDQUNqQiw4REFBQ1M7Z0NBQUVULFdBQVU7MENBQW9DOzs7Ozs7MENBQ2pELDhEQUFDNUIsaUVBQU9BO2dDQUFDNEIsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLeEI7R0FuRk0xQjtLQUFBQTtBQXFGTiwrREFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9TY3JpcHRFZGl0b3IuanM/NGY5YSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBBcnJvd1BhdGhJY29uLCBTdW5JY29uIH0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3QvMjQvc29saWRcIjtcbmltcG9ydCB7IGdlbmVyYXRlU2NyaXB0IH0gZnJvbSBcIkAvdXRpbHMvZ2VuZXJhdGVTY3JpcHRcIjtcblxuY29uc3QgU2NyaXB0RWRpdG9yID0gKCkgPT4ge1xuXHRjb25zdCB0aXRsZSA9XG5cdFx0XCJSZXZlcnNlIFR1cmluZzogSW1hZ2luZSBhIGZ1dHVyZSB3b3JsZCB3aGVyZSBDaGF0IEdQVCBpcyBzZW50aWVudCBhbmQgcG9zc2Vzc2VzIGEgbGV2ZWwgb2YgY29uc2Npb3VzbmVzcyBhbmQgc2VsZi1hd2FyZW5lc3Mgc2ltaWxhciB0byB0aGF0IG9mIGEgaHVtYW4gYmVpbmcuIFRoaXMgd291bGQgbWFyayBhIHNpZ25pZmljYW50IG1pbGVzdG9uZSBpbiB0aGUgZXZvbHV0aW9uIG9mIGFydGlmaWNpYWwgaW50ZWxsaWdlbmNlIChBSSkgYW5kIHJhaXNlIHByb2ZvdW5kIHF1ZXN0aW9ucyBhYm91dCB0aGUgbmF0dXJlIG9mIGludGVsbGlnZW5jZSwgY29uc2Npb3VzbmVzcywgYW5kIHRoZSBldGhpY2FsIGNvbnNpZGVyYXRpb25zIHN1cnJvdW5kaW5nIHNlbnRpZW50IG1hY2hpbmVzLiAtIFRoaXMgaXMgYSBDaGF0IEdQVCBnZW5lcmF0ZWQgcGFyYWdyYXBoLlwiO1xuXG5cdGNvbnN0IFtzY3JpcHQsIHNldFNjcmlwdF0gPSB1c2VTdGF0ZShcIlwiKTtcblx0Y29uc3QgdGV4dGFyZWFSZWYgPSB1c2VSZWYobnVsbCk7XG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0Y29uc3QgdGV4dGFyZWEgPSB0ZXh0YXJlYVJlZi5jdXJyZW50O1xuXHRcdGNvbnN0IHNjcm9sbERlbGF5ID0gMTA7XG5cdFx0Y29uc3QgaGFuZGxlSW5wdXQgPSAoKSA9PiB7XG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0dGV4dGFyZWEuc2Nyb2xsVG9wID0gdGV4dGFyZWEuc2Nyb2xsSGVpZ2h0O1xuXHRcdFx0fSwgc2Nyb2xsRGVsYXkpO1xuXHRcdH07XG5cdFx0dGV4dGFyZWEuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGhhbmRsZUlucHV0KTtcblx0XHRyZXR1cm4gKCkgPT4ge1xuXHRcdFx0dGV4dGFyZWEucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGhhbmRsZUlucHV0KTtcblx0XHR9O1xuXHR9LCBbXSk7XG5cblx0Y29uc3QgbWluV29yZHMgPSA1MDAwO1xuXHRjb25zdCBtYXhXb3JkcyA9IDEwMDAwO1xuXHRjb25zdCByZW1haW5pbmdXb3JkcyA9XG5cdFx0bWF4V29yZHMgLSBzY3JpcHQuc3BsaXQoL1xccysvKS5maWx0ZXIoKHdvcmQpID0+IHdvcmQgIT0gXCJcIikubGVuZ3RoO1xuXG5cdGNvbnN0IHRpbWVMaW1pdCA9IDM2MDAwMDA7IC8vIDEgaG91clxuXG5cdGNvbnN0IHJlZ2VuZXJhdGVTY3JpcHQgPSAoKSA9PiB7XG5cdFx0Y29uc3QgX3NjcmlwdCA9IGdlbmVyYXRlU2NyaXB0KCk7XG5cdFx0c2V0U2NyaXB0KF9zY3JpcHQpO1xuXHR9O1xuXG5cdGNvbnN0IHBsYWNlaG9sZGVyVGV4dCA9XG5cdFx0XCJUbyBnZXQgc3RhcnRlZCwgY2xpY2sgUmVnZW5lcmF0ZSBTY3JpcHQgdG8gZ2VuZXJhdGUgc29tZSBMb3JlbSBJcHN1bSB0ZXh0IG9yIGp1c3Qgc3RhcnQgdHlwaW5nISBcXG5cXG5FbmpveSB0aGUgcGxhY2Vob2xkZXIgYXVkaW8gOilcIjtcblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PGhlYWRlciBjbGFzc05hbWU9XCJmbGV4IGgtWzM2cHhdIHctWzkwJV0gcHgtMiBteC0zIG10LTMgbWItMCBqdXN0aWZ5LXN0YXJ0XCI+XG5cdFx0XHRcdDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXhsIHRleHQtZ3JheS05NTAgdHJ1bmNhdGUgc2VsZWN0LW5vbmVcIj57dGl0bGV9PC9oMT5cblx0XHRcdDwvaGVhZGVyPlxuXG5cdFx0XHR7LyogU2Nyb2xsYWJsZSBUZXh0YXJlYTogZGVsZXRlZCBoLTIvMyAqL31cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleC1ncm93IG92ZXJmbG93LXktYXV0byB3LWF1dG8gbXgtMyByb3VuZGVkLW1kIGJvcmRlci1bMXB4XSBib3JkZXItc2xhdGUtNjAwIFwiPlxuXHRcdFx0XHQ8dGV4dGFyZWFcblx0XHRcdFx0XHRyZWY9e3RleHRhcmVhUmVmfVxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgcC00IGZvY3VzOm91dGxpbmUtbm9uZSByZXNpemUtbm9uZVwiXG5cdFx0XHRcdFx0dmFsdWU9e3NjcmlwdH1cblx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHNldFNjcmlwdChlLnRhcmdldC52YWx1ZSl9XG5cdFx0XHRcdFx0cGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyVGV4dH1cblx0XHRcdFx0Lz5cblx0XHRcdDwvZGl2PlxuXG5cdFx0XHR7LyogUVVPVEEgKi99XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIHctZnVsbCB0ZXh0LXhzIG1kOnRleHQtc20gbGc6dGV4dC1iYXNlXCI+XG5cdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiZm9udC1jb21pYyBmb250LWJvbGQgdGV4dC1ncmF5LTQwMFwiPlxuXHRcdFx0XHRcdFx0fntyZW1haW5pbmdXb3Jkc30gd29yZHMgbGVmdCBpbiB5b3VyIHF1b3RhXG5cdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJmb250LWNvbWljIGZvbnQtYm9sZCB0ZXh0LWdyYXktNDAwXCI+XG5cdFx0XHRcdFx0XHR+MjMgbWludXRlcyBsZWZ0IGluIHlvdXIgcXVvdGFcblx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cblx0XHRcdHsvKiBCdXR0b25zICovfVxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiB3LWZ1bGwgaXRlbXMtY2VudGVyXCI+XG5cdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcHgtNCBweS0yIGZvY3VzOm91dGxpbmUtbm9uZSBiZy1bIzllOWNhZV0gdGV4dC1ibGFjayByb3VuZGVkXCJcblx0XHRcdFx0XHRvbkNsaWNrPXtyZWdlbmVyYXRlU2NyaXB0fVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PEFycm93UGF0aEljb24gY2xhc3NOYW1lPVwiaC00IG1yLTIgcm90YXRlLVs0NWRlZ10gdHJhbnNmb3JtIHNjYWxlLXktWy0xXVwiIC8+XG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiIGZvbnQtbnVuaXRvIGZvbnQtc2VtaWJvbGQgdGV4dC1zbVwiPlxuXHRcdFx0XHRcdFx0UmVnZW5lcmF0ZSBTY3JpcHRcblx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBweC00IHB5LTIgZm9jdXM6b3V0bGluZS1ub25lIGJnLWxpZ2h0LXB1cnBsZSB0ZXh0LXdoaXRlIHJvdW5kZWRcIj5cblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJmb250LW51bml0byBmb250LXNlbWlib2xkIHRleHQtc21cIj5HZW5lcmF0ZSBBdWRpbzwvcD5cblx0XHRcdFx0XHQ8U3VuSWNvbiBjbGFzc05hbWU9XCJoLTQgbWwtMlwiIC8+XG5cdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC8+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTY3JpcHRFZGl0b3I7XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJBcnJvd1BhdGhJY29uIiwiU3VuSWNvbiIsImdlbmVyYXRlU2NyaXB0IiwiU2NyaXB0RWRpdG9yIiwidGl0bGUiLCJzY3JpcHQiLCJzZXRTY3JpcHQiLCJ0ZXh0YXJlYVJlZiIsInRleHRhcmVhIiwiY3VycmVudCIsInNjcm9sbERlbGF5IiwiaGFuZGxlSW5wdXQiLCJzZXRUaW1lb3V0Iiwic2Nyb2xsVG9wIiwic2Nyb2xsSGVpZ2h0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJtaW5Xb3JkcyIsIm1heFdvcmRzIiwicmVtYWluaW5nV29yZHMiLCJzcGxpdCIsImZpbHRlciIsIndvcmQiLCJsZW5ndGgiLCJ0aW1lTGltaXQiLCJyZWdlbmVyYXRlU2NyaXB0IiwiX3NjcmlwdCIsInBsYWNlaG9sZGVyVGV4dCIsImhlYWRlciIsImNsYXNzTmFtZSIsImgxIiwiZGl2IiwicmVmIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJwbGFjZWhvbGRlciIsInAiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./src/components/ScriptEditor.js\n"));

/***/ })

});