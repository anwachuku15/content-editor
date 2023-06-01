"use client";

import React, { useState, useEffect } from "react";
import Editor from "@/components/Editor";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import MediaPlayer from "@/components/MediaPlayer";
import BottomNav from "@/components/BottomNav";
import { StateProvider } from "@/context/StateProvider";
import { initialState, reducer } from "@/context/reducer";

export default function Home() {
	return (
		<StateProvider initialState={initialState} reducer={reducer}>
			<div className="flex flex-col bg-dark-purple h-screen overflow-hidden">
				<Header />
				<div className="flex h-full">
					<Sidebar />
					<Editor />
				</div>
				<BottomNav />
			</div>
		</StateProvider>
	);
}
