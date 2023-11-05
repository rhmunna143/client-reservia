
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FA8507'
      },
      fontFamily: {
        playBall: 'Playball, cursive'
      }
    },
  },
  plugins: [require("daisyui")],
}