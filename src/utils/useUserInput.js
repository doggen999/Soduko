import { useState } from 'react'

const useUserInput = () => {

  const [val, setVal] = useState("")

  const handleKeyDown = e => {
    if (e.keyCode === 8 || e.keyCode === 46) {
      e.stopPropagation()
      setVal('')
    }
  }

  const handleChange = val => {
    if (val > 0 && val < 10 && !isNaN(val)) {
      setVal(val)
    } else {
      console.error("Invalid input")
    }
  }

  return {
    val, handleChange, handleKeyDown
  }
}

export default useUserInput