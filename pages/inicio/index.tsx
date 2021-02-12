import Image from 'next/image'
import Layout from '@/components/Layout'
import Button from '@/components/Button'
import Styles from './styles.module.scss'

type Post = {
    id: number
    title: string
    subtitle: string
    mainImage: string
    description?: object
    link: null | string
}

type Props = {
    posts: Post[]
}

export default function Index(props: Props): JSX.Element {
    return (
        <Layout title="Presencial" footerDisabled>
            <div className={Styles.container}>
                {props.posts.map((post): JSX.Element => (
                    <div
                        className={Styles.card}
                        key={post.id}
                        data-title={post.title}
                        onClick={() => post.link ? window.open(post.link) : null}
                    >
                        <img
                            src={`http://public.essencialavida.com/images/${post.mainImage}`}
                            width={300}
                            height={452}
                            alt={post.title}
                        />
                        {((Object.keys(post?.description || {}).length > 0) || post.link) && (
                            <Button>Saiba mais</Button>
                        )}
                    </div>
                ))}
            </div>
        </Layout>
    )
}

export async function getStaticProps(context) {
    const response = await fetch(`http://public.essencialavida.com/data/presential_posts.json`)
    const posts: Post[] = await response.json()

    return {
        props: { posts }
    }
}
