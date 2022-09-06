/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-sm': "url('/src/assets/img/mobile/image-hero.jpg')",
        'hero-md': "url('/src/assets/img/desktop/image-hero.jpg')"
      }
    },
  },
  plugins: [],
}
