import Paragraph from 'components/Markdown/paragraph'
import MainLayout from 'layouts/MainLayout'
import { NextPage } from 'next'

const AboutPage: NextPage = () => {
  return (
    <MainLayout>
      <h1 className="mt-32 mb-16 text-center font-montserrat text-4xl font-semibold text-white">
        About Me
      </h1>
      <section className="flex max-w-[90%] flex-col gap-1">
        <Paragraph>
          I am a tecnology enthusiat that likes creating delightful digital web
          experiences.
        </Paragraph>
        <Paragraph>
          In my free time I like going to Discord and have a nice moment with my
          friends, play Rocket League, Terraria or any other game that can make us
          laugh. Or if I think I have been to much time sit on my chair, I pick up my
          earbuds, play Los Mesoneros, focus and start jumping rope.
        </Paragraph>
      </section>
    </MainLayout>
  )
}

export default AboutPage
