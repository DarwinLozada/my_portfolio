import { FC, useRef } from 'react'
import { m as motion } from 'framer-motion'
import useWindowWidth from 'hooks/useWindowWidth/useWindowWidth'

type HexagonSizes = 'default' | 'large' | 'xl'

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

const StackedCubes: FC<Props> = ({
  color,
  className,
  hexagonsClassname,
  hexagonSize = 'default',
} = defaultProps) => {
  const windowWidth = useWindowWidth()

  const hexagonsSizes = {
    default: {
      size: '16rem',
      translateY: 80,
      separation: 1,
    },
    large: {
      size: '24rem',
      translateY: 170,
      separation: 1.5,
    },

    xl: {
      size: '30vw',
      translateY: windowWidth * 0.1,
      separation: windowWidth <= 1200 ? 1.4 : 1.8,
    },
  }

  const randomDelay = useRef(Math.random() * 2.5)

  return (
    <motion.div className={`relative ${className}`}>
      {colorsMap[color].map((color, index) => {
        const hexagonYTranslate = hexagonsSizes[hexagonSize].translateY
        const initialY = 70 * index * hexagonsSizes[hexagonSize].separation

        return (
          <motion.svg
            key={color}
            viewBox="0 0 223 96"
            fill="none"
            style={{
              width: hexagonsSizes[hexagonSize].size,
              zIndex: index * -1,
            }}
            className={`absolute transform drop-shadow-2xl transition-opacity duration-200 ${hexagonsClassname}`}
            initial="initial"
            animate="move"
            transition={{
              type: 'tween',
              duration: 10,
              delay: index * 0.4 + randomDelay.current,
              repeat: Infinity,
              repeatType: 'mirror',
            }}
            variants={{
              initial: {
                translateY: initialY,
              },
              move: {
                translateY: hexagonYTranslate + initialY,
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
