import React from "react";

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
    <section className="float-right">
      <div className="flex flex-col text-left">
        <p className="font-Neufile  text-xl  font-normal tracking-spacing-sm text-expertiseGrey  ipad:text-1.5 desktop:text-1.5">
          Expertise
        </p>

        <div className="ipad:grid ipad:grid-cols-2 ipad:space-x-6">
          <div>
            {firstList.map((list, i) => {
              return (
                <div>
                  <p key={i} className=" font-Neufile text-xl font-normal tracking-spacing-sm text-black ipad:text-2xl">
                    {list}
                  </p>
                  <hr className="solid w-16.0625 border-borderGrey ipad:w-18.1306  desktop:w-19.375" />
                </div>
              );
            })}
          </div>

          <div>
            {secondList.map((list, i) => {
              return (
                <div>
                  <p key={i} className=" font-Neufile text-xl font-normal tracking-spacing-sm text-black ipad:text-2xl">
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
  );
}
