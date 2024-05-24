/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			animation: {
				swiperOpacity: 'swiperOpacity 1s both',
				swiperBoxShadow: 'swiperBoxShadow 0.5s both ',
				swiperBoxShadowReverse: 'swiperBoxShadowReverse 0.5s both'
			},
			keyframes: {
				swiperOpacity: {
					'0%': { opacity: 1 },
					'100%': { opacity: 0.7 }
				},
				swiperBoxShadow: {
					'0%': { boxShadow: 'none;', opacity: 0 },
					'100%': { boxShadow: 'inset -200px 0px 50px -130px #2c2d2d', opacity: 1 }
				},
				swiperBoxShadowReverse: {
					'100%': { boxShadow: 'none;', opacity: 0 },
					'0%': { boxShadow: 'inset -200px 0px 50px -130px #2c2d2d', opacity: 1 }
				}
			},
			colors: {
				'theme-primary-50': '#e1f4f0',
				'theme-primary-100': '#c3eae2',
				'theme-primary-200': '#a5dfd4',
				'theme-primary-300': '#64c9b7',
				'theme-primary-400': '#26a17b',
				'theme-primary-500': '#22916f',
				'theme-primary-600': '#1f8263',
				'theme-primary-700': '#1b6e55',
				'theme-primary-800': '#165a47',
				'theme-primary-900': '#13493b',
				// secondary | #1547c3
				'theme-secondary-50': '#dce3f6',
				'theme-secondary-100': '#d0daf3',
				'theme-secondary-200': '#c5d1f0',
				'theme-secondary-300': '#a1b5e7',
				'theme-secondary-400': '#5b7ed5',
				'theme-secondary-500': '#1547c3',
				'theme-secondary-600': '#1340b0',
				'theme-secondary-700': '#103592',
				'theme-secondary-800': '#0d2b75',
				'theme-secondary-900': '#0a2360',
				// tertiary | #dfc1f4
				'theme-tertiary-50': '#faf6fd',
				'theme-tertiary-100': '#f9f3fd',
				'theme-tertiary-200': '#f7f0fc',
				'theme-tertiary-300': '#f2e6fb',
				'theme-tertiary-400': '#e9d4f7',
				'theme-tertiary-500': '#dfc1f4',
				'theme-tertiary-600': '#c9aedc',
				'theme-tertiary-700': '#a791b7',
				'theme-tertiary-800': '#867492',
				'theme-tertiary-900': '#6d5f78',
				// success | #751ead
				'theme-success-50': '#eaddf3',
				'theme-success-100': '#e3d2ef',
				'theme-success-200': '#ddc7eb',
				'theme-success-300': '#c8a5de',
				'theme-success-400': '#9e62c6',
				'theme-success-500': '#751ead',
				'theme-success-600': '#691b9c',
				'theme-success-700': '#581782',
				'theme-success-800': '#461268',
				'theme-success-900': '#390f55',
				// warning | #b4a4ad
				'theme-warning-50': '#f4f1f3',
				'theme-warning-100': '#f0edef',
				'theme-warning-200': '#ece8eb',
				'theme-warning-300': '#e1dbde',
				'theme-warning-400': '#cbbfc6',
				'theme-warning-500': '#b4a4ad',
				'theme-warning-600': '#a2949c',
				'theme-warning-700': '#877b82',
				'theme-warning-800': '#6c6268',
				'theme-warning-900': '#585055',
				// error | #6999ad
				'theme-error-50': '#e9f0f3',
				'theme-error-100': '#e1ebef',
				'theme-error-200': '#dae6eb',
				'theme-error-300': '#c3d6de',
				'theme-error-400': '#96b8c6',
				'theme-error-500': '#6999ad',
				'theme-error-600': '#5f8a9c',
				'theme-error-700': '#4f7382',
				'theme-error-800': '#3f5c68',
				'theme-error-900': '#334b55',
				// surface | #4a4a4a
				'theme-surface-50': '#e4e4e4',
				'theme-surface-100': '#dbdbdb',
				'theme-surface-200': '#d2d2d2',
				'theme-surface-300': '#b7b7b7',
				'theme-surface-400': '#808080',
				'theme-surface-500': '#4a4a4a',
				'theme-surface-600': '#434343',
				'theme-surface-700': '#383838',
				'theme-surface-800': '#2c2d2d',
				'theme-surface-900': '#242424'
			},
			boxShadow: {
				default: '0px 0px 25px 0px rgba(0,0,0,0.39)',
				swiper: 'inset -100px 0px 100px -130px #242424;'
			},
			screens: {
				mobile: '360px',
				xs: `480px`,
				sm: '576px',
				// => @media (min-width: 640px) { ... }

				md: '768px',
				// => @media (min-width: 768px) { ... }

				lg: '992px',
				// => @media (min-width: 1024px) { ... }

				xl: '1200px',
				// => @media (min-width: 1280px) { ... }

				'2xl': '1400px',
				// => @media (min-width: 1536px) { ... }
				'3xl': '1600px'
			},
			dropShadow: {
				greenShadow: '0px 0px 3px rgb(34 197 94)'
			},
			maxWidth: {
				contents: '1400px'
			}
		}
	},
	plugins: []
};
