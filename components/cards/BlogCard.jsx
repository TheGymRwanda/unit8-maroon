import React from "react";

export default function BlogCard(props) {
  return (
    <>
      <section className="box-border flex h-102.5 w-75.5 flex-col gap-6 rounded-xl border border-solid border-secondaryGrey p-5 drop-shadow-2.5xl ipad:h-96.5 ipad:w-112 desktop:h-25.0869 desktop:w-29.8125 desktop:gap-38 desktop:px-35">
        <p className="h-4.5 w-65.5 font-Neufile text-desktopHeadingTwo font-normal leading-2.5 tracking-cardDescription text-primaryGrey ipad:w-102 desktop:w-27.3125">
          {props.title}
        </p>

        <h2 className="h-17 w-65.5 font-Neufile text-mobHeadingThree font-normal leading-8.5 tracking-cardDescription  text-black  ipad:h-21  ipad:w-109.25  ipad:text-4xl ipad:leading-10.5 tablet:text-tabletHeadingOne tablet:leading-2.6 desktop:text-tabletHeadingOne desktop:leading-2.625">
          {props.subTitle}
        </h2>

        <div className="h-42 w-65.5 font-Neufile text-xl font-normal tracking-cardSubTitle text-black ipad:h-40 ipad:w-101.25 ipad:text-2xl ipad:tracking-cardSubDescription desktop:h-8 desktop:w-27.3125">
          {props.description}
        </div>
      </section>
    </>
  );
}
