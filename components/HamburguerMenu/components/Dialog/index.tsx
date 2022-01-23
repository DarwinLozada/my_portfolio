/* eslint-disable react/display-name */
import * as Dialog from '@radix-ui/react-dialog'
import { CloseIcon } from 'components/Icons'
import { ABOUT_ROUTE, HOME_ROUTE, PROJECTS_ROUTE } from 'constants/routes'
import { AnimatePresence, m } from 'framer-motion'
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
          className="overflow-y-auto grid place-items-center duration-300 z-50 bg-slate-900/80 fixed top-0 w-screen h-screen"
        >
          <Dialog.Overlay asChild forceMount ref={ref}>
            <Dialog.Content asChild forceMount>
              <m.div
                className="flex flex-col w-2/3 h-1/2  bg-gradient-to-b bg-opacity-50 from-[#6e6df3]/50 to-[#C367D6]/50 shadow-lg rounded-lg backdrop-blur-md will-change-transform"
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
                <div className="flex justify-end">
                  <Dialog.Close className="p-4">
                    <CloseIcon className="w-4 text-white/30 stroke-1" />
                  </Dialog.Close>
                </div>

                <ul className="flex flex-col items-center justify-center w-full gap-4 flex-grow mb-20 ">
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
