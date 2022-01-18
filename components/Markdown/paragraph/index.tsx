import { FC } from 'react'

const Paragraph: FC = ({ children }) => {
  return <p className="text-white text-lg leading-8">{children}</p>
}

export default Paragraph
