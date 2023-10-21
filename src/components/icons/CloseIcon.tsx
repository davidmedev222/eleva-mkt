interface Props {
  className: string
  size: number
}

function CloseIcon({ className, size }: Props) {
  return (
    <svg className={className} xmlns='http://www.w3.org/2000/svg' viewBox='0 -960 960 960' width={size} height={size}>
      <path d='m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z' />
    </svg>
  )
}

export default CloseIcon
