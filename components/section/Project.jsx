import PageLink from "../ui/Link";
import Svg from "../ui/Svg";
import React, { useState } from "react";
import ProjectCard from "../cards/ProjectCard";
import ProjectMobileCard from "../cards/ProjectMobileCard";
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
    { image: "/assets/images/project-sample.png", text: "Peer-to-Peer learning platform" },
    { image: "/assets/images/project-sample.png", text: "Peer-to-Peer learning platform" },
    { image: "/assets/images/project-sample.png", text: "Peer-to-Peer learning platform" },
    { image: "/assets/images/project-sample.png", text: "Peer-to-Peer learning platform" },
    { image: "/assets/images/project-sample.png", text: "Peer-to-Peer learning platform" },
    { image: "/assets/images/project-sample.png", text: "Peer-to-Peer learning platform" },
    { image: "/assets/images/project-sample.png", text: "Peer-to-Peer learning platform" },
  ];

  return (
    <section className="flex flex-col xl:flex xl:flex-row justify-center">
      <div className="flex w-full justify-between">
        <ul className="font-Neufile xl:w-59.25">
          <h3 className="mb-2.75 text-dark-grey md:text-2xl text-xl">Project</h3>
          {projects.map((item, index) => (
            <li
              className="md:h-18  group mb-0.5 -ml-2 flex flex-col justify-center leading-18 tracking-spacing-xl"
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
              <div className="xl:hidden">
              {show === 0 && (
              <ProjectCard className="border" image={images[0].image} text={"P2P learning platform-1"}/>
              )}{show === 1 && (
                <ProjectCard image={images[1].image} text={"P2P learning platform-1"} />
              )}{show === 2 && (
                <ProjectCard image={images[2].image} text={"P2P learning platform-2"} />
              )}{show === 3 && (
                <ProjectCard image={images[3].image} text={"P2P learning platform-3"} />
              )}{show === 4 && (
                <ProjectCard image={images[4].image} text={"P2P learning platform-4"} />
              )} {show === 5 && (
                <ProjectCard image={images[5].image} text={"P2P learning platform-2"} />
              )} {show === 6 && (
                <ProjectCard image={images[6].image} text={"P2P learning platform-2"} />
              )}
              </div>
            </li>
          )
        )
      }
        </ul>

        {show === 0 && (
          <ProjectCard className="border" image={images[0].image} text={images[0].text}/>
        )}{show === 1 && (
          <ProjectCard image={images[1].image} text={"P2P learning platform-1"} />
        )}{show === 2 && (
          <ProjectCard image={images[2].image} text={images[2].text} />
        )}{show === 3 && (
          <ProjectCard image={images[3].image} text={images[3].text} />
        )}{show === 4 && (
          <ProjectCard image={images[4].image} text={images[4].text} />
        )} {show === 5 && (
          <ProjectCard image={images[5].image} text={images[5].text} />
        )} {show === 6 && (
          <ProjectCard image={images[6].image} text={images[6].text} />
        )}
      </div>
    </section>
  );
}
