import React from 'react'
import PageLink from '../ui/Link'
import Svg from '../ui/Svg'
import Wrapper from '../wrappers/Wrapper'

export default function Footer() {
    return (
       <Wrapper>
       <div className='flex justify-start'>
                <div className='max-w-90 md:w-full xl:w-11.6/12'>
                    <div className="pt-6.1563 pb-12 2xl:py-3.0556 md:flex space-y-14 md:items-baseline md:justify-between items-start">
                        <div className="w-11.625 md:mt-auto md:w-13.875 font-Neufile font-normal text-xl md:text-2xl text-black tracking-0.0125">
                            Ape Unit GmbHF
                            Waldemarstraße 38,
                            10999 Berlin
                        </div>
                        <div className="w-6.625">
                            <PageLink link="href='https://twitter.com/apeunit'" style="gap-2" text="Twitter" arrow=<Svg /> />
                            <PageLink link="https://www.facebook.com/apeunit/" style="gap-2" text="FaceBook" arrow=<Svg /> />
                            <PageLink link="https://www.linkedin.com/company/ape-unit/?originalSubdomain=de" style="gap-2" text="LinkedIn" arrow=<Svg /> />
                        </div>
                        <p className="w-11.625  md:w-13.875 font-Neufile font-normal text-xl md:text-2xl text-black tracking-0.0125">Impressum / Privacy</p>
                    </div>
                </div>
       </div>
        </Wrapper>
    )
}