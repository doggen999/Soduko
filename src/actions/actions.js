import { board1, solution1, board2, solution2, board3, solution3 } from "../utils/mockdata";

export const initialState = { initialState: false, board: board1, solution: solution1 }

export const actions = {
  easy: state => ({ ...initialState, initialState: true, board: board1, solution: solution1 }),
  medium: state => ({ ...initialState, board: board2, solution: solution2 }),
  hard: state => ({ ...initialState, board: board3, solution: solution3 }),
  solve: state => ({ ...state, board: state.solution }),
  userInput: state => ({ ...state, initialState: false })
}