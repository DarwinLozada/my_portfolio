import Hero from 'components/Sections/Home/Hero'
import Projects from 'components/Sections/Home/Projects'
import MainLayout from 'layouts/MainLayout/MainLayout'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <MainLayout>
      <Hero />
      <Projects />
    </MainLayout>
  )
}

export default Home
