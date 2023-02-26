import './GifItem.css'

export const GifItem = ({ title, altText, image}) => {

  return (
    <div className="GifCard">
      <img src={image.url} alt={altText} />
      <p>
        {title}
      </p>
    </div>
  )
}