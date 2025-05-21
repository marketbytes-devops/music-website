/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        textOrange: "#F96141",
        textBlue: "#1F6ED2",
        textViolet: "#4D147E",
        textPurple: "#662451",
        textGray: "#EEEEEE", 
        textBlack: "#000000", 
      },
    },
  },
  plugins: [],
};
