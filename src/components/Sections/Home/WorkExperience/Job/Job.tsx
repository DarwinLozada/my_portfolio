import { FC } from 'react'
import Link from 'next/link'
import { Job } from 'types/general'
import useTranslation from 'next-translate/useTranslation'

const JobItem: FC<Job> = ({
  jobName,
  jobDurationText,
  companyName,
  companyPage,
  achievements,
}) => {
  const { t } = useTranslation()

  return (
    <li className="rounded-xl border-2 border-solid border-[#110f33] bg-brandBg p-8 pb-6 w-full">
      <h3 className="font-bold text-white text-xl">
        {jobName} <span className="font-normal">{t('common:preposition.at')} </span>
        <span className="text-brandPink">
          <Link href={companyPage} target="_blank">
            @{companyName}
          </Link>
        </span>
      </h3>
      <p className="text-gray-200">{jobDurationText}</p>
      <p className="mt-4 mb-2 text-lg text-white">Achievements:</p>
      <ul className="list-disc">
        {achievements.map((text) => (
          <li className="text-gray-400 ml-5 mb-3" key={`${text} item`}>
            {text}
          </li>
        ))}
      </ul>
    </li>
  )
}

export default JobItem
