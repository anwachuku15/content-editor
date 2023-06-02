"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
	AdjustmentsHorizontalIcon,
	UserIcon,
	XMarkIcon,
	ChevronDownIcon,
} from "@heroicons/react/24/solid";
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

const SettingsPanel = () => {
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

	return (
		<div
			className={`hidden md:block flex-col z-10 overflow-hidden ${
				state.isSettingsOpen ? "w-[35%] mr-[24px] ml-[16px]" : "w-[0px]"
			} duration-300 `}
		>
			{/* SETTINGS HEADER */}
			<div
				className={`flex flex-row mt-3 mr-3 mb-2 w-full justify-between items-center duration-300 ${
					!state.isSettingsOpen && "scale-0"
				}`}
			>
				<h1 className="text-light-purple text-lg xl:text-xl select-none">
					Script Generation Settings
				</h1>
				<div
					onClick={() => dispatch(closeSettings())}
					className="flex align-middle cursor-pointer"
				>
					<XMarkIcon className="h-5 w-5 text-gray-400" />
				</div>
			</div>

			{/* MENU ITEMS */}
			<div className={`${!state.isSettingsOpen && "scale-0"} duration-300`}>
				{settings.map((setting, index) => (
					<div key={index}>
						<div className="h-[0.1px] bg-divider mt-4 mb-2" />
						<div>
							<div
								onClick={() => setting.setIsOpen(!setting.isOpen)}
								className="cursor-pointer flex justify-between mb-2"
							>
								<p className="text-stone-400 text-[0.8rem] font-bold font-open-sans select-none ml-[0.4rem]">
									{setting.name}
								</p>
								<div className={`cursor-pointer`}>
									<ChevronDownIcon
										className={`h-4 w-4 text-gray-400 ${
											setting.isOpen && "-rotate-180"
										} duration-300`}
									/>
								</div>
							</div>

							<motion.div
								initial={{ height: 0 }}
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
										className={`bg-gray-300 rounded-sm ml-1 h-8 w-1/6 text-xs ${
											state.targetInput.trim().length < 1
												? "text-gray-400"
												: "text-gray-700"
										}`}
									>
										Add
									</button>
								</form>

								<div
									className={`flex flex-wrap mt-3 bg-[#0f1120] rounded-md ${
										state.targets.length > 0 && "p-2"
									}`}
								>
									{state.targets.map((target, index) => (
										<div
											key={index}
											className="flex flex-wrap max-w-fit items-center mr-2 mb-2 py-0.5 px-[0.4rem] bg-chip-bg rounded-xl"
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
					</div>
				))}
			</div>
		</div>
	);
};

export default SettingsPanel;
