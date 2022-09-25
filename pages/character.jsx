
import axios from 'axios';
import Head from 'next/head'
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

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
  const [film, setFilm] = useState({})
  const filmApi = async (url) => {
    const { data } = await axios.get(url.url)
    setFilm(data)
  }
  useEffect(() => { filmApi(url) }, [url])
  return (
    <div className='text-white'>
      <Disclosure as="div" key={film.title} className="pt-6">
        {({ open }) => (
          <>
            <dt className="text-lg">
              <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                <span className="font-medium text-white">{film.title}</span>
                <span className="ml-6 flex h-7 items-center">
                  <ChevronDownIcon
                    className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                    aria-hidden="true"
                  />
                </span>
              </Disclosure.Button>
            </dt>
            <Disclosure.Panel as="dd" className="mt-2 pr-12 flex flex-col gap-2">
              <h1 className='text-sm text-gray-400'>Directed By: <span className='text-base text-white'>{film.director}</span></h1>
              <h1 className='text-sm text-gray-400'>Produced By: <span className='text-base text-white'>{film.producer}</span></h1>
              <h1 className='text-sm text-gray-400'>Release Date: <span className='text-base text-white'>{film.release_date}</span></h1>
              <p className="text-base text-gray-400">Opening Crawl: {film.opening_crawl}</p>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  )
}

export default function Character() {
  const { query } = useRouter();
  const [person, setPerson] = useState({})

  const personApi = async (url) => {
    const { data } = await axios.get(url)
    setPerson(data)
  }

  useEffect(() => {
    if (query?.id)
      personApi(`https://swapi.dev/api/people/${query?.id}`)
  }, [query])

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
          {person.name}
        </h1>
        <div className='mt-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-12 border bg-gray-900 border-gray-500 rounded-lg'>
          <Stat value={person.height} title={"Height"} />
          <Stat value={person.gender} title={"Gender"} />
          <Stat value={person.mass} title={"Mass"} />
          <Stat value={person.hair_color} title={"Hair Color"} />
          <Stat value={person.eye_color} title={"Eye Color"} />
          <Stat value={person.skin_color} title={"Skin Color"} />
          <Stat value={person.birth_year} title={"Birth Year"} />
        </div>
        <div className='text-gray-200 font-semibold text-2xl mt-9'>{person?.films?.length} Films of {person.name}</div>
        {
          person?.films?.map(item =>
            <>
              <FilmList url={item} />
            </>
          )
        }
      </main>
    </>
  )
}
