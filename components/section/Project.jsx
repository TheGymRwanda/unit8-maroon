import PageLink from "../ui/Link";
import Svg from "../ui/Svg";
import React, { useState } from "react";
import ProjectCard from "../cards/ProjectCard";
export default function Project() {
  const [show, setShow] = useState(null);
  const projects = [
    "Dacade",
    "Bitlipa",
    "Symplifi",
    "UTU.IO",
    "NeueUX",
    "Lab3",
    "Even"
  ];

  const images = [
    { image: "/assets/images/project-sample.png", text: "tessttttttt" },
    { image: "/assets/images/project-sample.png", text: "tesstt  ttttt" },
    { image: "/assets/images/project-sample.png", text: "tesstt  3 ttttt" },
    { image: "/assets/images/project-sample.png", text: "tesst 4 tttttt" },
    { image: "/assets/images/project-sample.png", text: "tesstt  5 ttttt" },
    { image: "/assets/images/project-sample.png", text: "tesstt  6 ttttt" },
    { image: "/assets/images/project-sample.png", text: "tessttt  6 tttt" },
  ];

  return (
    <section className="flex justify-center">
      <div className="flex w-full justify-between">
        <ul className="font-Neufile xl:w-59.25">
          <h3 className="mb-2.75 text-dark-grey md:text-2xl text-xl">Project</h3>
          {projects.map((item, index) => (
            <li
              className="md:h-18 group mb-0.5 -ml-2 flex flex-col justify-center leading-18 tracking-spacing-xl"
              key={index}
            >
              <PageLink
                onClick={() => SetMobileImage("flex")}
                style={
                  "md:gap-0.75 gap-0.5 md:pt-auto pt-5 border-b-2 border-white hover:border-b-2 hover:border-black -pl-2 ml-2 pb-3"
                }
                text={item}
                textStyle={"md:text-headingOne text-13 -ml-1"}
                arrow={<Svg />}
                imageWrapperStyle="absolute hidden md:group-hover:block -top-3.5"
                showIndex={() => setShow(index)}
                hide={() =>setShow(null)}
              />
              <div
                className={`xl :hidden ml-2 mb-21.657 mt-5.157 hidden flex-col  justify-center group-hover:flex xl:group-hover:hidden`}
              >
                <img
                  src="/assets/images/project-sample.png"
                  alt="mobile  image"
                />
                <p className="mt-1.5 font-Neufile text-xl">
                  P2P learning platform{" "}
                </p>
              </div>
            </li>
          ))}
        </ul>

        {show === 0 && (
          <ProjectCard
            className="border "
            image={images[0].image}
            text={images[0].text}
          />
        )}
        {show === 1 && (
          <ProjectCard image={images[1].image} text={images[1].text} />
        )}
        {show === 2 && (
          <ProjectCard image={images[2].image} text={images[2].text} />
        )}
        {show === 3 && (
          <ProjectCard image={images[3].image} text={images[3].text} />
        )}
        {show === 4 && (
          <ProjectCard image={images[4].image} text={images[4].text} />
        )} {show === 5 && (
          <ProjectCard image={images[5].image} text={images[5].text} />
        )} {show === 6 && (
          <ProjectCard image={images[6].image} text={images[6].text} />
        )}

        {/* <div className="hidden flex-col justify-center xl:flex pb-10">
          <img
            className="project__image h-111 w-202.75 rounded-2xl"
            src="/assets/images/project-sample.png"
            alt="sample image"
          />
          <p className="mt-0.5 font-Neufile text-2xl">
            Peer-to-Peer learning platform
          </p>
        </div> */}
      </div>
    </section>
  );
}
