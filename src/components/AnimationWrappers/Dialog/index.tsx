/* eslint-disable react/display-name */
import * as Dialog from '@radix-ui/react-dialog'
import { EaseOutSine } from 'constants/animations'
import { AnimatePresence, LazyMotion, m } from 'framer-motion'
import { forwardRef, ReactNode } from 'react'

interface Props {
  active: boolean
  children: ReactNode
}

const TRANSITION_DURATION = 0.2

const animationFeatures = () =>
  import('animation/features').then((features) => features.default)

const DialogAnimationWrapper = forwardRef<HTMLDivElement, Props>(
  ({ active, children }, forwardRef) => {
    return (
      <LazyMotion features={animationFeatures} strict>
        <AnimatePresence>
          {active && (
            <Dialog.Portal forceMount>
              <Dialog.Overlay forceMount>
                <m.div
                  initial="initial"
                  animate="animateTo"
                  exit="exit"
                  transition={{ ease: EaseOutSine, duration: TRANSITION_DURATION }}
                  variants={{
                    initial: {
                      opacity: 0,
                    },

                    animateTo: {
                      opacity: 1,
                    },

                    exit: {
                      opacity: 0,
                    },
                  }}
                  className="fixed top-0 z-50 grid h-screen w-screen place-items-center overflow-y-auto bg-slate-900/80 duration-300"
                >
                  {active && (
                    <Dialog.Content forceMount asChild ref={forwardRef}>
                      {children}
                    </Dialog.Content>
                  )}
                </m.div>
              </Dialog.Overlay>
            </Dialog.Portal>
          )}
        </AnimatePresence>
      </LazyMotion>
    )
  },
)

export default DialogAnimationWrapper
