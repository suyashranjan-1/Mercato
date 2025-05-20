"use client";
import React from "react";
import { motion } from "motion/react";
import { LampContainer } from "./ui/lamp.tsx";

export function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Boost Your Brand with US
        <br></br>
        <br />
        <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto px-4 tracking-wide">
          We turn your vision into success with strategic expertise and flawless execution.
        </p>



      </motion.h1>
    </LampContainer>
  );
}
