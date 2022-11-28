/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'mobile':'360px',
        'ipad-pro':'768px',

        'ipad': '390px',
        // => @media (min-width: 390px) { ... }
  
        'tablet': '834px',
        // => @media (min-width: 834px) { ... }
  
        'desktop': '1024px',
        // => @media (min-width: 1440px) { ... }
     
      },
      margin: {
        '2.75': '0.688rem',     //11px
        '5.157': '1.289rem',    //20.63px
        '21.657': '5.414rem',   //86.63px
        '34': '8.5rem',
        '26': '6.5rem',
      },
      colors:{
        "primary-purple" : "#5602E0",
        "dark-grey" : "#9A9A9A",
        "grey": "#878787",
        "light-grey" : "#E4E4E4"
      },
      letterSpacing: {
        "spacing-xl": '-0.02rem',             //-2%
        "spacing-lg": '-0.01rem',             //-1%
        "spacing-md": '-0.015rem',            //-1.5%
        "spacing-sm": '-0.0125rem',           //-1.25%
      },
      fontSize:{
        '13': '3.25rem',                      //52px
        "heading-one" : "4rem",               //64px
        "mob-heading-one" : "3.5rem",         //56px
        "mob-heading-three" : "1.75rem"       //28px
      },

      lineHeight:{
        "18" : "4.5rem",                      //72px
        "10.5" :"2.625rem",                   //42px
        "4.5" : "1.125rem"                    //18px
      },
      fontFamily: {
        'Neufile': ['Neufile', 'sans-serif'],      
      },
      spacing:{
        "24.5" : "6.1513rem", //98.4208px
        '0.75': '0.188rem', //3px
      },
      width:{
        '59.25': '14.813rem',     //237px
        '87.5': '21.875rem',      //350px
        '47.75': '11.938rem',     //191px
        '111': '27.75rem',        //444px 
        '202.75': '50.688rem',    //811px
        '2.715': '0.679rem',      //10.86px
        "fit":"fit-content",
        "11.5/12" : "91%",        // width on desktop
        "11.8/12" : "93%",        //width on tablet
        "10.5/12" : "90%"         //width on mobile
      },
      height: {
        '18': '4.5rem',           //72px
        '2.59': '0.647rem',       //10.36px
        "fit": "fit-content",
        '3.34': '0.835rem',       // 13.36px
      },
      borderRadius: {
        "4.75":"1.1875rem", //19px
      }
    },
  },
  plugins: [],
}
