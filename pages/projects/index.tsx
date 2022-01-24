import ProjectCard from 'components/ProjectCard'
import { ProjectsDocument, ProjectsQuery } from 'generated'
import MainLayout from 'layouts/MainLayout'
import { GetStaticProps, NextPage } from 'next'
import client from 'services/client'

interface PageProps {
  projects: ProjectsQuery
}

const ProjectsPage: NextPage<PageProps> = ({ projects }) => {
  return (
    <MainLayout>
      <h1 className="font-semibold font-montserrat text-4xl text-white text-center mt-32 mb-16">
        My Projects
      </h1>
      <section className="grid grid-cols-1 px-4 gap-12 mb-12">
        {projects.projects.map((projectData) => (
          <ProjectCard projectData={projectData} key={projectData.name} />
        ))}
      </section>
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
