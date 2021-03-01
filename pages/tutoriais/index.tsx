import React, { ReactElement } from 'react'
import { GetStaticProps, NextPage } from 'next'
import gfm from 'remark-gfm'
import externalLinks from 'remark-external-links'
import ReactMarkdown from 'react-markdown'
import Styles from './styles.module.scss'
import Layout from '@/components/Layout'
import useModality from '@/hooks/useModality'
import AccordionDropDown from '@/components/AccordionDropDown'

function flatten(text: any, child: any): any {
  return typeof child === 'string'
    ? text + child
    : React.Children.toArray(child.props.children).reduce(flatten, text)
}

type HeadingRendererProps = {
  children: ReactElement
  level: '1' | '2' | '3' | '4' | '5' | '6'
}

function HeadingRenderer(props: HeadingRendererProps): ReactElement {
  const children = React.Children.toArray(props.children)
  const text = children.reduce(flatten, '')
  const slug = text
    .toLowerCase()
    .replace(/\s[—-]\s/g, '-')
    .replace(/\W/g, '-')
  return React.createElement('h' + props.level, { id: slug }, props.children)
}

export const getStaticProps: GetStaticProps = async () => {
  const baseUrl = 'https://public.essencialavida.com/data'
  const response = await fetch(`${baseUrl}/presential_tutorial.md`)
  const tutorial = await response.text()

  return {
    props: { tutorial },
    revalidate: 1800
  }
}

type Props = {
  tutorial: string
}

const Tutoriais: NextPage<Props> = ({ tutorial }: Props) => {
  const { modality } = useModality()

  return (
    <Layout title="Tutoriais" footerDisabled>
      {modality === 'presencial' && (
        <div className={Styles.tutorialsWrapper}>
          <aside className={Styles.sideMenu}>
            <AccordionDropDown startOpen title="01 - Primeiros passos">
              <a href="#01-1-acesso-ao-portal-do-aluno" className={Styles.dropDownItem}>
                01.1 - Acesso ao portal do aluno
              </a>
              <a href="#01-2-primeiros-passos-no-portal-do-aluno" className={Styles.dropDownItem}>
                01.2 - Primeiros passos no Portal do Aluno
              </a>
            </AccordionDropDown>
            <AccordionDropDown title="02 - Aulas online ao vivo">
              <a href="#02-1-como-assistir-aulas-online-ao-vivo" className={Styles.dropDownItem}>
                02.1 - Como assistir aulas online ao vivo
              </a>
              <a
                href="#02-2-solu--es-de-problemas-em-aulas-online-ao-vivo"
                className={Styles.dropDownItem}
              >
                02.2 - Soluções de problemas em aulas online ao vivo
              </a>
            </AccordionDropDown>
          </aside>
          <div className={Styles.containerWrapper}>
            <div className={Styles.container}>
              <div className={Styles.titleWrapper}>
                <h1>Tutoriais presencial</h1>
              </div>
            </div>
            <div className={Styles.container} style={{ marginTop: 0 }}>
              <div className={Styles.tutorial}>
                <iframe
                  src="https://www.youtube.com/embed/XKFQJgYc_gk"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="01.1 - Acesso ao portal do aluno"
                />
                <figcaption>01.1 - Acesso ao portal do aluno</figcaption>
              </div>
            </div>
            <ReactMarkdown
              className={Styles.markdownContent}
              plugins={[gfm, [externalLinks, { target: '_blank', rel: 'noreferrer' }]]}
              renderers={{ heading: HeadingRenderer }}
            >
              {tutorial}
            </ReactMarkdown>
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

export default Tutoriais
