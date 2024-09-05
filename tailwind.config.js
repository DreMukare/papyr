/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ourWhite: "#FDFDFF",
        dark: "#393D3F",
        darkGreen: "#62929E",
        darkBlue: "#546A7B",
        cream: "#C6C5B9",
      },
      fontFamily: {
        arvo: ["Arvo", "serif"],
        roboto: ["Roboto", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
