'use client'

import { useReducedMotion, useSpring } from 'framer-motion'
import { useInViewport, useWindowSize } from '@/hooks'
import { startTransition, useEffect, useRef } from 'react'
import {
  AmbientLight,
  DirectionalLight,
  LinearSRGBColorSpace,
  Mesh,
  MeshPhongMaterial,
  PerspectiveCamera,
  Scene,
  SphereGeometry,
  UniformsUtils,
  Vector2,
  WebGLRenderer,
} from 'three'
import { throttle } from '@/lib/utils/throttle'
import { cleanRenderer, cleanScene, removeLights } from '@/lib/utils/three'
import fragmentShader from './displacement-sphere-fragment.glsl?raw'
import vertexShader from './displacement-sphere-vertex.glsl?raw'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Parallax, Autoplay } from 'swiper/modules'
import 'swiper/css'

const springConfig = {
  stiffness: 30,
  damping: 20,
  mass: 2,
}

export const DisplacementSphere = props => {
  const start = useRef(Date.now())
  const canvasRef = useRef()
  const mouse = useRef()
  const renderer = useRef()
  const camera = useRef()
  const scene = useRef()
  const lights = useRef()
  const uniforms = useRef()
  const material = useRef()
  const geometry = useRef()
  const sphere = useRef()
  const reduceMotion = useReducedMotion()
  const isInViewport = useInViewport(canvasRef)
  const windowSize = useWindowSize()
  const rotationX = useSpring(0, springConfig)
  const rotationY = useSpring(0, springConfig)

  useEffect(() => {
    const { innerWidth, innerHeight } = window
    mouse.current = new Vector2(0.8, 0.5)
    renderer.current = new WebGLRenderer({
      canvas: canvasRef.current,
      antialias: false,
      alpha: true,
      powerPreference: 'high-performance',
      failIfMajorPerformanceCaveat: true,
    })
    renderer.current.setSize(innerWidth, innerHeight)
    renderer.current.setPixelRatio(1)
    renderer.current.outputColorSpace = LinearSRGBColorSpace

    camera.current = new PerspectiveCamera(54, innerWidth / innerHeight, 0.1, 100)
    camera.current.position.z = 52

    scene.current = new Scene()

    material.current = new MeshPhongMaterial()
    material.current.onBeforeCompile = shader => {
      uniforms.current = UniformsUtils.merge([
        shader.uniforms,
        { time: { type: 'f', value: 0 } },
      ])

      shader.uniforms = uniforms.current
      shader.vertexShader = vertexShader
      shader.fragmentShader = fragmentShader
    }

    startTransition(() => {
      geometry.current = new SphereGeometry(24, 64, 128)
      sphere.current = new Mesh(geometry.current, material.current)
      sphere.current.position.z = 0
      sphere.current.position.x = 0
      sphere.current.position.y = 0
      sphere.current.modifier = Math.random()
      scene.current.add(sphere.current)
    })

    return () => {
      cleanScene(scene.current)
      cleanRenderer(renderer.current)
    }
  }, [])

  useEffect(() => {
    const dirLight = new DirectionalLight(0xffffff, 'light' ? 1.8 : 2.0)
    const ambientLight = new AmbientLight(0xffffff, 'light' ? 2.7 : 0.4)

    dirLight.position.z = 200
    dirLight.position.x = 100
    dirLight.position.y = 100

    lights.current = [dirLight, ambientLight]
    lights.current.forEach(light => scene.current.add(light))

    return () => {
      removeLights(lights.current)
    }
  }, [])

  useEffect(() => {
    const { width, height } = windowSize
    console.log(width)

    const adjustedHeight = height + height * 0.3
    renderer.current.setSize(width, adjustedHeight)
    camera.current.aspect = width / adjustedHeight
    camera.current.updateProjectionMatrix()

    // Render a single frame on resize when not animating
    if (reduceMotion) {
      renderer.current.render(scene.current, camera.current)
    }

    if (width <= 640) {
        sphere.current.position.x = 10
        sphere.current.position.y = 10
        sphere.current.position.z = 0

      } else {
        sphere.current.position.x = 0
        sphere.current.position.y = 0
        sphere.current.position.z = 0
      }
  }, [reduceMotion, windowSize])

  useEffect(() => {
    const onMouseMove = throttle(event => {
      const position = {
        x: event.clientX / window.innerWidth,
        y: event.clientY / window.innerHeight,
      }

      rotationX.set(position.y / 2)
      rotationY.set(position.x / 2)
    }, 100)

    if (!reduceMotion && isInViewport) {
      window.addEventListener('mousemove', onMouseMove)
    }

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [isInViewport, reduceMotion, rotationX, rotationY])

  useEffect(() => {
    let animation

    const animate = () => {
      animation = requestAnimationFrame(animate)

      if (uniforms.current !== undefined) {
        uniforms.current.time.value = 0.00005 * (Date.now() - start.current)
      }

      sphere.current.rotation.z += 0.001
      sphere.current.rotation.x = rotationX.get()
      sphere.current.rotation.y = rotationY.get()

      renderer.current.render(scene.current, camera.current)
    }

    if (!reduceMotion && isInViewport) {
      animate()
    } else {
      renderer.current.render(scene.current, camera.current)
    }

    return () => {
      cancelAnimationFrame(animation)
    }
  }, [isInViewport, reduceMotion, rotationX, rotationY])

  return (
    <div className="relative sm:grid sm:grid-cols-2 h-[100svh] overflow-hidden">
      <Swiper
        loop={true}
        parallax={true}
        modules={[Parallax, Autoplay]}
        speed={2000}
        autoplay={{
          delay: 3000
        }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        className="w-full  h-[80svh] sm:h-[100svh] overflow-hidden relative"
      >
        {/* <SwiperSlide>
          <div
            data-swiper-parallax=""
            className="relative block overflow-hidden pt-[100svh] w-[100vw]"
          >
          <canvas
            className="sm:absolute !-left-1/2 sm:inset-0 -top-[70%] animate-color-change"
            aria-hidden
            ref={canvasRef}
          />
          </div>
        </SwiperSlide> */}

        <SwiperSlide>
          <div
            data-swiper-parallax=""
            className="relative block overflow-hidden pt-[100svh] w-[100vw]"
          >
            <img
              className="w-full h-full absolute object-cover inset-0"
              src="/images/mv-01.jpg" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            data-swiper-parallax=""
            className="relative block overflow-hidden pt-[100svh] w-[100vw]"
          >
            <img
              className="w-full h-full absolute object-cover inset-0"
              src="/images/mv-02.jpg"
            />
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="h-[20svh] sm:h-[100svh] bg-white overflow-hidden flex flex-col justify-center relative z-[1]">
        <div className="px-[10%] sm:pl-[26%] sm:pr-[5%]">
          <h1 className="font-black text-[28px] leading-[1.2] tracking-wide">恒佳株式会社日本製</h1>
          <p className="mt-4 w-[300px]">アジアを中心に伊段シリーズ製品を始め、高品質な日本製の漢方薬、健康食品、化粧品、日用雑貨及び日本食材等を輸出しています。</p>
        </div>

        <div className="h-auto sm:h-[260px] absolute inset-0 m-auto flex justify-start flex-nowrap overflow-hidden -z-[1]">
          <div className="text-[80px] sm:text-[120px] font-black tracking-[.03em] relative flex-nowrap
            w-fit whitespace-nowrap animate-endless"
          >
            <span className="text-[#E5E7E9] font-normsEn font-bold">
              Kouka Co., Ltd.{' '}
            </span>
          </div>
          <div className="text-[80px] sm:text-[120px] font-black tracking-[.03em] relative flex-nowrap w-fit
            whitespace-nowrap animate-endless_2"
          >
            <span className="text-[#E5E7E9] font-normsEn font-bold">
              Kouka Co., Ltd.
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
