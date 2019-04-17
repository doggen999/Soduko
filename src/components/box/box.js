import React from 'react'
import Square from '../square/square';
import styles from './style.scss'

const Box = ({ values }) => {
  if (values.length !== 9) { throw new Error("Invalid input") }
  return (
    <div className={styles.box}>
      {values.map((v, i) => <Square key={i} value={v} />)}
    </div>)
}


export default Box