'use client'

import React from "react"
import { motion } from "framer-motion"

const container = {
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeInOut",
      duration: 1.6,
    },
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
    },
  },
}

const itemMain = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeInOut",
      duration: 1.6,
    },
  },
}

export const Loader = ({ setLoading }: any) => {
  return (
    <motion.div className="loader bg-white">
      <motion.div
        variants={container}
        onAnimationComplete={() => setLoading(false)}
        initial="hidden"
        animate="show"
        exit="exit"
        className="loader-inner"
      >
        <ImageBlock variants={item} id="image-1" />
        <motion.div variants={itemMain} className="absolute flex items-center justify-center top-0 left-0">
          <motion.img
            layoutId="main-image-1"
            src="/images/image-2.png"
          />
        </motion.div>
        <ImageBlock variants={item} id="image-3" />
        <ImageBlock variants={item} id="image-4" />
        <ImageBlock variants={item} id="image-5" />
      </motion.div>
    </motion.div>
  )
}

export const ImageBlock = ({ posX, posY, variants, id }: any) => {
  return (
    <motion.div
      variants={variants}
      className={`image-block ${id}`}
      style={{
        top: `${posX}vh`,
        left: `${posY}vw `,
      }}
    >

      <img
        src={`/images/${id}.png`}
        alt={id}
      />
    </motion.div>
  )
}

