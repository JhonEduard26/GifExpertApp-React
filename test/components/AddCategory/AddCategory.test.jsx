import { fireEvent, render, screen } from '@testing-library/react'
import { AddCategory } from '../../../src/components/AddCategory/AddCategory'

describe('Pruebas en el componente Add Category', () => {

  const text = 'Goku'

  it('debe de cambiar el valor del texto ', () => {
    const { getByRole } = render(<AddCategory onNewCategory={() => {}}/>)

    const input = getByRole('textbox')
    fireEvent.input(input, {target: {value: text}})

    expect(input.value).toBe('Goku')
  })
})