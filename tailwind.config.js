/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        ipad: "768px",
        // => @media (min-width: 834px) { ... }

        tablet: "1024px",
        // => @media (min-width: 1440px) { ... }

        desktop: "1440px",
        // => @media (min-width: 1440px) { ... }
      },

      colors: {
        "primaryPurple": "#5602E0",
        "primaryGrey": "#878787",
        "secondaryGrey": "#EDEDED",
        "darkGrey": "#9A9A9A",
        "lightGrey": "#E4E4E4",
        "primary-purple": "#5602E0",
        "dark-grey": "#9A9A9A",
        "light-grey": "#E4E4E4",
        "borderGrey": "#E2E2E2",
        "expertiseGrey": "#9A9A9A",
      },
      letterSpacing: {
        "spacing-xl": "-0.02rem", //-2%
        "spacing-lg": "-0.01rem", //-1%
        "spacing-md": "-0.015rem", //-1.5%
        "spacing-sm": "-0.0125rem", //-1.25%
        "cardTitle": "-0.02em",
        "cardDescription": "-0.01em",
        "cardSubDescription": "-0.015em",
        "cardSubTitle": "-0.0125em",
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
        "11.6/12": "91.11%", // width on desktop --> xl
        "11.8/12": "93%", // width on tablet  --> lg
        "11.5/12": "91.37%", //width on ipad    --> md
        "10.5/12": "90%", //width on mobile
        "112": "28rem", // width 448px
        "75.5": "18.875rem",
        "65.5": "16.375rem",
        "102": "25.5rem",
        "109.25": "27.313rem",
        "101.25": "25.313rem",
        "29.8125": "29.8125rem",
        "27.3125": "27.3125rem",
        "27.0625": "27.0625rem",
        "83": "83rem",
        "11.625": "11.625rem",
        "13.875": "13.875rem",
        "6.625": "6.625rem",
        "18.1306":"18.1306rem",
        "19.375":"19.375rem",
        "16.0625": "16.0625rem",
      },
      height: {
        "96.5": "24.125rem",
        "102.5": "25.625rem",
        "17": "4.25rem",
        "42": "10.5rem",
        "4.5": "1.125rem",
        "21": "5.25rem",
        "25.0869": "25.0869rem",
        "8": "8rem",
        "fit": "fit-content",
      },
      borderRadius: {
        "4.75": "1.1875rem", //19px
      },

      inset: {
        "736": "184rem",
      },

      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
        "2.5xl": "1px 2px 5px rgba(0, 0, 0, 0.25)",
      },
      dropShadow: {
        "3xl": "0 35px 35px rgba(0, 0, 0, 0.25)",
        "4xl": [
          "0 35px 35px rgba(0, 0, 0, 0.25)",
          "0 45px 65px rgba(0, 0, 0, 0.15)",
        ],
      },
      maxWidth: {
        "90": "90rem",
      },
      gap:{
        "0.4375":"0.4375rem"
      }
    },
  },
  plugins: [],
};
