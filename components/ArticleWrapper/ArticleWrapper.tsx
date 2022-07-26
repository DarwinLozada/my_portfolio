import { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const ArticleWrapper: FC<Props> = ({ children }) => {
  return (
    <article className="flex max-w-2xl flex-col items-center justify-center px-4 pb-20">
      {children}
    </article>
  )
}

export default ArticleWrapper
