"use client";

import React, { useState, useRef, useEffect } from "react";
import {
	PlayCircleIcon,
	PauseCircleIcon,
	ArrowDownTrayIcon,
	ArrowUturnLeftIcon,
	ArrowUturnRightIcon,
} from "@heroicons/react/24/solid";

import audioSrc from "../../public/resources/chuku_thesedays_tagged.mp3";

const MediaPlayer = () => {
	const audioRef = useRef(null);
	const [isPlaying, setIsPlaying] = useState(false);
	const [playbackTime, setPlaybackTime] = useState(0);

	const togglePlayPause = () => {
		if (isPlaying) {
			audioRef.current.pause();
		} else {
			audioRef.current.play();
		}
		setIsPlaying(!isPlaying);
	};

	const handleTimeUpdate = () => {
		setPlaybackTime(audioRef.current.currentTime);
	};

	const handleScrub = (e) => {
		const scrubTime = e.target.value;
		audioRef.current.currentTime = scrubTime;
		setPlaybackTime(scrubTime);
	};

	const handleRewind = () => {
		if (audioRef.current.currentTime < 10) {
			audioRef.current.currentTime = 0;
			setPlaybackTime(0);
		} else {
			audioRef.current.currentTime = playbackTime - 10;
			setPlaybackTime(playbackTime - 10);
		}
	};

	const handleFastForward = () => {
		if (audioRef.current.currentTime + 10 > audioRef.current.duration) {
			audioRef.current.currentTime = audioRef.current.duration;
			setPlaybackTime(audioRef.current.duration);
		} else {
			audioRef.current.currentTime += 10;
			setPlaybackTime(playbackTime + 10);
		}
	};

	const formatTime = (time) => {
		const minutes = Math.floor(time / 60);
		const seconds = Math.floor(time % 60);
		return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
	};

	return (
		<div className="flex items-center justify-center w-auto h-[78px] p-0 md:p-[18px] mt-4  border-t-[0.2px] border-slate-300 bg-[#fcfcfc]">
			<audio
				ref={audioRef}
				src={audioSrc}
				onTimeUpdate={handleTimeUpdate}
				onEnded={togglePlayPause}
			/>

			<div className="w-1/8 mr-3">
				{isPlaying ? (
					<PauseCircleIcon
						onClick={togglePlayPause}
						className="cursor-pointer h-14 text-dark-purple"
					/>
				) : (
					<PlayCircleIcon
						onClick={togglePlayPause}
						className="cursor-pointer h-14 text-dark-purple"
					/>
				)}
			</div>

			<div className="w-[88%]">
				<p className="select-none">{"Chuku > These Days"}</p>
				<div className="flex items-center justify-between">
					<div className="flex">
						<ArrowUturnLeftIcon
							onClick={handleRewind}
							className="cursor-pointer h-4 text-dark-purple mr-4"
						/>
						<ArrowUturnRightIcon
							onClick={handleFastForward}
							className="cursor-pointer h-4 text-dark-purple"
						/>
					</div>
					<input
						type="range"
						min={0}
						max={audioRef.current ? audioRef.current.duration : 0}
						value={playbackTime}
						onChange={handleScrub}
						className="mx-2 w-[80%]"
					/>

					<div className="mr-2">
						<p className="text-xs">
							{formatTime(playbackTime)} /{" "}
							{formatTime(audioRef.current?.duration || 0)}
						</p>
					</div>
				</div>
			</div>

			<div className="flex w-1/8 relative">
				<ArrowDownTrayIcon className="cursor-pointer h-6" />
			</div>
		</div>
	);
};

export default MediaPlayer;
