import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				primary: {
					100: '#b9dff9',
					200: '#649ccc',
					300: '#4d72a6'
				},
				secondary: {
					100: '#f7f8fb',
					200: '#9ba2aa',
					300: '#525862'
				},
				dark: '#0d0d0d'
			}
		}
	},

	plugins: []
} satisfies Config;
