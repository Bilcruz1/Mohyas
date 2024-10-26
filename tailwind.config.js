/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
			},
			fontFamily: {
				'cabinet-thin': ['"Cabinet Grotesk Thin"'],
				'cabinet-extralight': ['"Cabinet Grotesk Extralight"'],
				'cabinet-light': ['"Cabinet Grotesk Light"'],
				'cabinet-regular': ['"Cabinet Grotesk Regular"'],
				'cabinet-medium': ['"Cabinet Grotesk Medium"'],
				'cabinet-semibold': ['"Cabinet Grotesk Semibold"'],
				'cabinet-bold': ['"Cabinet Grotesk Bold"'],
				'cabinet-extrabold': ['"Cabinet Grotesk Extrabold"'],
				'cabinet-black': ['"Cabinet Grotesk Black"'],
			},
			keyframes: {
				fadeSlideDown: {
					'0%': { opacity: '0', transform: 'translateY(-20%)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				fadeSlideUp: {
					'0%': { opacity: '1', transform: 'translateY(0)' },
					'100%': { opacity: '0', transform: 'translateY(-20%)' },
				},
			},
			animation: {
				fadeSlideDown: 'fadeSlideDown 0.5s ease-in-out',
				fadeSlideUp: 'fadeSlideUp 0.5s ease-in-out',
			},
		},
	},
	plugins: [],
};
