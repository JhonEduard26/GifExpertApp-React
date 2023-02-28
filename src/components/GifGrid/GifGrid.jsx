import { useFetch } from '../../hooks/useFetch'
import { GifItem } from '../GifItem/GifItem'
import './GifGrid.css'


export const GifGrid = ({ category }) => {

  const gifs = useFetch(category)

  return (
    <>
      <h2 className="Gif-Title">{category}</h2>
      <div className="Gif-Grid">
        {
          gifs.map(({id, title, url}) => (
            <GifItem key={ id } title={ title } imageUrl={ url } />
          ))
        }
      </div>
    </>
  )
}