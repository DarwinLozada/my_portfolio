import { FC } from 'react'
import Link from 'next/link'
import { Job } from 'types/general'

const JobItem: FC<Job> = ({
  jobName,
  jobDurationText,
  companyName,
  description,
  companyPage,
  techs,
}) => {
  return (
    <li>
      <h3 className="font-bold text-white">
        {jobName} <span className="font-normal">at </span>
        <span className="text-brandPink">
          <Link href={companyPage}>
            <a>@{companyName}</a>
          </Link>
        </span>
      </h3>
      <p className="text-gray-400">{jobDurationText}</p>
      <p className="text-white ">
        Tech I used:
        <ul>{techs}</ul>
      </p>
      <p className="mt-4 text-gray-400">{description}</p>
    </li>
  )
}

export default JobItem
