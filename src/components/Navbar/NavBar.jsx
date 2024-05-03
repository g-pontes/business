"use client";

import React, { useState } from "react";
import "./navbar.css";
import { BiMenuAltRight } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Link } from "react-scroll";

const NavBar = () => {
  const [mobileMenuOpened, setMobileMenuOpened] = useState(false);
  const [navStyle, setNavStyle] = useState("");
  const { scrollYProgress } = useScroll();
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.2) {
      setNavStyle("sticky");
    } else {
      setNavStyle("");
    }
  });

  return (
    <div className={`n-wrapper ${navStyle}`}>
      {/* desktop version*/}
      <div className="container">
        <div className="n-container">
          {/* left side */}
          <div className="n-logo">
            <Link to="h-wrapper" spy smooth>
              <span>H-BUSINESS</span>
            </Link>
          </div>

          {/* right side */}
          <div className="n-right">
            <div className="n-menu">
              <Link to="wwd-wrapper" spy={true} smooth={true}>
                <span>O que nós fazemos</span>
              </Link>
              <Link to="hiw-wrapper" spy smooth offset={100}>
                <span>Como funciona</span>
              </Link>
              <Link to="wwi-wrapper" spy smooth>
                <span>Em quem investimos</span>
              </Link>
              <Link to="t-wrapper" spy smooth offset={100}>
                <span>Avaliações</span>
              </Link>
            </div>
            <div className="fund-button">Ser financiado</div>
          </div>
        </div>
      </div>

      {/* mobile version*/}
      <div className="nm-container">
        {/* logo */}
        <span>H-BUSINESS</span>

        {/* menu icon*/}
        {!mobileMenuOpened ? (
          <BiMenuAltRight onClick={() => setMobileMenuOpened(true)} size={30} />
        ) : (
          <RxCross2 onClick={() => setMobileMenuOpened(false)} size={30} />
        )}

        {/* mobile menu */}
        <div
          className="nm-menu"
          style={{ transform: mobileMenuOpened && "translatex(0%)" }}
        >
          <Link
            onClick={() => setMobileMenuOpened(false)}
            to="wwd-wrapper"
            spy={true}
            smooth={true}
          >
            <span>O que nós fazemos</span>
          </Link>

          <Link
            onClick={() => setMobileMenuOpened(false)}
            to="hiw-wrapper"
            spy
            smooth
            offset={100}
          >
            <span>Como funciona</span>
          </Link>
          <Link
            onClick={() => setMobileMenuOpened(false)}
            to="wwi-wrapper"
            spy
            smooth
          >
            <span>Em quem investimos</span>
          </Link>
          <Link
            onClick={() => setMobileMenuOpened(false)}
            to="t-wrapper"
            spy
            smooth
            offset={100}
          >
            <span>Avaliações</span>
          </Link>

          <div className="m-funded-button">Ser financiado</div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
