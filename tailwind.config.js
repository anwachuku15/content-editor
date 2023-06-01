/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				josefin: ["Josefin Sans", "sans-serif"],
				nunito: ["Nunito", "sans-serif"],
			},
			colors: {
				"dark-purple": "#121628",
				"light-purple": "#615d90",
				"dark-icon": "#484872",
				"chip-bg": "#9fa6bb",
				"chip-text": "#3653a6",
				divider: "#422b37",
			},
		},
	},
	plugins: [require("tailwind-scrollbar")],
};
