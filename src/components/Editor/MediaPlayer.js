"use client";

import React, { useState, useRef, useEffect } from "react";
import {
	PlayCircleIcon,
	PauseCircleIcon,
	ArrowDownTrayIcon,
	ArrowUturnLeftIcon,
	ArrowUturnRightIcon,
} from "@heroicons/react/24/solid";

import audioSrc from "../../../public/resources/chuku_thesedays_tagged.mp3";

const MediaPlayer = () => {
	const audioRef = useRef(null);
	const [isPlaying, setIsPlaying] = useState(false);
	const [playbackTime, setPlaybackTime] = useState(0);
	const [playbackDuration, setPlaybackDuration] = useState(0);

	useEffect(() => {
		setPlaybackDuration(audioRef.current.duration);
	});

	useEffect(() => {
		// Listen for when arrow keys are pressed to prevent from changing playback time
		const handleKeyDown = (event) => {
			if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
				event.preventDefault();
			}
		};

		document.addEventListener("keydown", handleKeyDown);

		return () => {
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, []);

	useEffect(() => {
		// Listen for when audio is paused/played by a source other than clicking the icon
		const handlePlay = () => {
			setIsPlaying(true);
		};
		const handlePause = () => {
			setIsPlaying(false);
		};

		audioRef.current.addEventListener("play", handlePlay);
		audioRef.current.addEventListener("pause", handlePause);

		return () => {
			audioRef.current.removeEventListener("play", handlePlay);
			audioRef.current.removeEventListener("pause", handlePause);
		};
	});

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

	const downloadAudio = () => {
		const link = document.createElement("a");
		link.href = audioSrc;
		link.download = "Chuku - These Days (tagged).mp3";
		link.click();
	};

	return (
		<div className="flex items-center justify-evenly w-auto h-[84px] p-0 md:px-[18px] mt-5  border-t-[0.2px] border-slate-300 bg-[#fcfcfc]">
			<audio ref={audioRef} src={audioSrc} onTimeUpdate={handleTimeUpdate} />

			<div className="w-1/8">
				{isPlaying ? (
					<PauseCircleIcon
						onClick={togglePlayPause}
						className="cursor-pointer h-16 text-[#1e2546]"
					/>
				) : (
					<PlayCircleIcon
						onClick={togglePlayPause}
						className="cursor-pointer h-16 text-[#1e2546]"
					/>
				)}
			</div>

			<div className="w-[80%] flex flex-col h-full justify-center space-y-3">
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
						step={0.1}
						min={0}
						max={playbackDuration}
						value={playbackTime}
						onChange={handleScrub}
						className="mx-2 w-[75%] appearance-none bg-dark-300 rounded-md h-[7px] outline-none"
						style={{
							background: `linear-gradient(to right, #121628 0%, #121628 ${
								(audioRef.current?.currentTime / audioRef.current?.duration) *
								100
							}%, #e4e7f5ad ${
								(audioRef.current?.currentTime / audioRef.current?.duration) *
								100
							}%, #e4e7f5ad 100%)`,
						}}
					/>

					<div className="mr-2">
						<p className="text-[0.55rem] sm:text-xs font-roboto font-bold text-light-purple">
							{formatTime(playbackTime)} / {formatTime(playbackDuration || 0)}
						</p>
					</div>
				</div>
			</div>

			<div className="flex flex-col space-y-3 w-1/8 mt-8 mr-3 relative">
				<ArrowDownTrayIcon
					onClick={downloadAudio}
					className="cursor-pointer h-4 sm:h-5 text-light-purple"
				/>
			</div>
		</div>
	);
};

export default MediaPlayer;
