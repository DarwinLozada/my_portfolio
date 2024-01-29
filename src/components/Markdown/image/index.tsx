import { JSX, useState } from 'react'
import NextImage from 'next/legacy/image'
import * as Dialog from '@radix-ui/react-dialog'
import DialogAnimationWrapper from 'components/AnimationWrappers/Dialog'

interface Props {
  src?: string | undefined
  alt?: string | undefined
  width?: string | number | undefined
  height?: string | number | undefined
}

const Image = ({ src, alt, width, height }: Props): JSX.Element => {
  const [openImage, setOpenImage] = useState(false)

  const imageWidth = typeof width === 'string' ? parseInt(width, 10) : width
  const imageHeight = typeof height === 'string' ? parseInt(height, 10) : height

  return (
    <Dialog.Root
      open={openImage}
      onOpenChange={(open) => {
        setOpenImage(open)
      }}
    >
      <Dialog.Trigger asChild>
        <button className="flex w-full items-center justify-center">
          <figure className="relative flex items-center justify-center">
            <NextImage
              src={src || ''}
              layout="fill"
              alt={alt}
              width={imageWidth}
              height={imageHeight}
            />
          </figure>
        </button>
      </Dialog.Trigger>

      <DialogAnimationWrapper active={openImage}>
        <figure className="relative py-12 md:max-w-[40rem]">
          <NextImage
            src={src || ''}
            layout="fill"
            alt={alt}
            width={imageWidth}
            height={imageHeight}
          />
        </figure>
      </DialogAnimationWrapper>
    </Dialog.Root>
  )
}

export default Image
