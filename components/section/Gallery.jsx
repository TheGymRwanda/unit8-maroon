import React from 'react'
import Image from 'next/image'
import team from '../../public/assets/images/team.webp'

export default function Gallery() {
  return (
    <>
    <section className='pl-6.0069'>
        <Image src={team} alt="Team image" />
    </section>
    </>
  )
}
