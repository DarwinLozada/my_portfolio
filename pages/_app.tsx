import AppLayout from 'layouts/AppLayout'
import type { AppProps } from 'next/app'
import 'styles/reset.css'
import 'styles/global.css'
import 'tailwindcss/tailwind.css'
import { MDXProvider } from '@mdx-js/react'
import dynamic from 'next/dynamic'

const markdownComponents = {
  p: dynamic(() => import('components/Markdown/paragraph')),
  img: dynamic(() => import('components/Markdown/image')),
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppLayout>
      <MDXProvider components={markdownComponents}>
        <Component {...pageProps} />
      </MDXProvider>
    </AppLayout>
  )
}

export default MyApp
