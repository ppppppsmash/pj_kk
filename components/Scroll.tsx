'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export const Scroll = () => {
  const [showScroll, setShowScroll] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY

      if (scrollTop > 0 && showScroll) {
        setShowScroll(false)
      } else if (scrollTop === 0 && !showScroll) {
        setShowScroll(true)
      }
    };

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [showScroll])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: showScroll ? 1 : 0, y: showScroll ? 0 : 20 }}
      transition={{ duration: 0.5 }}
      className="border-scroll border-[2px] rounded-[20px] w-[26px] h-[38px] fixed b-[60px] bottom-[30px]
        before:h-[7px] before:w-[2px] before:bg-scroll before:rounded before:absolute before:top-[6px] before:left-1/2
        z-50 before:animate-scroll-indicator left-1/2 !-translate-x-1/2 hidden sm:block"
    >
      <Link href="/" />
    </motion.div>
  )
}
