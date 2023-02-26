import { useEffect, useState } from 'react'

export const useFetch = ({ baseUrl, category, apiKey }) => {
  const [data, setData] = useState([])
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('Llamando datos...')
        const response = await fetch(`${baseUrl}?api_key=${apiKey}&q=${category}&limit=5`)
        const { data } = await response.json()
        setData(data)
      } catch (error) {
        console.log(error.message)
      }
    }
    fetchData()
  }, [])

  return data
}