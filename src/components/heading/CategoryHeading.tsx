interface Props {
  children: React.ReactNode
}

function CategoryHeading({ children }: Props) {
  return <span className='text-sm font-bold uppercase text-pink-500 sm:text-lg'>{children}</span>
}

export default CategoryHeading
