/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "var(--primary)", // Background
        "primary-dark": "var(--primary-dark)", // Dark Background
        secondary: "var(--secondary)", // Orange Accent
        "secondary-dark": "var(--secondary-dark)",
        tertiary: "var(--tertiary)", // Light Gray
        white: "var(--white)", // White
        "white-dark": "var(--white-dark)", // White
      },
    },
  },
  plugins: [],
};
