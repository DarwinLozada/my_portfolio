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
import imageMetadata from 'markdown/plugins/image-metadata'
import Breadcrum from 'components/Breadcrumb'

interface Props {
  data: NonNullProjectData
  mdxSource: MDXRemoteSerializeResult<Record<string, unknown>>
}

interface GetStaticPropsParams extends ParsedUrlQuery {
  slug: string
}

const ProjectPage: NextPage<Props> = ({ data, mdxSource }) => {
  const { name, mainImage, typeOfApp, techs, description, slug } = data

  return (
    <MainLayout>
      <article className="mt-32 flex flex-col items-center justify-center px-4 pb-20">
        <div className="flex w-full justify-start">
          <Breadcrum
            items={[
              {
                text: 'Projects',
                url: '/projects',
              },
              { text: name, url: `/projects/${slug}` },
            ]}
          />
        </div>
        <h1 className="mt-12 text-4xl font-medium text-white">{name}</h1>
        <div className="mt-14 grid min-h-[240px] place-items-center rounded-md bg-slate-200 p-4 backdrop-blur-md">
          <Image
            src={mainImage.url}
            width={mainImage.width as number}
            height={mainImage.height as number}
            alt={`${name} main_image`}
          />
        </div>
        <div className="mt-12 flex w-full flex-col items-start justify-between gap-4">
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
          <div className="mt-1 flex gap-4">
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
          <p className="mt-4 text-lg leading-8 text-white">{description}</p>
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

  const mdxSource = await serialize(data.project?.additionalDescription as string, {
    mdxOptions: {
      rehypePlugins: [imageMetadata],
    },
  })

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
