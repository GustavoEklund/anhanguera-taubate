import Styles from './styles.module.scss'
import React from "react";

interface ModalProps {
    title?: React.ReactNode | React.ReactNode[]
    children?: React.ReactNode | React.ReactNode[]
    footer?: React.ReactNode | React.ReactNode[]
    isShowing: boolean
    toggle: () => void
}

export default function Modal({ title, children, footer, isShowing, toggle }: ModalProps): JSX.Element {
    return (
        <div
            aria-modal
            className={[Styles.modalOverlay, Styles[isShowing ? 'modalOpen' : 'modalClosed']].join(' ')}
            onClick={toggle}
        >
            <div
                className={Styles.modalWrapper}
                onClick={(event) => event.stopPropagation()}
            >
                <header>
                    <span>{title}</span>
                    <button type="button" onClick={toggle}>&times;</button>
                </header>
                <main>{children}</main>
                {!footer && (
                    <footer>{footer}</footer>
                )}
            </div>
        </div>
    )
}
