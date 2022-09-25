
import axios from 'axios';
import Head from 'next/head'
import { useRouter } from 'next/router';
import { useEffect, useReducer, useState } from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import { peopleReducers } from '../reducers/peopleReducers';

export default function Search() {
  const { query } = useRouter();
  const [state, dispatch] = useReducer(peopleReducers, {
    people: [],
    next_page: null,
  })

  const searchApi = async ({ ...props }) => {
    const { data } = await axios.get(props.url)
    dispatch({
      type: "ADD_PEOPLE",
      payload: props.new ? [...data.results] : [...state.people, ...data.results]
    })
    dispatch({
      type: "ADD_NEXT_PAGE",
      payload: data.next
    })
  }

  useEffect(() => {
    if (query?.term) {
      searchApi({ url: `https://swapi.dev/api/people/?search=${query.term}`, new: true })
    }
  }, [query])

  console.log("haha", state)

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
          {state?.people?.map((item, index) =>
            <Card id={item.url.match(/\d+/)[0]} item={item} key={item.birth_year + index} />
          )}
        </div>
        <div className="mt-10 mx-auto w-full">
          {state.next_page ?
            <Button
              onClick={() => { searchApi({ url: state.next_page, new: true }) }}
            >
              Load More
            </Button> :
            <div className="text-white w-full text-center text-2xl font-bold">
              {state?.people?.length === 0 ? "Loading Please Wait" : "End of the list"}
            </div>}
        </div>
      </main>
    </>
  )
}
