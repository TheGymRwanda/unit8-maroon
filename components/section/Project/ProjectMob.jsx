import PageLink from "../../ui/Link";
import Svg from "../../ui/Svg";
import React, { useState } from "react";
import { values } from "../../../dataCollection/data";


export default function ProjectMob() {
  const [show, setShow] = useState('');
  return (
    <section className="mt-20 xl:hidden flex flex-col justify-center sm:mt-auto">
      <h3 className="mb-2.75 text-xl text-dark-grey md:text-2xl">
        Project
      </h3>
      <div className="flex w-full justify-between">
        <ul className="xl:w-59.25  flex  flex-col font-Neufile">
          {values.map((value, index) => {
            return (
              <li key={index}
                className="group -ml-2 flex flex-col justify-center leading-18 tracking-spacing-xl"
              >
                <div className="group mb-7 w-fit md:mb-1" onClick={() => {
                  show === ''? setShow(value.link):setShow('')
                }}>
                  <PageLink
                    style={
                      "md:gap-4 gap-0.5 md:pt-auto pt-5 border-b-2 border-white hover:border-b-2 hover:border-transparent -pl-2 ml-2 pb-3"
                    }
                    text={value.link}

                    textStyle={"md:text-headingOne  text-13 -ml-1"}
                    arrow={<Svg />}
                    imageWrapperStyle="project__iconWrapper absolute hidden xl:group-hover:block  -top-[1.5rem]"
                  />
                  <div className="project__line ml-2 -mt-1 hidden border-b-2 group-hover:block xl:group-hover:border-black"></div>
                </div>
                {show === value.link && <div className={` sm:mt-4 -mt-4 shadow-lg border sm:mb-12 mb-4 ml-2`} >
                  <img src={value.image} alt="first image" />
                </div>}
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  );
}