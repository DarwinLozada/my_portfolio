import HamburgerMenu from 'components/Header/Components/HamburgerMenu'
import { HOME_ROUTE } from 'constants/routes'
import Image from 'next/image'
import Link from 'components/Link'
import brandLogo from 'public/images/logo_developer_cat.png'
import { FC } from 'react'
import LanguageSelector from './Components/LanguageSelector'

const Header: FC = () => {
  return (
    <header className="fixed top-0 z-50 flex w-full items-center justify-between bg-brandBg bg-opacity-25 py-2 px-6 shadow-md backdrop-blur transition-all">
      <Link href={HOME_ROUTE}>
        <a className="flex w-10">
          <Image src={brandLogo} alt="brand-logo" />
        </a>
      </Link>
      <div className="flex items-center gap-8">
        <LanguageSelector />
        <HamburgerMenu />
      </div>
    </header>
  )
}

export default Header
