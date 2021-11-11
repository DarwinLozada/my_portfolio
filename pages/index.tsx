import Hero from 'components/Sections/Home/Hero'
import Projects from 'components/Sections/Home/Projects'
import Values from 'components/Sections/Home/Values'
import MainLayout from 'layouts/MainLayout/MainLayout'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <MainLayout>
      <Hero />
      <Projects />
      <Values />
    </MainLayout>
  )
}

export default Home
