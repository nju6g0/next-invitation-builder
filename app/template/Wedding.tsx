"use client";
import Image from "next/image";
import { motion } from "motion/react";

function WeddingTemplate() {
  return (
    <div className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center">
      {/* bg-gradient-to-b from-pink-200 to-purple-100 */}
      <motion.div
        animate={{ height: 0, opacity: 0 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 2.5 }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -50, scale: 0.8, rotate: 0 }}
          animate={{
            opacity: [0, 1],
            y: [-50, 0],
            scale: [0.8, 1],
            rotate: [0, 15, 0],
          }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="origin-left text-4xl font-bold text-center mb-4"
        >
          We&apos;re
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{
            opacity: [0, 1],
            y: [20, 0],
            scale: [0.8, 1],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
          className="text-4xl font-bold text-center mb-4"
        >
          Getting Married!
        </motion.h1>
      </motion.div>
      <motion.div
        className="w-full h-full overflow-hidden bg-black"
        initial={{ width: 80, height: 80, opacity: 0.5, borderRadius: "50%" }}
        animate={{
          width: [80, "100%"],
          height: [80, "100%"],
          opacity: 1,
          borderRadius: "0%",
        }}
        transition={{
          duration: 1,
          delay: 3,
          ease: "easeInOut",
          width: { delay: 3.5, duration: 1 },
          height: { delay: 4, duration: 1 },
        }}
      >
        {/* <Image
          src="https://picsum.photos/200/300"
          alt="Wedding"
          className="w-full h-full object-cover"
          width={80}
          height={80}
        /> */}
      </motion.div>
      {/* <motion.div
        className="absolute top-0 left-0 w-full h-full origin-center"
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: 1, scaleY: 1 }}
        transition={{ duration: 1, delay: 4.5, ease: "easeInOut" }}
      >
        <div className="h-full w-full flex flex-col items-center justify-center gap-4 text-white text-center p-4">
          <div className="bg-white/20 max-w-100 py-8 px-15 rounded-lg shadow-lg backdrop-blur-md">
            <h1>Wedding Invitation</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptate mollitia et minima fugiat doloremque incidunt optio
              natus provident consequatur commodi!
            </p>
            <p>location: 123 Wedding Ave, Love City</p>
            <p>date: 2024-12-31</p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-2"
            >
              <input
                type="text"
                placeholder="Your Name"
                className="p-2 rounded text-black"
              />
              <button
                type="submit"
                className="bg-white text-black p-2 rounded hover:bg-gray-200 transition"
              >
                RSVP
              </button>
            </form>
          </div>
        </div>
      </motion.div> */}
    </div>
  );
}

export default WeddingTemplate;
