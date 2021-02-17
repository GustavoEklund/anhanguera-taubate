import Link from 'next/link'
import Styles from './styles.module.scss'
import Layout from '@/components/Layout'
import useWindowSize from '@/hooks/useWindowSize'
import HeroImage from '@/components/HeroImage'
import SatelliteIcon from '@/components/Icons/SatelliteIcon'
import MapMarker from '@/components/Icons/MapMarker'
import DoorOpenIcon from '@/components/Icons/DoorOpenIcon'
import AnhangueraSquareLogo from '@/components/Icons/AnhangueraSquareLogo'
import HeroCornerShape from '@/components/HeroCornerShape'
import SocialMediaLinks from '@/components/SocialMediaLinks'
import Button from '@/components/Button'
import Modal from '@/components/Modal'
import useModal from '@/hooks/useModal'

export default function Landing(): JSX.Element {
  const { windowWidth } = useWindowSize()
  const [isShowingModal, toggleModal] = useModal()
  const isDesktopWindowSize = (): boolean => windowWidth > 1000

  return (
    <Layout title="Início" headerDisabled footerDisabled>
      <div className={Styles.heroWrapper}>
        <div className={Styles.leftSide}>
          <div className={Styles.logoHeader}>
            <AnhangueraSquareLogo className={Styles.logo} />
            {!isDesktopWindowSize() && <HeroCornerShape className={Styles.heroCornerShape} />}
          </div>
          <div className={Styles.heroText}>
            <p>
              Desde 2006, realizamos sonhos e formamos pessoas melhores e capazes. Nossos
              professores não se limitam a passar o conhecimento, mas respiram dia a dia a educação.
              Nossa infraestrutura é moderna e conta com laboratórios completos, com os melhores
              equipamentos, onde a prática é sentida de verdade. Essa é a Faculdade Anhanguera de
              Taubaté, formando o melhor de você.
            </p>
          </div>
          {!isDesktopWindowSize() && (
            <div className={Styles.location}>
              <SocialMediaLinks />
              <Button starticon={<MapMarker />} onClick={toggleModal}>
                Nossa localização
              </Button>
            </div>
          )}
          <div className={Styles.footerTitle}>
            <h1>Escolha sua modalidade</h1>
          </div>
          <footer className={Styles.footer}>
            {isDesktopWindowSize() && (
              <div className={Styles.location}>
                <SocialMediaLinks />
                <Button starticon={<MapMarker />} onClick={toggleModal}>
                  Nossa localização
                </Button>
              </div>
            )}
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
              <Link href="/inicio?modalidade=distancia">SEMI/100% WEB</Link>
            </div>
          </footer>
        </div>
        {isDesktopWindowSize() && (
          <div className={Styles.rightSide}>
            <div className={Styles.heroImage}>
              <HeroImage />
            </div>
          </div>
        )}
        <Modal
          isShowing={isShowingModal}
          toggle={toggleModal}
          title="Localização da Faculdade Anhanguera de Taubaté"
        >
          <div className={Styles.mapWrapper}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1835.978429168541!2d-45.57337711640215!3d-23.025356198118967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ccf90761a2a5cb%3A0xa734b5e1da168ef9!2sAnhanguera%20Educacional!5e0!3m2!1spt-BR!2sbr!4v1613481641193!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen
              title="Mapa"
              aria-hidden="false"
              tabIndex={0}
            />
          </div>
        </Modal>
      </div>
    </Layout>
  )
}
