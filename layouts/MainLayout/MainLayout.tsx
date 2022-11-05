import { FC, ReactNode } from 'react'
import { m } from 'framer-motion'
import Footer from 'components/Footer'
import Head from 'next/head'
import { pageTitleBase } from 'constants/seo'
import useTranslation from 'next-translate/useTranslation'
import favicon32 from 'public/favicon-32.png'
import favicon16 from 'public/favicon-16.png'
import OGImage from 'public/images/og-image.webp'
import Script from 'next/script'

interface Props {
  blurredBackground?: boolean
  children?: ReactNode
  title?: string
}

const MainLayout: FC<Props> = ({ children, blurredBackground, title }) => {
  const { t } = useTranslation()

  return (
    <m.div
      transition={{
        duration: 2,
      }}
      initial="initial"
      animate="appear"
      exit="exit"
      variants={{
        initial: {
          opacity: 0,
        },

        appear: {
          opacity: 1,
          transition: { duration: 0.5 },
        },

        exit: {
          opacity: 0,
          transition: { duration: 0.5 },
        },
      }}
    >
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>{title || `${pageTitleBase} Frontend Developer`}</title>
        <meta name="description" content={t('common:head.description')} />
        <meta name="author" content="Darwin Lozada" />
        <meta content="index,follow" name="robots" />
        <meta content="index,follow" name="googlebot" />
        <link href="https://www.darwinlozada.com" rel="canonical" />

        <link href={favicon16.src} rel="icon" sizes="16x16" type="image/png" />
        <link href={favicon32.src} rel="icon" sizes="32x32" type="image/png" />

        {/* Facebook tags */}
        <meta property="og:title" content="Darwin Lozada | Frontend Developer" />
        <meta property="og:site_name" content="Darwin Lozada" />
        <meta property="og:url" content="https://www.darwinlozada.com" />
        <meta property="og:description" content={t('common:head.description')} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={OGImage.src}></meta>
        <meta property="og:image:alt" content="Darwin Lozada" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        {/* Close Facebook tags */}

        {/* Twitter tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="darwinlozada.com" />
        <meta property="twitter:url" content="https://www.darwinlozada.com" />
        <meta name="twitter:site" content="Darwin Lozada" />
        <meta name="twitter:title" content="Darwin Lozada | Frontend Developer" />
        <meta name="twitter:description" content={t('common:head.description')} />
        <meta name="twitter:image" content={OGImage.src} />
        <meta property="twitter:image:alt" content="Darwin Lozada" />
        <meta property="twitter:image:width" content="1200" />
        <meta property="twitter:image:height" content="630" />
        {/* Close Twitter tags */}
      </Head>
      <Script
        data-host="https://microanalytics.io"
        data-dnt="false"
        src="https://microanalytics.io/js/script.js"
        id="ZwSg9rf6GA"
        async
        defer
        strategy="afterInteractive"
      />
      <div className="brand-bg-gradient absolute top-0 w-screen" />

      <main
        className={`relative z-10 flex min-h-screen flex-grow flex-col items-center justify-center overflow-hidden ${
          blurredBackground ? 'backdrop-blur-sm' : ''
        }
        `}
      >
        {children}
      </main>
      <Footer />
    </m.div>
  )
}

export default MainLayout
