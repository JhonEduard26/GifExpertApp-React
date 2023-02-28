import { render, screen } from '@testing-library/react'
import { GifItem } from '../../../src/components/GifItem/GifItem'

describe('Pruebas en el componente Gif Item', () => {

  const title = 'Batman'
  const url = 'https://batman.com/batman.jpg'

  it('debe de mostrar la imagen con el src y el alt indicado', () => {
    const { getByRole } = render(<GifItem title={ title } imageUrl={ url } />)

    const { src, alt } = getByRole('img')
    expect( src ).toBe( url )
    expect( alt ).toBe( title )
  })

  it('debe de mostrar el titulo del gif', () => {
    const { getByText } = render(<GifItem title={ title } imageUrl={ url } />)

    const textElement = getByText('Batman')
    expect(textElement).toBeTruthy()
  })
})