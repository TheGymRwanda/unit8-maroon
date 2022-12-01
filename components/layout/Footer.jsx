import React from 'react'
import PageLink from '../ui/Link'
import Svg from '../ui/Svg'
import Wrapper from '../wrappers/Wrapper'

export default function Footer() {
    return (
       <Wrapper>
         <div className="py-6.1563 md:py-14.8125 lg:py-4.8356 xl:py-4.4306 2xl:py-3.0556 md:flex space-y-14 md:items-baseline md:justify-between">
            <div className="w-11.625 md:mt-auto md:w-13.875 font-Neufile font-normal text-xl md:text-2xl text-black tracking-0.0125">
                Ape Unit GmbH
                Waldemarstraße 38,
                10999 Berlin
            </div>
            <div className="w-6.625">
               <PageLink link="href='https://twitter.com/apeunit'" style="gap-2" text="Twitter" arrow=<Svg /> />
              <PageLink link="https://www.facebook.com/apeunit/" style="gap-2" text="FaceBook" arrow=<Svg /> />
             <PageLink link="https://www.linkedin.com/company/ape-unit/?originalSubdomain=de"  style="gap-2" text="LinkedIn" arrow=<Svg /> />
            </div>
            <p className="w-11.625  md:w-13.875 font-Neufile font-normal text-xl md:text-2xl text-black tracking-0.0125">Impressum / Privacy</p>
        </div>
       </Wrapper>
    )
}
