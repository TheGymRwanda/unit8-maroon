export default function PageLink(props) {
  return (
    <>
      <a
        className={`group flex w-fit cursor-pointer items-center ${props.style}`}
        href={props.link}
      >
        <p
          className={`font-Neufile text-xl leading-7 md:text-2xl ${props.textStyle}`}
        >
          {props.text}
        </p>
        <div className={`relative ${props.imageWrapperStyle}`}>
          {props.arrow}
        </div>
      </a>
    </>
  );
}
