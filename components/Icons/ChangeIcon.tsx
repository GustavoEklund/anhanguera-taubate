import React from 'react'

export default function ChangeIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 38" {...props}>
            <defs/>
            <path d="M48 10.75v-1.5C48 8.00735 46.9927 7 45.75 7H12V2.5C12 .496844 9.57197-.503937 8.15897.90897l-7.500004 7.5c-.878624.87872-.878624 2.30333 0 3.18193l7.500004 7.5C9.56662 20.4983 12 19.5115 12 17.5V13h33.75c1.2427 0 2.25-1.0073 2.25-2.25zM2.25 25H36v-4.5c0-1.9982 2.4246-3.0075 3.841-1.591l7.5 7.5c.8787.8787.8787 2.3033 0 3.1819l-7.5 7.5C38.4322 38.4997 36 37.5097 36 35.5V31H2.25C1.00734 31 0 29.9927 0 28.75v-1.5C0 26.0073 1.00734 25 2.25 25z"/>
        </svg>
    )
}