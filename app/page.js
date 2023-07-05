"use client";

import { container, item, item2 } from "@/animation";
import { motion as m } from "framer-motion";

export default function Home() {
  return (
    <m.div
      key={"modal"}
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      className="text-gray-900 absolute top-0 left-0 w-full h-full bg-orange-100 lg:px-40 px-16"
    >
      <main>
        <div className="my-56">
          <m.div
            variants={container}
            initial={"hidden"}
            animate={"show"}
            className="text-6xl text-center lg:text-right lg:text-9xl py-2 overflow-hidden flex"
          >
            <m.div variants={item2}>H</m.div>
            <m.div variants={item2}>a</m.div>
            <m.div variants={item2}>p</m.div>
            <m.div variants={item2}>p</m.div>
            <m.div variants={item2}>y</m.div>
            <m.div variants={item2}>
              <span>_</span>
            </m.div>
            <m.div variants={item2}>P</m.div>
            <m.div variants={item2}>i</m.div>
            <m.div variants={item2}>c</m.div>
            <m.div variants={item2}>k</m.div>
            <m.div variants={item2}>l</m.div>
            <m.div variants={item2}>e</m.div>
          </m.div>
        </div>

        <div className="flex justify-between overflow-hidden">
          <m.div variants={container} initial={"hidden"} animate={"show"}>
            <m.h2 variants={item}>Design</m.h2>
            <m.h2 variants={item}>Company</m.h2>
            <m.h2 variants={item}>2023</m.h2>
          </m.div>
          <m.div variants={container} initial={"hidden"} animate={"show"}>
            <m.h2 variants={item}>This pickle gonna make you smile.</m.h2>
            <m.h2 variants={item}>Scottish design to make you happy.</m.h2>
            <m.h2 variants={item}>Click contact for cool transition.</m.h2>
          </m.div>
        </div>
      </main>
    </m.div>
  );
}
