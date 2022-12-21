import PageLink from "../../ui/Link";
import Svg from "../../ui/Svg";
import React, {useState} from "react";
import Wrapper from "../../wrappers/Wrapper";
import ProjectMob from "./ProjectMob";
// import MobileFunction from "./DesktopFunction";
import ProjectCard from "../../cards/ProjectCard";
// import DesktopFunction from "./DesktopFunction";


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
    {
      image: "https://raw.githubusercontent.com/TheGymRwanda/unit8-red/dev/public/assets/images/dacade.webp",
      text: "Peer-to-Peer learning platform"
    },
    {
      image: "https://raw.githubusercontent.com/TheGymRwanda/unit8-red/dev/public/assets/images/bitlipa.webp",
      text: "Peer-to-Peer learning platform"
    },
    {
      image: "https://raw.githubusercontent.com/TheGymRwanda/unit8-red/dev/public/assets/images/symplifi.webp",
      text: "Peer-to-Peer learning platform"
    },
    {
      image: "https://raw.githubusercontent.com/TheGymRwanda/unit8-red/dev/public/assets/images/utu.webp",
      text: "Peer-to-Peer learning platform"
    },
    {
      image: "https://raw.githubusercontent.com/TheGymRwanda/unit8-red/dev/public/assets/images/neueux.webp",
      text: "Peer-to-Peer learning platform"
    },
    {
      image: "https://raw.githubusercontent.com/TheGymRwanda/unit8-red/dev/public/assets/images/lab3.webp",
      text: "Peer-to-Peer learning platform"
    },
    {
      image: "https://raw.githubusercontent.com/TheGymRwanda/unit8-red/dev/public/assets/images/even.webp",
      text: "Peer-to-Peer learning platform"
    }
  ];

  return (
    <Wrapper>
      <ProjectMob/>
      <section className="mt-32 flex flex-col justify-center sm:mt-auto xl:flex xl:flex-row">
        <div className="flex w-full justify-between">
          <ul className="xl:w-59.25  xl:flex hidden flex-col font-Neufile md:gap-10 xl:gap-0">
            <h3 className="mb-2.75 text-xl text-dark-grey md:text-2xl">
              Project
            </h3>
            {projects.map((item, index) => (
              <li
                className="group  mb-0.5 -ml-2  flex flex-col justify-center leading-18 tracking-spacing-xl"
                key={index}
              >
                <div className="group mb-7 w-fit md:mb-1">
                  <PageLink
                    onClick={() => SetMobileImage("flex")}
                    style={
                      "md:gap-4 gap-0.5 md:pt-auto pt-5 border-b-2 border-white hover:border-b-2 hover:border-transparent -pl-2 ml-2 pb-3"
                    }
                    text={item}
                    textStyle={"md:text-headingOne  text-13 -ml-1"}
                    arrow={<Svg />}
                    imageWrapperStyle="project__iconWrapper absolute hidden xl:group-hover:block  -top-[1.5rem]"
                    showIndex={() => setShow(index)}
                    hide={() => setShow(null)}
                  />
                  <div className="project__line ml-2 -mt-1 hidden border-b-2 group-hover:block group-hover:border-black"></div>
                </div>
                <div className="-mt-9 xl:hidden ">
                {show === 0 && (
                    <ProjectCard
                      image={images[0].image}
                      text={"P2P learning platform-1"}
                    />
                  )}
      {show === 1 && (
                    <ProjectCard
                      image={images[1].image}
                      text={"P2P learning platform-1"}
                    />
                  )}
      {show === 2 && (
                    <ProjectCard
                      image={images[2].image}
                      text={"P2P learning platform-2"}
                    />
                  )}
      {show === 3 && (
                    <ProjectCard
                      image={images[3].image}
                      text={"P2P learning platform-3"}
                    />
                  )}
      {show === 4 && (
                    <ProjectCard
                      image={images[4].image}
                      text={"P2P learning platform-4"}
                    />
                  )}{" "}
      {show === 5 && (
                    <ProjectCard
                      image={images[5].image}
                      text={"P2P learning platform-2"}
                    />
                  )}{" "}
      {show === 6 && (
                    <ProjectCard
                      image={images[6].image}
                      text={"P2P learning platform-2"}
                    />
                  )}
                </div>
              </li>
            ))}
          </ul>
          {show === 0 && (
                    <ProjectCard
                      image={images[0].image}
                      text={"P2P learning platform-1"}
                    />
                  )}
      {show === 1 && (
                    <ProjectCard
                      image={images[1].image}
                      text={"P2P learning platform-1"}
                    />
                  )}
      {show === 2 && (
                    <ProjectCard
                      image={images[2].image}
                      text={"P2P learning platform-2"}
                    />
                  )}
      {show === 3 && (
                    <ProjectCard
                      image={images[3].image}
                      text={"P2P learning platform-3"}
                    />
                  )}
      {show === 4 && (
                    <ProjectCard
                      image={images[4].image}
                      text={"P2P learning platform-4"}
                    />
                  )}{" "}
      {show === 5 && (
                    <ProjectCard
                      image={images[5].image}
                      text={"P2P learning platform-2"}
                    />
                  )}{" "}
      {show === 6 && (
                    <ProjectCard
                      image={images[6].image}
                      text={"P2P learning platform-2"}
                    />
                  )}
        </div>
      </section>
    </Wrapper>
  );
}
