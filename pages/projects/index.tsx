import { ProjectsDocument, ProjectsQuery } from 'generated'
import MainLayout from 'layouts/MainLayout'
import { GetStaticProps, NextPage } from 'next'
import client from 'services/client'

interface PageProps {
  projects: ProjectsQuery
}

const ProjectsPage: NextPage<PageProps> = ({ projects }) => {
  console.log(projects)

  return (
    <MainLayout>
      <p>Hola</p>
    </MainLayout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const projectsData = await client.query({ query: ProjectsDocument })

  return {
    props: {
      projects: projectsData.data,
    },
  }
}

export default ProjectsPage
