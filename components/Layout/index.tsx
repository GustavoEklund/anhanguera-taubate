import React from 'react'
import Head from 'next/head'
import Styles from './styles.module.scss'
import Header from '@/components/Header'
import HamburgerMenu from '@/components/HamburgerMenu'
import useWindowSize from '@/hooks/useWindowSize'

type LayoutTypes = {
  title: string
  headerDisabled?: boolean
  footerDisabled?: boolean
  hamburgerMenuDisabled?: boolean
  children: React.ReactNode | React.ReactNode[]
}

export default function Layout({
  title,
  headerDisabled,
  footerDisabled,
  hamburgerMenuDisabled,
  children
}: LayoutTypes): JSX.Element {
  const { windowWidth } = useWindowSize()
  const isDesktopSize = (): boolean => windowWidth > 1000
  return (
    <div className={Styles.main}>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0,minimum-scale=1.0, shrink-to-fit=no"
        />
        <meta
          name="google-site-verification"
          content="C_zEX_8FLw48MoaQCgVv0ZolMXUNS37E1R4beS4JPCs"
        />
        <title>{['Anhanguera Taubaté', title].join(' - ')}</title>

        <meta name="theme-color" content="#F26724" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon_anhanguera.png" />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      {!headerDisabled && <Header />}
      <main>{children}</main>
      {!footerDisabled && <footer>Footer</footer>}
      {!isDesktopSize() && !hamburgerMenuDisabled && <HamburgerMenu />}
    </div>
  )
}
