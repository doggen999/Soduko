import React from 'react'
import propTypes from 'prop-types'
import Square from '../square/square';
import styles from './style.scss'

const Box = ({ displayValues, solutionValues }) => {
  if (displayValues.length !== 9) { throw new Error("Invalid input") }
  return (
    <div className={styles.box}>
      {displayValues.map((v, i) => <Square key={i} correctValue={solutionValues[i]} displayValue={v} />)}
    </div>)
}

Box.propTypes = {
  displayValues: propTypes.arrayOf(propTypes.number).isRequired,
  solutionValues: propTypes.arrayOf(propTypes.number).isRequired
}

export default Box