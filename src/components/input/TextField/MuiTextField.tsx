import { TextField, TextFieldProps } from "@mui/material";

type PickType =
  | "variant"
  | "color"
  | "disabled"
  | "error"
  | "margin"
  | "size"
  | "defaultValue"
  | "helperText"
  | "id"
  | "label";

export type MuiTextFieldProps = Pick<TextFieldProps, PickType>;

const MuiTextField = ({ ...rest }: MuiTextFieldProps) => {
  return <TextField {...rest} />;
};

export default MuiTextField;
