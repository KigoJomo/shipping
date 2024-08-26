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
        primary: "#192F3B", // Background
        "primary-dark": "#071D22", // Dark Background
        secondary: "var(--secondary)", // Orange Accent
        "secondary-dark": "var(--secondary-dark)",
        tertiary: "#8B969C", // Light Gray
        white: "#FFFFFF", // White
        "white-dark": "#c0c0c0", // White
      },
    },
  },
  plugins: [],
};
