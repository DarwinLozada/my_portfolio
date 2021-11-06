import MainLayout from 'layouts/MainLayout/MainLayout'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <MainLayout>
      <section className="bg-brandBg flex justify-center min-h-screen tracking-[0.3em]">
        <h1 className="text-brandWhite font-bold text-[3.5rem] text-center">
          DARWIN <br /> <span className="text-[3.3rem]">LOZADA</span>
        </h1>
      </section>
    </MainLayout>
  )
}

export default Home
