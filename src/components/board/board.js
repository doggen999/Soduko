import React from 'react'
import PropTypes from 'prop-types'
import styles from './style.scss'

import Box from '../box/box'

const Board = ({ displayValues, solutionValues }) => {
  if (displayValues.length !== 81) { throw new Error("Invalid input") }

  return (
    <div className={styles.board}>{Array.from({ length: 9 }).map((a, i) =>
      <Box key={`box_${i}`} displayValues={displayValues.slice(i * 9, i * 9 + 9)} solutionValues={solutionValues.slice(i * 9, i * 9 + 9)} />)}
    </div>)
}

Board.propTypes = {
  displayValues: PropTypes.arrayOf(PropTypes.number).isRequired,
  solutionValues: PropTypes.arrayOf(PropTypes.number).isRequired
}
export default Board