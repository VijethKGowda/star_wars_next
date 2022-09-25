
import axios from 'axios';
import Head from 'next/head'
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Stat = ({ value, title }) => {
  return (
    <div className="flex flex-col">
      <span className="text-sm text-yellow-400">{title}</span>
      <span className="text-white text-xl">{value}</span>
    </div>
  )
}

const FilmList = (url) => {
  const fetchFilm = () => {
    return axios.get(url.url)
  }
  const { isLoading, isError, data, error } = useQuery(['film', url.url], fetchFilm, { enabled: !!url.url })

  if (isLoading) {
    return <h2 className='text-white w-full'>Loading...</h2>
  }

  if (isError) {
    return <h2 className='text-white'>{error.message}</h2>
  }

  return (
    <div className='text-white'>
      <Disclosure as="div" key={data?.data.title} className="pt-6">
        {({ open }) => (
          <>
            <dt className="text-lg">
              <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                <span className="font-medium text-white">{data?.data.title}</span>
                <span className="ml-6 flex h-7 items-center">
                  <ChevronDownIcon
                    className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                    aria-hidden="true"
                  />
                </span>
              </Disclosure.Button>
            </dt>
            <Disclosure.Panel as="dd" className="mt-2 pr-12 flex flex-col gap-2">
              <h1 className='text-sm text-gray-400'>Directed By: <span className='text-base text-white'>{data?.data.director}</span></h1>
              <h1 className='text-sm text-gray-400'>Produced By: <span className='text-base text-white'>{data?.data.producer}</span></h1>
              <h1 className='text-sm text-gray-400'>Release Date: <span className='text-base text-white'>{data?.data.release_date}</span></h1>
              <p className="text-base text-gray-400">Opening Crawl: {data?.data.opening_crawl}</p>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  )
}

export default function Character() {
  const { query } = useRouter();

  const fetchCharacter = () => {
    return axios.get(`https://swapi.dev/api/people/${query?.id}`)
  }
  const { isLoading, isError, data, error } = useQuery(['character', query?.id], fetchCharacter, { enabled: !!query?.id })

  if (isLoading) {
    return <h2 className='text-white w-full text-center mt-10'>Loading...</h2>
  }

  if (isError) {
    return <h2 className='text-white w-full text-center mt-10'>{error.message}</h2>
  }

  return (
    <>
      <Head>
        <title>About - Spencer Sharp</title>
        <meta
          name="Character page"
          content="noindex"
        />
      </Head>

      <main className="mt-9" >
        <h1 className="text-white text-2xl sm:text-3xl ld:text-4xl font-semibold">
          {data?.data.name}
        </h1>
        <div className='mt-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-12 border bg-gray-900 border-gray-500 rounded-lg'>
          <Stat value={data?.data.height} title={"Height"} />
          <Stat value={data?.data.gender} title={"Gender"} />
          <Stat value={data?.data.mass} title={"Mass"} />
          <Stat value={data?.data.hair_color} title={"Hair Color"} />
          <Stat value={data?.data.eye_color} title={"Eye Color"} />
          <Stat value={data?.data.skin_color} title={"Skin Color"} />
          <Stat value={data?.data.birth_year} title={"Birth Year"} />
        </div>
        <div className='text-gray-200 font-semibold text-2xl mt-9'>{data?.data?.films?.length} Films of {data?.data.name}</div>
        {
          data?.data?.films?.map(item =>
            <>
              <FilmList url={item} />
            </>
          )
        }
      </main>
    </>
  )
}
