import React from "react";

export default function BlogCard() {
  return (
    <>
      <section className="box-border  flex h-102.5 w-75.5 flex-col gap-6 rounded-xl border border-solid border-secondaryGrey p-5 drop-shadow-2.5xl ipad:w-112 ipad:h-96.5  ">
        <p className="font-Neufile text-lg  leading-2.5  tracking-cardDescription text-primaryGrey w-65.5 h-4.5 ipad:w-102  ">
          02 Oct 2022
        </p>

        <h2 className="h-17  w-65.5 font-Neufile text-mobHeadingThree font-normal leading-8.5 ipad:h-21 ipad:w-109.25 ipad:text-4xl ipad:leading-10.5  tracking-cardDescription text-black ">
          Launch of the Africa DeFi Alliance DAO
        </h2>

        <div className="h-42 w-65.5 font-Neufile text-xl font-normal not-italic tracking-cardSubTitle text-black ipad:w-101.25 ipad:h-40 ipad:text-2xl ipad:tracking-cardSubDescription ">
          An auspicious group of like-minded partners will deploy an open
          protocol for decentralized working <br /> capital and MSME financial
          solutions across Africa.
        </div>
      </section>
    </>
  );
}
