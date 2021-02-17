import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
import Styles from './styles.module.scss'

interface ButtonProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  starticon?: React.ReactNode
  endicon?: React.ReactNode
  variant?: 'default' | 'contained' | 'outlined'
}

export default function Button(props: ButtonProps): JSX.Element {
  const { children, starticon, endicon, ...otherProps } = props
  return (
    <button
      {...otherProps}
      className={[Styles.button, Styles[`${props.variant || 'default'}Button`]].join(' ')}
    >
      {starticon && <span className={Styles.startIcon}>{starticon}</span>}
      <span>{children}</span>
      {endicon && <span className={Styles.endIcon}>{endicon}</span>}
    </button>
  )
}
