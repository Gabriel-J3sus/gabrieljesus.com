interface DataProps {
  slug: string
  title: string
  date: string
  year: string
  type: string
  description: string
}

export interface PostCardData {
  allProjectsPostsData: [DataProps]
}

export interface ProjectPostData {
  ProjectPostData: {
    title: string
    year: string
    type: string
    contentHtml: string
  }
}
