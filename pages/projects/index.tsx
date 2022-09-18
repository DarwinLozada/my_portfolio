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
      <h1 className="mt-32 mb-16 text-center font-montserrat text-4xl font-semibold text-white md:mb-24">
        {t('projects:title')}
      </h1>
      <article className="mb-12 grid max-w-4xl grid-cols-1 gap-12 px-4 sm:grid-cols-2">
        {projects.projects.map((projectData) => (
          <ProjectCard projectData={projectData} key={projectData.name} />
        ))}
      </article>
    </MainLayout>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const projectsData = await client
    .query<ProjectsQuery>(ProjectsDocument, {
      locale: [locale],
    })
    .toPromise()

  return {
    props: {
      projects: projectsData.data,
    },
  }
}

export default ProjectsPage
