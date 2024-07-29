/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			// colors: {
			// 	"custom-brown": "#cb997e",
			// 	"custom-creme": "#eddcd2",
			// 	"custom-yellow": "#f6f3f3",
			// 	"custom-gray": "#f0efeb",
			// 	"custom-orange": "#ddbea9",
			// 	"custom-green": "#a5a58d",
			// 	"custom-blue": "#005f73",
			// 	"custom-darkGreen": "#606c38",
			// 	"custom-black": "#283618",
			// },
			colors: {
				"custom-brown": "#B99376",
				"custom-creme": "#F2E7D5",
				"custom-yellow": "#F8F3D4",
				"custom-gray": "#E4E4E1",
				"custom-orange": "#E7A88A",
				"custom-green": "#8C8C76",
				"custom-blue": "#468189",
				"custom-darkGreen": "#656d4a",
				"custom-black": "#3B3B28",
			},
			animation: {
				"float-up-down": "floatUpDown 3s ease-in-out infinite",
				"float-down-up": "floatDownUp 3s ease-in-out infinite",
			},
		},
	},
	plugins: [],
};
