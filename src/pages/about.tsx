import ArticleWrapper from 'components/ArticleWrapper'
import {
  Locale,
  PageDocument,
  PageQuery,
  PageQueryVariables,
  Pages,
} from 'generated'
import MainLayout from 'layouts/MainLayout'
import markdownComponents from 'markdown/components'
import { GetStaticProps, NextPage } from 'next'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import useTranslation from 'next-translate/useTranslation'
import client from 'services/client'

interface Props {
  mdxSource: MDXRemoteSerializeResult<Record<string, unknown>>
}

const AboutPage: NextPage<Props> = ({ mdxSource }) => {
  const { t } = useTranslation()

  return (
    <MainLayout>
      <ArticleWrapper>
        <h1 className="mb-16 text-center font-montserrat text-4xl font-semibold text-white">
          {t('common:footer.links.about-me')}
        </h1>
        <section className="flex max-w-2xl flex-col gap-1">
          <MDXRemote components={markdownComponents} {...mdxSource} />
        </section>
      </ArticleWrapper>
    </MainLayout>
  )
}

export const getStaticProps: GetStaticProps<Props> = async ({
  locales,
  defaultLocale,
  locale,
}) => {
  const localeToUse = (locale || defaultLocale || Locale.En) as Locale

  const { data } = await client
    .query<PageQuery, PageQueryVariables>(PageDocument, {
      slug: Pages.AboutMe,
      locale: [localeToUse],
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
