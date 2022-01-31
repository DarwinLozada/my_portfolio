import NextLink, { LinkProps } from 'next/link'
import { FC } from 'react'

const Link: FC<LinkProps> = ({ children, ...linkProps }) => {
  return (
    <NextLink {...linkProps} scroll={false}>
      {children}
    </NextLink>
  )
}

export default Link
