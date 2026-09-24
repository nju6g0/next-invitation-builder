import { useRef } from "react";
import {
  motion,
  useInView,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";

const COLORS = ["blue", "orange", "green", "red"];

function InViewExample() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: 0.5, // 當元素 50% 進入視窗時觸發
    margin: "-60px",
    once: false, // 允許重複觸發（預設是 false）
  });
  const { scrollYProgress, scrollY } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const filter = useTransform(
    scrollYProgress,
    [0, 1],
    ["blur(0px)", "blur(10px)"],
  );

  return (
    <>
      <motion.div
        className="sticky top-0 h-5 bg-amber-700"
        style={{ scaleX: scrollYProgress, originX: 0 }}
      />
      <motion.div
        className="fixed bottom-24 right-10 w-40 h-10 bg-amber-500"
        style={{ scaleX }}
      />
      <motion.div
        className="fixed bottom-10 right-10 w-10 h-10 bg-rose-400"
        style={{ filter }}
      />
      <div className="h-160" />
      <div className="flex flex-col items-center gap-25 w-60 mx-auto">
        {COLORS.map((item) => (
          <motion.div
            key={item}
            style={{ backgroundColor: item }}
            className="w-full h-20 rounded-2xl"
            initial={{ width: "50%" }}
            whileInView={{ width: "100%" }}
            viewport={{
              amount: 1,
              margin: "-100px",
              //   once: true,
            }}
          />
        ))}
        <motion.div
          ref={ref}
          className="w-60 h-30 rounded-2xl bg-cyan-700 text-white text-center leading-30"
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring" }}
          viewport={{
            amount: 0.5,
            margin: "-50px",
            // once: true, // 只執行一次動畫
          }}
        >
          {isInView ? "Hi!" : "bye~"}
        </motion.div>
      </div>

      <div className="h-180" />
    </>
  );
}

export default InViewExample;
