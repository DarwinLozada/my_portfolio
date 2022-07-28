import { ReactNode } from 'react'

export interface Job {
  jobName: string
  jobDurationText: string
  companyName: string
  companyPage: string
  description: string
  techs: ReactNode
}
