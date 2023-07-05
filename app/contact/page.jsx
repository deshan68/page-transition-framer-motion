"use client";

import { container, item } from "@/animation";
import { motion as m } from "framer-motion";

const Contact = () => {
  return (
    <m.main
      key={"modal"}
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      className="text-gray-900 absolute top-0 left-0 w-full h-full bg-red-400 lg:px-48 px-16"
    >
      <div className="my-56 p-1 overflow-hidden">
        <m.h1
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-6xl text-center lg:text-right lg:text-9xl"
        >
          Let's Talk
        </m.h1>
      </div>
      <div className="flex gap-40">
        <div className="lg:text-xl text-base">
          <h4>Find me:</h4>
        </div>
        <div className="lg:text-4xl text-2xl underline">
          <m.ul variants={container} initial={"hidden"} animate="show">
            <div className="overflow-hidden">
              <m.li variants={item} className="pb-2">
                Twitter
              </m.li>
            </div>
            <div className="overflow-hidden">
              <m.li variants={item} className="pb-2">
                Linkedin
              </m.li>
            </div>
            <div className="overflow-hidden">
              <m.li variants={item} className="pb-2">
                Instagram
              </m.li>
            </div>
            <div className="overflow-hidden">
              <m.li variants={item} className="pb-2">
                Facebook
              </m.li>
            </div>
          </m.ul>
        </div>
      </div>
    </m.main>
  );
};

export default Contact;
