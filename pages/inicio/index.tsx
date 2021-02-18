import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import { useRouter } from 'next/router'
import Styles from './styles.module.scss'
import Layout from '@/components/Layout'
import HomeHeroLandingImage from '@/components/HomeHeroLandingImage'
import Button from '@/components/Button'

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

const updatePersonalDataLink =
  'https://forms.office.com/Pages/ResponsePage.aspx?id=dnsOpaWOLEm_F5fWUvw86aDgUwsoAJ1NljZS7R7VIdNUMlFCWlBGWEk2WVYwTU0wRktMNUpYSzNSTy4u'

const Index: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = ({ posts }) => {
  const router = useRouter()

  return (
    <Layout title="Presencial" footerDisabled>
      <div className={Styles.heroLanding}>
        <div className={Styles.container}>
          <div className={Styles.heroCard}>
            <h1>Fique Atento</h1>
            <h2>Atualize seus dados</h2>
            <p>
              <strong>Evite problemas, informe seus dados para atualização.</strong>
            </p>
            <Button variant="contained" onClick={() => window.open(updatePersonalDataLink)}>
              Atualize
            </Button>
          </div>
        </div>
        <div className={Styles.mobileHeroBanner} />
        <HomeHeroLandingImage />
      </div>
      <div className={Styles.container}>
        {posts.map(
          (post: Post): JSX.Element => (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
            <div
              className={Styles.card}
              key={post.id}
              data-title={post.title}
              onClick={async (): Promise<void> => {
                if (!post.link) {
                  return
                }
                if (post.link === 'id') {
                  await router.push(`/informacao/${post.id}`)
                  return
                }
                if (post.link.substr(0, 1) === '/') {
                  await router.push(post.link)
                  return
                }
                window.open(post.link)
              }}
            >
              <div
                className={Styles.imageWrapper}
                style={{
                  backgroundImage: `url(http://public.essencialavida.com/images/${post.mainImage})`
                }}
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
          )
        )}
      </div>
    </Layout>
  )
}

export default Index
