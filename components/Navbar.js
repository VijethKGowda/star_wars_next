import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Button from './Button'

const Logo = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" aria-hidden="true" {...props}>
      <path fill="#FFC107" d="M47,19h-3.7c0,0,0,0,0,0c-0.1-0.1-0.1-0.1-0.2-0.2c0.9-0.7,1.5-1.8,1.5-3c0-2.1-1.7-3.8-3.8-3.8h-6h-1v1v9v0.6l-0.3-0.9l-3-9L30.2,12h-0.7h-4.2h-0.7l-0.2,0.7l-0.8,2.5V15v-2v-1h-1H9.1c-1.9,0-3.3,1.5-3.3,3.4c0,0.9,0.3,1.3,0.5,1.6l0,0l0,0c0.2,0.2,1,1.2,1.5,1.9H1H0v1v2v1h1h8.8c1.9,0,3.4-1.5,3.4-3.4c0-0.9-0.3-1.3-0.5-1.6l-1.5-2h3.5v6v1h1h2.6h1v-1v-6h3.3h0.7l-1.8,5.7L21,23h1.4h2.5h0.7l0.2-0.7l0.5-1.3h2.4l0.5,1.3l0.2,0.7H30h2.5h1.2v0h1h2.7h1v-1v-1.1c0.6,0.6,1.2,1.1,1.6,1.5c0.2,0.1,0.6,0.6,1.4,0.6H47h1v-1v-2v-1H47z M15.5,26.3l-3,9L12.3,36h-0.7H9.9H9.2l-0.2-0.7L8,32.6l-0.9,2.7L6.8,36H6.1H4.4H3.6l-0.2-0.7l-3-9L0,25h1.4h2.6h0.7l0.2,0.7l0.3,1.1l0.4-1.1L5.9,25h0.7h2.8h0.7l0.2,0.7l0.4,1.1l0.3-1.1l0.2-0.7H12h2.6H16L15.5,26.3z M41.3,25c-1.9,0-3.4,1.5-3.4,3.4c0,0.9,0.3,1.3,0.5,1.6l0,0l0,0c0.2,0.2,1,1.2,1.6,1.9h-4.5c0,0,0,0-0.1,0c0,0-0.1-0.1-0.1-0.1c0.9-0.7,1.5-1.8,1.5-3c0-2.1-1.7-3.8-3.8-3.8h-3.4H27h-1v1v9v1l-0.4-1.3l-3-9L22.4,25h-0.7h-4.2h-0.7l-0.2,0.7l-2.9,9L13.2,36h1.4H17h0.7l0.2-0.7l0.5-1.3h2.4l0.5,1.3l0.2,0.7h0.7h2.5H26h0h1h2.7h1v-1v-1.1c0.6,0.6,1.2,1.1,1.7,1.5c0.4,0.4,0.9,0.6,1.5,0.6h8.3c1.9,0,3.4-1.5,3.4-3.4c0-0.9-0.3-1.3-0.5-1.6l-1.5-2H47h1v-1v-2v-1h-1H41.3z" />
      <path d="M22.5,13c0,0-12.6,0-13.5,0c-1.3,0-2.3,1-2.3,2.4c0,0.6,0.2,0.8,0.3,1C7.3,16.8,9.1,19,9.1,19c0,0.1,0.1,0.2,0.1,0.3C9.3,19.7,9,20,8.6,20c0,0-7.6,0-7.6,0v2c0,0,8.1,0,8.8,0c1.3,0,2.4-1,2.4-2.4c0-0.6-0.2-0.8-0.3-1L10,16c0-0.1-0.1-0.2-0.1-0.3c0-0.4,0.3-0.7,0.7-0.7c0,0,5.2,0,5.2,0v7h2.6v-7h4.3V13z M29.5,13h-4.2l-2.9,9h2.5l0.7-2h3.8l0.7,2h2.5L29.5,13z M26.2,18l1.2-3.6l1.2,3.6H26.2z M43.3,20c-0.4,0-0.6-0.2-0.8-0.4c-0.5-0.6-1.1-1.1-1.1-1.1c1.2-0.3,2.1-1.4,2.1-2.7c0-1.6-1.3-2.8-2.8-2.8h-6v9h2.7v-3.4c0,0,2.3,2.2,3.3,3.1c0.1,0.1,0.4,0.3,0.8,0.3c0.3,0,5.5,0,5.5,0v-2H43.3z M37.4,15H40c0.6,0,1.1,0.4,1.1,1c0,0.6-0.5,1-1.1,1h-2.6V15z M12,26l-1.3,3.9L9.4,26H6.6l-1.4,3.9L3.9,26H1.4l3,9h1.7L8,29.5L9.9,35h1.7l3-9H12z M42.7,28c0,0,4.3,0,4.3,0v-2c0,0-4.8,0-5.7,0c-1.3,0-2.4,1-2.4,2.4c0,0.6,0.2,0.8,0.3,1c0.3,0.3,2.2,2.5,2.2,2.5c0,0.1,0.1,0.2,0.1,0.3c0,0.4-0.3,0.7-0.6,0.7c0,0-5.2,0-5.3,0c-0.4,0-0.6-0.2-0.8-0.4c-0.5-0.6-1-1.1-1-1.1c1.2-0.3,2.1-1.4,2.1-2.7c0-1.6-1.3-2.8-2.8-2.8h-3.4H27v9h2.7v-3.4c0,0,2.3,2.2,3.3,3.1c0.1,0.1,0.4,0.3,0.8,0.3c0.3,0,7.8,0,8.3,0c1.3,0,2.4-0.9,2.4-2.4c0-0.6-0.2-0.8-0.3-1L42.2,29c0-0.1-0.1-0.2-0.1-0.3C42.1,28.3,42.4,28,42.7,28z M32.3,30h-2.6v-2h2.6c0.6,0,1.1,0.4,1.1,1C33.4,29.6,32.9,30,32.3,30z M21.7,26h-4.2l-2.9,9H17l0.7-2h3.8l0.7,2h2.5L21.7,26z M18.4,31l1.2-3.6l1.2,3.6H18.4z" />
    </svg>
  )
}

const Navbar = () => {
  const { query } = useRouter();
  const [search, setSearch] = useState("")
  const [inputError, setInputError] = useState(false)
  const router = useRouter()

  const onSubmit = (e) => {
    e.preventDefault()
    if (!search) setInputError(true)
    else {
      setInputError(false)
      router.push(`/search?term=${search}`)
    }
  }

  useEffect(() => {
    if (query?.term !== undefined)
      setSearch(query?.term)
  }, [query?.term])

  useEffect(() => {
    if (search) setInputError(false)
  }, [search])

  return (
    <nav className="shadow">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-12">
        <div className="flex h-16 justify-between">
          <div className="flex px-2 lg:px-0">
            <Link href={'/'} className="flex flex-shrink-0 items-center">
              <Logo className="block w-8 sm:w-12 md:w-16 cursor-pointer" />
            </Link>
          </div>
        </div>

        <div className='flex flex-col md:flex-row mt-3 gap-4 md:gap-2'>
          <form onSubmit={onSubmit} className="w-full flex justify-between">
            <div className='w-full items-center'>
              <label htmlFor="search" className="sr-only">
                Search
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  id="search"
                  name="search"
                  onChange={(e) => { setSearch(e.target.value) }}
                  value={search}
                  autoComplete='off'
                  className="block w-full rounded-bl-md rounded-tl-md border border-blue-500 bg-black text-white py-3 pl-10 pr-3 leading-5 placeholder-gray-500 focus:border-blue-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm"
                  placeholder="Search your favorite character"
                  type="text"
                />
              </div>
            </div>
            <Button type='submit' className='text-white rounded-br-md rounded-tr-md border border-blue-500 py-2 px-5 leading-5 placeholder-gray-500 focus:border-blue-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm'>Search</Button>
          </form>
          {
            search ?
              <Button onClick={() => { setSearch(""); router.push(`/`) }} className='text-red-500 rounded-md border border-blue-500 py-3 px-4 leading-5 placeholder-gray-500 focus:border-blue-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm'>Clear</Button>
              : null
          }
        </div>
        <div className='text-red-500 text-xs p-3'>
          {
            inputError ? "Please enter search term" : ""
          }
        </div>
      </div>
    </nav >
  )
}

export default Navbar