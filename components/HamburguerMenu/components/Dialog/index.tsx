/* eslint-disable react/display-name */
import * as Dialog from '@radix-ui/react-dialog'
import anime from 'animejs'
import { getHamburguerMenu } from 'components/HamburguerMenu'
import { CloseIcon } from 'components/Icons'
import { ABOUT_ROUTE, HOME_ROUTE, PROJECTS_ROUTE } from 'constants/routes'
import { m } from 'framer-motion'
import useAnimate from 'hooks/useAnimate'
import useScreenBreakpoint from 'hooks/useScreenBreakpoint'
import Image from 'next/image'
import Link from 'next/link'
import { Dispatch, FC, SetStateAction } from 'react'

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

const dialogAnimationTimeout = 500

const NavDialog: FC<Props> = ({ active, setActive }) => {
  const { ref: dialogRef, toggle: dialogToggle } = useAnimate<HTMLDivElement>({
    timeout: dialogAnimationTimeout,
    onEnter: (ref) => {
      setActive(true)

      anime({
        targets: ref.current,
        opacity: [0, 1],
        scaleY: [1.5, 1],
        scaleX: [1.7, 1],
        easing: 'easeOutQuad',
        duration: 400,
      })
    },
    onExit: (ref) => {
      anime({
        targets: ref.current,
        opacity: [1, 0],
        scaleY: [1, 1.2],
        scaleX: [1, 1.4],
        duration: 400,
        easing: 'easeOutQuad',
      })
    },
  })

  const { ref: backdropRef, toggle: backdropToggle } = useAnimate<HTMLDivElement>({
    timeout: dialogAnimationTimeout,
    onEnter: (ref) => {
      anime({
        targets: ref.current,
        opacity: [0, 1],
        easing: 'easeOutQuad',
        duration: 550,
      })
    },
    onExit: (ref) => {
      anime({
        targets: ref.current,
        opacity: [1, 0],
        easing: 'easeOutQuad',
        duration: 400,
        complete: () => {
          setActive(false)
        },
      })
    },
  })

  const { isSmall } = useScreenBreakpoint()

  return (
    <Dialog.Root
      open={active}
      onOpenChange={(open) => {
        dialogToggle(open)
        backdropToggle(open)
      }}
    >
      <Dialog.Trigger asChild>{isSmall && getHamburguerMenu()}</Dialog.Trigger>
      <Dialog.Portal>
        <div
          ref={backdropRef}
          className="fixed top-0 z-50 grid h-screen w-screen place-items-center overflow-y-auto bg-slate-900/80 duration-300"
        >
          <Dialog.Overlay asChild>
            <Dialog.Content asChild>
              <div
                ref={dialogRef}
                className="relative flex h-1/2 w-2/3 flex-col overflow-hidden rounded-lg bg-gradient-to-b from-[#6e6df3] to-[#042044]/90 shadow-lg"
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
              </div>
            </Dialog.Content>
          </Dialog.Overlay>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default NavDialog