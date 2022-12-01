

import React, { useState } from 'react';
import { OneTab } from '../../functions/OneTab';
import PageLink from '../../ui/Link';
import Svg from '../../ui/Svg';
const tabTexts = [
  { id: 0, text: 'Tab 1', content:  <p>About us Blockchain will do for cooperation what the internet did for communication - We believe that blockchain technology has the potential to shift financial models as we know them, creating revenue streams that are more sustainable and fair for users. We envision a future in which financial infrastructures are rather decentralised and horizontal, in which any member can have a say. Through its immutability, blockchain technology provides trustworthy infrastructures that allow cooperation on a large scale.  <PageLink text="Learn more" style="gap-2 " textStyle="underline" arrow=<Svg />/> <br /> Work Meaningful - With our work, we aim to impact society positively. The projects we get involved with the aim to solve significant problems in our society, sustainably and in the long run, rather than looking for a quick profit through speculation or encouraging harmful behavior.</p>},
  { id: 1, text: 'Tab 2', content:  <p>What we do Blockchain will do for cooperation what the internet did for communication - We believe that blockchain technology has the potential to shift financial models as we know them, creating revenue streams that are more sustainable and fair for users. We envision a future in which financial infrastructures are rather decentralised and horizontal, in which any member can have a say. Through its immutability, blockchain technology provides trustworthy infrastructures that allow cooperation on a large scale.  <PageLink text="Learn more" style="gap-2" textStyle="underline" arrow=<Svg />/> <br /> Work Meaningful - With our work, we aim to impact society positively. The projects we get involved with the aim to solve significant problems in our society, sustainably and in the long run, rather than looking for a quick profit through speculation or encouraging harmful behavior.</p>},
  { id: 2, text: 'Tab 3', content:  <p>Hiring Blockchain will do for cooperation what the internet did for communication - We believe that blockchain technology has the potential to shift financial models as we know them, creating revenue streams that are more sustainable and fair for users. We envision a future in which financial infrastructures are rather decentralised and horizontal, in which any member can have a say. Through its immutability, blockchain technology provides trustworthy infrastructures that allow cooperation on a large scale.  <PageLink text="Learn more" style="gap-2" textStyle="underline" arrow=<Svg />/> </p>},
  
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
     <div className='text-black font-normal text-2xl '>{tabTexts[activeTab].content}</div>
   )}
 </div>

 </section>
 </>

    )
}
   