import { FC, ReactNode } from 'react'

interface Props {
  icon: ReactNode
  text: string
  bgColor?: string
  textColor?: string
}

const Badge: FC<Props> = ({ icon, bgColor, text, textColor }) => {
  return (
    <div className="flex items-center justify-center">
      <div
        className="flex px-2 py-[6px] rounded-2xl h-auto justify-center items-center gap-2 leading-none"
        style={{ backgroundColor: bgColor }}
      >
        <div className="flex max-w-[1rem] leading-none">{icon}</div>
        <span className="text-xs" style={{ color: textColor }}>
          {text}
        </span>
      </div>
    </div>
  )
}

export default Badge
