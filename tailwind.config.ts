import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'.src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	daisyui: {
		themes: [
			'pastel',
			{
				pastel: {
					primary: '#604882',
					accent: '#f5eeff',
					'--rounded-btn': '2rem',
					'--rounded-box': '0rem'
				},
			},
		],
	},
	plugins: [require('daisyui')],
};
export default config;

