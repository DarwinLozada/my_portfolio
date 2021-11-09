import { FC } from 'react'
import Image from 'next/image'
import DogCatcherImage from 'public/images/DogCatcher.png'
import DogCatcherDevices from 'public/images/dogcatcher-devices.png'
import Tag from 'components/Tag/Tag'
import { Planet, Clip } from 'components/Icons'
import Button from 'components/Button'
import { DOGCATCHER_LINK } from 'constants/links'

const Projects: FC = () => {
  return (
    <section className="relative flex flex-col bg-transparent items-center mt-44">
      <h2 className="text-white font-bold text-4xl tracking-widest">MY PROJECTS</h2>
      <div
        className="bg-[#E5D8D8] pt-36 pb-56 my-56"
        style={{ clipPath: 'polygon(0 0, 100% 6%, 100% 93%, 0% 100%);' }}
      >
        <div className="flex flex-col items-center">
          <div className="w-64">
            <Image src={DogCatcherImage} alt="dogcatcher-project-logo" />
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
    </section>
  )
}

export default Projects
