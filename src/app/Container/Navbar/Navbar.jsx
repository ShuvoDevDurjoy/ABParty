"use client";

import Image from "next/image";
import "./Navbar.css";
import DynamicLink from "@/app/Components/DynamicLink";
import { useContext, useEffect, useRef, useState } from "react";
import { LanguageContext } from "@/app/LanguageContext";
import gsap from "gsap";

const navContent = [
  {
    party_name: "আমার বাংলাদেশ পার্টি",
    join_party: "জয়েন এবি পার্টি",
    donate_party: "দান করুন",
    bottom_1: "প্রচারণা",
    bottom_2: "এবি নেতৃত্ব",
    bottom_3: "আরও",
  },
  {
    party_name: "Amar Bangladesh Party",
    join_party: "Join AB Party",
    donate_party: "Donate",
    bottom_1: "Campaigns",
    bottom_2: "AB LeaderShip",
    bottom_3: "More",
  },
];

const subLinks = [
  {
    en: "Bangladesh",
    bn: "বাংলাদেশ",
    url: "/",
  },
  {
    en: "Bangladesh",
    bn: "বাংলাদেশ",
    url: "/",
  },
  {
    en: "Bangladesh",
    bn: "বাংলাদেশ",
    url: "/",
  },
];

const Navbar = () => {
  const boxRef = useRef(null);

  const menuRef = useRef(null);
  // const bottomBoxRef = useRef(null);
  const lastScroll = useRef(0);

  const [dropDown, setDropDown] = useState(false);
  const [showSubLink, setShowSubLink] = useState(false);

  const { language, setLanguage } = useContext(LanguageContext);

  useEffect(() => {
    const handleScroll = async () => {
      const box = boxRef.current;
      console.log(box);
      const currentScroll = window.pageYOffset;
      console.log(window.pageYOffset);
      if (currentScroll <= box.getBoundingClientRect().height) {
        // bottomBoxRef.current.style.marginTop = `0px`;
        boxRef.current.classList.remove("fixed");
        box.style.position = "relative";
      } else {
        boxRef.current.classList.add("fixed");
        // bottomBoxRef.current.style.marginTop = `${
        //   box.getBoundingClientRect().height
        // }px`;
        if (currentScroll <= 0) {
          // Top of the page
          gsap.to(box, { y: 0, duration: 0.3 });
        } else if (currentScroll > lastScroll.current) {
          // Scrolling down – hide box
          gsap.to(box, { y: "-100%", duration: 0.3 });
        } else {
          // Scrolling up – show box
          gsap.to(box, { y: "0%", duration: 0.3 });
          box.style.position = "fixed";
          console.log("show the box");
        }
      }

      lastScroll.current = currentScroll;
      setDropDown(false);
      setShowSubLink(false);
    };

    const handleMenuShowUp = async () => {
      if (window.innerWidth <= 876) {
        menuRef.current.classList.add("active");
      } else {
        menuRef.current.classList.remove("active");
      }

      setDropDown(false);
      setShowSubLink(false);
    };

    handleMenuShowUp();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleMenuShowUp);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleMenuShowUp);
    };
  }, []);

  return (
    <>
      <nav ref={boxRef} className="navbar_main_container w_100">
        <div className="navbar_inner_container page_width max_width mx_auto pd_type_1 flex fl_al_cen fl_jus_bet gap_20">
          <div className="nav_logo_main_container">
            <div className="w_100 flex fl_al_cen h_100 gap_10">
              <a className="relative nav_logo_link" href="/">
                <Image
                  className="nav_logo"
                  fill="auto"
                  src="./icons/main_logo.png"
                  alt="ab_party_logo"
                />
              </a>
              <h1 className="cl_green fn_max font_2 fn_w_6 party_name">
                {language === "bn"
                  ? navContent[0].party_name
                  : navContent[1].party_name}
              </h1>
            </div>
          </div>
          <div className="nav_right_container fl_al_cen gap_10">
            <div className="nav_utility_links">
              <div className="nav_utility_links_inner flex gap_10">
                <DynamicLink
                  link_text={
                    language === "bn"
                      ? navContent[0].join_party
                      : navContent[1].join_party
                  }
                  link_url={"/"}
                  classes={"bg_cl_green font_1"}
                />
                <DynamicLink
                  link_text={
                    language === "bn"
                      ? navContent[0].donate_party
                      : navContent[1].donate_party
                  }
                  link_url={"/"}
                  classes={"bg_cl_red font_1 fn_w_6"}
                />
              </div>
            </div>
            <div className="language_selection_container relative flex fl_al_cen gap_10">
              <button
                className="lang_bn font_2"
                onClick={() => {
                  setLanguage("bn");
                }}
              >
                অ
              </button>
              <button
                className="lang_en font_2"
                onClick={() => {
                  setLanguage("en");
                }}
              >
                A
              </button>
            </div>
            <div className={`menu`} ref={menuRef}>
              <span
                className="menu_container relative"
                onClick={() => {
                  setDropDown((prev) => !prev);
                }}
              >
                <Image
                  className={`${dropDown ? "none" : "block"}`}
                  fill="auto"
                  src="./icons/menu.svg"
                  alt="menu_icon"
                ></Image>
                <Image
                  className={`${dropDown ? "active" : "none"}`}
                  fill="auto"
                  src="./icons/close_icon.png"
                  alt="close_icon"
                ></Image>
              </span>
            </div>
          </div>
        </div>
        <div className="nav_bottom_container">
          <div className="page_width max_width mx_auto flex fl_al_cen gap_20">
            <a href="/" className="cl_black font_1">
              {language === "bn"
                ? navContent[0].bottom_1
                : navContent[1].bottom_1}
            </a>
            <a href="/" className="cl_black font_1 relative">
              {language === "bn"
                ? navContent[0].bottom_2
                : navContent[1].bottom_2}
            </a>
            <div className="cl_black sub_link_container relative font_1 flex fl_al_cen">
              <span>
                {language === "bn"
                  ? navContent[0].bottom_3
                  : navContent[1].bottom_3}
              </span>
              <span className="relative down_arrow">
                <Image fill="auto" src="./icons/down_arrow.svg" alt="down_arrow_1" ></Image>
              </span>
              <div className="abs sub_link_drop_down_container">
                <div className="sub_link_drop_down flex fl_dir_col gap_10">
                  {subLinks.map((link, index) => {
                    return (
                      <a className="sub_links relative" href={link.url} key={index}>
                        <span className="sub_links_text">
                          {language === "bn" ? link.bn : link.en}
                        </span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`nav_drop_down abs ${dropDown ? "active" : ""}`}>
          <div className="drop_menu_inner_container page_width max_width mx_auto flex fl_dir_col fl_jus_bet gap_20">
            <a href="/" className="cl_black font_1">
              {language === "bn"
                ? navContent[0].bottom_1
                : navContent[1].bottom_1}
            </a>
            <a href="/" className="cl_black font_1">
              {language === "bn"
                ? navContent[0].bottom_2
                : navContent[1].bottom_2}
            </a>
            <div className="cl_black sub_link_container hidden relative font_1 flex fl_dir_col gap_10">
              <div className="flex fl_al_cen" onClick={()=>{setShowSubLink(prev=>!prev)}}>
                <span>
                  {language === "bn"
                    ? navContent[0].bottom_3
                    : navContent[1].bottom_3}
                </span>
                <span className="relative down_arrow">
                  <Image fill="auto" src="./icons/down_arrow.svg" alt="down_arrow_2"></Image>
                </span>
              </div>
              <div className={`mobile_sub_link_drop_down_container ${showSubLink?"active":""}`}>
                <div className={`flex fl_dir_col gap_10`}>
                  {subLinks.map((link, index) => {
                    return (
                      <a className="sub_links relative" href={link.url} key={index}>
                        <span className="sub_links_text">
                          {language === "bn" ? link.bn : link.en}
                        </span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
            <DynamicLink
              link_text={
                language === "bn"
                  ? navContent[0].join_party
                  : navContent[1].join_party
              }
              link_url={"/"}
              classes={"bg_cl_green font_1"}
            />
            <DynamicLink
              link_text={
                language === "bn"
                  ? navContent[0].donate_party
                  : navContent[1].donate_party
              }
              link_url={"/"}
              classes={"bg_cl_red font_1 fn_w_6"}
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
