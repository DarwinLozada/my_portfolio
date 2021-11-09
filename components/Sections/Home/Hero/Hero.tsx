import { FC } from 'react'
import Button from 'components/Button/Button'
import { Download } from 'components/Icons'
import StackedCubes from 'components/StackedCubes'

const HeroSection: FC = () => {
  return (
    <section className="relative overflow-hidden flex justify-center min-h-screen tracking-[0.3em]">
      <div className="flex absolute -top-44 -left-8 w-28">
        <StackedCubes color="pinky" className="opacity-20" />
      </div>
      <section>
        <h1 className="flex flex-col relative z-10 text-brandWhite font-bold text-[3.7rem] text-center mt-40 leading-tight">
          DARWIN
          <div className="flex flex-col items-center">
            <span className="text-[3.3rem] leading-tight">
              LOZADA
              <hr className="bg-gradient-to-r text-transparent from-brandPink to-brandViolet w-full h-2 rounded-xl" />
            </span>
          </div>
        </h1>
        <p className="text-brandWhite text-center text-base tracking-normal font-medium mt-4 px-10">
          I like to solve problems using technology.
        </p>
        <div className="flex flex-col gap-6 items-center justify-center mt-10">
          <Button size="medium">More about me</Button>
          <Button
            size="medium"
            colorScheme="secondary"
            rightIcon={<Download className="w-6 text-brandWhite" />}
          >
            Check my resume
          </Button>
        </div>
      </section>
    </section>
  )
}

export default HeroSection
