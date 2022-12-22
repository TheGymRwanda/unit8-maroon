export default function PageLink(props) {
  return (
    <>
      {/* Section for desktop */}
      <a
        className={`group hidden w-fit cursor-pointer  items-center gap-1.5 xl:flex ${props.style}`}
        href={props.link}
        onMouseEnter={() => props.showIndex()}
      >
        <p className={`text-xl font-normal not-italic leading-7 md:text-2xl ${props.textStyle}`}>{props.text}</p>
        <div className={`relative ${props.imageWrapperStyle}`}>{props.arrow}</div>
      </a>

      {/* section for mobile */}
      <a
        className={` group flex w-fit cursor-pointer  items-center gap-1.5 xl:hidden ${props.style}`}
        href={props.link}
      >
        <p className={`font-Neufile text-xl font-normal not-italic leading-7 md:text-2xl ${props.textStyle}`}>
          {props.text}
        </p>
        <div className={`relative ${props.imageWrapperStyle}`}>{props.arrow}</div>
      </a>
    </>
  );
}
