import MainLayout from 'layouts/MainLayout'
import { NextPage } from 'next'
import Image from 'next/image'

const NotFoundPage: NextPage = () => {
  return (
    <MainLayout>
      <div className="mx-12 flex flex-grow flex-col items-center justify-center">
        <h1 className="mt-16 text-3xl text-white">
          Ups... <span>I could not find this page </span>
        </h1>
        <figure className="mt-6 w-72 opacity-70 drop-shadow-lg hue-rotate-30">
          <Image
            width={800}
            height={600}
            alt="folder image"
            src="https://media.graphcms.com/PRg11EHoRCGDs44ayxGv?_ga=2.33424311.880043180.1644136938-430862818.1639815097"
          />
        </figure>
      </div>
    </MainLayout>
  )
}

export default NotFoundPage
