"use client";

import React, { useContext, useEffect, useRef } from "react";
import "./MenuItemBanner.css";
import MenuItem from "@/app/Components/MenuItem";
import { LanguageContext } from "@/app/LanguageContext";

const menus = [
  [
    {
      title: "বাংলাদেশ ২.০",
      links: [
        {
          link_text: "জনগণ থেকে নাগরিক: নতুন রাজনীতির রূপান্তর",
          link_url: "/",
        },
        {
          link_text: "সমস্যা সমাধােনর রাজনীতি-নাগরিক ক্ষমতায়ন",
          link_url: "/",
        },
        {
          link_text: "শূন্য বেকারত্ব — ইয়ুথ থ্রি-পয়েন্ট ভিশন",
          link_url: "/",
        },
        {
          link_text: "উদ্যোক্তা সৃষ্টি — চতুর্থ শিল্প বিপ্লবের পথে",
          link_url: "/",
        },
        {
          link_text: "অর্থনীতিতে এশিয়ার সুপার পাওয়ার — সমৃদ্ধ বাংলাদেশ",
          link_url: "/",
        },
        {
          link_text: "তথ্যযুক্তিতে পৃথিবীর সেরা দেশ হিসেবে আত্মপ্রকাশ",
          link_url: "/",
        },
        {
          link_text: "প্রাণ, প্রকৃতি, পরিবেশ ও জলবায়ু বিষয়ক টেকসই উদ্যোগ",
          link_url: "/",
        },
      ],
    },
    {
      title: "সেকেন্ড রিপাবলিক",
      links: [
        {
          link_text: "প্রথম রিপাবলিক কেন ব্যর্থ হলো?",
          link_url: "/",
        },
        {
          link_text: "সবার আগে বাংলাদেশ",
          link_url: "/",
        },
        {
          link_text: "অন্তর্ভুক্তিমূলক বাংলাদেশ বিনির্মাণ",
          link_url: "/",
        },
        {
          link_text: "সম্য",
          link_url: "/",
        },
        {
          link_text: "মানবিক মর্যাদা",
          link_url: "/",
        },
        {
          link_text:
            "রাজনৈতিক দলে জনগণের অংশীদারিত্ব নতুন রাজনৈতিক সংস্কৃতি বিনির্মাণ",
          link_url: "/",
        },
        {
          link_text: "পলিসি বেইসড পলিটিক্স",
          link_url: "/",
        },
        {
          link_text: "সামাজিক ন্যায়বিচার",
          link_url: "/",
        },
      ],
    },
  ],
  [
    {
      title: "Bangladesh 2.0",
      links: [
        {
          link_text:
            "From People to Citizens: The Transformation of New Politics",
          link_url: "/",
        },
        {
          link_text: "Problem-Solving Politics — Citizen Empowerment",
          link_url: "/",
        },
        {
          link_text: "Zero Unemployment — Youth Three-Point Vision",
          link_url: "/",
        },
        {
          link_text:
            "Creating Entrepreneurs — Towards the Fourth Industrial Revolution",
          link_url: "/",
        },
        {
          link_text: "Asia’s Economic Superpower — Prosperous Bangladesh",
          link_url: "/",
        },
        {
          link_text: "Emerging as the World's Best in Information Excellence",
          link_url: "/",
        },
        {
          link_text:
            "Sustainable Initiatives on Life, Nature, Environment, and Climate",
          link_url: "/",
        },
      ],
    },
    {
      title: "Second Republic",
      links: [
        {
          link_text: "Why Did the First Republic Fail?",
          link_url: "/",
        },
        {
          link_text: "Bangladesh First – Always",
          link_url: "/",
        },
        {
          link_text: "Toward an Inclusive Bangladesh",
          link_url: "/",
        },
        {
          link_text: "Equality as a Foundation",
          link_url: "/",
        },
        {
          link_text: "Human Dignity as a Constitutional Right",
          link_url: "/",
        },
        {
          link_text:
            "People-Centered Political Parties: A new political culture",
          link_url: "/",
        },
        {
          link_text: "Policy-Based Politics: Facts over rhetoric",
          link_url: "/",
        },
        {
          link_text: "Social Justice as the Heart of Democra",
          link_url: "/",
        },
      ],
    },
  ],
];

const MenuItemBanner = () => {
  const containerRef = useRef(null);

  const { language } = useContext(LanguageContext);

  useEffect(() => {
    const handleVisibilityOfMenuItem = () => {
      const parents = document.querySelectorAll(".clicked_parent");
      const clicked = document.querySelectorAll(".clicked_item");

      clicked.forEach((item, index) => {
        item.addEventListener("click", () => {

          parents.forEach((parent, i) => {
            if(i!=index)
              parent.classList.remove("active");
          });

          parents[index].classList.toggle("active");

        });
      });
    };

    handleVisibilityOfMenuItem();
  }, []);

  return (
    <div className="menu_item_banner_container">
      <div className="page_width max_width relative mx_auto flex fl_dir_col fl_al_cen">
        <h1 className="reveal cl_red tx_cen ln_h_1_2 font_2 fn_h1_30 mg_block_20">
          {language === "bn"
            ? "বাংলাদেশ পরিবর্তনের রূপরেখা"
            : "The Outline for Changing Bangladesh"}
        </h1>
        <div ref={containerRef} className="menu_drop_down_container">
          <MenuItem
            id="bangladesh_2.0"
            refs={containerRef.current}
            contents={language === "bn" ? menus[0][0] : menus[1][0]}
            classes={"r_0 b_0"}
            index = {0}
          />
          <MenuItem
            id="second_republic"
            refs={containerRef.current}
            contents={language === "bn" ? menus[0][1] : menus[1][1]}
            classes={"l_0 b_0"}
            index = {1}
          />
        </div>
      </div>
    </div>
  );
};

export default MenuItemBanner;
