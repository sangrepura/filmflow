/*
  *****
  hook to fetch movies based on type e.g popular, top-rated
  ****
*/
import useSWR from 'swr'
import { apiKey, baseUrl } from '../utils/api'

export const useRequest = (id, type) => {
  const url = `${baseUrl}${type}/${id}?api_key=${apiKey}&language=en-US&append_to_response=videos,credits,similar,recommendations`

  const { data, error } = useSWR(url)

  return { data, error }
}
