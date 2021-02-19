import Styles from './styles.module.scss'

type ImageProps = {
  src: string
  title?: string
}

export default function Image({ src, title }: ImageProps): JSX.Element {
  return <img src={src} className={Styles.image} alt={title || 'Imagem'} />
}
