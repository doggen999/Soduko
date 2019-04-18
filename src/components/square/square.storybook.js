import React from "react";

import { storiesOf } from "@storybook/react";

import Square from "./square";

storiesOf("Components/Square", module)
  .add("Default Square", () => (
    <Square displayValue={4} correctValue={4} />
  ))
  .add("Masked square", () => (
    <Square displayValue={null} correctValue={4} /*  masked={true}  */ />
  ))
  .add("User input", () => (
    <Square displayValue={null} correctValue={4} userInput={true} />
  ))
