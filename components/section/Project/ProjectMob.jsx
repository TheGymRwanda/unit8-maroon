import PageLink from "../../ui/Link";
import Svg from "../../ui/Svg";
import React, {useState} from "react";
import Wrapper from "../../wrappers/Wrapper";
// import MobileFunction from "./DesktopFunction";
import ProjectCard from "../../cards/ProjectCard";
// import DesktopFunction from "./DesktopFunction";


export default function ProjectMob(props) {
  const [show, setShow] = useState(false);
  const handleEvent = e => {
    setShow(current => !current)
  }
  const [showb, setShowb] = useState(false);
  const handleEventb = e => {
    setShowb(current => !current)
  }
  const [showc, setShowc] = useState(false);
  const handleEventc = e => {
    setShowc(current => !current)
  }
  const [showd, setShowd] = useState(false);
  const handleEventd = e => {
    setShowd(current => !current)
  }
  const [showe, setShowe] = useState(false);
  const handleEvente = e => {
    setShowe(current => !current)
  }
  const [showf, setShowf] = useState(false);
  const handleEventf = e => {
    setShowf(current => !current)
  }


  const images = [
    {
      link:"Dacade",
      image: "https://raw.githubusercontent.com/TheGymRwanda/unit8-red/dev/public/assets/images/dacade.webp",
      text: "Peer-to-Peer learning platform"
    },
    {
      link:"Bitlipa",
      image: "https://raw.githubusercontent.com/TheGymRwanda/unit8-red/dev/public/assets/images/bitlipa.webp",
      text: "Peer-to-Peer learning platform"
    },
    {
      link:"Symplify",
      image: "https://raw.githubusercontent.com/TheGymRwanda/unit8-red/dev/public/assets/images/symplifi.webp",
      text: "Peer-to-Peer learning platform"
    },
    {
      link:"UTU.IO",
      image: "https://raw.githubusercontent.com/TheGymRwanda/unit8-red/dev/public/assets/images/utu.webp",
      text: "Peer-to-Peer learning platform"
    },
    {
      link:"NeueUX",
      image: "https://raw.githubusercontent.com/TheGymRwanda/unit8-red/dev/public/assets/images/neueux.webp",
      text: "Peer-to-Peer learning platform"
    },
    {
      link:"Lab3",
      image: "https://raw.githubusercontent.com/TheGymRwanda/unit8-red/dev/public/assets/images/lab3.webp",
      text: "Peer-to-Peer learning platform"
    },
    {
      link:"Even",
      image: "https://raw.githubusercontent.com/TheGymRwanda/unit8-red/dev/public/assets/images/even.webp",
      text: "Peer-to-Peer learning platform"
    }
  ];

  return (
      <section className="mt-20 xl:hidden flex flex-col justify-center sm:mt-auto">
            <h3 className="mb-2.75 text-xl text-dark-grey md:text-2xl">
              Project
            </h3>
        <div className="flex w-full justify-between">
          <ul className="xl:w-59.25  flex  flex-col font-Neufile">
              <li
                className="group -ml-2 flex flex-col justify-center leading-18 tracking-spacing-xl"
              >
                <div className="group mb-7 w-fit md:mb-1" onClick={handleEvent}>
                  <PageLink
                    style={
                      "md:gap-4 gap-0.5 md:pt-auto pt-5 border-b-2 border-white hover:border-b-2 hover:border-transparent -pl-2 ml-2 pb-3"
                    }
                    text={images[0].link}
                    textStyle={"md:text-headingOne  text-13 -ml-1"}
                    arrow={<Svg />}
                    imageWrapperStyle="project__iconWrapper absolute hidden xl:group-hover:block  -top-[1.5rem]"
                  />
                  <div className="project__line ml-2 -mt-1 hidden border-b-2 group-hover:block group-hover:border-black"></div>
                </div>
                <div className={`${show ? "block": "hidden"} sm:mt-4 -mt-4 shadow-lg border sm:mb-12 mb-4 ml-2`} >
                  <img src={images[0].image} alt="first image" />
                </div>
              </li>
              <li
                className="group  -mt-2 -ml-2 flex flex-col justify-center leading-18 tracking-spacing-xl"
              >
                <div className="group mb-7 w-fit md:mb-1" onClick={handleEventb}>
                  <PageLink
                    style={
                      "md:gap-4 gap-0.5 md:pt-auto pt-5 border-b-2 border-white hover:border-b-2 hover:border-transparent -pl-2 ml-2 pb-3"
                    }
                    text={images[1].link}
                    textStyle={"md:text-headingOne  text-13 -ml-1"}
                    arrow={<Svg />}
                    imageWrapperStyle="project__iconWrapper absolute hidden xl:group-hover:block  -top-[1.5rem]"
                  />
                  <div className="project__line ml-2 -mt-1 hidden border-b-2 group-hover:block group-hover:border-black"></div>
                </div>
                <div className={`${showb ? "block" : "hidden"} sm:mt-4 -mt-4 shadow-lg border sm:mb-12 mb-4 ml-2`}>
                  <img src={images[1].image} alt="first image" />
                </div>
              </li>
              <li
                className="group  -mt-2 -ml-2 flex flex-col justify-center leading-18 tracking-spacing-xl"
              >
                <div className="group mb-7 w-fit md:mb-1" onClick={handleEventc}>
                  <PageLink
                    style={
                      "md:gap-4 gap-0.5 md:pt-auto pt-5 border-b-2 border-white hover:border-b-2 hover:border-transparent -pl-2 ml-2 pb-3"
                    }
                    text={images[2].link}
                    textStyle={"md:text-headingOne  text-13 -ml-1"}
                    arrow={<Svg />}
                    imageWrapperStyle="project__iconWrapper absolute hidden xl:group-hover:block  -top-[1.5rem]"
                  />
                  <div className="project__line ml-2 -mt-1 hidden border-b-2 group-hover:block group-hover:border-black"></div>
                </div>
                <div className={`${showc ? "block" : "hidden"} sm:mt-4 -mt-4 shadow-lg border sm:mb-12 mb-4 ml-2`}>
                  <img src={images[2].image} alt="first image" />
                </div>
              </li>
              <li
                className="group  -mt-2 -ml-2 flex flex-col justify-center leading-18 tracking-spacing-xl"
              >
                <div className="group mb-7 w-fit md:mb-1" onClick={handleEventd}>
                  <PageLink
                    style={
                      "md:gap-4 gap-0.5 md:pt-auto pt-5 border-b-2 border-white hover:border-b-2 hover:border-transparent -pl-2 ml-2 pb-3"
                    }
                    text={images[3].link}
                    textStyle={"md:text-headingOne  text-13 -ml-1"}
                    arrow={<Svg />}
                    imageWrapperStyle="project__iconWrapper absolute hidden xl:group-hover:block  -top-[1.5rem]"
                  />
                  <div className="project__line ml-2 -mt-1 hidden border-b-2 group-hover:block group-hover:border-black"></div>
                </div>
                <div className={`${showd ? "block" : "hidden"} sm:mt-4 -mt-4 shadow-lg border sm:mb-12 mb-4 ml-2`}>
                  <img src={images[3].image} alt="first image" />
                </div>
                </li>
                <li
                className="group  -mt-2 -ml-2 flex flex-col justify-center leading-18 tracking-spacing-xl"
              >
                <div className="group mb-7 w-fit md:mb-1" onClick={handleEvente}>
                  <PageLink
                    style={
                      "md:gap-4 gap-0.5 md:pt-auto pt-5 border-b-2 border-white hover:border-b-2 hover:border-transparent -pl-2 ml-2 pb-3"
                    }
                    text={images[4].link}
                    textStyle={"md:text-headingOne  text-13 -ml-1"}
                    arrow={<Svg />}
                    imageWrapperStyle="project__iconWrapper absolute hidden xl:group-hover:block  -top-[1.5rem]"
                  />
                  <div className="project__line ml-2 -mt-1 hidden border-b-2 group-hover:block group-hover:border-black"></div>
                </div>
                <div className={`${showe ? "block" : "hidden"} sm:mt-4 -mt-4 shadow-lg border sm:mb-12 mb-4 ml-2`}>
                  <img src={images[4].image} alt="first image" />
                </div>
              </li>
              <li
                className="group  -mt-2 -ml-2 flex flex-col justify-center leading-18 tracking-spacing-xl"
              >
                <div className="group mb-7 w-fit md:mb-1" onClick={handleEventf}>
                  <PageLink
                    style={
                      "md:gap-4 gap-0.5 md:pt-auto pt-5 border-b-2 border-white hover:border-b-2 hover:border-transparent -pl-2 ml-2 pb-3"
                    }
                    text={images[5].link}
                    textStyle={"md:text-headingOne  text-13 -ml-1"}
                    arrow={<Svg />}
                    imageWrapperStyle="project__iconWrapper absolute hidden xl:group-hover:block  -top-[1.5rem]"
                  />
                  <div className="project__line ml-2 -mt-1 hidden border-b-2 group-hover:block group-hover:border-black"></div>
                </div>
                <div className={`${showf ? "block" : "hidden"} sm:mt5 -mt-4 shadow-lg border sm:mb-12 mb-4 ml-2`}>
                  <img src={images[5].image} alt="first image" />
                </div>
              </li>
          </ul>
        </div>
      </section>
  );
}