<<<<<<< HEAD

export default function Home() {
  return (
    <div className="">
      <h1 className="m-auto font-Neufile text-6xl font-bold  text-red-900  underline ">
        Hello Maroon!
      </h1>
    
    </div>
=======
import Link from "../components/ui/Link";
import Svg from "../components/ui/Svg";
export default function Home() {
  return (
    <body>
      <Link
        text={"Contact"}
        textStyle=""
        arrow={<Svg />}
        imageWrapperStyle="absolute -top-0.5"
      />
    </body>
>>>>>>> dev
  );
}
