import { useState } from 'react'
import Styles from './styles.module.scss'
import ExpandIcon from '@/components/Icons/ExpandIcon'
import TimesIcon from '@/components/Icons/TimesIcon'

type ImageProps = {
  src: string
  title?: string
}

export default function Image({ src, title }: ImageProps): JSX.Element {
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false)

  function handleFullScreen(): void {
    setIsFullScreen(true)
  }

  function handleExitFullScreen(): void {
    setIsFullScreen(false)
  }

  return (
    <figure className={Styles.imageWrapper}>
      <img
        src={src}
        className={[Styles.image, Styles[isFullScreen ? 'imageFullScreen' : 'imageNormal']].join(
          ' '
        )}
        alt={title || 'Imagem'}
        title={title || 'Imagem'}
        tabIndex={-1}
      />
      <button onClick={handleFullScreen}>
        <ExpandIcon />
      </button>
      <div className={Styles.imageBackground} />
      <figcaption>{title || 'Imagem'}</figcaption>
      <div
        className={[
          Styles.imageOverlay,
          Styles[isFullScreen ? 'imageOverlayShowing' : 'imageOverlayNormal']
        ].join(' ')}
        onClick={handleExitFullScreen}
      >
        <header>
          <span>{title || 'Imagem'}</span>
          <button className={Styles.closeIcon}>
            <TimesIcon />
          </button>
        </header>
      </div>
    </figure>
  )
}
