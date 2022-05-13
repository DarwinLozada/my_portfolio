import { FC } from 'react'
import Button from 'components/Button/Button'
import { Download, GitHubIcon, LinkedinIcon, TwitterIcon } from 'components/Icons'
import { ABOUT_ROUTE } from 'constants/routes'
import useTranslation from 'next-translate/useTranslation'
import { RESUME_LINK } from 'constants/links'

const HeroSection: FC = () => {
  const { t } = useTranslation()

  const textAboutMe = t('home:hero.CTAs.about-me')

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
          {t('home:hero.subtitle')}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-6">
          <Button size="medium" type="anchor" href={ABOUT_ROUTE}>
            {textAboutMe}
          </Button>
          <Button
            type="download"
            href={RESUME_LINK}
            size="medium"
            colorScheme="secondary"
            rightIcon={<Download className="w-6 stroke-2 text-brandWhite" />}
          >
            {t('home:hero.CTAs.resume')}
          </Button>
        </div>
        <nav className="mt-8 flex w-full justify-center gap-4">
          <Button
            type="anchor"
            openTab
            size="small"
            className="px-2"
            href="https://github.com/DarwinLozada"
          >
            <GitHubIcon className="w-6 fill-white stroke-white stroke-0 text-brandWhite" />
          </Button>
          <Button
            type="anchor"
            openTab
            className="px-2"
            size="small"
            href="https://twitter.com/_DarwinLozada_"
          >
            <TwitterIcon className="w-6 fill-white stroke-white stroke-0 text-brandWhite" />
          </Button>
          <Button
            type="anchor"
            openTab
            size="small"
            className="px-2"
            href="https://www.linkedin.com/in/darwin-lozada-41443b194/"
          >
            <LinkedinIcon className="w-6 fill-white stroke-white stroke-0 text-brandWhite" />
          </Button>
        </nav>
      </section>
    </section>
  )
}

export default HeroSection
