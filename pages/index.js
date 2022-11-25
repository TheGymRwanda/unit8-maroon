import Link from "../components/ui/Link";
import Svg from "../components/ui/Svg";
export default function Home() {
  return (
    <body>
      <Link
        text={"Contact"}
        textStyle="text-black"
        arrow={<Svg />}
        imageWrapperStyle="absolute -top-2"
      />
    </body>
  );
}
