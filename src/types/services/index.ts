import { PageQuery, ProjectQuery } from 'generated'

export type NonNullProjectData = NonNullable<ProjectQuery['project']>

export type NonNullPageData = NonNullable<PageQuery['page']>
