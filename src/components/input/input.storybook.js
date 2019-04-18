import React from 'react'
import { storiesOf } from '@storybook/react'

import Input from './input'


import useUserInput from '../../useUserInput'
storiesOf("Components/Input", module).add("Default input", () => {
  return (<Input handleChange={e => console.log(e)} handleKeyDown={e => console.log(e)} correctValue={4} />)
})