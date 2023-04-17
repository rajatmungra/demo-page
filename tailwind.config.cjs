/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
			'sm': {max : '480px'},
			'md': {min:'481px', max:'1150px'},
			'lg': {min:'1151px'}
		  },
		extend:{
			fontFamily:{
				poppins:['Poppins']
			}
		}
	},
	plugins: [],
}
