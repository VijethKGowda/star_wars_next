import Head from 'next/head'
import { useMemo } from 'react'
import Button from '../components/Button'
import Card from '../components/Card'
import { useInfiniteQuery } from '@tanstack/react-query'
import axios from 'axios'

const fetchCharacters = ({ pageParam = 1 }) => {
  return axios.get(`https://swapi.dev/api/people/?page=${pageParam}`)
}

export default function Home() {
  const {
    isLoading,
    data,
    fetchNextPage,
    hasNextPage,
    isError,
    isFetchingNextPage
  } = useInfiniteQuery(['characters'], fetchCharacters, {
    getNextPageParam: (lastPage) => Number(lastPage?.data?.next?.charAt(lastPage?.data?.next?.length - 1)) || false
  })

  const allItems = useMemo(() => data?.pages?.flatMap(page => page?.data?.results || []), [data])

  if (isLoading) {
    return <h2 className='text-white w-full text-center mt-10'>Loading...</h2>
  }

  if (isError) {
    return <h2 className='text-white w-full text-center mt-10'>{error.message}</h2>
  }

  return (
    <div style={{ backgroundImage: `url(/images/Desktop.svg)` }}>
      <Head>
        <title>Star wars</title>
        <meta name="description" content="Star war characters" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mx-auto my-10" >
        <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {allItems.length ? allItems.map((item, index) => (
            <Card id={item.url.match(/\d+/)[0]} item={item} key={item.birth_year + index} />
          )) : <h1 className='text-white w-full text-center mt-10'>No character found.</h1>}
        </div>
        <div className="mt-10 mx-auto w-full">
          {hasNextPage ?
            <Button className="rounded-md w-full" onClick={() => fetchNextPage()} disable={isFetchingNextPage}>
              {isFetchingNextPage ? 'Loading...' : 'Load More'}
            </Button> : <h1 className='text-white w-full text-center mt-10'>End of the list</h1>
          }
        </div>
      </main >
    </div >
  )
}
