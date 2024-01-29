import { useHobbiesQuery } from 'generated'
import { JSX, useCallback, useEffect, useReducer } from 'react'
import HobbyBubble from './components/Bubble/Bubble'
import Image from 'next/image'
import { AnimatePresence, LazyMotion, m, useAnimation } from 'framer-motion'

import catBody from '../../../../public/images/cat_body.png'
import catEars from '../../../../public/images/cat_ears.png'
import { HobbyBubbleAnimation } from './constants'
import { Actions, initialState, TwoStateAnimationReducer } from 'animation/state'

const DEFAULT_HOBBY_SIZE = 50

const animationFeatures = () =>
  import('animation/features').then((features) => features.default)

const AboutMeSection = (): JSX.Element => {
  const catEarsControl = useAnimation()
  const hobbyBubblesControl = useAnimation()

  const [result] = useHobbiesQuery()
  const { data } = result

  useEffect(() => {
    if (result.data) {
      if (hobbyBubblesControl) {
        hobbyBubblesControl.start({
          translateY: 180,
          translateX: -10,
          transition: { duration: 0 },
        })
      }
    }
  }, [result, hobbyBubblesControl])

  const [animationState, dispatch] = useReducer(
    TwoStateAnimationReducer,
    initialState,
  )

  const midOfArray = Math.floor((data?.hobbies.length || 0) / 2)

  const handleAnimationChange = useCallback(async () => {
    if (!animationState.isAnimating && data) {
      catEarsControl.start('open')

      dispatch(Actions.TOGGLE_ANIMATING)

      if (animationState.isActive) {
        await hobbyBubblesControl.start(HobbyBubbleAnimation.hide)
      } else {
        await hobbyBubblesControl.start(HobbyBubbleAnimation.goOutside)

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

  return (
    <div className="mt-72 flex min-h-[6rem] flex-col items-center">
      <LazyMotion features={animationFeatures} strict>
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
                    ) : undefined}
                  </HobbyBubble>
                )
              })}
            </m.div>
          )}
        </AnimatePresence>
      </LazyMotion>
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
        <Image src={catBody} alt="brand-cat-body" priority />
      </div>
    </div>
  )
}

export default AboutMeSection
