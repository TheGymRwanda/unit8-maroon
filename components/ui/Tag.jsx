export default function Tag(props) {
  return (
    <a
      className={`h-fit rounded-4.75 bg-light-grey py-0.75 px-2.5 font-Neufile text-lg font-normal tracking-spacing-lg text-grey ${props.style}`}
      href={props.link}
    >
      {props.children}
    </a>
  );
}

