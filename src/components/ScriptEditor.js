"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowPathIcon, SunIcon } from "@heroicons/react/24/solid";
import { paragraphs, title, placeholderText } from "@/constants/textarea-dummy";

const ScriptEditor = () => {
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

	const remainingWords =
		10000 - script.split(/\s+/).filter((word) => word != "").length;

	const regenerateScript = () => {
		const randomIndex = Math.floor(Math.random() * paragraphs.length);
		setScript(paragraphs[randomIndex]);
	};

	const formatNumber = (number) => {
		return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
	};

	return (
		<>
			<header className="flex h-[36px] w-[90%] px-2 mx-3 mt-3 mb-2 justify-start">
				<h1 className="text-xl text-gray-950 truncate select-none">{title}</h1>
			</header>

			{/* Scrollable Textarea */}
			<div className="flex-grow overflow-y-auto w-auto mx-3 rounded-md border-[1px] border-gray-300 ">
				<textarea
					ref={textareaRef}
					className="w-full h-full p-4 focus:outline-none resize-none"
					value={script}
					onChange={(e) => setScript(e.target.value)}
					placeholder={placeholderText}
				/>
			</div>

			{/* QUOTA */}
			<div className="flex justify-between w-auto mt-1 mx-3 text-[0.55rem] sm:text-xs md:text-sm lg:text-base">
				<div className="">
					<p className="font-nunito font-semibold text-gray-300">
						~{formatNumber(remainingWords)} words left in your quota
					</p>
				</div>
				<div className=" ">
					<p className="font-nunito font-semibold text-gray-300">
						~23 minutes left in your quota
					</p>
				</div>
			</div>

			{/* Buttons */}
			<div className="flex justify-between w-auto mx-3 mt-3 items-center">
				<button
					className="flex items-center justify-between px-1 sm:px-4 py-2 focus:outline-none bg-[#9e9cae] text-black rounded"
					onClick={regenerateScript}
				>
					<ArrowPathIcon className="h-4 mr-2 rotate-[45deg] transform scale-y-[-1]" />
					<p className=" font-nunito font-semibold text-xs sm:text-sm">
						Regenerate Script
					</p>
				</button>
				<button className="flex items-center justify-between px-1 sm:px-4 py-2 focus:outline-none bg-light-purple text-white rounded">
					<p className="font-nunito font-semibold text-xs sm:text-sm">
						Generate Audio
					</p>
					<SunIcon className="h-4 ml-2" />
				</button>
			</div>
		</>
	);
};

export default ScriptEditor;
