import React from 'react'
import Image from 'next/image'
import Styles from './styles.module.scss'

type StringArray = string | string[]

interface Props
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  photo?: string
  contactTitle: StringArray
  subtitle: StringArray
  subtitleLink?: StringArray
  contact: StringArray
  contactLink?: StringArray
}

export default function Contact(props: Props): JSX.Element {
  const { photo, contactTitle, subtitle, subtitleLink, contact, contactLink, ...otherProps } = props

  function getLink(text: JSX.Element, link: string): JSX.Element {
    return link ? (
      <a href={link} target="_blank" rel="noreferrer">
        {text}
      </a>
    ) : (
      <>{text}</>
    )
  }

  function getArrayOfLinks(titles: JSX.Element[], links: StringArray): JSX.Element[] {
    return typeof links === 'string'
      ? [getLink(titles[0], links)]
      : links.map((link: string, key: number) => getLink(titles[key] || <></>, link))
  }

  function stringsToElementArray(strings: string | string[]): JSX.Element[] {
    return typeof strings === 'string'
      ? [
          <React.Fragment key={0}>
            {strings}
            <br />
          </React.Fragment>
        ]
      : strings.map((subtitleSlice: string) => (
          <React.Fragment key={subtitleSlice}>
            {subtitleSlice}
            <br />
          </React.Fragment>
        ))
  }

  function dynamicAddLink(titles: StringArray, links?: StringArray): JSX.Element[] {
    const elementArray = stringsToElementArray(titles)
    return links ? getArrayOfLinks(elementArray, links || '') : elementArray
  }

  return (
    <div className={Styles.contactWrapper} {...otherProps}>
      <div className={Styles.contactPhoto}>
        <Image
          src={photo ? `/images/${photo}` : '/assets/user.png'}
          width={64}
          height={64}
          alt={typeof subtitle === 'string' ? subtitle : [...subtitle].join(' ')}
        />
      </div>
      <div className={Styles.contactDetails}>
        <h2>{stringsToElementArray(contactTitle)}</h2>
        <p>
          <strong>{dynamicAddLink(subtitle, subtitleLink)}</strong>
        </p>
        <br />
        <p>{dynamicAddLink(contact, contactLink)}</p>
      </div>
    </div>
  )
}
