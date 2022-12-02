/** @type {import('tailwindcss').Config} */
module.exports = {
    <<<<<<< refactor/project
        content: [
          './pages/**/*.{js,ts,jsx,tsx}',
          './components/**/*.{js,ts,jsx,tsx}',
        ],
        theme: { 
          extend: {
            colors: {
    
            "grey": "#878787",
    
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
                '0.0125': '-0.0125em'  ,        //-1.25%
            },
    
            maxWidth: {
              "90": "90rem",
            },
            
            fontSize: {
              "heading-one": "4rem", //64px
              "mob-heading-one": "3.5rem", //56px
              "mob-heading-three": "1.75rem", //28px
              "1.5":"1.5rem",
              'headingOne': '4rem',               //64px
              'mobHeadingOne': '3.5rem',         //56px
              'mobHeadingThree': '1.75rem',
              'tabletHeadingOne': '2.25rem',
              'desktopHeadingTwo': '1.125rem'
           
            },
      
            lineHeight: {
              "18": "4.5rem", //72px
              "10.5": "2.625rem", //42px
              "4.5": "1.125rem", //18px
    
                '8.5': '2.125rem',              //34px
                '2.5': '100%',
                '2.6': '2.625rem',
                '2.625': '2.625rem'
            },
      
    
          fontSize:{
            '13': '3.25rem',                     //52px
            "mob-heading-one" : "3.5rem",        //56px
            "mob-heading-three" : "1.75rem",     //28px
            'headingOne': '4rem',                //64px
            'mobHeadingOne': '3.5rem',          //56px
            'mobHeadingThree': '1.75rem',
            'tabletHeadingOne': '2.25rem',
            'desktopHeadingTwo': '1.125rem'
          },
    
          lineHeight:{
            "18" : "4.5rem",                      //72px
            "10.5" :"2.625rem",  
          },
          colors: {
            'primaryPurple': '#5602E0',
            'primaryGrey': '#878787',
            'secondaryGrey': '#EDEDED',
            'darkGrey': '#9A9A9A',
            'lightGrey': '#E4E4E4',
            'primary-purple' : '#5602E0',
            'dark-grey' : '#9A9A9A',
            'light-grey' : '#E4E4E4'
          },
    
          lineHeight:{
            '18': '4.5rem',             //72px
            '10.5': '2.625rem',                  //42px
            '4.5': '1.125rem',             //18px
    =======
      content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
      ],
      theme: {
        extend: {
          colors: {
            'primaryPurple': '#5602E0',
            'primaryGrey': '#878787',
            'secondaryGrey': '#EDEDED',
            'darkGrey': '#9A9A9A',
            'lightGrey': '#E4E4E4',
            'primary-purple': '#5602E0',
            'dark-grey': '#9A9A9A',
            'light-grey': '#E4E4E4',
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
            '0.0125': '-0.0125em',
            "spacing-xs": '-0.015em',          //-1.25%
    
    
            //-1.25%
          },
    
          fontSize: {
    
            "1.5": "1.5rem",
    
            'headingOne': '4rem',               //64px
            'mobHeadingOne': '3.5rem',         //56px
            'mobHeadingThree': '1.75rem',
            'tabletHeadingOne': '2.25rem',
            'desktopHeadingTwo': '1.125rem'
    
          },
    
    
          lineHeight: {
            "18": "4.5rem",             //72px
            "10.5": "2.625rem",                  //42px
            "4.5": "1.125rem",             //18px
    >>>>>>> dev
            '8.5': '2.125rem',              //34px
            '2.5': '100%',
            '2.6': '2.625rem',
            '2.625': '2.625rem'
          },
    <<<<<<< refactor/project
          fontFamily: {
            'Neufile': ['Neufile', 'sans-serif'],      
          },
          spacing:{
            '24.5' : '6.1513rem', //98.4208px
            '0.75': '0.188rem', //3px
            '1/2' : '0.2694rem',   //4.31px
            '1.1213': '1.1213rem'
          },
          
          height: {
            '18': '4.5rem',           //72px
            '2.59': '0.647rem',       //10.36px
            "fit": "fit-content",
            '3.34': '0.835rem',  
          },
          margin: {
            '2.75': '0.688rem',     //11px
            '5.157': '1.289rem',    //20.63px
            '21.657': '5.414rem',   //86.63px
            '34': '8.5rem',
            '26': '3rem',
            '24.75': '5rem', //99px
            '16.5': '0rem', //66px
            '8.25': '2.063rem', //33px
            '4.485': '1.121rem', //17.94px
            '6.75': '1.688rem', //27px
            'fit':'fit-content',
            '11.5/12' : '91%',      // width on desktop
            '11.8/12' : '93%',      //width on tablet
            '10.5/12' : '90%'      //width on mobile
          },
          
            borderRadius: {
              '4.75':'1.1875rem', //19px
            },
            fontFamily: {
              Neufile: ["Neufile", "sans-serif"],
            },
            spacing: {
              "24.5": "6.1513rem", //98.4208px
              "0.75": "0.188rem", //3px
                '1/2' : '0.2694rem',   //4.31px
                '1.1213': '1.1213rem',
                    '38': '2.375rem',
                    '1.5':'1.5rem',
                    '0.3125':'0.3125rem',
                    '0.5' : '0.2694rem'    //4.31px
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
              '2.715': '0.679rem', //10.86px
              '7/10': '74%',
              '7/13': '61.44%', 
              '21.875':'21.875rem',
              '47.3125':'47.3125rem'
    =======
    
    
          spacing: {
            "24.5": "6.1513rem", //98.4208px
            '0.75': '0.188rem', //3px
            "10.5": "2.5625rem" ,   //41px
            '1.1213': '1.1213rem',
            '1/2': '0.2694rem',   //4.31px       
              '38': '2.375rem',
              '1.5': '1.5rem',
              '0.3125': '0.3125rem',
              '0.5': '0.2694rem'    //4.31px
    >>>>>>> dev
        
          },
    
    
          borderRadius: {
            "4.75": "1.1875rem", //19px
       
          
          },
          gap: {
            "0.4375": "0.4375rem",
            '10.5': '2.5625rem',
          },
    
    
         
          fontFamily: {
            Neufile: ["Neufile", "sans-serif"],
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
            "18.1306": "18.1306rem",
            "19.375": "19.375rem",
            "16.0625": "16.0625rem",
            '2.715': '0.679rem', //10.86px
            '7/10': '74%',
            '7/13': '61.44%',
    
            '21.875': '21.875rem',
            '47.3125': '47.3125rem',
    
              "semi": "50.6875rem",
          
     
    
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
            "2.59": '0.647rem', //10.36px
            "3.34": '0.835rem', // 13.36px
            "15.75": '15.75rem',
    
          },
    
          margin: {
           
              '4.485': '1.121rem', //17.94px
              '6.75': '1.688rem', //27px
    <<<<<<< refactor/project
              'fit':'fit-content',
              '11.5/12' : '91%',      // width on desktop
              '11.8/12' : '93%',      //width on tablet
              '10.5/12' : '90%'      //width on mobile
            },
            
              borderRadius: {
                '4.75':'1.1875rem', //19px
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
            inset: {
              "736": "184rem",
            },
            width:{
              '59.25': '14.813rem',     //237px
              '87.5': '21.875rem',      //350px
              '47.75': '11.938rem',     //191px
              '111': '27.75rem',        //444px 
              '202.75': '40.688rem',    //811px
              '2.715': '0.679rem',      //10.86px
              "fit":"fit-content",
              "11.5/12" : "91%",        // width on desktop
              "11.8/12" : "93%",        //width on tablet            "10.5/12" : "90%",      //width on mobile
              '7/10': '74%',
              '7/13': '61.44%',
              '11.6/12': '91.11%',  // width on desktop --> xl
              '11.8/12': '93%',     // width on tablet  --> lg
              '11.5/12': '91.37%',   //width on ipad    --> md
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
              '6.625': '6.625rem',
              '21.875':'21.875rem',
              '47.3125':'47.3125rem'
          },
          height: {
            '2.59': '0.647rem', //10.36px
            '3.34': '0.835rem', // 13.36px
            '96.5': '24.125rem',
            '102.5': '25.625rem',
            '17': '4.25rem',
            '42': '10.5rem',
            '4.5': '1.125rem',
            '21': '5.25rem',
            '25.0869': '25.0869rem',
            '8': '8rem',
            'fit': 'fit-content',
            '15.75': '15.75rem'
          },
          inset: {
            '736': '184rem',
          },
          letterSpacing: {
            'cardTitle': '-0.02em',
            'cardDescription': '-0.01em',
            'cardSubDescription': '-0.015em',
            'cardSubTitle': '-0.0125em',
            'spacing-xl': '-0.02rem',             //-2%
            'spacing-lg': '-0.01rem',             //-1%
            'spacing-md': '-0.015rem',            //-1.5%
            'spacing-sm': '-0.0125rem', 
            '0.0125': '-0.0125em'          //-1.25%
          },
          boxShadow: {
            '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
            '2.5xl': '1px 2px 5px rgba(0, 0, 0, 0.25)'
          },
          dropShadow: {
            '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
            '4xl': [
              '0 35px 35px rgba(0, 0, 0, 0.25)',
              '0 45px 65px rgba(0, 0, 0, 0.15)'
            ],
    
            boxShadow: {
     
              "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
              "2.5xl": "1px 2px 5px rgba(0, 0, 0, 0.25)",
    
              '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
              '2.5xl': '1px 2px 5px rgba(0, 0, 0, 0.25)'
    
            },
     
            gap:{
              "0.4375":"0.4375rem"},
    =======
              'fit': 'fit-content',
              '11.5/12': '91%',      // width on desktop
              '11.8/12': '93%',      //width on tablet
              '10.5/12': '90%',     //width on mobile
              '14.8125': '14.8125rem',
              '4.8356': '4.8356rem',
              '4.4306': '4.4306rem',
              '3.0556': '3.0556rem',
              '5.3125': '5.3125rem',
              "5.7375":"5.7375rem",
              "7.9375":"7.9375rem",
              "6.4375":"6.4375rem"
    
          },
    
       
          padding: {
            '35': '2.1875rem',
            '0.1875': '0.1875rem',
            '0.625': '0.625rem',
            '2.1': '2rem',
            '1.1': '1rem',
            '1.2813': '1.2813rem',
            '2.25': '2.25rem',
            '2.4375': '2.4375rem',
            '3.85': '3.85rem',
            '6.1563': '6.1563rem',
            '14.8125': '14.8125rem',
            '4.8356': '4.8356rem',
            '4.4306': '4.4306rem',
            '3.0556': '3.0556rem',
               
          },
    >>>>>>> dev
    
         
       
          inset: {
            '736': '184rem',
    
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
    
    
    
          textUnderlineOffset: {
            1: '0.5px',
    
          }
        },
      },
      plugins: [],
    }
    <<<<<<< refactor/project
    =======
    
    
    
    >>>>>>> dev
    
    