import { GifItem } from '../GifItem/GifItem'
import { useFetch } from '../hooks/useFetch'
import './GifGrid.css'

const baseUrl = 'https://api.giphy.com/v1/gifs/search'
const apiKey = '1Jua5nI07tRki50EhLuM08i2BFd0CBBu'

export const GifGrid = ({ category }) => {

  const data = useFetch({ baseUrl, category, apiKey })

  return (
    <>
      <h2 className="Gif-Title">{category}</h2>
      <div className="Gif-Grid">
        {
          data.map(gif => (
            <GifItem key={gif.id} title={gif.title} image={gif.images.original} />
          ))
        }
      </div>
    </>
  )
}