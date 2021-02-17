import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
import Styles from './styles.module.scss'
import ChangeIcon from '@/components/Icons/ChangeIcon'

interface Props
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  selected: 'distancia' | 'presencial' | undefined
}

export default function ChangeModalityButton(props: Props): JSX.Element {
  function getStatus(checkValue: string): string {
    return props.selected === checkValue ? 'enabled' : 'disabled'
  }

  return (
    <button type="button" className={Styles.changeModalityButton} {...props}>
      <ChangeIcon width={40} height={40} />
      <div>
        <p className={Styles[getStatus('distancia')]}>A distância</p>
        <p className={Styles[getStatus('presencial')]}>Presencial</p>
      </div>
    </button>
  )
}
