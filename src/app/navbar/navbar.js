"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import NavItemText from "./navbar-item-text";
import NavItemImage from "./navbar-item-image";
import './css/navbar.css'

const MENU_LIST = [
    { text: "The Banan Project", href: "/" },
    { text: "Blog", href: "/" },
    { text: "Banan Engine", href: "/" },
    { text: "The Profit Taker", href: "/" },
    { text: "Other Works", href: "/" },
    { text: "Our Story", href: "/" },
    { text: "Philosophy", href: "/" },
  ];

export default function NavBar() {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header>
      <nav className={`nav`}>
        <Link legacyBehavior href={"/"}>
          <a>
            <Image className="logo" width={120} height={120} src="/svg/banan-full-yellow.svg" alt="Banan"/>
          </a>
        </Link>
        <div onClick={() => setNavActive(!navActive)} className={`nav__menu-bar`}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${navActive ? "active" : ""} nav__menu-list`}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItemText active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};
