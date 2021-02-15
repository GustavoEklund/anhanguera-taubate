import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
import Styles from './styles.module.scss'

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    starticon?: React.ReactNode
    variant?: 'default' |  'contained' | 'outlined'
}

export default function Button(props: ButtonProps): JSX.Element {
    const { children, starticon } = props
    return (
        <button {...props} className={[Styles.button, Styles[`${props.variant || 'default'}Button`]].join(' ')}>
            { starticon && <span className={Styles.icon}>{starticon}</span>}
            <span>{children}</span>
        </button>
    )
}
