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
			colors: {
				"custom-brown": "#cb997e",
				"custom-creme": "#eddcd2",
				"custom-yellow": "#fff1e6",
				"custom-gray": "#f0efeb",
				"custom-orange": "#ddbea9",
				"custom-green": "#a5a58d",
				"custom-blue": "#005f73",
				"custom-darkGreen": "#606c38",
				"custom-black": "#283618",
			},
		},
	},
	plugins: [],
};
