module.exports = {
  content: [
	'./src/**/*.{html,js,jsx,ts,tsx}', // Adjust the paths according to your project structure
  ],
  theme: {
	extend: {},
  },
  darkMode: 'class', // Enable dark mode support with class strategy
  plugins: [
	require('daisyui'),
  ],
  daisyui: {
	themes: ['dark'], // Add or customize themes here
  },
};