import React, { useReducer } from "react";
import Board from './components/board/board'
import PlayerControls from './components/playercontrols/playercontrols'
import styles from "./style.scss";
import reducer from './utils/reducer'
import { board1, solution1 } from './utils/mockdata'

const App = () => {
  const [state, dispatch] = useReducer(reducer, { board: board1, solution: solution1 })
  return (
    <div className={styles.app}>
      <Board
        displayValues={state.board}
        solutionValues={state.solution} />
      <PlayerControls
        className={styles.playerControls}
        onNewGame={e => dispatch({ type: e })} />
    </div>)
}

export default App;
