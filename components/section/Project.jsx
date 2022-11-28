import Link from "../ui/Link"
import Svg from "../ui/Svg"
export default function Project() {
  const projects = ["Dacade", "Bitlipa", "Symplifi", "UTU.IO", "NeueUX", "Lab3", "Even"];
  
  return (
    <section className="flex justify-center  mt-26">
      <div className="w-11.5/12 flex justify-between">
        <ul className="w-[237px] font-Neufile">
          <h3 className="mb-[11px] text-dark-grey">Project</h3>
          {
            projects.map((item, index) => <li className="mb-0.5 desktop:h-18 -ml-2 tracking-spacing-xl leading-18 flex flex-col justify-center" key={index}>
              <Link
                style={"desktop:gap-0.75 gap-0.5 desktop:pt-auto pt-5 border-b-2 border-white hover:border-b-2 hover:border-black -pl-2 ml-2 pb-3"}
                text={item}
                textStyle={"desktop:text-[4rem] sm:text-[3.313rem] -ml-1"}
                arrow={<Svg />}
                imageWrapperStyle="absolute hidden desktop:group-hover:block -top-3.5"
              />
            </li>)
          }
        </ul>
        <div className="desktop:flex flex-col justify-center hidden">
          <img className="w-202.75 h-111" src="/assets/images/project-sample.png" alt="sample image" />
        </div>
        
      </div>
    </section>
  )
}
