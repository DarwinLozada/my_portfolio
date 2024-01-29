export const HOME_ROUTE = '/'
export const PROJECTS_ROUTE = '/projects'
export const ABOUT_ROUTE = '/about'

export const getNavRoutes = () => [
  {
    route: HOME_ROUTE,
    name: 'common:nav.links.home',
  },
  {
    route: PROJECTS_ROUTE,
    name: 'common:nav.links.projects',
  },
  { route: ABOUT_ROUTE, name: 'common:nav.links.about-me' },
]
