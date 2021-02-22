import Styles from './styles.module.scss'

type TitleProps = {
  children: string
}

export default function Title({ children }: TitleProps): JSX.Element {
  return <h2 className={Styles.title}>{children}</h2>
}
