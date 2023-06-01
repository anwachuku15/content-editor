"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowPathIcon, SunIcon } from "@heroicons/react/24/solid";
import { generateScript } from "@/utils/generateScript";

const ScriptEditor = () => {
	const title =
		"Reverse Turing: Imagine a future world where Chat GPT is sentient and possesses a level of consciousness and self-awareness similar to that of a human being. This would mark a significant milestone in the evolution of artificial intelligence (AI) and raise profound questions about the nature of intelligence, consciousness, and the ethical considerations surrounding sentient machines. - This is a Chat GPT generated paragraph.";

	const [script, setScript] = useState("");
	const textareaRef = useRef(null);
	useEffect(() => {
		const textarea = textareaRef.current;
		const scrollDelay = 10;
		const handleInput = () => {
			setTimeout(() => {
				textarea.scrollTop = textarea.scrollHeight;
			}, scrollDelay);
		};
		textarea.addEventListener("input", handleInput);
		return () => {
			textarea.removeEventListener("input", handleInput);
		};
	}, []);

	const minWords = 5000;
	const maxWords = 10000;
	const remainingWords =
		maxWords - script.split(/\s+/).filter((word) => word != "").length;

	const timeLimit = 3600000; // 1 hour

	const regenerateScript = () => {
		const _script = generateScript();
		setScript(_script);
	};

	const placeholderText =
		"To get started, click Regenerate Script to generate some Lorem Ipsum text or just start typing! \n\nEnjoy the placeholder audio :)";
	return (
		<>
			<header className="flex h-[36px] w-[90%] px-2 mx-3 mt-3 mb-2 justify-start">
				<h1 className="text-xl text-gray-950 truncate select-none">{title}</h1>
			</header>

			{/* Scrollable Textarea: deleted h-2/3 */}
			<div className="flex-grow overflow-y-auto w-auto mx-3 rounded-md border-[1px] border-slate-600 ">
				<textarea
					ref={textareaRef}
					className="w-full h-full p-4 focus:outline-none resize-none"
					value={script}
					onChange={(e) => setScript(e.target.value)}
					placeholder={placeholderText}
				/>
			</div>

			{/* QUOTA */}
			<div className="flex justify-between w-auto mx-3 text-xs md:text-sm lg:text-base">
				<div>
					<p className="font-comic font-bold text-gray-400">
						~{remainingWords} words left in your quota
					</p>
				</div>
				<div>
					<p className="font-comic font-bold text-gray-400">
						~23 minutes left in your quota
					</p>
				</div>
			</div>

			{/* Buttons */}
			<div className="flex justify-between w-auto mx-3 items-center">
				<button
					className="flex items-center justify-between px-4 py-2 focus:outline-none bg-[#9e9cae] text-black rounded"
					onClick={regenerateScript}
				>
					<ArrowPathIcon className="h-4 mr-2 rotate-[45deg] transform scale-y-[-1]" />
					<p className=" font-nunito font-semibold text-sm">
						Regenerate Script
					</p>
				</button>
				<button className="flex items-center justify-between px-4 py-2 focus:outline-none bg-light-purple text-white rounded">
					<p className="font-nunito font-semibold text-sm">Generate Audio</p>
					<SunIcon className="h-4 ml-2" />
				</button>
			</div>
		</>
	);
};

export default ScriptEditor;
