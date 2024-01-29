import Link from 'components/Link'
import { FC } from 'react'

interface Props {
  items: Array<{
    text: string
    url: string
  }>
}

const Breadcrumb: FC<Props> = ({ items }) => {
  return (
    <span className="inline-flex gap-2 text-sm">
      {items.map((item) => (
        <span key={item.url} className="inline-flex gap-1 text-white">
          <span className="">/</span>
          <Link
            href={item.url}
            className="transition-colors duration-200 hover:text-brandViolet hover:drop-shadow"
          >
            {item.text}
          </Link>
        </span>
      ))}
    </span>
  )
}

export default Breadcrumb
