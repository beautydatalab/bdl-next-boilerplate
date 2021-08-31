import { Story, Meta } from "@storybook/react";

import Button, { Props } from "../Button";

export default {
  title: "atoms/button/Button",
  component: Button,
  args: {
    children: "Button",
  },
} as Meta;

const DefaultTemplate: Story<Props> = (args) => (
  <Button {...args}>Button</Button>
);

export const Default = DefaultTemplate.bind({});
