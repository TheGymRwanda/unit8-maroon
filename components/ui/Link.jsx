export default function Link(props) {
    return (
      <>
        <a
          className={` group flex cursor-pointer  w-fit items-center gap-1.5 ${props.style}`}
          href={props.link}
        >
          <p className={`font-Neufile text-2xl font-normal not-italic leading-7  text-dark-grey ${props.textStyle}`}>
            {props.text}
          </p>
          <div className={`relative h-3.34 w-3.5 ${props.imageWrapperStyle}`}>
            {props.arrow}
          </div>
        </a>
      
      </>
    );
  }
  
