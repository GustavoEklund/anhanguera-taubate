import Link from 'next/link'
import { useRouter } from 'next/router'
import Styles from './styles.module.scss'
import Button from '@/components/Button'
import ChangeModalityButton from '@/components/ChangeModalityButton'
import SocialMediaLinks from '@/components/SocialMediaLinks'
import BellIcon from '@/components/Icons/BellIcon'
import YoutubeIcon from '@/components/Icons/YoutubeIcon'
import EnvelopeIcon from '@/components/Icons/EnvelopeIcon'
import AnhangueraRectLogo from '@/components/Icons/AnhangueraRectLogo'
import useWindowSize from '@/hooks/useWindowSize'

export default function Header(): JSX.Element {
    const router = useRouter()
    const modality = router.query?.modalidade === 'presencial' ? 'presential' : 'distance'
    const { windowWidth } = useWindowSize()

    const isDesktopSize = (): boolean => windowWidth > 1000

    async function handleChangeModality(): Promise<void> {
        const link = modality === 'presential' ? 'distancia' : 'presencial'
        await router.push(`/inicio?modalidade=${link}`)
    }

    return (
        <header className={Styles.header}>
            <nav>
                <Link href="/">
                    <AnhangueraRectLogo
                        height={40}
                        width={140}
                        style={{ cursor: 'pointer' }}
                    />
                </Link>
                {isDesktopSize() && (
                    <>
                        <div className={Styles.buttonsWrapper}>
                            <Button starticon={<BellIcon />}>
                                Importante
                            </Button>
                            <Button starticon={<YoutubeIcon />}>
                                Tutoriais
                            </Button>
                            <Button starticon={<EnvelopeIcon />}>
                                Contatos
                            </Button>
                        </div>
                        <SocialMediaLinks />
                    </>
                )}
                <ChangeModalityButton selected={modality} onClick={handleChangeModality} />
            </nav>
        </header>
    )
}
