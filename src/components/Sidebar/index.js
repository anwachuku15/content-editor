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
import SettingsPanel from "./SettingsPanel";

const Sidebar = () => {
	const [isMounted, setIsMounted] = useState(false);
	const [state, dispatch] = useStateValue();

	useEffect(() => {
		setIsMounted(true);
	}, []);

	return (
		<>
			{/* FIXED SIDEBAR */}
			<div className="hidden md:block flex-col bg-dark-purple items-center p-3 pt-3 relative w-14 z-50">
				<div
					onClick={() => dispatch(setIsSettingsOpen())}
					className={`flex items-center justify-center rounded-md h-9 w-9 ${
						state.isSettingsOpen ? "bg-light-purple" : "transparent"
					} duration-100 cursor-pointer`}
				>
					<AdjustmentsHorizontalIcon className="h-6 w-6 text-white" />
				</div>
				<div
					onClick={() => dispatch(setIsSpeakerOpen())}
					className={`mt-8 flex items-center justify-center rounded-md h-9 w-9 ${
						state.isSpeakerOpen ? "bg-light-purple" : "transparent"
					} duration-100 cursor-pointer`}
				>
					<UserIcon className="h-6 w-6 text-white " />
				</div>
			</div>

			<SettingsPanel />
		</>
	);
};

export default Sidebar;
