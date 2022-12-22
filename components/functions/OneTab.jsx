
export function OneTab({
    text,
    isActive,
    setActive,
  }) {
    return (
      <span 
        onClick={() => setActive()}
        className={`cursor-pointer  transition-all ease-in duration-500  text-2xl mb-5 ${
          isActive ? 'text-primary-purple border-b-2  border-primary-purple' : 'text-dark-grey border-transparent border-b-2'
        }`}
      >
        {text}
      </span>
    );
  }
  

