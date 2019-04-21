import React from "react";
import Board from './components/board/board'
import styles from "./style.scss";

import { board1, solution1 } from './mockdata'

const App = () => <div className={styles.app}>
  <Board displayValues={board1} solutionValues={solution1} />

</div>
</div >;

export default App;
