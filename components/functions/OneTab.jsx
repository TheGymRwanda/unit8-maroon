export function OneTab({ text, isActive, setActive }) {
  return (
    <span
      onClick={() => setActive()}
      className={`mb-5 cursor-pointer text-2xl ${
        isActive ? 'border-b-2 border-primary-purple text-primary-purple' : 'text-dark-grey'
      }`}
    >
      {text}
    </span>
  );
}
