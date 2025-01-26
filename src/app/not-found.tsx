export default function NotFound() {
  return (
    <div className='mt-16'>
      <div className='mx-auto max-w-screen-2xl px-4 md:px-8'>
        <div className='flex flex-col items-center'>
          <h2 className='mb-2 text-center text-2xl font-bold text-gray-400 md:text-3xl'>
            Page not found
          </h2>
          <p className='mb-12 max-w-screen-md text-center text-gray-400 md:text-lg'>
            The page you’re looking for doesn’t exist.
          </p>
        </div>
      </div>
    </div>
  )
}
