'use client'

import { useEffect, useRef } from 'react'

import { cn } from '@/lib/utils'

/**
 * A soft glow that lags behind the pointer inside its parent (decorative, marketing surfaces only).
 * - transform is written straight to this element every frame (no CSS variables on the parent)
 * - pointer tracking only on hover-capable devices; touch devices get a slow CSS drift instead
 * - reduced motion: static glow, no tracking, no drift
 */
export function Spotlight({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    const parent = el?.parentElement
    if (!el || !parent) return

    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!canHover || reduce) {
      el.dataset.mode = reduce ? 'static' : 'drift'
      return
    }
    el.dataset.mode = 'track'

    let frame = 0
    let active = false
    const target = { x: 0, y: 0 }
    const current = { x: 0, y: 0 }

    const tick = () => {
      // critically damped-ish lerp: no overshoot, settles in ~20 frames
      current.x += (target.x - current.x) * 0.12
      current.y += (target.y - current.y) * 0.12
      el.style.transform = `translate3d(${current.x}px, ${current.y}px, 0) translate(-50%, -50%)`
      if (Math.abs(target.x - current.x) > 0.5 || Math.abs(target.y - current.y) > 0.5) {
        frame = requestAnimationFrame(tick)
      } else {
        frame = 0
      }
    }

    const onMove = (e: PointerEvent) => {
      const r = parent.getBoundingClientRect()
      target.x = e.clientX - r.left
      target.y = e.clientY - r.top
      if (!active) {
        active = true
        current.x = target.x
        current.y = target.y
        el.dataset.visible = 'true'
      }
      if (!frame) frame = requestAnimationFrame(tick)
    }
    const onLeave = () => {
      active = false
      el.dataset.visible = 'false'
    }

    parent.addEventListener('pointermove', onMove)
    parent.addEventListener('pointerleave', onLeave)
    return () => {
      parent.removeEventListener('pointermove', onMove)
      parent.removeEventListener('pointerleave', onLeave)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div
      ref={ref}
      aria-hidden="true"
      data-visible="false"
      className={cn('spotlight pointer-events-none absolute left-0 top-0 will-change-transform', className)}
    />
  )
}
