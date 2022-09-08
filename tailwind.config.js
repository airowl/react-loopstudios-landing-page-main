/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-sm': "url('/src/assets/img/mobile/image-hero.jpg')",
        'hero-md': "url('/src/assets/img/desktop/image-hero.jpg')",
        'intro-sm': "url('/src/assets/img/mobile/image-interactive.jpg')",
        'intro-md': "url('/src/assets/img/desktop/image-interactive.jpg')",
        
        'img0-sm': "url('/src/assets/img/mobile/image-deep-earth.jpg')",
        'img1-sm': "url('/src/assets/img/mobile/image-night-arcade.jpg')",
        'img2-sm': "url('/src/assets/img/mobile/image-soccer-team.jpg')",
        'img3-sm': "url('/src/assets/img/mobile/image-grid.jpg')",
        'img4-sm': "url('/src/assets/img/mobile/image-from-above.jpg')",
        'img5-sm': "url('/src/assets/img/mobile/image-pocket-borealis.jpg')",
        'img6-sm': "url('/src/assets/img/mobile/image-curiosity.jpg')",
        'img7-sm': "url('/src/assets/img/mobile/image-fisheye.jpg')",

        'img0-md': "url('/src/assets/img/desktop/image-deep-earth.jpg')",
        'img1-md': "url('/src/assets/img/desktop/image-night-arcade.jpg')",
        'img2-md': "url('/src/assets/img/desktop/image-soccer-team.jpg')",
        'img3-md': "url('/src/assets/img/desktop/image-grid.jpg')",
        'img4-md': "url('/src/assets/img/desktop/image-from-above.jpg')",
        'img5-md': "url('/src/assets/img/desktop/image-pocket-borealis.jpg')",
        'img6-md': "url('/src/assets/img/desktop/image-curiosity.jpg')",
        'img7-md': "url('/src/assets/img/desktop/image-fisheye.jpg')",
      },
      width: {
        'calc': 'calc(25% - 1.25rem)'
      }
    },
  },
  plugins: [],
}
