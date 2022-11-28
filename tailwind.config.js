/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'ipad': '390px',
        // => @media (min-width: 390px) { ... }
  
        'tablet': '834px',
        // => @media (min-width: 834px) { ... }
  
        'desktop': '1024px',
        // => @media (min-width: 1440px) { ... }
     
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
        "heading-one" : "4rem",               //64px
        "mob-heading-one" : "3.5rem",         //56px
        "mob-heading-three" : "1.75rem"       //28px
      },

      lineHeight:{
        "18" : "4.5rem",             //72px
        "10.5" :"2.625rem",                  //42px
        "4.5" : "1.125rem"             //18px
      },
      fontFamily: {
        'Neufile': ['Neufile', 'sans-serif'],      
      },
      spacing:{
        "24.5" : "6.1513rem", //98.4208px
        '0.75': '0.188rem', //3px
      },
      height: {
        '2.59': '0.647rem', //10.36px
      },
      width:{
        '2.715': '0.679rem', //10.86px
        '7/10': '74%',
        '7/13': '61.44%',
        "11.5/12" : "91%",   // width on desktop
        "11.8/12" : "93%",   //width on tablet
        "10.5/12" : "90%"    //width on mobile
      },
      maxWidth: {
        '359.5': '89.875rem', //1440 px
      },
      margin: {
        '4.485': '1.121rem', //17.94px
        '6.75': '1.688rem', //27px
        "fit":"fit-content",
        "11.5/12" : "91%",      // width on desktop
        "11.8/12" : "93%",      //width on tablet
        "10.5/12" : "90%"      //width on mobile
      },
      height: {
        '2.59': '0.647rem', //10.36px
        "fit": "fit-content",
        '3.34': '0.835rem', // 13.36px
      },
      borderRadius: {
        "4.75":"1.1875rem", //19px
      }
    },
  },
  plugins: [],
}