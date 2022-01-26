import { RefObject, useRef } from 'react'
import useTransitionState, { TransitionOptions } from 'react-transition-state'

interface UseAnimateParams {
  timeout: number
  transitionOptions?: TransitionOptions
  onExit?: <T extends HTMLElement>(ref: RefObject<T>) => void
  onPreEnter?: <T extends HTMLElement>(ref: RefObject<T>) => void
  onEnter?: <T extends HTMLElement>(ref: RefObject<T>) => void
  onEntered?: <T extends HTMLElement>(ref: RefObject<T>) => void
}

const useAnimate = <T extends HTMLElement>({
  timeout,
  transitionOptions,
  onPreEnter,
  onEnter,
  onExit,
  onEntered,
}: UseAnimateParams) => {
  const ref = useRef<T>(null)

  const [state, toggle] = useTransitionState({
    timeout: timeout,
    preEnter: true,
    mountOnEnter: true,
    onChange: ({ state }) => {
      switch (state) {
        case 'preEnter':
          if (onPreEnter) onPreEnter(ref)
          break
        case 'entering':
          if (onEnter) onEnter(ref)
          break
        case 'entered':
          if (onEntered) onEntered(ref)
          break
        case 'exiting':
          if (onExit) onExit(ref)
      }
    },
    ...transitionOptions,
  })

  return { state, toggle, ref }
}

export default useAnimate
