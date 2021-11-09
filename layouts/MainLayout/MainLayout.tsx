import Header from 'components/Header'
import StackedCubes from 'components/StackedCubes'
import { FC } from 'react'

const MainLayout: FC = ({ children }) => {
  return (
    <div className="relative overflow-hidden bg-brandBg">
      <Header />
      <main className="relative overflow-hidden z-10">{children}</main>
      <div className="flex absolute bottom-64 top-[28rem] right-8 w-28">
        <StackedCubes color="pinky" className="opacity-20" />
      </div>
      <footer></footer>
    </div>
  )
}

export default MainLayout
