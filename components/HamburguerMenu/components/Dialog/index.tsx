/* eslint-disable react/display-name */
import * as Dialog from '@radix-ui/react-dialog'
import { CloseIcon } from 'components/Icons'
import { ABOUT_ROUTE, HOME_ROUTE, PROJECTS_ROUTE } from 'constants/routes'
import { AnimatePresence, m } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
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
          className="overflow-y-auto grid place-items-center duration-300 z-50 bg-slate-900/80 fixed top-0 w-screen h-screen"
        >
          <Dialog.Overlay asChild forceMount ref={ref}>
            <Dialog.Content asChild forceMount>
              <m.div
                className="relative flex flex-col w-2/3 h-1/2 bg-gradient-to-b overflow-hidden from-[#6e6df3] to-[#042044]/90 shadow-lg rounded-lg will-change-transform"
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
                  className="flex absolute bottom-[1rem] w-24 left-4 opacity-[0.40] drop-shadow-md"
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
                  <div className="relative flex z-[55] min-w-[120px]">
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
                  className="flex absolute top-0 right-10 w-24 opacity-[0.25] drop-shadow-md"
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
                  <div className="relative flex z-[55] min-w-[90px]">
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
                    <CloseIcon className="w-4 text-white/30 stroke-1" />
                  </Dialog.Close>
                </div>

                <ul className="flex flex-col items-center justify-center z-[60] w-full gap-4 flex-grow mb-20 ">
                  {NavRoutes.map((route) => (
                    <li
                      key={route.route}
                      className="text-white text-3xl font-montserrat font-medium"
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
