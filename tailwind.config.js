module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'back-pattern': "url('./src/assets/back-pattern.jpg')",
        'back-eye': "url('./src/assets/back-eye.png')",
        'tick': "url('./src/assets/tick.png')",
        'down-arrow': "url('./src/assets/down-arrow.png')",
      },
      colors: {
        'white-60': 'rgba(255, 255, 255, 0.6)',
        'white-80': 'rgba(255, 255, 255, 0.8)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Use Inter as the default sans-serif font
        inter: ['Inter', 'sans-serif'], // Optionally create a dedicated inter class
      },
      screens: {
        "3xl": "1300px"
      }
    },
  },
  plugins: [],
};
