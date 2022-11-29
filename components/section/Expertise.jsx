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
   <section className="float-right">
        <div className="flex  flex-col gap-0.4375 text-left ipad:gap-6 desktop:gap-6">
          <p className="font-Neufile  text-xl  font-normal tracking-spacing-sm text-expertiseGrey  ipad:text-1.5 desktop:text-1.5">
            Expertise
          </p>

          <div className="flex flex-col gap-2 ipad:gap-3 desktop:gap-3   ipad:grid ipad:grid-cols-2 ipad:space-x-6">
           

            <div className="flex flex-col gap-2 ipad:gap-3 desktop:gap-3  ">
              {firstList.map((list, i) => {
                return (
                  <div key={i}>
                    <p className="font-Neufile text-xl font-normal tracking-spacing-sm text-black ipad:text-2xl">
                      {list}
                    </p>
                    <hr className="solid w-16.0625 border-borderGrey ipad:w-18.1306  desktop:w-19.375" />
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col gap-2 ipad:gap-3 desktop:gap-3 ">
              {secondList.map((list, i) => {
                return (
                  <div key={i}>
                    <p className="font-Neufile text-xl font-normal tracking-spacing-sm text-black ipad:text-2xl">
                      {list}
                    </p>
                    <hr className="solid w-16.0625 border-borderGrey ipad:w-18.1306  desktop:w-19.375" />
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
