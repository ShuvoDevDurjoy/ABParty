'use client'
import Image from 'next/image'
import React, { useContext } from 'react'
import './Hero.css'
import { LanguageContext } from '@/app/LanguageContext'

const content = [
  {
    heading: "“ঐক্য ও অধিকার প্রতিষ্ঠার রাজনৈতিক দল”",
    join: "জয়েন এবি পার্টি"
  },
  {
    heading: "“A political party for establishing unity and rights.”",
    join: "Join AB Party"
  }
]
const Hero = () => {

  const {language} = useContext(LanguageContext);

  return (
    <div className='hero_main_container relative'>
        <div className='relative w_100 h_100'>
            <Image className="cover" fill="auto" src="./images/rikshaw_puller.jpg" alt="rikshaw_puller"/>
        </div>
        <div className='hero_content abs flex fl_jus_bet'>
            <h1 className='cl_white main_title fn_h1_30 max_w_700 ln_h_1_2 font_1'>{language==="bn"?content[0].heading:content[1].heading}</h1>
            <a className='cl_white bg_cl_red join_button font_2 fn_para_1' href="/">{language==="bn"?content[0].join:content[1].join}</a>
        </div>
    </div>
  )
}

export default Hero
