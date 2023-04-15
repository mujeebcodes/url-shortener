import React, { useState } from 'react'

const Input = ({onSubmit}) => {
  const [userInput, setUserInput] = useState('')

  const handleChange = (event) => {
    setUserInput(event.target.value)
  }

  const handleClick = () => {
    onSubmit(userInput)
  }

  return (
    <div>
        <input type='text' onChange={handleChange} />
        <button type='button' onClick={handleClick}>Shorten</button>
    </div>
  )
}

export default Input