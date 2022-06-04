import { AnimationControls, m } from 'framer-motion'
import { FC, ReactNode, useEffect, useRef } from 'react'
import useScreenBreakpoint from 'hooks/useScreenBreakpoint'
import { HobbyBubbleAnimation } from '../../constants'

interface Props {
  children?: ReactNode
  midOfHobbiesArray: number
  animationControl: AnimationControls
  index: number
}

const HobbyBubble: FC<Props> = ({
  children,
  index,
  midOfHobbiesArray,
  animationControl,
}) => {
  const { isMini } = useScreenBreakpoint()

  const goesUp = index <= midOfHobbiesArray

  const randomNegativePositive = useRef(Math.random() < 0.5 ? 1 : -1)

  const initialYPosition = useRef(
    -(goesUp ? index : midOfHobbiesArray * 2 - index) * ((Math.random() + 1.2) * 20)
  )

  const initialXPosition = useRef(
    randomNegativePositive.current * Math.random() * (isMini ? 150 : 200)
  )

  const randomYMovement = useRef(
    initialYPosition.current +
      (Math.random() + 0.4) * 18 * randomNegativePositive.current
  )

  const randomXMovement = useRef(
    initialXPosition.current +
      (Math.random() + 0.5) * 13 * randomNegativePositive.current
  )

  const randomDuration = useRef((Math.random() + 0.5) * 10)
  const randomDelay = useRef(Math.random() * 0.6)

  useEffect(() => {
    animationControl.start(HobbyBubbleAnimation.moveAround)
  }, [animationControl])

  return (
    <m.div
      className="absolute"
      variants={{
        [HobbyBubbleAnimation.goOutside]: {
          translateY: initialYPosition.current,
          translateX: initialXPosition.current,

          transition: {
            duration: 3.5,
            type: 'tween',
          },
        },

        [HobbyBubbleAnimation.moveAround]: {
          translateY: [
            initialYPosition.current,
            randomYMovement.current,
            initialYPosition.current,
          ],
          translateX: randomXMovement.current,

          transition: {
            repeat: Infinity,
            duration: randomDuration.current,
            delayChildren: randomDelay.current,
            repeatType: 'reverse',
          },
        },
        [HobbyBubbleAnimation.hide]: {
          translateY: 180,
          translateX: -10,
          transition: {
            duration: 2,
            type: 'tween',
          },
        },
      }}
      animate={animationControl}
    >
      <div className="h-14 w-14 overflow-hidden rounded-full shadow-md shadow-brandBg">
        {children}
      </div>
    </m.div>
  )
}

export default HobbyBubble
