import Image from 'next/image'
import React from 'react'

const StarBanner = () => {
  return (
    <div className='start_icons_container flex fl_al_cen fl_jus_cen gap_10'>
      <span className='start_icon relative'>
        <Image fill="auto" src="./icons/green_star.png" alt="star_1" />
      </span>
      <span className='start_icon relative'>
        <Image fill="auto" src="./icons/green_star.png" alt="star_2" />
      </span>
      <span className='start_icon relative'>
        <Image fill="auto" src="./icons/red_star.png" alt="star_3" />
      </span>
      <span className='start_icon relative'>
        <Image fill="auto" src="./icons/red_star.png" alt="star_4" />
      </span>
      <span className='start_icon relative'>
        <Image fill="auto" src="./icons/red_star.png" alt="star_5" />
      </span>
      <span className='start_icon relative'>
        <Image fill="auto" src="./icons/green_star.png" alt="star_6" />
      </span>
      <span className='start_icon relative'>
        <Image fill="auto" src="./icons/green_star.png" alt="star_7" />
      </span>
    </div>
  )
}

export default StarBanner
