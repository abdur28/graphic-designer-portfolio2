'use client'

import React from 'react'
import { a, useChain, useSpring, useSpringRef } from '@react-spring/web'

export const Loader = ({ setUnmount }) => {
  const bgSpringRef = useSpringRef()
  const bgSpring = useSpring({
    ref: bgSpringRef,
    from: { opacity: 1 },
    to: { opacity: 0 },
    config: { duration: 800 },
    delay: 300,
    onResolve: () => setUnmount(true),
  })

  const textSpringRef = useSpringRef()
  const textSpring1 = useSpring({
    ref: textSpringRef,
    from: { opacity: 1 },
    to: { opacity: 0 },
    delay: 1500,
  })

  useChain([textSpringRef, bgSpringRef])

  return (
    <a.div
      ref={bgSpringRef}
      style={bgSpring}
      className='absolute top-0 left-0 z-30 flex items-center justify-center w-screen h-screen bg-black'
    >
      <a.span
        ref={textSpringRef}
        style={textSpring1}
        className='relative text-3xl text-white font-fog bottom-8'
      >
        Emily Catherine Mark
      </a.span>
    </a.div>
  )
}

export const CustomLoader = ({ setUnmount, text }) => {
  const bgSpringRef = useSpringRef()
  const bgSpring = useSpring({
    ref: bgSpringRef,
    from: { opacity: 1 },
    to: { opacity: 0 },
    config: { duration: 400 },
    delay: 300,
    onRest: () => setUnmount(true),
  })

  const textSpringRef = useSpringRef()
  const textSpring1 = useSpring({
    ref: textSpringRef,
    from: { opacity: 1 },
    to: { opacity: 0 },
    delay: 800,
  })

  useChain([textSpringRef, bgSpringRef])

  return (
    <a.div
      style={bgSpring}
      className='absolute top-0 left-0 flex items-center justify-center w-screen h-screen bg-black z-[19]'
    >
      <a.span
        style={textSpring1}
        className='relative text-3xl text-white font-fog bottom-8'
      >
        {text}
      </a.span>
    </a.div>
  )
}