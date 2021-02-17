import Styles from './styles.module.scss'
import BarsIcon from '@/components/Icons/BarsIcon'
import { useState } from 'react'
import BellIcon from '@/components/Icons/BellIcon'
import YoutubeIcon from '@/components/Icons/YoutubeIcon'
import EnvelopeIcon from '@/components/Icons/EnvelopeIcon'
import SocialMediaLinks from '@/components/SocialMediaLinks'

export default function HamburgerMenu(): JSX.Element {
  const [isShowing, setIsShowing] = useState<boolean>(false)

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
        <li>
          <span>Importante</span>
          <BellIcon width={20} height={20} fill="#333" />
        </li>
        <li>
          <span>Tutoriais</span>
          <YoutubeIcon width={20} height={20} fill="#333" />
        </li>
        <li>
          <span>Contatos</span>
          <EnvelopeIcon width={20} height={20} fill="#333" />
        </li>
      </ul>
      <button className={Styles.hamburgerButton} onClick={handleToggle}>
        <BarsIcon />
      </button>
    </>
  )
}
