import Svg from "../ui/Svg";
import Link from "../ui/Link";

export default function Header() {
  return (
    <header className="flex justify-center font-Neufile text-xl font-normal leading-7 tracking-spacing-sm md:text-2xl md:leading-8 md:tracking-spacing-md">
      <section className="mt-6.75 w-full">
        <div className="justify-between lg:flex  bg-red-500 ">
          <h1 className="mb-4.485">Ape Unit</h1>
          <p className="hidden md:block lg:w-7/10  xl:w-112">
            Unit➇ is a pioneering technology company specialing in decentralised
            technologies that creates end-to-end digital experiences for
            protocols including{" "}
            <span className="hidden text-primary-purple md:inline-block">
              Ethereum,
            </span>{" "}
            <span className="hidden text-primary-purple md:inline-block">
              Tezos,
            </span>{" "}
            <span className="hidden text-primary-purple md:inline-block">
              Near,
            </span>{" "}
            <span className="hidden text-primary-purple md:inline-block">
              Algorand
            </span>{" "}
            and more. Its team of 2,500+ digital specialists across 30+
            locations on 5 continents delivers pioneering work on a global scale
            with a boutique culture.{" "}
            <span className="hidden md:inline-block">
              <Link
                text={"Contact"}
                arrow={<Svg />}
                textStyle=" underline"
                style="tablet:hidden desktop:flex xl:gap-1/2 gap-0.5  "
              />
            </span>
          </p>
          <p className="md:hidden">
            Unit➇ is a pioneering technology and marketing services company that
            creates end-to-end digital experiences for brands such as{" "}
            <span className="inline-block text-primary-purple md:hidden">
              Google,{" "}
            </span>{" "}
            <span className="inline-block text-primary-purple md:hidden">
              philips,{" "}
            </span>
            <span className="inline-block text-primary-purple md:hidden">
              Audi,
            </span>{" "}
            <span className="inline-block text-primary-purple md:hidden">
              Twitch,
            </span>{" "}
            <span className="inline-block text-primary-purple md:hidden">
              Patagonia,
            </span>{" "}
            <span className="inline-block text-primary-purple md:hidden">
              eBay
            </span>{" "}
            and more. Its team of 2,500+ digital specialists across 30+
            locations on 5 continents delivers pioneering work on a global scale
            with a boutique culture.
            <span className="inline-block md:hidden">
              <Link text={"Contact"} arrow={<Svg />} />
            </span>
          </p>
        </div>
      </section>
    </header>
  );
}
