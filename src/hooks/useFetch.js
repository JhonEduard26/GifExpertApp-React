import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs'

export const useFetch = (category) => {
  const [data, setData] = useState([])

  const fetchData = async () => {
    const gifs = await getGifs(category)
    setData(gifs)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return data
}