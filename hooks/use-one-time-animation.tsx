"use client"

import { useState, useEffect } from "react"

export function useOneTimeAnimation(animationId: string) {
  const [hasAnimated, setHasAnimated] = useState(false)
  const [shouldAnimate, setShouldAnimate] = useState(false)

  useEffect(() => {
    // Check if this animation has already been shown in this session
    const animationShown = sessionStorage.getItem(`animation-${animationId}`)

    if (!animationShown) {
      // If not shown yet, allow animation and mark as shown
      setShouldAnimate(true)
      sessionStorage.setItem(`animation-${animationId}`, "true")
    } else {
      // If already shown, don't animate
      setShouldAnimate(false)
    }

    setHasAnimated(true)
  }, [animationId])

  return { shouldAnimate, hasAnimated }
}
