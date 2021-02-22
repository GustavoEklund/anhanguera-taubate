import { GetStaticProps, NextPage } from 'next'
import Styles from './styles.module.scss'
import Layout from '@/components/Layout'
import { Paragraph, Link, Image, Title, Subtitle, Video, List } from '@/components/PostComponents'

type Post = {
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

interface FullPost {
  id: string
  title: string
  subtitle?: string
  mainImage?: string
  content: PostContent[]
}

interface PathParams {
  id: string
}

interface Path {
  params: PathParams
}

interface StaticPathsReturn {
  paths: Path[]
  fallback: 'blocking' | boolean
}

export async function getStaticPaths(): Promise<StaticPathsReturn> {
  const presentialResponse = await fetch(
    `http://public.essencialavida.com/data/presential_posts.json`
  )
  const distanceResponse = await fetch(`http://public.essencialavida.com/data/distance_posts.json`)
  const presentialPosts = await presentialResponse.json()
  const distancePosts = await distanceResponse.json()
  const posts: Post[] = [...presentialPosts, ...distancePosts]
  const paths = posts
    .filter((post) => post.link === 'id')
    .map((post) => ({ params: { id: String(post.id) } }))
  return { paths, fallback: 'blocking' }
}

type Params = {
  id: string
}

export const getStaticProps: GetStaticProps<any | Params> = async ({ params }) => {
  const id = params?.id
  const response = await fetch(`http://public.essencialavida.com/data/posts/${id}.json`)
  const post: FullPost = await response.json()
  return {
    props: {
      post
    },
    revalidate: 1800
  }
}

type Props = {
  post: FullPost
}

function renderElement(post: PostContent): JSX.Element {
  const stringValue = typeof post.value === 'string' ? post.value : post.value.join(' ')
  const arrayValue = typeof post.value !== 'string' ? post.value : []

  switch (post.type) {
    case 'p':
      return <Paragraph>{stringValue}</Paragraph>
    case 'a':
      return <Link href={stringValue}>{post?.title}</Link>
    case 'img':
      return <Image src={stringValue} title={post.title} />
    case 'br':
      return <br />
    case 'h1':
      return <Title>{stringValue}</Title>
    case 'h2':
      return <Subtitle>{stringValue}</Subtitle>
    case 'video':
      return <Video title={post.title} videoId={stringValue} />
    case 'ol':
      return <List type="ol">{arrayValue}</List>
    case 'ul':
      return <List type="ul">{arrayValue}</List>
    default:
      return <></>
  }
}

const Informacao: NextPage<Props> = ({ post }: Props) => {
  function getMargin(side: 'top' | 'bottom', value: boolean): string {
    return value
      ? side === 'top'
        ? 'largeMarginTop'
        : 'largeMarginBottom'
      : side === 'top'
      ? 'defaultMarginTop'
      : 'defaultMarginBottom'
  }

  return (
    <Layout title={post.title} footerDisabled>
      <div className={Styles.container}>
        <h1>{post.title}</h1>
        {post?.subtitle && <h2 className={Styles.subtitle}>{post.subtitle}</h2>}
        {post?.mainImage && <img src={post.mainImage} alt={post.title} />}
      </div>
      <div className={Styles.contentContainer}>
        {post.content.map((postItem) => (
          <div
            key={postItem.type + String(Math.random())}
            className={[
              Styles[getMargin('top', !!postItem.largeMarginTop)],
              Styles[getMargin('bottom', !!postItem.largeMarginBottom)]
            ].join(' ')}
          >
            {renderElement(postItem)}
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default Informacao
