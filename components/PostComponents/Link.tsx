import Styles from './styles.module.scss'

type LinkProps = {
  href: string
  children?: string
}

export default function Link({ href, children }: LinkProps): JSX.Element {
  return (
    <a
      href={href}
      className={Styles.link}
      target={href.charAt(0) === '/' ? '_self' : '_blank'}
      rel="noreferrer"
    >
      {children}
    </a>
  )
}
