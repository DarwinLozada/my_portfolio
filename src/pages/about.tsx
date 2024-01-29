import ArticleWrapper from 'components/ArticleWrapper'
import { PageDocument, PageQuery, PageQueryVariables, Pages } from 'generated'
import MainLayout from 'layouts/MainLayout'
import markdownComponents from 'markdown/components'
import { GetStaticProps, NextPage } from 'next'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import client from 'services/client'

interface Props {
  mdxSource: MDXRemoteSerializeResult<Record<string, unknown>>
}

const AboutPage: NextPage<Props> = ({ mdxSource }) => {
  return (
    <MainLayout>
      <ArticleWrapper>
        <h1 className="mb-16 text-center font-montserrat text-4xl font-semibold text-white">
          About Me
        </h1>
        <section className="flex max-w-2xl flex-col gap-1">
          <MDXRemote components={markdownComponents} {...mdxSource} />
        </section>
      </ArticleWrapper>
    </MainLayout>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { data } = await client
    .query<PageQuery, PageQueryVariables>(PageDocument, {
      slug: Pages.AboutMe,
    })
    .toPromise()

  if (!data) {
    return {
      notFound: true,
    }
  }

  const mdxSource = await serialize(data.page?.content as string)

  return {
    props: {
      mdxSource,
    },
  }
}

export default AboutPage
