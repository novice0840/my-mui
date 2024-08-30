import { TextField, TextFieldProps } from "@mui/material";

type PickType = "id" | "label";

export type MuiTextFieldProps = Pick<TextFieldProps, PickType>;

const MuiTextField = ({ ...rest }: MuiTextFieldProps) => {
  return <TextField {...rest} />;
};

export default MuiTextField;
