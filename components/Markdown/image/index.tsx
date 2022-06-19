import { FC, useState } from 'react'
import NextImage from 'next/image'
import * as Dialog from '@radix-ui/react-dialog'
import DialogAnimationWrapper from 'components/AnimationWrappers/Dialog'

interface Props {
  src?: string | undefined
  alt?: string | undefined
  width?: string | number | undefined
  height?: string | number | undefined
}

const Image: FC<Props> = ({ src, alt, width, height }) => {
  const [openImage, setOpenImage] = useState(false)

  return (
    <Dialog.Root
      open={openImage}
      onOpenChange={(open) => {
        setOpenImage(open)
      }}
    >
      <Dialog.Trigger asChild>
        <figure className="relative flex items-center justify-center">
          <NextImage
            src={src || ''}
            layout="intrinsic"
            alt={alt}
            width={width}
            height={height}
          />
        </figure>
      </Dialog.Trigger>

      <DialogAnimationWrapper active={openImage}>
        <figure className="relative max-h-[60%] md:max-w-[60%]">
          <NextImage
            src={src || ''}
            layout="intrinsic"
            alt={alt}
            width={width}
            height={height}
          />
        </figure>
      </DialogAnimationWrapper>
    </Dialog.Root>
  )
}

export default Image
