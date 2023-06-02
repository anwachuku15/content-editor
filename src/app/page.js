"use client";

import React, { useState, useEffect } from "react";
import Editor from "@/components/Editor";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import BottomBar from "@/components/BottomBar";
import { StateProvider } from "@/context/StateProvider";
import { initialState, reducer } from "@/context/reducer";

export default function Home() {
	return (
		<StateProvider initialState={initialState} reducer={reducer}>
			<div className="flex flex-col h-screen overflow-hidden bg-dark-purple">
				<Header />
				<div className="flex flex-grow">
					<Sidebar />
					<Editor />
				</div>
				<BottomBar />
			</div>
		</StateProvider>
	);
}
