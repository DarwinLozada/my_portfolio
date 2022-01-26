/* eslint-disable react/display-name */
import * as Dialog from '@radix-ui/react-dialog'
import { CloseIcon } from 'components/Icons'
import { ABOUT_ROUTE, HOME_ROUTE, PROJECTS_ROUTE } from 'constants/routes'
import { AnimatePresence, m } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { forwardRef, Ref } from 'react'

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
}

const NavDialog = forwardRef(({ active }: Props, ref: Ref<HTMLDivElement>) => {
  return (
    <AnimatePresence>
      {active && (
        <m.div
          initial="initial"
          animate="animateTo"
          exit="exit"
          variants={{
            initial: {
              opacity: 0,
            },

            animateTo: {
              opacity: 1,
              transition: {
                duration: 0.3,
              },
            },

            exit: {
              opacity: 0,
              transition: {
                duration: 0.5,
                ease: 'easeOut',
              },
            },
          }}
          className="fixed top-0 z-50 grid h-screen w-screen place-items-center overflow-y-auto bg-slate-900/80 duration-300"
        >
          <Dialog.Overlay asChild forceMount ref={ref}>
            <Dialog.Content asChild forceMount>
              <m.div
                className="relative flex h-1/2 w-2/3 flex-col overflow-hidden rounded-lg bg-gradient-to-b from-[#6e6df3] to-[#042044]/90 shadow-lg"
                transition={{
                  duration: 0.4,
                }}
                variants={{
                  initial: {
                    opacity: 0.6,
                    scaleY: 1.5,
                    scaleX: 1.7,
                  },

                  exit: {
                    opacity: 0,
                    scaleY: 1.2,
                    scaleX: 1.4,
                    transition: {
                      duration: 0.5,
                    },
                  },

                  animateTo: {
                    opacity: 1,
                    scaleY: 1,
                    scaleX: 1,
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
                  <Dialog.Close className="p-4">
                    <CloseIcon className="w-4 stroke-1 text-white/30" />
                  </Dialog.Close>
                </div>

                <ul className="z-[60] mb-20 flex w-full flex-grow flex-col items-center justify-center gap-4 ">
                  {NavRoutes.map((route) => (
                    <li
                      key={route.route}
                      className="font-montserrat text-3xl font-medium text-white"
                    >
                      <Link href={route.route}>
                        <a>{route.name}</a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </m.div>
            </Dialog.Content>
          </Dialog.Overlay>
        </m.div>
      )}
    </AnimatePresence>
  )
})

export default NavDialog
