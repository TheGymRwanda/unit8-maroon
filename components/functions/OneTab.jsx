export function OneTab({
    text,
    isActive,
    setActive,
  }) {
    return (
      <span 
        onClick={() => setActive()}
        className={`cursor-pointer   hover:text-primary-purple text-2xl mb-5 ${
          isActive ? 'text-primary-purple border-b-2 border-primary-purple' : 'text-dark-grey'
        }`}
      >
        {text}
      </span>
    );
  }
  