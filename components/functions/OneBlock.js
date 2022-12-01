
import Image from 'next/image'
import downarrow from '../../public/assets/icons/down-arrow.png'
import downArrow from '../../public/assets/icons/arrow-down.svg'
import {motion} from 'framer-motion'
import DownArrow from '../ui/DownArrow';
export function OneBlock({
    title,
    text,
    isOpened,
    expand,
  }) {
    return (
      <div className='flex flex-col '>
        <div
          onClick={() => expand()}
          className={`  transition-all duration-300  flex w-full cursor-pointer justify-between border-b-1   border-black ${isOpened ? 'border-b border-primary-purple mb-5.5' : 'border-b border-solid-black'} `}
        >

          
          <h2 className={`${
            isOpened ? 'text-primary-purple' : 'text-black'
          } w-full cursor-pointer text-xl `}
        >{title}</h2>
          <div
            className={`${
              isOpened ? 'rotate-180 mb-1' : 'rotate-0 mt-2'
            }  cursor-pointer transition-all duration-300 ease-in`}

          >

            <DownArrow color={` ${isOpened ? "#5602E0" : "black"} `} />
            {/* <Image src={ downArrow} height={11} width={11.53} alt='Arrow' /> */}
          </div>
        </div>
  
        <motion.p animate={{opacity: isOpened ? 1 : 0,  height: isOpened ? "auto" : 0}} transition={{ease: "easeIn", duration: 0.3}}
          className={`text-xl leading-7  `}
        >
          {text}
        </motion.p>
      </div>
    );
  }