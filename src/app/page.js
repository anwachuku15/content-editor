"use client";

import React, { useState, useEffect } from "react";
import Editor from "@/components/Editor";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import { StateProvider } from "@/context/StateProvider";
import { initialState, reducer } from "@/context/reducer";

export default function Home() {
	return (
		<StateProvider initialState={initialState} reducer={reducer}>
			<div className="flex flex-col sm:h-screen h-[90vh] overflow-hidden bg-dark-purple">
				<Header />
				<Topbar />
				<div className="flex flex-grow">
					<Sidebar />
					<Editor />
				</div>
			</div>
		</StateProvider>
	);
}
