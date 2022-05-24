import Header from 'components/Header'
import { FC } from 'react'
import { m } from 'framer-motion'
import Footer from 'components/Footer'

interface Props {
  blurredBackground?: boolean
}

const MainLayout: FC<Props> = ({ children, blurredBackground }) => {
  return (
    <m.div
      className="flex flex-col justify-between"
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
        className={`relative z-10 flex flex-grow flex-col items-center justify-center overflow-hidden ${
          blurredBackground && 'backdrop-blur-sm'
        }
        `}
      >
        {children}
      </main>
      <Footer />
    </m.div>
  )
}

export default MainLayout
