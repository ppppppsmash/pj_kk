'use client'

import { motion, MotionProps } from "framer-motion";

const animation: MotionProps = {
  variants: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    //slideStart: { clipPath: "inset(0 100% 0 0 round 8px)" },
    slideEnd: { clipPath: "inset(0 0% 0 0 round 8px)" },
  },
  initial: ["hidden", "slideStart"],
  whileInView: ["visible", "slideEnd"],

  viewport: {
    amount: 0.4,
    // once: true
  },
  // onViewportEnter: () => console.log("enter"),
  // onViewportLeave: () => console.log("leave"),
  //transition: { type: "spring", duration: 1, bounce: 0 },
};

export default function MotionSlide({children}: {children: React.ReactNode}) {
  return (
    <div className="">
      <div className="">
        {children}
      </div>
    </div>
  );
}
