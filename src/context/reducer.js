export const initialState = {
	isSettingsOpen: true,
	isSpeakerOpen: false,
	isContentThemeOpen: false,
	isToneDurationOpen: false,
	isTargetAudiencesOpen: false,
	isDescriptiveWordsOpen: false,
	isFineTuningOpen: false,
	targetInput: "",
	targets: [],
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case "SET_IS_SETTINGS_OPEN":
			return {
				...state,
				isSpeakerOpen: false,
				isSettingsOpen: !state.isSettingsOpen,
			};
		case "CLOSE_SETTINGS":
			return {
				...state,
				isSettingsOpen: false,
			};
		case "IS_SPEAKER_OPEN":
			return {
				...state,
				isSettingsOpen: false,
				isSpeakerOpen: !state.isSpeakerOpen,
			};
		case "CLOSE_DUMMY_PANEL":
			return {
				...state,
				isSpeakerOpen: false,
			};
		case "IS_CONTENT_THEME_OPEN":
			return {
				...state,
				isContentThemeOpen: !state.isContentThemeOpen,
			};
		case "IS_TONE_DURATION_OPEN":
			return {
				...state,
				isToneDurationOpen: !state.isToneDurationOpen,
			};
		case "IS_TARGET_AUDIENCES_OPEN":
			return {
				...state,
				isTargetAudiencesOpen: !state.isTargetAudiencesOpen,
			};
		case "IS_DESCRIPTIVE_WORDS_OPEN":
			return {
				...state,
				isDescriptiveWordsOpen: !state.isDescriptiveWordsOpen,
			};
		case "IS_FINE_TUNING_OPEN":
			return {
				...state,
				isFineTuningOpen: !state.isFineTuningOpen,
			};
		case "SET_TARGET_INPUT":
			return {
				...state,
				targetInput: action.targetInput,
			};
		case "ADD_TARGET":
			return {
				...state,
				targets: [...state.targets, state.targetInput.trim()],
				targetInput: "",
			};
		case "REMOVE_TARGET":
			const _targets = [...state.targets];
			_targets.splice(action.index, 1);
			return {
				...state,
				targets: _targets,
			};
		default:
			return state;
	}
};
