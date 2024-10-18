import React from 'react'
import Image, { StaticImageData } from 'next/image'

interface socials {

    image: StaticImageData,
    details: String
}

const Socials = (props:socials) => {
  return (
    <div className='flex items-center space-x-2 mt-5 lg:mt-0'>
         <Image src={props.image} alt='image' className='w-[15%] lg:w-[12%]'/>
         <p>{props.details}</p>
    </div>
  )
}

export default Socials
