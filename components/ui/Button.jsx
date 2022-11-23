export default function Button(props) {
  return (
    <button
      className={`font-Neufile  text-2xl font-normal not-italic leading-7  text-dark-grey hover:text-primary-purple ${props.style} `}>
      {props.children}
    </button>
  );
}
