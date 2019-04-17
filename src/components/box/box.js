import React from 'react'
import Square from '../square/square';
import styles from './style.scss'

const Box = () => {
  return (
    <div className={styles.box}>
      {Array.from({ length: 9 }).map((s, i) => <Square value={i + 1} />)}
    </div>)
}


export default Box