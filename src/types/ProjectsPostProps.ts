export interface ProjectDataProps {
  slug: string
  title: string
  date?: string
  year: string
  type: string
  image: string
  description: string
}

export interface ProjectPostsCardData {
  allProjectsPostsData: [ProjectDataProps]
}

export interface ProjectPostData {
  ProjectPostData?: {
    title?: string
    year?: string
    type?: string
    contentHtml?: string
  }
}
