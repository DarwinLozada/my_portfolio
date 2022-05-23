import { FC } from 'react'
import { MDXProvider } from '@mdx-js/react'
import dynamic from 'next/dynamic'
import { AnimatePresence, LazyMotion } from 'framer-motion'
import { ApolloProvider } from '@apollo/client'
import client from 'services/client'
import useLocaleCookie from 'hooks/useLocaleCookie'
import useScreenBreakpoint from 'hooks/useScreenBreakpoint'

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
  useLocaleCookie()

  const { isSmall } = useScreenBreakpoint()

  return (
    <LazyMotion features={animationFeatures}>
      <ApolloProvider client={client}>
        <MDXProvider components={markdownComponents}>
          <div className="relative min-h-screen overflow-hidden bg-brandBg">
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
                    className=" brightness-50"
                  />
                </div>
                <div className="absolute bottom-64 top-[16rem] right-56 flex w-28">
                  <DynamicStackedHexagons
                    color="pinky"
                    className="opacity-60"
                    hexagonSize="large"
                  />
                </div>
              </>
            )}

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
