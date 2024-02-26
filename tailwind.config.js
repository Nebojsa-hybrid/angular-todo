/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        reactBlue: '#282c34',
        lightGray: '#666666',
        lightBlue: '#61dafb',
        white: '#ffffff',
        green: "#DFF2BF",  //bg-green
				darkGreen: "#4F8A10", //text green
				red: "#FFD2D2",  //bg-red
				darkRed: "#DC2626",
				darkRed: "#D8000C", //text red
      }
    },
  },
  plugins: [],
}

