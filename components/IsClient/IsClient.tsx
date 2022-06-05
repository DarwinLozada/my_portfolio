import useIsClient from 'hooks/useIsClient'
import { FC, ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

const IsClient: FC<Props> = ({ children }) => {
  const isClient = useIsClient()

  return isClient ? <>{children}</> : null
}

export default IsClient
