import Link from "../ui/Link"
import Svg from "../ui/Svg"
export default function Project() {
  return (
    <Link
        // style={"text-[6]"}
        text={"Contact"}
        textStyle=""
        arrow={<Svg />}
        imageWrapperStyle="absolute hidden group-hover:block -top-0.5"
      />
  )
}
