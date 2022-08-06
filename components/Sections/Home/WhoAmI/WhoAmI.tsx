import AboutMe from 'components/Sections/AboutMe'
import { FC } from 'react'

const WhoAmI: FC = () => {
  return (
    <section className="flex w-full flex-col items-center justify-center px-24">
      <h2 className="mb-4 text-center text-4xl font-bold tracking-widest text-white">
        WHO AM I
      </h2>

      <div className="flex items-center gap-24">
        <p className="max-w-[15rem] text-left text-2xl leading-9 text-white">
          I am a tecnology enthusiast that likes to create delightful digital web
          experiences.
        </p>
        <AboutMe />
      </div>
    </section>
  )
}

export default WhoAmI
