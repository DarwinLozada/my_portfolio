import { createClient } from 'urql'

const graphqlServerURL = process.env.NEXT_PUBLIC_GRAPHCMS_URL

if (!graphqlServerURL) {
  throw new Error(
    'Error reading GraphQL Server URL | Not Found as an environment variable',
  )
}

const client = createClient({
  url: graphqlServerURL,
})

export default client
