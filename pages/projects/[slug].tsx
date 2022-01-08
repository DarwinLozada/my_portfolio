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
import { NonNullProjectData } from 'types/services'

interface Props {
  data: NonNullProjectData
}

interface GetStaticPropsParams extends ParsedUrlQuery {
  slug: string
}

const ProjectPage: NextPage<Props> = ({ data }) => {
  console.log(data)

  return (
    <MainLayout>
      <p className="text-white text-4xl mt-52">{data.name}</p>
    </MainLayout>
  )
}

export default ProjectPage

export const getStaticProps: GetStaticProps<Props, GetStaticPropsParams> = async ({
  params,
}) => {
  // Redirect to 404 page if there is not Params
  if (!params)
    return {
      notFound: true,
    }

  const { data } = await client.query<ProjectQuery>({
    query: ProjectDocument,
    variables: { slug: params.slug },
  })

  return {
    props: {
      data: data.project as NonNullProjectData,
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
