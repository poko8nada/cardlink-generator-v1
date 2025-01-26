export const CheckListItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <li className='flex items-start space-x-3 rtl:space-x-reverse'>
      <svg
        className='shrink-0 w-5 h-5 pt-2 text-sky-600'
        aria-hidden='true'
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 16 12'
      >
        <path
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M1 5.917 5.724 10.5 15 1.5'
        />
      </svg>
      <span>{children}</span>
    </li>
  )
}

export const CheckList = ({ children }: { children: React.ReactNode }) => {
  return <ul className='space-y-4 text-lef'>{children}</ul>
}
