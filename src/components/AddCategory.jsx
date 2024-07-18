import React, { useState } from 'react'

export const AddCategory = ({ addNewCategory }) => {
  const [inputValue, setInputValue] = useState('')
  const onNewChange = ({ target }) => {
    setInputValue(target.value)
  }
  const onSubmit = (e) => {
    e.preventDefault()
    if (inputValue.trim().length <= 1) return
    addNewCategory(inputValue.trim())
  }
  return (
    <form onSubmit={onSubmit}>
      <input type='text' placeholder='introdusca nuevo'
        value={inputValue}
        onChange={onNewChange} />
    </form>
  )
}
