
import axios from 'axios';
import Head from 'next/head'
import { useRouter } from 'next/router';
import { Fragment } from 'react';
import { useInfiniteQuery } from 'react-query';
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
    isError
  } = useInfiniteQuery(['characters', query.term], searchCharacter, {
    getNextPageParam: (lastPage) => Number(lastPage?.data?.next?.charAt(lastPage?.data?.next?.length - 1)) || false
  }, { enabled: !!query.term })


  if (isLoading) {
    return <h2 className='text-white w-full text-center mt-10'>Loading...</h2>
  }

  if (isError) {
    return <h2 className='text-white w-full text-center mt-10'>{error.message}</h2>
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
                {group.data.results.map((item, index) => (
                  <Card id={item.url.match(/\d+/)[0]} item={item} key={item.birth_year + index} />
                ))}
              </Fragment>
            )
          })}
        </div>
        <div className="mt-10 mx-auto w-full">
          {hasNextPage ?
            <Button
              onClick={() => { fetchNextPage() }}
            >
              Load More
            </Button> : null
          }
        </div>
      </main>
    </>
  )
}