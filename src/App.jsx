import { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const App = () => {

  const [categories, setCategories] = useState([])

  const onNewCategory = (value) => {
    if (categories.find(category => category === value)) return
    setCategories([value, ...categories])
  }

  return (
    <div style={{width: '516px'}}>
      <h1> Gif Expert App </h1>

      <AddCategory onNewCategory={onNewCategory} />
      {
        categories.map(category => (
          <GifGrid key={category} category={category} />
        ))
      }
    </div>
  )
}