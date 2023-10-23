interface Props {
  className: string
}

function FacebookIcon({ className }: Props) {
  return (
    <svg
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      width='32'
      height='32'
      viewBox='0 0 512 509'
      fill='none'
    >
      <path
        d='M512 256C512 114.615 397.385 0 256 0C114.615 0 0 114.615 0 256C0 383.777 93.6155 489.685 216 508.89V330H151V256H216V199.6C216 135.44 254.219 100 312.695 100C340.703 100 370 105 370 105V168H337.719C305.917 168 296 187.734 296 207.979V256H367L355.65 330H296V508.89C418.384 489.685 512 383.777 512 256Z'
        fill='#1877F2'
      />
    </svg>
  )
}

export default FacebookIcon
