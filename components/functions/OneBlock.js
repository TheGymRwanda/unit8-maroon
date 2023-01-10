import { motion } from "framer-motion";
import DownArrow from "../ui/DownArrow";
import AboutTab from "../ui/AboutTab";
export function OneBlock({ title, text, isOpened, expand }) {
  return (
    <div className="flex flex-col ">
      <div
        onClick={expand}
        className={`  border-b-1 flex  w-full cursor-pointer justify-between border-black transition-all   duration-300 ${
          isOpened
            ? "mb-5.5 border-b border-primary-purple"
            : "border-solid-black border-b"
        } `}
      >
        <div
          className={`${
            isOpened ? " rotate-0 " : "rotate-0 "
          } w-5/6  cursor-pointer transition-all duration-300 ease-in`}
        >
          <AboutTab
            text={title}
            styles={`${
              isOpened ? "text-primary-purple" : "text-black"
            } w-full cursor-pointer text-xl `}
          />

          {/* <DownArrow color={` ${isOpened ? "#5602E0" : "black"} `} /> */}
          {/* <Image src={ downArrow} height={11} width={11.53} alt='Arrow' /> */}
        </div>

        {/*         
          <Tes  className={`${
            isOpened ? 'text-primary-purple' : 'text-black'
          } w-full cursor-pointer text-xl `}
        >{title}</Tes> */}

        <div
          className={`${
            isOpened ? "mb-1 rotate-180" : "mt-2 rotate-0"
          }  cursor-pointer transition-all duration-300 ease-in`}
        >
          <DownArrow color={` ${isOpened ? "#5602E0" : "black"} `} />
          {/* <Image src={ downArrow} height={11} width={11.53} alt='Arrow' /> */}
        </div>
      </div>

      <motion.p
        animate={{ opacity: isOpened ? 1 : 0, height: isOpened ? "auto" : 0 }}
        transition={{ ease: "easeIn", duration: 0.3 }}
        className={`text-xl leading-7   `}
      >
        {text}
      </motion.p>
    </div>
  );
}
