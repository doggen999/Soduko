import React from 'react'
import { storiesOf } from '@storybook/react'
import sudoku from 'sudoku'

import Board from './board'

const board = sudoku.makepuzzle()
const solution = sudoku.solvepuzzle(board)

// TODO When storybook works with Hooks...
/* storiesOf("Components/Board", module).add("Default board", () => <Board displayValues={board} solutionValues={solution} />) */