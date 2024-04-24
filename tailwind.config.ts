import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				background: 'rgb(var(--color-background) / <alpha-value>)',
				primary: 'rgb(var(--color-primary) / <alpha-value>)',
				secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
				grey: 'rgb(var(--color-grey) / <alpha-value>)',
				font: 'rgb(var(--color-font) / <alpha-value>)',
				transparent: 'transparent',
				current: 'currentColor',
			},
			backgroundImage: {
				circle: "url('/circle.svg')",
				'circle-responsive': "url('/circle-bottom.svg')",
			},
		},
	},
	plugins: [],
}
export default config
