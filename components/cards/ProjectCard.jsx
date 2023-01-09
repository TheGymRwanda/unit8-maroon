import {motion} from 'framer-motion'
export default function ProjectCard(props){
    return(
      <div className='h-60'>
        <div className='sticky top-20 h-31'>
        <motion.div initial={{opacity: 0}} animate={{opacity:1}} transition={{ease: "easeIn", duration: 0.5, delay: 0.1}}
                className={`h-fit ml-2 mb-21.657 xl:w-47.3125 mt-10 flex-col justify-center xl:block group-hover:flex  hidden`}
              >
                <img
                  className={'project__image rounded-2xl ' + props.imgStyle}
                  src={props.image}
                  alt="mobile  image"
                />
                <p className=" mt-2 font-Neufile text-xl">
                  {props.text}
                </p>
        </motion.div>  
      </div>
      </div>
    )
}
