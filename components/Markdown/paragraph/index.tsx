import { FC, ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

const Paragraph: FC<Props> = ({ children }) => {
  return <p className="mb-3 w-full text-lg leading-8 text-white">{children}</p>
}

export default Paragraph
