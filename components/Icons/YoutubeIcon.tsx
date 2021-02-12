import React from 'react'

export default function YoutubeIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 18" {...props}>
            <defs/>
            <path d="M22.902 2.816C22.641 1.708 21.87.835 20.89.538 19.116 0 12 0 12 0S4.884 0 3.11.538c-.98.297-1.75 1.17-2.012 2.278C.622 4.826.622 9.018.622 9.018s0 4.193.476 6.202c.261 1.109 1.032 1.945 2.012 2.242C4.884 18 12 18 12 18s7.116 0 8.89-.538c.98-.297 1.75-1.133 2.012-2.242.476-2.01.476-6.202.476-6.202s0-4.192-.476-6.202zM9.672 12.825V5.212l5.948 3.806-5.947 3.807z"/>
        </svg>
    )
}
