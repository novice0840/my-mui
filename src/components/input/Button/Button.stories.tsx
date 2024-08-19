import type { Meta, StoryObj } from "@storybook/react";
import MuiButton from "./MuiButton";
import Button from "./Button";
import StorybookWrapper from "../../common/StorybookWrapper/StorybookWrapper";

const meta = {
  title: "Input/Button",
  component: MuiButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof MuiButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Button",
  },
  render: (args) => (
    <StorybookWrapper>
      <MuiButton {...args}>{args.label}</MuiButton>
      <Button {...args}>{args.label}</Button>
    </StorybookWrapper>
  ),
};
