"use client";

import { motion } from "framer-motion";
import { XMarkIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import { useStateValue } from "@/context/StateProvider";
import { closeDummyPanel } from "@/context/actions";

const DummyPanel = () => {
	const [state, dispatch] = useStateValue();

	return (
		<div
			className={`hidden md:block flex-col z-10 overflow-hidden ${
				state.isSpeakerOpen ? "w-[35%] mr-[24px] ml-[16px]" : "w-[0px]"
			} duration-300 `}
		>
			{/* DUMMY HEADER */}
			<div
				className={`flex flex-row mt-3 mr-3 mb-2 w-full justify-between items-center duration-300 ${
					!state.isSpeakerOpen && "scale-0"
				}`}
			>
				<h1 className="text-light-purple text-lg xl:text-xl select-none">
					Dummy Panel
				</h1>
				<div
					onClick={() => dispatch(closeDummyPanel())}
					className="flex align-middle cursor-pointer"
				>
					<XMarkIcon className="h-5 w-5 black" />
				</div>
			</div>
			<div className={`${!state.isSpeakerOpen && "scale-0"} duration-300`}>
				<h1 className="text-white">Dummy content goes here</h1>
			</div>
		</div>
	);
};

export default DummyPanel;
