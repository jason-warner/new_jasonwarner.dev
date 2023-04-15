/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      dark: '#333',
      black: '#000',
      white: '#FFF',
      secondaryFont: '#e62739'
    }
  },
  plugins: [
    require('daisyui'),
  ],
}
