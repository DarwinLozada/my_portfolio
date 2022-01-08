/**
 * @type {import('next').NextConfig}
 */

const nextTranslate = require('next-translate')

module.exports = nextTranslate({
  images: {
    domains: ['media.graphcms.com'],
  },
})
