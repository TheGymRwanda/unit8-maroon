import HeaderLink from "../ui/HeaderLink";
import HeaderLinkMob from "../ui/HeaderLinkMob";
import Wrapper from "../wrappers/Wrapper";

export default function Header() {
  const MOBILE_PARTNERS = ["Google,", "philips,", "Audi,", "Twitch,", "Patagonia,", "eBay,", "Ethereum,", "Tezos,","Near,", "Algorand"];
  const BIG_SCREEN_PARTNERS = ["Ethereum,", "Tezos,", "Near,", "Algorand"];
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

              {
                MOBILE_PARTNERS.map((item, index) => 
                  <span key={index} className="inline-block text-primary-purple md:hidden">
                    {item}&nbsp;
                  </span>
                )
              }
              
            and more. Its team of 2,500+ digital specialists across 30+
            locations on 5 continents delivers pioneering work on a global scale
            with a boutique culture.
            <span className="inline-block lg:hidden">
              <HeaderLinkMob/>
            </span>
          </div>
        </div>
        
        <div className="hidden lg:block">
          <div className="xs:w-21.875 h-15.75 text-xl md:text-2xl xl:w-47.3125">
            Unit➇ is a pioneering technology company specialing in decentralised
            technologies that creates end-to-end digital experiences for
            protocols including&nbsp;

            {
              BIG_SCREEN_PARTNERS.map((item, index) => 
              <span key={index} className="hidden text-primary-purple md:inline-block">
                {item}&nbsp;
              </span>
            )
            }
    
            and more. Its team of 2,500+ digital specialists across 30+
            locations on 5 continents delivers pioneering work on a global scale
            with a boutique culture.&nbsp;
            <span className="hidden lg:inline-block">
              <HeaderLink/>
            </span>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
