import React from "react";

export default function BlogCard(props) {
  return (
    <>
      <section className="box-border flex h-102.5 w-75.5 flex-col gap-6 rounded-xl border border-solid border-secondaryGrey p-5 drop-shadow-2.5xl desktop:px-35 desktop:gap-38 ipad:w-112 desktop:w-29.8125 ipad:h-96.5 desktop:h-25.0869">
        <p className="font-Neufile leading-2.5 tracking-cardDescription text-primaryGrey w-65.5 h-4.5 ipad:w-102 font-normal desktop:w-27.3125 text-desktopHeadingTwo">
          {props.children}
        </p>

        <h2 className="h-17 w-65.5 font-Neufile text-mobHeadingThree font-normal leading-8.5 ipad:h-21  ipad:w-109.25  ipad:text-4xl  ipad:leading-10.5  tracking-cardDescription text-black desktop:text-tabletHeadingOne tablet:text-tabletHeadingOne desktop:leading-2.625 tablet:leading-2.6">
        {props.children}
        </h2>

        <div className="w-65.5 h-42 font-Neufile text-xl font-normal tracking-cardSubTitle text-black ipad:w-101.25 ipad:h-40 ipad:text-2xl ipad:tracking-cardSubDescription desktop:w-27.3125 desktop:h-8">
        {props.children}
        </div>
      </section>
    </>
  );
}
