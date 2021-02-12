import Image from 'next/image'
import { useRouter } from 'next/router'
import Styles from './styles.module.scss'
import Button from '@/components/Button'
import ChangeModalityButton from '@/components/ChangeModalityButton'
import SocialMediaLinks from '@/components/SocialMediaLinks'

export default function Header(): JSX.Element {
    const router = useRouter()
    const modality = router.query?.modalidade === 'presencial' ? 'presential' : 'distance'

    async function handleChangeModality(): Promise<void> {
        const link = modality === 'presential' ? 'distancia' : 'presencial'
        await router.push(`/home?modalidade=${link}`)
    }

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
                <SocialMediaLinks />
                <ChangeModalityButton selected={modality} onClick={handleChangeModality} />
            </nav>
        </header>
    )
}
