"use client";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const TEXT = "Welcome to the Party!";
// const TEXT = "We're Getting Married!";
export default function Party() {
  const [imageUrl, setImageUrl] = useState("https://picsum.photos/800/600");
  const [scales, setScales] = useState({ scaleX: 1, scaleY: 1 });
  const [initialSize, setInitialSize] = useState({ width: 0, height: 0 });
  const [showArch, setShowArch] = useState(true);

  useEffect(() => {
    const updateImageSize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      // 計算初始拱門尺寸（視窗寬度的 30%）
      const initialWidth = Math.round(width * 0.3);
      const initialHeight = Math.round((initialWidth * 4) / 3);

      setInitialSize({ width: initialWidth, height: initialHeight });

      // 使用固定解析度的圖片以確保品質
      setImageUrl(`https://picsum.photos/800/600`);

      // 計算最終需要的 scale（基於實際初始尺寸）
      const finalScaleX = width / initialWidth;
      const finalScaleY = height / initialHeight;

      setScales({ scaleX: finalScaleX, scaleY: finalScaleY });
    };

    updateImageSize();

    // window.addEventListener("resize", updateImageSize);

    // return () => window.removeEventListener("resize", updateImageSize);
  }, []);

  return (
    <div
      className="relative h-screen overflow-hidden flex flex-col items-center justify-center bg-black backdrop-blur-md bg-cover bg-center bg-no-repeat"
      //   style={{
      //     backgroundImage: showArch ? "none" : `url(${imageUrl})`,
      //   }}
    >
      {showArch && initialSize.width > 0 && (
        <motion.div
          className="absolute bottom-0 left-1/2 origin-bottom rounded-t-full bg-white bg-cover bg-center bg-no-repeat overflow-hidden outline-1 outline-offset-4 outline-white/70"
          style={{
            width: `${initialSize.width}px`,
            height: `${initialSize.height}px`,
            // backgroundImage: `url(${imageUrl})`,
          }}
          initial={{
            x: "-50%",
            y: "100%",
            scaleX: 1,
            scaleY: 1,
            borderRadius: "500px 500px 0 0",
          }}
          animate={{
            y: ["100%", "0%", "0%", "0%"],
            scaleX: [1, 1, 2, scales.scaleX],
            scaleY: [1, 1, 2, scales.scaleY],
            borderRadius: [
              "500px 500px 0 0",
              "500px 500px 0 0",
              "500px 500px 0 0",
              "0px 0px 0 0",
            ],
          }}
          transition={{
            duration: 2,
            times: [0, 0.4, 0.8, 1],
            ease: "easeInOut",
          }}
          onAnimationComplete={() => {
            setShowArch(false);
          }}
        />
      )}
      <h1 className="font-playfair font-semibold text-center text-2xl px-4 py-1 overflow-hidden text-white drop-shadow-lg">
        {TEXT.split("").map((char, index) =>
          char === " " ? (
            <span key={char + index}>&nbsp;</span>
          ) : (
            <motion.span
              className="inline-block"
              key={char + index}
              initial={{ y: 50, rotate: 100 }}
              animate={{ y: 0, rotate: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1 + 2,
              }}
            >
              {char}
            </motion.span>
          ),
        )}
      </h1>
    </div>
  );
}
