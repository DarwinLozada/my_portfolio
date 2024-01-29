import { FC } from 'react'
import Image from 'next/image'
import DogCatcherLogo from '../../../../../public/images/dogcatcher_logo.webp'
import DogCatcherDevices from '../../../../../public/images/dogcatcher-devices.webp'
import OurUniverseLogo from '../../../../../public/images/ouruniverse_logo.png'
import OurUniverseDevices from '../../../../../public/images/ouruniverse_devices.webp'
import Tag from 'components/Tag'
import { Planet, Clip } from 'components/Icons'
import Button from 'components/Button'
import { DOGCATCHER_LINK, OURUNIVERSE_LINK } from 'constants/links'
import { PROJECTS_ROUTE } from 'constants/routes'
import useTranslation from 'next-translate/useTranslation'

const Projects: FC = () => {
  const { t } = useTranslation()

  return (
    <section className="relative mt-56 flex flex-col items-center bg-transparent md:mt-48 lg:mt-80">
      <h2 className="text-center text-4xl font-bold tracking-widest text-white">
        {t('home:projects.title')}
      </h2>
      <div
        className="mt-32 w-full bg-[#E5D8D8] pt-36 pb-64 lg:mt-52"
        style={{ clipPath: 'polygon(0 0, 100% 6%, 100% 93%, 0% 100%)' }}
      >
        <div className="flex flex-col items-center md:flex-row">
          <div className="flex w-1/2 flex-col items-center justify-center md:ml-32 md:items-start">
            <div className="w-64">
              <Image src={DogCatcherLogo} alt="dogcatcher-project-logo" />
            </div>
            <div className="p-6 drop-shadow-lg md:w-[40vw]">
              <Image src={DogCatcherDevices} alt="dogcatcher-devices-example" />
            </div>
          </div>
          <div className="mx-8 flex max-w-sm flex-col items-center md:mr-32 md:items-start">
            <Tag leftIcon={<Planet className="w-6" />}>WEB APP</Tag>
            <h3 className="mt-16 text-center text-4xl font-semibold text-dogcatcherRed md:text-left">
              {t('home:projects.my-projects.dogcatcher.title')}
            </h3>
            <p className="mt-12 text-center text-lg font-medium leading-8 text-brandBg md:text-left">
              {t('home:projects.my-projects.dogcatcher.description')}
            </p>
            <div className="mt-12 flex flex-col items-center gap-6 md:flex-row md:items-start">
              <Button
                size="medium"
                colorScheme="dogcatcher"
                type="anchor"
                href="/projects/dogcatcher"
              >
                {t('home:projects.shared.CTAs.more-info')}
              </Button>
              <Button
                type="anchor"
                href={DOGCATCHER_LINK}
                openTab
                colorScheme="dark"
                rightIcon={<Clip className="w-5 text-brandWhite" />}
              >
                {t('home:projects.shared.CTAs.live-site')}
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex w-screen flex-col items-center justify-center gap-8 bg-[#9C85BE] pb-72 pt-44 md:flex-row-reverse"
        style={{ clipPath: 'polygon(0 7%, 100% 0, 100% 100%, 0 93%)' }}
      >
        <div className="flex w-1/2 flex-col items-center justify-center md:mr-32 md:items-end">
          <div className="w-64">
            <Image src={OurUniverseLogo} alt="ouruniverse-logo" />
          </div>
          <div className="p-6 drop-shadow-lg md:w-[40vw]">
            <Image src={OurUniverseDevices} alt="ouruniverse-devices" />
          </div>
        </div>
        <div className="mx-8 flex max-w-sm flex-col items-center md:ml-32 md:items-start">
          <Tag leftIcon={<Planet className="w-6" />}>WEB APP</Tag>
          <div className="mx-8 flex flex-col md:m-0">
            <h3 className="mt-8 text-center text-4xl font-semibold text-brandWhite md:text-left">
              {t('home:projects.my-projects.our-universe.title')}
            </h3>
            <p className="mt-12 text-center text-lg font-medium leading-8 text-ouruniversePurple md:text-left">
              {t('home:projects.my-projects.our-universe.description')}
            </p>
          </div>
          <div className="mt-12 flex flex-col items-center gap-6 md:flex-row">
            <Button
              size="medium"
              colorScheme="ouruniverse"
              type="anchor"
              href="/projects/our-universe"
            >
              {t('home:projects.shared.CTAs.more-info')}
            </Button>
            <Button
              type="anchor"
              href={OURUNIVERSE_LINK}
              openTab
              colorScheme="dark"
              rightIcon={<Clip className="w-5" />}
            >
              {t('home:projects.shared.CTAs.live-site')}
            </Button>
          </div>
        </div>
      </div>

      <div className="my-24 flex items-center justify-center px-14">
        <Button size="large" href={PROJECTS_ROUTE} type="anchor">
          {t('home:projects.see-more')}
        </Button>
      </div>
    </section>
  )
}

export default Projects
