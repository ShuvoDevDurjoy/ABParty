"use client";
import Image from "next/image";
import React, { useContext } from "react";
import "./Banner.css";
import { LanguageContext } from "@/app/LanguageContext";

const banners = [
  {
    image: "./images/slider_2.png",
    en_title: "With an interest in leadership",
    bn_title: "নেতৃত্ব দেওয়ার আগ্রহ নিয়ে",
  },
  {
    image: "./images/rikshaw_puller.jpg",
    en_title: "With an interest in election from AB Party",
    bn_title: "এবি পার্টি থেকে নির্বাচনের আগ্রহ নিয়ে",
  },
  {
    image: "./images/slider_2.png",
    en_title: "As a supporter",
    bn_title: "সমর্থক হিসেবে",
  },
  {
    image: "./images/rikshaw_puller.jpg",
    en_title: "As an event sponsor",
    bn_title: "ইভেন্ট স্পনসর হিসেবে",
  },
];

const Banner = () => {
  const { language } = useContext(LanguageContext);
  return (
    <div className="banner_main_container flex fl_dir_col fl_al_cen gap_40">
      <h1 className="cl_red fn_h1_30 font_2 tx_cen">
        {language === "bn" ? "কানেক্ট উইথ এবি পার্টি" : "Connect With AB Party"}
      </h1>
      <div className="banner_container page_width max_width mx_auto">
        <div className="banner_inner_grid gap_20">
          {banners.map((banner, index) => {
            return (
              <div key={index} className="reveal banner_item relative">
                <div className="banner_image_container relative">
                  <Image fill="auto" src={banner.image} alt={`banner_image-${index}`} />
                </div>
                <h2 className="font_1 fn_h1_10">{language==="bn"?banner.bn_title:banner.en_title}</h2>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Banner;
