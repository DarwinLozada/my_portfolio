import { useHobbiesQuery } from 'generated'
import { FC, useCallback, useEffect, useState } from 'react'
import HobbieBubble from './components/Bubble/Bubble'
import Image from 'next/image'
import { AnimatePresence, m, useAnimation } from 'framer-motion'

import catBody from 'public/images/cat_body.png'
import catEars from 'public/images/cat_ears.png'
import { HobbieBubbleAnimation } from './constants'

const DEFAULT_HOBBIE_SIZE = 50

const AboutMeSection: FC = () => {
  const { data } = useHobbiesQuery()

  const [areEarsOpen, setAreEarsOpen] = useState(false)

  const midOfArray = Math.floor((data?.hobbies.length || 0) / 2)

  const catEarsControl = useAnimation()
  const hobbieBubblesControl = useAnimation()

  const handleEars = () => {
    setAreEarsOpen(!areEarsOpen)
  }

  const handleAnimationChange = useCallback(async () => {
    catEarsControl.start(areEarsOpen ? 'open' : 'close')

    await hobbieBubblesControl.start(
      areEarsOpen
        ? {
            translateY: 180,
            translateX: -10,
            transition: {
              duration: 2,
              type: 'tween',
            },
          }
        : HobbieBubbleAnimation.moveAround
    )

    await catEarsControl.start('close')
    await catEarsControl.start('open')
    await hobbieBubblesControl.start('initial')
    await catEarsControl.start('close')

    hobbieBubblesControl.start(HobbieBubbleAnimation.moveAround)
  }, [areEarsOpen, catEarsControl, hobbieBubblesControl])

  useEffect(() => {
    handleAnimationChange()
  }, [areEarsOpen, handleAnimationChange])

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
            {data.hobbies.map((hobbie, index) => {
              return (
                <HobbieBubble
                  midOfHobbiesArray={midOfArray}
                  index={index}
                  key={hobbie.id}
                  animationControl={hobbieBubblesControl}
                >
                  {hobbie.image ? (
                    <Image
                      src={hobbie.image?.url}
                      width={hobbie.image?.width || DEFAULT_HOBBIE_SIZE}
                      height={hobbie.image?.width || DEFAULT_HOBBIE_SIZE}
                      alt={hobbie.imageAlt}
                      objectFit="cover"
                    />
                  ) : null}
                </HobbieBubble>
              )
            })}
          </m.div>
        )}
      </AnimatePresence>
      <div
        className="mt-32 flex w-56 flex-col items-center drop-shadow-md"
        onClick={handleEars}
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
