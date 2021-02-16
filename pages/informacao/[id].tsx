import { GetStaticProps, InferGetServerSidePropsType, NextPage } from 'next'
import Styles from './styles.module.scss'
import Layout from '@/components/Layout'

type Post = {
    id: string
    title: string
    subtitle: string
    mainImage: string
    link: null | string
}

interface PostContent {
    type: 'p' | 'a' | 'img' | 'br' | 'h1' | 'h2' | 'video'
    title?: string
    value: string
}

interface FullPost {
    id: string
    title: string
    subtitle?: string
    mainImage?: string
    content: PostContent[]
}

export async function getStaticPaths() {
    const presentialResponse = await fetch(`http://public.essencialavida.com/data/presential_posts.json`)
    const distanceResponse = await fetch(`http://public.essencialavida.com/data/distance_posts.json`)
    const presentialPosts = await presentialResponse.json()
    const distancePosts = await distanceResponse.json()
    const posts: Post[] = [...presentialPosts, ...distancePosts]
    const paths = posts.map((post) => ({ params: { id: String(post.id) }}))
    return { paths, fallback: 'blocking' }
}

type Params = {
    id: string
}

export const getStaticProps: GetStaticProps<any | Params> = async ({ params }) => {
    const id = params.id
    const response = await fetch(`http://public.essencialavida.com/data/posts/${id}.json`)
    const post: FullPost = await response.json()
    return { props: { post } }
}

type Props = {
    post: FullPost
}

const Informacao = ({ post }: Props) => {
    return (
        <Layout title={post.title} footerDisabled>
            <div className={Styles.container}>
                <h1>{post.title}</h1>
                {post?.subtitle && (<h2 className={Styles.subtitle}>{post.subtitle}</h2>)}
                {post?.mainImage && (<img src={post.mainImage} alt={post.title} />)}
            </div>
            <div className={Styles.contentContainer}>
                {post.content.map((i) => (
                    <div key={i.type + String(Math.random())}>
                        {i.type === 'p' && <p>{i.value}</p>}
                        {i.type === 'a' && <a href={i.value} target="_blank">{i?.title || 'Link'}</a>}
                        {i.type === 'img' && <img src={i.value} alt={i?.title || 'Imagem'}/>}
                        {i.type === 'br' && <br />}
                        {i.type === 'h1' && <h2>{i.value}</h2>}
                        {i.type === 'h2' && <h3>{i.value}</h3>}
                        {i.type === 'video' && (
                            <div className={Styles.video}>
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src={`https://www.youtube.com/embed/${i.value}`}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </Layout>
    )
}

export default Informacao
