import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import useUserInput from 'utils/useUserInput'

import Input from 'components/input/input'

import styles from "./style.scss";

const Square = ({ correctValue, displayValue }) => {
  const { val, handleChange, handleKeyDown } = useUserInput()

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
            <Input
              value={val}
              handleChange={handleChange}
              handleKeyDown={handleKeyDown} />
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
