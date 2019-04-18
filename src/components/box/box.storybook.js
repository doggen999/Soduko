import React from 'react'
import { storiesOf } from '@storybook/react'

import sudoku from 'sudoku'

import Box from './box'

const generatedSudoku = sudoku.makepuzzle()
const displayValues = sudoku.makepuzzle().slice(0, 9)
const solutionValues = sudoku.solvepuzzle(generatedSudoku).slice(0, 9)

storiesOf("Components/Box", module).add("Default Box", () => <Box displayValues={displayValues} solutionValues={solutionValues} />)