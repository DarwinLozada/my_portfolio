import imageMetadata from './src/markdown/plugins/image-metadata.mjs'
import mdx from '@next/mdx'
import bundleAnalyzer from '@next/bundle-analyzer'
import nextTranslate from 'next-translate-plugin'

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

const withMDX = mdx({
  options: {
    rehypePlugins: [imageMetadata],
  },
})

/* @type {import('next').NextConfig} **/
const nextConfig = {
  images: {
    domains: ['media.graphcms.com', 'media.graphassets.com', 'i.natgeofe.com'],
  },
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  transpilePackages: ['three'],
}

export default withBundleAnalyzer(withMDX(nextTranslate(nextConfig)))
