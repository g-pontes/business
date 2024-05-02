"use client";

import React from "react";
import "./whatwedo.css";
import { motion } from "framer-motion";
import { features } from "@/src/utils/data";
import Image from "next/image";
import {
  containerVariants,
  descVariants,
  tagVariants,
  titleVariants,
} from "@/src/utils/animation";

const WhatWeDo = () => {
  return (
    <div className="wwd-wrapper">
      <div className="container">
        <div className="wwd-container">
          {/* head of section */}
          <div className="wwd-head">
            <motion.span
              initial="offscreen"
              whileInView={"onscreen"}
              variants={tagVariants}
              className="tag"
            >
              O que nós fazemos
            </motion.span>
            <motion.span
              initial="offscreen"
              whileInView={"onscreen"}
              variants={titleVariants}
              className="title"
            >
              Capacitando Fundadores com Capital Não Dilutivo e Experiência em
              Execução
            </motion.span>
            <motion.span
              initial="offscreen"
              whileInView={"onscreen"}
              variants={descVariants}
              className="des"
            >
              Aqui está como podemos avaliar
            </motion.span>
          </div>

          {/* two blocks */}
          <div className="wwd-blocks">
            {/* first block */}
            <div className="wwd-block">
              <motion.span
                initial="offscreen"
                whileInView={"onscreen"}
                variants={titleVariants}
                className="sec-title"
              >
                Financiamento
              </motion.span>
              <motion.span
                initial="offscreen"
                whileInView={"onscreen"}
                variants={descVariants}
                className="text"
              >
                Financie despesas recorrentes de crescimento e.g, aquisição de
                clientes, estoque
              </motion.span>

              <div className="block-features">
                {features.slice(0, 3).map((feature, index) => (
                  <motion.div
                    initial="offscreen"
                    whileInView="onscreen"
                    variants={containerVariants((index + 1) * 0.1)}
                    className="block-feature"
                    key={index}
                  >
                    <Image
                      src={feature.icon}
                      alt="feature"
                      width={60}
                      height={60}
                    />
                    <span>{feature.title}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* second block */}
            <div className="wwd-block">
              <motion.span
                initial="offscreen"
                whileInView={"onscreen"}
                variants={titleVariants}
                className="sec-title"
              >
                Blue Seed
              </motion.span>
              <motion.span
                initial="offscreen"
                whileInView={"onscreen"}
                variants={descVariants}
                className="text"
              >
                Financie itens únicos em escala e.g, produtos, contratações
              </motion.span>

              <div className="block-features">
                {features.slice(3, 6).map((feature, index) => (
                  <motion.div
                    initial="offscreen"
                    whileInView="onscreen"
                    variants={containerVariants((index + 1) * 0.1)}
                    className="block-feature"
                    key={index}
                  >
                    <Image
                      src={feature.icon}
                      alt="feature"
                      width={60}
                      height={60}
                    />
                    <span>{feature.title}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* support block */}
          <div className="wwd-support">
            {/* left side */}
            <div>
              <span className="sec-title">Apoio ao crescimento</span>
              <span className="text">
                Insights de dados e conhecimento completo para impulsionar o
                crescimento
              </span>
            </div>

            {/* right side */}
            <div>
              <span className="text">
                Insights de dados acionáveis conectando plataformas de receita,
                marketing e mídia social
              </span>
              <span className="text">
                Experiência em execução sob demanda com divisão de custo ou
                receita em design de propostas, engenharia, análise de
                marketing, parcerias, marca, propriedade intelectual, expansão
                de mercado, gestão de talentos
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
