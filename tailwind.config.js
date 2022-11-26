/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      // 'ipad': '390px',
      // => @media (min-width: 390px) { ... }
      'ipad':'768px',
      // => @media (min-width: 834px) { ... }

      'tablet':'834px',
      // => @media (min-width: 1440px) { ... }

      'desktop':'1440px',
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      colors: {
        "primaryPurple": "#5602E0",
        "primaryGrey": "#878787",
        "secondaryGrey": "#EDEDED",
        "darkGrey": "#9A9A9A",
        "lightGrey": "#E4E4E4",
        "primary-purple" : "#5602E0",
        "dark-grey" : "#9A9A9A",
        "light-grey" : "#E4E4E4"
      },
      letterSpacing: {
        "spacing-xl": '-0.02rem',             //-2%
        "spacing-lg": '-0.01rem',             //-1%
        "spacing-md": '-0.015rem',            //-1.5%
        "spacing-sm": '-0.0125rem', 
        "0.0125": '-0.0125em'          //-1.25%
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
      borderRadius: {
        "4.75":"1.1875rem", //19px
      },
      fontFamily: {
        'Neufile': ['Neufile', 'sans-serif'],
      },
      spacing: {
        "24.5": "6.1513rem", //98.4208px
        "38": "2.375rem",
        "1.5":"1.5rem",
        "0.3125":"0.3125rem"
      },
      padding: {
        '35': '2.1875rem',
        '0.1875': '0.1875rem',
        '0.625':'0.625rem',
        '2.1':'2rem',
        '1.1':'1rem',
        '1.2813':'1.2813rem',
        '2.25':'2.25rem',
        '2.4375':'2.4375rem',
        '3.85':'3.85rem'
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
        '27.0625':'27.0625rem',
        '83':'83rem',
        '11.625':'11.625rem',
        '13.875':'13.875rem',
        '6.625': '6.625rem'
      },

      height: {
        '96.5': '24.125rem',
        '102.5': '25.625rem',
        '17': '4.25rem',
        '42': '10.5rem',
        '4.5': '1.125rem',
        '21': '5.25rem',
        '25.0869': '25.0869rem',
        '8': '8rem',
        "fit": "fit-content",
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
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        "2.5xl": "1px 2px 5px rgba(0, 0, 0, 0.25)"
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
