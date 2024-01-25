/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "DM Sans, monospace",
    },
    extend: {
      screens: {
        mobile: "350px",
        tablet: "800px",
      },
    },
  },
  plugins: [],
};
