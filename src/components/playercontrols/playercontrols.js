import React, { useState, useCallback } from 'react'

import { useStore } from './../../store/useStore'
import RADIO_VALUES from '../../utils/constants'

import styles from './style.scss'

// TODO: Refactor radio inputs to discrete component
const PlayerControls = () => {
  const [difficulty, setDifficulty] = useState(RADIO_VALUES.easy)
  const { dispatch } = useStore()
  const newGame = useCallback(() => dispatch({ type: difficulty }, [dispatch]))
  return (
    <div className={styles.playerControls}>
      <div className={styles.fieldset}>
        <fieldset>
          <legend>Difficulty</legend>
          <label>
            <input
              type="radio"
              name="difficulty"
              checked={difficulty === RADIO_VALUES.easy}
              onChange={() => setDifficulty(RADIO_VALUES.easy)} />{RADIO_VALUES.easy}
          </label>
          <label>
            <input
              type="radio"
              name="difficulty"
              checked={difficulty === RADIO_VALUES.medium}
              onChange={() => setDifficulty(RADIO_VALUES.medium)} />{RADIO_VALUES.medium}
          </label>
          <label>
            <input
              type="radio"
              name="difficulty"
              checked={difficulty === RADIO_VALUES.hard}
              onChange={() => setDifficulty(RADIO_VALUES.hard)} />{RADIO_VALUES.hard}
          </label>

        </fieldset>
      </div>
      <div className={styles.newGameButton}>
        <button onClick={newGame}>New game</button>
      </div>
    </div >
  )
}

export default PlayerControls