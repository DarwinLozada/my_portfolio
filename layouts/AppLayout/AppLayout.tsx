import { FC } from 'react'
import { MDXProvider } from '@mdx-js/react'
import dynamic from 'next/dynamic'
import { LazyMotion } from 'framer-motion'

const markdownComponents = {
  p: dynamic(() => import('components/Markdown/paragraph')),
  img: dynamic(() => import('components/Markdown/image')),
}

const animationFeatures = () =>
  import('../../animation/features').then((features) => features.default)

const AppLayout: FC = ({ children }) => {
  return (
    <LazyMotion features={animationFeatures}>
      <MDXProvider components={markdownComponents}> {children}</MDXProvider>
    </LazyMotion>
  )
}

export default AppLayout
