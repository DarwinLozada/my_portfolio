import { FC } from 'react'
import Button from 'components/Button/Button'
import { Download } from 'components/Icons'

const HeroSection: FC = () => {
  return (
    <section className="relative flex min-h-screen justify-center overflow-hidden tracking-[0.3em]">
      <section>
        <h1 className="relative z-10 mt-40 flex flex-col text-center text-[3.7rem] font-bold leading-tight text-brandWhite">
          DARWIN
          <div className="flex flex-col items-center">
            <span className="text-[3.3rem] leading-tight">
              LOZADA
              <hr className="h-2 w-full rounded-xl border-0 bg-gradient-to-r from-brandPink to-brandViolet text-transparent" />
            </span>
          </div>
        </h1>
        <p className="mt-4 px-10 text-center text-base font-medium tracking-normal text-brandWhite">
          I like to solve problems using technology.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-6">
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
