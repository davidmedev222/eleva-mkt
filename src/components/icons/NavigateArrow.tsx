interface Props {
  className: string
}

function NavigateArrow({ className }: Props) {
  return (
    <svg className={className} xmlns='http://www.w3.org/2000/svg' viewBox='0 -960 960 960' width='28' height='28'>
      <path d='M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z' />
    </svg>
  )
}

export default NavigateArrow
