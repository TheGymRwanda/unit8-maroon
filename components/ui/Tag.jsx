function Tag(props) {
  return (
    <a className="h-fit rounded-4.75 bg-light-grey px-2 text-grey" href={props.link}>
      {props.children}
    </a>
  );
}

export default Tag;
