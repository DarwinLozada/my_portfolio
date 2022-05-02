import { FC } from 'react'
import { MDXProvider } from '@mdx-js/react'
import dynamic from 'next/dynamic'
import { AnimatePresence, LazyMotion } from 'framer-motion'
import { ApolloProvider } from '@apollo/client'
import client from 'services/client'
import AboutMe from 'components/Sections/AboutMe'

const markdownComponents = {
  p: dynamic(() => import('components/Markdown/paragraph')),
  img: dynamic(() => import('components/Markdown/image')),
  AboutMe,
}

const DynamicStackedCubes = dynamic(() => import('../../components/StackedCubes'))

const animationFeatures = () =>
  import('../../animation/features').then((features) => features.default)

const AppLayout: FC = ({ children }) => {
  return (
    <LazyMotion features={animationFeatures}>
      <ApolloProvider client={client}>
        <MDXProvider components={markdownComponents}>
          <div className="relative min-h-screen overflow-hidden bg-brandBg">
            <div className="absolute -top-44 -left-8 flex w-28">
              <DynamicStackedCubes color="pinky" className="opacity-20" />
            </div>
            <div className="absolute bottom-64 top-[28rem] right-8 flex w-28">
              <DynamicStackedCubes color="pinky" className="opacity-30" />
            </div>
            <AnimatePresence
              initial={false}
              exitBeforeEnter
              onExitComplete={() => {
                window.scrollTo({ top: 0 })
              }}
            >
              {children}
            </AnimatePresence>
          </div>
        </MDXProvider>
      </ApolloProvider>
    </LazyMotion>
  )
}

export default AppLayout
