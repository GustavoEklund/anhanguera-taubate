import React, { useState } from 'react'
import Styles from './styles.module.scss'

interface Props {
  startOpen?: boolean
  title: string
  children?: React.ReactNode[]
}

export default function AccordionDropDown({ startOpen, title, children }: Props): JSX.Element {
  const [isDropDownOpen, setIsDropDownOpen] = useState<boolean>(startOpen || false)

  function handleToggleDropDown(): void {
    setIsDropDownOpen(!isDropDownOpen)
  }

  return (
    <div
      className={[Styles.dropDown, Styles[isDropDownOpen ? 'dropDownOpen' : 'dropDownClosed']].join(
        ' '
      )}
      style={{
        height: isDropDownOpen ? `${((children?.length || 0) + 1) * 3}rem` : `3rem`
      }}
    >
      <span className={Styles.dropDownTitle} onClick={handleToggleDropDown}>
        {title}
      </span>
      {children}
    </div>
  )
}
