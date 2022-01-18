import {
  ProjectDocument,
  ProjectQuery,
  ProjectsSlugsDocument,
  ProjectsSlugsQuery,
} from 'generated'
import MainLayout from 'layouts/MainLayout'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { ParsedUrlQuery } from 'querystring'
import client from 'services/client'
import Image from 'next/image'
import { NonNullProjectData } from 'types/services'
import Badge from 'components/Badge'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import imageSize from 'rehype-img-size'

interface Props {
  data: NonNullProjectData
  mdxSource: MDXRemoteSerializeResult<Record<string, unknown>>
}

interface GetStaticPropsParams extends ParsedUrlQuery {
  slug: string
}

const ProjectPage: NextPage<Props> = ({ data, mdxSource }) => {
  const { name, mainImage, typeOfApp, techs, description } = data

  return (
    <MainLayout>
      <article className="flex flex-col items-center justify-center mt-36 px-4 pb-20">
        <h1 className="text-white text-4xl font-medium">{name}</h1>
        <div className="grid place-items-center p-4 min-h-[240px] bg-slate-200 rounded-md mt-14 backdrop-blur-md">
          <Image
            src={mainImage.url}
            width={mainImage.width as number}
            height={mainImage.height as number}
            alt={`${name} main_image`}
          />
        </div>
        <div className="flex flex-col justify-between w-full items-start gap-4 mt-12">
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
          <div className="flex gap-4 mt-1">
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
          <p className="mt-4 leading-8 text-white text-lg">{description}</p>
          <MDXRemote {...mdxSource} />
        </div>
      </article>
    </MainLayout>
  )
}

export default ProjectPage

export const getStaticProps: GetStaticProps<Props, GetStaticPropsParams> = async ({
  params,
}) => {
  // Redirect to 404 page if there are not Params
  if (!params)
    return {
      notFound: true,
    }

  const { data } = await client.query<ProjectQuery>({
    query: ProjectDocument,
    variables: { slug: params.slug },
  })

  const mdxSource = await serialize(data.project?.additionalDescription as string)

  return {
    props: {
      data: data.project as NonNullProjectData,
      mdxSource,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query<ProjectsSlugsQuery>({
    query: ProjectsSlugsDocument,
  })

  const normalizedProjectsSlugs = data.projects.map((project) => ({
    params: { slug: project.slug },
  }))

  return {
    paths: normalizedProjectsSlugs,
    fallback: false,
  }
}
