"use client";
import { useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './CustomSlider.css'
const CustomSlider = ({ sliderImage }) => {
    
  const sliderRef = useRef(null);

  const settings = {
    rtl: false,
    dots: true,
    centerMode: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    pauseOnHover: false, // prevent pause on hover
    pauseOnFocus: false, // prevent pause on focus
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    onSwipe: () => {
      sliderRef.current?.slickPlay(); // restart autoplay after swipe
    },
  };


  return <div className="slider_main_container">
    <Slider ref={sliderRef} {...settings}>
        {
            sliderImage.map((image,index)=>{
                return (
                    <div className="slider_image_container reveal relative" key={index}>
                        <Image className="cover" fill="auto" src={image.src} alt={`Slider_image-${index}`} />
                    </div>
                )
            })
        }
    </Slider>
  </div>;
};

export default CustomSlider;
