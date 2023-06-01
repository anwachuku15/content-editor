export const SET_IS_SETTINGS_OPEN = "SET_IS_SETTINGS_OPEN";
export const CLOSE_SETTINGS = "CLOSE_SETTINGS";
export const IS_SPEAKER_OPEN = "IS_SPEAKER_OPEN";
export const IS_CONTENT_THEME_OPEN = "IS_CONTENT_THEME_OPEN";
export const IS_TONE_DURATION_OPEN = "IS_TONE_DURATION_OPEN";
export const IS_TARGET_AUDIENCES_OPEN = "IS_TARGET_AUDIENCES_OPEN";
export const IS_DESCRIPTIVE_WORDS_OPEN = "IS_DESCRIPTIVE_WORDS_OPEN";
export const IS_FINE_TUNING_OPEN = "IS_FINE_TUNING_OPEN";

export const setIsSettingsOpen = () => {
	return {
		type: "SET_IS_SETTINGS_OPEN",
	};
};

export const closeSettings = () => {
	return {
		type: "CLOSE_SETTINGS",
	};
};

export const setIsSpeakerOpen = () => {
	return {
		type: "IS_SPEAKER_OPEN",
	};
};

export const setContentThemeOpen = () => {
	return {
		type: "IS_CONTENT_THEME_OPEN",
	};
};

export const setToneDurationOpen = () => {
	return {
		type: "IS_TONE_DURATION_OPEN",
	};
};

export const setTargetAudiencesOpen = () => {
	return {
		type: "IS_TARGET_AUDIENCES_OPEN",
	};
};

export const setDescriptiveWordsOpen = () => {
	return {
		type: "IS_DESCRIPTIVE_WORDS_OPEN",
	};
};

export const setFineTuningOpen = () => {
	return {
		type: "IS_FINE_TUNING_OPEN",
	};
};

export const setTargetInput = (value) => {
	return {
		type: "SET_TARGET_INPUT",
		targetInput: value,
	};
};

export const addTarget = () => {
	return {
		type: "ADD_TARGET",
	};
};

export const removeTarget = (index) => {
	return {
		type: "REMOVE_TARGET",
		index: index,
	};
};
