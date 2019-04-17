import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import Square from "./square";

storiesOf("Components/Square", module)
  .addDecorator(withKnobs)
  .add("Default Square", () => (
    <Square value={4} />
  ))
  .add("Masked square", () => (
    <Square value={4} masked={true} />
  ))
  .add("User input", () => (
    <Square value={4} userInput={true} />
  )).add("Wrong answer", () => <Square value={4} wrongAnswer={true} />);
