import { FC } from 'react'
import { ApolloProvider } from '@apollo/client'
import client from 'services/client'

const AppLayout: FC = ({ children }) => {
  return (
    <>
      <ApolloProvider client={client}>{children}</ApolloProvider>
    </>
  )
}

export default AppLayout
