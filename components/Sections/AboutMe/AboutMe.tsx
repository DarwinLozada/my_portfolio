import { useHobbiesQuery } from 'generated'
import { FC, useCallback, useEffect, useReducer } from 'react'
import HobbyBubble from './components/Bubble/Bubble'
import Image from 'next/image'
import { AnimatePresence, m, useAnimation } from 'framer-motion'

import catBody from 'public/images/cat_body.png'
import catEars from 'public/images/cat_ears.png'
import { HobbyBubbleAnimation } from './constants'
import { Actions, initialState, TwoStateAnimationReducer } from 'animation/state'

const DEFAULT_HOBBY_SIZE = 50

const AboutMeSection: FC = () => {
  const { data } = useHobbiesQuery()

  const [animationState, dispatch] = useReducer(
    TwoStateAnimationReducer,
    initialState
  )

  const midOfArray = Math.floor((data?.hobbies.length || 0) / 2)

  const catEarsControl = useAnimation()
  const hobbyBubblesControl = useAnimation()

  const handleAnimationChange = useCallback(async () => {
    if (!animationState.isAnimating && data) {
      catEarsControl.start('open')

      dispatch(Actions.TOGGLE_ANIMATING)

      if (animationState.isActive) {
        await hobbyBubblesControl.start({
          translateY: 180,
          translateX: -10,
          transition: {
            duration: 2,
            type: 'tween',
          },
        })
      } else {
        await hobbyBubblesControl.start(HobbyBubbleAnimation.randomPosition)

        hobbyBubblesControl.start(HobbyBubbleAnimation.moveAround)
      }

      catEarsControl.start('close')

      dispatch(Actions.TOGGLE_ANIMATING)
      dispatch(Actions.TOGGLE_STATE)
    }
  }, [
    animationState.isActive,
    animationState.isAnimating,
    catEarsControl,
    hobbyBubblesControl,
    data,
  ])

  useEffect(() => {
    if (data) {
      hobbyBubblesControl.start({
        translateY: 180,
        translateX: -10,
        transition: { duration: 0 },
      })
    }
  }, [hobbyBubblesControl, data])

  return (
    <div className="mt-80 flex min-h-[6rem] flex-col items-center">
      <AnimatePresence>
        {data && (
          <m.div
            className="relative flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {data.hobbies.map((hobby, index) => {
              return (
                <HobbyBubble
                  midOfHobbiesArray={midOfArray}
                  index={index}
                  key={hobby.id}
                  animationControl={hobbyBubblesControl}
                >
                  {hobby.image ? (
                    <Image
                      src={hobby.image?.url}
                      width={hobby.image?.width || DEFAULT_HOBBY_SIZE}
                      height={hobby.image?.width || DEFAULT_HOBBY_SIZE}
                      alt={hobby.imageAlt}
                      objectFit="cover"
                    />
                  ) : null}
                </HobbyBubble>
              )
            })}
          </m.div>
        )}
      </AnimatePresence>
      <div
        className="mt-32 flex w-56 flex-col items-center drop-shadow-md"
        onClick={handleAnimationChange}
      >
        <m.div
          variants={{
            open: {
              rotate: 90,
            },
            close: {
              rotate: 0,
            },
          }}
          animate={catEarsControl}
          transition={{ repeatType: 'mirror' }}
          className="ml-5 flex w-[82px] origin-bottom-right"
        >
          <Image src={catEars} alt="brand-cat-ears" />
        </m.div>
        <Image src={catBody} alt="brand-cat-body" />
      </div>
    </div>
  )
}

export default AboutMeSection
