import { FC } from 'react'
import { m as motion, LazyMotion, domAnimation } from 'framer-motion'

interface Props {
  color: 'pinky' | 'bluish'
  className?: string
  animate?: boolean
}

const defaultProps: Props = { color: 'pinky', className: '', animate: true }

const colorsMap = {
  pinky: ['#F963C4', '#DD65CD', '#C367D6', '#B468DB', '#9E69E3'],
  bluish: ['#B468DB', '#916AE7', '#896BEA', '#776CEF', '#6E6DF3'],
}

const StackedCubes: FC<Props> = ({ color, className, animate } = defaultProps) => {
  return (
    <LazyMotion features={domAnimation}>
      <motion.div
        className={`relative min-w-[60px] min-h-[80px] ${className}`}
        variants={{
          static: {
            transition: {
              staggerChildren: 0.3,
            },
          },
        }}
      >
        {colorsMap[color].map((color, index) => {
          const bottomMargin = 4.9 * index

          return (
            <motion.svg
              key={color}
              viewBox="0 0 223 96"
              fill="none"
              style={{
                transform: `translate(0, -${bottomMargin}rem)`,
                zIndex: index * -1,
              }}
              className="w-64 drop-shadow-2xl absolute transform"
              initial="initial"
              animate="move"
              transition={{
                type: 'tween',
                duration: 7,
                repeat: Infinity,
                repeatType: 'mirror',
              }}
              variants={{
                initial: {
                  translateY: 70 * index,
                },
                move: {
                  translateY: 90 * index,
                },
              }}
            >
              <path
                d="M111.5 0L222.784 24V72L111.5 96L0.215736 72V24L111.5 0Z"
                fill={color}
              />
            </motion.svg>
          )
        })}
      </motion.div>
    </LazyMotion>
  )
}

export default StackedCubes
