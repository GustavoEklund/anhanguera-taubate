import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
import Styles from './styles.module.scss'

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    startIcon?: React.ReactNode
}

export default function Button(props: ButtonProps): JSX.Element {
    const { children, startIcon } = props
    return (
        <button {...props} className={Styles.button}>
            { startIcon && <span className={Styles.icon}>{startIcon}</span>}
            <span>{children}</span>
        </button>
    )
}
