import Link from 'next/link'
import { useRouter } from 'next/router'
import Styles from './styles.module.scss'
import Button from '@/components/Button'
import ChangeModalityButton from '@/components/ChangeModalityButton'
import SocialMediaLinks from '@/components/SocialMediaLinks'
import BellIcon from '@/components/Icons/BellIcon'
import YoutubeIcon from '@/components/Icons/YoutubeIcon'
import EnvelopeIcon from '@/components/Icons/EnvelopeIcon'
import AnhangueraRectLogo from '@/components/Icons/AnhangueraRectLogo'
import useWindowSize from '@/hooks/useWindowSize'
import useModality from '@/hooks/useModality'

export default function Header(): JSX.Element {
  const router = useRouter()
  const { windowWidth } = useWindowSize()
  const { modality, handleToggleModality } = useModality()

  const isDesktopSize = (): boolean => windowWidth > 1000

  return (
    <header className={Styles.header}>
      <nav>
        <Link href="/">
          <AnhangueraRectLogo height={40} width={140} style={{ cursor: 'pointer' }} />
        </Link>
        {isDesktopSize() && (
          <>
            <div className={Styles.buttonsWrapper}>
              <Button
                className={router.pathname === '/inicio' ? Styles.buttonActive : ''}
                starticon={<BellIcon />}
                onClick={() => router.push(`/inicio?modalidade=${modality}`)}
              >
                Importante
              </Button>
              <Button
                starticon={<YoutubeIcon />}
                onClick={() => router.push(`/inicio?modalidade=${modality}`)}
              >
                Tutoriais
              </Button>
              <Button
                className={router.pathname === '/contatos' ? Styles.buttonActive : ''}
                starticon={<EnvelopeIcon />}
                onClick={() => router.push(`/contatos?modalidade=${modality}`)}
              >
                Contatos
              </Button>
            </div>
            <SocialMediaLinks />
          </>
        )}
        {router.query?.modalidade && (
          <ChangeModalityButton selected={modality} onClick={handleToggleModality} />
        )}
      </nav>
    </header>
  )
}
