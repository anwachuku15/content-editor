"use client";

import MediaPlayer from "./MediaPlayer";
import ScriptEditor from "./ScriptEditor";

const Editor = () => {
	return (
		<div className="flex flex-col w-screen mb-8 md:mr-14 md:ml-0 mx-6 truncate bg-white rounded-md">
			<ScriptEditor />
			<MediaPlayer />
		</div>
	);
};

export default Editor;
