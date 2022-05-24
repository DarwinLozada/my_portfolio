import useIsClient from 'hooks/useIsClient'
import { FC } from 'react'

const IsClient: FC = ({ children }) => {
  const isClient = useIsClient()

  return isClient ? <>{children}</> : <></>
}

export default IsClient
