import Image from 'next/image'
import Styles from './styles.module.scss'
import Button from '@/components/Button'
import TelegramIcon from '@/components/Icons/TelegramIcon'
import InstagramIcon from "@/components/Icons/InstagramIcon";
import FacebookIcon from "@/components/Icons/FacebookIcon";
import WhatsAppIcon from "@/components/Icons/WhatsAppIcon";
import ChangeModalityButton from '@/components/ChangeModalityButton'

export default function Header(): JSX.Element {
    return (
        <header className={Styles.header}>
            <nav>
                <Image
                    src="/assets/anhanguera_logo_alt.svg"
                    height={40}
                    width={140}
                />
                <div className={Styles.buttonsWrapper}>
                    <Button starticon={<Image src="/assets/bell_icon.svg" height={20} width={20} alt="Importante" />}>
                        Importante
                    </Button>
                    <Button starticon={<Image src="/assets/youtube_icon.svg" height={20} width={20} alt="Tutoriais"/>}>
                        Tutoriais
                    </Button>
                    <Button starticon={<Image src="/assets/envelope_icon.svg" height={20} width={20} alt="Contatos"/>}>
                        Contatos
                    </Button>
                </div>
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
                <ChangeModalityButton selected="presential" />
            </nav>
        </header>
    )
}
