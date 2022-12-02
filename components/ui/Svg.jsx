export default function Svg(props) {
  return (
    <svg
      className={`h-2.59 w-2.715 duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-1 md:h-3.34 md:w-3.5 ${props.imageStyle}`}
      width="15"
      height="16"
      viewBox="0 0 15 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.86304 1.63623H13.9994V12.7726"
        stroke="black"
        strokeWidth="1.5"
      />
      <line
        x1="13.8934"
        y1="1.53033"
        x2="0.529731"
        y2="14.894"
        stroke="black"
        strokeWidth="1.5"
      />
    </svg>
  );
}
