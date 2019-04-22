import React from "react";

import { StoreProvider } from 'store/useStore'

import Board from 'components/board/board'
import PlayerControls from 'components/playercontrols/playercontrols'
import styles from "./style.scss";

const App = () => {
  return (
    <StoreProvider>
      <div className={styles.app}>
        <Board />
        <PlayerControls className={styles.playerControls} />
      </div>
    </StoreProvider>
  )
}

export default App;
