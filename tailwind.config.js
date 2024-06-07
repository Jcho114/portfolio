/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			height: {
				navbar: '4.5rem',
				'full-with-navbar': 'calc(100vh - 4.5rem)'
			},
			minHeight: {
				'full-with-navbar': 'calc(100vh - 4.5rem)'
			}
		}
	},
	plugins: []
};
