import { FC } from 'react'

interface DevicesProps {
  className?: string
}

const Phone: FC<DevicesProps> = ({ className }) => {
  return (
    <svg viewBox="0 0 200 320" fill="none" className={className}>
      <rect x="46" y="160" width="108" height="9" rx="4.5" fill="#C4C4C4" />
      <rect x="46" y="185" width="108" height="9" rx="4.5" fill="#C4C4C4" />
      <rect x="46" y="210" width="108" height="9" rx="4.5" fill="#C4C4C4" />
      <rect x="46" y="210" width="108" height="9" rx="4.5" fill="#C4C4C4" />
      <rect x="46" y="77" width="108" height="67" rx="10" fill="white" />
      <path
        d="M15 49C15 30.7746 29.7746 16 48 16H164C182.225 16 197 30.7746 197 49V49H15V49Z"
        fill="white"
      />
      <rect x="36.0405" y="24" width="57.3353" height="16" rx="5" fill="#C4C4C4" />
      <path
        d="M160 20C165.304 20 170.391 22.1071 174.142 25.8579C177.893 29.6086 180 34.6957 180 40V280C180 285.304 177.893 290.391 174.142 294.142C170.391 297.893 165.304 300 160 300H40C34.6957 300 29.6086 297.893 25.8579 294.142C22.1071 290.391 20 285.304 20 280V40C20 34.6957 22.1071 29.6086 25.8579 25.8579C29.6086 22.1071 34.6957 20 40 20H160ZM40 0C29.3913 0 19.2172 4.21427 11.7157 11.7157C4.21427 19.2172 0 29.3913 0 40V280C0 290.609 4.21427 300.783 11.7157 308.284C19.2172 315.786 29.3913 320 40 320H160C170.609 320 180.783 315.786 188.284 308.284C195.786 300.783 200 290.609 200 280V40C200 29.3913 195.786 19.2172 188.284 11.7157C180.783 4.21427 170.609 0 160 0L40 0Z"
        fill="url(#paint0_linear_171_126)"
      />
      <path
        d="M100.5 290.5C105.804 290.5 110.891 288.393 114.642 284.642C118.393 280.891 120.5 275.804 120.5 270.5C120.5 265.196 118.393 260.109 114.642 256.358C110.891 252.607 105.804 250.5 100.5 250.5C95.1957 250.5 90.1086 252.607 86.3579 256.358C82.6071 260.109 80.5 265.196 80.5 270.5C80.5 275.804 82.6071 280.891 86.3579 284.642C90.1086 288.393 95.1957 290.5 100.5 290.5Z"
        fill="url(#paint1_linear_171_126)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_171_126"
          x1="100"
          y1="0"
          x2="100"
          y2="320"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F963C4" />
          <stop offset="1" stopColor="#776CEF" stopOpacity="0.4" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_171_126"
          x1="100.5"
          y1="250.5"
          x2="100.5"
          y2="290.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F963C4" />
          <stop offset="1" stopColor="#776CEF" stopOpacity="0.4" />
        </linearGradient>
      </defs>
    </svg>
  )
}

const Monitor: FC<DevicesProps> = ({ className }) => {
  return (
    <svg viewBox="0 0 320 294" fill="none" className={className}>
      <rect x="17.6" y="17.6001" width="283.2" height="27.2" fill="white" />
      <rect
        x="119.3"
        y="25.7002"
        width="53.5"
        height="7.25"
        rx="3.625"
        stroke="#C6C4C4"
      />
      <g clipPath="url(#clip0_169_74)">
        <path
          d="M195.432 34.0632C196.104 34.063 196.757 33.8378 197.287 33.4235L198.953 35.0893L199.489 34.5535L197.823 32.8877C198.238 32.3578 198.463 31.7044 198.463 31.0316C198.463 29.36 197.103 28 195.432 28C193.76 28 192.4 29.36 192.4 31.0316C192.4 32.7031 193.76 34.0632 195.432 34.0632ZM195.432 28.7579C196.686 28.7579 197.705 29.7776 197.705 31.0316C197.705 32.2855 196.686 33.3053 195.432 33.3053C194.178 33.3053 193.158 32.2855 193.158 31.0316C193.158 29.7776 194.178 28.7579 195.432 28.7579Z"
          fill="#C6C4C4"
        />
        <path
          d="M195.967 30.4958C196.11 30.6398 196.19 30.8301 196.19 31.0317H196.947C196.948 30.8325 196.909 30.6352 196.832 30.4513C196.756 30.2674 196.644 30.1004 196.503 29.96C195.929 29.387 194.934 29.387 194.361 29.96L194.896 30.4966C195.184 30.2093 195.68 30.2101 195.967 30.4958Z"
          fill="#C6C4C4"
        />
      </g>
      <rect x="202.1" y="152.9" width="84.2" height="32.6" rx="4.5" stroke="white" />
      <rect x="202.1" y="62.5" width="84.2" height="77" rx="4.5" stroke="white" />
      <rect x="33.5" y="62.5" width="46" height="123" rx="4.5" stroke="white" />
      <rect x="209.2" y="69.2002" width="70" height="25.2" rx="10" fill="white" />
      <rect x="47" y="84" width="27" height="5" rx="2.5" fill="white" />
      <rect x="47" y="94" width="27" height="5" rx="2.5" fill="white" />
      <rect x="47" y="104" width="27" height="5" rx="2.5" fill="white" />
      <rect x="47" y="114" width="27" height="5" rx="2.5" fill="white" />
      <rect x="47" y="145" width="27" height="5" rx="2.5" fill="white" />
      <rect x="47" y="156" width="27" height="5" rx="2.5" fill="white" />
      <rect x="47" y="167" width="27" height="5" rx="2.5" fill="white" />
      <rect x="102" y="62" width="86" height="12" rx="6" fill="white" />
      <rect x="209.2" y="100" width="70" height="2.8" rx="1.4" fill="#C4C4C4" />
      <rect x="264" y="27.6001" width="22.8" height="8.4" rx="4.2" fill="#C4C4C4" />
      <rect
        x="217.2"
        y="27.6001"
        width="38.4"
        height="8.4"
        rx="4.2"
        fill="#C4C4C4"
      />
      <rect x="235.2" y="160" width="24" height="1.6" rx="0.8" fill="#C4C4C4" />
      <rect
        x="235.206"
        y="164.8"
        width="42.6015"
        height="2.4"
        rx="1.2"
        transform="rotate(0.135721 235.206 164.8)"
        fill="#C4C4C4"
      />
      <rect
        x="235.206"
        y="171.2"
        width="41.7104"
        height="2.4"
        rx="1.2"
        transform="rotate(0.135721 235.206 171.2)"
        fill="#C4C4C4"
      />
      <rect
        x="235.206"
        y="177.6"
        width="41.3572"
        height="2.4"
        rx="1.2"
        transform="rotate(0.135721 235.206 177.6)"
        fill="#C4C4C4"
      />
      <rect x="209.6" y="108.4" width="70" height="2.8" rx="1.4" fill="#C4C4C4" />
      <rect x="209.2" y="116.8" width="70" height="2.8" rx="1.4" fill="#C4C4C4" />
      <rect x="209.2" y="128.8" width="29.2" height="2.8" rx="1.4" fill="#C4C4C4" />
      <circle cx="259.2" cy="130.4" r="2.4" fill="#C4C4C4" />
      <circle cx="250.4" cy="130.4" r="2.4" fill="#C4C4C4" />
      <circle cx="268" cy="130.4" r="2.4" fill="#C4C4C4" />
      <circle cx="276.8" cy="130.4" r="2.4" fill="#C4C4C4" />
      <rect x="209.6" y="158.4" width="20.8" height="20.8" rx="10" fill="white" />
      <rect x="38" y="84" width="5" height="5" rx="2.5" fill="white" />
      <rect x="38" y="94" width="5" height="5" rx="2.5" fill="white" />
      <rect x="38" y="104" width="5" height="5" rx="2.5" fill="white" />
      <rect x="38" y="114" width="5" height="5" rx="2.5" fill="white" />
      <rect x="38" y="145" width="5" height="5" rx="2.5" fill="white" />
      <rect x="38" y="156" width="5" height="5" rx="2.5" fill="white" />
      <rect x="38" y="167" width="5" height="5" rx="2.5" fill="white" />
      <rect x="38" y="130" width="36" height="1" fill="white" />
      <rect x="102" y="89" width="86" height="97" rx="5" fill="white" />
      <rect x="108" y="94" width="74" height="64" rx="5" fill="#D8D4D4" />
      <rect x="111" y="166" width="19" height="3" rx="1.5" fill="#D8D4D4" />
      <rect x="111" y="175" width="68" height="3" rx="1.5" fill="#D8D4D4" />
      <path
        d="M236.677 293.346H83.3368C80.8031 293.345 78.3641 292.382 76.5126 290.652C74.6612 288.923 73.5354 286.555 73.3627 284.027C73.19 281.499 73.9833 279 75.5823 277.034C77.1812 275.069 79.4666 273.783 81.9767 273.438L83.3368 273.345H106.671V240.037H30.0013C22.0444 240.037 14.4135 236.876 8.78716 231.25C3.16084 225.623 0 217.992 0 210.035V30.0013C0 22.0444 3.16084 14.4135 8.78716 8.78716C14.4135 3.16084 22.0444 0 30.0013 0H289.999C297.956 0 305.587 3.16084 311.213 8.78716C316.839 14.4135 320 22.0444 320 30.0013V210.035C320 217.992 316.839 225.623 311.213 231.25C305.587 236.876 297.956 240.037 289.999 240.037H213.316V273.345H236.677C239.095 273.345 241.432 274.222 243.253 275.813C245.075 277.405 246.258 279.602 246.584 281.998L246.677 283.345C246.68 285.764 245.806 288.102 244.218 289.926C242.629 291.75 240.433 292.937 238.037 293.266L236.677 293.346H83.3368H236.677ZM193.315 240.037H126.672V273.345H193.328L193.315 240.037V240.037ZM289.985 20.0008H30.0013C27.349 20.0008 24.8053 21.0544 22.9299 22.9299C21.0544 24.8053 20.0008 27.349 20.0008 30.0013V210.035C20.0008 215.569 24.481 220.036 30.0013 220.036L203.328 220.009L203.702 220.036H289.999C292.651 220.036 295.195 218.982 297.07 217.107C298.946 215.231 299.999 212.688 299.999 210.035V30.0013C299.999 27.349 298.946 24.8053 297.07 22.9299C295.195 21.0544 292.651 20.0008 289.999 20.0008H289.985Z"
        fill="url(#paint0_linear_169_74)"
      />
      <path
        d="M281.6 131.6L287.495 147.6L289.222 142.418C289.47 141.674 289.888 140.997 290.443 140.443C290.997 139.888 291.673 139.47 292.418 139.222L297.6 137.495L281.6 131.6Z"
        stroke="white"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_169_74"
          x1="160"
          y1="0"
          x2="160"
          y2="293.346"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#776CEF" />
          <stop offset="0.0001" stopColor="#F963C4" />
          <stop offset="1" stopColor="#776CEF" stopOpacity="0.4" />
        </linearGradient>
        <clipPath id="clip0_169_74">
          <rect
            width="7.2"
            height="7.2"
            fill="white"
            transform="translate(192.4 28)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

export { Phone, Monitor }
