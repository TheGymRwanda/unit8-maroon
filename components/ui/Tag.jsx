function Tag(props) {
  return (
    <button className="m-auto h-fit rounded-4.75 bg-light-grey px-2 text-grey">
      {props.children}
    </button>
  );
}

export default Tag;
