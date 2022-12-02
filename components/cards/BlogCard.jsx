import React from "react";
import Tag from "../ui/Tag";

export default function BlogCard(props) {
  return (
    <>
      <div className="flex gap-7 overflow-scroll pb-4 p-[1.2813rem] py-[2rem] md:pl-[2.25rem] xl:[4rem] 2xl:[5.25rem] lg:pl-[3.65rem] lg-sm:pb-10 cardScroll">
        <div class="flex flex-col  md:w-112 lg:w-29.8125 box-border px-5 w-75.5 rounded-xl border border-solid border-secondaryGrey shadow-2.5xl lg:px-35">
          <div class="flex-1 bg-white flex flex-col justify-between">
            <div class="flex-1">
              <p class="w-65.5 mt-[1.25rem] font-Neufile text-desktopHeadingTwo font-normal leading-2.5 tracking-cardDescription text-primaryGrey md:w-102 lg:w-27.3125
        ">
                <a href="#" class="">02 Oct 2022 </a>
              </p>
              <a href="#" class="block mt-2">
                <p class="
          w-65.5 font-Neufile text-mobHeadingThree font-normal leading-8.5 tracking-cardDescription text-black md:w-109.25  md:text-4xl md:leading-10.5 tablet:text-tabletHeadingOne tablet:leading-2.6 lg:text-tabletHeadingOne lg:leading-2.625 mt-[1.5rem] ">Launch of the Africa DeFi Alliance DAO</p>
                <p class="mt-3  w-65.5 font-Neufile text-xl font-normal tracking-cardSubTitle text-black  md:w-101.25 md:text-2xl md:tracking-cardSubDescription lg:w-27.3125
          ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.</p>
              </a>
            </div>
            <div class="mt-[1.6875rem] xl:mt-[2.5625rem] mb-[0.625rem] space-y-[2px]">
              <div className="flex w-27.0625 gap-1.5 md:hidden 2xl:flex">
                <Tag>{"Blockchain"}</Tag>
                <Tag>{"DAOs"}</Tag>
                <Tag style="hidden md:block">{"Decentralization"}</Tag>
              </div>
              <div className="flex w-27.0625 mt-1 gap-1.5">
                <Tag style="hidden md:block">{"Blockchain"}</Tag>
                <Tag style="hidden md:block">{"DAOs"}</Tag>
                <Tag>{"Decentralization"}</Tag>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col  md:w-112 lg:w-29.8125 
  box-border px-5 w-75.5 rounded-xl border border-solid border-secondaryGrey shadow-2.5xl lg:px-35">
          <div class="flex-1 bg-white flex flex-col justify-between">
            <div class="flex-1">
              <p class="w-65.5 mt-[1.25rem] font-Neufile text-desktopHeadingTwo font-normal leading-2.5 tracking-cardDescription text-primaryGrey md:w-102 lg:w-27.3125
        ">
                <a href="#" class="">02 Oct 2022 </a>
              </p>
              <a href="#" class="block mt-2">
                <p class="
          w-65.5 font-Neufile text-mobHeadingThree font-normal leading-8.5 tracking-cardDescription text-black md:w-109.25  md:text-4xl md:leading-10.5 tablet:text-tabletHeadingOne tablet:leading-2.6 lg:text-tabletHeadingOne lg:leading-2.625 mt-[1.5rem] ">Launch of the Africa DeFi Alliance DAO</p>
                <p class="mt-3  w-65.5 font-Neufile text-xl font-normal tracking-cardSubTitle text-black  md:w-101.25 md:text-2xl md:tracking-cardSubDescription lg:w-27.3125
          ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium </p>
              </a>
            </div>
            <div class="mt-[1.6875rem] xl:mt-[2.5625rem] mb-[0.625rem] space-y-[2px]">
              <div className="flex w-27.0625 gap-1.5 md:hidden 2xl:flex">
                <Tag>{"Blockchain"}</Tag>
                <Tag>{"DAOs"}</Tag>
                <Tag style="hidden md:block">{"Decentralization"}</Tag>
              </div>
              <div className="flex w-27.0625 mt-1 gap-1.5">
                <Tag style="hidden md:block">{"Blockchain"}</Tag>
                <Tag style="hidden md:block">{"DAOs"}</Tag>
                <Tag>{"Decentralization"}</Tag>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col  md:w-112 lg:w-29.8125 
  box-border px-5 w-75.5 rounded-xl border border-solid border-secondaryGrey shadow-2.5xl lg:px-35">
          <div class="flex-1 bg-white flex flex-col justify-between">
            <div class="flex-1">
              <p class="w-65.5 mt-[1.25rem] font-Neufile text-desktopHeadingTwo font-normal leading-2.5 tracking-cardDescription text-primaryGrey md:w-102 lg:w-27.3125
        ">
                <a href="#" class="">02 Oct 2022 </a>
              </p>
              <a href="#" class="block mt-2">
                <p class="
          w-65.5 font-Neufile text-mobHeadingThree font-normal leading-8.5 tracking-cardDescription text-black md:w-109.25  md:text-4xl md:leading-10.5 tablet:text-tabletHeadingOne tablet:leading-2.6 lg:text-tabletHeadingOne lg:leading-2.625 mt-[1.5rem] ">Launch of the Africa DeFi Alliance DAO</p>
                <p class="mt-3  w-65.5 font-Neufile text-xl font-normal tracking-cardSubTitle text-black  md:w-101.25 md:text-2xl md:tracking-cardSubDescription lg:w-27.3125
          ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.</p>
              </a>
            </div>
            <div class="mt-[1.6875rem] xl:mt-[2.5625rem] mb-[0.625rem] space-y-[2px]">
              <div className="flex w-27.0625 gap-1.5 md:hidden 2xl:flex">
                <Tag>{"Blockchain"}</Tag>
                <Tag>{"DAOs"}</Tag>
                <Tag style="hidden md:block">{"Decentralization"}</Tag>
              </div>
              <div className="flex w-27.0625 mt-1 gap-1.5">
                <Tag style="hidden md:block">{"Blockchain"}</Tag>
                <Tag style="hidden md:block">{"DAOs"}</Tag>
                <Tag>{"Decentralization"}</Tag>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col  md:w-112 lg:w-29.8125 
  box-border px-5 w-75.5 rounded-xl border border-solid border-secondaryGrey shadow-2.5xl lg:px-35">
          <div class="flex-1 bg-white flex flex-col justify-between">
            <div class="flex-1">
              <p class="w-65.5 mt-[1.25rem] font-Neufile text-desktopHeadingTwo font-normal leading-2.5 tracking-cardDescription text-primaryGrey md:w-102 lg:w-27.3125
        ">
                <a href="#" class="">02 Oct 2022 </a>
              </p>
              <a href="#" class="block mt-2">
                <p class="
          w-65.5 font-Neufile text-mobHeadingThree font-normal leading-8.5 tracking-cardDescription text-black md:w-109.25  md:text-4xl md:leading-10.5 tablet:text-tabletHeadingOne tablet:leading-2.6 lg:text-tabletHeadingOne lg:leading-2.625 mt-[1.5rem] ">Launch of the Africa DeFi Alliance DAO</p>
                <p class="mt-3  w-65.5 font-Neufile text-xl font-normal tracking-cardSubTitle text-black  md:w-101.25 md:text-2xl md:tracking-cardSubDescription lg:w-27.3125
          ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.</p>
              </a>
            </div>
            <div class="mt-[1.6875rem] xl:mt-[2.5625rem] mb-[0.625rem] space-y-[2px]">
              <div className="flex w-27.0625 gap-1.5 md:hidden 2xl:flex">
                <Tag>{"Blockchain"}</Tag>
                <Tag>{"DAOs"}</Tag>
                <Tag style="hidden md:block">{"Decentralization"}</Tag>
              </div>
              <div className="flex w-27.0625 mt-1 gap-1.5">
                <Tag style="hidden md:block">{"Blockchain"}</Tag>
                <Tag style="hidden md:block">{"DAOs"}</Tag>
                <Tag>{"Decentralization"}</Tag>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col  md:w-112 lg:w-29.8125 
  box-border px-5 w-75.5 rounded-xl border border-solid border-secondaryGrey shadow-2.5xl lg:px-35">
          <div class="flex-1 bg-white flex flex-col justify-between">
            <div class="flex-1">
              <p class="w-65.5 mt-[1.25rem] font-Neufile text-desktopHeadingTwo font-normal leading-2.5 tracking-cardDescription text-primaryGrey md:w-102 lg:w-27.3125
        ">
                <a href="#" class="">02 Oct 2022 </a>
              </p>
              <a href="#" class="block mt-2">
                <p class="
          w-65.5 font-Neufile text-mobHeadingThree font-normal leading-8.5 tracking-cardDescription text-black md:w-109.25  md:text-4xl md:leading-10.5 tablet:text-tabletHeadingOne tablet:leading-2.6 lg:text-tabletHeadingOne lg:leading-2.625 mt-[1.5rem] ">Launch of the Africa DeFi Alliance DAO</p>
                <p class="mt-3  w-65.5 font-Neufile text-xl font-normal tracking-cardSubTitle text-black  md:w-101.25 md:text-2xl md:tracking-cardSubDescription lg:w-27.3125
          ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.</p>
              </a>
            </div>
            <div class="mt-[1.6875rem] xl:mt-[2.5625rem] mb-[0.625rem] space-y-[2px]">
              <div className="flex w-27.0625 gap-1.5 md:hidden 2xl:flex">
                <Tag>{"Blockchain"}</Tag>
                <Tag>{"DAOs"}</Tag>
                <Tag style="hidden md:block">{"Decentralization"}</Tag>
              </div>
              <div className="flex w-27.0625 mt-1 gap-1.5">
                <Tag style="hidden md:block">{"Blockchain"}</Tag>
                <Tag style="hidden md:block">{"DAOs"}</Tag>
                <Tag>{"Decentralization"}</Tag>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
