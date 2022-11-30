export default function ProjectMobileCard(props) {
  return (
    <div
      className={`mb-21.657 mt-5.157 ml-2 hidden flex-col justify-center xl:hidden xl:group-hover:hidden`}
    >
      <img src={props.image} alt="mobile  image" />
      <p className="mt-1.5 font-Neufile text-xl">{props.text}</p>
    </div>
  );
}
