/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    
    gap:{
      slotBookDatePadding:'32px',
      calcWidthBox:'calc(100% - (4 * 20px)) / 4)'
    },
    padding:{
      bookNowButtonX:'182px',
      bookNowButtonY:'14px',
    }
    ,extend: {
      fontSize:{
        slotBookDateFontSize:'24px',
        slotBookHeadingFontSize:'32px',
        slotBookTimeFontSize:'18px'
      },
      width:{
        calcWidthBox:'calc(25% - 20px)'
      }
      ,colors:{
    slotBookDateColor:'#3E3E3E',
    slotBookDateColorHover:'#1E1E1E',
    slotBookTime:'#1E1E1E',
    slotBookTimeGreen:'#30D158',
    slotBookTimeRed:'#FF453A'
}
      ,backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          'footerImg':'url("/landingassests/footervector.svg")',
          'footerImg2':'url("/landingassests/Vector.svg")',
          'frame':'url("/landingassests/regpageframe.svg")'
         
      },
      
      screens:{
        "mobile":"320px",
        "tab":"768px",
        "laptopS":"1024px",
        "laptopM":"1440px",
      }
     
    },
  },
  plugins: [],
}
