import React, { useRef } from 'react'
import { gsap } from 'gsap'

const Welcome = () => {

  const titleText = "Portfolio"
  const subtitleText = "Hey There this is Shelly's"

  const titleLettersRef = useRef([])
  const subtitleLettersRef = useRef([])

  // TITLE WATER EFFECT
  const animateTitle = (index) => {

    // MAIN LETTER
    gsap.to(titleLettersRef.current[index], {
      y: -10,
      scale: 1.08,
      opacity: 1,
      filter: "brightness(1.5)",
      duration: 0.45,
      ease: "power3.out",
    })

    // LEFT LETTER
    if (titleLettersRef.current[index - 1]) {

      gsap.to(titleLettersRef.current[index - 1], {
        y: -5,
        scale: 1.03,
        opacity: 0.95,
        duration: 0.4,
        ease: "power2.out",
      })

    }

    // RIGHT LETTER
    if (titleLettersRef.current[index + 1]) {

      gsap.to(titleLettersRef.current[index + 1], {
        y: -5,
        scale: 1.03,
        opacity: 0.95,
        duration: 0.4,
        ease: "power2.out",
      })

    }

  }

  const resetTitle = () => {

    gsap.to(titleLettersRef.current, {
      y: 0,
      scale: 1,
      opacity: 0.82,
      filter: "brightness(1)",
      duration: 0.6,
      stagger: 0.02,
      ease: "power3.out",
    })

  }

  // SUBTITLE ANIMATION
  const animateSubtitle = (index) => {

    gsap.to(subtitleLettersRef.current[index], {
      y: -3,
      scale: 1.03,
      opacity: 1,
      filter: "brightness(1.3)",
      duration: 0.3,
      ease: "power3.out",
    })

  }

  const resetSubtitle = (index) => {

    gsap.to(subtitleLettersRef.current[index], {
      y: 0,
      scale: 1,
      opacity: 0.82,
      filter: "brightness(1)",
      duration: 0.4,
      ease: "power3.out",
    })

  }

  return (
    <section
      id="welcome"
      className="flex flex-col items-center justify-center"
    >

      {/* SUBTITLE */}

      <p
        className="
          text-zinc-300
          text-lg
          mb-15
          italic
          font-['Playwrite_GB_S']
        "
      >

        {
          subtitleText.split("").map((letter, index) => (

            <span
              key={index}
              ref={(el) => subtitleLettersRef.current[index] = el}
              onMouseEnter={() => animateSubtitle(index)}
              onMouseLeave={() => resetSubtitle(index)}
              style={{
                display: "inline-block",
                opacity: 0.82
              }}
            >
              {letter === " " ? "\u00A0" : letter}
            </span>

          ))
        }

      </p>

      {/* TITLE */}

      <h1
        className="
          text-7xl
          md:text-8xl
          lg:text-[5rem]
          font-normal
          leading-none
          text-white
          cursor-default
          font-['Playwrite_GB_S']
        "
      >

        {
          titleText.split("").map((letter, index) => (

            <span
              key={index}
              ref={(el) => titleLettersRef.current[index] = el}
              onMouseEnter={() => animateTitle(index)}
              onMouseLeave={resetTitle}
              style={{
                display: "inline-block",
                opacity: 0.82,
                marginRight: letter === "P" ? "-0.12em" : "0"
              }}
            >
              {letter}
            </span>

          ))
        }

      </h1>

    </section>
  )
}

export default Welcome