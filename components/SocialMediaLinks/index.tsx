import Styles from './styles.module.scss'
import InstagramIcon from '@/components/Icons/InstagramIcon'
import FacebookIcon from '@/components/Icons/FacebookIcon'
import WhatsAppIcon from '@/components/Icons/WhatsAppIcon'
import TelegramIcon from '@/components/Icons/TelegramIcon'

export default function SocialMediaLinks(): JSX.Element {
    return (
        <div className={Styles.socialMediaWrapper}>
            <a
                href="https://www.instagram.com/anhanguera_taubate/"
                rel="noreferrer"
                target="_blank"
            >
                <InstagramIcon />
            </a>
            <a
                href="https://www.facebook.com/faculdadeanhangueradetaubate/"
                rel="noreferrer"
                target="_blank"
            >
                <FacebookIcon />
            </a>
            <a
                href="https://api.whatsapp.com/send/?phone=551236344146"
                rel="noreferrer"
                target="_blank"
            >
                <WhatsAppIcon />
            </a>
            <a
                href="https://api.whatsapp.com/send/?phone=551236344146"
                rel="noreferrer"
                target="_blank"
            >
                <TelegramIcon />
            </a>
        </div>
    )
}
