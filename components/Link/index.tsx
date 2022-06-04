import NextLink, { LinkProps } from 'next/link'
import { FC, ReactNode } from 'react'


interface Props extends LinkProps {
  children?: ReactNode
}

const Link: FC<Props> = ({ children, ...linkProps }) => {
  return (
    <NextLink passHref scroll={false} {...linkProps}>
      {children}
    </NextLink>
  )
}

export default Link
