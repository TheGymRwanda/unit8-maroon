/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {

        'ipad': '768px',
        // => @media (min-width: 834px) { ... }
  
        'tablet': '1024px',
        // => @media (min-width: 1440px) { ... }
  
        'desktop': '1440px',
        // => @media (min-width: 1440px) { ... }
      },
  
      colors: {
        "primary-purple": "#5602E0",
        "dark-grey": "#9A9A9A",
        "grey": "#878787",
        "light-grey": "#E4E4E4",
        "borderGrey": "#E2E2E2",
        "expertiseGrey": "#9A9A9A",
      },
      letterSpacing: {
        "spacing-xl": "-0.02rem", //-2%
        "spacing-lg": "-0.01rem", //-1%
        "spacing-md": "-0.015rem", //-1.5%
        "spacing-sm": "-0.0125rem", //-1.25%
      },
      fontSize: {
        "heading-one": "4rem", //64px
        "mob-heading-one": "3.5rem", //56px
        "mob-heading-three": "1.75rem", //28px
        "1.5":"1.5rem"
      },

      lineHeight: {
        "18": "4.5rem", //72px
        "10.5": "2.625rem", //42px
        "4.5": "1.125rem", //18px
      },
      fontFamily: {
        Neufile: ["Neufile", "sans-serif"],
      },
      spacing: {
        "24.5": "6.1513rem", //98.4208px
        "0.75": "0.188rem", //3px
      },
      width: {
        "11.5/12": "91%", // width on desktop
        "11.8/12": "93%", //width on tablet
        "10.5/12": "90%", //width on mobile

       " 5.3125": "5.3125rem",
        "16.0625": "16.0625rem",
        "12.3125": "12.3125rem",
        "14.375": "14.375rem",
        "6.8125": "6.8125rem",
        "8.6875": "8.6875rem",
        "4.75": "4.75rem",
        "8.6875": "8.6875rem",

        "18.1306":"18.1306rem",
        "19.375":"19.375rem"

 
      },
      height: {
        "fit": "fit-content",
        "1.75": "1.75rem",
      },
      borderRadius: {
        "4.75": "1.1875rem", //19px
      },
    },
  },
  plugins: [],
};
