/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height:{
        'h500' :'500px'
      },
      borderRadius:{
        "5xl":"25%"
      },
      backgroundImage: {
        'bgimg': "url('./assets/images/bannerBg.jpg')",
        'bgAI': "url('./assets/images/banner.avif')",
        'bggenAI':'url(./assets/images/GENAI.jpg)'
        }  
    
      }
     
  },
 
  plugins: [
    require('flowbite/plugin')
]
}