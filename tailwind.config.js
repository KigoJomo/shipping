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
        background: "var(--background)",
        tertiary: "var(--tertiary)",
        accent: "var(--accent)",
        white: "var(--white)",
        "text-primary": "var(--text-primary)",

        primary: "var(--primary)",
        "primary-dark": "var(--primary-dark)",
        secondary: "var(--secondary)",
        "secondary-dark": "var(--secondary-dark)",
        "white-dark": "var(--white-dark)",
      },
    },
  },
  plugins: [],
};
