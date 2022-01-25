import { ReactNode, FC } from 'react'

interface Props {
  icon: ReactNode
  title: ReactNode
}

const Value: FC<Props> = ({ icon: Icon, title: Title, children }) => {
  return (
    <li className="flex items-center justify-center gap-4">
      {Icon}
      <div>
        <h3 className="mb-1 text-xl font-semibold text-brandWhite">{Title}</h3>
        <p className="text-brandWhite ">{children}</p>
      </div>
    </li>
  )
}

export default Value
