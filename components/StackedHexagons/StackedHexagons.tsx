import { FC, useRef } from 'react'
import { m as motion } from 'framer-motion'

type HexagonSizes = 'default' | 'large'

interface Props {
  color: 'pinky' | 'bluish'
  className?: string
  hexagonsClassname?: string
  hexagonSize?: HexagonSizes
}

const defaultProps: Props = {
  color: 'pinky',
  className: '',
  hexagonsClassname: '',
}

const colorsMap = {
  pinky: ['#F963C4', '#DD65CD', '#C367D6', '#B468DB', '#9E69E3'],
  bluish: ['#B468DB', '#916AE7', '#896BEA', '#776CEF', '#6E6DF3'],
}

const hexagonsSizes = {
  default: {
    size: '16rem',
    spacing: 4.9,
    translateY: 1,
  },
  large: {
    size: '19rem',
    spacing: 8,
    translateY: 1.2,
  },
}

const StackedCubes: FC<Props> = ({
  color,
  className,
  hexagonsClassname,
  hexagonSize = 'default',
} = defaultProps) => {
  const randomDelay = useRef(Math.random() * 4)
  const randomAnimationDuration = useRef(() => {
    const randomDuration = Math.random() * 8
    return randomDuration < 7 ? 7 : randomDuration
  })

  return (
    <motion.div
      className={`relative min-h-[80px] min-w-[60px] ${className}`}
      variants={{
        static: {
          transition: {
            staggerChildren: 0.3,
          },
        },
      }}
    >
      {colorsMap[color].map((color, index) => {
        const bottomMargin = hexagonsSizes[hexagonSize].spacing * index

        return (
          <motion.svg
            key={color}
            viewBox="0 0 223 96"
            fill="none"
            style={{
              transform: `translate(0, -${bottomMargin}rem)`,
              width: hexagonsSizes[hexagonSize].size,
              zIndex: index * -1,
            }}
            className={`absolute transform drop-shadow-2xl ${hexagonsClassname}`}
            initial="initial"
            animate="move"
            transition={{
              type: 'tween',
              duration: randomAnimationDuration.current(),
              delay: randomDelay.current,
              repeat: Infinity,
              repeatType: 'mirror',
            }}
            variants={{
              initial: {
                translateY: 70 * index * hexagonsSizes[hexagonSize].translateY,
              },
              move: {
                translateY: 90 * index * hexagonsSizes[hexagonSize].translateY,
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
  )
}

export default StackedCubes
