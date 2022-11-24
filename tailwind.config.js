/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'ipad': '390px',
      // => @media (min-width: 390px) { ... }

      'tablet': '834px',
      // => @media (min-width: 834px) { ... }

      'desktop': '1024px',
      // => @media (min-width: 1440px) { ... }
   
    },
    extend: {
      colors: {
        "primaryPurple": "#5602E0",
        "primaryGrey": "#878787",
        "secondaryGrey": "#EDEDED",
        "darkGrey": "#9A9A9A",
        "lightGrey": "#E4E4E4",

      },
      letterSpacing: {
        "spacing-xl": '-0.02rem',             //-2%
        "spacing-lg": '-0.01rem',             //-1%
        "spacing-md": '-0.015rem',            //-1.5%
        "spacing-sm": '-0.0125rem',           //-1.25%
      },
      fontSize: {
        "headingOne": "4rem",               //64px
        "mobHeadingOne": "3.5rem",         //56px
        "mobHeadingThree": "1.75rem",
        "tabletHeadingOne": "2.25rem",
        "desktopHeadingTwo": "1.125rem"
      },

      lineHeight: {
        "18": "4.5rem",             //72px
        "10.5": "2.625rem",                  //42px
        "4.5": "1.125rem",             //18px
        '8.5': '2.125rem',              //34px
        "2.5": "100%",
        "2.6": "2.625rem",
        "2.625": "2.625rem"
      },
      fontFamily: {
        'Neufile': ['Neufile', 'sans-serif'],
      },
      spacing: {
        "24.5": "6.1513rem", //98.4208px
        "38": "2.375rem"
      },
      padding: {
        '35': '2.1875rem',
      },
      width: {
        '11.5/12': '91%',   // width on desktop
        '11.8/12': '93%',     //width on tablet
        '10.5/12': '90%',     //width on mobile
        '112': '28rem',         // width 448px
        '75.5': '18.875rem',
        '65.5': '16.375rem',
        '102': '25.5rem',
        '109.25': '27.313rem',
        '101.25': '25.313rem',
        '29.8125': '29.8125rem',
        '27.3125': '27.3125rem',
        
      },

      height: {
        '96.5': '24.125rem',
        '102.5': '25.625rem',
        '17': '4.25rem',
        '42': '10.5rem',
        '4.5': '1.125rem',
        '21': '5.25rem',
        '25.0869': '25.0869rem',
        '8': '8rem'
      },

      inset: {
        '736': '184rem',
      },
      letterSpacing: {
        "cardTitle": '-0.02em',
        "cardDescription": "-0.01em",
        "cardSubDescription": "-0.015em",
        "cardSubTitle": "-0.0125em"
      },
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
          '0 35px 35px rgba(0, 0, 0, 0.25)',
          '0 45px 65px rgba(0, 0, 0, 0.15)'
        ],

        "2.5xl": "1px 2px 5px rgba(0, 0, 0, 0.25)"
      }
    },
  },
  plugins: [],
}
