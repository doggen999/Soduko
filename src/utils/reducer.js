import RADIO_VALUES from './constants'
import { board1, solution1, board2, solution2, board3, solution3 } from './mockdata'

const reducer = (state, action) => {
  switch (action.type) {
    case RADIO_VALUES.easy: return { board: board1, solution: solution1 }
    case RADIO_VALUES.medium: return { board: board2, solution: solution2 }
    case RADIO_VALUES.hard: return { board: board3, solution: solution3 }
    default: return state
  }
}
export default reducer;