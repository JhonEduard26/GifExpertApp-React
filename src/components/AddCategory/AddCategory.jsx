import { useRef, useState } from 'react'
import './AddCategory.css'

export const AddCategory = ({ onNewCategory }) => {
  const [userInput, setUserInput] = useState('')
  const inputRef = useRef(null)

  const onInputChange = ({ target }) => {
    setUserInput(target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault()

    const newUserValue = userInput.trim()

    if (newUserValue.length <= 1) return

    onNewCategory(newUserValue)
    setUserInput('')
    inputRef.current.focus()
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        autoComplete="off"
        autoFocus
        name="userInput"
        ref={inputRef}
        onChange={onInputChange}
        placeholder="Busca GIFS"
        type="text"
        value={userInput}
      />

      <input type="submit" value="Agregar" />
    </form>

  )
}