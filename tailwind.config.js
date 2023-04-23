/** @type {import('tailwindcss').Config} */

export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: '#3B3DCC',
				secondary: '#53BB53',
				grey: '#14142B',
				'grey-body': '#4E4B66',
				'grey-label': '#6E7191',
				line: '#D9DBE9'
			}
		}
	},
	plugins: []
};
