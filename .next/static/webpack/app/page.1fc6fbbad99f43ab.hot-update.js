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

/***/ "(app-client)/./src/components/MediaPlayer.js":
/*!***************************************!*\
  !*** ./src/components/MediaPlayer.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/react/24/solid */ \"(app-client)/./node_modules/@heroicons/react/24/solid/esm/PauseCircleIcon.js\");\n/* harmony import */ var _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/react/24/solid */ \"(app-client)/./node_modules/@heroicons/react/24/solid/esm/PlayCircleIcon.js\");\n/* harmony import */ var _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @heroicons/react/24/solid */ \"(app-client)/./node_modules/@heroicons/react/24/solid/esm/ArrowUturnLeftIcon.js\");\n/* harmony import */ var _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @heroicons/react/24/solid */ \"(app-client)/./node_modules/@heroicons/react/24/solid/esm/ArrowUturnRightIcon.js\");\n/* harmony import */ var _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @heroicons/react/24/solid */ \"(app-client)/./node_modules/@heroicons/react/24/solid/esm/ArrowDownTrayIcon.js\");\n/* harmony import */ var _public_resources_chuku_thesedays_tagged_mp3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/resources/chuku_thesedays_tagged.mp3 */ \"(app-client)/./public/resources/chuku_thesedays_tagged.mp3\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst MediaPlayer = ()=>{\n    var _audioRef_current;\n    _s();\n    const audioRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [isPlaying, setIsPlaying] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [playbackTime, setPlaybackTime] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const togglePlayPause = ()=>{\n        if (isPlaying) {\n            audioRef.current.pause();\n        } else {\n            audioRef.current.play();\n        }\n        setIsPlaying(!isPlaying);\n    };\n    const handleTimeUpdate = ()=>{\n        setPlaybackTime(audioRef.current.currentTime);\n    };\n    const handleScrub = (e)=>{\n        const scrubTime = e.target.value;\n        audioRef.current.currentTime = scrubTime;\n        setPlaybackTime(scrubTime);\n    };\n    const handleRewind = ()=>{\n        if (audioRef.current.currentTime < 10) {\n            audioRef.current.currentTime = 0;\n            setPlaybackTime(0);\n        } else {\n            audioRef.current.currentTime = playbackTime - 10;\n            setPlaybackTime(playbackTime - 10);\n        }\n    };\n    const handleFastForward = ()=>{\n        if (audioRef.current.currentTime + 10 > audioRef.current.duration) {\n            audioRef.current.currentTime = audioRef.current.duration;\n            setPlaybackTime(audioRef.current.duration);\n        } else {\n            audioRef.current.currentTime += 10;\n            setPlaybackTime(playbackTime + 10);\n        }\n    };\n    const formatTime = (time)=>{\n        const minutes = Math.floor(time / 60);\n        const seconds = Math.floor(time % 60);\n        return \"\".concat(minutes, \":\").concat(seconds < 10 ? \"0\" : \"\").concat(seconds);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center justify-center w-auto h-[78px] p-0 md:p-[18px] mt-4  border-t-[0.2px] border-slate-300 bg-[#fcfcfc]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"audio\", {\n                ref: audioRef,\n                src: _public_resources_chuku_thesedays_tagged_mp3__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n                onTimeUpdate: handleTimeUpdate,\n                onEnded: togglePlayPause\n            }, void 0, false, {\n                fileName: \"/Users/andrewnwachuku/content-editor/src/components/MediaPlayer.js\",\n                lineNumber: 66,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-1/8 mr-3\",\n                children: isPlaying ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    onClick: togglePlayPause,\n                    className: \"cursor-pointer h-14 text-dark-purple\"\n                }, void 0, false, {\n                    fileName: \"/Users/andrewnwachuku/content-editor/src/components/MediaPlayer.js\",\n                    lineNumber: 75,\n                    columnNumber: 6\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    onClick: togglePlayPause,\n                    className: \"cursor-pointer h-14 text-dark-purple\"\n                }, void 0, false, {\n                    fileName: \"/Users/andrewnwachuku/content-editor/src/components/MediaPlayer.js\",\n                    lineNumber: 80,\n                    columnNumber: 6\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/andrewnwachuku/content-editor/src/components/MediaPlayer.js\",\n                lineNumber: 73,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-[88%]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"select-none\",\n                        children: \"Chuku > These Days\"\n                    }, void 0, false, {\n                        fileName: \"/Users/andrewnwachuku/content-editor/src/components/MediaPlayer.js\",\n                        lineNumber: 88,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center justify-between\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                        onClick: handleRewind,\n                                        className: \"cursor-pointer h-4 text-dark-purple mr-4\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/andrewnwachuku/content-editor/src/components/MediaPlayer.js\",\n                                        lineNumber: 91,\n                                        columnNumber: 7\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                        onClick: handleFastForward,\n                                        className: \"cursor-pointer h-4 text-dark-purple\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/andrewnwachuku/content-editor/src/components/MediaPlayer.js\",\n                                        lineNumber: 95,\n                                        columnNumber: 7\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/andrewnwachuku/content-editor/src/components/MediaPlayer.js\",\n                                lineNumber: 90,\n                                columnNumber: 6\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"range\",\n                                min: 0,\n                                max: audioRef.current ? audioRef.current.duration : 0,\n                                value: playbackTime,\n                                onChange: handleScrub,\n                                className: \"mx-2 w-[80%]\"\n                            }, void 0, false, {\n                                fileName: \"/Users/andrewnwachuku/content-editor/src/components/MediaPlayer.js\",\n                                lineNumber: 100,\n                                columnNumber: 6\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mr-2\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-xs\",\n                                    children: [\n                                        formatTime(playbackTime),\n                                        \" /\",\n                                        \" \",\n                                        formatTime(((_audioRef_current = audioRef.current) === null || _audioRef_current === void 0 ? void 0 : _audioRef_current.duration) || 0)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/andrewnwachuku/content-editor/src/components/MediaPlayer.js\",\n                                    lineNumber: 110,\n                                    columnNumber: 7\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/andrewnwachuku/content-editor/src/components/MediaPlayer.js\",\n                                lineNumber: 109,\n                                columnNumber: 6\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/andrewnwachuku/content-editor/src/components/MediaPlayer.js\",\n                        lineNumber: 89,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/andrewnwachuku/content-editor/src/components/MediaPlayer.js\",\n                lineNumber: 87,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex w-1/8 relative\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    className: \"cursor-pointer h-6\"\n                }, void 0, false, {\n                    fileName: \"/Users/andrewnwachuku/content-editor/src/components/MediaPlayer.js\",\n                    lineNumber: 119,\n                    columnNumber: 5\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/andrewnwachuku/content-editor/src/components/MediaPlayer.js\",\n                lineNumber: 118,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/andrewnwachuku/content-editor/src/components/MediaPlayer.js\",\n        lineNumber: 65,\n        columnNumber: 3\n    }, undefined);\n};\n_s(MediaPlayer, \"XvZlMGY9BYn0gKhu2gqmKtLkKg0=\");\n_c = MediaPlayer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MediaPlayer);\nvar _c;\n$RefreshReg$(_c, \"MediaPlayer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2NvbXBvbmVudHMvTWVkaWFQbGF5ZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBRTJEO0FBT3hCO0FBRXNDO0FBRXpFLE1BQU1VLGNBQWM7UUFrR0RDOztJQWpHbEIsTUFBTUEsV0FBV1QsNkNBQU1BLENBQUM7SUFDeEIsTUFBTSxDQUFDVSxXQUFXQyxhQUFhLEdBQUdaLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ2EsY0FBY0MsZ0JBQWdCLEdBQUdkLCtDQUFRQSxDQUFDO0lBRWpELE1BQU1lLGtCQUFrQjtRQUN2QixJQUFJSixXQUFXO1lBQ2RELFNBQVNNLFFBQVFDO1FBQ2xCLE9BQU87WUFDTlAsU0FBU00sUUFBUUU7UUFDbEI7UUFDQU4sYUFBYSxDQUFDRDtJQUNmO0lBRUEsTUFBTVEsbUJBQW1CO1FBQ3hCTCxnQkFBZ0JKLFNBQVNNLFFBQVFJO0lBQ2xDO0lBRUEsTUFBTUMsY0FBYyxDQUFDQztRQUNwQixNQUFNQyxZQUFZRCxFQUFFRSxPQUFPQztRQUMzQmYsU0FBU00sUUFBUUksY0FBY0c7UUFDL0JULGdCQUFnQlM7SUFDakI7SUFFQSxNQUFNRyxlQUFlO1FBQ3BCLElBQUloQixTQUFTTSxRQUFRSSxjQUFjLElBQUk7WUFDdENWLFNBQVNNLFFBQVFJLGNBQWM7WUFDL0JOLGdCQUFnQjtRQUNqQixPQUFPO1lBQ05KLFNBQVNNLFFBQVFJLGNBQWNQLGVBQWU7WUFDOUNDLGdCQUFnQkQsZUFBZTtRQUNoQztJQUNEO0lBRUEsTUFBTWMsb0JBQW9CO1FBQ3pCLElBQUlqQixTQUFTTSxRQUFRSSxjQUFjLEtBQUtWLFNBQVNNLFFBQVFZLFVBQVU7WUFDbEVsQixTQUFTTSxRQUFRSSxjQUFjVixTQUFTTSxRQUFRWTtZQUNoRGQsZ0JBQWdCSixTQUFTTSxRQUFRWTtRQUNsQyxPQUFPO1lBQ05sQixTQUFTTSxRQUFRSSxlQUFlO1lBQ2hDTixnQkFBZ0JELGVBQWU7UUFDaEM7SUFDRDtJQUVBLE1BQU1nQixhQUFhLENBQUNDO1FBQ25CLE1BQU1DLFVBQVVDLEtBQUtDLE1BQU1ILE9BQU87UUFDbEMsTUFBTUksVUFBVUYsS0FBS0MsTUFBTUgsT0FBTztRQUNsQyxPQUFPLEdBQWNJLE9BQVhILFNBQVEsS0FBNkJHLE9BQTFCQSxVQUFVLEtBQUssTUFBTSxJQUFhLE9BQVJBO0lBQ2hEO0lBRUEscUJBQ0MsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNkLDhEQUFDQztnQkFDQUMsS0FBSzVCO2dCQUNMNkIsS0FBSy9CLG9GQUFRQTtnQkFDYmdDLGNBQWNyQjtnQkFDZHNCLFNBQVMxQjs7Ozs7OzBCQUdWLDhEQUFDb0I7Z0JBQUlDLFdBQVU7MEJBQ2J6QiwwQkFDQSw4REFBQ1AsaUVBQWVBO29CQUNmc0MsU0FBUzNCO29CQUNUcUIsV0FBVTs7Ozs7OENBR1gsOERBQUNqQyxpRUFBY0E7b0JBQ2R1QyxTQUFTM0I7b0JBQ1RxQixXQUFVOzs7Ozs7Ozs7OzswQkFLYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNkLDhEQUFDTzt3QkFBRVAsV0FBVTtrQ0FBZTs7Ozs7O2tDQUM1Qiw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNkLDhEQUFDRDtnQ0FBSUMsV0FBVTs7a0RBQ2QsOERBQUM5QixpRUFBa0JBO3dDQUNsQm9DLFNBQVNoQjt3Q0FDVFUsV0FBVTs7Ozs7O2tEQUVYLDhEQUFDN0IsaUVBQW1CQTt3Q0FDbkJtQyxTQUFTZjt3Q0FDVFMsV0FBVTs7Ozs7Ozs7Ozs7OzBDQUdaLDhEQUFDUTtnQ0FDQUMsTUFBSztnQ0FDTEMsS0FBSztnQ0FDTEMsS0FBS3JDLFNBQVNNLFVBQVVOLFNBQVNNLFFBQVFZLFdBQVc7Z0NBQ3BESCxPQUFPWjtnQ0FDUG1DLFVBQVUzQjtnQ0FDVmUsV0FBVTs7Ozs7OzBDQUdYLDhEQUFDRDtnQ0FBSUMsV0FBVTswQ0FDZCw0RUFBQ087b0NBQUVQLFdBQVU7O3dDQUNYUCxXQUFXaEI7d0NBQWM7d0NBQUc7d0NBQzVCZ0IsV0FBV25CLENBQUFBLENBQUFBLG9CQUFBQSxTQUFTTSxxQkFBVE4sK0JBQUFBLEtBQUFBLElBQUFBLGtCQUFrQmtCLFFBQU8sS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQU05Qyw4REFBQ087Z0JBQUlDLFdBQVU7MEJBQ2QsNEVBQUMvQixpRUFBaUJBO29CQUFDK0IsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJakM7R0E3R00zQjtLQUFBQTtBQStHTiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9NZWRpYVBsYXllci5qcz9mYzRlIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuXHRQbGF5Q2lyY2xlSWNvbixcblx0UGF1c2VDaXJjbGVJY29uLFxuXHRBcnJvd0Rvd25UcmF5SWNvbixcblx0QXJyb3dVdHVybkxlZnRJY29uLFxuXHRBcnJvd1V0dXJuUmlnaHRJY29uLFxufSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC8yNC9zb2xpZFwiO1xuXG5pbXBvcnQgYXVkaW9TcmMgZnJvbSBcIi4uLy4uL3B1YmxpYy9yZXNvdXJjZXMvY2h1a3VfdGhlc2VkYXlzX3RhZ2dlZC5tcDNcIjtcblxuY29uc3QgTWVkaWFQbGF5ZXIgPSAoKSA9PiB7XG5cdGNvbnN0IGF1ZGlvUmVmID0gdXNlUmVmKG51bGwpO1xuXHRjb25zdCBbaXNQbGF5aW5nLCBzZXRJc1BsYXlpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXHRjb25zdCBbcGxheWJhY2tUaW1lLCBzZXRQbGF5YmFja1RpbWVdID0gdXNlU3RhdGUoMCk7XG5cblx0Y29uc3QgdG9nZ2xlUGxheVBhdXNlID0gKCkgPT4ge1xuXHRcdGlmIChpc1BsYXlpbmcpIHtcblx0XHRcdGF1ZGlvUmVmLmN1cnJlbnQucGF1c2UoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0YXVkaW9SZWYuY3VycmVudC5wbGF5KCk7XG5cdFx0fVxuXHRcdHNldElzUGxheWluZyghaXNQbGF5aW5nKTtcblx0fTtcblxuXHRjb25zdCBoYW5kbGVUaW1lVXBkYXRlID0gKCkgPT4ge1xuXHRcdHNldFBsYXliYWNrVGltZShhdWRpb1JlZi5jdXJyZW50LmN1cnJlbnRUaW1lKTtcblx0fTtcblxuXHRjb25zdCBoYW5kbGVTY3J1YiA9IChlKSA9PiB7XG5cdFx0Y29uc3Qgc2NydWJUaW1lID0gZS50YXJnZXQudmFsdWU7XG5cdFx0YXVkaW9SZWYuY3VycmVudC5jdXJyZW50VGltZSA9IHNjcnViVGltZTtcblx0XHRzZXRQbGF5YmFja1RpbWUoc2NydWJUaW1lKTtcblx0fTtcblxuXHRjb25zdCBoYW5kbGVSZXdpbmQgPSAoKSA9PiB7XG5cdFx0aWYgKGF1ZGlvUmVmLmN1cnJlbnQuY3VycmVudFRpbWUgPCAxMCkge1xuXHRcdFx0YXVkaW9SZWYuY3VycmVudC5jdXJyZW50VGltZSA9IDA7XG5cdFx0XHRzZXRQbGF5YmFja1RpbWUoMCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGF1ZGlvUmVmLmN1cnJlbnQuY3VycmVudFRpbWUgPSBwbGF5YmFja1RpbWUgLSAxMDtcblx0XHRcdHNldFBsYXliYWNrVGltZShwbGF5YmFja1RpbWUgLSAxMCk7XG5cdFx0fVxuXHR9O1xuXG5cdGNvbnN0IGhhbmRsZUZhc3RGb3J3YXJkID0gKCkgPT4ge1xuXHRcdGlmIChhdWRpb1JlZi5jdXJyZW50LmN1cnJlbnRUaW1lICsgMTAgPiBhdWRpb1JlZi5jdXJyZW50LmR1cmF0aW9uKSB7XG5cdFx0XHRhdWRpb1JlZi5jdXJyZW50LmN1cnJlbnRUaW1lID0gYXVkaW9SZWYuY3VycmVudC5kdXJhdGlvbjtcblx0XHRcdHNldFBsYXliYWNrVGltZShhdWRpb1JlZi5jdXJyZW50LmR1cmF0aW9uKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0YXVkaW9SZWYuY3VycmVudC5jdXJyZW50VGltZSArPSAxMDtcblx0XHRcdHNldFBsYXliYWNrVGltZShwbGF5YmFja1RpbWUgKyAxMCk7XG5cdFx0fVxuXHR9O1xuXG5cdGNvbnN0IGZvcm1hdFRpbWUgPSAodGltZSkgPT4ge1xuXHRcdGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKHRpbWUgLyA2MCk7XG5cdFx0Y29uc3Qgc2Vjb25kcyA9IE1hdGguZmxvb3IodGltZSAlIDYwKTtcblx0XHRyZXR1cm4gYCR7bWludXRlc306JHtzZWNvbmRzIDwgMTAgPyBcIjBcIiA6IFwiXCJ9JHtzZWNvbmRzfWA7XG5cdH07XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHctYXV0byBoLVs3OHB4XSBwLTAgbWQ6cC1bMThweF0gbXQtNCAgYm9yZGVyLXQtWzAuMnB4XSBib3JkZXItc2xhdGUtMzAwIGJnLVsjZmNmY2ZjXVwiPlxuXHRcdFx0PGF1ZGlvXG5cdFx0XHRcdHJlZj17YXVkaW9SZWZ9XG5cdFx0XHRcdHNyYz17YXVkaW9TcmN9XG5cdFx0XHRcdG9uVGltZVVwZGF0ZT17aGFuZGxlVGltZVVwZGF0ZX1cblx0XHRcdFx0b25FbmRlZD17dG9nZ2xlUGxheVBhdXNlfVxuXHRcdFx0Lz5cblxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3LTEvOCBtci0zXCI+XG5cdFx0XHRcdHtpc1BsYXlpbmcgPyAoXG5cdFx0XHRcdFx0PFBhdXNlQ2lyY2xlSWNvblxuXHRcdFx0XHRcdFx0b25DbGljaz17dG9nZ2xlUGxheVBhdXNlfVxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgaC0xNCB0ZXh0LWRhcmstcHVycGxlXCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQpIDogKFxuXHRcdFx0XHRcdDxQbGF5Q2lyY2xlSWNvblxuXHRcdFx0XHRcdFx0b25DbGljaz17dG9nZ2xlUGxheVBhdXNlfVxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgaC0xNCB0ZXh0LWRhcmstcHVycGxlXCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQpfVxuXHRcdFx0PC9kaXY+XG5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidy1bODglXVwiPlxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJzZWxlY3Qtbm9uZVwiPntcIkNodWt1ID4gVGhlc2UgRGF5c1wifTwvcD5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cblx0XHRcdFx0XHRcdDxBcnJvd1V0dXJuTGVmdEljb25cblx0XHRcdFx0XHRcdFx0b25DbGljaz17aGFuZGxlUmV3aW5kfVxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciBoLTQgdGV4dC1kYXJrLXB1cnBsZSBtci00XCJcblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8QXJyb3dVdHVyblJpZ2h0SWNvblxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXtoYW5kbGVGYXN0Rm9yd2FyZH1cblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgaC00IHRleHQtZGFyay1wdXJwbGVcIlxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdHR5cGU9XCJyYW5nZVwiXG5cdFx0XHRcdFx0XHRtaW49ezB9XG5cdFx0XHRcdFx0XHRtYXg9e2F1ZGlvUmVmLmN1cnJlbnQgPyBhdWRpb1JlZi5jdXJyZW50LmR1cmF0aW9uIDogMH1cblx0XHRcdFx0XHRcdHZhbHVlPXtwbGF5YmFja1RpbWV9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlU2NydWJ9XG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJteC0yIHctWzgwJV1cIlxuXHRcdFx0XHRcdC8+XG5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1yLTJcIj5cblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInRleHQteHNcIj5cblx0XHRcdFx0XHRcdFx0e2Zvcm1hdFRpbWUocGxheWJhY2tUaW1lKX0gL3tcIiBcIn1cblx0XHRcdFx0XHRcdFx0e2Zvcm1hdFRpbWUoYXVkaW9SZWYuY3VycmVudD8uZHVyYXRpb24gfHwgMCl9XG5cdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCB3LTEvOCByZWxhdGl2ZVwiPlxuXHRcdFx0XHQ8QXJyb3dEb3duVHJheUljb24gY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgaC02XCIgLz5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWVkaWFQbGF5ZXI7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsInVzZUVmZmVjdCIsIlBsYXlDaXJjbGVJY29uIiwiUGF1c2VDaXJjbGVJY29uIiwiQXJyb3dEb3duVHJheUljb24iLCJBcnJvd1V0dXJuTGVmdEljb24iLCJBcnJvd1V0dXJuUmlnaHRJY29uIiwiYXVkaW9TcmMiLCJNZWRpYVBsYXllciIsImF1ZGlvUmVmIiwiaXNQbGF5aW5nIiwic2V0SXNQbGF5aW5nIiwicGxheWJhY2tUaW1lIiwic2V0UGxheWJhY2tUaW1lIiwidG9nZ2xlUGxheVBhdXNlIiwiY3VycmVudCIsInBhdXNlIiwicGxheSIsImhhbmRsZVRpbWVVcGRhdGUiLCJjdXJyZW50VGltZSIsImhhbmRsZVNjcnViIiwiZSIsInNjcnViVGltZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlUmV3aW5kIiwiaGFuZGxlRmFzdEZvcndhcmQiLCJkdXJhdGlvbiIsImZvcm1hdFRpbWUiLCJ0aW1lIiwibWludXRlcyIsIk1hdGgiLCJmbG9vciIsInNlY29uZHMiLCJkaXYiLCJjbGFzc05hbWUiLCJhdWRpbyIsInJlZiIsInNyYyIsIm9uVGltZVVwZGF0ZSIsIm9uRW5kZWQiLCJvbkNsaWNrIiwicCIsImlucHV0IiwidHlwZSIsIm1pbiIsIm1heCIsIm9uQ2hhbmdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./src/components/MediaPlayer.js\n"));

/***/ })

});