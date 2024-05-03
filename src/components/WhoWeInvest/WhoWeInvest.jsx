"use client";

import React from "react";
import { motion } from "framer-motion";
import "./whoweinvest.css";
import {
  containerVariants,
  tagVariants,
  titleVariants,
} from "@/src/utils/animation";
import { whoWeInvest } from "@/src/utils/data";

const WhoWeInvest = () => {
  return (
    <div className="wwi-wrapper">
      <div className="container">
        <div className="wwi-container">
          {/* left side */}
          <div className="wwi-left">
            <div className="head">
              <motion.span
                initial="offscreen"
                whileInView={"onscreen"}
                variants={tagVariants}
                className="tag"
              >
                Em quem investimos
              </motion.span>
              <motion.span
                initial="offscreen"
                whileInView={"onscreen"}
                variants={titleVariants}
                className="title"
              >
                Negócios digitais com tração antecipada
              </motion.span>
            </div>

            {/* features */}
            <div className="wwi-features">
              {whoWeInvest.map((feature, index) => (
                <motion.div
                  variants={containerVariants(index * 0.05 + 1)}
                  initial="offscreen"
                  whileInView={"onscreen"}
                  key={index}
                  className="wwi-feature"
                >
                  <span className="des">{feature.title}</span>
                  <span className="text">{feature.des}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* right side */}
          <div className="wwi-right">
            <motion.img 
            variants={containerVariants(0.5)}
            initial="offscreen"
            whileInView={"onscreen"}
            src="persons.png" alt="persons" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeInvest;
