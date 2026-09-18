"use client";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { arc } from "motion";

const LIST_ITEMS = [1, 2, 3];

function Examples() {
  return (
    <div className="flex flex-col-reverse gap-4 flex-wrap">
      <motion.article
        className="w-20 h-20 aspect-auto bg-black"
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={{ opacity: 1, filter: "none" }}
        transition={{ duration: 2 }}
      />
      <motion.li
        initial={{ transform: "translateX(-100px)" }}
        animate={{ transform: "translateX(0px)" }}
        transition={{ type: "spring" }}
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit atque
        accusamus sunt eum neque assumenda vitae illum ad recusandae nesciunt.
      </motion.li>
      <motion.div
        className="w-20 h-20 aspect-auto bg-black"
        initial={{ x: 0 }}
        animate={{ x: "calc(100vw - 200%)" }}
        transition={{ type: "spring" }}
      />
      <motion.div
        className="w-50 overflow-hidden"
        initial={{ height: 0 }}
        animate={{ height: "auto" }}
        transition={{ duration: 3 }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque pariatur
        enim adipisci modi perferendis. Delectus fuga beatae impedit consequatur
        sed!
      </motion.div>
      <motion.div
        className="w-20 h-20 bg-black"
        initial={{ scale: 0 }}
        animate={{
          scale: [0, 1, null, 0.5, null],
          // 等同於 scale: [0, 1, 1, 0.5, 0.5],
          rotate: [0, 0, 360, 0, -180],
          borderRadius: [0, "25%", "50%", "50%", 0],
        }}
        transition={{ duration: 2, times: [0, 0.4, 0.6, 0.9, 1] }}
      />
      <ul>
        {LIST_ITEMS.map((item, index) => (
          <motion.li
            key={index}
            className="border h-10 mt-2"
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.5, type: "spring" }}
          />
        ))}
      </ul>
    </div>
  );
}

export default Examples;
