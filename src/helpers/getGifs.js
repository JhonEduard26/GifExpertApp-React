const baseUrl = 'https://api.giphy.com/v1/gifs/search'
const apiKey = '1Jua5nI07tRki50EhLuM08i2BFd0CBBu'

export const getGifs = async (category) => {
  try {
    const response = await fetch(`${baseUrl}?api_key=${apiKey}&q=${category}&limit=5`)
    const { data } = await response.json()

    const gifs = data.map(({ id, title, images }) => {
      return {
        id,
        title,
        url: images.original.url
      }
    })
    return gifs

  } catch (error) {
    console.log(error.message)
  }
}