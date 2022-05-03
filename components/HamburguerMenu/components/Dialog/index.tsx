/* eslint-disable react/display-name */
import * as Dialog from '@radix-ui/react-dialog'
import { CloseIcon } from 'components/Icons'
import { EaseOutSine } from 'constants/animations'
import { ABOUT_ROUTE, HOME_ROUTE, PROJECTS_ROUTE } from 'constants/routes'
import { m } from 'framer-motion'
import Image from 'next/image'
import Link from 'components/Link'
import { Dispatch, forwardRef, Ref, SetStateAction } from 'react'
import DialogAnimationWrapper from 'components/AnimationWrappers/Dialog'

const NavRoutes = [
  {
    route: HOME_ROUTE,
    name: 'Home',
  },
  {
    route: PROJECTS_ROUTE,
    name: 'Projects',
  },
  { route: ABOUT_ROUTE, name: 'About Me' },
]

interface Props {
  active: boolean
  setActive: Dispatch<SetStateAction<boolean>>
}

const NavDialog = forwardRef(
  ({ active, setActive }: Props, ref: Ref<HTMLDivElement>) => {
    return (
      <DialogAnimationWrapper active={active}>
        <Dialog.Overlay asChild forceMount ref={ref}>
          <Dialog.Content asChild forceMount>
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

              <div className="flex justify-end">
                <Dialog.Close className="p-4 duration-150 hover:opacity-50">
                  <CloseIcon className="w-4 stroke-1 text-white/30" />
                </Dialog.Close>
              </div>

              <ul className="z-[60] mb-20 flex w-full flex-grow flex-col items-center justify-center gap-4 ">
                {NavRoutes.map((route) => (
                  <m.li
                    key={route.route}
                    onClick={() => setActive(false)}
                    className="font-montserrat text-3xl font-medium text-white duration-300 hover:scale-110 active:scale-95"
                  >
                    <Link href={route.route}>
                      <a>{route.name}</a>
                    </Link>
                  </m.li>
                ))}
              </ul>
            </m.div>
          </Dialog.Content>
        </Dialog.Overlay>
      </DialogAnimationWrapper>
    )
  }
)

export default NavDialog
