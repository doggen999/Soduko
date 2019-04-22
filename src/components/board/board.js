import React from 'react'

import { useStore } from './../../store/useStore'

import Box from '../box/box'

import styles from './style.scss'

const Board = () => {
  const { state } = useStore()
  if (state.board.length !== 81) { throw new Error("Invalid input") }

  return (
    <div className={styles.board}>{Array.from({ length: 9 }).map((a, i) =>
      <Box key={`box_${i}`} displayValues={state.board.slice(i * 9, i * 9 + 9)} solutionValues={state.solution.slice(i * 9, i * 9 + 9)} />)}
    </div>)
}

export default Board