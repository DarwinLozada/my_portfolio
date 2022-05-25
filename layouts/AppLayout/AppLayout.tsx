import { FC } from 'react'
import { MDXProvider } from '@mdx-js/react'
import dynamic from 'next/dynamic'
import { AnimatePresence, LazyMotion } from 'framer-motion'
import { ApolloProvider } from '@apollo/client'
import client from 'services/client'
import useLocaleCookie from 'hooks/useLocaleCookie'

import useWindowWidth from 'hooks/useWindowWidth'
import IsClient from 'components/IsClient/IsClient'
import { useRouter } from 'next/router'
import { HOME_ROUTE } from 'constants/routes'

const markdownComponents = {
  p: dynamic(() => import('components/Markdown/paragraph')),
  img: dynamic(() => import('components/Markdown/image')),
  AboutMe: dynamic(() => import('components/Sections/AboutMe')),
}

const DynamicStackedHexagons = dynamic(
  () => import('../../components/StackedHexagons')
)

const animationFeatures = () =>
  import('../../animation/features').then((features) => features.default)

const AppLayout: FC = ({ children }) => {
  const windowWidth = useWindowWidth()

  const isSmall = windowWidth < 768

  return (
    <LazyMotion features={animationFeatures}>
      <ApolloProvider client={client}>
        <MDXProvider components={markdownComponents}>
          <div className="relative overflow-hidden bg-brandBg">
            <IsClient>
              {isSmall ? (
                <>
                  <div className="absolute -top-44 -left-8 flex w-28">
                    <DynamicStackedHexagons color="pinky" className="opacity-20" />
                  </div>
                  <div className="absolute bottom-64 top-[28rem] right-8 flex w-28">
                    <DynamicStackedHexagons color="pinky" className="opacity-30" />
                  </div>
                </>
              ) : (
                <>
                  <div className="absolute top-0 left-32 flex w-28">
                    <DynamicStackedHexagons color="pinky" className="opacity-20" />
                  </div>
                  <div className="absolute top-[26rem] -left-8 flex w-28">
                    <DynamicStackedHexagons
                      color="bluish"
                      className="opacity-20"
                      hexagonSize="large"
                    />
                  </div>
                  <div className="absolute bottom-64 top-0 mt-[10%] ml-[80%] flex w-28">
                    <DynamicStackedHexagons
                      color="pinky"
                      className="opacity-30"
                      hexagonSize="xl"
                    />
                  </div>
                </>
              )}
            </IsClient>

            <AnimatePresence
              initial={false}
              exitBeforeEnter
              onExitComplete={() => {
                window.scrollTo({ top: 0 })
              }}
            >
              {children}
            </AnimatePresence>
          </div>
        </MDXProvider>
      </ApolloProvider>
    </LazyMotion>
  )
}

export default AppLayout
