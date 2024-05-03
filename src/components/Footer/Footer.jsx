import React from "react";
import "./footer.css";
import { EmailBox } from "../EmailBox/EmailBox";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="container">
        <div className="f-container">
          <span className="title">Obtenha financiamento hoje!</span>
          <EmailBox />

          <hr />
          <div className="f-menu">
          <Link to="h-wrapper" spy smooth>
              <span>Home</span>
            </Link>
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
          <hr />
          <span className="text">Feito por g-Pontes</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
