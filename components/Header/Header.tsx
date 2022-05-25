import HamburgerMenu from 'components/Header/Components/HamburgerMenu'
import { getNavRoutes, HOME_ROUTE } from 'constants/routes'
import Image from 'next/image'
import Link from 'components/Link'
import brandLogo from 'public/images/logo_developer_cat.png'
import { FC } from 'react'
import { Download, GitHubIcon, LinkedinIcon, TwitterIcon } from 'components/Icons'

import LanguageSelector from './Components/LanguageSelector'
import useScreenBreakpoint from 'hooks/useScreenBreakpoint'
import useTranslation from 'next-translate/useTranslation'
import Button from 'components/Button'

const Header: FC = () => {
  const { isLarge, isExtraLarge } = useScreenBreakpoint()
  const { t } = useTranslation()

  return (
    <header className="fixed top-0 z-50 flex w-full items-center justify-between bg-brandBg bg-opacity-25 py-2 px-6 shadow-md backdrop-blur transition-all">
      <Link href={HOME_ROUTE}>
        <a className="flex w-10">
          <Image src={brandLogo} alt="brand-logo" />
        </a>
      </Link>
      <div className="flex items-center gap-8">
        {isLarge || isExtraLarge ? (
          <>
            <ul className="flex items-center gap-4">
              {getNavRoutes().map((nav) => (
                <li
                  key={nav.route}
                  className="font-normal text-white transition-opacity duration-200 hover:opacity-75"
                >
                  <Link href={nav.route}>{t(nav.name)}</Link>
                </li>
              ))}
            </ul>
            <LanguageSelector />
          </>
        ) : (
          <>
            <LanguageSelector />
            <HamburgerMenu />
          </>
        )}
      </div>
    </header>
  )
}

export default Header
