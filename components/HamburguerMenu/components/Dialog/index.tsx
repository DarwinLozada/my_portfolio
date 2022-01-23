/* eslint-disable react/display-name */
import * as Dialog from '@radix-ui/react-dialog'
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
                duration: 0.5,
              },
            },

            exit: {
              opacity: 0,
              transition: {
                duration: 0.5,
              },
            },
          }}
          className="overflow-y-auto grid place-items-center duration-300 z-50 bg-slate-900/90 fixed top-0 w-screen h-screen"
        >
          <Dialog.Overlay asChild forceMount ref={ref}>
            <Dialog.Content asChild forceMount>
              <m.nav
                className="flex w-2/3 h-1/2 bg-slate-300 rounded-md bg-opacity-50 backdrop-blur"
                transition={{
                  duration: 1,
                }}
                variants={{
                  initial: {
                    opacity: 0.6,
                    scaleY: 2,
                    scaleX: 2.5,
                  },

                  exit: {
                    opacity: 0,
                    scaleY: 1.6,
                    scaleX: 2,
                    transition: {
                      duration: 0.7,
                    },
                  },

                  animateTo: {
                    opacity: 1,
                    scaleY: 1,
                    scaleX: 1,
                  },
                }}
              >
                <ul className="flex flex-col items-center justify-center w-full gap-4">
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
              </m.nav>
            </Dialog.Content>
          </Dialog.Overlay>
        </m.div>
      )}
    </AnimatePresence>
  )
})

export default NavDialog
