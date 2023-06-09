"use client";

import React, { useState, useEffect } from "react";
import { AdjustmentsHorizontalIcon, UserIcon } from "@heroicons/react/24/solid";
import SettingsOverlay from "./SettingsOverlay";
import DummyOverlay from "./DummyOverlay";
import { useStateValue } from "@/context/StateProvider";
import { setIsSettingsOpen, setIsSpeakerOpen } from "@/context/actions";

const Topbar = () => {
	const [state, dispatch] = useStateValue();
	const [windowWidth, setWindowWidth] = useState();

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};
		window.addEventListener("resize", handleResize);
		setWindowWidth(window.innerWidth);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<>
			{state.isSettingsOpen && windowWidth < 768 && <SettingsOverlay />}
			{state.isSpeakerOpen && windowWidth < 768 && <DummyOverlay />}

			<div className="flex items-center h-[48px] sm:h-[60px] md:hidden  justify-evenly">
				<div
					onClick={() => dispatch(setIsSettingsOpen())}
					className={`cursor-pointer flex items-center justify-center rounded-md h-9 w-9 duration-100 ${
						state.isSettingsOpen ? "bg-light-purple" : "transparent"
					}`}
				>
					<AdjustmentsHorizontalIcon
						className={`h-6 w-6 ${
							state.isSettingsOpen ? "text-white" : "text-light-purple"
						}`}
					/>
				</div>

				<div
					onClick={() => dispatch(setIsSpeakerOpen())}
					className={`flex items-center justify-center rounded-md h-9 w-9 cursor-pointer duration-100 ${
						state.isSpeakerOpen ? "bg-light-purple" : "transparent"
					}`}
				>
					<UserIcon
						className={`h-6 w-6 ${
							state.isSpeakerOpen ? "text-white" : "text-light-purple"
						}`}
					/>
				</div>
			</div>
		</>
	);
};

export default Topbar;
