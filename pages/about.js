import About from "../components/section/AboutSection/About";
import AboutMobile from "../components/section/AboutSection/AboutMobile";

export default function about(){
    return(
        <>
        <div className=" px-5 flex md:justify-end md:px-16 bg-red-400">
        <About />
        
        <AboutMobile />

        </div>
       
        </>
    )

   
}