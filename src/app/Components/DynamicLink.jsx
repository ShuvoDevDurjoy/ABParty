'use client'
import Image from 'next/image'
import React from 'react'
import './Component.css'

const DynamicLink = ({link_text, link_url, classes}) => {
  return (
    <div className='dynamic_link_container'>
        <a href={link_url} className={`flex fl_al_cen gap_8 ${classes}`}>
            <span className='dynamic_link_text'>{link_text}</span>
            <span className='dynamic_link_right_arrow relative'>
                <Image className='' fill="auto" src="./icons/right_arrow.png" alt={`${link_text}_icon`} />
            </span>
        </a>
    </div>
  )
}

export default DynamicLink
