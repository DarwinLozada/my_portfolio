import Header from 'components/Header'
import { FC } from 'react'

const MainLayout: FC = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <footer></footer>
    </div>
  )
}

export default MainLayout
