import PropTypes from 'prop-types'
// import './GifItem.css'

export const GifItem = ({ title, imageUrl }) => {

  return (
    <div className="GifCard">
      <figure className="GifCard-ImageContainer">
        <img src={ imageUrl } alt={ title } />
        <figcaption>{ title }</figcaption>
      </figure>
    </div>
  )
}

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired
} 