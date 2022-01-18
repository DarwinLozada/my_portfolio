import { FC } from 'react'
import NextImage from 'next/image'

interface Props {
  src: string
  alt: string
}

const Image: FC<Props> = (props) => {
  const { src, alt } = props

  console.log(src)
  console.log(alt)

  return (
    <figure className="relative h-24 bg-slate-800">
      <NextImage src={src} layout="fill" alt={alt} />
    </figure>
  )
}

export default Image
