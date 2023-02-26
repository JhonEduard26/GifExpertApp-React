import { useEffect, useState } from 'react'
import { GifItem } from '../GifItem/GifItem'
import './GifGrid.css'

const baseUrl = 'https://api.giphy.com/v1/gifs/search'
const apiKey = '1Jua5nI07tRki50EhLuM08i2BFd0CBBu'

export const GifGrid = ({category}) => {
  
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${baseUrl}?api_key=${apiKey}&q=${category}&limit=5`)
        const { data } = await response.json()
        setData(data)
      } catch (error) {
        console.log(error.message)
      }
    }
    fetchData()
  }, [])

  return (
    <>
    <h2 className="Category-Title">{ category }</h2>
    {
      data.map(gif => (
        <GifItem key={gif.id} title={gif.title} image={gif.images.original}/>
      ))
    }
    </>
  )
}