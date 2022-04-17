import { FC } from 'react'

const HobbieBubble: FC = ({ children }) => {
  return (
    <div className="h-12 w-12 overflow-hidden rounded-full shadow-md shadow-brandBg">
      {children}
    </div>
  )
}

export default HobbieBubble
