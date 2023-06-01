"use client";

import { dummytext } from "@/constants/textarea-dummy";
import { useEffect, useRef, useState } from "react";
import { ArrowPathIcon, SunIcon } from "@heroicons/react/24/solid";
import { generateScript } from "@/utils/generateScript";
import MediaPlayer from "./MediaPlayer";
import ScriptEditor from "./ScriptEditor";

const Editor = () => {
	return (
		<div className="flex flex-col w-screen mb-12 md:mr-14 md:ml-0 mx-6 truncate bg-white  rounded-md">
			<ScriptEditor />
			<MediaPlayer />
		</div>
	);
};

export default Editor;
