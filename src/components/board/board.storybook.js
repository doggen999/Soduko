import React from 'react'
import { storiesOf } from '@storybook/react'
import sudoku from 'sudoku'

import Board from './board'

const board = sudoku.makepuzzle()

storiesOf("Components/Board").add("Default board", () => <Board board={board} />)