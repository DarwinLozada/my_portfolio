import AppLayout from 'layouts/AppLayout'
import type { AppProps } from 'next/app'
import 'styles/reset.css'
import 'styles/global.css'
import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <AppLayout>
      <Component {...pageProps} key={router.route} />
    </AppLayout>
  )
}

export default MyApp
