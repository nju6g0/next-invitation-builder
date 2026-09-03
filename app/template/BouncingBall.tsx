"use client";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useEffect, useRef } from "react";

export default function BouncingBall() {
  // 球距離地面的高度
  const y = useMotionValue(1000);

  // 用 spring 將實際位置變得柔和
  const springY = useSpring(y, {
    stiffness: 500,
    damping: 35,
    mass: 0.8,
  });

  // 根據高度產生 squash/stretch
  const scaleY = useTransform(
    springY,
    [0, 8, 40, 150, 380],
    [0.78, 0.84, 0.96, 1.04, 1],
  );

  const scaleX = useTransform(
    springY,
    [0, 8, 40, 150, 380],
    [1.18, 1.12, 1.02, 0.98, 1],
  );

  // 陰影
  const shadowScale = useTransform(
    springY,
    [0, 50, 150, 380],
    [1, 0.75, 0.45, 0.2],
  );

  const shadowOpacity = useTransform(
    springY,
    [0, 50, 150, 380],
    [0.45, 0.3, 0.18, 0.08],
  );

  const velocity = useRef(0);
  const previousTime = useRef<number | null>(null);
  const animationFrame = useRef<number | null>(null);

  useEffect(() => {
    // 物理參數
    const gravity = -1500;
    const restitution = 0.72;

    // 初始高度
    y.set(380);

    const update = (time: number) => {
      if (previousTime.current === null) {
        previousTime.current = time;
        animationFrame.current = requestAnimationFrame(update);
        return;
      }

      // delta time，避免切換分頁後 dt 過大
      const dt = Math.min((time - previousTime.current) / 1000, 0.032);

      previousTime.current = time;

      // 重力
      velocity.current += gravity * dt;

      // 更新位置
      let nextY = y.get() + velocity.current * dt;

      // 撞地
      if (nextY <= 0) {
        nextY = 0;

        // 速度反轉 + 能量損失
        velocity.current = Math.abs(velocity.current) * restitution;

        // 非常小的速度直接停止
        if (velocity.current < 45) {
          velocity.current = 0;
        }
      }

      y.set(nextY);

      // 如果球已經停止，就停止計算
      if (velocity.current === 0 && nextY === 0) {
        return;
      }

      animationFrame.current = requestAnimationFrame(update);
    };

    animationFrame.current = requestAnimationFrame(update);

    return () => {
      if (animationFrame.current !== null) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, [y]);

  return (
    <div className="relative flex h-screen w-full items-end justify-center overflow-hidden">
      {/* Ground */}
      <div className="absolute bottom-16 h-1 w-80 rounded-full bg-slate-700" />

      {/* Ball */}
      <motion.div
        className="absolute bottom-[68px] h-20 w-20 rounded-full bg-gradient-to-br from-slate-300 to-slate-600 shadow-2xl"
        style={{
          y: useTransform(springY, (value) => -value),
          //   scaleX,
          //   scaleY,
        }}
      />

      {/* Shadow */}
      <motion.div
        className="absolute bottom-[60px] h-3 w-20 rounded-[50%] bg-black blur-sm"
        style={{
          scaleX: shadowScale,
          opacity: shadowOpacity,
        }}
      />
    </div>
  );
}
