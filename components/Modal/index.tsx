import Styles from './styles.module.scss'

export default function Modal(): JSX.Element {
    return (
        <div aria-modal className={Styles.modalOverlay}>
            <div className={Styles.modalWrapper}>
                <header><button>&times;</button></header>
            </div>
        </div>
    )
}
