import Link from 'next/link'
import Styles from './styles.module.scss'
import Layout from '@/components/Layout'
import useWindowSize from '@/hooks/useWindowSize'
import HeroImage from '@/components/HeroImage'
import SatelliteIcon from '@/components/Icons/SatelliteIcon'
import MapMarker from '@/components/Icons/MapMarker'
import DoorOpenIcon from '@/components/Icons/DoorOpenIcon'
import AnhangueraSquareLogo from '@/components/Icons/AnhangueraSquareLogo'

export default function Landing(): JSX.Element {
    const { windowWidth } = useWindowSize()
    const isDesktopWindowSize = (): boolean => windowWidth > 1000

    return (
        <Layout title="Início" headerDisabled footerDisabled>
            <div className={Styles.heroWrapper}>
                <div className={Styles.leftSide}>
                    <div className={Styles.logo}>
                        <AnhangueraSquareLogo className={Styles.logoAnhanguera} />
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
                                <DoorOpenIcon />
                            </div>
                            <Link href="/inicio?modalidade=presencial">Presencial</Link>
                        </div>
                        <div className={Styles.button}>
                            <div className={[Styles.buttonIcon, Styles.buttonRightIcon].join(' ')}>
                                <SatelliteIcon />
                            </div>
                            <Link href="/inicio?modalidade=distancia">SEMI ou 100% WEB</Link>
                        </div>
                        <button type="button" className={Styles.location}>
                            <MapMarker />
                            <span>Nossa localização</span>
                        </button>
                    </footer>
                </div>
                {isDesktopWindowSize() && (
                    <div className={Styles.rightSide}>
                        <div className={Styles.heroImage}>
                            <HeroImage />
                        </div>
                    </div>
                )}
            </div>
        </Layout>
    )
}
