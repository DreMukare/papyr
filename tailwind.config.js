/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        arvo: ["Arvo", "serif"],
        roboto: ["Roboto", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
