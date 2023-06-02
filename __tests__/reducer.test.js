import { reducer, initialState } from "@/context/reducer";

describe("Reducer Tests", () => {
	test("should return the initial state", () => {
		expect(reducer(undefined, {})).toEqual(initialState);
	});

	it("should handle SET_IS_SETTINGS_OPEN", () => {
		const action = { type: "SET_IS_SETTINGS_OPEN" };
		const newState = reducer(initialState, action);
		expect(newState.isSettingsOpen).toBe(false);
		expect(newState.isSpeakerOpen).toBe(false);
		expect(newState.isSettingsOpen).toBe(!initialState.isSettingsOpen);
	});

	it("should handle CLOSE_SETTINGS", () => {
		const action = { type: "CLOSE_SETTINGS" };
		const newState = reducer(initialState, action);
		expect(newState.isSettingsOpen).toBe(false);
	});

	it("should handle IS_SPEAKER_OPEN", () => {
		const action = { type: "IS_SPEAKER_OPEN" };
		const newState = reducer(initialState, action);
		expect(newState.isSettingsOpen).toBe(false);
		expect(newState.isSpeakerOpen).toBe(!initialState.isSpeakerOpen);
	});

	it("should handle IS_CONTENT_THEME_OPEN", () => {
		const action = { type: "IS_CONTENT_THEME_OPEN" };
		const newState = reducer(initialState, action);
		expect(newState.isContentThemeOpen).toBe(!initialState.isContentThemeOpen);
	});

	it("should handle IS_TONE_DURATION_OPEN", () => {
		const action = { type: "IS_TONE_DURATION_OPEN" };
		const newState = reducer(initialState, action);
		expect(newState.isToneDurationOpen).toBe(!initialState.isToneDurationOpen);
	});

	it("should handle IS_TARGET_AUDIENCES_OPEN", () => {
		const action = { type: "IS_TARGET_AUDIENCES_OPEN" };
		const newState = reducer(initialState, action);
		expect(newState.isTargetAudiencesOpen).toBe(
			!initialState.isTargetAudiencesOpen
		);
	});

	it("should handle IS_DESCRIPTIVE_WORDS_OPEN", () => {
		const action = { type: "IS_DESCRIPTIVE_WORDS_OPEN" };
		const newState = reducer(initialState, action);
		expect(newState.isDescriptiveWordsOpen).toBe(
			!initialState.isDescriptiveWordsOpen
		);
	});

	it("should handle IS_FINE_TUNING_OPEN", () => {
		const action = { type: "IS_FINE_TUNING_OPEN" };
		const newState = reducer(initialState, action);
		expect(newState.isFineTuningOpen).toBe(!initialState.isFineTuningOpen);
	});

	it("should handle SET_TARGET_INPUT", () => {
		const value = "test input";
		const action = { type: "SET_TARGET_INPUT", targetInput: value };
		const newState = reducer(initialState, action);
		expect(newState.targetInput).toBe(value);
	});

	it("should handle ADD_TARGET", () => {
		const input = "test input";
		const action = { type: "ADD_TARGET" };
		const state = { ...initialState, targetInput: input };
		const newState = reducer(state, action);
		expect(newState.targets).toEqual([input.trim()]);
		expect(newState.targetInput).toBe("");
	});

	it("should handle REMOVE_TARGET", () => {
		const input = "test input";
		const index = 0;
		const action = { type: "REMOVE_TARGET", index };
		const state = { ...initialState, targets: [input] };
		const newState = reducer(state, action);
		expect(newState.targets).toEqual([]);
	});
});
