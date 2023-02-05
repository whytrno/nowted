/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#181818",
        "secondary": "#1c1c1c",
        "note": "#232323",
        "note-active": "#323232",
        "folder-active": "#1f1f1f",
        "recent-active": "#312EB5"
      },
      fontFamily: {
        "kaushan": ["Kaushan Script", "cursive"],
      },
      fontSize: {
        "logo": "26px",
        "sm": "14px",
        "md": "16px",
        "lg": "18px",
        "xl": "32px",
      }
    },
  },
  plugins: [],
}
