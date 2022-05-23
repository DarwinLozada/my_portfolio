import { Monitor, Phone } from 'components/Devices'
import { Bars, MorePeople, People, Tasks } from 'components/Icons'
import useTranslation from 'next-translate/useTranslation'
import { FC } from 'react'
import Value from './Value'

const Values: FC = () => {
  const { t } = useTranslation()

  return (
    <section className="relative mt-64 mb-60 flex flex-col items-center justify-center px-4 md:mb-[44rem] md:items-start">
      <div className="absolute -top-36 opacity-25 md:-left-96 md:-top-24">
        <Monitor className="w-[350px] md:w-[550px]" />
      </div>
      <div className="md:ml-64">
        <h2 className="z-10 px-12 text-center text-4xl font-bold text-brandWhite md:p-0 md:text-left">
          {t('home:my-values.title')}
        </h2>
        <ul className="relative z-10 mt-36 grid max-w-sm grid-cols-1 gap-12 px-4 md:mt-12 md:max-w-3xl md:grid-cols-2 md:p-0">
          <Value
            icon={<Tasks className="w-20 stroke-0 text-brandPink" />}
            title={t('home:my-values.values.problem-solving.title')}
          >
            {t('home:my-values.values.problem-solving.description')}
          </Value>
          <Value
            icon={<People className="w-20 stroke-0 text-brandPink" />}
            title={t('home:my-values.values.team-work.title')}
          >
            {t('home:my-values.values.team-work.description')}
          </Value>
          <Value
            icon={<MorePeople className="w-14 stroke-0 text-brandPink" />}
            title={t('home:my-values.values.ux-dev.title')}
          >
            {t('home:my-values.values.ux-dev.description')}
          </Value>
          <Value
            icon={<Bars className="w-12 stroke-0 text-brandPink" />}
            title={t('home:my-values.values.scalabilty.title')}
          >
            {t('home:my-values.values.scalabilty.description')}
          </Value>
        </ul>
      </div>
      <div className="absolute -bottom-56 -right-16 opacity-25 md:-bottom-[40rem]">
        <Phone className="w-48 md:w-80 " />
      </div>
    </section>
  )
}

export default Values
