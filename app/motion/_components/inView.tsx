import { useRef } from "react";
import { motion, useInView } from "motion/react";

const COLORS = ["blue", "orange", "green", "red"];

function InViewExample() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: 0.5, // 當元素 50% 進入視窗時觸發
    margin: "-100px",
    once: false, // 允許重複觸發（預設是 false）
  });
  console.log("isInView:", isInView);
  return (
    <>
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
          // stiffness: 300, mass: 10, damping: 20
          viewport={{
            amount: 0.5,
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
