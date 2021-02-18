import Styles from './styles.module.scss'
import Layout from '@/components/Layout'
import useModality from '@/hooks/useModality'

export default function Tutoriais(): JSX.Element {
  const { modality } = useModality()

  return (
    <Layout title="Tutoriais" footerDisabled>
      {modality === 'presencial' && (
        <div className={Styles.container}>
          <div className={Styles.titleWrapper}>
            <h1>Tutoriais presencial</h1>
          </div>
          <div className={Styles.tutorial}>
            <iframe
              src="https://www.youtube.com/embed/XKFQJgYc_gk"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Acesso ao portal do aluno"
            />
            <figcaption>Tutorial de acesso ao portal do aluno</figcaption>
          </div>
        </div>
      )}
      {modality === 'distancia' && (
        <div className={Styles.container}>
          <div className={Styles.titleWrapper}>
            <h1>Tutoriais semi presencial e 100% web</h1>
          </div>
        </div>
      )}
    </Layout>
  )
}
