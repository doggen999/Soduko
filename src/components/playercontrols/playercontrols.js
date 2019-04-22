import React, { useState } from 'react'
import PropTypes from 'prop-types'
import RADIO_VALUES from '../../utils/constants'
import styles from './style.scss'

// TODO: Refactor radio inputs to discrete component
const PlayerControls = ({ onNewGame }) => {
  const [difficulty, setDifficulty] = useState(RADIO_VALUES.easy)
  return (
    <div className={styles.playerControls}>
      <div className={styles.fieldset}>
        <fieldset>
          <legend>Difficulty</legend>
          {/* TODO: Refactor into discrete Radiobutton components */}
          <label>
            <input
              type="radio"
              name="difficulty"
              checked={difficulty === RADIO_VALUES.easy}
              onChange={e => setDifficulty(RADIO_VALUES.easy)} />{RADIO_VALUES.easy}
          </label>
          <label>
            <input
              type="radio"
              name="difficulty"
              checked={difficulty === RADIO_VALUES.medium}
              onChange={e => setDifficulty(RADIO_VALUES.medium)} />{RADIO_VALUES.medium}
          </label>
          <label>
            <input
              type="radio"
              name="difficulty"
              checked={difficulty === RADIO_VALUES.hard}
              onChange={e => setDifficulty(RADIO_VALUES.hard)} />{RADIO_VALUES.hard}
          </label>

        </fieldset>
      </div>
      <div className={styles.newGameButton}>
        <button onClick={() => onNewGame(difficulty)}>New game</button>
      </div>
    </div >
  )
}

PlayerControls.propTypes = {
  onNewGame: PropTypes.func.isRequired
}

export default PlayerControls