import { useEffect, useState } from 'react'

const isServer = typeof window === 'undefined'

const calcBreakpoint = (width: number) => {
  const breakpoints = {
    isSmall: width <= 576,
    isMedium: width >= 576 && width <= 768,
    isLarge: width >= 768 && width <= 992,
    isExtraLarge: width >= 992 && width <= 1200,
  }

  // Check if which breakpoint is the window now
  const meetBreakpoint = Object.entries(breakpoints).find(
    (breakpoint) => breakpoint[1]
  ) as [string, boolean]

  return meetBreakpoint[0]
}

export default function useScreenBreakpoint() {
  const [currentBreakpoint, setCurrentBreakpoint] = useState<string>(
    !isServer ? calcBreakpoint(window.innerWidth) : ''
  )

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      const currentWidth = entries[0].contentRect.width
      const calculatedBreakpoint = calcBreakpoint(currentWidth)

      if (calculatedBreakpoint !== currentBreakpoint)
        setCurrentBreakpoint(calculatedBreakpoint)
    })

    const body = document.querySelector('body') as Element

    observer.observe(body)

    return () => observer.unobserve(body)
  }, [currentBreakpoint])

  return {
    isSmall: currentBreakpoint === 'isSmall',
    isMedium: currentBreakpoint === 'isMedium',
    isLarge: currentBreakpoint === 'isLarge',
    isExtraLarge: currentBreakpoint === 'isExtraLarge',
  }
}
