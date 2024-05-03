"use client";

import React from "react";
import "./testimonials.css";
import { motion } from "framer-motion";
import SlickerSlider from "./SlickerSlider";

const Testimonials = () => {
  return (
    <div className="t-wrapper">
      <div className="container">
        <div className="t-container">
          {/* head */}
          <div className="t-head">
            <span className="tag">Avaliações</span>
            <span className="title">
              Acesse capital que complementa as opções de financiamento
              tradicionais
            </span>
            <span className="des">O que as pessoas dizem sobre nós</span>
          </div>
        </div>
        
        {/* slider */}
          <SlickerSlider />
      </div>
    </div>
  );
};

export default Testimonials;
