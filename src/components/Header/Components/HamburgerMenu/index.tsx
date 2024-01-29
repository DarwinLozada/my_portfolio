import * as Dialog from '@radix-ui/react-dialog'
import DialogAnimationWrapper from 'components/AnimationWrappers/Dialog'
import { CloseIcon } from 'components/Icons'
import { EaseOutSine } from 'constants/animations'
import { getNavRoutes } from 'constants/routes'
import { LazyMotion, m } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { FC, useState } from 'react'
import useTranslation from 'next-translate/useTranslation'

const animationFeatures = () =>
  import('animation/features').then((features) => features.default)

const HamburgerMenu: FC = () => {
  const [isActive, setActive] = useState(false)

  const { t } = useTranslation()

  return (
    <LazyMotion features={animationFeatures} strict>
      <Dialog.Root
        open={isActive}
        onOpenChange={(open) => {
          setActive(open)
        }}
      >
        <Dialog.Trigger asChild>
          <button className="flex h-8 w-11 flex-col items-center justify-center gap-2">
            <div className="h-full w-full rounded-md bg-gradient-to-r from-brandPink to-brandViolet"></div>
            <div className="h-full w-2/3 rounded-md bg-gradient-to-r from-brandPink to-brandViolet"></div>
            <div className="h-full w-full rounded-md bg-gradient-to-r from-brandPink to-brandViolet"></div>
          </button>
        </Dialog.Trigger>
        <DialogAnimationWrapper active={isActive}>
          <m.div
            className="relative flex h-1/2 w-2/3 flex-col overflow-hidden rounded-lg bg-gradient-to-b from-[#6e6df3] to-[#042044]/90 shadow-lg"
            transition={{
              duration: 0.4,
              ease: EaseOutSine,
            }}
            variants={{
              initial: {
                opacity: 0.6,
              },

              exit: {
                opacity: 0,
              },

              animateTo: {
                opacity: 1,
              },
            }}
          >
            <div className="flex justify-end">
              <Dialog.Close className="p-4 duration-150 hover:opacity-50">
                <CloseIcon className="w-4 stroke-1 text-white/30" />
              </Dialog.Close>
            </div>

            <ul className="z-[60] mb-20 flex w-full flex-grow flex-col items-center justify-center gap-4 ">
              {getNavRoutes().map((route) => (
                <m.li
                  key={route.route}
                  onClick={() => setActive(false)}
                  className="font-montserrat text-3xl font-medium text-white duration-300 hover:scale-110 active:scale-95"
                >
                  <Link href={route.route}>{t(route.name)}</Link>
                </m.li>
              ))}
            </ul>

            <m.div
              className="absolute bottom-[1rem] left-4 flex w-24 opacity-[0.40] drop-shadow-md"
              animate="move"
              variants={{
                move: {
                  translateY: 10,
                  translateX: -55,
                  rotateY: -17,
                  rotateZ: -30,
                  transition: {
                    duration: 7,
                    repeat: Infinity,
                    repeatType: 'mirror',
                    repeatDelay: 0.2,
                  },
                },
              }}
            >
              <div className="relative z-[55] flex min-w-[120px]">
                <Image
                  src="https://media.graphcms.com/vi3Uy2JTqqkEKZFdxd7b?_ga=2.178934500.1173955863.1642979355-430862818.1639815097"
                  alt="processor image"
                  layout="intrinsic"
                  width={2380}
                  height={1785}
                />
              </div>
            </m.div>
            <m.div
              className="absolute top-0 right-10 flex w-24 opacity-[0.25] drop-shadow-md"
              animate="move"
              variants={{
                move: {
                  translateY: 20,
                  translateX: 30,
                  rotateY: -17,
                  rotateZ: -15,
                  transition: {
                    duration: 9,
                    repeat: Infinity,
                    repeatType: 'mirror',
                    repeatDelay: 0.2,
                  },
                },
              }}
            >
              <div className="relative z-[55] flex min-w-[90px]">
                <Image
                  src="https://media.graphcms.com/yxhOxQzRN2kjInDz11Vq?_ga=2.106140995.1173955863.1642979355-430862818.1639815097"
                  alt="processor image"
                  layout="intrinsic"
                  width={3400}
                  height={2550}
                />
              </div>
            </m.div>
          </m.div>
        </DialogAnimationWrapper>
      </Dialog.Root>
    </LazyMotion>
  )
}
export default HamburgerMenu
