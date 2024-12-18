/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: "#323334",
        yellow: "#FFEAAE",
        purple: "#6C63FF",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
