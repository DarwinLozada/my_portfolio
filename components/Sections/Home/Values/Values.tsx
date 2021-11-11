import { Monitor } from 'components/Devices'
import { Bars, MorePeople, People, Tasks } from 'components/Icons'
import { FC } from 'react'
import Value from './Value'

const Values: FC = () => {
  return (
    <section className="relative flex flex-col items-center justify-center px-4 mt-64 mb-28">
      <div className="absolute opacity-25 -top-36">
        <Monitor className=" w-[350px]" />
      </div>
      <h2 className="text-brandWhite z-10 font-bold text-4xl px-12 text-center">
        What are my values?
      </h2>
      <ul className="flex flex-col gap-12 mt-36 px-4">
        <Value
          icon={<Tasks className="w-20 stroke-0 text-brandPink" />}
          title="Problem solving"
        >
          My main focus is to give results and keep things simple
        </Value>
        <Value
          icon={<People className="w-20 stroke-0 text-brandPink" />}
          title="Team work"
        >
          Diversity is something I embrace when I work in new projects
        </Value>
        <Value
          icon={<MorePeople className="w-14 stroke-0 text-brandPink" />}
          title="UX driven development"
        >
          The guideline is the experience of the end user
        </Value>
        <Value
          icon={<Bars className="w-12 stroke-0 text-brandPink" />}
          title="Scalability / Maintainability"
        >
          No one wants to deal with some spaghetti code
        </Value>
      </ul>
      <div className="absolute opacity-25 -top-36">
        <Monitor className="w-[350px]" />
      </div>
    </section>
  )
}

export default Values
