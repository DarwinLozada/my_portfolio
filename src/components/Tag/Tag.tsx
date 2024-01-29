import { FC, ReactNode } from 'react'

interface Props {
  leftIcon?: ReactNode
  colorScheme?: 'primary' | 'secondary'
  children?: ReactNode
}

const COLORS = {
  primary: 'bg-brandViolet text-brandWhite',
  secondary: 'bg-brandPink text-brandWhite',
}

const Tag: FC<Props> = ({ children, leftIcon, colorScheme = 'primary' }) => {
  return (
    <div
      className={`flex w-min items-center justify-center gap-2 rounded-[20px] px-4 py-2 ${COLORS[colorScheme]}`}
    >
      {leftIcon}
      <span className="whitespace-nowrap">{children}</span>
    </div>
  )
}

export default Tag
