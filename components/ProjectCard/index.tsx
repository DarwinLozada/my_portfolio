import { ProjectsQuery } from 'generated'
import { ValuesType } from 'utility-types'
import Image from 'next/image'
import { FC } from 'react'
import Badge from 'components/Badge'
import Link from 'next/link'

interface Props {
  projectData: ValuesType<ProjectsQuery['projects']>
}

const ProjectCard: FC<Props> = ({ projectData }) => {
  const { mainImage, name, description, techs, typeOfApp, slug } = projectData

  return (
    <Link href={`/projects/${slug}`}>
      <a className="flex flex-col backdrop-blur bg-brandWhite bg-opacity-10 duration-200 hover:bg-opacity-20 tras rounded-lg px-4 pt-4 pb-8">
        <div className="flex justify-center items-center min-h-[240px] bg-slate-200 rounded-md px-8">
          <Image
            src={mainImage.url}
            width={mainImage.width as number}
            height={mainImage.height as number}
            alt={`${name} main image`}
          />
        </div>
        <div className="flex justify-between mt-6">
          <h3 className="text-2xl font-semibold text-white font-montserrat">
            {name}
          </h3>
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
        <div className="flex items-center gap-4 mt-4">
          {techs.map((tech) => (
            <div
              key={tech.name}
              className="flex gap-1 items-center justify-center"
              style={{ color: tech.color.hex }}
            >
              <div className="flex relative items-center w-6 h-6">
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
        <p className="font-montserrat text-white text-md mt-4 leading-6">
          {description}
        </p>
      </a>
    </Link>
  )
}

export default ProjectCard
