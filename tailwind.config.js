/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			height: {
				'navbar': '4rem',
				'full-with-navbar': 'calc(100vh - 4rem)',
			},
		}
	},
	plugins: []
};
