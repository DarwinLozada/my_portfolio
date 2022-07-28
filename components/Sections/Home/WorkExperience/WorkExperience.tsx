import { FC } from 'react'
import { Job } from 'types/general'
import JobItem from './Job'

const Jobs: Job[] = [
  {
    companyName: 'Codemera',
    jobName: 'Frontend Developer',
    jobDurationText: 'Nov 2021 - Present',
    companyPage: 'https://codemera.com/',
    description: 'dwdwdw',
    techs: <></>,
  },
  {
    companyName: 'QCode',
    jobName: 'Frontend React Developer',
    jobDurationText: 'May 2021 - Aug 2022',
    companyPage: 'https://www.qcode.co/',
    description: 'dwdwdw',
    techs: <></>,
  },
]

const WorkExperience: FC = () => {
  return (
    <section className="z-10 flex w-full flex-col items-center justify-center px-24">
      <h2 className="mb-24 text-center text-4xl font-bold tracking-widest text-white">
        EXPERIENCE
      </h2>
      <ul className="flex flex-col gap-8">
        {Jobs.map(
          ({
            companyName,
            jobName,
            jobDurationText,
            companyPage,
            description,
            techs,
          }) => (
            <JobItem
              key={jobName}
              companyName={companyName}
              jobName={jobName}
              jobDurationText={jobDurationText}
              companyPage={companyPage}
              description={description}
              techs={techs}
            />
          ),
        )}
      </ul>
    </section>
  )
}

export default WorkExperience
