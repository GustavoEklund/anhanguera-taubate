export interface Post {
  id: string
  title: string
  subtitle: string
  mainImage: string
  link: null | string
}

export type PostContentType = 'p' | 'a' | 'img' | 'br' | 'h1' | 'h2' | 'video' | 'ul' | 'ol'

export interface PostContent {
  type: PostContentType
  variant?: string
  title?: string
  value: string | string[]
  largeMarginTop?: boolean
  largeMarginBottom?: boolean
}

export interface PostItem {
  id: string
  title: string
  subtitle?: string
  mainImage?: string
  content: PostContent[]
}
