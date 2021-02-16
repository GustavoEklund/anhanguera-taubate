import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import { useRouter } from 'next/router'
import Layout from '@/components/Layout'
import Styles from './styles.module.scss'
import HomeHeroLandingImage from '@/components/HomeHeroLandingImage'
import Button from '@/components/Button'
import HamburgerMenu from '@/components/HamburgerMenu'
import useWindowSize from '@/hooks/useWindowSize'

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
    const { windowWidth } = useWindowSize()
    const router = useRouter()
    const isDesktopSize = (): boolean => windowWidth > 1000

    return (
        <Layout title="Presencial" footerDisabled>
            {!isDesktopSize() && <HamburgerMenu />}
            <div className={Styles.heroLanding}>
                <div className={Styles.container}>
                    <div className={Styles.heroCard}>
                        <h1>Fique Atento</h1>
                        <h2>Atualize seus dados</h2>
                        <p><strong>Evite problemas, informe seus dados para atualização.</strong></p>
                        <Button variant="contained">Atualize</Button>
                    </div>
                </div>
                <div className={Styles.mobileHeroBanner} />
                <HomeHeroLandingImage />
            </div>
            <div className={Styles.container}>
                {posts.map((post): JSX.Element => (
                    <div
                        className={Styles.card}
                        key={post.id}
                        data-title={post.title}
                        onClick={() => post.link === 'id' ? router.push(`/informacao/${post.id}`) : window.open(post.link)}
                    >
                        <div
                            className={Styles.imageWrapper}
                            style={{ backgroundImage: `url(http://public.essencialavida.com/images/${post.mainImage})` }}
                        />
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
