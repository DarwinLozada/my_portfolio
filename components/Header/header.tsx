import HamburguerMenu from 'components/HamburguerMenu'
import { HOME_ROUTE } from 'constants/routes'
import Image from 'next/image'
import Link from 'next/link'
import brandLogo from 'public/images/logo_developer_cat.png'
import { FC } from 'react'

const Header: FC = () => {
  return (
    <header className="flex bg-brandBg shadow-md relative z-10 items-center justify-between py-2 px-6">
      <Link href={HOME_ROUTE}>
        <a className="flex w-10 ">
          <Image src={brandLogo} alt="brand-logo" />
        </a>
      </Link>
      <div className="flex">
        <HamburguerMenu />
      </div>
    </header>
  )
}

export default Header
