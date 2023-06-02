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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/react/24/solid */ \"(app-client)/./node_modules/@heroicons/react/24/solid/esm/PauseCircleIcon.js\");\n/* harmony import */ var _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/react/24/solid */ \"(app-client)/./node_modules/@heroicons/react/24/solid/esm/PlayCircleIcon.js\");\n/* harmony import */ var _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @heroicons/react/24/solid */ \"(app-client)/./node_modules/@heroicons/react/24/solid/esm/ArrowUturnLeftIcon.js\");\n/* harmony import */ var _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @heroicons/react/24/solid */ \"(app-client)/./node_modules/@heroicons/react/24/solid/esm/ArrowUturnRightIcon.js\");\n/* harmony import */ var _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @heroicons/react/24/solid */ \"(app-client)/./node_modules/@heroicons/react/24/solid/esm/ArrowDownTrayIcon.js\");\n/* harmony import */ var _public_resources_chuku_thesedays_tagged_mp3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/resources/chuku_thesedays_tagged.mp3 */ \"(app-client)/./public/resources/chuku_thesedays_tagged.mp3\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst MediaPlayer = ()=>{\n    var _audioRef_current, _audioRef_current1, _audioRef_current2, _audioRef_current3, _audioRef_current4;\n    _s();\n    const audioRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [isPlaying, setIsPlaying] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [playbackTime, setPlaybackTime] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [playbackDuration, setPlaybackDuration] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setPlaybackDuration(audioRef.current.duration);\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Listen for when arrow keys are pressed to prevent from changing playback time\n        const handleKeyDown = (event)=>{\n            if (event.key === \"ArrowLeft\" || event.key === \"ArrowRight\") {\n                event.preventDefault();\n            }\n        };\n        document.addEventListener(\"keydown\", handleKeyDown);\n        return ()=>{\n            document.removeEventListener(\"keydown\", handleKeyDown);\n        };\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Listen for when audio is paused/played by a source other than clicking the icon\n        const handlePlay = ()=>{\n            setIsPlaying(true);\n        };\n        const handlePause = ()=>{\n            setIsPlaying(false);\n        };\n        audioRef.current.addEventListener(\"play\", handlePlay);\n        audioRef.current.addEventListener(\"pause\", handlePause);\n        return ()=>{\n            audioRef.current.removeEventListener(\"play\", handlePlay);\n            audioRef.current.removeEventListener(\"pause\", handlePause);\n        };\n    });\n    const togglePlayPause = ()=>{\n        if (isPlaying) {\n            audioRef.current.pause();\n        } else {\n            audioRef.current.play();\n        }\n        setIsPlaying(!isPlaying);\n    };\n    const handleTimeUpdate = ()=>{\n        setPlaybackTime(audioRef.current.currentTime);\n    };\n    const handleScrub = (e)=>{\n        const scrubTime = e.target.value;\n        audioRef.current.currentTime = scrubTime;\n        setPlaybackTime(scrubTime);\n    };\n    const handleRewind = ()=>{\n        if (audioRef.current.currentTime < 10) {\n            audioRef.current.currentTime = 0;\n            setPlaybackTime(0);\n        } else {\n            audioRef.current.currentTime = playbackTime - 10;\n            setPlaybackTime(playbackTime - 10);\n        }\n    };\n    const handleFastForward = ()=>{\n        if (audioRef.current.currentTime + 10 > audioRef.current.duration) {\n            audioRef.current.currentTime = audioRef.current.duration;\n            setPlaybackTime(audioRef.current.duration);\n        } else {\n            audioRef.current.currentTime += 10;\n            setPlaybackTime(playbackTime + 10);\n        }\n    };\n    const formatTime = (time)=>{\n        const minutes = Math.floor(time / 60);\n        const seconds = Math.floor(time % 60);\n        return \"\".concat(minutes, \":\").concat(seconds < 10 ? \"0\" : \"\").concat(seconds);\n    };\n    const downloadAudio = ()=>{\n        const link = document.createElement(\"a\");\n        link.href = _public_resources_chuku_thesedays_tagged_mp3__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n        link.download = \"Chuku - These Days (tagged).mp3\";\n        link.click();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center justify-evenly w-auto h-[84px] p-0 md:px-[18px] mt-5  border-t-[0.2px] border-slate-300 bg-[#fcfcfc]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"audio\", {\n                ref: audioRef,\n                src: _public_resources_chuku_thesedays_tagged_mp3__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n                onTimeUpdate: handleTimeUpdate\n            }, void 0, false, {\n                fileName: \"/Users/andrewnwachuku/content-editor/src/components/MediaPlayer.js\",\n                lineNumber: 111,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-1/8\",\n                children: isPlaying ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    onClick: togglePlayPause,\n                    className: \"cursor-pointer h-16 text-[#1e2546]\"\n                }, void 0, false, {\n                    fileName: \"/Users/andrewnwachuku/content-editor/src/components/MediaPlayer.js\",\n                    lineNumber: 120,\n                    columnNumber: 6\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    onClick: togglePlayPause,\n                    className: \"cursor-pointer h-16 text-[#1e2546]\"\n                }, void 0, false, {\n                    fileName: \"/Users/andrewnwachuku/content-editor/src/components/MediaPlayer.js\",\n                    lineNumber: 125,\n                    columnNumber: 6\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/andrewnwachuku/content-editor/src/components/MediaPlayer.js\",\n                lineNumber: 118,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-[80%] flex flex-col h-full justify-center space-y-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"select-none\",\n                        children: \"Chuku > These Days\"\n                    }, void 0, false, {\n                        fileName: \"/Users/andrewnwachuku/content-editor/src/components/MediaPlayer.js\",\n                        lineNumber: 133,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center justify-between\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                        onClick: handleRewind,\n                                        className: \"cursor-pointer h-4 text-dark-purple mr-4\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/andrewnwachuku/content-editor/src/components/MediaPlayer.js\",\n                                        lineNumber: 136,\n                                        columnNumber: 7\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                        onClick: handleFastForward,\n                                        className: \"cursor-pointer h-4 text-dark-purple\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/andrewnwachuku/content-editor/src/components/MediaPlayer.js\",\n                                        lineNumber: 140,\n                                        columnNumber: 7\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/andrewnwachuku/content-editor/src/components/MediaPlayer.js\",\n                                lineNumber: 135,\n                                columnNumber: 6\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"range\",\n                                step: 0.1,\n                                min: 0,\n                                max: playbackDuration,\n                                value: playbackTime,\n                                onChange: handleScrub,\n                                className: \"mx-2 w-[75%] appearance-none bg-dark-300 rounded-md h-[7px] outline-none\",\n                                style: {\n                                    background: \"linear-gradient(to right, #121628 0%, #121628 \".concat(((_audioRef_current = audioRef.current) === null || _audioRef_current === void 0 ? void 0 : _audioRef_current.currentTime) / ((_audioRef_current1 = audioRef.current) === null || _audioRef_current1 === void 0 ? void 0 : _audioRef_current1.duration) * 100, \"%, #e4e7f5ad \").concat(((_audioRef_current2 = audioRef.current) === null || _audioRef_current2 === void 0 ? void 0 : _audioRef_current2.currentTime) / ((_audioRef_current3 = audioRef.current) === null || _audioRef_current3 === void 0 ? void 0 : _audioRef_current3.duration) * 100, \"%, #e4e7f5ad 100%)\")\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/andrewnwachuku/content-editor/src/components/MediaPlayer.js\",\n                                lineNumber: 145,\n                                columnNumber: 6\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mr-2\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-[0.5rem] sm:text-xs font-roboto font-bold text-light-purple\",\n                                    children: [\n                                        formatTime(playbackTime),\n                                        \" /\",\n                                        \" \",\n                                        formatTime(((_audioRef_current4 = audioRef.current) === null || _audioRef_current4 === void 0 ? void 0 : _audioRef_current4.duration) || 0)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/andrewnwachuku/content-editor/src/components/MediaPlayer.js\",\n                                    lineNumber: 165,\n                                    columnNumber: 7\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/andrewnwachuku/content-editor/src/components/MediaPlayer.js\",\n                                lineNumber: 164,\n                                columnNumber: 6\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/andrewnwachuku/content-editor/src/components/MediaPlayer.js\",\n                        lineNumber: 134,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/andrewnwachuku/content-editor/src/components/MediaPlayer.js\",\n                lineNumber: 132,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col space-y-3 w-1/8 mt-8 mr-3 relative\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    onClick: downloadAudio,\n                    className: \"cursor-pointer h-6 text-light-purple\"\n                }, void 0, false, {\n                    fileName: \"/Users/andrewnwachuku/content-editor/src/components/MediaPlayer.js\",\n                    lineNumber: 174,\n                    columnNumber: 5\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/andrewnwachuku/content-editor/src/components/MediaPlayer.js\",\n                lineNumber: 173,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/andrewnwachuku/content-editor/src/components/MediaPlayer.js\",\n        lineNumber: 110,\n        columnNumber: 3\n    }, undefined);\n};\n_s(MediaPlayer, \"8YZJdPsho+6is+cL9yeXXpYNTlI=\");\n_c = MediaPlayer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MediaPlayer);\nvar _c;\n$RefreshReg$(_c, \"MediaPlayer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2NvbXBvbmVudHMvTWVkaWFQbGF5ZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBRTJEO0FBT3hCO0FBRXNDO0FBRXpFLE1BQU1VLGNBQWM7UUE2SVhDLG1CQUFnQ0Esb0JBR2hDQSxvQkFBZ0NBLG9CQVN0QkE7O0lBeEpsQixNQUFNQSxXQUFXVCw2Q0FBTUEsQ0FBQztJQUN4QixNQUFNLENBQUNVLFdBQVdDLGFBQWEsR0FBR1osK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDYSxjQUFjQyxnQkFBZ0IsR0FBR2QsK0NBQVFBLENBQUM7SUFDakQsTUFBTSxDQUFDZSxrQkFBa0JDLG9CQUFvQixHQUFHaEIsK0NBQVFBLENBQUM7SUFFekRFLGdEQUFTQSxDQUFDO1FBQ1RjLG9CQUFvQk4sU0FBU08sUUFBUUM7SUFDdEM7SUFFQWhCLGdEQUFTQSxDQUFDO1FBQ1QsZ0ZBQWdGO1FBQ2hGLE1BQU1pQixnQkFBZ0IsQ0FBQ0M7WUFDdEIsSUFBSUEsTUFBTUMsUUFBUSxlQUFlRCxNQUFNQyxRQUFRLGNBQWM7Z0JBQzVERCxNQUFNRTtZQUNQO1FBQ0Q7UUFFQUMsU0FBU0MsaUJBQWlCLFdBQVdMO1FBRXJDLE9BQU87WUFDTkksU0FBU0Usb0JBQW9CLFdBQVdOO1FBQ3pDO0lBQ0QsR0FBRyxFQUFFO0lBRUxqQixnREFBU0EsQ0FBQztRQUNULGtGQUFrRjtRQUNsRixNQUFNd0IsYUFBYTtZQUNsQmQsYUFBYTtRQUNkO1FBQ0EsTUFBTWUsY0FBYztZQUNuQmYsYUFBYTtRQUNkO1FBRUFGLFNBQVNPLFFBQVFPLGlCQUFpQixRQUFRRTtRQUMxQ2hCLFNBQVNPLFFBQVFPLGlCQUFpQixTQUFTRztRQUUzQyxPQUFPO1lBQ05qQixTQUFTTyxRQUFRUSxvQkFBb0IsUUFBUUM7WUFDN0NoQixTQUFTTyxRQUFRUSxvQkFBb0IsU0FBU0U7UUFDL0M7SUFDRDtJQUVBLE1BQU1DLGtCQUFrQjtRQUN2QixJQUFJakIsV0FBVztZQUNkRCxTQUFT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OzBDQUdELDhEQUFDa0M7Z0NBQUlDLFdBQVU7MENBQ2QsNEVBQUNNO29DQUFFTixXQUFVOzt3Q0FDWGIsV0FBVzNCO3dDQUFjO3dDQUFHO3dDQUM1QjJCLFdBQVc5QixDQUFBQSxDQUFBQSxxQkFBQUEsU0FBU08scUJBQVRQLGdDQUFBQSxLQUFBQSxJQUFBQSxtQkFBa0JRLFFBQU8sS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQU05Qyw4REFBQ2tDO2dCQUFJQyxXQUFVOzBCQUNkLDRFQUFDaEQsaUVBQWlCQTtvQkFDakJxRCxTQUFTWjtvQkFDVE8sV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLZjtHQXZLTTVDO0tBQUFBO0FBeUtOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL01lZGlhUGxheWVyLmpzP2ZjNGUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG5cdFBsYXlDaXJjbGVJY29uLFxuXHRQYXVzZUNpcmNsZUljb24sXG5cdEFycm93RG93blRyYXlJY29uLFxuXHRBcnJvd1V0dXJuTGVmdEljb24sXG5cdEFycm93VXR1cm5SaWdodEljb24sXG59IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0LzI0L3NvbGlkXCI7XG5cbmltcG9ydCBhdWRpb1NyYyBmcm9tIFwiLi4vLi4vcHVibGljL3Jlc291cmNlcy9jaHVrdV90aGVzZWRheXNfdGFnZ2VkLm1wM1wiO1xuXG5jb25zdCBNZWRpYVBsYXllciA9ICgpID0+IHtcblx0Y29uc3QgYXVkaW9SZWYgPSB1c2VSZWYobnVsbCk7XG5cdGNvbnN0IFtpc1BsYXlpbmcsIHNldElzUGxheWluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cdGNvbnN0IFtwbGF5YmFja1RpbWUsIHNldFBsYXliYWNrVGltZV0gPSB1c2VTdGF0ZSgwKTtcblx0Y29uc3QgW3BsYXliYWNrRHVyYXRpb24sIHNldFBsYXliYWNrRHVyYXRpb25dID0gdXNlU3RhdGUoMCk7XG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRzZXRQbGF5YmFja0R1cmF0aW9uKGF1ZGlvUmVmLmN1cnJlbnQuZHVyYXRpb24pO1xuXHR9KTtcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdC8vIExpc3RlbiBmb3Igd2hlbiBhcnJvdyBrZXlzIGFyZSBwcmVzc2VkIHRvIHByZXZlbnQgZnJvbSBjaGFuZ2luZyBwbGF5YmFjayB0aW1lXG5cdFx0Y29uc3QgaGFuZGxlS2V5RG93biA9IChldmVudCkgPT4ge1xuXHRcdFx0aWYgKGV2ZW50LmtleSA9PT0gXCJBcnJvd0xlZnRcIiB8fCBldmVudC5rZXkgPT09IFwiQXJyb3dSaWdodFwiKSB7XG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGhhbmRsZUtleURvd24pO1xuXG5cdFx0cmV0dXJuICgpID0+IHtcblx0XHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGhhbmRsZUtleURvd24pO1xuXHRcdH07XG5cdH0sIFtdKTtcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdC8vIExpc3RlbiBmb3Igd2hlbiBhdWRpbyBpcyBwYXVzZWQvcGxheWVkIGJ5IGEgc291cmNlIG90aGVyIHRoYW4gY2xpY2tpbmcgdGhlIGljb25cblx0XHRjb25zdCBoYW5kbGVQbGF5ID0gKCkgPT4ge1xuXHRcdFx0c2V0SXNQbGF5aW5nKHRydWUpO1xuXHRcdH07XG5cdFx0Y29uc3QgaGFuZGxlUGF1c2UgPSAoKSA9PiB7XG5cdFx0XHRzZXRJc1BsYXlpbmcoZmFsc2UpO1xuXHRcdH07XG5cblx0XHRhdWRpb1JlZi5jdXJyZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwbGF5XCIsIGhhbmRsZVBsYXkpO1xuXHRcdGF1ZGlvUmVmLmN1cnJlbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBhdXNlXCIsIGhhbmRsZVBhdXNlKTtcblxuXHRcdHJldHVybiAoKSA9PiB7XG5cdFx0XHRhdWRpb1JlZi5jdXJyZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwbGF5XCIsIGhhbmRsZVBsYXkpO1xuXHRcdFx0YXVkaW9SZWYuY3VycmVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicGF1c2VcIiwgaGFuZGxlUGF1c2UpO1xuXHRcdH07XG5cdH0pO1xuXG5cdGNvbnN0IHRvZ2dsZVBsYXlQYXVzZSA9ICgpID0+IHtcblx0XHRpZiAoaXNQbGF5aW5nKSB7XG5cdFx0XHRhdWRpb1JlZi5jdXJyZW50LnBhdXNlKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGF1ZGlvUmVmLmN1cnJlbnQucGxheSgpO1xuXHRcdH1cblx0XHRzZXRJc1BsYXlpbmcoIWlzUGxheWluZyk7XG5cdH07XG5cblx0Y29uc3QgaGFuZGxlVGltZVVwZGF0ZSA9ICgpID0+IHtcblx0XHRzZXRQbGF5YmFja1RpbWUoYXVkaW9SZWYuY3VycmVudC5jdXJyZW50VGltZSk7XG5cdH07XG5cblx0Y29uc3QgaGFuZGxlU2NydWIgPSAoZSkgPT4ge1xuXHRcdGNvbnN0IHNjcnViVGltZSA9IGUudGFyZ2V0LnZhbHVlO1xuXHRcdGF1ZGlvUmVmLmN1cnJlbnQuY3VycmVudFRpbWUgPSBzY3J1YlRpbWU7XG5cdFx0c2V0UGxheWJhY2tUaW1lKHNjcnViVGltZSk7XG5cdH07XG5cblx0Y29uc3QgaGFuZGxlUmV3aW5kID0gKCkgPT4ge1xuXHRcdGlmIChhdWRpb1JlZi5jdXJyZW50LmN1cnJlbnRUaW1lIDwgMTApIHtcblx0XHRcdGF1ZGlvUmVmLmN1cnJlbnQuY3VycmVudFRpbWUgPSAwO1xuXHRcdFx0c2V0UGxheWJhY2tUaW1lKDApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRhdWRpb1JlZi5jdXJyZW50LmN1cnJlbnRUaW1lID0gcGxheWJhY2tUaW1lIC0gMTA7XG5cdFx0XHRzZXRQbGF5YmFja1RpbWUocGxheWJhY2tUaW1lIC0gMTApO1xuXHRcdH1cblx0fTtcblxuXHRjb25zdCBoYW5kbGVGYXN0Rm9yd2FyZCA9ICgpID0+IHtcblx0XHRpZiAoYXVkaW9SZWYuY3VycmVudC5jdXJyZW50VGltZSArIDEwID4gYXVkaW9SZWYuY3VycmVudC5kdXJhdGlvbikge1xuXHRcdFx0YXVkaW9SZWYuY3VycmVudC5jdXJyZW50VGltZSA9IGF1ZGlvUmVmLmN1cnJlbnQuZHVyYXRpb247XG5cdFx0XHRzZXRQbGF5YmFja1RpbWUoYXVkaW9SZWYuY3VycmVudC5kdXJhdGlvbik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGF1ZGlvUmVmLmN1cnJlbnQuY3VycmVudFRpbWUgKz0gMTA7XG5cdFx0XHRzZXRQbGF5YmFja1RpbWUocGxheWJhY2tUaW1lICsgMTApO1xuXHRcdH1cblx0fTtcblxuXHRjb25zdCBmb3JtYXRUaW1lID0gKHRpbWUpID0+IHtcblx0XHRjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcih0aW1lIC8gNjApO1xuXHRcdGNvbnN0IHNlY29uZHMgPSBNYXRoLmZsb29yKHRpbWUgJSA2MCk7XG5cdFx0cmV0dXJuIGAke21pbnV0ZXN9OiR7c2Vjb25kcyA8IDEwID8gXCIwXCIgOiBcIlwifSR7c2Vjb25kc31gO1xuXHR9O1xuXG5cdGNvbnN0IGRvd25sb2FkQXVkaW8gPSAoKSA9PiB7XG5cdFx0Y29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuXHRcdGxpbmsuaHJlZiA9IGF1ZGlvU3JjO1xuXHRcdGxpbmsuZG93bmxvYWQgPSBcIkNodWt1IC0gVGhlc2UgRGF5cyAodGFnZ2VkKS5tcDNcIjtcblx0XHRsaW5rLmNsaWNrKCk7XG5cdH07XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktZXZlbmx5IHctYXV0byBoLVs4NHB4XSBwLTAgbWQ6cHgtWzE4cHhdIG10LTUgIGJvcmRlci10LVswLjJweF0gYm9yZGVyLXNsYXRlLTMwMCBiZy1bI2ZjZmNmY11cIj5cblx0XHRcdDxhdWRpb1xuXHRcdFx0XHRyZWY9e2F1ZGlvUmVmfVxuXHRcdFx0XHRzcmM9e2F1ZGlvU3JjfVxuXHRcdFx0XHRvblRpbWVVcGRhdGU9e2hhbmRsZVRpbWVVcGRhdGV9XG5cdFx0XHRcdC8vIG9uRW5kZWQ9e3RvZ2dsZVBsYXlQYXVzZX1cblx0XHRcdC8+XG5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidy0xLzhcIj5cblx0XHRcdFx0e2lzUGxheWluZyA/IChcblx0XHRcdFx0XHQ8UGF1c2VDaXJjbGVJY29uXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXt0b2dnbGVQbGF5UGF1c2V9XG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciBoLTE2IHRleHQtWyMxZTI1NDZdXCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQpIDogKFxuXHRcdFx0XHRcdDxQbGF5Q2lyY2xlSWNvblxuXHRcdFx0XHRcdFx0b25DbGljaz17dG9nZ2xlUGxheVBhdXNlfVxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgaC0xNiB0ZXh0LVsjMWUyNTQ2XVwiXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0KX1cblx0XHRcdDwvZGl2PlxuXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInctWzgwJV0gZmxleCBmbGV4LWNvbCBoLWZ1bGwganVzdGlmeS1jZW50ZXIgc3BhY2UteS0zXCI+XG5cdFx0XHRcdDxwIGNsYXNzTmFtZT1cInNlbGVjdC1ub25lXCI+e1wiQ2h1a3UgPiBUaGVzZSBEYXlzXCJ9PC9wPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxuXHRcdFx0XHRcdFx0PEFycm93VXR1cm5MZWZ0SWNvblxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXtoYW5kbGVSZXdpbmR9XG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyIGgtNCB0ZXh0LWRhcmstcHVycGxlIG1yLTRcIlxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDxBcnJvd1V0dXJuUmlnaHRJY29uXG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e2hhbmRsZUZhc3RGb3J3YXJkfVxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciBoLTQgdGV4dC1kYXJrLXB1cnBsZVwiXG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0dHlwZT1cInJhbmdlXCJcblx0XHRcdFx0XHRcdHN0ZXA9ezAuMX1cblx0XHRcdFx0XHRcdG1pbj17MH1cblx0XHRcdFx0XHRcdG1heD17cGxheWJhY2tEdXJhdGlvbn1cblx0XHRcdFx0XHRcdHZhbHVlPXtwbGF5YmFja1RpbWV9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlU2NydWJ9XG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJteC0yIHctWzc1JV0gYXBwZWFyYW5jZS1ub25lIGJnLWRhcmstMzAwIHJvdW5kZWQtbWQgaC1bN3B4XSBvdXRsaW5lLW5vbmVcIlxuXHRcdFx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogYGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzEyMTYyOCAwJSwgIzEyMTYyOCAke1xuXHRcdFx0XHRcdFx0XHRcdChhdWRpb1JlZi5jdXJyZW50Py5jdXJyZW50VGltZSAvIGF1ZGlvUmVmLmN1cnJlbnQ/LmR1cmF0aW9uKSAqXG5cdFx0XHRcdFx0XHRcdFx0MTAwXG5cdFx0XHRcdFx0XHRcdH0lLCAjZTRlN2Y1YWQgJHtcblx0XHRcdFx0XHRcdFx0XHQoYXVkaW9SZWYuY3VycmVudD8uY3VycmVudFRpbWUgLyBhdWRpb1JlZi5jdXJyZW50Py5kdXJhdGlvbikgKlxuXHRcdFx0XHRcdFx0XHRcdDEwMFxuXHRcdFx0XHRcdFx0XHR9JSwgI2U0ZTdmNWFkIDEwMCUpYCxcblx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0Lz5cblxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibXItMlwiPlxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidGV4dC1bMC41cmVtXSBzbTp0ZXh0LXhzIGZvbnQtcm9ib3RvIGZvbnQtYm9sZCB0ZXh0LWxpZ2h0LXB1cnBsZVwiPlxuXHRcdFx0XHRcdFx0XHR7Zm9ybWF0VGltZShwbGF5YmFja1RpbWUpfSAve1wiIFwifVxuXHRcdFx0XHRcdFx0XHR7Zm9ybWF0VGltZShhdWRpb1JlZi5jdXJyZW50Py5kdXJhdGlvbiB8fCAwKX1cblx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHNwYWNlLXktMyB3LTEvOCBtdC04IG1yLTMgcmVsYXRpdmVcIj5cblx0XHRcdFx0PEFycm93RG93blRyYXlJY29uXG5cdFx0XHRcdFx0b25DbGljaz17ZG93bmxvYWRBdWRpb31cblx0XHRcdFx0XHRjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciBoLTYgdGV4dC1saWdodC1wdXJwbGVcIlxuXHRcdFx0XHQvPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNZWRpYVBsYXllcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiUGxheUNpcmNsZUljb24iLCJQYXVzZUNpcmNsZUljb24iLCJBcnJvd0Rvd25UcmF5SWNvbiIsIkFycm93VXR1cm5MZWZ0SWNvbiIsIkFycm93VXR1cm5SaWdodEljb24iLCJhdWRpb1NyYyIsIk1lZGlhUGxheWVyIiwiYXVkaW9SZWYiLCJpc1BsYXlpbmciLCJzZXRJc1BsYXlpbmciLCJwbGF5YmFja1RpbWUiLCJzZXRQbGF5YmFja1RpbWUiLCJwbGF5YmFja0R1cmF0aW9uIiwic2V0UGxheWJhY2tEdXJhdGlvbiIsImN1cnJlbnQiLCJkdXJhdGlvbiIsImhhbmRsZUtleURvd24iLCJldmVudCIsImtleSIsInByZXZlbnREZWZhdWx0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImhhbmRsZVBsYXkiLCJoYW5kbGVQYXVzZSIsInRvZ2dsZVBsYXlQYXVzZSIsInBhdXNlIiwicGxheSIsImhhbmRsZVRpbWVVcGRhdGUiLCJjdXJyZW50VGltZSIsImhhbmRsZVNjcnViIiwiZSIsInNjcnViVGltZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlUmV3aW5kIiwiaGFuZGxlRmFzdEZvcndhcmQiLCJmb3JtYXRUaW1lIiwidGltZSIsIm1pbnV0ZXMiLCJNYXRoIiwiZmxvb3IiLCJzZWNvbmRzIiwiZG93bmxvYWRBdWRpbyIsImxpbmsiLCJjcmVhdGVFbGVtZW50IiwiaHJlZiIsImRvd25sb2FkIiwiY2xpY2siLCJkaXYiLCJjbGFzc05hbWUiLCJhdWRpbyIsInJlZiIsInNyYyIsIm9uVGltZVVwZGF0ZSIsIm9uQ2xpY2siLCJwIiwiaW5wdXQiLCJ0eXBlIiwic3RlcCIsIm1pbiIsIm1heCIsIm9uQ2hhbmdlIiwic3R5bGUiLCJiYWNrZ3JvdW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./src/components/MediaPlayer.js\n"));

/***/ })

});