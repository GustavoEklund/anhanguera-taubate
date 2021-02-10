import Image from 'next/image'
import Link from 'next/link'
import Styles from './styles.module.scss'
import Layout from '../components/Layout'

export default function Home(): JSX.Element {
    return (
        <Layout title="Início">
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
                            apenas passam o conhecimento, mas respiram dia a dia a educação. Nossa infraestrutura é
                            moderna e conta com laboratórios completos, com os melhores equipamentos, onde a prática é
                            sentida de verdade. Essa é a Faculdade Anhanguera de Taubaté, formando o melhor de você.
                        </p>
                    </div>
                </div>
                <div className={Styles.rightSide}>
                    <div className={Styles.heroBackgroundShape}>
                        <Image src="/assets/hero_background_shape.png" layout="fill" alt="Hero Shape" />
                    </div>
                    <div className={Styles.heroArt}>
                        <Image src="/assets/hero_art.svg" layout="fill" alt="Hero Art"/>
                    </div>
                </div>
                <footer className={Styles.footer}>
                    <div className={Styles.button}>
                        <div className={[Styles.buttonIcon, Styles.buttonLeftIcon].join(' ')}>
                            <Image
                                src="/assets/door_open_icon.svg"
                                width="64"
                                height="64"
                                alt="Presencial"
                            />
                        </div>
                        <Link href="/">Presencial</Link>
                    </div>
                    <div className={Styles.button}>
                        <div className={[Styles.buttonIcon, Styles.buttonRightIcon].join(' ')}>
                            <Image
                                src="/assets/satellite_icon.svg"
                                width="64"
                                height="64"
                                alt="Presencial"
                            />
                        </div>
                        <Link href="/">Ensino a distância</Link>
                    </div>
                </footer>
            </div>
        </Layout>
    )
}
