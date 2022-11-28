import React from 'react'
import Link from '../ui/Link'
import Svg from '../ui/Svg'

export default function Footer() {
    return (
        <div className="ipad:flex space-y-14 ipad:items-baseline ipad:justify-between">
            <div className="w-11.625 ipad:mt-auto ipad:w-13.875 font-Neufile font-normal text-xl ipad:text-2xl text-black tracking-0.0125">
                Ape Unit GmbH
                Waldemarstraße 38,
                10999 Berlin
            </div>
            <div className="w-6.625">
               <Link link="href='https://twitter.com/apeunit'" style="gap-2" text="Twitter" arrow=<Svg /> />
              <Link link="https://www.facebook.com/apeunit/" style="gap-2" text="FaceBook" arrow=<Svg /> />
             <Link link="https://www.linkedin.com/company/ape-unit/?originalSubdomain=de"  style="gap-2" text="LinkedIn" arrow=<Svg /> />
            </div>
            <p className="w-11.625  ipad:w-13.875 font-Neufile font-normal text-xl ipad:text-2xl text-black tracking-0.0125">Impressum / Privacy</p>
        </div>
    )
}
