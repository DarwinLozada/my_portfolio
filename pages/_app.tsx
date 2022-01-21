import AppLayout from 'layouts/AppLayout'
import type { AppProps } from 'next/app'
import 'styles/reset.css'
import 'styles/global.css'
import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  )
}

export default MyApp
