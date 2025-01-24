export default () => {
  return (
    <footer className='mt-20'>
      <section className='container mx-auto p-4'>
        <p className='text-center text-sm text-muted'>
          <span>&copy; </span>
          <span>{new Date().getFullYear()} </span>
          <a
            href='https://pokohanada.com'
            target='_blank'
            rel='noreferrer'
            className='hover:underline text-sky-600'
          >
            PokoHanada.com
          </a>
        </p>
      </section>
    </footer>
  )
}
