/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: { 
        primary: {
          700: '#2563eb',
        },
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /xl:grid-cols-\d+/,
    },
  ],
};
