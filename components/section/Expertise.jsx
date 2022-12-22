import React from "react";
import Wrapper from "../../components/wrappers/Wrapper";
import { expertiseList } from "../../dataCollection/data";

export default function Expertise() {
  return (
    <Wrapper>
      <section className="mt-5.3125 flex justify-end md:mt-5.7375 lg:mt-6.4375 xl:mt-7.9375">
        <div className="ml-7 flex flex-col gap-0.4375 text-left font-Neufile text-xl font-normal leading-8  tracking-spacing-sm sm:ml-0 md:gap-6 md:text-2xl xl:gap-6">
          <h4 className="text-expertiseGrey md:text-1.5 xl:text-1.5">
            Expertise
          </h4>

          <div className="grid grid-cols-1 gap-y-2 gap-x-6 md:mt-6 md:grid-cols-2 md:gap-y-3">
            {expertiseList.map((item, index) => {
              return (
                <p
                  key={index}
                  className="solid w-full border-b border-borderGrey md:w-18.1306 xl:w-19.375 "
                >
                  {item}
                </p>
              );
            })}
          </div>
        </div>
      </section>
    </Wrapper>
  );
}
