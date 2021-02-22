import Styles from './styles.module.scss'

type LinkProps = {
  href: string
  children?: string
}

export default function Link({ href, children }: LinkProps): JSX.Element {
  return (
    <a href={href} className={Styles.link} target="_blank" rel="noreferrer">
      {children}
    </a>
  )
}
