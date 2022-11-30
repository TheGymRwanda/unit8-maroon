import {motion} from 'framer-motion'
export default function ProjectCard(props){
    return(
        <motion.div initial={{opacity: 0}} animate={{opacity:1}} transition={{ease: "easeIn", duration: 1, delay: 0.1}}
                className={`ml-2 mb-21.657 bg-red-500 mt-5.157  flex-col justify-center group-hover:flex  `}
              >
                <img
                  src={props.image}
                  alt="mobile  image"
                />
                <p className="mt-1.5 font-Neufile text-xl">
                  {props.text}
                </p>
              </motion.div>  
 
    )
}