import React from 'react'
import { storiesOf } from '@storybook/react'

import sudoku from 'sudoku'

import Box from './box'

const values = sudoku.makepuzzle().slice(0, 9)

storiesOf("Components/Box", module).add("Default Box", () => <Box values={values} />)