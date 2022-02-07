import MainLayout from 'layouts/MainLayout'
import { NextPage } from 'next'
import { m } from 'framer-motion'
import Image from 'next/image'

const NotFoundPage: NextPage = () => {
  return (
    <MainLayout>
      <div className="mx-12 flex flex-grow flex-col items-center justify-center">
        <h1 className="mt-16 flex flex-col gap-1 text-center text-2xl text-white">
          <span className="mb-2 text-5xl font-semibold text-rose-500">
            404 :{'('}
          </span>
          Ups... <span className="text-2xl">I could not find this page </span>
        </h1>
        <m.figure
          className="mt-6 w-64 opacity-60 drop-shadow-lg hue-rotate-30"
          transition={{ duration: 7, repeat: Infinity, repeatType: 'mirror' }}
          animate={{ translateX: [10, -5, 13], translateY: [10, -8] }}
        >
          <Image
            width={800}
            height={600}
            alt="folder image"
            src="https://media.graphcms.com/PRg11EHoRCGDs44ayxGv?_ga=2.33424311.880043180.1644136938-430862818.1639815097"
          />
        </m.figure>
      </div>
    </MainLayout>
  )
}

export default NotFoundPage
