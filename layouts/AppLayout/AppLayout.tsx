import { FC } from 'react'
import { MDXProvider } from '@mdx-js/react'
import dynamic from 'next/dynamic'

const markdownComponents = {
  p: dynamic(() => import('components/Markdown/paragraph')),
  img: dynamic(() => import('components/Markdown/image')),
}

const AppLayout: FC = ({ children }) => {
  return (
    <>
      <MDXProvider components={markdownComponents}> {children}</MDXProvider>
    </>
  )
}

export default AppLayout
