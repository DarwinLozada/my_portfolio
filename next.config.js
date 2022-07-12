/**
 * @type {import('next').NextConfig}
 */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const withTM = require('next-transpile-modules')(['three'])

const nextTranslate = require('next-translate')

module.exports = withTM(
  withBundleAnalyzer(
    nextTranslate({
      images: {
        domains: ['media.graphcms.com', 'media.graphassets.com', 'i.natgeofe.com'],
      },
    }),
  ),
)
