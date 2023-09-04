/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          'footerImg':'url("/landingassests/footervector.svg")',
          'footerImg2':'url("/landingassests/Vector.svg")',
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
