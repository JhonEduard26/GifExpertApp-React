import { useState } from 'react'

export const App = () => {

  const [categories, setCategories] =  useState(['dragon ball', 'one punch'])

  return (
    <div>
      <h1> Gifexpertapp </h1>

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