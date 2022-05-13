import { Monitor, Phone } from 'components/Devices'
import { Bars, MorePeople, People, Tasks } from 'components/Icons'
import useTranslation from 'next-translate/useTranslation'
import { FC } from 'react'
import Value from './Value'

const Values: FC = () => {
  const { t } = useTranslation()

  return (
    <section className="relative mt-64 mb-60 flex flex-col items-center justify-center px-4">
      <div className="absolute -top-36 opacity-25">
        <Monitor className=" w-[350px]" />
      </div>
      <h2 className="z-10 px-12 text-center text-4xl font-bold text-brandWhite">
        {t('home:my-values.title')}
      </h2>
      <ul className="relative z-10 mt-36 flex flex-col gap-12 px-4">
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
      <div className="absolute -bottom-56 -right-16 opacity-25">
        <Phone className="w-48" />
      </div>
    </section>
  )
}

export default Values
