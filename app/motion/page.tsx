"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

const Box = (props: any) => {
  const { className, ...rest } = props;
  return (
    <div
      {...rest}
      className={`w-20 h-20 bg-amber-300 ${className || ""}`}
    ></div>
  );
};

const MotionBox = motion.create(Box);

export default function Motion() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // 記錄逃跑動畫的彈性動態參數
  const [springConfig, setSpringConfig] = useState({
    stiffness: 300,
    damping: 20,
  });

  const boxRef = useRef<HTMLDivElement>(null);
  const lastMousePos = useRef({ x: 0, y: 0, time: Date.now() });

  const DISTANCE_THRESHOLD = 140;
  const BOX_SIZE = 100;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!boxRef.current) return;

    const currentTime = Date.now();
    const dt = (currentTime - lastMousePos.current.time) / 1000; // 秒

    // 1. 計算滑鼠當前移動速度 (像素/秒)
    const mouseDx = e.clientX - lastMousePos.current.x;
    const mouseDy = e.clientY - lastMousePos.current.y;
    const mouseDistance = Math.sqrt(mouseDx * mouseDx + mouseDy * mouseDy);

    // 避免 dt 為 0 的除零例外
    const speed = dt > 0 ? mouseDistance / dt : 0;

    // 更新上一次滑鼠位置與時間
    lastMousePos.current = { x: e.clientX, y: e.clientY, time: currentTime };

    // 2. 計算滑鼠與方塊中心點的距離
    const rect = boxRef.current.getBoundingClientRect();
    const boxCenterX = rect.left + rect.width / 2;
    const boxCenterY = rect.top + rect.height / 2;

    const dx = e.clientX - boxCenterX;
    const dy = e.clientY - boxCenterY;
    const distanceToBox = Math.sqrt(dx * dx + dy * dy);

    // 3. 進入感應範圍時觸發逃跑
    if (distanceToBox < DISTANCE_THRESHOLD) {
      // 根據滑鼠速度映射 Motion 的 Spring 剛性 (stiffness)
      // 滑鼠越快 -> stiffness 越高 (反應越暴烈)
      // 滑鼠越慢 -> stiffness 越低 (悠閒地溜走)
      const newStiffness = Math.min(1200, Math.max(150, speed * 0.1));
      const newDamping = Math.min(40, Math.max(15, speed * 0.015));

      setSpringConfig({
        stiffness: newStiffness,
        damping: newDamping,
      });

      // 4. 計算視窗邊界限制
      const padding = 20;
      const minX = -window.innerWidth / 2 + BOX_SIZE / 2 + padding;
      const maxX = window.innerWidth / 2 - BOX_SIZE / 2 - padding;
      const minY = -window.innerHeight / 2 + BOX_SIZE / 2 + padding;
      const maxY = window.innerHeight / 2 - BOX_SIZE / 2 - padding;

      // 生成隨機新位置
      const newX = Math.max(
        minX,
        Math.min(maxX, (Math.random() - 0.9) * (window.innerWidth - BOX_SIZE)),
      );
      const newY = Math.max(
        minY,
        Math.min(maxY, (Math.random() - 0.9) * (window.innerHeight - BOX_SIZE)),
      );

      setPosition({ x: newX, y: newY });
    }
  };
  return (
    <div
      className="min-h-[100vh] flex flex-col gap-4 justify-center items-center"
      onMouseMove={handleMouseMove}
    >
      <MotionBox
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.5 }}
        transition={{ type: "spring", stiffness: 400 }}
        className="rounded-xl"
      />
      <MotionBox
        className="bg-amber-800 w-5 h-5 rounded-full absolute left-0 top-[50%] *:-translate-x-1/2 -translate-y-1/2"
        initial={{ scale: 1 }}
        animate={{
          scale: 1.1,
          left: "80%",
          rotate: 1080,
          // rotate: [0, 1080],
          // scaleX: [1, 1.25, 0.85, 1], // 暴衝時拉長，急煞衝擊時壓扁
          // scaleY: [1, 0.75, 1.15, 1],
        }}
        transition={{
          delay: 1,
          type: "spring",
          stiffness: 400,
          damping: 50,
          mass: 5,
        }}
      />
      <MotionBox
        className="bg-teal-600 w-5 h-5 rounded-full bg-gradient-to-br from-cyan-400 via-sky-600 to-slate-900 absolute left-0 top-[30%] *:-translate-x-1/2 -translate-y-1/2"
        animate={{
          left: "80%",
          rotate: [0, 1080],
          scaleX: [1, 1, 1.25, 0.85, 1], // 暴衝時拉長，急煞衝擊時壓扁
          scaleY: [1, 1, 0.75, 1.15, 1],
        }}
        transition={{
          delay: 1,
          duration: 2,
          // left 與 rotate 使用整體 smooth 移動
          left: { ease: "easeInOut" },
          rotate: { ease: "easeIn" },
          // 專門為 scale 設定獨立的時間比例 (times)
          scaleX: {
            times: [0, 0.6, 0.8, 0.9, 1], // 0~0.5 保持原樣，0.5 後才觸發變形
            ease: ["linear", "easeOut", "easeInOut", "backOut"],
          },
          scaleY: {
            times: [0, 0.6, 0.8, 0.9, 1],
            ease: ["linear", "easeOut", "easeInOut", "backOut"],
          },
        }}
      />
      <motion.div
        ref={boxRef}
        animate={{ x: position.x, y: position.y }}
        transition={{
          type: "spring",
          stiffness: springConfig.stiffness,
          damping: springConfig.damping,
        }}
        className="bg-rose-400 rounded-full flex justify-center items-center text-white font-bold"
        style={{
          width: BOX_SIZE,
          height: BOX_SIZE,
          boxShadow: "0 10px 25px -5px rgba(56, 189, 248, 0.5)",
        }}
      >
        塊逃R!
      </motion.div>
    </div>
  );
}
