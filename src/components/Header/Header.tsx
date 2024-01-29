/* eslint-disable prettier/prettier */
import HamburgerMenu from 'components/Header/Components/HamburgerMenu'
import { getNavRoutes, HOME_ROUTE } from 'constants/routes'
import Image from 'next/image'
import Link from 'components/Link'
import brandLogo from '../../../public/images/logo_developer_cat.png'
import { FC } from 'react'
import LanguageSelector from './Components/LanguageSelector'
import useTranslation from 'next-translate/useTranslation'

const Header: FC = () => {
  const { t } = useTranslation()

  return (
    <header className="fixed max-w-full top-0 z-50 flex w-full items-center justify-between bg-brandBg bg-opacity-25 py-2 px-6 shadow-md backdrop-blur transition-all">
      <Link href={HOME_ROUTE} className="flex w-10">
          <Image src={brandLogo} alt="brand-logo" />
      </Link>
      <div>
        <div className="hidden relative items-center gap-8 md:flex">
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
        </div>

        <div className="flex relative items-center gap-8 md:hidden">
          <LanguageSelector />
          <HamburgerMenu />
        </div>
      </div>
    </header>
  )
}

export default Header
