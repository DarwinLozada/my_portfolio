import { ProjectsQuery } from 'generated'
import { ValuesType } from 'utility-types'
import Image from 'next/image'
import { FC } from 'react'
import Badge from 'components/Badge'
import Link from 'components/Link'

interface Props {
  projectData: ValuesType<ProjectsQuery['projects']>
}

const ProjectCard: FC<Props> = ({ projectData }) => {
  const { mainImage, name, description, techs, typeOfApp, slug } = projectData

  return (
    <Link
      href={`/projects/${slug}`}
      className="tras flex flex-col rounded-lg bg-slate-300 bg-opacity-10 px-4 pt-4 pb-8 backdrop-blur duration-200 hover:bg-opacity-20"
    >
      <div className="flex min-h-[240px] items-center justify-center rounded-md bg-slate-200 px-8">
        <Image
          src={mainImage.url}
          width={mainImage.width as number}
          height={mainImage.height as number}
          alt={`${name} main image`}
        />
      </div>
      <div className="mt-6 flex flex-col flex-wrap items-start justify-between gap-2 xs:flex-row">
        <h3 className="font-montserrat text-2xl font-semibold text-white">{name}</h3>
        <Badge
          text={typeOfApp?.name as string}
          bgColor={typeOfApp?.displayColor.hex}
          textColor={typeOfApp?.textColor.hex}
          icon={
            <Image
              src={typeOfApp?.icon.url as string}
              width={typeOfApp?.icon.width as number}
              height={typeOfApp?.icon.height as number}
              alt={`${typeOfApp?.name} icon`}
            />
          }
        />
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-4">
        {techs.map((tech) => (
          <div
            key={tech.name}
            className="flex items-center justify-center gap-1"
            style={{ color: tech.color.hex }}
          >
            <div className="relative flex h-6 w-6 items-center">
              <Image
                src={tech.icon.url}
                layout="fill"
                alt={`${tech.name} icon`}
                objectFit="contain"
              />
            </div>
            <span className="text-sm">{tech.name}</span>
          </div>
        ))}
      </div>
      <p className="text-md mt-4 font-montserrat leading-6 text-white">
        {description}
      </p>
    </Link>
  )
}

export default ProjectCard
