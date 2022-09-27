import Head from 'next/head'
import { Fragment } from 'react'
import Button from '../components/Button'
import Card from '../components/Card'
import { useFetchCharacters } from '../api/swapi'

export default function Home() {
  const {
    isLoading,
    data,
    fetchNextPage,
    hasNextPage,
    isError,
    isFetchingNextPage,
    error
  } = useFetchCharacters()

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
          {data?.pages.map((group, i) => {
            return (
              <Fragment key={i}>
                {group.data.results.length ? group.data.results.map((item, index) => (
                  <Card id={item.url.match(/\d+/)[0]} item={item} key={item.birth_year + index} />
                )) : <h1 className='text-white w-full text-center mt-10'>No character found.</h1>}
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
      </main >

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div >
  )
}
