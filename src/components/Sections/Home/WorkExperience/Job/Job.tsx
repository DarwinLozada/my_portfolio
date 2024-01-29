import { FC } from 'react'
import Link from 'next/link'
import { Job } from 'types/general'
import useTranslation from 'next-translate/useTranslation'

const JobItem: FC<Job> = ({
  jobName,
  jobDurationText,
  companyName,
  description,
  companyPage,
}) => {
  const { t } = useTranslation()

  return (
    <li className="rounded-xl border-2 border-solid border-[#221e79] bg-brandBg p-8 shadow-inner">
      <h3 className="font-bold text-white">
        {jobName} <span className="font-normal">{t('common:preposition.at')} </span>
        <span className="text-brandPink">
          <Link href={companyPage} target="_blank">
            @{companyName}
          </Link>
        </span>
      </h3>
      <p className="text-gray-200">{jobDurationText}</p>
      <p className="mt-2 text-gray-400">{description}</p>
    </li>
  )
}

export default JobItem
