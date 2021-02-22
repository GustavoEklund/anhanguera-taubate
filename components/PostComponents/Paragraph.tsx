import Styles from './styles.module.scss'

type ParagraphProps = {
  children: string
}

export default function Paragraph({ children }: ParagraphProps): JSX.Element {
  return <p className={Styles.paragraph}>{children}</p>
}
