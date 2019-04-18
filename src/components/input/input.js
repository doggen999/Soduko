import React, { useState } from 'react'
import propTypes from 'prop-types'


const Input = ({ value, handleKeyDown, handleChange }) => {
  return (<input onKeyDown={e => handleKeyDown(e)} onChange={e => handleChange(e.target.value)} value={value} />)
}

Input.propTypes = {
  value: propTypes.string,
  handleChange: propTypes.func.isRequired,
  handleKeyDown: propTypes.func.isRequired
}

export default Input