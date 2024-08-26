import type { Meta, StoryObj } from "@storybook/react";
import StorybookWrapper from "../../common/StorybookWrapper/StorybookWrapper";
import MuiAutocomplete from "./MuiAutocomplete";
import Autocomplete from "./Autocomplete";
import { AutocompleteRenderInputParams, TextField } from "@mui/material";

const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
];

const meta = {
  title: "Input/Autocomplete",
  component: MuiAutocomplete,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof MuiAutocomplete>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: top100Films,
    sx: { width: 300 },
    renderInput: (params: AutocompleteRenderInputParams) => (
      <TextField {...params} label="Movie2" />
    ),
  },
  render: (args) => (
    <StorybookWrapper>
      <MuiAutocomplete {...args} />
      <Autocomplete {...args} />
    </StorybookWrapper>
  ),
};
