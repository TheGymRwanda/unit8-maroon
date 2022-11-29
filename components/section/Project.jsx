import PageLink from "../ui/Link";
import Svg from "../ui/Svg";

export default function Project() {
  const projects = [
    "Dacade",
    "Bitlipa",
    "Symplifi",
    "UTU.IO",
    "NeueUX",
    "Lab3",
    "Even"
  ];

  return (
    <section className="flex justify-center">
      <div className="flex w-full justify-between">
        <ul className="font-Neufile xl:w-59.25">
          <h3 className="mb-2.75 text-dark-grey">Project</h3>
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
        <div className="hidden flex-col justify-center xl:flex">
          <img
            className="h-111 w-202.75"
            src="/assets/images/project-sample.png"
            alt="sample image"
          />
          <p className="mt-1.5 font-Neufile text-2xl">
            Peer-to-Peer learning platform
          </p>
        </div>
      </div>
    </section>
  );
}
