interface Data {
  slug: string
  title: string
  date: string
  year: string
  type: string
  description: string
}

export interface PostCardData {
  allPostsData: [Data]
}

export interface PostData {
  postData: {
    title: string
    year: string
    type: string
    contentHtml: string
  }
}
