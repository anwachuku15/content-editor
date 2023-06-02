"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { XMarkIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import { useStateValue } from "@/context/StateProvider";
import {
	setTargetInput,
	addTarget,
	removeTarget,
	setContentThemeOpen,
	setToneDurationOpen,
	setTargetAudiencesOpen,
	setDescriptiveWordsOpen,
	setFineTuningOpen,
	closeSettings,
	setIsSettingsOpen,
	setIsSpeakerOpen,
} from "@/context/actions";

const Overlay = () => {
	const [state, dispatch] = useStateValue();

	const settings = [
		{
			name: "Content Theme",
			isOpen: state.isContentThemeOpen,
			setIsOpen: () => dispatch(setContentThemeOpen()),
		},
		{
			name: "Tone and Duration",
			isOpen: state.isToneDurationOpen,
			setIsOpen: () => dispatch(setToneDurationOpen()),
		},
		{
			name: "Target Audiences",
			isOpen: state.isTargetAudiencesOpen,
			setIsOpen: () => dispatch(setTargetAudiencesOpen()),
		},
		{
			name: "Descriptive Keywords",
			isOpen: state.isDescriptiveWordsOpen,
			setIsOpen: () => dispatch(setDescriptiveWordsOpen()),
		},
		{
			name: "Fine-Tuning",
			isOpen: state.isFineTuningOpen,
			setIsOpen: () => dispatch(setFineTuningOpen()),
		},
	];

	const [isMounted, setIsMounted] = useState(false);
	useEffect(() => {
		setIsMounted(true);
	}, []);

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50"
			onClick={() => dispatch(closeSettings())}
		>
			<motion.div
				initial={{ scale: 0 }}
				animate={{ scale: 1 }}
				exit={{ scale: 0 }}
				className="bg-dark-purple rounded-lg min-w-[80%] "
				onClick={(e) => e.stopPropagation()}
			>
				<div className="mt-4 pb-4 mx-[15px]">
					{/* SETTINGS HEADER */}
					<div className={`flex px-3 mb-2 justify-between items-center`}>
						<div className="flex">
							<XMarkIcon className="h-6 w-6 text-transparent" />
						</div>
						<h1 className="text-light-purple text-xl select-none">
							Script Generation Settings
						</h1>
						<div
							onClick={() => dispatch(closeSettings())}
							className="flex cursor-pointer"
						>
							<XMarkIcon className="h-6 w-6 text-gray-400" />
						</div>
					</div>

					{/* MENU ITEMS */}
					<div>
						{settings.map((setting, index) => (
							<div key={index}>
								<div className="h-[0.1px] bg-divider mt-4 mb-2" />
								<div>
									<div className="flex justify-between mb-2">
										<p className="text-stone-400 select-none">{setting.name}</p>
										<div
											onClick={() => setting.setIsOpen(!setting.isOpen)}
											className={`cursor-pointer`}
										>
											<ChevronDownIcon
												className={`h-5 w-5 text-gray-400 ${
													setting.isOpen && "-rotate-180"
												} duration-300`}
											/>
										</div>
									</div>
								</div>
								<motion.div
									initial={isMounted ? { height: 0 } : false}
									animate={
										setting.isOpen ? { height: "fit-content" } : { height: 0 }
									}
									className="overflow-hidden"
								>
									<form className="flex justify-between w-11/12">
										<input
											type="text"
											value={state.targetInput}
											onChange={(e) => {
												dispatch(setTargetInput(e.target.value));
											}}
											className="rounded-sm h-8 w-5/6 focus:outline-none p-1"
										/>
										<button
											onClick={() => dispatch(addTarget())}
											disabled={state.targetInput.trim().length === 0}
											className={`bg-gray-300 rounded-sm ml-1 h-8 w-1/6 text-sm ${
												state.targetInput.trim().length < 1
													? "text-gray-400"
													: "text-gray-700"
											}`}
										>
											Add
										</button>
									</form>

									{/* CHIPS deleted chip container bg bg-[#0f1120] */}
									<div
										className={`flex flex-wrap mt-3 bg-[#0f1120] rounded-md ${
											state.targets.length > 0 && "p-2"
										}`}
									>
										{state.targets.map((target, index) => (
											<div
												key={index}
												className="flex flex-wrap max-w-fit items-center mr-2 mb-2 p-0.5 pl-1 pr-1 bg-chip-bg rounded-xl"
											>
												<p className="mr-1 text-chip-text text-[0.7rem] text-clip font-medium">
													{target}
												</p>
												<XMarkIcon
													onClick={() => dispatch(removeTarget(index))}
													className="cursor-pointer h-3 w-3 text-gray-600"
												/>
											</div>
										))}
									</div>
								</motion.div>
							</div>
						))}
					</div>
				</div>
			</motion.div>
		</motion.div>
	);
};

export default Overlay;
