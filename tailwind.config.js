/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: {
        dark: "#1e293b",
        light: "#f1f5f9",
      },
      secondary: "#94a3b8",
      neutral: "#e22",
    },
  },
  plugins: [],
};
