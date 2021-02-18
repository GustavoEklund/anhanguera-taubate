import { useState } from 'react'
import { useRouter } from 'next/router'
import Styles from './styles.module.scss'
import BarsIcon from '@/components/Icons/BarsIcon'
import BellIcon from '@/components/Icons/BellIcon'
import YoutubeIcon from '@/components/Icons/YoutubeIcon'
import EnvelopeIcon from '@/components/Icons/EnvelopeIcon'
import SocialMediaLinks from '@/components/SocialMediaLinks'
import useModality from '@/hooks/useModality'

export default function HamburgerMenu(): JSX.Element {
  const router = useRouter()
  const [isShowing, setIsShowing] = useState<boolean>(false)
  const { modality } = useModality()

  function handleToggle(): void {
    setIsShowing((prevState) => !prevState)
  }

  function getMenuState(): 'menuOpen' | 'menuClosed' {
    return isShowing ? 'menuOpen' : 'menuClosed'
  }

  return (
    <>
      <div className={[Styles.menuOverlay, Styles[getMenuState()]].join(' ')} />
      <SocialMediaLinks className={[Styles.menuMediaLinks, Styles[getMenuState()]].join(' ')} />
      <ul className={[Styles.menuItems, Styles[getMenuState()]].join(' ')}>
        <li onClick={() => router.push(`/inicio?modalidade=${modality}`)} tabIndex={-1}>
          <span>Importante</span>
          <BellIcon width={20} height={20} fill="#333" />
        </li>
        <li onClick={() => router.push(`/tutoriais?modalidade=${modality}`)} tabIndex={-1}>
          <span>Tutoriais</span>
          <YoutubeIcon width={20} height={20} fill="#333" />
        </li>
        <li onClick={() => router.push(`/contatos?modalidade=${modality}`)} tabIndex={-1}>
          <span>Contatos</span>
          <EnvelopeIcon width={20} height={20} fill="#333" />
        </li>
      </ul>
      <button className={Styles.hamburgerButton} onClick={handleToggle} title="Menu">
        <BarsIcon />
      </button>
    </>
  )
}
