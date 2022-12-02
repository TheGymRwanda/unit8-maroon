

import React from "react";
import Wrapper from "../wrappers/Wrapper";

export default function Expertise() {
  const firstList = [
    "Product Development",
    "Community management",
    "Governance",
    "Product Development",
    "Product Development",
  ];
  const secondList = [
    "Product Design",
    "Strategy",
    "Product Design",
    "Product Design",
    "Product Design",
  ];
  return (
    <Wrapper>
      <section className="float-right mt-5.3125 md:mt-5.7375 lg:mt-6.4375 xl:mt-7.9375">
        <div className="flex  flex-col gap-0.4375 text-left md:gap-6 xl:gap-6">
          <p className="font-Neufile  text-xl  font-normal tracking-spacing-sm text-expertiseGrey  md:text-1.5 xl:text-1.5">
            Expertise
          </p>

          <div className="flex flex-col gap-2 md:grid md:grid-cols-2   md:gap-3 md:space-x-6 xl:gap-3">
            <div className="flex flex-col gap-2 md:gap-3 xl:gap-3  ">
              {firstList.map((list, i) => {
                return (
                  <div key={i}>
                    <p className="font-Neufile text-xl font-normal  tracking-spacing-sm text-black md:text-2xl">
                      {list}
                    </p>
                    <hr className="solid w-16.0625 border-borderGrey md:w-18.1306  xl:w-19.375" />
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col gap-2 md:gap-3 xl:gap-3 ">
              {secondList.map((list, i) => {
                return (
                  <div key={i}>
                    <p className="font-Neufile text-xl font-normal tracking-spacing-sm text-black md:text-2xl">
                      {list}
                    </p>
                    <hr className="solid w-16.0625 border-borderGrey md:w-18.1306  xl:w-19.375" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
}
