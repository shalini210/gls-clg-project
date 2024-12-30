/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bgimg': "url('./assets/images/bannerBg.jpg')",
        'bgAI': "url('./assets/images/banner.avif')",
        }  
        
      }
  },
 
  plugins: [
    require('flowbite/plugin')
]
}