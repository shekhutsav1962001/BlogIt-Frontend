import React from 'react'
import "../styles/Splash.css"
function Splash() {
    return (
        <div className="splash">
            <svg id="name" width="428" height="150" viewBox="0 0 428 150" fill="none" xmlns="http://www.w3.org/2000/svg">

                <path
                    d="M52.344 57.304C55.992 57.88 59.304 59.368 62.28 61.768C65.352 64.168 67.752 67.144 69.48 70.696C71.304 74.248 72.216 78.04 72.216 82.072C72.216 87.16 70.92 91.768 68.328 95.896C65.736 99.928 61.944 103.144 56.952 105.544C52.056 107.848 46.248 109 39.528 109H2.08801V8.632H38.088C44.904 8.632 50.712 9.784 55.512 12.088C60.312 14.296 63.912 17.32 66.312 21.16C68.712 25 69.912 29.32 69.912 34.12C69.912 40.072 68.28 45.016 65.016 48.952C61.848 52.792 57.624 55.576 52.344 57.304ZM15.192 51.976H37.224C43.368 51.976 48.12 50.536 51.48 47.656C54.84 44.776 56.52 40.792 56.52 35.704C56.52 30.616 54.84 26.632 51.48 23.752C48.12 20.872 43.272 19.432 36.936 19.432H15.192V51.976ZM38.376 98.2C44.904 98.2 49.992 96.664 53.64 93.592C57.288 90.52 59.112 86.248 59.112 80.776C59.112 75.208 57.192 70.84 53.352 67.672C49.512 64.408 44.376 62.776 37.944 62.776H15.192V98.2H38.376Z"
                    stroke="white" strokeWidth="4" mask="url(#path-1-outside-1)" />
                <path d="M103.505 2.44V109H90.4005V2.44H103.505Z" stroke="white" strokeWidth="4"
                    mask="url(#path-1-outside-1)" />
                <path
                    d="M160.254 110.296C152.862 110.296 146.142 108.616 140.094 105.256C134.142 101.896 129.438 97.144 125.982 91C122.622 84.76 120.942 77.56 120.942 69.4C120.942 61.336 122.67 54.232 126.126 48.088C129.678 41.848 134.478 37.096 140.526 33.832C146.574 30.472 153.342 28.792 160.83 28.792C168.318 28.792 175.086 30.472 181.134 33.832C187.182 37.096 191.934 41.8 195.39 47.944C198.942 54.088 200.718 61.24 200.718 69.4C200.718 77.56 198.894 84.76 195.246 91C191.694 97.144 186.846 101.896 180.702 105.256C174.558 108.616 167.742 110.296 160.254 110.296ZM160.254 98.776C164.958 98.776 169.374 97.672 173.502 95.464C177.63 93.256 180.942 89.944 183.438 85.528C186.03 81.112 187.326 75.736 187.326 69.4C187.326 63.064 186.078 57.688 183.582 53.272C181.086 48.856 177.822 45.592 173.79 43.48C169.758 41.272 165.39 40.168 160.686 40.168C155.886 40.168 151.47 41.272 147.438 43.48C143.502 45.592 140.334 48.856 137.934 53.272C135.534 57.688 134.334 63.064 134.334 69.4C134.334 75.832 135.486 81.256 137.79 85.672C140.19 90.088 143.358 93.4 147.294 95.608C151.23 97.72 155.55 98.776 160.254 98.776Z"
                    stroke="white" strokeWidth="4" mask="url(#path-1-outside-1)" />
                <path
                    d="M250.491 28.792C257.307 28.792 263.259 30.28 268.347 33.256C273.531 36.232 277.371 39.976 279.867 44.488V30.088H293.115V110.728C293.115 117.928 291.579 124.312 288.507 129.88C285.435 135.544 281.019 139.96 275.259 143.128C269.595 146.296 262.971 147.88 255.387 147.88C245.019 147.88 236.379 145.432 229.467 140.536C222.555 135.64 218.475 128.968 217.227 120.52H230.187C231.627 125.32 234.603 129.16 239.115 132.04C243.627 135.016 249.051 136.504 255.387 136.504C262.587 136.504 268.443 134.248 272.955 129.736C277.563 125.224 279.867 118.888 279.867 110.728V94.168C277.275 98.776 273.435 102.616 268.347 105.688C263.259 108.76 257.307 110.296 250.491 110.296C243.483 110.296 237.099 108.568 231.339 105.112C225.675 101.656 221.211 96.808 217.947 90.568C214.683 84.328 213.051 77.224 213.051 69.256C213.051 61.192 214.683 54.136 217.947 48.088C221.211 41.944 225.675 37.192 231.339 33.832C237.099 30.472 243.483 28.792 250.491 28.792ZM279.867 69.4C279.867 63.448 278.667 58.264 276.267 53.848C273.867 49.432 270.603 46.072 266.475 43.768C262.443 41.368 257.979 40.168 253.083 40.168C248.187 40.168 243.723 41.32 239.691 43.624C235.659 45.928 232.443 49.288 230.043 53.704C227.643 58.12 226.443 63.304 226.443 69.256C226.443 75.304 227.643 80.584 230.043 85.096C232.443 89.512 235.659 92.92 239.691 95.32C243.723 97.624 248.187 98.776 253.083 98.776C257.979 98.776 262.443 97.624 266.475 95.32C270.603 92.92 273.867 89.512 276.267 85.096C278.667 80.584 279.867 75.352 279.867 69.4Z"
                    stroke="white" strokeWidth="4" mask="url(#path-1-outside-1)" />
                <path d="M366.755 8.632V109H353.651V8.632H366.755Z" stroke="white" strokeWidth="4"
                    mask="url(#path-1-outside-1)" />
                <path
                    d="M405.072 40.888V87.4C405.072 91.24 405.888 93.976 407.52 95.608C409.152 97.144 411.984 97.912 416.016 97.912H425.664V109H413.856C406.56 109 401.088 107.32 397.44 103.96C393.792 100.6 391.968 95.08 391.968 87.4V40.888H381.744V30.088H391.968V10.216H405.072V30.088H425.664V40.888H405.072Z"
                    stroke="white" strokeWidth="4" mask="url(#path-1-outside-1)" />
            </svg>
        </div>
    )
}

export default Splash
