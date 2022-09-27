
import axios from 'axios';
import Head from 'next/head'
import { useRouter } from 'next/router';
import { Fragment } from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import { useFetchCharacters } from '../api/swapi';

export default function Search() {
  const { query } = useRouter();
  const {
    isLoading,
    data,
    fetchNextPage,
    hasNextPage,
    isError,
    isFetchingNextPage,
    error,
  } = useFetchCharacters(query.term)


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
          {data?.pages.map((group, i) => {
            return (
              <Fragment key={i}>
                {group.data.results.length ? group.data.results.map((item, index) => (
                  <Card id={item.url.match(/\d+/)[0]} item={item} key={item.birth_year + index} />
                )) : <h1 className='text-white w-full text-center mt-10'>No result found for the search term.</h1>}
              </Fragment>
            )
          })}
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
