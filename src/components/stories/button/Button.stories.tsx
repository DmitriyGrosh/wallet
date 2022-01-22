import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./Button";

export default {
  title: "Example/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
    color: {
      options: [
        "gray",
        "red",
        "yellow",
        "green",
        "blue",
        "indigo",
        "purple",
        "pink",
        "black",
        "white",
      ],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => {
  console.log("==========>args", args);
  return <Button {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  label: "Button",
};
