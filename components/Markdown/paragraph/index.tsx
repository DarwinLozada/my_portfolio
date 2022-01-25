import { FC } from 'react'

const Paragraph: FC = ({ children }) => {
  return <p className="text-lg leading-8 text-white">{children}</p>
}

export default Paragraph
