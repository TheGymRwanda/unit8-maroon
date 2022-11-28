import Link from "../ui/Link"
import Svg from "../ui/Svg"
import React,{ useState } from "react";


export default function Project() {
  const projects = ["Dacade", "Bitlipa", "Symplifi", "UTU.IO", "NeueUX", "Lab3", "Even"];
  
  return (
    <section className="flex justify-center mt-34">
      <div className="w-11.5/12 flex justify-between">
        <ul className="desktop:w-59.25 font-Neufile">
          <h3 className="mb-2.75 text-dark-grey">Project</h3>
          {
            projects.map((item, index) => <li className="group mb-0.5 desktop:h-18 -ml-2 tracking-spacing-xl leading-18 flex flex-col justify-center" key={index}>
              <Link
                onClick={() => SetMobileImage('flex')}
                style={"desktop:gap-0.75 gap-0.5 desktop:pt-auto pt-5 border-b-2 border-white hover:border-b-2 hover:border-black -pl-2 ml-2 pb-3"}
                text={item}
                textStyle={"ipad-pro:text-heading-one mobile:text-13 -ml-1"}
                arrow={<Svg />}
                imageWrapperStyle="absolute hidden desktop:group-hover:block -top-3.5"
              />
              <div className={`hidden group-hover:flex flex-col justify-center desktop:group-hover:hidden ml-2 desktop:hidden mb-21.657 mt-5.157`}>
                <img src="/assets/images/project-sample.png" alt="mobile  image" />
                <p className="text-xl font-Neufile mt-1.5">P2P learning platform </p>
              </div>
            </li>)
          }
        </ul>
        <div className="desktop:flex flex-col justify-center hidden">
          <img className="w-202.75 h-111" src="/assets/images/project-sample.png" alt="sample image" />
          <p className="text-2xl font-Neufile mt-1.5">Peer-to-Peer learning platform</p>
        </div>
        
      </div>
    </section>
  )
}
