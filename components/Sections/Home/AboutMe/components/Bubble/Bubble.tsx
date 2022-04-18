import { m } from 'framer-motion'
import { FC, useRef } from 'react'
import useScreenBreakpoint from 'hooks/useScreenBreakpoint'

interface Props {
  midOfHobbiesArray: number
  index: number
}

const HobbieBubble: FC<Props> = ({ children, index, midOfHobbiesArray }) => {
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

  return (
    <m.div
      className="absolute"
      variants={{
        initial: {
          translateY: initialYPosition.current,
          translateX: initialXPosition.current,
        },

        moveAround: {
          translateY: [
            initialYPosition.current,
            randomYMovement.current,
            initialYPosition.current,
          ],
          translateX: randomXMovement.current,
        },
      }}
      initial="inital"
      animate="moveAround"
      transition={{
        type: 'spring',
        repeat: Infinity,
        duration: randomDuration.current,
        delayChildren: randomDelay.current,
        repeatType: 'mirror',
      }}
    >
      <div className="h-14 w-14 overflow-hidden rounded-full shadow-md shadow-brandBg">
        {children}
      </div>
    </m.div>
  )
}

export default HobbieBubble
