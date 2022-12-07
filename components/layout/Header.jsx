import Svg from "../ui/Svg";
import PageLink from "../ui/Link";
import Wrapper from "../wrappers/Wrapper";
export default function Header() {
  return (
    <Wrapper>
      <div className="space-y-1.1213 lg:flex lg:items-baseline lg:justify-between">
        <div>
          <h1 className="mb-5 mt-12 font-Neufile text-xl font-normal tracking-0.0125 text-black md:text-2xl lg:w-13.875 lg:text-2xl">
            Ape Unit
          </h1>
        </div>
        <div className="lg:hidden">
          <div className="xs:w-21.875 h-15.75 text-xl md:text-2xl">
            Unit➇ is a pioneering technology and marketing services company that
            creates end-to-end digital experiences for brands such as&nbsp;
            <span className="inline-block text-primary-purple md:hidden">
              Google,&nbsp;
            </span>&nbsp;
            <span className="inline-block text-primary-purple md:hidden">
              philips,&nbsp;
            </span>
            <span className="inline-block text-primary-purple md:hidden">
              Audi,
            </span>&nbsp;
            <span className="inline-block text-primary-purple md:hidden">
              Twitch,
            </span>&nbsp;
            <span className="inline-block text-primary-purple md:hidden">
              Patagonia,
            </span>&nbsp;
            <span className="inline-block text-primary-purple md:hidden">
              eBay
            </span>&nbsp;
            {/* style for Ipad */}
            <span className="hidden text-primary-purple md:inline-block">
              Ethereum,
            </span>&nbsp;
            <span className="hidden text-primary-purple md:inline-block">
              Tezos,
            </span>&nbsp;
            <span className="hidden text-primary-purple md:inline-block">
              Near,
            </span>&nbsp;
            <span className="hidden text-primary-purple md:inline-block">
              Algorand
            </span>&nbsp;
            and more. Its team of 2,500+ digital specialists across 30+
            locations on 5 continents delivers pioneering work on a global scale
            with a boutique culture.
            <span className="inline-block lg:hidden">
              <PageLink
                text={"Contact Us"}
                arrow={<Svg />}
                textStyle="no-underline md:underline lg:no-underline"
                style="text-xl md:text-2xl xl:flex xl:gap-1/2 gap-0.5 "
              />
            </span>
          </div>
        </div>
        
        <div className="hidden lg:block">
          <div className="xs:w-21.875 h-15.75 text-xl md:text-2xl xl:w-47.3125">
            {/* lg:w-[47.3125rem]  xl:w-7/13 */}
            {/* justify-between lg:flex */}
            Unit➇ is a pioneering technology company specialing in decentralised
            technologies that creates end-to-end digital experiences for
            protocols including&nbsp;
            <span className="hidden text-primary-purple md:inline-block">
              Ethereum,
            </span>&nbsp;
            <span className="hidden text-primary-purple md:inline-block">
              Tezos,
            </span>&nbsp;
            <span className="hidden text-primary-purple md:inline-block">
              Near,
            </span>&nbsp;
            <span className="hidden text-primary-purple md:inline-block">
              Algorand
            </span>&nbsp;
            and more. Its team of 2,500+ digital specialists across 30+
            locations on 5 continents delivers pioneering work on a global scale
            with a boutique culture.&nbsp;
            <span className="hidden lg:inline-block">
              <PageLink
                style="gap-2"
                link={"mailto:web3@apeunit.com"}
                text={"Contact"}
                textStyle="no-underline md:underline md:hover:no-underline"
                arrow={<Svg />}
              />
            </span>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
