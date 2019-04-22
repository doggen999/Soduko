import React from "react";
import Board from './components/board/board'
import PlayerControls from './components/playercontrols/playercontrols'
import styles from "./style.scss";

import { board1, solution1 } from './mockdata'

const App = () => {
  return (
    <div className={styles.app}>
      <Board displayValues={board1} solutionValues={solution1} />
      <PlayerControls className={styles.playerControls} />
    </div>)
}

export default App;
