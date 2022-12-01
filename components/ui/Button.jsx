export default function Button({ text, styles }) {
  return (
    <button
      className={`font-Neufile  text-2xl font-normal not-italic leading-7  text-dark-grey  ${styles} `}>
      {text}
    </button>
  );
}
