/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "transparent": "transparent",
      "white": "#ffffff",
      "black": "#000000",
      "green": "#82C770"
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      grotesk: ['Space Grotesk', 'sans-serif']
    }
  },
  plugins: [],
}

