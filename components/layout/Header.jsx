import Svg from "../ui/Svg";
import PageLink from "../ui/Link";

export default function Header() {
  return (
    <div className="lg:flex space-y-[17.94px] lg:items-baseline mb-96 xs:mb-44 lg:mb-32 lg:justify-between">
      <div>
        <h1 className="lg:w-13.875 font-Neufile font-normal text-xl lg:text-2xl text-black tracking-0.0125 mt-[3rem] md:text-2xl">Ape Unit</h1>
      </div>
      {/* mobile*/}
      <div className="lg:hidden">
        <div className="xs:w-[21.875rem] h-[15.75rem] text-xl md:text-2xl">
          Unit➇ is a pioneering technology and marketing services company that
          creates end-to-end digital experiences for brands such as{" "}
          <span className="inline-block text-primary-purple lg:hidden">
            Google,{" "}
          </span>{" "}
          <span className="inline-block text-primary-purple lg:hidden">
            philips,{" "}
          </span>
          <span className="inline-block text-primary-purple lg:hidden">
            Audi,
          </span>{" "}
          <span className="inline-block text-primary-purple lg:hidden">
            Twitch,
          </span>{" "}
          <span className="inline-block text-primary-purple lg:hidden">
            Patagonia,
          </span>{" "}
          <span className="inline-block text-primary-purple lg:hidden">
            eBay
          </span>{" "}
          and more. Its team of 2,500+ digital specialists across 30+
          locations on 5 continents delivers pioneering work on a global scale
          with a boutique culture.
          <span className="inline-block lg:hidden">
            <PageLink style="gap-2" text={"Contact"} arrow={<Svg />} />
          </span>
        </div>
      </div>
      {/* Ipads */}
      <div className="hidden lg:block">
        <div className="xs:w-[21.875rem] h-[15.75rem] text-xl md:text-2xl">
          Unit➇ is a pioneering technology and marketing services company that
          creates end-to-end digital experiences for brands such as{" "}
          <span className="inline-block text-primary-purple ">
            Google,{" "}
          </span>{" "}
          <span className="inline-block text-primary-purple ">
            philips,{" "}
          </span>
          <span className="inline-block text-primary-purple ">
            Audi,
          </span>{" "}
          <span className="inline-block text-primary-purple ">
            Twitch,
          </span>{" "}
          <span className="inline-block text-primary-purple ">
            Patagonia,
          </span>{" "}
          <span className="inline-block text-primary-purple ">
            eBay
          </span>{" "}
          and more. Its team of 2,500+ digital specialists across 30+
          locations on 5 continents delivers pioneering work on a global scale
          with a boutique culture.
          <span className="inline-block">
            <PageLink text={"Contact"} arrow={<Svg />} />
          </span>
        </div>
      </div>
    </div>
  );
}
