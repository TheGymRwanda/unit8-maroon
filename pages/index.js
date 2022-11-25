import Link from "../components/UI/Link";
import Svg from "../components/UI/Svg";
export default function Home() {
  return (
    <body>
      <Link text={"Contact"} textStyle="text-black" arrow={<Svg />} imageWrapperStyle="absolute -top-2"/>
    </body>
  );
}
