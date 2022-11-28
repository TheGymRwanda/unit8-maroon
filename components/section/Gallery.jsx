import React from 'react'
import Image from 'next/image'
import team from '../../public/assets/images/team.webp'

export default function Gallery() {
  return (
    <>
    <section className='pl-6.0069 pt-18.8706 pb-12.8644  '>
        <Image className='w-29.125 h-21.8125'  src={team} alt="Team image" />
    </section>
    </>
  )
}
