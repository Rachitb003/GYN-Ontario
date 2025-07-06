"use client"

import { useEffect, useRef, useState } from "react"
import { useOneTimeAnimation } from "./use-one-time-animation"

interface UseScrollAnimationProps {
  threshold?: number
  rootMargin?: string
  animationId?: string
}

export function useScrollAnimation({
  threshold = 0.1,
  rootMargin = "0px",
  animationId = "default",
}: UseScrollAnimationProps = {}) {
  const ref = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const { shouldAnimate } = useOneTimeAnimation(animationId)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Once visible, disconnect the observer to ensure the element stays visible
          observer.unobserve(entry.target)
        }
      },
      {
        threshold,
        rootMargin,
      },
    )

    const currentRef = ref.current

    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold, rootMargin])

  // Only allow animation if it hasn't been shown before
  const shouldShowAnimation = isVisible && shouldAnimate

  return { ref, isVisible: shouldShowAnimation }
}
