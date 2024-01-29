import { FC } from 'react'
import Link from 'components/Link'
import { ABOUT_ROUTE, HOME_ROUTE, PROJECTS_ROUTE } from 'constants/routes'
import Button from 'components/Button'
import { GitHubIcon, LinkedinIcon, TwitterIcon } from 'components/Icons'
import useTranslation from 'next-translate/useTranslation'

const Footer: FC = () => {
  const { t } = useTranslation()

  return (
    <footer className="z-10 relative flex flex-col items-center justify-between gap-1 justify-self-end bg-transparent px-4 pb-6 pt-8">
      <p className="text-semibold font-montserrat text-xl font-semibold text-white">
        Darwin Lozada
      </p>
      <nav>
        <ul className="mt-1 flex gap-3 text-center text-sm text-stone-300/80">
          <li>
            <Link href={HOME_ROUTE}>{t('common:footer.links.home')}</Link>
          </li>
          <li>
            <a
              download
              href={t('home:hero.resume-url')}
              target="_blank"
              rel="noreferrer"
            >
              {t('common:footer.links.resume')}
            </a>
          </li>
          <li>
            <Link href={PROJECTS_ROUTE}>{t('common:footer.links.projects')}</Link>
          </li>
          <li>
            <Link href={ABOUT_ROUTE}>{t('common:footer.links.about-me')}</Link>
          </li>
        </ul>
        <div className="mt-4 flex w-full justify-center gap-4">
          <Button
            type="anchor"
            openTab
            size="small"
            className="px-2"
            href="https://github.com/DarwinLozada"
          >
            <GitHubIcon className="w-5 fill-white stroke-white stroke-0 text-brandWhite" />
          </Button>
          <Button
            type="anchor"
            openTab
            className="px-2"
            size="small"
            href="https://twitter.com/_DarwinLozada_"
          >
            <TwitterIcon className="w-5 fill-white stroke-white stroke-0 text-brandWhite" />
          </Button>
          <Button
            type="anchor"
            openTab
            size="small"
            className="px-2"
            href="https://www.linkedin.com/in/darwin-lozada-41443b194/"
          >
            <LinkedinIcon className="w-5 fill-white stroke-white stroke-0 text-brandWhite" />
          </Button>
        </div>
      </nav>
    </footer>
  )
}

export default Footer
