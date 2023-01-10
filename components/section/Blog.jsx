import React from 'react'
import BlogCard from '../cards/BlogCard'
import Wrapper from '../wrappers/Wrapper'


export default function Blog() {
    return (
        <>
          <div className='overflow-hidden '>
               <Wrapper>
                 <div className="text-expertiseGrey font-normal text-1.25  leading-8 tracking-small md:pr-2.4375 md:w-83 md:mx-auto md:px-0 inline-flex items-center">
                   <div>
                   <p>Blog</p>
                   </div>
                   <div className='hidden lg:block mt-1'>
                   <div className='flex items-center gap-3 cursor-pointer '>
                        <svg width="18" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.32446 2.47485L1.44986 10.3495L9.32446 18.2241" stroke="#9A9A9A" strokeWidth="1.5" />
                            <line y1="-0.75" x2="18.899" y2="-0.75" transform="matrix(1 0 0 -1 1.44995 9.44946)" stroke="#9A9A9A" strokeWidth="1.5" />
                        </svg>
                        <svg width="18" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.0244 2.47485L18.899 10.3495L11.0244 18.2241" stroke="#5602E0" strokeWidth="1.5" />
                            <line x1="18.8989" y1="10.1995" x2="-0.0001095" y2="10.1995" stroke="#5602E0" strokeWidth="1.5" />
                        </svg>

                    </div>
                   </div>
                </div>
               </Wrapper>
                <div className=' flex gap- xl:pb-10'>
                    <div>
                        <BlogCard title="02 Oct 2022" subTitle="Launch of the Africa DeFi Alliance DAO"
                            description="An auspicious group of like-minded partners will deploy an open protocol for decentralized working capital and MSME financial solutions across Africa." />
                    </div>
                    <div>
                        <BlogCard title="02 Oct 2022" subTitle="Launch of the Africa DeFi Alliance DAO"
                            description="An auspicious group of like-minded partners will deploy an open protocol for decentralized working capital and MSME financial solutions across Africa." />
                    </div>
                    <div>
                        <BlogCard title="02 Oct 2022" subTitle="Launch of the Africa DeFi Alliance DAO"
                            description="An auspicious group of like-minded partners will deploy an open protocol for decentralized working capital and MSME financial solutions across Africa." />
                    </div>
                    <div>
                        <BlogCard title="02 Oct 2022" subTitle="Launch of the Africa DeFi Alliance DAO"
                            description="An auspicious group of like-minded partners will deploy an open protocol for decentralized working capital and MSME financial solutions across Africa." />
                    </div>
                    <div>
                        <BlogCard title="02 Oct 2022" subTitle="Launch of the Africa DeFi Alliance DAO"
                            description="An auspicious group of like-minded partners will deploy an open protocol for decentralized working capital and MSME financial solutions across Africa." />
                    </div>
                    <div>
                        <BlogCard title="02 Oct 2022" subTitle="Launch of the Africa DeFi Alliance DAO"
                            description="An auspicious group of like-minded partners will deploy an open protocol for decentralized working capital and MSME financial solutions across Africa." />
                    </div>
                </div>
            </div>
        </>
    )
}
