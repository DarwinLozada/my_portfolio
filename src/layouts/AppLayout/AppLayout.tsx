import { FC, ReactNode } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Provider as GraphQLClientProvider } from 'urql'
import client from 'services/client'
import Header from 'components/Header'
import Footer from 'components/Footer'

interface Props {
  children?: ReactNode
}

const AppLayout: FC<Props> = ({ children }) => {
  return (
    <GraphQLClientProvider value={client}>
      <div className="relative overflow-hidden bg-brandBg">
        <Header />
        <AnimatePresence
          initial={false}
          mode="wait"
          onExitComplete={() => {
            window.scrollTo({ top: 0 })
          }}
        >
          {children}
        </AnimatePresence>
        <Footer />
      </div>
    </GraphQLClientProvider>
  )
}

export default AppLayout
