import Link from 'next/link'
import { FC } from 'react'

interface Props {
  items: Array<{
    text: string
    url: string
  }>
}

const Breadcrumb: FC<Props> = ({ items }) => {
  return (
    <span className="flex gap-2">
      {items.map((item) => (
        <Link href={item.url} key={item.url}>
          <a className="text-white">{item.text}</a>
        </Link>
      ))}
    </span>
  )
}

export default Breadcrumb
