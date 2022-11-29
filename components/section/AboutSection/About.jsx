

import React, { useState } from 'react';
import { OneTab } from '../../functions/OneTab';
const tabTexts = [
  { id: 0, text: 'Tab 1', content: 'About Blockchain will do for cooperation what the internet did for communication - We believe that blockchain technology has the potential to shift financial models as we know them, creating revenue streams that are more sustainable and fair for users. We envision a future in which financial infrastructures are rather decentralised and horizontal, in which any member can have a say. Through its immutability, blockchain technology provides trustworthy infrastructures that allow cooperation on a large scale. Learn more' },
  { id: 1, text: 'Tab 2', content: 'What we do Blockchain will do for cooperation what the internet did for communication - We believe that blockchain technology has the potential to shift financial models as we know them, creating revenue streams that are more sustainable and fair for users. We envision a future in which financial infrastructures are rather decentralised and horizontal, in which any member can have a say. Through its immutability, blockchain technology provides trustworthy infrastructures that allow cooperation on a large scale. Learn more' },
  { id: 2, text: 'Tab 3', content: 'Hiring Blockchain will do for cooperation what the internet did for communication - We believe that blockchain technology has the potential to shift financial models as we know them, creating revenue streams that are more sustainable and fair for users. We envision a future in which financial infrastructures are rather decentralised and horizontal, in which any member can have a say. Through its immutability, blockchain technology provides trustworthy infrastructures that allow cooperation on a large scale. Learn more' },
];


export default function About (){
    const [activeTab, setActiveTab] = useState(0);
    return(
        <>

        <section className='flex justify-end  py-24'>
        <div className='hidden w-semi font-Neufile  md:block '>
   <div className=''>
     <div className='flex gap-10.5'>
       <OneTab
         key={0}
         text='About Us'
         isActive={activeTab === 0}
         setActive={() => setActiveTab(0)}
       />
       <OneTab
         key={1}
         text='What we do'
         isActive={activeTab === 1}
         setActive={() => setActiveTab(1)}
       />
       <OneTab
         key={2}
         text='Hiring'
         isActive={activeTab === 2}
         setActive={() => setActiveTab(2)}
       />
     </div>
   </div>
   {activeTab !== -1 && (
     <div className='text-black font-normal text-2xl'>{tabTexts[activeTab].content}</div>
   )}
 </div>

 </section>
 </>

    )
}
   