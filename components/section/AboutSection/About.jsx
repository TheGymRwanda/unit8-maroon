import React, { useState } from 'react';
import { OneTab } from '../../functions/OneTab';
import PageLink from '../../ui/Link';
import Svg from '../../ui/Svg';
import Wrapper from '../../wrappers/Wrapper';
const tabTexts = [
  { id: 0, text: 'Tab 1', content:  <div className='md:relative'> About us Blockchain will do for cooperation what the internet did for communication - We believe that blockchain technology has the potential to shift financial models as we know them, creating revenue streams that are more sustainable and fair for users. We envision a future in which financial infrastructures are rather decentralised and horizontal, in which any member can have a say. Through its immutability, blockchain technology provides trustworthy infrastructures that allow cooperation on a large scale. <PageLink link="https://www.google.com/" text="Learn more" style="gap-2 md:absolute lg:relative md:right-5 md:bottom-[10rem] lg:right-0 lg:bottom-0" textStyle="underline  group-hover:no-underline" arrow=<Svg />/> <br /> <br /> Work Meaningful - With our work, we aim to impact society positively. The projects we get involved with the aim to solve significant problems in our society, sustainably and in the long run, rather than looking for a quick profit through speculation or encouraging harmful behavior.</div>},
  { id: 1, text: 'Tab 1', content:  <div className='md:relative'> About us Blockchain will do for cooperation what the internet did for communication - We believe that blockchain technology has the potential to shift financial models as we know them, creating revenue streams that are more sustainable and fair for users. We envision a future in which financial infrastructures are rather decentralised and horizontal, in which any member can have a say. Through its immutability, blockchain technology provides trustworthy infrastructures that allow cooperation on a large scale. <PageLink link="https://www.google.com/" text="Learn more" style="gap-2 md:absolute lg:relative md:right-5 md:bottom-[10rem] lg:right-0 lg:bottom-0" textStyle="underline group-hover:no-underline" arrow=<Svg />/> <br /> <br /> Work Meaningful - With our work, we aim to impact society positively. The projects we get involved with the aim to solve significant problems in our society, sustainably and in the long run, rather than looking for a quick profit through speculation or encouraging harmful behavior.</div>},
  { id: 2, text: 'Tab 1', content:  <div className='md:relative'> About us Blockchain will do for cooperation what the internet did for communication - We believe that blockchain technology has the potential to shift financial models as we know them, creating revenue streams that are more sustainable and fair for users. We envision a future in which financial infrastructures are rather decentralised and horizontal, in which any member can have a say. Through its immutability, blockchain technology provides trustworthy infrastructures that allow cooperation on a large scale. <PageLink link="https://www.google.com/" text="Learn more" style="gap-2 md:absolute md:right-5 md:bottom-[-0.01rem] lg:relative  lg:right-0 lg:bottom-0 " textStyle="underline group- hover:no-underline" arrow=<Svg />/> </div>},
  
];

export default function About (){
    const [activeTab, setActiveTab] = useState(0);
    return(
      <Wrapper>
      <section className='hidden md:flex  justify-end py-24'>
        <div className='hidden w-semi px-14 font-Neufile md:block '>
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
      </Wrapper>

    )
}
   