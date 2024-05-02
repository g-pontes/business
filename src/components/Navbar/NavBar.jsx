"use client";

import React, { useState } from "react";
import "./navbar.css";
import { BiMenuAltRight } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";

const NavBar = () => {
  const [mobileMenuOpened, setMobileOpened] = useState(false);

  return (
    <div className="n-wrapper">
      {/* desktop version*/}
      <div className="container">
        <div className="n-container">
          {/* left side */}
          <div className="n-logo">
            <span>H-BUSINESS</span>
          </div>

          {/* right side */}
          <div className="n-right">
            <div className="n-menu">
              <span>O que nós fazemos</span>
              <span>Como funciona</span>
              <span>Em quem investimos</span>
              <span>Avaliações</span>
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
          <BiMenuAltRight onClick={() => setMobileOpened(true)} size={30} />
        ) : (
          <RxCross2 onClick={() => setMobileOpened(false)} size={30} />
        )}

        {/* mobile menu */}
        <div
          className="nm-menu"
          style={{ transform: mobileMenuOpened && "translatex(0%)" }}
        >
          <span>O que nós fazemos</span>
          <span>Como funciona</span>
          <span>Em quem investimos</span>
          <span>Avaliações</span>
          <div className="m-funded-button">Ser financiado</div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
