import { useEffect, useState } from 'react'

export default function useIsClient() {
  const [isClient, setIsClient] = useState(typeof document !== 'undefined')

  useEffect(() => {
    setIsClient(true)
  }, [])

  return isClient
}
