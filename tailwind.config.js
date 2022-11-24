/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary-purple" : "#5602E0",
        "dark-grey" : "#9A9A9A",
        "light-grey" : "#E4E4E4"
      },
      letterSpacing: {
        "spacing-xl": '-0.02rem',             //-2%
        "spacing-lg": '-0.01rem',             //-1%
        "spacing-md": '-0.015rem',            //-1.5%
        "spacing-sm": '-0.0125rem',           //-1.25%
        "spacing-xs": '-0.015em',             //-0.015em
      },
      fontSize:{
        "heading-one" : "4rem",               //64px
        "mob-heading-one" : "3.5rem",         //56px
        "mob-heading-three" : "1.75rem"       //28px
      },

      lineHeight:{
        "18" : "4.5rem",             //72px
        "10.5" :"2.625rem",          //42px
        "4.5" : "1.125rem"           //18px
      },
      fontFamily: {
        'Neufile': ['Neufile', 'sans-serif'],        
      },
      spacing:{
        "24.5" : "6.1513rem", //98.4208px
      },
      width:{
        "fit":"fit-content",
        "11.5/12" : "91%",      // width on desktop
        "11.8/12" : "93%",      //width on tablet
        "10.5/12" : "90%",      //width on mobile
      },
      height: {
        "3.34" : "0.835rem"         //13.36px
      }
    },
  },
  plugins: [],
}
