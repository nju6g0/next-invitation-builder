"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const COLORS = ["blue", "orange", "green", "red"];
const TABS = ["apple", "banana", "kiwi"];

function LayoutExample() {
  const [colors, setColor] = useState(COLORS);
  const [open, setOpen] = useState(false);
  const [display, setDisplay] = useState("grid");
  const [targetIndex, setTargetIndex] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState(0);
  const [activeColorIndex, setActiveColorIndex] = useState<number | null>(null);
  const [activeColorKey, setActiveColorKey] = useState(COLORS[0]);

  useEffect(() => {
    const timer = setInterval(() => {
      setColor((prev) => [...prev].sort(() => Math.random() - 0.5));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <p className="mb-10">
        layout 會讓 Motion
        自動偵測元素「版面位置或尺寸」的變化，然後把變化動畫化。
      </p>
      <div className="flex gap-2 flex-wrap w-42">
        {colors.map((color) => (
          <motion.div
            key={`turn_${color}`}
            style={{ backgroundColor: color }}
            className="w-20 h-20 rounded-xl"
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            layout
          />
        ))}
      </div>
      <p className="my-10">
        不同元素之間，如果有相同的 layoutId，把它們視為同一個視覺元素來做 shared
        layout animation。
      </p>
      <div className="h-40 bg-black flex justify-center items-center">
        <ul className="flex rounded-xl border border-amber-600 text-amber-600 overflow-hidden mb-4">
          {TABS.map((tab, index) => (
            <li
              key={tab}
              className={`z-0 relative min-w-25 flex-1 text-center py-1 cursor-pointer ${index === activeTab ? "font-medium text-black" : "bg-transparent"}`}
              onClick={() => setActiveTab(index)}
            >
              {activeTab === index && (
                <motion.div
                  className="bg-amber-600 -z-1 absolute inset-0"
                  layoutId="tab-indicator"
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                    mass: 1,
                  }}
                />
              )}
              {tab}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-4 py-4 bg-black flex justify-center items-center">
        <div className="relative grid grid-cols-3 gap-2 mx-auto">
          {[...COLORS, "purple", "tomato"].map((item, index) =>
            index === activeColorIndex ? (
              <motion.div
                key={`pop_${item}_${index}`}
                layoutId={`pop_${item}_${index}`}
                style={{ backgroundColor: item }}
                className="absolute top-0 left-0 w-full h-full rounded-xl z-1"
                onClick={() => setActiveColorIndex(null)}
              />
            ) : (
              <motion.div
                key={`pop_${item}_${index}`}
                layoutId={`pop_${item}_${index}`}
                style={{ backgroundColor: item }}
                className="w-30 h-20 rounded-xl"
                onClick={() => setActiveColorIndex(index)}
              />
            ),
          )}
        </div>
      </div>
      <div className="mt-4 p-4 bg-black grid grid-cols-2 gap-4">
        <div className="grid grid-flow-col grid-rows-4 gap-2">
          <div className="row-span-4">
            {COLORS.map(
              (item) =>
                activeColorKey !== item && (
                  <motion.div
                    key={`a_${item}`}
                    layoutId={`a_${item}`}
                    style={{ backgroundColor: item }}
                    className="h-12 mt-2 rounded"
                    onClick={() => setActiveColorKey(item)}
                  />
                ),
            )}
          </div>
          <div className="col-span-3 row-span-4">
            {COLORS.map(
              (item) =>
                activeColorKey === item && (
                  <motion.div
                    key={`a_${item}`}
                    layoutId={`a_${item}`}
                    style={{ backgroundColor: item }}
                    className="h-full w-full rounded-2xl"
                    onClick={() => setActiveColorKey(item)}
                  />
                ),
            )}
          </div>
        </div>
        <div className="h-50 flex flex-col">
          <div className="flex gap-2">
            {COLORS.map(
              (item) =>
                activeColorKey !== item && (
                  <motion.div
                    key={`b_${item}`}
                    layoutId={`b_${item}`}
                    style={{ backgroundColor: item }}
                    className="w-12 h-10 rounded"
                    onClick={() => setActiveColorKey(item)}
                  />
                ),
            )}
          </div>
          <div className="flex-1 mt-2">
            {COLORS.map(
              (item) =>
                activeColorKey === item && (
                  <motion.div
                    key={`b_${item}`}
                    layoutId={`b_${item}`}
                    style={{ backgroundColor: item }}
                    className="h-full w-full rounded-2xl"
                    onClick={() => setActiveColorKey(item)}
                  />
                ),
            )}
          </div>
        </div>
      </div>
      <AnimatePresence>
        {open ? (
          <motion.div
            layoutId="modal"
            transition={{ duration: 0.3 }}
            onClick={() => setOpen(false)}
            className="w-30 h-30 bg-amber-600"
          />
        ) : (
          <motion.button
            layoutId="modal"
            onClick={() => setOpen(true)}
            transition={{ type: "spring" }}
            className="border rounded-full px-4 leading-10"
          >
            Open
          </motion.button>
        )}
      </AnimatePresence>
      <button
        className={`px-4 py-1 border border-amber-600 text-amber-600 rounded-full cursor-pointer hover:bg-amber-600 hover:text-white hover:shadow-2xl duration-300`}
        onClick={() => {
          setDisplay((prev) => (prev === "grid" ? "flex" : "grid"));
        }}
      >
        click
      </button>
      <div
        className={`mt-4 w-46 mx-auto ${display} grid-cols-3 gap-2 flex-col`}
      >
        {[...COLORS, "purple", "tomato"].map((color, index) => (
          <motion.div
            key={`grid_${color}_${index}`}
            style={{ backgroundColor: color }}
            className={`${display === "grid" ? "h-12" : "h-6"} ${targetIndex === index && display === "grid" && "col-span-3"} rounded-md`}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            layout
            onClick={() =>
              setTargetIndex((prev) => (prev === index ? null : index))
            }
          />
        ))}
      </div>
    </>
  );
}

export default LayoutExample;
