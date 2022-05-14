import ProjectCard from 'components/ProjectCard'
import { ProjectsDocument, ProjectsQuery } from 'generated'
import MainLayout from 'layouts/MainLayout'
import { GetStaticProps, NextPage } from 'next'
import useTranslation from 'next-translate/useTranslation'
import client from 'services/client'

interface PageProps {
  projects: ProjectsQuery
}

const ProjectsPage: NextPage<PageProps> = ({ projects }) => {
  const { t } = useTranslation()

  return (
    <MainLayout>
      <h1 className="mt-32 mb-16 text-center font-montserrat text-4xl font-semibold text-white">
        {t('projects:title')}
      </h1>
      <section className="mb-12 grid grid-cols-1 gap-12 px-4">
        {projects.projects.map((projectData) => (
          <ProjectCard projectData={projectData} key={projectData.name} />
        ))}
      </section>
    </MainLayout>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const projectsData = await client.query({
    query: ProjectsDocument,
    variables: {
      locale: [locale],
    },
  })

  return {
    props: {
      projects: projectsData.data,
    },
  }
}

export default ProjectsPage
