import linkArrow from "../../public/assets/icons/link-arrow.svg";
import Image from "next/image";
export default function Arrow(props) {
  return (
    <>
      <a
       
        className={` group flex  w-fit items-center gap-1.5 border ${props.style}`}
        href={props.link}
      >
        <p className={`font-Neufile text-2xl ${props.textStyle}`}>
          {props.text}
        </p>
        <div className={`relative h-3.34 w-3.5 ${props.imageWrapperStyle}`}>
          <svg
            className={`duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-1 ${props.imageStyle}`}
            width="15"
            height="16"
            viewBox="0 0 15 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.86304 1.63623H13.9994V12.7726"
              stroke="black"
              stroke-width="1.5"
            />
            <line
              x1="13.8934"
              y1="1.53033"
              x2="0.529731"
              y2="14.894"
              stroke="black"
              stroke-width="1.5"
            />
          </svg>
        </div>
      </a>
    </>
  );
}
