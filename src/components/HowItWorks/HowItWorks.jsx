"use client";

import React from "react";
import { motion } from "framer-motion";
import "./howitworks.css";
import { hiwFeatures } from "@/src/utils/data";
import Image from "next/image";
import { tagVariants, titleVariants } from "@/src/utils/animation";

const HowItWorks = () => {
  const featureVariants = {
    offscreen: {
      scale: 0.5,
    },
    onscreen: {
      scale: 1,
      transition: {
        type: "spring",
        duration: 1.5,
      },
    },
  };

  return (
    <div className="hiw-wrapper">
      <div className="container">
        <div className="hiw-container">
          {/* head */}
          <div className="hiw-head">
            <motion.span
              initial="offscreen"
              whileInView={"onscreen"}
              variants={tagVariants}
              className="tag"
            >
              Como funciona
            </motion.span>
            <motion.span
              initial="offscreen"
              whileInView={"onscreen"}
              variants={titleVariants}
              className="title"
            >
              Desbloqueando o potencial ao longo da jornada de crescimento
            </motion.span>
          </div>

          <div className="hiw-features">
            {hiwFeatures.map((feature, index) => (
              <motion.div
                initial="offscreen"
                whileInView={"onscreen"}
                variants={featureVariants}
                key={1}
                className="hiw-feature"
              >
                {/* left side */}
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: {
                      type: "easeIn",
                      duration: 1,
                      delay: 0.7,
                    },
                  }}
                  className="detail"
                >
                  <span className="des">0{index + 1}</span>
                  <span className="sec-title">{feature.title}</span>
                  <span className="text">{feature.des}</span>
                </motion.div>

                {/* right side */}
                <div className="icon">
                  <Image
                    src={feature.icon}
                    width={128}
                    height={128}
                    alt="feature"
                    style={{ translate: "50% 0rem" }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
