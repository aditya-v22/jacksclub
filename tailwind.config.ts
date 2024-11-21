import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				poppins: ['Poppins', 'sans-serif']
			},
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
			},
			boxShadow: {
				card: '0 4px 12px rgba(0, 0, 0, 0.05), 0 4px 50px rgba(0, 0, 0, 0.05)'
			},
			animation: {
				'bounce-once': 'bounceHorizontal 0.3s ease-in-out forwards',
				'ping-once-success': 'pingOnceSuccess 0.6s ease-in-out forwards',
				'ping-once-error': 'pingOnceError 0.6s ease-in-out forwards',
				'scale-and-reset': 'scaleAndReset 0.4s ease-in-out forwards'
			},
			keyframes: {
				bounceHorizontal: {
					'0%': { transform: 'translateX(0)' },
					'25%': { transform: 'translateX(-15px)' },
					'50%': { transform: 'translateX(15px)' },
					'75%': { transform: 'translateX(-15px)' },
					'100%': { transform: 'translateX(0px)' }
				},
				pingOnceSuccess: {
					'0%': { transform: 'scale(100%)', background: colors.green[100] },
					'25%': { transform: 'scale(125%)', background: `${colors.green[100]}/80` },
					'50%': { transform: 'scale(150%)', background: `${colors.green[100]}/60` },
					'75%': { transform: 'scale(175%)', background: `${colors.green[100]}/40` },
					'100%': { transform: 'scale(200%)', background: `${colors.green[100]}/0` }
				},
				pingOnceError: {
					'0%': { transform: 'scale(100%)', background: colors.red[100] },
					'25%': { transform: 'scale(125%)', background: `${colors.red[100]}/80` },
					'50%': { transform: 'scale(150%)', background: `${colors.red[100]}/60` },
					'75%': { transform: 'scale(175%)', background: `${colors.red[100]}/40` },
					'100%': { transform: 'scale(200%)', background: `${colors.red[100]}/0` }
				},
				scaleAndReset: {
					'0%': { transform: 'scale(100%)' },
					'25%': { transform: 'scale(105%)' },
					'50%': { transform: 'scale(110%)' },
					'75%': { transform: 'scale(105%)' },
					'100%': { transform: 'scale(100%)' }
				}
			}
		}
	},

	plugins: []
} satisfies Config;
