"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { UserCircleIcon } from "@heroicons/react/24/outline";
const Header = () => {
	return (
		<div className="flex flex-row justify-between items-center px-4 py-2  h-[72px] text-2xl">
			<div className="flex">
				<SparklesIcon className="text-yellow-600 h-6 mr-3" />
				<h1 className="select-none text-white font-normal">YourContent.</h1>
				<h1 className="select-none text-light-purple">ai</h1>
			</div>

			<div>
				<UserCircleIcon className="cursor-pointer h-8 w-8 text-white" />
			</div>
		</div>
	);
};

export default Header;
