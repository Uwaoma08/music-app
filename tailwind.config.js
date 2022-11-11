/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: '#1A1E1F',
        bg2: "#1a1717",
        grayColor: ' #4f514f',
        primaryColor: "#fff",
        yellowColor: "#FACD66",
    },
  }
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
