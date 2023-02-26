import './GifItem.css'

export const GifItem = ({ title, altText, image }) => {

  return (
    <div className="GifCard">
      <figure className="GifCard-ImageContainer">
        <img src={image.url} alt={altText} />
        <figcaption>{ title }</figcaption>
      </figure>
    </div>
  )
}