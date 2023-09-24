export const theme = {
  colors: {
    dark: "#1b1c21",
    light: "#e7e8ed",
  },
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      ...theme,
    },
  },
  plugins: [],
};
