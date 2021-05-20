import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import { useRouter } from 'next/router'
import Styles from './styles.module.scss'
import Layout from '@/components/Layout'
import HomeHeroLandingImage from '@/components/HomeHeroLandingImage'
// import Button from '@/components/Button'
// import useModality from '@/hooks/useModality'

type Post = {
  id: string
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
    return { props: { posts, modality } }
  } catch {
    res.statusCode = 404
    return { props: { posts: [] } }
  }
}

// const updatePersonalDataLink =
//   //'https://forms.office.com/Pages/ResponsePage.aspx?id=dnsOpaWOLEm_F5fWUvw86aDgUwsoAJ1NljZS7R7VIdNUMlFCWlBGWEk2WVYwTU0wRktMNUpYSzNSTy4u'
//   'https://docs.google.com/spreadsheets/d/1vf5BaxEM_VQ2WEsShacYw9xL_vwuO10vw2bWBbDLpMU/edit?usp=sharing'
const Index: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = ({
  posts,
  modality
}) => {
  const router = useRouter()
  // const { modality } = useModality()
  const modal = modality
  return (
    <Layout title={modal} footerDisabled>
      <div className={Styles.heroLanding}>
        <div className={Styles.container}>
          {posts.map(
            (post: Post): JSX.Element =>
              post.id === modal ? (
                <div
                  className={Styles.card}
                  key={modal}
                  data-title={post.title}
                  onClick={async (): Promise<void> => {
                    if (!post.link) {
                      return
                    }
                    if (post.link === 'id') {
                      await router.push(`/informacao/${'presential'}`)
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
              ) : (
                <></>
              )
          )}
        </div>
        <div className={Styles.mobileHeroBanner} />
        <HomeHeroLandingImage />
      </div>
      <div className={Styles.container}>
        {posts.map(
          (post: Post): JSX.Element =>
            post.id === modal ? (
              <></>
            ) : (
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
