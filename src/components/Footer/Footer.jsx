import React from "react";
import "./footer.css";
import { EmailBox } from "../EmailBox/EmailBox";


const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="container">
        <div className="f-container">
          <span className="title">Obtenha financiamento hoje!</span>
          <EmailBox />

          <hr />
          <div className="f-menu">
            <span>Home</span>
            <span>O que nós fazemos</span>
            <span>Como funciona</span>
            <span>Em quem investimos</span>
            <span>Avaliações</span>
          </div>
          <hr />
          <span className="text">Feito por g-Pontes</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
