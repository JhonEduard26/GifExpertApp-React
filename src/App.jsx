import { useState } from 'react'
import { AddCategory } from './components/AddCategory'

export const App = () => {

  const [categories, setCategories] =  useState(['dragon ball', 'one punch'])

  return (
    <div>
      <h1> Gif Expert App </h1>

      <AddCategory onAddCategory={setCategories} categories={categories}/>
  
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