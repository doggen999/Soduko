import React from 'react'

import styles from './style.scss'

import Box from '../box/box'

const Board = () => { return (<div className={styles.board}>{Array.from({ length: 9 }).map((a, i) => <Box />)}</div>) }
export default Board