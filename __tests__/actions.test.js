import {
	setIsSettingsOpen,
	closeSettings,
	setIsSpeakerOpen,
	setContentThemeOpen,
	setToneDurationOpen,
	setTargetAudiencesOpen,
	setDescriptiveWordsOpen,
	setFineTuningOpen,
	setTargetInput,
	addTarget,
	removeTarget,
} from "@/context/actions";

describe("actions", () => {
	test("should create an action to set isSettingsOpen", () => {
		const expectedAction = {
			type: "SET_IS_SETTINGS_OPEN",
		};
		expect(setIsSettingsOpen()).toEqual(expectedAction);
	});

	test("should create an action to close settings", () => {
		const expectedAction = {
			type: "CLOSE_SETTINGS",
		};
		expect(closeSettings()).toEqual(expectedAction);
	});

	test("should create an action to set isSpeakerOpen", () => {
		const expectedAction = {
			type: "IS_SPEAKER_OPEN",
		};
		expect(setIsSpeakerOpen()).toEqual(expectedAction);
	});

	test("should create an action to set isContentThemeOpen", () => {
		const expectedAction = {
			type: "IS_CONTENT_THEME_OPEN",
		};
		expect(setContentThemeOpen()).toEqual(expectedAction);
	});

	test("should create an action to set isToneDurationOpen", () => {
		const expectedAction = {
			type: "IS_TONE_DURATION_OPEN",
		};
		expect(setToneDurationOpen()).toEqual(expectedAction);
	});

	test("should create an action to set isTargetAudiencesOpen", () => {
		const expectedAction = {
			type: "IS_TARGET_AUDIENCES_OPEN",
		};
		expect(setTargetAudiencesOpen()).toEqual(expectedAction);
	});

	test("should create an action to set isDescriptiveWordsOpen", () => {
		const expectedAction = {
			type: "IS_DESCRIPTIVE_WORDS_OPEN",
		};
		expect(setDescriptiveWordsOpen()).toEqual(expectedAction);
	});

	test("should create an action to set isFineTuningOpen", () => {
		const expectedAction = {
			type: "IS_FINE_TUNING_OPEN",
		};
		expect(setFineTuningOpen()).toEqual(expectedAction);
	});

	test("should create an action to set targetInput", () => {
		const value = "example input";
		const expectedAction = {
			type: "SET_TARGET_INPUT",
			targetInput: value,
		};
		expect(setTargetInput(value)).toEqual(expectedAction);
	});

	test("should create an action to add a target", () => {
		const expectedAction = {
			type: "ADD_TARGET",
		};
		expect(addTarget()).toEqual(expectedAction);
	});

	test("should create an action to remove a target", () => {
		const index = 0;
		const expectedAction = {
			type: "REMOVE_TARGET",
			index: index,
		};
		expect(removeTarget(index)).toEqual(expectedAction);
	});
});
