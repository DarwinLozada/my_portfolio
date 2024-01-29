import { useCallback, useEffect, useState, useMemo } from 'react'

export default function useWindowWidth(): number {
  const isClient = useMemo(() => typeof document === 'object', [])

  const getSize = useCallback(() => {
    return isClient ? document.body.clientWidth : 0
  }, [isClient])

  const [width, setWidth] = useState(getSize())

  useEffect((): any => {
    if (!isClient) {
      return false
    }

    function handleResize(): void {
      setWidth(getSize())
    }

    window.addEventListener('resize', handleResize)

    return (): void => window.removeEventListener('resize', handleResize)
  }, [getSize, isClient])

  return width
}
