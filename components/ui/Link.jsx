export default function Link(props) {
    return (
      <>
        <a
          className={` group flex cursor-pointer  w-fit items-center gap-1.5 ${props.style}`}
          href={props.link}
        >
          <p className={`font-Neufile md:text-2xl text-xl font-normal not-italic leading-7 ${props.textStyle}`}>
            {props.text}
          </p>
          <div className={`relative ${props.imageWrapperStyle}`}>
            {props.arrow}
          </div>
        </a>
      
      </>
    );
  }
  
