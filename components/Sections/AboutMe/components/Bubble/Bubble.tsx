import { AnimationControls, m } from 'framer-motion'
import { FC, useEffect, useRef } from 'react'
import useScreenBreakpoint from 'hooks/useScreenBreakpoint'
import { HobbieBubbleAnimation } from '../../constants'

interface Props {
  midOfHobbiesArray: number
  animationControl: AnimationControls
  index: number
}

const HobbieBubble: FC<Props> = ({
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

  const randomDuration = useRef((Math.random() + 0.5) * 15)
  const randomDelay = useRef(Math.random() * 0.6)

  useEffect(() => {
    animationControl.start(HobbieBubbleAnimation.moveAround)
  }, [animationControl])

  return (
    <m.div
      className="absolute"
      variants={{
        initial: {
          translateY: initialYPosition.current,
          translateX: initialXPosition.current,

          transition: {
            duration: 3.5,
            type: 'tween',
          },
        },

        [HobbieBubbleAnimation.moveAround]: {
          translateY: [
            initialYPosition.current,
            randomYMovement.current,
            initialYPosition.current,
          ],
          translateX: randomXMovement.current,

          transition: {
            type: 'spring',
            repeat: Infinity,
            duration: randomDuration.current,
            delayChildren: randomDelay.current,
            repeatType: 'mirror',
          },
        },
      }}
      initial="inital"
      animate={animationControl}
    >
      <div className="h-14 w-14 overflow-hidden rounded-full shadow-md shadow-brandBg">
        {children}
      </div>
    </m.div>
  )
}

export default HobbieBubble
