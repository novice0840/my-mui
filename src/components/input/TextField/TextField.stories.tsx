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
    helperText: "hell world",
  },
  render: (args) => (
    <StorybookWrapper>
      <MuiTextField
        id="standard-error-helper-text"
        label="Error"
        defaultValue="Hello World"
        helperText="Incorrect entry."
        variant="standard"
        {...args}
      />
      <TextField {...args} />
    </StorybookWrapper>
  ),
};
