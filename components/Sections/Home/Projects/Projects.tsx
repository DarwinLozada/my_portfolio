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
    <section className="relative flex flex-col bg-transparent items-center mt-32">
      <h2 className="text-white font-bold text-4xl tracking-widest">MY PROJECTS</h2>
      <div
        className="bg-[#E5D8D8] pt-36 pb-64 mt-56"
        style={{ clipPath: 'polygon(0 0, 100% 6%, 100% 93%, 0% 100%)' }}
      >
        <div className="flex flex-col items-center">
          <div className="w-64">
            <Image src={DogCatcherLogo} alt="dogcatcher-project-logo" />
          </div>
          <Image src={DogCatcherDevices} alt="dogcatcher-devices-example" />
          <Tag leftIcon={<Planet className="w-6" />}>WEB APP</Tag>
        </div>
        <div className="flex flex-col mx-8">
          <h3 className="font-semibold text-center text-4xl mt-16 text-dogcatcherRed">
            All your favorite pets in one place
          </h3>
          <p className="text-center text-lg leading-8 text-brandBg font-medium mt-12">
            In DogCatcher you can find the most beautiful and friendly pets, search
            for them by breed and, also, if you liked that fluffy white-haired cat
            that you saw, you can save it in your favorites and consult them whenever
            you want and on the device you want.
          </p>
          <div className="flex flex-col items-center mt-12 gap-6">
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
        <div className="flex flex-col mx-8">
          <h3 className="font-semibold text-center text-4xl mt-8 text-brandWhite">
            Explore our beautiful universe
          </h3>
          <p className="text-center text-lg leading-8 text-ouruniversePurple font-medium mt-12">
            OurUniverse uses the APOD (Astronomy Picture of the day) API of the NASA
            to deliver the most interesting and beautiful images published and
            commented by professional astronomers.
          </p>
        </div>
        <div className="flex flex-col items-center mt-12 gap-6">
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

      <div className="flex items-center justify-center px-14 my-24">
        <Button size="large">Wanna see more of what I’ve done?</Button>
      </div>
    </section>
  )
}

export default Projects
