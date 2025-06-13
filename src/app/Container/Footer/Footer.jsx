"use client";
import React, { useContext } from "react";
import "./Footer.css";
import Image from "next/image";
import { LanguageContext } from "@/app/LanguageContext";
import DynamicLink from "@/app/Components/DynamicLink";
const list_menu_item = [
  [
    {
      link_text: "লক্ষ্য উদ্দেশ্য",
      link_url: "/",
    },
    {
      link_text: "কর্মসূচী",
      link_url: "/",
    },
    {
      link_text: "সম্পাদিত কাজ",
      link_url: "/",
    },
    {
      link_text: "প্রিন্ট মিডিয়া",
      link_url: "/",
    },
    {
      link_text: "ভিজ্যুয়াল মিডিয়া",
      link_url: "/",
    },
    {
      link_text: "নোটিশ বোর্ড",
      link_url: "/",
    },
    {
      link_text: "যোগাযোগ",
      link_url: "/",
    },
  ],
  [
    {
      link_text: "Mission & Vision",
      link_url: "/",
    },
    {
      link_text: "Activities",
      link_url: "/",
    },
    {
      link_text: "Achievements",
      link_url: "/",
    },
    {
      link_text: "Print Media",
      link_url: "/",
    },
    {
      link_text: "Visual Media",
      link_url: "/",
    },
    {
      link_text: "Notice Board",
      link_url: "/",
    },
    {
      link_text: "Contact",
      link_url: "/",
    },
  ],
];



const Footer = () => {
  const { language } = useContext(LanguageContext);
  return (
    <div className="footer_main_container">
      <div className="page_width max_width mx_auto">
        <div className="footer_items_container relative gap_20">
          <span className="bar"></span>
          <div className="footer_item reveal flex fl_dir_col gap_20">
            <h3 className="title cl_green font_2 fn_h1_10">
              {language === "bn" ? "এবি পার্টি" : "AB Party"}
            </h3>
            <p className="cl_green font_1 fn_para_1 tx_jus">
              {language == "bn"
                ? "সাম্য, মানবিক মর্যাদা ও সামাজিক সুবিচারের যে অধিকারগুলোর ভিত্তিতে ১৯৭১ সালে বাংলাদেশ স্বাধীন হয়েছিল — সেই অধিকার আজও পুরোপুরি বাস্তবায়িত হয়নি বলেই আরেকটি নতুন রাজনৈতিক উদ্যোগ আমাদের নিতে হয়েছে। মানুষ ৭১-এ ঐক্যবদ্ধ হয়ে যেভাবে স্বাধীনতা অর্জন করেছিল, একইভাবে ঐক্যবদ্ধ হয়ে স্বাধীনতার সেই অধিকারগুলোর বাস্তবায়নে সক্রিয় হবে — এটাই প্রত্যাশা আমাদের।"
                : "The rights to equality, human dignity, and social justice—on which Bangladesh gained independence in 1971—have still not been fully realized. That is why we have had to take a new political initiative. Just as the people united in 1971 to achieve independence, we hope they will once again unite to realize those rights of independence."}
            </p>
            <p className="cl_green font_1 fn_para_1">
              {language==="bn"?"“আমাদের রাজনীতি মানুষের আকাঙ্ক্ষা ও অধিকার পূরণের রাজনীতি, আমাদের রাজনীতি ঐক্যের রাজনীতি, আমাদের রাজনীতি সবার রাজনীতি।”":"“Our politics is about fulfilling people's aspirations and rights. Our politics is the politics of unity. Our politics is the politics of all.”"}
            </p>
          </div>
          <div className="footer_item reveal flex gap_20 fl_dir_col">
            <h3 className="title cl_green font_2 fn_h1_10">{language==="bn"?"মেনু":"Menu"}</h3>
            <ul className="footer_item_list flex fl_dir_col">
              {list_menu_item[language === "bn" ? 0 : 1].map((item, index) => {
                return (
                  <li key={index} className="footer_list_item cl_green fn_para_1 flex fl_al_cen">
                    <span className="right_arrow relative">
                      <Image src="./icons/right_arrow.svg" fill="auto" alt={`arrow[${index}]`} />
                    </span>
                    <a className="footer_link_text font_1" href={item.link_url}>
                      {item.link_text}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="footer_item reveal flex fl_dir_col gap_20">
            <h3 className="title cl_green font_2 fn_h1_10">{language==="en"?"Follow Us":"ফলো করুন"}</h3>
            <div className="footer_flex_column_container h_100 flex fl_dir_col fl_jus_bet">
              <div className="social_media_links flex gap_10">
                <a className="social_icon relative" href="/">
                  <Image src="./icons/facebook.png" fill alt="facebook_icon" />
                </a>
                <a className="social_icon relative" href="/">
                  <Image src="./icons/twitter.jpg" fill alt="twitter_icon" />
                </a>
                <a className="social_icon relative" href="/">
                  <Image src="./icons/instagram.png" fill alt="instagram_icon" />
                </a>
                <a className="social_icon relative" href="/">
                  <Image src="./icons/tiktok.png" fill alt="tiktok" />
                </a>
              </div>
              <div className="flex fl_dir_col gap_10">
                <DynamicLink
                  link_text={language==="bn"?"জয়েন এবি পার্টি":"Join AB Party"}
                  link_url={"/"}
                  classes={"cl_bg_glass cl_white font_3 fn_para"}
                />
                <DynamicLink
                  link_text={language==="bn"?"দান করুন":"Donate"}
                  link_url={"/"}
                  classes={"cl_bg_glass cl_white font_3 fn_para"}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="footer_bottom_copyright flex fl_al_cen fl_jus_bet gap_20">
          <p className="cl_black fn_para tx_cen mx_auto">Copyright 2025 All Rights Reserved</p>
          <p className="cl_black fn_para tx_cen mx_auto">Terms and Conditions</p>
          <p className="cl_black fn_para tx_cen mx_auto">Privacy</p>
          <p className="cl_black fn_para tx_cen mx_auto">Cookie Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

/*

<li className="cl_green fn_para_1 flex fl_al_cen">
                <span className="right_arrow relative">
                  <Image src="./icons/right_arrow.svg" fill="auto" />
                </span>
                <a className="font_1" href="/">
                  লক্ষ্য উদ্দেশ্য
                </a>
              </li>

*/
