module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      backgroundImage: {
        'hero-pattern': "url('../public/patternpad5.jpeg')",
        'hero-pattern2': "url('../public/patternpad.jpeg')",
      }
    },
  },
  plugins: [],
}