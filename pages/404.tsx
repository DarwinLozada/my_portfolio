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
          className="mt-6 w-96 opacity-60 drop-shadow-lg hue-rotate-30"
          transition={{ duration: 7, repeat: Infinity, repeatType: 'mirror' }}
          animate={{ translateX: [10, -5, 13], translateY: [10, -8] }}
        >
          <Image
            width={2500}
            height={1778}
            alt="folder image"
            src="https://media.graphcms.com/qUwkrqrQWiGoUaWkSRng?_ga=2.218135121.953258469.1647082152-430862818.1639815097"
          />
        </m.figure>
      </div>
    </MainLayout>
  )
}

export default NotFoundPage
