import { FC } from 'react'
import Image from 'next/image'
import DogCatcherLogo from 'public/images/DogCatcher.png'
import DogCatcherDevices from 'public/images/dogcatcher-devices.png'
import OurUniverseLogo from 'public/images/ouruniverse_logo.png'
import OurUniverseDevices from 'public/images/ouruniverse-devices.png'
import Tag from 'components/Tag'
import { Planet, Clip } from 'components/Icons'
import Button from 'components/Button'
import { DOGCATCHER_LINK, OURUNIVERSE_LINK } from 'constants/links'

const Projects: FC = () => {
  return (
    <section className="relative mt-32 flex flex-col items-center bg-transparent">
      <h2 className="text-4xl font-bold tracking-widest text-white">MY PROJECTS</h2>
      <div
        className="mt-56 bg-[#E5D8D8] pt-36 pb-64"
        style={{ clipPath: 'polygon(0 0, 100% 6%, 100% 93%, 0% 100%)' }}
      >
        <div className="flex flex-col items-center">
          <div className="w-64">
            <Image src={DogCatcherLogo} alt="dogcatcher-project-logo" />
          </div>
          <Image src={DogCatcherDevices} alt="dogcatcher-devices-example" />
          <Tag leftIcon={<Planet className="w-6" />}>WEB APP</Tag>
        </div>
        <div className="mx-8 flex flex-col">
          <h3 className="mt-16 text-center text-4xl font-semibold text-dogcatcherRed">
            All your favorite pets in one place
          </h3>
          <p className="mt-12 text-center text-lg font-medium leading-8 text-brandBg">
            In DogCatcher you can find the most beautiful and friendly pets, search
            for them by breed and, also, if you liked that fluffy white-haired cat
            that you saw, you can save it in your favorites and consult them whenever
            you want and on the device you want.
          </p>
          <div className="mt-12 flex flex-col items-center gap-6">
            <Button size="medium" colorScheme="dogcatcher">
              More info
            </Button>
            <Button
              anchor
              href={DOGCATCHER_LINK}
              openTab
              colorScheme="dark"
              rightIcon={<Clip className="w-5 text-brandWhite" />}
            >
              Live site!
            </Button>
          </div>
        </div>
      </div>
      <div
        className="flex flex-col items-center justify-center gap-8 bg-[#9C85BE] pb-72 pt-44"
        style={{ clipPath: 'polygon(0 7%, 100% 0, 100% 100%, 0 93%)' }}
      >
        <div className="w-64">
          <Image src={OurUniverseLogo} alt="ouruniverse-logo" />
        </div>
        <Image src={OurUniverseDevices} alt="ouruniverse-devices" />
        <Tag leftIcon={<Planet className="w-6" />}>WEB APP</Tag>
        <div className="mx-8 flex flex-col">
          <h3 className="mt-8 text-center text-4xl font-semibold text-brandWhite">
            Explore our beautiful universe
          </h3>
          <p className="mt-12 text-center text-lg font-medium leading-8 text-ouruniversePurple">
            OurUniverse uses the APOD (Astronomy Picture of the day) API of the NASA
            to deliver the most interesting and beautiful images published and
            commented by professional astronomers.
          </p>
        </div>
        <div className="mt-12 flex flex-col items-center gap-6">
          <Button size="medium" colorScheme="ouruniverse">
            More info
          </Button>
          <Button
            anchor
            href={OURUNIVERSE_LINK}
            openTab
            colorScheme="dark"
            rightIcon={<Clip className="w-5" />}
          >
            Live site!
          </Button>
        </div>
      </div>

      <div className="my-24 flex items-center justify-center px-14">
        <Button size="large">Wanna see more of what I’ve done?</Button>
      </div>
    </section>
  )
}

export default Projects
