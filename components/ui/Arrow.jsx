import linkArrow from "../../public/assets/icons/link-arrow.svg";
import Image from "next/image";
export default function Arrow(props) {
  return (
    <>
      <a
        target="_blank"
        className={`group flex  w-fit items-center gap-1.5 border ${props.style}`}
        href={props.link}
      >
        <p className={`font-Neufile text-2xl ${props.textStyle}`}>
          {props.text}
        </p>
        <div className={`relative h-3.34 w-3.5 ${props.imageWrapperStyle}`}>
          <Image
            className={`transition-none duration-300 ease-in-out  group-hover:-translate-y-1 group-hover:translate-x-1 ${props.imageStyle}`}
            src={linkArrow}
            fill="layout"
          />
        </div>
      </a>
    </>
  );
}
