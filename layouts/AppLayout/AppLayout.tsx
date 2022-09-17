import { FC, ReactNode } from 'react'
import { MDXProvider } from '@mdx-js/react'

import dynamic from 'next/dynamic'
import { AnimatePresence, LazyMotion } from 'framer-motion'
import { Provider as GraphQLClientProvider } from 'urql'
import client from 'services/client'

const markdownComponents = {
  p: dynamic(() => import('components/Markdown/paragraph')),
  img: dynamic(() => import('components/Markdown/image')),
  AboutMe: dynamic(() => import('components/Sections/AboutMe')),
}

const animationFeatures = () =>
  import('../../animation/features').then((features) => features.default)

interface Props {
  children?: ReactNode
}

const AppLayout: FC<Props> = ({ children }) => {
  return (
    <LazyMotion features={animationFeatures} strict>
      <GraphQLClientProvider value={client}>
        <MDXProvider components={markdownComponents}>
          <div className="relative overflow-hidden bg-brandBg">
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
      </GraphQLClientProvider>
    </LazyMotion>
  )
}

export default AppLayout
