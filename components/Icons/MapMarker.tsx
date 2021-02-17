import React from 'react'

export default function MapMarker(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33 44" {...props}>
      <defs />
      <path d="M14.804 43.112C2.318 25.01 0 23.152 0 16.5 0 7.387 7.387 0 16.5 0S33 7.387 33 16.5c0 6.653-2.318 8.51-14.804 26.612a2.063 2.063 0 01-3.392 0zM16.5 23.375a6.875 6.875 0 100-13.75 6.875 6.875 0 000 13.75z" />
    </svg>
  )
}
