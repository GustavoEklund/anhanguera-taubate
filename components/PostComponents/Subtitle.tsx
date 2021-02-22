import Styles from './styles.module.scss'

type SubtitleProps = {
  children: string
}

export default function Subtitle({ children }: SubtitleProps): JSX.Element {
  return <h3 className={Styles.subtitle}>{children}</h3>
}
