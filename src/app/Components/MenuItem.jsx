"use client";

import React, { useEffect, useRef } from "react";
import "./Component.css";
import Image from "next/image";

const MenuItem = ({ id, contents, classes, index }) => {
  const dropList = useRef(null);

  const menuItemBannerResize = () => {
    const width = window.innerWidth;
    const settingWidth = width / 2 - 20;
    if (dropList.current) {
      if (width > 978) {
        dropList.current.style.width = `${settingWidth}px`;
      } else {
        dropList.current.style.width = `${width - 20}px`;
        // dropList.current.style.transform = `translateX(-100px)`;
      }
    }
  };

  useEffect(() => {
    // Call immediately after mount
    menuItemBannerResize();

    // Add resize listener
    window.addEventListener("resize", menuItemBannerResize);

    // Clean up the listener
    return () => {
      window.removeEventListener("resize", menuItemBannerResize);
    };
  }, []);

  return (
    <div className={`clicked_parent menu_drop_down_item ${index==0?"active":""}`}>
      <div className="drop_down_title flex fl_dir_col fl_al_cen fl_jus_cen font_1 cl_red">
        <h3 className="font_2 tx_cen fn_h1_10 cl_green bg_color_white clicked_item">
          {contents.title}
        </h3>
      </div>
      <div
        ref={dropList}
        className={`drop_down_lists  ${classes}`}
      >
        <div className="drop_down_inner_container flex fl_dir_col fl_jus_bet" id={id}>
          {contents.links.map((link, index) => (
            <a
              key={index}
              className="drop_down_item flex cl_white fn_type_4"
              href="/"
            >
              <span className="relative arrow_span">
                <Image
                  className="arrow_span_image"
                  fill="auto"
                  src="./icons/right_arrow.png"
                  alt={`${id}-${index}`}
                />
              </span>
              <p className="cl_white font_2 fn_type_4">{link.link_text}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
