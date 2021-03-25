export interface PostCardData {
  allPostsData: Array<{
    slug: string
    title: string
    date: string
    year: string
    type: string
    description: string
  }>
}

// export interface PostsData extends PostCardData{
//   allPostsData: Array<{
//     contentHtml: string
//   }>
// }
