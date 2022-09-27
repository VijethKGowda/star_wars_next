import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import axios from "axios";

// fetch all the character
const fetchCharacters = (key, pageParam = 1) => {
  let searchTerm = key.queryKey[1] ? key.queryKey[1] : null;
  return axios.get(searchTerm ?
    `https://swapi.dev/api/people/?search=${searchTerm}&page=${pageParam}` :
    `https://swapi.dev/api/people/?page=${pageParam}`)
}

export function useFetchCharacters(searchTerm) {
  return useInfiniteQuery(['characters', searchTerm], fetchCharacters, {
    getNextPageParam: (lastPage) => Number(lastPage?.data?.next?.charAt(lastPage?.data?.next?.length - 1)) || false
  })
}

// fetch single character
const fetchCharacter = (key) => {
  let id = key?.queryKey[1] ? key?.queryKey[1] : null;
  return axios.get(`https://swapi.dev/api/people/${id}`)
}

export function useFetchSingleCharacter(id) {
  return useQuery(['character', id], fetchCharacter, { enabled: !!id })
}

// fetch film api
const fetchFilms = (key) => {
  let id = key?.queryKey[1] ? key?.queryKey[1] : null;
  return axios.get(`https://swapi.dev/api/films/${id}`)
}

export function useFetchFilms(id) {
  return useQuery(['films', id], fetchFilms, { enabled: !!id })
}
