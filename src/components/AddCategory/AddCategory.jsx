import { useState } from 'react'
import './AddCategory.css'

export const AddCategory = ({ onAddCategory, categories }) => {
  const [userInput, setUserInput] = useState('')

  const onInputChange = ({target}) => {
    setUserInput(target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    if(userInput.trim().length <= 1) return

    if(categories.find(category => category === userInput)) {
      setUserInput('')
      return
    }

    onAddCategory((categories) => [userInput, ...categories])
    setUserInput('')
  }

  return (
    <form onSubmit={onSubmit}>
      <input 
        name="userInput"
        onChange={onInputChange}
        placeholder="Buscar imágenes"
        type="text"
        value={userInput} 
      />

      <input type="submit" value="Agregar"/>
    </form>

  )
}