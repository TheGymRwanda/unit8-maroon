import PageLink from "./Link";
import Svg from "./Svg";

export default function HeaderLinkMob(){
  return(
    <PageLink
      text={"Contact Us"}
      arrow={<Svg />}
      textStyle="no-underline md:underline lg:no-underline"
      style="text-xl md:text-2xl xl:flex xl:gap-1/2 gap-0.5 "
    />
  )
}
