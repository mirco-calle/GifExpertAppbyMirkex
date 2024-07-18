import React, { useState } from 'react'
import { AddCategory, GifGrid } from './components'

export const GifExpertApp = () => {
  const [category, setCategory] = useState(['dragon ball'])

  const addNewCategory = (inputValue) => {
    setCategory([inputValue, ...category])
  }
  return (
    <div>
      <AddCategory addNewCategory={addNewCategory} />
      {category.map((category) =>
        <ol key={category}>
          <GifGrid key={category} category={category} />
        </ol>
      )}
    </div>
  )
}

