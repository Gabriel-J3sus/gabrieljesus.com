import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string

    colors: {
      background: string
      primary: string
      secondary: string
      recentPostsbackground: string
      tagBackground: string
      buttonBackground: string
      line: string
      shadows: string
      codeContainer: string
    }
  }
}
