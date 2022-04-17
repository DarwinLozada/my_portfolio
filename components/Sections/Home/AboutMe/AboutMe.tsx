import { useHobbiesQuery } from 'generated'
import { FC } from 'react'
import HobbieBubble from './components/Bubble/Bubble'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'

const DEFAULT_HOBBIE_SIZE = 50

const AboutMeSection: FC = () => {
  const { data } = useHobbiesQuery()

  const si = Math.floor((data?.hobbies.length || 0) / 2)

  return (
    <div className="mt-80 flex min-h-[6rem]">
      <AnimatePresence>
        {data && (
          <motion.div
            className="flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {data.hobbies.map((hobbie, index) => {
              const goesUp = index <= si

              const initialYPosition =
                -(goesUp ? index : si * 2 - index) * ((Math.random() + 1.2) * 20)

              const randomBoolean = Math.random() < 0.5

              const randomYMovement =
                initialYPosition +
                (Math.random() + 0.4) * 18 * (randomBoolean ? 1 : -1)

              const randomXMovement = (Math.random() + 0.5) * 13 * (goesUp ? 1 : -1)

              return (
                <motion.div
                  key={hobbie.id}
                  initial={{ translateY: initialYPosition }}
                  animate={{
                    translateY: [
                      initialYPosition,
                      randomYMovement,
                      initialYPosition,
                    ],
                    translateX: randomXMovement,
                  }}
                  transition={{
                    type: 'spring',
                    repeat: Infinity,
                    duration: (Math.random() + 0.5) * 15,
                    delayChildren: Math.random() * 0.6,
                    repeatType: 'mirror',
                  }}
                >
                  <HobbieBubble>
                    {hobbie.image ? (
                      <Image
                        src={hobbie.image?.url}
                        width={hobbie.image?.width || DEFAULT_HOBBIE_SIZE}
                        height={hobbie.image?.width || DEFAULT_HOBBIE_SIZE}
                        alt={hobbie.imageAlt}
                      />
                    ) : null}
                  </HobbieBubble>
                </motion.div>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default AboutMeSection
