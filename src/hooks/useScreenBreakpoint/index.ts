import { useEffect, useState } from 'react'

const isServer = typeof window === 'undefined'

const calcBreakpoint = (width: number) => {
  const breakpoints = {
    isMini: width <= 400,
    isSmall: width <= 576,
    isMedium: width >= 576 && width <= 768,
    isLarge: width >= 768 && width <= 992,
    isExtraLarge: width >= 992,
  }

  // Check which breakpoint is being meet
  const meetBreakpoint = Object.entries(breakpoints).find(
    (breakpoint) => breakpoint[1],
  ) as [string, boolean]

  return meetBreakpoint[0]
}

export default function useScreenBreakpoint() {
  const [currentBreakpoint, setCurrentBreakpoint] = useState<string>(
    !isServer ? calcBreakpoint(window.innerWidth) : '',
  )

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      const currentWidth = entries[0].contentRect.width
      const calculatedBreakpoint = calcBreakpoint(currentWidth)

      if (calculatedBreakpoint !== currentBreakpoint) {
        setCurrentBreakpoint(calculatedBreakpoint)
      }
    })

    const body = document.querySelector('body') as Element

    observer.observe(body)

    return () => observer.unobserve(body)
  }, [currentBreakpoint])

  return {
    isMini: currentBreakpoint === 'isMini',
    isSmall: currentBreakpoint === 'isSmall',
    isMedium: currentBreakpoint === 'isMedium',
    isLarge: currentBreakpoint === 'isLarge',
    isExtraLarge: currentBreakpoint === 'isExtraLarge',
  }
}
