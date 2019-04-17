import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import styles from "./style.scss";

const Square = ({ value, masked, userInput, wrongAnswer }) => {
  return (
    <div className={classnames(styles.square, masked && styles.masked)}>
      {masked
        ? <input type="number" min="1" max="9" />
        : <span
          className={classnames(
            userInput && styles.userInput,
            wrongAnswer && styles.wrongAnswer)} >{value}</span>}
    </div >
  )
};

Square.PropTypes = {
  value: PropTypes.number.isRequired,
  masked: PropTypes.bool,
  userInput: PropTypes.bool,
  wrongAnswer: PropTypes.bool
};

export default Square;
