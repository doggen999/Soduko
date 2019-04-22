import { board1, solution1, board2, solution2, board3, solution3 } from "../utils/mockdata";

export const initialState = { board: board1, solution: solution1 }

export const actions = {
  easy: state => ({ board: board1, solution: solution1 }),
  medium: state => ({ board: board2, solution: solution2 }),
  hard: state => ({ board: board3, solution: solution3 }),
}