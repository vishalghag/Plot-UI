/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "navbar-gradient":
          "linear-gradient(0deg, hsla(0, 0%, 100%, .06), hsla(0, 0%, 100%, .06)), linear-gradient(0deg, rgba(0, 0, 0, .55), rgba(0, 0, 0, .55)), linear-gradient(0deg, rgba(0, 0, 0, .2), rgba(0, 0, 0, .2))",
      },
    },
  },
  plugins: [],
};
