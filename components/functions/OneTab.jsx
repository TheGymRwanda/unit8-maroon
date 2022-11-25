export function OneTab({
    text,
    isActive,
    setActive,
  }) {
    return (
      <span
        onClick={() => setActive()}
        className={`cursor-pointer transition-all duration-300 ease-in  hover:text-primary-purple text-2xl mb-5 ${
          isActive ? 'text-primary-purple underline' : 'text-dark-grey'
        }`}
      >
        {text}
      </span>
    );
  }
  