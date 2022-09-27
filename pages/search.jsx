
import { useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';
import Head from 'next/head'
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import Button from '../components/Button';
import Card from '../components/Card';

export default function Search() {
  const { query } = useRouter();

  const searchCharacter = ({ pageParam = 1 }) => {
    return axios.get(`https://swapi.dev/api/people/?search=${query.term}&page=${pageParam}`)
  }

  const {
    isLoading,
    data,
    fetchNextPage,
    hasNextPage,
    isError,
    isFetchingNextPage
  } = useInfiniteQuery(['characters', query.term], searchCharacter, {
    getNextPageParam: (lastPage) => Number(lastPage?.data?.next?.charAt(lastPage?.data?.next?.length - 1)) || false
  }, { enabled: !!query.term })

  const allItems = useMemo(() => data?.pages?.flatMap(page => page?.data?.results || []), [data])

  if (isLoading) {
    return <h1 className='text-white w-full text-center mt-10'>Loading...</h1>
  }

  if (isError) {
    return <h1 className='text-white w-full text-center mt-10'>{error.message}</h1>
  }

  return (
    <>
      <Head>
        <title>Search</title>
        <meta
          name="search page"
          content="noindex"
        />
      </Head>
      <main className="mx-auto my-10" >
        <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {allItems.length ? allItems.map((item, index) => (
            <Card id={item.url.match(/\d+/)[0]} item={item} key={item.birth_year + index} />
          )) : <h1 className='text-white w-full text-center mt-10'>No result found for the search term.</h1>}
        </div>
        <div className="mt-10 mx-auto w-full">
          {hasNextPage ?
            <Button className="rounded-md w-full" onClick={fetchNextPage} disable={isFetchingNextPage}>
              {isFetchingNextPage ? 'Loading...' : 'Load More'}
            </Button> : null
          }
        </div>
      </main>
    </>
  )
}
