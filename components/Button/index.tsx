import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
import Styles from './styles.module.scss'

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    starticon?: React.ReactNode
}

export default function Button(props: ButtonProps): JSX.Element {
    const { children, starticon } = props
    return (
        <button {...props} className={Styles.button}>
            { starticon && <span className={Styles.icon}>{starticon}</span>}
            <span>{children}</span>
        </button>
    )
}
