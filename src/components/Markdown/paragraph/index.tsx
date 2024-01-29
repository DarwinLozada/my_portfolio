import { JSX, ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

const Paragraph = ({ children }: Props): JSX.Element => {
  return <p className="mb-3 w-full text-lg leading-8 text-white">{children}</p>
}

export default Paragraph
