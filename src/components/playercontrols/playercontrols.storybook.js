import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import PlayerControls from './playercontrols'

storiesOf("Components/PlayerControls", module).add("Default Player control", () => {
  return <PlayerControls onChangeDifficulty={action("Difficulty changed")} onNewGame={action("New game")} />
})