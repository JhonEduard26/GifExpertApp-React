import { useState } from 'react'

export const App = () => {

  const [categories, setCategories] =  useState(['dragon ball', 'one punch'])

  const onAddCategory = (categoryName) => {
    const item = categories.find(item => item === categoryName)
    if(item) {
      return
    }
    setCategories([categoryName, ...categories])
  }

  return (
    <div>
      <h1> Gifexpertapp </h1>
      
      <input type="text" />

      <button onClick={() => onAddCategory('inuyasha')}> Agregar </button>

      <ul>
        {
          categories.map(category => (
            <li key={category}>{category}</li>
          ))
        }
      </ul>

    </div>
  )
}