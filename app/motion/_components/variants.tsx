import { useState } from "react";
import { motion } from "motion/react";

const variants = {
  on: { opacity: 1, scale: 1.2 },
  onExtend: { scale: 1 },
  off: { opacity: 0.3, scale: 0.8 },
  highlighted: { backgroundColor: "tomato", scale: 1.2 },
};

function VariantsExample() {
  const [isOn, setIsOne] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <motion.div
        className="w-24 h-25 rounded-3xl bg-purple-800 hover:cursor-grab active:cursor-grabbing"
        variants={variants}
        // 陣列靠前的 variant 會被靠後的覆蓋
        animate={isOn ? ["on", "onExtend"] : "off"}
        whileHover="highlighted"
        onClick={() => setIsOne((prev) => !prev)}
      />
    </div>
  );
}

export default VariantsExample;
