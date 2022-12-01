import React from "react";
import PageLink from "../ui/Link";
import Svg from "../ui/Svg";
import Wrapper from "../wrappers/Wrapper";

export default function Footer() {
  return (
    <Wrapper>
      <div className="my-6.1563 space-y-14 md:my-14.8125 md:flex md:items-baseline md:justify-between lg:my-4.8356 xl:my-4.4306 2xl:my-3.0556">
        <div className="w-11.625 font-Neufile text-xl font-normal tracking-0.0125 text-black md:mt-auto md:w-13.875 md:text-2xl">
          Ape Unit GmbH Waldemarstraße 38, 10999 Berlin
        </div>
        <div className="w-6.625">
          <PageLink
            link="href='https://twitter.com/apeunit'"
            style="gap-2"
            text="Twitter"
            arrow=<Svg />
          />
          <PageLink
            link="https://www.facebook.com/apeunit/"
            style="gap-2"
            text="FaceBook"
            arrow=<Svg />
          />
          <PageLink
            link="https://www.linkedin.com/company/ape-unit/?originalSubdomain=de"
            style="gap-2"
            text="LinkedIn"
            arrow=<Svg />
          />
        </div>
        <p className="w-11.625  font-Neufile text-xl font-normal tracking-0.0125 text-black md:w-13.875 md:text-2xl">
          Impressum / Privacy
        </p>
      </div>
    </Wrapper>
  );
}
