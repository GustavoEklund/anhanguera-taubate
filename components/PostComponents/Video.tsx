import Styles from './styles.module.scss'

type VideoProps = {
  title?: string
  videoId: string
}

export default function Video({ title, videoId }: VideoProps): JSX.Element {
  return (
    <div className={Styles.video}>
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title={title || 'Video'}
      />
    </div>
  )
}
