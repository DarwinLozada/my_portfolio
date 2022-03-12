import { FC } from 'react'

const Paragraph: FC = ({ children }) => {
  return <p className="mb-3 text-lg leading-8 text-white">{children}</p>
}

export default Paragraph
