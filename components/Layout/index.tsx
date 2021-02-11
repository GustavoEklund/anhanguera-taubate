import React from 'react'
import Head from 'next/head'
import Styles from './styles.module.scss'

type LayoutTypes = {
    title: string
    children: React.ReactNode | React.ReactNode[]
}

export default function Layout({ title, children }: LayoutTypes): JSX.Element {
    return (
        <div className={Styles.main}>
            <Head>
                <meta charSet="utf-8"/>
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                <meta
                    name="viewport"
                    content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0,minimum-scale=1.0, shrink-to-fit=no"
                />
                <title>{['Anhanguera Taubaté', title].join(' - ')}</title>

                <meta name="theme-color" content="#F26724" />
                <meta name="mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon_anhanguera.png" />

                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&family=Yanone+Kaffeesatz:wght@300;400;700&display=swap" rel="stylesheet" />
            </Head>
            {/*<header>header</header>*/}
            <main>{children}</main>
            {/*<footer>footer</footer>*/}
        </div>
    )
}
