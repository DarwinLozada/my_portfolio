import Header from 'components/Header'
import dynamic from 'next/dynamic'
import { FC } from 'react'

interface Props {
  bluredBackground?: boolean
}

const DynamicStackedCubes = dynamic(() => import('../../components/StackedCubes'))

const MainLayout: FC<Props> = ({ children, bluredBackground }) => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-brandBg">
      <Header />
      <div className="absolute -top-44 -left-8 flex w-28">
        <DynamicStackedCubes color="pinky" className="opacity-20" />
      </div>
      <div className="absolute bottom-64 top-[28rem] right-8 flex w-28">
        <DynamicStackedCubes color="pinky" className="opacity-30" />
      </div>
      <main
        className={`relative z-10 min-h-full overflow-hidden ${
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
