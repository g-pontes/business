"use client";

import React from "react";
import { motion } from "framer-motion";
import "./ourdiff.css";
import { ourDiffFeatures } from "@/src/utils/data";
import Image from "next/image";
import {
  containerVariants,
  descVariants,
  tagVariants,
  titleVariants,
} from "@/src/utils/animation";

const OurDiff = () => {
  return (
    <div className="od-wrapper">
      <div className="container">
        <div className="od-container">
          {/* head */}
          <div className="od-head">
            <motion.span
              initial="offscreen"
              whileInView={"onscreen"}
              variants={tagVariants}
              className="tag"
            >
              Nossos diferenciais
            </motion.span>
            <motion.span
              initial="offscreen"
              whileInView={"onscreen"}
              variants={titleVariants}
              className="title"
            >
              Capital justo, sem complicações
            </motion.span>
            <motion.span
              initial="offscreen"
              whileInView={"onscreen"}
              variants={descVariants}
              className="text"
            >
              Nossa missão é nivelar o campo de atuação para o capital de
              crescimento em estágio inicial.
              <br /> Fornecemos capital imparcial, flexível e não dilutivo com
              suporte de execução para acelerar a criação de valor.
            </motion.span>
          </div>

          {/* feature */}
          <div className="od-features">
            {ourDiffFeatures.map((feature, index) => (
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                variants={containerVariants((index + 1) * 0.1)}
                key={index}
                className="od-feature"
              >
                <Image
                  src={feature.icon}
                  alt="feature"
                  width={128}
                  height={128}
                />
                <span className="sec-title">{feature.title}</span>
                <span className="text">{feature.des}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurDiff;
