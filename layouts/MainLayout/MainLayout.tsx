import Header from 'components/Header'
import { FC } from 'react'
import { m } from 'framer-motion'

interface Props {
  bluredBackground?: boolean
}

const MainLayout: FC<Props> = ({ children, bluredBackground }) => {
  return (
    <m.div
      transition={{
        duration: 2,
      }}
      initial="initial"
      animate="appear"
      exit="exit"
      variants={{
        initial: {
          opacity: 0,
        },

        appear: {
          opacity: 1,
          transition: { duration: 0.5 },
        },

        exit: {
          opacity: 0,
          transition: { duration: 0.5 },
        },
      }}
    >
      <Header />
      <main
        className={`relative z-10 min-h-full overflow-hidden ${
          bluredBackground && 'backdrop-blur-sm'
        }`}
      >
        {children}
      </main>
      <footer></footer>
    </m.div>
  )
}

export default MainLayout
