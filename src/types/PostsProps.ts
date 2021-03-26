export interface DataProps {
  slug: string
  title: string
  date?: string
  year: string
  type: string
  description: string
}

export interface PostCardData {
  allPostsData: [DataProps]
}

export interface PostData {
  postData: {
    title: string
    year: string
    type: string
    contentHtml: string
  }
}
