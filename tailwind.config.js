/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // 다크 모드 활성화 (사용자가 제어 가능)
  theme: {
    extend: {
      colors: { 
        primary: {
          700 : '#2563eb',
        }
      }
    },
  },
  plugins: [],
};