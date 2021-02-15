import Image from 'next/image'
import Link from 'next/link'
import Styles from './styles.module.scss'
import Layout from '@/components/Layout'

export default function Landing(): JSX.Element {
    return (
        <Layout title="Início" headerDisabled footerDisabled>
            <div className={Styles.heroWrapper}>
                <div className={Styles.leftSide}>
                    <div className={Styles.logo}>
                        <Image
                            src="/assets/anhanguera_logo.svg"
                            layout="fill"
                            alt="Logo Anhanguera"
                            className={Styles.logoAnhanguera}
                        />
                    </div>
                    <div className={Styles.heroText}>
                        <p>
                            Desde 2006, realizamos sonhos e formamos pessoas melhores e capazes. Nossos professores não
                            se limitam a passar o conhecimento, mas respiram dia a dia a educação. Nossa infraestrutura
                            é moderna e conta com laboratórios completos, com os melhores equipamentos, onde a prática é
                            sentida de verdade. Essa é a Faculdade Anhanguera de Taubaté, formando o melhor de você.
                        </p>
                    </div>
                    <div className={Styles.footerTitle}>
                        <h1>Escolha sua modalidade</h1>
                    </div>
                    <footer className={Styles.footer}>

                        <div className={Styles.button}>
                            <div className={[Styles.buttonIcon, Styles.buttonLeftIcon].join(' ')}>
                                <Image
                                    src="/assets/door_open_icon.svg"
                                    width="48"
                                    height="48"
                                    alt="Presencial"
                                />
                            </div>
                            <Link href="/inicio?modalidade=presencial">Presencial</Link>
                        </div>
                        <div className={Styles.button}>
                            <div className={[Styles.buttonIcon, Styles.buttonRightIcon].join(' ')}>
                                <Image
                                    src="/assets/satellite_icon.svg"
                                    width="48"
                                    height="48"
                                    alt="Presencial"
                                />
                            </div>
                            <Link href="/inicio?modalidade=distancia">SEMI ou 100% WEB</Link>
                        </div>
                        <button type="button" className={Styles.location}>
                            <Image
                                src="/assets/map_marker.svg"
                                width="24"
                                height="24"
                                alt="Presencial"
                            />
                            <span>Nossa localização</span>
                        </button>
                    </footer>
                </div>
                <div className={Styles.rightSide}>
                    <div className={Styles.heroImage}>
                        <Image src="/assets/hero_image.svg" layout="fill" alt="Hero Shape" />
                    </div>
                </div>
            </div>
        </Layout>
    )
}
