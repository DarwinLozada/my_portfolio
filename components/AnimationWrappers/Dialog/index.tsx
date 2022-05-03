import { Portal } from '@radix-ui/react-dialog'
import { EaseOutSine } from 'constants/animations'
import { AnimatePresence, m } from 'framer-motion'
import { FC } from 'react'

interface Props {
  active: boolean
}

const TRANSITION_DURATION = 0.4

const DialogAnimationWrapper: FC<Props> = ({ active, children }) => {
  return (
    <Portal forceMount>
      <AnimatePresence>
        {active && (
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
            {children}
          </m.div>
        )}
      </AnimatePresence>
    </Portal>
  )
}

export default DialogAnimationWrapper
