import { AppProps } from 'next/app'
import './reset.css'

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />
}
