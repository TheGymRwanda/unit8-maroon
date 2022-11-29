export default function ProjectCard(props){
    return(
        <div className="hidden flex-col justify-center desktop:flex">
        <img
          className="h-111 w-202.75"
          src={props.image}
          alt="sample image"
        />
        <p className="mt-1.5 font-Neufile text-2xl">
          {props.text}
        </p>
      </div>
    )
}