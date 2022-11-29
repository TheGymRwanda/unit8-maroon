
import Image from 'next/image'
import downArrow from '../../public/assets/icons/down-arrow.png'
import {motion} from 'framer-motion'
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
          className={`flex w-full cursor-pointer justify-between border-b-1 ${isOpened ? 'border-b border-primary-purple' : 'border-b border-solid-black'} `}
        >

          
          <h2 className={`${
            isOpened ? 'text-primary-purple' : 'text-black'
          } w-full cursor-pointer  `}
        >{title}</h2>
          <div
            className={`${
              isOpened ? 'rotate-180' : 'rotate-0'
            } mb-1 cursor-pointer transition-all duration-300 ease-in`}
          >
            <Image src={downArrow} height={11} width={11.53} alt='Arrow' />
          </div>
        </div>
  
        <motion.p animate={{opacity: isOpened ? 1 : 0, height: isOpened ? "auto" : 0}} transition={{ease: "easeIn", duration: 0.3}}
          className={``}
        >
          {text}
        </motion.p>
      </div>
    );
  }