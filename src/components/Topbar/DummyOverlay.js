"use client";

import React from "react";
import { motion } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useStateValue } from "@/context/StateProvider";
import { closeDummyPanel } from "@/context/actions";

const DummyOverlay = () => {
	const [state, dispatch] = useStateValue();

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50"
			onClick={() => dispatch(closeDummyPanel())}
		>
			<motion.div
				initial={{ scale: 0 }}
				animate={{ scale: 1 }}
				exit={{ scale: 0 }}
				className="bg-dark-purple rounded-lg min-w-[80%] "
				onClick={(e) => e.stopPropagation()}
			>
				<div className="mt-4 pb-4 mx-[15px]">
					<div
						className={`flex flex-row mt-3 mr-3 mb-2 w-full justify-between items-center duration-300 ${
							!state.isSpeakerOpen && "scale-0"
						}`}
					>
						<h1 className="text-light-purple text-lg xl:text-xl select-none">
							Voice Settings
						</h1>
						<div
							onClick={() => dispatch(closeDummyPanel())}
							className="flex align-middle cursor-pointer"
						>
							<XMarkIcon className="h-5 w-5 black" />
						</div>
					</div>
					<div>
						<h1 className="text-white">Dummy content goes here</h1>
					</div>
				</div>
			</motion.div>
		</motion.div>
	);
};

export default DummyOverlay;
