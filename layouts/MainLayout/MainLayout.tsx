import Header from 'components/Header'
import StackedCubes from 'components/StackedCubes'
import { FC } from 'react'

interface Props {
  bluredBackground?: boolean
}

const MainLayout: FC<Props> = ({ children, bluredBackground }) => {
  return (
    <div className="relative overflow-hidden bg-brandBg min-h-screen">
      <Header />
      <div className="flex absolute -top-44 -left-8 w-28">
        <StackedCubes color="pinky" className="opacity-20" />
      </div>
      <div className="flex absolute bottom-64 top-[28rem] right-8 w-28">
        <StackedCubes color="pinky" className="opacity-30" />
      </div>
      <main
        className={`relative overflow-hidden z-10 min-h-full ${
          bluredBackground && 'backdrop-blur-sm'
        }`}
      >
        {children}
      </main>
      <footer></footer>
    </div>
  )
}

export default MainLayout
