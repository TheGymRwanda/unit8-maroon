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
  );
}
