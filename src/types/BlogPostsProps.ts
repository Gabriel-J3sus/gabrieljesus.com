export interface BlogDataProps {
  slug: string
  title: string
  date?: string
  formatedDate: string
  type: string
  description: string
}

export interface BlogPostsCardData {
  allBlogPostsData: [BlogDataProps]
}

export interface BlogPostData {
  BlogPostData: {
    title: string
    formatedDate: string
    type: string
    contentHtml: string
  }
}
