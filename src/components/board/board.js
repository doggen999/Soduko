import React from 'react'
import PropTypes from 'prop-types'
import styles from './style.scss'

import Box from '../box/box'

const Board = ({ board }) => {
  if (board.length !== 81) { throw new Error("Invalid input") }

  return (
    <div className={styles.board}>{Array.from({ length: 9 }).map((a, i) =>
      <Box key={`box_${i}`} values={board.slice(i * 9, i * 9 + 9)} />)}
    </div>)
}

Board.propTypes = {
  board: PropTypes.arrayOf(PropTypes.number).isRequired
}
export default Board