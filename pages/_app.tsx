import AppLayout from 'layouts/AppLayout'
import type { AppProps } from 'next/app'
import 'styles/reset.css'
import 'styles/global.css'
import 'tailwindcss/tailwind.css'
import Paragraph from 'components/Markdown/paragraph'
import { MDXProvider } from '@mdx-js/react'
import Image from 'components/Markdown/image'

const markdownComponents = {
  p: Paragraph,
  img: Image,
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
