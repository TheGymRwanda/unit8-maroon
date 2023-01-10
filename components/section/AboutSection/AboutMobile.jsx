import { useState } from "react";
import { OneBlock } from "../../functions/OneBlock";
import Wrapper from "../../wrappers/Wrapper";
import PageLink from "../../ui/Link";
import Svg from "../../ui/Svg";
export default function AboutMobile() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <>

      <Wrapper>
        <div className="mt-20 mb-20 flex flex-col  gap-8  md:hidden">
            <OneBlock
            key={0}
            title="About Us"
            text=<div>
              Blockchain will do for cooperation what the internet did for
              communication - We believe that blockchain technology has the
              potential to shift financial models as we know them, creating
              revenue streams that are more sustainable and fair for users. We
              envision a future in which financial infrastructures are rather
              decentralised and horizontal, in which any member can have a say.
              Through its immutability, blockchain technology provides
              trustworthy infrastructures that allow cooperation on a large .
              <div className="flex items-baseline  gap-2">
                scale.{" "}
                <PageLink
                  text="Learn more"
                  style="gap-2 flex underline"
                  arrow=<Svg />
                />{" "}
              </div>{" "}
              <br /> Work Meaningful - With our work, we aim to impact society
              positively. The projects we get involved with the aim to solve
              significant problems in our society, sustainably and in the long
              run, rather than looking for a quick profit through speculation or
              encouraging harmful behavior.
            </div>
            isOpened={activeTab === 0}
            expand={() => setActiveTab(activeTab === 0 ? -1 : 0)}
          />  
          <OneBlock
            key={1}
            title="What we do"
            text=<div>
              Blockchain will do for cooperation what the internet did for
              communication - We believe that blockchain technology has the
              potential to shift financial models as we know them, creating
              revenue streams that are more sustainable and fair for users. We
              envision a future in which financial infrastructures are rather
              decentralised and horizontal, in which any member can have a say.
              Through its immutability, blockchain technology provides
              trustworthy infrastructures that allow cooperation on a large .
              <div className="flex items-baseline  gap-2">
                scale.{" "}
                <PageLink
                  text="Learn more"
                  style="gap-2 flex underline"
                  arrow=<Svg />
                />{" "}
              </div>{" "}
              <br /> Work Meaningful - With our work, we aim to impact society
              positively. The projects we get involved with the aim to solve
              significant problems in our society, sustainably and in the long
              run, rather than looking for a quick profit through speculation or
              encouraging harmful behavior.
            </div>
            isOpened={activeTab === 1}
            expand={() => setActiveTab(activeTab === 1 ? -1 : 1)}
          />
          <OneBlock
            key={2}
            title="Employment"
            text=<div>
              Blockchain will do for cooperation what the internet did for
              communication - We believe that blockchain technology has the
              potential to shift financial models as we know them, creating
              revenue streams that are more sustainable and fair for users. We
              envision a future in which financial infrastructures are rather
              decentralised and horizontal, in which any member can have a say.
              Through its immutability, blockchain technology provides
              trustworthy infrastructures that allow cooperation on a large .
              <div className="flex items-baseline  gap-2">
                scale.{" "}
                <PageLink
                  text="Learn more"
                  style="gap-2 flex underline"
                  arrow=<Svg />
                />{" "}
              </div>{" "}
            </div>
            isOpened={activeTab === 2}
            expand={() => setActiveTab(activeTab === 2 ? -1 : 2)}
          />
        </div>
      </Wrapper>
    </>
  );
}
