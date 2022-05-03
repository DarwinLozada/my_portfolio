import { FC, useState } from 'react'
import NextImage from 'next/image'
import * as Dialog from '@radix-ui/react-dialog'
import DialogAnimationWrapper from 'components/AnimationWrappers/Dialog'

interface Props {
  src: string
  alt: string
  width: string
  height: string
}

const Image: FC<Props> = ({ src, alt, width, height }) => {
  const [openImage, setOpenImage] = useState(false)

  const handleImage = () => {
    setOpenImage((current) => !current)
  }

  return (
    <Dialog.Root
      open={openImage}
      onOpenChange={(open) => {
        setOpenImage(open)
      }}
    >
      <Dialog.Trigger>
        <figure className="relative" onClick={handleImage}>
          <NextImage
            src={src}
            layout="intrinsic"
            alt={alt}
            width={width}
            height={height}
          />
        </figure>
      </Dialog.Trigger>

      <Dialog.Portal forceMount>
        <DialogAnimationWrapper active={openImage}>
          <Dialog.Overlay className="fixed top-0 z-50 grid h-screen w-screen place-items-center overflow-y-auto bg-slate-900/80 duration-300">
            <Dialog.Content className="mx-4">
              <figure className="relative" onClick={handleImage}>
                <NextImage
                  src={src}
                  layout="intrinsic"
                  alt={alt}
                  width={width}
                  height={height}
                />
              </figure>
            </Dialog.Content>
          </Dialog.Overlay>
        </DialogAnimationWrapper>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default Image
