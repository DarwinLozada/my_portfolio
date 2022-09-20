import Header from 'components/Header'
import { FC, ReactNode } from 'react'
import { m } from 'framer-motion'
import Footer from 'components/Footer'
import Head from 'next/head'
import { pageTitleBase } from 'constants/seo'

interface Props {
  blurredBackground?: boolean
  children?: ReactNode
  title?: string
}

const MainLayout: FC<Props> = ({ children, blurredBackground, title }) => {
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
      <Head>
        <title>{title || `${pageTitleBase} Problem Solving with Tech`}</title>
      </Head>
      <Header />
      <div className="brand-bg-gradient absolute top-0 w-screen" />

      <main
        className={`relative z-10 flex min-h-screen flex-grow flex-col items-center justify-center overflow-hidden ${
          blurredBackground ? 'backdrop-blur-sm' : ''
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
