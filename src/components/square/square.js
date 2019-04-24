import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import { useStore } from 'store/useStore'
import styles from "./style.scss";

const Square = ({ correctValue, displayValue }) => {
  const { state, dispatch } = useStore()
  const [val, setVal] = useState('')

  useEffect(() => {
    if (state.initialState) { setVal('') }
  }, [state.initialState])

  return (
    <div className={styles.square}>
      <div className={styles.squareContent}>
        {displayValue
          ? <span>{displayValue}</span>
          : <span
            className={classnames(
              styles.userInput,
              {
                [styles.incorrect]: val != correctValue,
                [styles.correct]: val == correctValue
              })} >
            <input
              value={val}
              onKeyDown={e => {
                const keyCode = e.keyCode
                if (keyCode === 8 || keyCode === 46) {
                  e.stopPropagation()
                  setVal('')
                }
              }}
              onChange={e => {
                const val = e.target.value
                if (val > 0 && val < 10 && !isNaN(val)) {
                  setVal(val)
                  dispatch({ type: 'userInput' })
                }
              }}
            />
          </span>
        }
      </div>
    </div >
  )
};

Square.propTypes = {
  correctValue: PropTypes.number.isRequired,
  displayValue: PropTypes.number
};

export default Square;
