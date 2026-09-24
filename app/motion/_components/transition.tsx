"use client";
import { useState } from "react";
import { motion } from "motion/react";

const variants = {
  large: {
    x: 100,
    scale: 1.2,
  },
  small: {
    x: 0,
    scale: 0.8,
  },
};
function TransitionExample() {
  const [isLarge, setIsLarge] = useState(false);
  return (
    <div className="flex flex-col gap-4 items-center">
      <p>ease: backInOut</p>
      <motion.div
        className="w-20 h-20 bg-rose-400 rounded-2xl"
        variants={variants}
        animate={isLarge ? "large" : "small"}
        onClick={() => setIsLarge((prev) => !prev)}
        transition={{
          duration: 1,
          ease: "backInOut",
        }}
      />
      <p>ease: [0.39, 0.24, 0.3, 1]</p>
      <motion.div
        className="w-20 h-20 bg-rose-400 rounded-2xl"
        variants={variants}
        animate={isLarge ? "large" : "small"}
        onClick={() => setIsLarge((prev) => !prev)}
        transition={{
          duration: 1,
          ease: [0.39, 0.24, 0.3, 1],
        }}
      />
      <p>spring / bounce / duration</p>
      <motion.div
        className="w-20 h-20 bg-rose-400 rounded-2xl"
        variants={variants}
        animate={isLarge ? "large" : "small"}
        onClick={() => setIsLarge((prev) => !prev)}
        transition={{
          type: "spring",
          bounce: 0.8,
          duration: 3,
          //   visualDuration: 3,
        }}
      />
      <p>spring / stiffness / damping/ mass</p>
      <motion.div
        className="w-20 h-20 bg-rose-400 rounded-2xl"
        variants={variants}
        animate={isLarge ? "large" : "small"}
        onClick={() => setIsLarge((prev) => !prev)}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 3,
          mass: 10,
        }}
      />
      <p>動畫可以分別設置 transition type</p>
      <motion.div
        className="w-20 h-20 bg-rose-400 rounded-2xl"
        variants={variants}
        animate={isLarge ? "large" : "small"}
        onClick={() => setIsLarge((prev) => !prev)}
        transition={{
          scale: {
            type: "spring",
            bounce: 0.8,
          },
          x: {
            type: "tween",
            duration: 2,
          },
        }}
      />
      <p>動畫可以分別設置 transition type/ repeat / delay</p>
      <motion.div
        className="w-20 h-20 bg-rose-400 rounded-2xl"
        variants={variants}
        animate={isLarge ? "large" : "small"}
        onClick={() => setIsLarge((prev) => !prev)}
        transition={{
          scale: {
            type: "spring",
            bounce: 0.8,
          },
          x: {
            delay: 0.5,
            repeat: 2,
            repeatType: "mirror",
            repeatDelay: 0.5,
          },
        }}
      />
    </div>
  );
}

export default TransitionExample;
