import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'app/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'app/components/**/*.{js,ts,jsx,tsx,mdx}',
		'app/**/*.{js,ts,jsx,tsx,mdx}',
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

