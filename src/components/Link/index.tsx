/* eslint-disable react/display-name */
import NextLink, { LinkProps } from 'next/link'
import { FC, HTMLAttributeAnchorTarget, ReactNode } from 'react'

interface Props extends LinkProps {
  children?: ReactNode
  className?: string
  target?: HTMLAttributeAnchorTarget
}

const Link: FC<Props> = ({ children, className, target, ...linkProps }) => {
  return (
    <NextLink
      passHref
      className={className}
      scroll={false}
      {...linkProps}
      target={target}
    >
      {children}
    </NextLink>
  )
}
export default Link
