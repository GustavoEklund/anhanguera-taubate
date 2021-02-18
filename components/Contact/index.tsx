import React from 'react'
import Image from 'next/image'
import Styles from './styles.module.scss'

interface Props
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  photo?: string
  contactTitle: string | string[]
  subtitle: string | string[]
  contact: string | string[]
}

export default function Contact(props: Props): JSX.Element {
  const { photo, contactTitle, subtitle, contact, ...otherProps } = props
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
          <strong>
            {typeof subtitle === 'string'
              ? subtitle
              : subtitle.map((nameSlice: string) => (
                  <React.Fragment key={nameSlice}>
                    {nameSlice}
                    <br />
                  </React.Fragment>
                ))}
          </strong>
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
