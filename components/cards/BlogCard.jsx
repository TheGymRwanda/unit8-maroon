import React from "react";
import Tag from "../ui/Tag";

export default function BlogCard(props) {
  return (
    <>
      <section className="box-border shrink-0 px-5 flex w-75.5 flex-col py-[1.375rem]  rounded-xl border border-solid border-secondaryGrey shadow-2.5xl ipad:w-112 desktop:w-29.8125 desktop:px-35 ">
        <p className="w-65.5 font-Neufile text-desktopHeadingTwo font-normal leading-2.5 tracking-cardDescription text-primaryGrey ipad:w-102 desktop:w-27.3125">
          {props.title}
        </p>
       <div className="space-y-[0.75rem] py-1.1 ipad:py-2.1">
       <h2 className=" w-65.5 font-Neufile text-mobHeadingThree font-normal leading-8.5 tracking-cardDescription text-black ipad:w-109.25  ipad:text-4xl ipad:leading-10.5 tablet:text-tabletHeadingOne tablet:leading-2.6 desktop:text-tabletHeadingOne desktop:leading-2.625">
          {props.subTitle}
        </h2>

        <div className=" w-65.5 font-Neufile text-xl font-normal tracking-cardSubTitle text-black  ipad:w-101.25 ipad:text-2xl ipad:tracking-cardSubDescription desktop:w-27.3125">
          {props.description}
        </div> 
       </div>
       <div className="space-y-2 ">
       <div className="flex w-27.0625 gap-1.5 ">
          <Tag>{"Blockchain"}</Tag>
          <Tag>{"DAOs"}</Tag>
          <Tag style="hidden ipad:block">{"Decentralization"}</Tag>
        </div>
        <div className="flex w-27.0625 mt-1 gap-1.5">
          <Tag style="hidden ipad:block">{"Blockchain"}</Tag>
          <Tag style="hidden ipad:block">{"DAOs"}</Tag>
          <Tag>{"Decentralization"}</Tag>
        </div>
       </div>
      </section>
    </>
  );
}
