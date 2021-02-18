import React from 'react'
import Image from 'next/image'
import Styles from './styles.module.scss'

interface Props
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  photo?: string
  contactTitle: string | string[]
  subtitle: string | string[]
  contact: string | string[]
  link?: string | string[]
}

export default function Contact(props: Props): JSX.Element {
  const { photo, contactTitle, subtitle, link, contact, ...otherProps } = props

  function getSubtitle(sub: string | string[]): JSX.Element[] | string {
    return typeof sub === 'string'
      ? sub
      : sub.map((nameSlice: string) => (
          <React.Fragment key={nameSlice}>
            {nameSlice}
            <br />
          </React.Fragment>
        ))
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
        <h2>
          {typeof contactTitle === 'string'
            ? contactTitle
            : contactTitle.map((title: string) => (
                <React.Fragment key={title}>
                  {title}
                  <br />
                </React.Fragment>
              ))}
        </h2>
        <p>
          {link ? (
            typeof link === 'string' ? (
              <a href={link} target="_blank" rel="noreferrer">
                {getSubtitle(subtitle)}
              </a>
            ) : (
              link?.map((linkSlice: string, key: number) => (
                <a href={linkSlice} key={linkSlice} target="_blank" rel="noreferrer">
                  {getSubtitle(subtitle)[key]}
                </a>
              ))
            )
          ) : (
            <strong>{getSubtitle(subtitle)}</strong>
          )}
        </p>
        <p>
          {typeof contact === 'string'
            ? contact
            : contact.map((contactSlice: string) => (
                <React.Fragment key={contactSlice}>
                  {contactSlice}
                  <br />
                </React.Fragment>
              ))}
        </p>
      </div>
    </div>
  )
}
