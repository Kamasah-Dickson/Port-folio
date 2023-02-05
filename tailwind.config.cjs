/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"dark-bg": "#121129",
				white: "#ffffff",
				orange: "#F9850F",
			},
		},
	},
	plugins: [],
};
