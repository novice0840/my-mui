import type { Meta, StoryObj } from "@storybook/react";
import MuiTextField from "./MuiTextField";
import TextField from "./TextField";
import StorybookWrapper from "../../common/StorybookWrapper/StorybookWrapper";

const meta = {
  title: "Input/TextField",
  component: MuiTextField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof MuiTextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "textfield-id",
    label: "textfield-label",
  },
  render: (args) => (
    <StorybookWrapper>
      <MuiTextField {...args} />
      <TextField {...args} />
    </StorybookWrapper>
  ),
};
