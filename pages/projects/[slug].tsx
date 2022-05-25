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
import Breadcrumb from 'components/Breadcrumb'
import Button from 'components/Button'
import useTranslation from 'next-translate/useTranslation'
import { mergeArraysProperties } from 'utils/arrays'

interface Props {
  data: NonNullProjectData
  mdxSource: MDXRemoteSerializeResult<Record<string, unknown>>
}

interface GetStaticPropsParams extends ParsedUrlQuery {
  slug: string
}

const ProjectPage: NextPage<Props> = ({ data, mdxSource }) => {
  const { name, mainImage, typeOfApp, techs, description, slug, resource } = data

  const { t } = useTranslation()

  return (
    <MainLayout>
      <article className="mt-28 flex max-w-2xl flex-col items-center justify-center px-4 pb-20">
        <div className="flex w-full justify-start">
          <Breadcrumb
            items={[
              {
                text: t('project:breadcrumb.projects-page'),
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
        <div className="mt-10 flex w-full flex-col items-start justify-between gap-4">
          <div className="mb-4 flex w-full flex-col items-center gap-y-5 xss:flex-row xss:justify-between">
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

            <div className="max-w-[16rem]">
              <Button
                size="small"
                inline
                colorScheme="secondary"
                type="anchor"
                href={resource}
                openTab
              >
                {t('project:CTAs.check-it-out')}
              </Button>
            </div>
          </div>
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
          <article className="flex flex-col gap-8">
            <MDXRemote {...mdxSource} />
          </article>
        </div>
      </article>
    </MainLayout>
  )
}

export default ProjectPage

export const getStaticProps: GetStaticProps<Props, GetStaticPropsParams> = async ({
  params,
  locale,
}) => {
  // Redirect to 404 page if there are not Params
  if (!params)
    return {
      notFound: true,
    }

  const { data } = await client.query<ProjectQuery>({
    query: ProjectDocument,
    variables: { slug: params.slug, locale: [locale] },
  })

  const mdxSource = await serialize(data.project?.fullDescription as string, {
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

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const { data } = await client.query<ProjectsSlugsQuery>({
    query: ProjectsSlugsDocument,
  })

  const alternativeLocales =
    locales
      ?.filter((locale) => locale !== 'default')
      .map((locale) => ({
        locale,
      })) || []

  const normalizedProjectsSlugs = data.projects.map((project) => ({
    params: { slug: project.slug },
  }))

  const pathsWithLocales = mergeArraysProperties(
    alternativeLocales,
    normalizedProjectsSlugs
  )

  return {
    paths: pathsWithLocales,
    fallback: false,
  }
}
