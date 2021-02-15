import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import Layout from '@/components/Layout'
import Button from '@/components/Button'
import Styles from './styles.module.scss'
import HomeHeroLandingImage from "@/components/HomeHeroLandingImage";

type Post = {
    id: number
    title: string
    subtitle: string
    mainImage: string
    link: null | string
}

type QueryParams = {
    modalidade?: string
}

export const getServerSideProps: GetServerSideProps<any | QueryParams> = async ({ query, res }) => {
    try {
        const modality = query?.modalidade === 'distancia' ? 'distance' : 'presential'
        const response = await fetch(`http://public.essencialavida.com/data/${modality}_posts.json`)
        const posts: Post[] = await response.json()
        return { props: { posts } }
    } catch {
        res.statusCode = 404
        return { props: { posts: [] } }
    }
}

const Index: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = ({ posts }) => {
    return (
        <Layout title="Presencial" footerDisabled>
            <div className={Styles.heroLanding}>
                <HomeHeroLandingImage />
            </div>
            <div className={Styles.container}>
                {posts.map((post): JSX.Element => (
                    <div
                        className={Styles.card}
                        key={post.id}
                        data-title={post.title}
                        onClick={() => post.link ? window.open(post.link) : null}
                    >
                        <div className={Styles.imageWrapper} style={{ backgroundImage: `url(http://public.essencialavida.com/images/${post.mainImage})` }} />
                        <main>
                            <p className={Styles.truncateOverflow} title={post.title}>
                                <strong>{post.title}</strong>
                            </p>
                            <br />
                            <p className={Styles.truncateOverflow} title={post.subtitle}>
                                {post.subtitle}
                            </p>
                        </main>
                    </div>
                ))}
            </div>
        </Layout>
    )
}

export default Index
