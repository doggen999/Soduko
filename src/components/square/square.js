import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import { useStore } from 'store/useStore'
import useUserInput from 'utils/useUserInput'

import Input from 'components/input/input'

import styles from "./style.scss";

const handleChange = (setVal, value, dispatch) => {
  dispatch({ type: 'userInput' })
  setVal(value)
}

const Square = ({ correctValue, displayValue }) => {
  // const { val, setVal, handleChange, handleKeyDown } = useUserInput()
  const [val, setVal] = useState('')
  const { state, dispatch } = useStore()

  useEffect(() => { setVal('') }, [state.initialState])

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
            <input value={val} onChange={e => { handleChange(setVal, e.target.value, dispatch) }} />
            {/* <Input
              value={val}
              handleChange={handleChange}
              handleKeyDown={handleKeyDown} /> */}
          </span>
        }
      </div>
    </div >
  )
};

Square.propTypes = {
  correctValue: PropTypes.number.isRequired,
  displayValue: PropTypes.number,
  userInput: PropTypes.bool
};

export default Square;
