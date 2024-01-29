import useTranslation from 'next-translate/useTranslation'
import { FC } from 'react'
import { Job } from 'types/general'
import JobItem from './Job'
const WorkExperience: FC = () => {
  const { t } = useTranslation()

  const jobs: Job[] = [
    {
      companyName: 'Codemera',
      jobName: 'Frontend Developer',
      jobDurationText: `Nov 2021 - ${t('common:time.present')}`,
      companyPage: 'https://codemera.com/',
      description: `${t('home:experience.jobs.codemera.description')}`,
      achievements: [
        t('home:experience.jobs.codemera.achievements.landing'),
        t('home:experience.jobs.codemera.achievements.migration'),
        t('home:experience.jobs.codemera.achievements.personalized'),
        t('home:experience.jobs.codemera.achievements.maintainability'),
      ],
    },
    {
      companyName: 'QCode',
      jobName: 'Frontend React Developer',
      jobDurationText: 'May 2021 - Aug 2022',
      companyPage: 'https://www.qcode.co/',
      description: `${t('home:experience.jobs.qcode.description')}`,
      achievements: [
        t('home:experience.jobs.qcode.achievements.development'),
        t('home:experience.jobs.qcode.achievements.colaboration'),
      ],
    },
  ]

  return (
    <section className="z-10 mt-64 flex w-full flex-col items-center justify-center px-10 text-center md:mt-24 md:px-24 md:text-left lg:mb-24 lg:mt-80">
      <h2 className="mb-16 text-center text-4xl font-bold tracking-widest text-white">
        {t('home:experience.title')}
      </h2>
      <ul className="flex max-w-lg flex-col">
        {jobs.map(
          (
            {
              companyName,
              jobName,
              jobDurationText,
              companyPage,
              description,
              achievements,
            },
            index,
          ) => (
            <div
              className="flex flex-col items-center justify-center"
              key={companyName}
            >
              <JobItem
                key={jobName}
                companyName={companyName}
                jobName={jobName}
                jobDurationText={jobDurationText}
                companyPage={companyPage}
                description={description}
                achievements={achievements}
              />
              {index !== jobs.length - 1 && (
                <div className="my-2 h-12 w-1 rounded-full bg-brandPink"></div>
              )}
            </div>
          ),
        )}
      </ul>
    </section>
  )
}

export default WorkExperience
