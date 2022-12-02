export default function Tag(props) {
  return (
    <a
      className={`h-fit rounded-4.75 bg-[#f4f4f4] py-0.1875 px-0.625 font-Neufile text-lg font-normal tracking-spacing-lg text-primaryGrey ${props.style}`}
      href={props.link}
    >
      {props.children}
    </a>
  );
}