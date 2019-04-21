import React, { useState } from 'react'
import PropTypes from 'prop-types'


const Input = ({ value, handleKeyDown, handleChange }) => {
  return (<input onKeyDown={e => handleKeyDown(e)} onChange={e => handleChange(e.target.value)} value={value} />)
}

Input.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  handleKeyDown: PropTypes.func.isRequired
}

export default Input