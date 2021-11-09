import { FC, ReactNode } from 'react'

interface Props {
  leftIcon?: ReactNode
  colorScheme?: 'primary' | 'secondary'
}

const COLORS = {
  primary: 'bg-brandViolet text-brandWhite',
  secondary: 'bg-brandPink text-brandWhite',
}

const Tag: FC<Props> = ({ children, leftIcon, colorScheme = 'primary' }) => {
  return (
    <div
      className={`flex items-center px-4 py-2 gap-2 justify-center rounded-[20px] ${COLORS[colorScheme]}`}
    >
      {leftIcon}
      <span className="whitespace-nowrap">{children}</span>
    </div>
  )
}

export default Tag
