/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          200: "#8181AE",
          600: "#AAB1BC",
          800: "#03045E",
        },
        grey: {
          200: "#7a7d9c",
          400: "#0b0a33",
        },
        white: "#FFFFFF",
        "Red/1": "#FF3B30",
        "Green/1": "#34C759",
        "Text/Base": "#161B3D",
      },
      fontFamily: {
        DarkerGrotesque: ["Darker Grotesque", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
