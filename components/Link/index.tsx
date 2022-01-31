import NextLink, { LinkProps } from 'next/link'
import { FC } from 'react'

const Link: FC<LinkProps> = ({ children, ...linkProps }) => {
  return (
    <NextLink passHref scroll={false} {...linkProps}>
      {children}
    </NextLink>
  )
}

export default Link
