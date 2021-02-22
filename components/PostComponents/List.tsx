import Styles from './styles.module.scss'

type ListProps = {
  type: 'ol' | 'ul'
  children: string[]
}

export default function List({ type, children }: ListProps): JSX.Element {
  const getList = (): JSX.Element[] => children.map((item: string) => <li key={item}>{item}</li>)
  if (type === 'ol') return <ol className={Styles.orderedList}>{getList()}</ol>
  if (type === 'ul') return <ul className={Styles.unorderedList}>{getList()}</ul>
  return <></>
}
