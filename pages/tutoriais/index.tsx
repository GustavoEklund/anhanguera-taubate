import React from 'react'
import Styles from './styles.module.scss'
import Layout from '@/components/Layout'
import useModality from '@/hooks/useModality'
import AccordionDropDown from '@/components/AccordionDropDown'

export default function Tutoriais(): JSX.Element {
  const { modality } = useModality()

  return (
    <Layout title="Tutoriais" footerDisabled>
      {modality === 'presencial' && (
        <div className={Styles.tutorialsWrapper}>
          <aside className={Styles.sideMenu}>
            <AccordionDropDown startOpen title="01 - Primeiros passos">
              {[
                <a key={1} href="#primeiros_passos" className={Styles.dropDownItem}>
                  01.1 - Acesso ao portal do aluno
                </a>
              ]}
            </AccordionDropDown>
          </aside>
          <div className={Styles.containerWrapper}>
            <div className={Styles.container}>
              <div className={Styles.titleWrapper}>
                <h1>Tutoriais presencial</h1>
              </div>
              <div className={Styles.titleWrapper} id="primeiros_passos">
                <h2>01 - Primeiros Passos</h2>
              </div>
              <div className={Styles.tutorial}>
                <iframe
                  src="https://www.youtube.com/embed/XKFQJgYc_gk"
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Acesso ao portal do aluno"
                />
                <figcaption>01 - Tutorial de acesso ao portal do aluno</figcaption>
              </div>
            </div>
          </div>
        </div>
      )}
      {modality === 'distancia' && (
        <div className={Styles.tutorialsWrapper}>
          <aside className={Styles.sideMenu}>
            <AccordionDropDown startOpen title="01 - Primeiros passos">
              {[<React.Fragment key={1} />]}
            </AccordionDropDown>
          </aside>
          <div className={Styles.containerWrapper}>
            <div className={Styles.container}>
              <div className={Styles.titleWrapper}>
                <h1>Tutoriais semi presencial e 100% web</h1>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  )
}
